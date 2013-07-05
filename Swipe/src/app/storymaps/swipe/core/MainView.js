define(["dojo/dom-construct",
		"dojo/_base/window",
		"storymaps/swipe/core/WebApplicationData",
		// Desktop UI
		"storymaps/swipe/ui/desktop/SwipeSidePanel",
		// Mobile UI
		"storymaps/swipe/ui/mobile/MobileSwipeView",
		// Common UI
		"storymaps/swipe/ui/MapSwipe",
		"storymaps/swipe/ui/SpyGlass",
		"storymaps/swipe/core/SwipeHelper",
		"storymaps/utils/Helper",
		"dojo/has"], 
	function (
		domConstruct,
		win,
		WebApplicationData,
		SwipeSidePanel,
		MobileSwipeView,
		MapSwipe,
		SpyGlass,
		SwipeHelper,
		Helper,
		has)
	{
		return function MainView() 
		{
			var _core = null;
			var _this = this;
			
			this.init = function(core) 
			{			
				_core = core;
				
				// Do not allow builder under IE 9
				if(app.isInBuilderMode && has("ie") && has("ie") < 9) {
					_core.initError("noBuilderIE8");
					return false;
				}
			
				app.mapSwipe = new MapSwipe("#mapPanel");
				
				var lensNode = domConstruct.create("div", {
							id: "lensWidget"
						}, "mapPanel");
				app.spyGlass = new SpyGlass(WebApplicationData.getWebmaps()[1], lensNode);
			
				// Desktop UI
				app.swipeSidePanel = new SwipeSidePanel($("#swipeSidePanel"), app.isInBuilderMode);

				// Mobile UI
				app.mobileInfoWindowView = new MobileSwipeView("#infoWindowView", "#infoWindowViewCarousel");
				app.mobileLegendView = new MobileSwipeView("#legendView", "#legendViewCarousel");
				
				dojo.subscribe("CORE_UPDATE_EXTENT", this.setMapExtent);
				app.popup = [];
				app.popup[0] = new esri.dijit.Popup(
					{
						highlight:true,
						offsetX:0
	      			},
					dojo.create("div")
				);
				
				app.popup[1] = new esri.dijit.Popup(
					{
						highlight:true,
						offsetX:0
	      			},
					dojo.create("div")
				);
				
				return true;
			}
			
			this.webmapLoaded = function()
			{
				var appColors = WebApplicationData.getColors();
				var description = WebApplicationData.getDescription();
				var legend = WebApplicationData.getLegend();
				var descriptionText = WebApplicationData.getSidePanelDescription();
				
				loadingIndicator.setMessage(i18n.viewer.loading.step3);
				
				if(description == null)
					description = true;
				if(legend == null)
					legend = true;
				if( ! descriptionText && app.isInBuilderMode )
					descriptionText = i18n.builder.header.editMe;
				
				app.swipeSidePanel.init(
					descriptionText, 
					appColors[1], 
					appColors[0], 
					description, 
					legend, 
					WebApplicationData.getLayers()
				);
			
				if (dojo.isIE == undefined || dojo.isIE > 8) {
					app.mobileInfoWindowView.init(
						[
							$('#infoView-mobile1'),
							$('#infoView-mobile0') 
						], 
						appColors[1]
					);
					app.mobileLegendView.init(
						[
							"<div id='legendView2'></div>", 
							"<div id='legendView1'></div>"
						],
						appColors[1]
					);
				}
				
				_this.setMapExtent(Helper.getWebMapExtentFromItem(app.data.getWebMapItem().item)).then(function()
				{
					if(app.maps.length == 2 && app.maps[0].spatialReference.wkid != app.maps[1].spatialReference.wkid){
						_core.appInitComplete();
						$('#projectionPopup').modal();
						return
					}
					if (WebApplicationData.getLayout() == "spyglass") 
						app.spyGlass.startup(
							WebApplicationData.getWebmaps()[1], 
							$('#lensWidget'), 
							WebApplicationData.getPopupColors(), 
							WebApplicationData.getPopupTitles(), 
							app.mode,
							WebApplicationData.getLayers(),
							! SwipeHelper.isOnMobileView() && (description || legend) ? 350 / 2 : 0
						);
					else {
						app.mapSwipe.init(
							app.maps, 
							WebApplicationData.getLayers(), 
							WebApplicationData.getPopupColors(), 
							WebApplicationData.getPopupTitles(),
							! SwipeHelper.isOnMobileView() && (description || legend) ? 350 / 2 : 0
						);
					}
					
					if( app.mode == "TWO_WEBMAPS" ) {
						var handler = dojo.connect(app.maps[1], "onExtentChange", function(){
							dojo.disconnect(handler);
							setTimeout(function(){
							 	_core.appInitComplete();
							}, WebApplicationData.getLayout() == "spyglass" ? 3000 : 1000);
						});
					}
					else {
						setTimeout(function(){
						 	_core.appInitComplete();
						}, WebApplicationData.getLayout() == "spyglass" ? 2000 : 500);
					}
				});
			}
			
			this.appInitComplete = function()
			{
				_core.displayApp();
				if (WebApplicationData && !WebApplicationData.getLegend() && !WebApplicationData.getDescription() || (!configOptions.legend && !configOptions.description)) {
					$("#mainMap1_zoom_slider").addClass('closed');
					$("#mainMap0_zoom_slider").addClass('closed');
					$("#mainMap_zoom_location").addClass('closed');
				}
				else
					$("#mainMap1_zoom_slider").addClass('open');
					$("#mainMap0_zoom_slider").addClass('open');
					$("#mainMap_zoom_location").addClass('open')
			}
			
			this.onHashChange = function()
			{
				if(location.hash == "#swipe") {
					$("#leftViewLink").addClass("current");
					app.mobileLegendView.show();
				}
				else if (location.hash == "#list") {
					$("#rightViewLink").addClass("current");
					app.mobileInfoWindowView.show();
				}
			}
			
			
			this.updateUI = function()
			{
				var appColors = WebApplicationData.getColors();
				app.swipeSidePanel.update(appColors[1], appColors[0]);
				app.mobileInfoWindowView.update(appColors[1]);
				app.mobileLegendView.update(appColors[1]);
			}
			
			this.resize = function(cfg)
			{
				if( app.initInProgress ) {
					// Display the fatal error dialog box on mobile or the data popup on desktop
					$("#loadingOverlay").css("top", cfg.isMobileView ? "0px" : $("#header").height());
					$("#header").css("display", cfg.isMobileView ? "none" : "block");
					$("#fatalError").css("display", cfg.isMobileView ? "block": "none");
				}
				if(cfg.isMobileView == false)
					$('#infoWindowView').css('display', 'none')
				app.swipeSidePanel.resize(cfg.width, cfg.height);
			}
			
			//
			// Map manipulation
			//
			
			this.centerMap = function(geom, zoomLevel)
			{
				if( ! zoomLevel )			
					app.maps[0].centerAt(geom);
				else
					app.map.centerAndZoom(geom, zoomLevel);
			}
			
			this.setMapExtent = function(extent)
			{
				var mapsReady = new dojo.Deferred();
				var mapsDeferred = [];
				$.each(app.maps, function(i, map){
					mapsDeferred.push(map.setExtent(extent, true));
				});
				new dojo.DeferredList(mapsDeferred).then(function(){
					mapsReady.resolve();
				});
				return mapsReady;
			}
			
			this.zoomToDeviceLocation = function(success, geom)
			{
				if( success ) {   	
					if( app.maps[0].spatialReference.wkid == 102100 )
						geom = esri.geometry.geographicToWebMercator(geom);
					else if ( app.maps[0].spatialReference.wkid != 4326 ) {
						esri.config.defaults.geometryService.project([geom], app.maps[0].spatialReference, function(features){
							if( ! features || ! features[0] )
								return;
                                      
							_this.centerMap(features[0]);
						});
					}
                          
					_this.centerMap(geom);
				}
			}
			
			this.initLocalization = function()
			{
				// Mobile data view
				$('#infoWindowView .noData .title').html(i18n.swipe.mobileData.noData);
				$('#infoWindowView .noData .explain').html(i18n.swipe.mobileData.noDataExplain);
				$('#legendView .noData .title').html(i18n.swipe.mobileLegend.noLegend);
				
				$('#projectionPopup').find('h3').html(i18n.viewer.errors.conflictingProjectionsTitle);
				$('.projectionExplain').html(i18n.viewer.errors.conflictingProjections);
				$('#projectionPopup').find('.btnClose').html(i18n.viewer.errors.cpButton);
			}
		}
	}
);
