define(["esri/arcgis/Portal",
		"storymaps/swipe/core/WebApplicationData",
		"storymaps/builder/BuilderPanel",
		"storymaps/builder/SettingsPopup",
		"storymaps/swipe/builder/InitPopup",
		"storymaps/swipe/core/SwipeHelper",
		"storymaps/utils/Helper",
		"storymaps/utils/WebMapHelper",
		"dojo/_base/lang",
		"dojo/has",
		"esri/IdentityManager",
		"esri/request",
		"dojo/topic",
		"dojo/on"],
	function(
		esriPortal, 
		WebApplicationData, 
		BuilderPanel, 
		SettingsPopup, 
		InitPopup, 
		SwipeHelper, 
		Helper, 
		WebMapHelper,
		lang, 
		has,
		IdentityManager,
		esriRequest,
		topic,
		on)
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
			
			$(document).ready(lang.hitch(this, function(){
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
				
				topic.subscribe("BUILDER_INCREMENT_COUNTER", _builderPanel.incrementSaveCounter);	
				topic.subscribe("HEADER_EDITED", headerEdited);
				
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
			if ( ! app.portal ) {
				console.error("Fatal error - not signed in");
				appSaveFailed("APP");
				return;
			}

			app.portal.signIn().then(
				function(){
					var portalUrl = getPortalURL(),
						uid = IdentityManager.findCredential(portalUrl).userId,
						token  = IdentityManager.findCredential(portalUrl).token,
						appItem = lang.clone(app.data.getAppItem());

					// Remove properties that don't have to be committed
					delete appItem.avgRating;
					delete appItem.modified;
					delete appItem.numComments;
					delete appItem.numRatings;
					delete appItem.numViews;
					delete appItem.size;
					
					// Transform arrays
					appItem.tags = appItem.tags ? appItem.tags.join(',') : '';
           			appItem.typeKeywords = appItem.typeKeywords ? appItem.typeKeywords.join(',') : '';

					appItem = lang.mixin(appItem, {
						f: "json",
						token: token,
						overwrite: true,
						text: JSON.stringify(WebApplicationData.get())
					});

					var saveRq = esriRequest(
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
					item = lang.clone(app.data.getWebMapItem().item),
					itemData = app.data.getWebMapItem().itemData,
					uid = IdentityManager.findCredential(portalUrl).userId,
					token  = IdentityManager.findCredential(portalUrl).token;
				
				// Cleanup item data
				WebMapHelper.prepareWebmapItemForCloning({ itemData: itemData });
				
				// Transform arrays
         		item.tags = item.tags ? item.tags.join(',') : '';
        		item.typeKeywords = item.typeKeywords ? item.typeKeywords.join(',') : '';

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

				var saveRq = esriRequest(
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
			$(".esriSignInDialog").find(".dijitDialogPaneContentArea:first-child").find(":first-child").first().after("<div id='dijitDialogPaneContentAreaAtlasLoginText'>"+i18n.builder.builder.signIn+" <a href='http://" + IdentityManager._arcgisUrl + "' title='" + IdentityManager._arcgisUrl + "' target='_blank'>" + IdentityManager._arcgisUrl + "</a> "+i18n.builder.builder.signInTwo+"</div>");
			
			on(IdentityManager, "dialog-cancel", function (info){ 
				$("#builderPanel .builder-settings").popover('hide');
			});
		}
		
		function cleanApp()
		{
			if ( ! app.portal ) {
				console.error("Fatal error - not signed in");
				return;
			}

			app.portal.signIn().then(
				function(){
					var portalUrl = getPortalURL(),
						uid = IdentityManager.findCredential(portalUrl).userId,
						token  = IdentityManager.findCredential(portalUrl).token,
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

					var saveRq = esriRequest(
						{
							url: portalUrl + "/sharing/content/users/" + uid + (appItem.ownerFolder ? ("/" + appItem.ownerFolder) : "") + "/addItem",
							handleAs: 'json',
							content: appItem
						},
						{
							usePost: true
						}
					);
					
					saveRq.then(
						function(){
							console.log("Web Application data cleaned successfully");
						}, function(){
							console.log("Web Application data cleaning has failed");
						}
					);
				},
				function(error) {
					console.error("Web Application data cleaning has failed", error);
				}
			);
			
			return "Cleaning ...";
		}
		
		return {
			init: init,
			resize: resize,
			presentInitPopup: presentInitPopup
		};
	}
);