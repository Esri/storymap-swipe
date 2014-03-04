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
			saveApp,
			builderDirectCreationFirstSave,
			saveWebmap
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

				if( ! Helper.getAppID(_core.isProd()) && ! app.isDirectCreation && ! app.isGalleryCreation) {
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
		
		function appInitComplete()
		{
			_builderPanel.updateSharingStatus();
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

		function saveApp(nextFunction)
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
					
					saveRq.then(nextFunction, appSaveFailed);
				},
				function(error) {
					appSaveFailed("APP", error);
				}
			);
		}
		
		function builderDirectCreationFirstSave(title, subtitle)
		{
			if ( ! app.portal ) {
				console.error("Fatal error - not signed in");
				appSaveFailed("APP");
				return;
			}
			
			var uid = IdentityManager.findCredential(getPortalURL()).userId;
			
			// Create the app item
			app.data.setAppItem(
				lang.mixin(
					Helper.getBlankAppJSON(),
					{
						title: title,
						snippet: subtitle,
						uploaded: Date.now(),
						modified: Date.now(),
						owner: uid,
						access: 'private'
					}
				)
			);
			
			// Update the webmap item
			/*var webMapItem = app.data.getWebMapItem();
			lang.mixin(
				webMapItem.item, 
				{
					title: title,
					snippet: subtitle,
					uploaded: Date.now(),
					modified: Date.now(),
					owner: uid,
					access: 'private'
				}
			);*/

			app.portal.signIn().then(
				function(){
					saveWebmap(function(response){
						if( ! response || ! response.success ) {
							appSaveFailed("WEBMAP");
							return;
						}
						
						// Save the webmp id in the app definition
						//WebApplicationData.setWebmap(response.id);
						
						// Update the webmap item
						/*var webMapItem = app.data.getWebMapItem();
						lang.mixin(
							webMapItem.item, 
							{
								id: response.id,
								item: response.item
							}
						);*/
					
						// Save the app
						saveApp(function(response2){
							if (!response2 || !response2.success) {
								appSaveFailed("APP");
								return;
							}
							
							// Update the app item
							app.data.setAppItem(
								lang.mixin(
									app.data.getAppItem(), 
									{
										id: response2.id,
										item: response2.item,
										url: document.location.protocol + '//' + document.location.host + document.location.pathname + '?appid=' + response2.id
									}
								)
							);
							
							// Save the app a second time
							saveApp(function(response3){
								if (!response3 || !response3.success) {
									appSaveFailed("APP");
									return;
								}
								
								console.log('swipe.builder.Builder - firstSaveForDirectCreation - appid:', response3.id);
								
								appSaveSucceeded({
									success: true
								});
								app.isDirectCreationFirstSave = false;
								app.isCreationLayout = false;
								app.isCreationSpyglass = false;
								_builderPanel.updateSharingStatus();
								
								History.replaceState({}, "", "?appid=" + response3.id + "&edit");
							});
						});
					});
			},
			function(error){
				appSaveFailed("APP", error);
			});
		}
		
		//
		// Web Map save
		//
		
		function saveWebmap(nextFunction)
		{
			if( app.data.initialExtentHasBeenEdited || app.isDirectCreationFirstSave) {
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

				/*var saveRq = esriRequest(
					{
						url: portalUrl + "/sharing/content/users/" + uid + (item.ownerFolder ? ("/" + item.ownerFolder) : "") + "/addItem",
						handleAs: 'json',
						content: rqData
					},
					{
						usePost: true
					}
				);*/
				
				if (app.data.initialExtentHasBeenEdited) {
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
					nextFunction({
						success: true
					})
			}
			else
				appSaveSucceeded({success: true});
		}
		
		//
		// Sharing
		//
		
		function shareAppAndWebmap(sharingMode, callback)
		{
			// Kind of shitty
			// Can only be used to add more privilege
			
			// Looks like sharing to private imply a unshareItems request first 
 			// => don't use it that code to share private without more test
			if ( sharingMode != "public" && sharingMode != "account" )
				sharingMode = "public";
			
			// Find items to share - only if they aren't already shared to the proper level 
			var targetItems = [];
			if( sharingMode == "account" ) {
				if( app.data.getWebMapItem().item.access == "private" && app.data.getWebMapItem().item.owner == app.portal.getPortalUser().username )
 					targetItems.push(app.data.getWebMapItem().item.id);
					
				if(app.mode == "TWO_WEBMAPS"){
					if( app.data.getWebMapItem2().item.access == "private" && app.data.getWebMapItem2().item.owner == app.portal.getPortalUser().username )
 						targetItems.push(app.data.getWebMapItem2().item.id);
						
				}
				
 				if ( app.data.getAppItem().access == "private" )
 					targetItems.push(app.data.getAppItem().id);
 			}
 			else {
 				if( app.data.getWebMapItem().item.access != "public" && app.data.getWebMapItem().item.owner == app.portal.getPortalUser().username )
					targetItems.push(app.data.getWebMapItem().item.id);
					
				if (app.mode == "TWO_WEBMAPS") {
					if( app.data.getWebMapItem2().item.access != "public" && app.data.getWebMapItem2().item.owner == app.portal.getPortalUser().username )
						targetItems.push(app.data.getWebMapItem2().item.id);
				}
				if ( app.data.getAppItem().access != "public" )
					targetItems.push(app.data.getAppItem().id);
			}
			
			// Also update eventual FS if needed
			// TODO: no check if user is the owner or not
			//if ( app.data.sourceIsFS() && app.data.getFSSourceLayerItemId() ) 
				//targetItems.push(app.data.getFSSourceLayerItemId());
			
			shareItems(targetItems.join(','), sharingMode).then(function(response){
				var success = response 
					&& response.results 
					&& response.results.length == targetItems.length;
				
				if (success) {
					$.each(response.results, function(i, result){
						if( ! result.success )
							success = false;
					});
					
					app.data.getWebMapItem().item.access = sharingMode;
					app.data.getAppItem().access = sharingMode;
					_builderPanel.updateSharingStatus();
				}
				
				callback(success);
			});	
		}
		
		function shareItems(items, sharing)
		{
			var portalUrl = getPortalURL(),
				uid = IdentityManager.findCredential(portalUrl).userId,
				token  = IdentityManager.findCredential(portalUrl).token;

			var params = {
				f: "json",
				token: token,
				items: items,
				groups: '',
				everyone: '',
				account: ''
			};
			
			if ( sharing == "public" )
				params.everyone = true;
			if ( sharing == "account" )
				params.account = true;

			return esriRequest(
				{
					url: portalUrl + "/sharing/content/users/" + uid + "/shareItems",
					handleAs: 'json',
					content: params
				},
				{
					usePost: true
				}
			);
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
			_builderPanel.saveFailed(source, error);
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
			appInitComplete: appInitComplete,
			presentInitPopup: presentInitPopup,
			shareAppAndWebmap: shareAppAndWebmap
		};
	}
);