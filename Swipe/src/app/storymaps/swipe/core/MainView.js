define(["dojo/dom-construct",
		"dojo/_base/window",
		"storymaps/swipe/core/WebApplicationData",
		"esri/geometry/Extent",
		"esri/geometry/webMercatorUtils",
		// Desktop UI
		"storymaps/swipe/ui/desktop/SidePanel",
		// Mobile UI
		"storymaps/swipe/ui/mobile/MobileSwipeView",
		"storymaps/swipe/ui/mobile/Carousel",
		// Common UI
		"storymaps/swipe/ui/MapSwipe",
		"storymaps/swipe/ui/SpyGlass",		
		"storymaps/swipe/ui/desktop/SeriesPanel",
		"storymaps/swipe/core/SwipeHelper",
		"storymaps/utils/Helper",
		"dojo/has",
		"esri/config",
		"dojo/topic",
		"dojo/on",
		"dojo/Deferred",
		"dojo/DeferredList",
		"esri/dijit/Geocoder",
		"dojo/_base/lang"], 
	function (
		domConstruct,
		win,
		WebApplicationData,
		Extent,
		webMercatorUtils,
		SidePanel,
		MobileSwipeView,
		MobileCarousel,
		MapSwipe,
		SpyGlass,
		SeriesPanel,
		SwipeHelper,
		Helper,
		has,
		esriConfig,
		topic,
		on,
		Deferred,
		DeferredList,
		Geocoder,
		lang)
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
				app.sidePanel = new SidePanel($("#sidePanel"), app.isInBuilderMode);
				app.seriesPanel = new SeriesPanel('#seriesPanel', app.isInBuilderMode);

				// Mobile UI
				app.mobileInfoWindowView = new MobileSwipeView("#infoWindowView", "#infoWindowViewCarousel");
				app.mobileLegendView = new MobileSwipeView("#legendView", "#legendViewCarousel");
				app.mobileCarousel = new MobileCarousel("#footerMobile", app.isInBuilderMode);
				
				topic.subscribe("CORE_UPDATE_EXTENT", function(extent){
					app.mainMap.setExtent(extent, true);
				});
				
				// Prevent iPad vertical bounce effect
				// except on few containers that needs that
				$(document).bind(
					'touchmove',
					function(e) {
						if( ! $(e.target).parents('#legendPanel').length && ! $(e.target).parents('#descriptionPanel').length 
						&& ! $(e.target).parents('#seriesTextView').length && ! $(e.target).parents('#infoWindowView').length 
						&& ! $(e.target).parents('#legendView').length && ! $(e.target).hasClass('subtitle') )
							e.preventDefault();
					}
				);
				
				return true;
			}
			
			this.webmapLoaded = function()
			{
				var appColors = WebApplicationData.getColors();
				var description = WebApplicationData.getDescription();
				var legend = WebApplicationData.getLegend();
				var descriptionText = WebApplicationData.getSidePanelDescription();
				var layout = WebApplicationData.getLayout();
				var dataModel = app.mode;
				
				loadingIndicator.setMessage(i18n.viewer.loading.step3);
				
				if(description == null)
					description = true;
				if(legend == null)
					legend = true;
				if( ! descriptionText && app.isInBuilderMode )
					descriptionText = i18n.swipe.swipeSidePanel.editMe;
				
				app.sidePanel.init(
					descriptionText, 
					appColors[1], 
					appColors[0], 
					description, 
					legend, 
					WebApplicationData.getLayers(),
					WebApplicationData.getSeries() || configOptions.series,
					layout,
					dataModel
				);
				
				if (has("ie") == undefined || has("ie") > 8) {
					if (WebApplicationData.getPopup()) {
						app.mobileInfoWindowView.init([$('#infoView-mobile1'), $('#infoView-mobile0')], appColors[1]);
						app.isPopup = true;
					}					
					else
						$('#rightViewLink').css('display', 'none');
					
					if (WebApplicationData.getLegend()) {
						app.mobileLegendView.init(["<div id='legendView2'></div>", "<div id='legendView1'></div>"], appColors[1]);
						$('#legendView1').parent().css('overflow-y', 'auto');
						$('#legendView2').parent().css('overflow-y', 'auto');
					}
					else
						$('#leftViewLink').css('display', 'none');
				}
				
				var bookmarkExtent = null;
				if (WebApplicationData.getSeries() || (configOptions.series && configOptions.bookmarks && configOptions.bookmarks.length)) {
					var bookmarks = WebApplicationData.getSeriesBookmarks();
					bookmarkExtent = bookmarks && bookmarks.length ? bookmarks[0].extent : null;
					app.seriesPanel.init(bookmarks, appColors[0]);
					
					$('#descriptionTitle').addClass('series');
					$('#descriptionContent').addClass('series');

					if (has("ie") == undefined || has("ie") > 8) {
						app.mobileCarousel.init(bookmarks, appColors);
						app.mobileCarousel.setSelectedPoint(0);
						dojo.subscribe("CAROUSEL_SWIPE", showSeriesBookmark);
					}
				}
				else {
					$('#descriptionTitle').removeClass('series');
					$('#descriptionContent').removeClass('series');
				}
				
				if (WebApplicationData.getLocationSearch()){
					var geocoderParams = lang.mixin(
						{
							map: app.mainMap
						},
						Helper.createGeocoderOptions()
					);
					var geocoder = new Geocoder(geocoderParams, "locationSearch");
        			geocoder.startup();
				}

				// Make sure that everyone has expected size before setting the extent
				$(window).resize();
				
				_this.setMapExtent(bookmarkExtent || Helper.getWebMapExtentFromItem(app.data.getWebMapItem().item)).then(function()
				{ 
					// 2 webmaps with different projection warning
					if(app.maps.length == 2 && app.maps[0].spatialReference.wkid != app.maps[1].spatialReference.wkid){
						_core.appInitComplete();
						$('#projectionPopup').modal();
						return;
					}
					if (WebApplicationData.getLayout() == "spyglass") {
						app.spyGlass.startup(
							WebApplicationData.getWebmaps()[1], 
							$('#lensWidget'), 
							WebApplicationData.getPopupColors(), 
							WebApplicationData.getPopupTitles(), 
							app.mode,
							WebApplicationData.getLayers(), 
							!SwipeHelper.isOnMobileView() && (description || legend) ? 350 / 2 : 0,
							WebApplicationData.getPopup() 
						);
					}
					else {
						app.mapSwipe.init(
							app.mode == "TWO_LAYERS" ? [app.map] : app.maps, 
							WebApplicationData.getLayers(), 
							WebApplicationData.getPopupColors(), 
							WebApplicationData.getPopupTitles(), 
							!SwipeHelper.isOnMobileView() && (description || legend) ? 350 / 2 : 0,
							WebApplicationData.getPopup() 
						);
					}
						
					if( app.mode == "TWO_WEBMAPS" ) {
						var index = (WebApplicationData.getLayout() == "swipe") ? 0 : 1;
						on.once(app.maps[index], "extent-change", function(){
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
			
			function showSeriesBookmark(index)
			{
				app.bookmarkIndex = index;
				app.seriesPanel.showSeries(index);
				if(!$("#footerMobile").is(':visible'))
					return;
					
				app.mainMap.setExtent(WebApplicationData.getSeriesBookmarks()[index].extent)
			}
			
			this.appInitComplete = function()
			{
				_core.displayApp();
				topic.publish("SWIPE_READY");
				if (WebApplicationData && !WebApplicationData.getLegend() && !WebApplicationData.getDescription() && !WebApplicationData.getSeries()|| (!configOptions.legend && !configOptions.description && !configOptions.series)) {
					$("#mainMap1_zoom_slider").addClass('closed');
					$("#mainMap0_zoom_slider").addClass('closed');
					$("#mainMap_zoom_location").addClass('closed');
				}
				else {
					$("#mainMap1_zoom_slider").addClass('open');
					$("#mainMap0_zoom_slider").addClass('open');
					$.each($(".mapCommandLocation"), function(i, locator){
						$(locator).addClass('open');
					});
				}
				if( WebApplicationData.getGeolocator())
					$('.mapCommandLocation').show()
				else
					$('.mapCommandLocation').hide()
				
				if( app.seriesPanel )
					app.seriesPanel.appIsReady();
			}
			
			this.onHashChange = function()
			{
				$('#seriesTextView').hide();
				$('#footerMobile').hide();
				
				if (location.hash == "#swipe") {
					$("#leftViewLink").addClass("current");
					app.mobileLegendView.show();
				}
				else if (location.hash == "#list") {
					$("#rightViewLink").addClass("current");
					app.mobileInfoWindowView.show();
				}
				else if (location.hash == "#description") {
					$('#seriesTextView').show();
					$('#footerMobile').hide();
				}
			}
			
			
			this.updateUI = function()
			{
				var appColors = WebApplicationData.getColors();
				app.sidePanel.update(appColors[1], appColors[0]);
				app.mobileInfoWindowView.update(appColors[1]);
				app.mobileLegendView.update(appColors[1]);
				if( WebApplicationData.getGeolocator())
					$('.mapCommandLocation').show()
				else
					$('.mapCommandLocation').hide()									
				if( WebApplicationData.getLocationSearch())
					$('#locationSearch').show()
				else
					$('#locationSearch').hide()
			}
			
			this.resize = function(cfg)
			{
				if( app.initInProgress) {
					// Display the fatal error dialog box on mobile or the data popup on desktop
					$("#loadingOverlay").css("top", cfg.isMobileView ? "0px" : $("#header").height());
					$("#header").css("display", cfg.isMobileView ? "none" : "block");
					$("#fatalError").css("display", cfg.isMobileView ? "block": "none");
				}
				if ($('#initMapPopup').css('display') == 'block') {
					$("#header").css("display", "none");
					$('#contentPanel').css('display', 'none !important');
				}
				if(app.isDirectCreation || app.isGalleryCreation)
					$("#fatalError").css("display", cfg.isMobileView ? "block": "none");
				if (cfg.isMobileView)
					if(location.hash!=("#map"))
						location.hash = "map";
					else
						_this.onHashChange();
				if (WebApplicationData.getSeries()) {
					if (cfg.isMobileView && cfg.isOnMobileMapView) {
						$("#footerMobile").show();
						$("#seriesPanel").hide();
						if( app.mobileCarousel.started && app.mobileCarousel.needUpdate)
							app.mobileCarousel.update(WebApplicationData.getSeriesBookmarks(), WebApplicationData.getColors());
						if( app.mobileCarousel.started && !app.mobileCarousel.needUpdate)
							app.mobileCarousel.setSelectedPoint(app.bookmarkIndex || 0)
					}
					if (cfg.isMobileView && !cfg.isOnMobileMapView) {
						$("#footerMobile").hide();
						$("#seriesPanel").hide();
					}
					else if (!cfg.isMobileView){
						$("#footerMobile").hide();
						$("#seriesPanel").show();
					}
				}
				if (!WebApplicationData.getSeries() && !app.seriesPanel.started){
					$("#footerMobile").hide();
					$("#seriesPanel").hide();
				}
				if (cfg.isMobileView == false) {
					location.hash = ""
					$('#infoWindowView').css('display', 'none');
					$('#legendView').css('display', 'none');
					$("#footerMobile").hide();
					$("#seriesTextView").hide();
				}
				app.sidePanel.resize(cfg.width, cfg.height);
			}
			
			//
			// Map manipulation
			//
			
			this.centerMap = function(geom, zoomLevel)
			{
				if( ! zoomLevel )			
					app.mainMap.centerAt(geom);
				else
					app.map.centerAndZoom(geom, zoomLevel);
			}
			
			this.setMapExtent = function(extent)
			{
				var mapsReady = new Deferred();
				var mapsDeferred = [];
				var maps = app.mode == "TWO_LAYERS" ? [app.map] : app.maps
				$.each(maps, function(i, map){
					mapsDeferred.push(map.setExtent(extent, true));
				});
				new DeferredList(mapsDeferred).then(function(){
					mapsReady.resolve();
				});
				return mapsReady;
			}
			
			this.zoomToDeviceLocation = function(success, geom)
			{
				if( success ) {   	
					if( app.mainMap.spatialReference.wkid == 102100 )
						geom = webMercatorUtils.geographicToWebMercator(geom);
					else if ( app.mainMap.spatialReference.wkid != 4326 ) {
						esriConfig.defaults.geometryService.project([geom], app.mainMap.spatialReference, function(features){
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
