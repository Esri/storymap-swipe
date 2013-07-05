define(["storymaps/swipe/core/WebApplicationData",
		"storymaps/builder/BuilderPanel",
		"storymaps/builder/SettingsPopup",
		"storymaps/swipe/builder/InitPopup",
		"storymaps/swipe/core/SwipeHelper",
		"storymaps/utils/Helper",
		"dojo/_base/lang",
		"dojo/has",
		"esri/IdentityManager"],
	function(WebApplicationData, BuilderPanel, SettingsPopup, InitPopup, SwipeHelper, Helper, lang, has)
	{
		var _core = null;
		var _builderView = null;
		
		var _builderPanel = new BuilderPanel(
			$('#builderPanel'),
			saveApp
		);
		var _settingsPopup = new SettingsPopup(
				$('#settingsPopup'), 
				APPCFG.COLOR_SCHEMES, 
				APPCFG.HEADER_LOGO_URL
		);

		function init(core, builderView)
		{
			_core = core;
			_builderView = builderView;
			
			$(document).ready(dojo.hitch(this, function(){
				console.log("swipe.builder.Builder - init");

				if( ! Helper.getAppID(_core.isProd()) ) {
					console.error("swipe.builder.Builder - abort builder initialization, no appid supplied");
					return;
				}
	
				$("body").addClass("builder-mode");
				
				_builderView.init(_settingsPopup);
				_builderPanel.init(_builderView);
				
				_settingsPopup.init(_builderView);
				_settingsPopup.initLocalization();
				
				dojo.subscribe("BUILDER_INCREMENT_COUNTER", _builderPanel.incrementSaveCounter);	
				dojo.subscribe("HEADER_EDITED", headerEdited);
				
				// Reload / close confirmation if there is unsaved change
				window.onbeforeunload = function (e) {
					e = e || window.event;
					
					if( ! _builderPanel.hasPendingChange() )
						return;
					
			        if (e)
			            e.returnValue = i18n.builder.builder.closeWithPendingChange;
			
			        // Safari
			        return i18n.builder.builder.closeWithPendingChange;
			    };
			}));
			
			app.cleanApp = cleanApp;
		}
		
		function resize()
		{
			_builderPanel.resize();
			_builderView.resize();
		}
		
		//
		// Init popup
		//

		function presentInitPopup()
		{
			var initPopup = new InitPopup("#initPopup");
			initPopup.init();
			return initPopup.present();
		}
		
		//
		// Header
		//
		
		function headerEdited(param)
		{
			// Title and subtile initially comes from the web map
			// They are saved in web app data only if they are edited
			// So if they are never edited in the app, web map edition are reflected in the app			
			if( param.src == "title" ) {
				if( param.value != app.data.getWebMapItem().item.title ) {
					if( param.value != WebApplicationData.getTitle() ) {
						WebApplicationData.setTitle(param.value);
						_builderPanel.incrementSaveCounter();
					}
				}
				else
					WebApplicationData.setTitle("");
			}
			else if ( param.src == "subtitle" ) {
				if( param.value != app.data.getWebMapItem().item.snippet && param.value != i18n.builder.header.editMe ) {
					if( param.value != WebApplicationData.getSubtitle() ) {
						WebApplicationData.setSubtitle(param.value);
						_builderPanel.incrementSaveCounter();
					}
				}
				else
					WebApplicationData.setSubtitle("");
			}
		}
		
		
		
		//
		// Web mapping application save
		//

		function saveApp()
		{
			var portalUrl = getPortalURL();
			var portal = new esri.arcgis.Portal(portalUrl);

			dojo.connect(esri.id, "onDialogCreate", styleIdentityManagerForSave);
			portal.signIn().then(
				function(){
					var itemId = Helper.getAppID(_core.isProd()),
						uid = esri.id.findCredential(portalUrl).userId,
						token  = esri.id.findCredential(portalUrl).token,
						appItem = lang.clone(app.data.getAppItem());

					// Remove properties that don't have to be committed
					delete appItem.avgRating;
					delete appItem.modified;
					delete appItem.numComments;
					delete appItem.numRatings;
					delete appItem.numViews;
					delete appItem.size;

					appItem = lang.mixin(appItem, {
						f: "json",
						token: token,
						overwrite: true,
						text: JSON.stringify(WebApplicationData.get())
					});

					var saveRq = esri.request(
						{
							url: portalUrl + "/sharing/content/users/" + uid + (appItem.ownerFolder ? ("/" + appItem.ownerFolder) : "") + "/addItem",
							handleAs: 'json',
							content: appItem
						},
						{
							usePost: true
						}
					);
					
					saveRq.then(saveWebmap, appSaveFailed);
				},
				function(error) {
					appSaveFailed("APP", error);
				}
			);
		}
		
		//
		// Web Map save
		//
		
		function saveWebmap(response)
		{
			if( ! response || ! response.success )
				appSaveFailed("APP");
			
			if( app.data.initialExtentHasBeenEdited ) {
				var portalUrl = getPortalURL(),
					item = app.data.getWebMapItem().item,
					itemData = app.data.getWebMapItem().itemData,
					uid = esri.id.findCredential(portalUrl).userId,
					token  = esri.id.findCredential(portalUrl).token;
				
				// Cleanup item data
				Helper.prepareWebmapItemForCloning(itemData);

				var rqData = {
					f: 'json',
					item: item.item,
					title: item.title,
					tags: item.tags,
					extent: JSON.stringify(item.extent),
					text: JSON.stringify(itemData),
					type: item.type,
					typeKeywords: item.typeKeywords,
					overwrite: true,
					thumbnailURL: item.thumbnailURL,
					token: token
				};

				var saveRq = esri.request(
					{
						url: portalUrl + "/sharing/content/users/" + uid + (item.ownerFolder ? ("/" + item.ownerFolder) : "") + "/addItem",
						handleAs: 'json',
						content: rqData
					},
					{
						usePost: true
					}
				);

				saveRq.then(appSaveSucceeded, appSaveFailed);
			}
			else
				appSaveSucceeded(response);
		}
		
		//
		// Save callbacks
		//

		function appSaveSucceeded(response)
		{
			if (response && response.success) {
				_builderPanel.saveSucceeded();
				app.data.updateAfterSave();
			}
			else
				appSaveFailed();
		}

		function appSaveFailed(source, error)
		{
			_builderPanel.saveFailed();
			changeBuilderPanelButtonState(true);
		}
		
		//
		// Misc
		//
		
		function getPortalURL()
		{
			return configOptions.sharingurl.split('/sharing/')[0];
		}

		function styleIdentityManagerForSave()
		{
			// Hide default message
			$(".esriSignInDialog").find("#dijitDialogPaneContentAreaLoginText").css("display", "none");

			// Setup a more friendly text
			$(".esriSignInDialog").find(".dijitDialogPaneContentArea:first-child").find(":first-child").first().after("<div id='dijitDialogPaneContentAreaAtlasLoginText'>"+i18n.builder.builder.signIn+" <a href='http://" + esri.id._arcgisUrl + "' title='" + esri.id._arcgisUrl + "' target='_blank'>" + esri.id._arcgisUrl + "</a> "+i18n.builder.builder.signInTwo+"</div>");
			
			dojo.connect(esri.id, "onDialogCancel", function (info){ 
				$("#builderPanel .builder-settings").popover('hide');
			});
		}
		
		function cleanApp()
		{
			var portalUrl = getPortalURL();
			var portal = new esri.arcgis.Portal(portalUrl);

			dojo.connect(esri.id, "onDialogCreate", styleIdentityManagerForSave);
			portal.signIn().then(
				function(){
					var itemId = Helper.getAppID(_core.isProd()),
						uid = esri.id.findCredential(portalUrl).userId,
						token  = esri.id.findCredential(portalUrl).token,
						appItem = lang.clone(app.data.getAppItem());

					// Remove properties that don't have to be committed
					delete appItem.avgRating;
					delete appItem.modified;
					delete appItem.numComments;
					delete appItem.numRatings;
					delete appItem.numViews;
					delete appItem.size;

					appItem = lang.mixin(appItem, {
						f: "json",
						token: token,
						overwrite: true,
						text: JSON.stringify(WebApplicationData.getBlank())
					});

					var saveRq = esri.request(
						{
							url: portalUrl + "/sharing/content/users/" + uid + (appItem.ownerFolder ? ("/" + appItem.ownerFolder) : "") + "/addItem",
							handleAs: 'json',
							content: appItem
						},
						{
							usePost: true
						}
					);
					
					saveRq.then(saveWebmap, appSaveFailed);
				},
				function(error) {
					appSaveFailed("APP", error);
				}
			);
		}
		
		return {
			init: init,
			resize: resize,
			presentInitPopup: presentInitPopup
		};
	}
);