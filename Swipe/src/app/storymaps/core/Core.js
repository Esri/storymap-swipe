define(["esri/map",
		"esri/arcgis/Portal",
		"esri/arcgis/utils",
		"esri/dijit/Legend",
		"storymaps/utils/Helper",
		// Core
		"storymaps/swipe/core/Config",
		"storymaps/swipe/core/Data",
		"storymaps/swipe/core/WebApplicationData",
		"storymaps/swipe/core/SwipeHelper",
		// UI
		"storymaps/ui/header/Header",
		"storymaps/ui/mapCommand/MapCommand",		
		"storymaps/ui/SelectMapWidget/browse-dialog/js/BrowseIdDlg",
		// Utils
		"dojo/has",
		"esri/IdentityManager",
		"esri/config",
		"esri/tasks/GeometryService",
		"esri/request",
		"esri/urlUtils",
		"dojo/topic",
		"dojo/on",
		"dojo/_base/lang",
		"dojo/Deferred",
		"dojo/DeferredList",
		"dojo/query",
		"dijit/registry",
		"esri/dijit/Popup",
		"dojo/dom-construct",
		"dojo/aspect"],
	function(Map,
				arcgisPortal,
				arcgisUtils,
				Legend,
				Helper,
				Config,
				Data,
				WebApplicationData,
				SwipeHelper,
				Header,
				MapCommand,			
				BrowseIdDlg,
				has,
				IdentityManager,
				esriConfig,
				GeometryService,
				esriRequest,
				urlUtils,
				topic,
				on,
				lang,
				Deferred,
				DeferredList,
				query,
				registry,
				Popup,
				domConstruct,
				aspect)
	{
		/**
		 * Core
		 * @class Core
		 *
		 * Main controller
		 */
		
		// Development options
		// Values are enforced at build time
		var CONFIG = {
			environment: "TPL_ENV_DEV" // TPL_ENV_DEV || TPL_ENV_PRODUCTION
		};
		
		var _mainView = null;

		//
		// Initialization
		//

		function init(mainView, builder)
		{
			var urlParams = Helper.getUrlParams(), 
				isInBuilderMode = false,
				isDirectCreation = false,
				isCreationLayout = false
				isGalleryCreation = false;
			
			console.log("swipe.core.Core - init");
			
			_mainView = mainView;
			
			initLocalization();
			
			if (builder != null) {
				isDirectCreation = urlParams.fromScratch != null || urlParams.fromscratch != null;
				isInBuilderMode = isDirectCreation || isGalleryCreation || Helper.getAppID(isProd());
				isCreationLayout = urlParams.Layout || urlParams.layout;
				if (isCreationLayout) {
					isCreationLayout = isCreationLayout.toLowerCase();
					setTimeout(function(){
						if(isCreationLayout != "swipe" || isCreationLayout != "spyglass")
							isCreationLayout = false;
					}, 250);		
				}
			}
			
			// If browser doesn't support history and it's direct or gallery mode where the URL will have to be rewritten later
			// Redirect to a URL that the browser will be able to overwrite
			// And put a token so that we don't loop in here
			if ( ! Helper.browserSupportHistory() && (isDirectCreation || isGalleryCreation) && urlParams.ieredirected == null ) {
				window.location = document.location.protocol + "//" + document.location.host + document.location.pathname + "#" + document.location.search + "&ieredirected";
			}
			
			//var isInBuilderMode = builder != null && Helper.getAppID(isProd()) != null;

			if( ! Config.checkConfigFileIsOK() ) {
				initError("invalidConfig");
				return;
			}
			
			// Application global object
			app = {
				map: null,
				maps: [],
				mainMap: null,
				rootMapId: null,
				mapResponse: [],
				currentMapIndex: -1,
				portal: null,
				// Data model
				mode: "TWO_LAYERS",
				layout: "swipe",
				data: new Data(),
				popup: [],
				isPopup: false,
				// Builder
				builder: builder,
				isInBuilderMode: isInBuilderMode,
				isDirectCreation: isDirectCreation,
				isDirectCreationFirstSave: isDirectCreation || isGalleryCreation,
				isGalleryCreation: isGalleryCreation,
				isCreationLayout: isCreationLayout,
				// UI
				header: new Header("#header", isInBuilderMode),
				// Flags
				loadingTimeout: null,
				initInProgress: false,
				// Config
				config: {
					//
				}
			};
			
			if ( ! _mainView.init(this) )
				return;
			
			if ( true && !isProd() ) {
				on(IdentityManager, 'dialog-create', function(){
					on(IdentityManager.dialog, 'show', function(){
						IdentityManager.dialog.txtUser_.set('value', 'guest');
						IdentityManager.dialog.txtPwd_.set('value', 'guest');
						IdentityManager.dialog.btnSubmit_.onClick();
					});
				});
			}
			
			if( ! app.isDirectCreation || ! app.isGalleryCreation)
				startLoadingTimeout();

			// Sharing URL
			if ( ! configOptions.sharingurl ) {
				// Determine if hosted or on a Portal 
				var appLocation = document.location.pathname.indexOf("/apps/");
				if( appLocation == -1 )
					appLocation = document.location.pathname.indexOf("/home/");
				
				if( appLocation != -1 ) {
					// Get the portal instance name
					var instance = location.pathname.substr(0,appLocation);
					 
					configOptions.sharingurl = "//" + location.host + instance + "/sharing/content/items";
					configOptions.proxyurl =  "//" + location.host + instance +  "/sharing/proxy";
				}
				else
					configOptions.sharingurl = APPCFG.DEFAULT_SHARING_URL;					
			}
			arcgisUtils.arcgisUrl = location.protocol + configOptions.sharingurl;
			
			// Proxy URL
			if( ! configOptions.proxyurl )
				configOptions.proxyurl = APPCFG.DEFAULT_PROXY_URL;
			esriConfig.defaults.io.proxyUrl = location.protocol + configOptions.proxyurl;


			// Allow IE9 to save over HTTP
			IdentityManager && IdentityManager.setProtocolErrorHandler(function(){ return true; });
			
			// USE CORS to save the web app configuration during developement
			if( isInBuilderMode && APPCFG.CORS_SERVER ) {
				$.each(APPCFG.CORS_SERVER, function(i, server){
					esriConfig.defaults.io.corsEnabledServers.push(server);
				});
			}
						
			// Set timeout depending on the application mode
			esriConfig.defaults.io.timeout = isInBuilderMode ? APPCFG.TIMEOUT_BUILDER_REQUEST : APPCFG.TIMEOUT_VIEWER_REQUEST;
			
			// Fix for multiple twitter bootstrap popup to be open simultaneously
			$.fn.modal.Constructor.prototype.enforceFocus = function () {};
			
			// Run the app when jQuery is ready
			$(document).ready( lang.hitch(this, initStep2) );
		}

		function initStep2()
		{
			console.log("swipe.core.Core - initStep2");
		
			// Get portal info
			// If geometry, geocode service or bing maps key are defined by portal,
			// they override the configuration file values
		
			esriRequest({
                url: arcgisUtils.arcgisUrl.split('/sharing/')[0] + "/sharing/rest/portals/self",
                content: {"f": "json"},
                callbackParamName: "callback"
        	}).then(lang.hitch(this, function(response){
				var geometryServiceURL, geocodeServices;
		            
				if (commonConfig && commonConfig.helperServices) {
					if (commonConfig.helperServices.geometry && commonConfig.helperServices.geometry) 
				    	geometryServiceURL = location.protocol + commonConfig.helperServices.geometry.url;
					if (commonConfig.helperServices.geocode && commonConfig.helperServices.geocode.length && commonConfig.helperServices.geocode[0].url) 
						geocodeServices = commonConfig.helperServices.geocode;
					// Deprecated syntax
					else if (commonConfig.helperServices.geocode && commonConfig.helperServices.geocode && commonConfig.helperServices.geocode.url) 
						geocodeServices = [{
							name: "myGeocoder",
							url: commonConfig.helperServices.geocode.url
						}];
				}
				
				if (response.helperServices) {
					if (response.helperServices.geometry && response.helperServices.geometry.url) 
						geometryServiceURL = response.helperServices.geometry.url;
					
					if (response.helperServices.geocode && response.helperServices.geocode.length && response.helperServices.geocode[0].url ) 
						geocodeServices = response.helperServices.geocode;
				}
				
				esriConfig.defaults.geometryService = new GeometryService(geometryServiceURL);
				configOptions.geocodeServices = geocodeServices;
				
				if( response.bingKey )
				        commonConfig.bingMapsKey = response.bingKey;
				
				initStep3();
		    }), function(){
		            initError("portalSelf");
		    });
		}
		
		function initStep3()
		{
			console.log("swipe.core.Core - initStep3");
					
			// Initialize localization
			app.header.initLocalization();
			_mainView.initLocalization();

			$(window).resize(handleWindowResize);
			
			// Disable form submit on enter key
			$("form").bind("keydown", function(e) {
				if (e.keyCode == 13)
					return false;
			});

			var appId = Helper.getAppID(isProd());
			var webmapsIds = Helper.getWebmapsIDs(isProd()).slice(0, 2);
			WebApplicationData.setWebmaps(webmapsIds);
	
			// Basic styling in case something isn't public
			on(IdentityManager, "dialog-create", styleIdentityManager);
			
			topic.subscribe("CORE_UPDATE_UI", updateUI);
			topic.subscribe("CORE_RESIZE", handleWindowResize);
			
			loadingIndicator.setMessage(i18n.viewer.loading.step2);
			
			var isMobileView = SwipeHelper.isOnMobileView();
			if(app.isDirectCreation || app.isGalleryCreation)
				$("#fatalError").css("display", isMobileView ? "block": "none");
				
			// Load using a Web Mapping Application item
			if (appId)
				loadWebMappingApp(appId);
			else if (webmapsIds && webmapsIds.length == 2 && (!app.isDirectCreation && !app.isGalleryCreation)) 
				loadWebmapsIds(webmapsIds);
			// Load using a webmap: preview or user hosted
			else if (webmapsIds.length && (!app.isDirectCreation && !app.isGalleryCreation)) 
					loadWebMap(webmapsIds[0]);
			// Direct creation and not signed-in
			else if ((app.isDirectCreation || app.isGalleryCreation) && isProd() && !Helper.getPortalUser()) {
				redirectToSignIn();
				initError("initMobile", null, true);		
			}
			// Direct creation and signed in
			else 
				if (app.isDirectCreation || app.isGalleryCreation) {
					initError("initMobile", null, true);
					portalLogin().then(function(){
						var browseParams = {
							portal: app.portal,
							galleryType: "webmap" //valid values are webmap or group
						};
						app.browseDlg = new BrowseIdDlg(browseParams);
						$('.dijitDialogCloseIcon').css('display', 'none');
						app.builder.initMapPicker(loadWebMap);
						on(app.browseDlg._grid, "onItemClick", function(e){
							$('#initMapPopup').show();
							$('.webmap-id-input').find('input').val(app.browseDlg.selected);
							app.browseDlg.onClose();
							$('.webmap-id-input').keyup();
						});
						on(app.browseDlg, "close", function(){
							$('#initMapPopup').show();
						});
						on(app.browseDlg, "cancel", function(){
							$('#initMapPopup').show();
						});
						var dlg = registry.byId('browse-id-dialog');
						dlg._onKey = function(evt){
							if (evt.keyCode == 27) 
								dojo.stopEvent(evt);
						}
					});
				}
				else 
					initError("invalidConfigNoWebmap");
		}

		function loadWebMappingApp(appId)
		{
			console.log("swipe.core.Core - loadWebMappingApp - appId:", appId);
			
			var urlParams = urlUtils.urlToObject(document.location.search).query || {};
			var forceLogin = urlParams.forceLogin != undefined;
			
			// If forceLogin or builder
			if ( forceLogin || app.isInBuilderMode )
				portalLogin().then(
					function() {						
						loadWebMappingAppStep2(appId);
					}, 
					function() { 
						initError("notAuthorized");
					}
				);
			// Production in view mode
			else
				loadWebMappingAppStep2(appId);
		}
		
		function loadWebMappingAppStep2(appId)
		{
			// Get application item
			var itemRq = esriRequest({
				url: configOptions.sharingurl + "/" + appId + "",
				content: {
					f: "json"
				},
				callbackParamName: "callback",
				load: function (response) {
					app.data.setAppItem(response);
				},
				error: function() { }
			});

			// Get application config
			var dataRq = esriRequest({
				url: configOptions.sharingurl + "/" + appId + "/data",
				content: {
					f: "json"
				},
				callbackParamName: "callback",
				load: function (response) {
					WebApplicationData.set(response);
				},
				error: function(){ }
			});
			
			var appDeferedList = new DeferredList([itemRq, dataRq]);
			appDeferedList.then(function(){
				if (!dataRq.results || !dataRq.results[0] || !itemRq.results || !itemRq.results[0]) {
					if( itemRq.results && itemRq.results[1] && itemRq.results[1] && itemRq.results[1].httpCode == 403 )
						initError("notAuthorized");
					else
						initError("invalidApp");
					return;
				}
				var webmapsIds = WebApplicationData.getWebmaps(false);
				var webmapId = WebApplicationData.getWebmap(false);
				app.rootMapId = webmapId;
				// If in builder, check that user is app owner or org admin
				if( app.isInBuilderMode && !app.data.userIsAppOwner() ) {
					initError("notAuthorized");	
					return;
				}
				
				if (webmapsIds && webmapsIds.length == 2 && WebApplicationData.getDataModel() == "TWO_WEBMAPS")
					loadWebmapsIds(webmapsIds);
				else if (webmapId && WebApplicationData.getDataModel() && WebApplicationData.getLayers() != null)
					loadWebMap(webmapId);
				else if (webmapId && app.isInBuilderMode)
					loadWebMap(webmapId);
				else if (webmapsIds && ! app.isInBuilderMode) {
					if( app.data.userIsAppOwner() ){
						loadingIndicator.setMessage(i18n.viewer.loading.loadBuilder);
						setTimeout(function(){
							app.header.switchToBuilder();
						}, 1200);
					}
					else
						initError("noLayerView");
				}
				// ArcGIS Gallery page start the app with an appid that doesn't include a webmap
				else if (Helper.getPortalUser() || !isProd()) {
					app.isGalleryCreation = true;
					if (app.isInBuilderMode == false) {
						var appId = itemRq.results[0].id;
						History.replaceState({}, "", "?appid=" + appId +"&edit");
						location.reload(true);
					}
					
					app.isDirectCreationFirstSave = false;
					redirectToBuilderFromGallery();			
				}
				else 
					initError("invalidApp");
			});
		}
		
		function redirectToBuilderFromGallery(){
			initError("initMobile", null, true);
			// Do not allow builder under IE 9
			if(app.isInBuilderMode && has("ie") && has("ie") < 9) {
				initError("noBuilderIE8");
				return false;
			}
			portalLogin().then(function(){
				var browseParams = {
					portal: app.portal,
					galleryType: "webmap" //valid values are webmap or group
				};
				app.browseDlg = new BrowseIdDlg(browseParams);
				$('.dijitDialogCloseIcon').css('display', 'none');
				app.builder.initMapPicker(loadWebMap);
				on(app.browseDlg._grid, "onItemClick", function(e){
					$('#initMapPopup').show();
					$('.webmap-id-input').find('input').val(app.browseDlg.selected);
					app.browseDlg.onClose();
					$('.webmap-id-input').keyup();
				});
				on(app.browseDlg, "close", function(){
					$('#initMapPopup').show();
				});
				on(app.browseDlg, "cancel", function(){
					$('#initMapPopup').show();
				});
				var dlg = registry.byId('browse-id-dialog');
				dlg._onKey = function(evt){
					if (evt.keyCode == 27) 
						dojo.stopEvent(evt);
				}
			});
		}
		
		function openInitPopup()
		{
			if( app.initInProgress || $("#initPopup").is(':visible') || WebApplicationData.getDataModel() )
				return;	
			
			app.initInProgress = true;
			cleanLoadingTimeout();
			initError("initMobile", null, true);
			handleWindowResize();
			
			var resultDeferred = app.builder.presentInitPopup();
			resultDeferred.then(
				function()
				{
					app.initInProgress = false;
					prepareAppForWebmapReload();

					var webmapsIds = WebApplicationData.getWebmaps();
					var webmapId = WebApplicationData.getWebmap() || WebApplicationData.getWebmaps()[0]; //SAFE?
					if (webmapsIds && webmapsIds.length == 2 && WebApplicationData.getDataModel() == "TWO_WEBMAPS")
						loadWebmapsIds(WebApplicationData.getWebmaps());
					else
						loadWebMap(webmapId);
				},
				function()
				{
					replaceInitErrorMessage("noLayerView");
					$("#loadingOverlay").css("top", "0px");
					$("#header").css("display", "inherit");
					$("#fatalError").css("display", "block");
					
					app.initInProgress = false;
					handleWindowResize();
				}
			);
		}
		
		function portalLogin()
		{
			var resultDeferred = new Deferred();
			var portalUrl = configOptions.sharingurl.split('/sharing/')[0];
			app.portal = new arcgisPortal.Portal(portalUrl);

			on(IdentityManager, "dialog-create", styleIdentityManagerForLoad);
			
			app.portal.on("load", function(){
				app.portal.signIn().then(
					function() {
						resultDeferred.resolve();
					},
					function(error) {
						resultDeferred.reject();
					}
				);
			});
			
			return resultDeferred;
		}
		
		function loadWebmapsIds(webmapsIds)
		{
			if (WebApplicationData.getWebmaps().length == 2) {
				app.mode = "TWO_WEBMAPS";
			}
			
			var webmapsDeferred = [];
			$.each(webmapsIds, function(i, webmapId){
				webmapsDeferred.push(loadWebMap(webmapId, i));
			});
			
			new DeferredList(webmapsDeferred).then(function(){
				setTimeout(_mainView.webmapLoaded, 0);
			});
		}

		function loadWebMap(webmapId, index)
		{
			console.log("swipe.core.Core - loadWebMap - webmapId:", webmapId, index);
			
			index = index || 0;
			
			var switchCheck = false;
			
			if (index == 0 && WebApplicationData.getLayout() == "swipe" && app.mode == "TWO_WEBMAPS") {
				index = 1;
				switchCheck = true;
			}
			if( index == 1  && WebApplicationData.getLayout() == "swipe" && app.mode == "TWO_WEBMAPS" && switchCheck == false)
				index = 0;
			
			var webmapInitCallbackDone = new Deferred();
			var divId = "mainMap" + index;
			
			if( index == 1  && WebApplicationData.getLayout() == "spyglass" && app.mode == "TWO_WEBMAPS")
				divId = "lensMapNode";	

			app.popup[index] = new Popup(
				{
					highlight:true,
					offsetX:0
      			},
				domConstruct.create("div")
			);
			
			arcgisUtils.createMap(webmapId, divId, {
				mapOptions: {
					slider: divId != "lensMapNode",
					autoResize: false,
					infoWindow: app.popup[index],
					showAttribution: divId != "lensMapNode",
					usePopupManager: true
				},
				ignorePopups: false,
				bingMapsKey: commonConfig.bingMapsKey,
				editable: false
			}).then(lang.hitch(this, function(response){
				 webMapInitCallback(response, webmapInitCallbackDone);
			}), function(){
				initError("createMap");
			});

			return webmapInitCallbackDone;
		}
		
		function getWebmapIndex(webmapId)
		{
			return $.inArray(webmapId, Helper.getWebmapsIDs(isProd()));
		}

		function webMapInitCallback(response, webmapInitCallbackDone)
		{
			console.log("swipe.core.Core - webMapCallback");	

			app.mainMap = app.map;
			if( app.mode == "TWO_WEBMAPS" ){
				var index = $.inArray(response.itemInfo.item.id, WebApplicationData.getWebmaps());//getWebmapIndex(response.itemInfo.item.id);
				app.mapResponse[index] = response;
				app.maps[index] = response.map;
				app.mainMap = app.maps[0];
				if( response.itemInfo.item.id == app.rootMapId)
					app.map = response.map;
				if (index == 0) {
					app.data.setWebMapItem(response.itemInfo);
					app.maps[0] = response.map;
				}
				if (index == 1)
					app.data.setWebMapItem2(response.itemInfo);
				else {
					webmapInitCallbackDone.resolve();
				}
				
				if (WebApplicationData.getLegend() || configOptions.legend) {
						if (index == 0) {
							var legend0 = new Legend({
								map: app.maps[0],
								layerInfos: (arcgisUtils.getLegendLayers(response))
							}, "legend0");
							legend0.startup();
							hideEmptyLegend0(legend0);
						}
						else {
							var legend1 = new Legend({
								map: app.maps[1],
								layerInfos: (arcgisUtils.getLegendLayers(response))
							}, "legend1");
							legend1.startup();
						}			
						hideEmptyLegend1(legend1);
				}
					
			}
			else {
				app.map = response.map;
				app.mapResponse[0] = response;
				app.data.setWebMapItem(response.itemInfo);
				// Check that the layer is found in the webmap or select the last layer
				var layer = app.map.getLayer(WebApplicationData.getLayers()[0]) || {};
				var layerId = layer.id;
				var layersIds = (app.map.layerIds || []).concat(app.map.graphicsLayerIds);
				var layerFound = $.grep(layersIds, function(_layerId) { return _layerId == layerId; });
				
				if( ! layerFound.length ) {
					layerId = (app.map.layerIds||[]).concat(app.map.graphicsLayerIds).slice(-1);
					layer = app.map.getLayer(layerId);
					WebApplicationData.setLayers(layerId);
				}
				
				if(WebApplicationData.getLegend() || configOptions.legend){
					var layerTitle = layer && layer.arcgisProps && layer.arcgisProps.title ? layer.arcgisProps.title : (layer && layer.name ? layer.name : layer);
					var layers = arcgisUtils.getLegendLayers(response);

					var legend0Layer = $.grep(layers, function(item){
						return item.title != layerTitle;
					});
					
					var legend1Layer = $.grep(layers, function(item){
						return item.title == layerTitle;
					});
					
					var legend0 = new Legend({
							map: app.map,
							layerInfos: legend0Layer
						}, "legend0");
					legend0.startup();
					
					var legend1 = new Legend({
							map: app.map,
							layerInfos: legend1Layer
						}, "legend1");
					legend1.startup();
					
					hideEmptyLegend(legend0, legend1);
				}
			}
			
			// Initialize header
			// Title/subtitle are the first valid string from: index.html config object, web application data, web map data
			var title = configOptions.title || WebApplicationData.getTitle() || response.itemInfo.item.title;
			var subtitle = configOptions.subtitle || WebApplicationData.getSubtitle() || response.itemInfo.item.snippet;
			
			applyUILayout(WebApplicationData.getLayout() || configOptions.layout);
			handleWindowResize();

			var urlParams = urlUtils.urlToObject(document.location.search).query || {};
			var appColors = WebApplicationData.getColors();
			var logoURL = WebApplicationData.getLogoURL() || APPCFG.HEADER_LOGO_URL;
			var logoTarget = (logoURL == APPCFG.HEADER_LOGO_URL) ? APPCFG.HEADER_LOGO_TARGET : WebApplicationData.getLogoTarget();

			app.header.init(
				! app.isInBuilderMode && (APPCFG.EMBED || urlParams.embed || urlParams.embed === ''),
				title,
				subtitle,
				appColors[0],
				logoURL,
				logoTarget,
				! app.isInBuilderMode && Helper.getAppID() && (! isProd() || app.data.userIsAppOwner()),
				WebApplicationData.getHeaderLinkText() == undefined ? APPCFG.HEADER_LINK_TEXT : WebApplicationData.getHeaderLinkText(),
				WebApplicationData.getHeaderLinkURL() == undefined ? APPCFG.HEADER_LINK_URL : WebApplicationData.getHeaderLinkURL(),
				WebApplicationData.getSocial()
			);
			document.title = $('<div>' + title + '</div>').text();

			try {
				webmapInitCallbackDone.resolve();
			}
			catch(e){
				//
			}

			if( (app.isInBuilderMode || app.isDirectCreation || app.isGalleryCreation) && WebApplicationData.getWebmaps().length != 2 && ! WebApplicationData.getDataModel() ) {
				on(app.map, "update-end", openInitPopup);
				// Security
				setTimeout(openInitPopup, 5000);
				return;
			}
			else if( app.mode == "TWO_LAYERS" )
				setTimeout(_mainView.webmapLoaded, 0);
		}
		
		function hideEmptyLegend(legend0, legend1) {
 		  hideEmptyLegend0(legend0);
 		  hideEmptyLegend1(legend1);
 		}
 
 		function hideEmptyLegend0(legend0) {
 		  if (legend0 && legend0.layers.length == 0) {
 		    $("#legend0").css("display", "none");
 		    $("#legend1").css("width", "100%");
 		    //Increase width of other legend title
 		    $("#legend1 .esriLegendServiceLabel").css("width", "300px");
 		  }
 		}
 
 		function hideEmptyLegend1(legend1) {
 		  if (legend1 && legend1.layers.length == 0) {
 		    $("#legend0").css("width", "100%");
 		    $("#legend1").css("display", "none");
 		    //Increase width of other legend title
 		    $("#legend0 .esriLegendServiceLabel").css("width", "300px");
 		  }
 		}

		function appInitComplete()
		{
			console.log("swipe.core.Core - initMap");
			
			var index = 0;

			new MapCommand(
				app.mainMap, 
				function(){
					app.mainMap.setExtent(Helper.getWebMapExtentFromItem(app.data.getWebMapItem().item));
				},
				_mainView.zoomToDeviceLocation

			);
			
			if ( app.mode == "TWO_WEBMAPS" ){
				new MapCommand(
					app.maps[1], 
					function(){
						app.maps[1].setExtent(Helper.getWebMapExtentFromItem(app.data.getWebMapItem().item));
					},
					_mainView.zoomToDeviceLocation
	
				);
			}

			// Resize everything after picture has been set
			handleWindowResize();

			// On mobile, force start on the Map view except if it's the intro
			if (location.hash)
				location.hash = "map";

			// On mobile, change view based on browser history
			window.onhashchange = function(e){				
				// If no hash and there is intro data, it's init, so skip
				if( (location.hash == "" || location.hash == "#")  /*&& app.data.getIntroData()*/ )
					return;
				
				prepareMobileViewSwitch();

				if(location.hash == "#map") {
				 	$("#mapViewLink").addClass("current");
					showMobileViewMap();
					if (WebApplicationData.getSeries() && SwipeHelper.isOnMobileView())
						$('#footerMobile').show();
				}
				else
					_mainView.onHashChange();
			}
			
			_mainView.appInitComplete();
			app.builder && app.builder.appInitComplete();
		}
		
		function displayApp()
		{
			// If needed make sure that the vertical slider has it's correct height 
			if( $("#header").hasClass("hideDesktop") && $("#sliderDiv").length )
				$(window).resize();
			
			// Show the app is the timeout hasn't be fired			
			if( app.loadingTimeout != null ) {
				$("#loadingOverlay").fadeOut();
				loadingIndicator.stop();
			}
			
			cleanLoadingTimeout();
		}

		function initError(error, message, noDisplay)
		{	
			hideUI();
			cleanLoadingTimeout();
			loadingIndicator.stop();
			
			if( error == "noLayerView" ) {
				loadingIndicator.setMessage(i18n.viewer.errors[error], true);
				return;
			}
			else if ( error != "initMobile" )
				loadingIndicator.forceHide();

			$("#fatalError .error-msg").html(i18n.viewer.errors[error]);
			if( ! noDisplay ) 
				$("#fatalError").show();
		}
		
		function replaceInitErrorMessage(error)
		{
			$("#fatalError .error-msg").html(i18n.viewer.errors[error]);
		}
		
		//
		// UI
		//
		
		function applyUILayout(layout)
		{
			$("body").toggleClass("modern-layout", layout == "integrated");
		}

		/**
		 * Refresh the UI when tour points have changed
		 */
		function updateUI()
		{
			console.log("swipe.core.Core - updateUI");

			var appColors = WebApplicationData.getColors();
			
			applyUILayout(WebApplicationData.getLayout());
			
			app.header.setTitleAndSubtitle(
				WebApplicationData.getTitle() || app.data.getWebMapItem().item.title,
				WebApplicationData.getSubtitle() || app.data.getWebMapItem().item.snippet
			);
			app.header.setColor(appColors[0]);
			
			var logoURL = WebApplicationData.getLogoURL() || APPCFG.HEADER_LOGO_URL;
			app.header.setLogoInfo(
				logoURL,
				logoURL == APPCFG.HEADER_LOGO_URL ? 
					APPCFG.HEADER_LOGO_TARGET 
					: WebApplicationData.getLogoTarget()
			);
			app.header.setTopRightLink(
				WebApplicationData.getHeaderLinkText() == undefined ? APPCFG.HEADER_LINK_TEXT : WebApplicationData.getHeaderLinkText(),
				WebApplicationData.getHeaderLinkURL() == undefined ? APPCFG.HEADER_LINK_URL : WebApplicationData.getHeaderLinkURL()
			);
			app.header.setSocial(WebApplicationData.getSocial());
			
			if (app.seriesPanel) {
				app.seriesPanel.setColor(appColors[0]);
				app.mobileCarousel.setColor(appColors);
			}
			
			$('#infoWindowContent').css("background-color", appColors[1]);
							
			_mainView.updateUI();
			
			handleWindowResize();
		}

		function handleWindowResize()
		{
			var isMobileView = SwipeHelper.isOnMobileView();
			var isOnMobileMapView = $("#mapViewLink").hasClass("current");
			
			if( isMobileView )
				$("body").addClass("mobile-view");
			else
				$("body").removeClass("mobile-view");

			var widthViewport = $("body").width();
			var heightViewport = $("body").height();
			var heightHeader = $("#header").height();
			var heightSeriesPanel = $("#seriesPanel").height();
			var heightMiddle = heightViewport - heightHeader - heightSeriesPanel;
			if(isMobileView && heightSeriesPanel > 0)
				heightMiddle -= ($('#footerMobile').height() - heightSeriesPanel);
			app.header.resize(widthViewport);
			_mainView.resize({
				isMobileView: isMobileView,
				isOnMobileMapView: isOnMobileMapView,
				width: widthViewport,
				height: heightMiddle
			});

			$("#contentPanel").height(heightMiddle);
			$("#contentPanel").width(widthViewport);

			// Force a browser reflow by reading #picturePanel width 
			// Using the value computed in desktopPicturePanel.resize doesn't works
			$("#mapPanel").width( widthViewport - $("#picturePanel").width() );
			
			if (app.isInBuilderMode || app.isDirectCreation || app.isGalleryCreation){
				app.builder.resize({
					isMobileView: isMobileView
				});
			}
			
			if (! isMobileView || (isMobileView && isOnMobileMapView)){
				try {
					if ( app.map )
						app.mainMap.resize(true);
					else if ( app.maps[1] && app.mode != "TWO_WEBMAPS" && app.layout != "spyglass" )
						app.maps[1].resize(true);
				} catch( e ) { }
			}
			
			// Change esri logo size
			if( isMobileView )
				$("#mainMap .esriControlsBR > div").first().removeClass("logo-med").addClass("logo-sm");
			else
				$("#mainMap .esriControlsBR > div").first().removeClass("logo-sm").addClass("logo-med");
		}
		
		//
		// Login in dev environnement
		//
		
		function styleIdentityManager()
		{
			// Override for bootstrap conflicts
			$(".esriSignInDialog td label").siblings("br").css("display", "none");
			$(".esriSignInDialog .dijitDialogPaneContentArea div:nth(1)").css("display", "none");
			$(".esriSignInDialog .dijitReset.dijitInputInner").css("padding", "0px");
			$(".esriSignInDialog .dijitReset.dijitInputInner").css("margin-bottom", "0px");
			$(".esriSignInDialog .dijitReset.dijitInputInner").css("border", "none");
			$(".esriSignInDialog .dijitReset.dijitInputInner").css("border-radius", "0px");
			$(".esriSignInDialog .dijitReset.dijitInputInner").css("-webkit-border-radius", "0px");
			$(".esriSignInDialog .dijitReset.dijitInputInner").css("-moz-border-radius", "0px");
			$(".esriSignInDialog .dijitReset.dijitInputInner").css("box-shadow", "none");
			$(".esriSignInDialog .dijitReset.dijitInputInner").css("-webkit-box-shadow", "none");
			$(".esriSignInDialog .dijitReset.dijitInputInner").css("-moz-box-shadow", "none");
			$(".esriSignInDialog .dijitReset.dijitValidationContainer").css("display", "none");
			$(".esriSignInDialog .esriErrorMsg").css("margin-top", "10px");

			// Edit title
			$(".esriSignInDialog").find(".dijitDialogTitleBar").find(".dijitDialogTitle").first().html("Authentication is required");

			// Hide default message
			$(".esriSignInDialog").find(".dijitDialogPaneContentArea:first-child").find(":first-child").first().css("display", "none");

			// Setup a more friendly text
			$(".esriSignInDialog").find(".dijitDialogPaneContentArea:first-child").find(":first-child").first().after("<div id='dijitDialogPaneContentAreaLoginText'>Please sign in with an account on <a href='http://" + IdentityManager._arcgisUrl + "' title='" + IdentityManager._arcgisUrl + "' target='_blank'>" + IdentityManager._arcgisUrl + "</a> to access the application.</div>");
		}
		
		function styleIdentityManagerForLoad()
		{
			// Hide default message
			$(".esriSignInDialog").find("#dijitDialogPaneContentAreaLoginText").css("display", "none");

			// Setup a more friendly text
			$(".esriSignInDialog").find(".dijitDialogPaneContentArea:first-child").find(":first-child").first().after("<div id='dijitDialogPaneContentAreaAtlasLoginText'>Please sign in with an account on <a href='http://" + IdentityManager._arcgisUrl + "' title='" + IdentityManager._arcgisUrl + "' target='_blank'>" + IdentityManager._arcgisUrl + "</a> to configure this application.</div>");
		}
		
		function prepareAppForWebmapReload()
		{
			topic.publish("BUILDER_INCREMENT_COUNTER");
			if( registry.byId("legend0") )
				registry.byId("legend0").destroy();
			if( registry.byId("legend1") )
				registry.byId("legend1").destroy();
			
			$("#legendPanel").html('<div id="legend0"></div><div id="legend1"></div>');
			
			if( app.map ) {
				app.map.destroy();
				app.map = null;
			}
			if( app.maps[0] ) {
				app.maps[0].destroy();
				app.maps[0] = null;
			}
			if( app.maps[1] ) {
				app.maps[1].destroy();
				app.maps[1] = null;
			}
			
			if(app.popup[0])
				app.popup[0].destroy();
			if(app.popup[1])
				app.popup[1].destroy();
			
			$("#header").css("display", "inherit");
			$("#footer").css("display", "inherit");
			$("#fatalError").css("display", "none");
			$("#loadingOverlay").css("top", "0px");
			
			loadingIndicator.start();
			loadingIndicator.setMessage(i18n.viewer.loading.step2);
			startLoadingTimeout();
			
			handleWindowResize();
		}
		
		function redirectToSignIn()
		{
			loadingIndicator.setMessage(i18n.viewer.loading.redirectSignIn + "<br />" + i18n.viewer.loading.redirectSignIn2);
			setTimeout(function(){
				window.location = arcgisUtils.arcgisUrl.split('/sharing/')[0] 
					+ "/home/signin.html?returnUrl=" 
					+ encodeURIComponent(document.location.href);
			}, 2000);
		}
		
		function hideUI()
		{
			$("#header").hide();
			$(".mobileView").hide();
			$("#footer").hide();
			$(".modal").hide();
		}
		
		//
		// Mobile
		//

		function prepareMobileViewSwitch()
		{
			$(".mobileView").hide();
			$("#footerMobile").hide();
			$(".navBar span").removeClass("current");
		}

		function showMobileViewMap()
		{
			$("#contentPanel").show();
			$("#footerMobile").show();
			$("#mapPanel").show();
			
			handleWindowResize();
		}

		//
		// App init
		//
		
		function startLoadingTimeout()
		{
			// First view loading time before failure
			app.loadingTimeout = setTimeout(appLoadingTimeout, APPCFG.TIMEOUT_VIEWER_LOAD);
		}
		
		function cleanLoadingTimeout()
		{
			if (typeof app != "undefined" && app.loadingTimeout) {
				clearTimeout(app.loadingTimeout);
				app.loadingTimeout = null;
			}
		}
		
		function appLoadingTimeout()
		{
			// Restart the timeout if the dialog is shown or has been shown and the timeout hasn't been fired after it has been closed
			if( IdentityManager && IdentityManager.dialog && IdentityManager.dialog._alreadyInitialized && ! IdentityManager.loadingTimeoutAlreadyFired) {
				clearTimeout(app.loadingTimeout);
				startLoadingTimeout();
				// Set a flag only if the dialog isn't showned now, so next timeout will fail
				if( ! IdentityManager._busy ) 
					IdentityManager.loadingTimeoutAlreadyFired = true;
				return;
			}
			
			loadingIndicator.stop();
			loadingIndicator.setMessage(i18n.viewer.loading.fail + '<br /><button type="button" class="btn btn-medium btn-info" style="margin-top: 5px;" onclick="document.location.reload()">' + i18n.viewer.loading.failButton + '</button>', true);
			app.map && app.map.destroy();
		}
		
		function initLocalization()
		{
			query('#fatalError .error-title')[0].innerHTML = i18n.viewer.errors.boxTitle;
		}
		
		function isProd()
		{
			// Prevent the string from being replaced
			return CONFIG.environment != ['TPL','ENV','DEV'].join('_');
		}
		
		return {
			init: init,
			isProd: isProd,
			appInitComplete: appInitComplete,
			displayApp: displayApp,
			openInitPopup: openInitPopup,
			initError: initError
		};
	}
);