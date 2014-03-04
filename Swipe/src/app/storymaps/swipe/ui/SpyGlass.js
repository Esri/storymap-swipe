define(["dojo/_base/declare", 
		"dojo/_base/connect", 
		"dojo/_base/html",
		"dojo/_base/lang",

		"dojo/dnd/move",
		"dojo/has",
	
		"dojo/dom",
		"dojo/dom-attr",
		"dojo/dom-style",		
		"dojo/dom-class",
	
		"dijit/_WidgetBase", 
		"dijit/_TemplatedMixin",
		"dijit/_WidgetsInTemplateMixin",
	
		"dijit/registry",
		
		"esri/geometry/Point",
		"esri/geometry/Extent",
		"esri/geometry/Polygon",
		
		"esri/config",
		"esri/geometry/webMercatorUtils",
		"esri/geometry/screenUtils",
		"esri/geometry/ScreenPoint",
		"esri/SpatialReference",
		"dojo/on",], 
	function(
		declare, connect, html, lang,
		move, has,
		dom, domAttr, domStyle, domClass,
		WidgetBase, TemplatedMixin, WidgetsInTemplateMixin,
		registry,
		Point, Extent, Polygon,
		esriConfig, webMercatorUtils, screenUtils, ScreenPoint,
		SpatialReference,
		on
		) 
	{
		var _this = null;
		var LENS = declare([WidgetBase, TemplatedMixin, WidgetsInTemplateMixin], {
    
			templateString: '<div></div>', //template,  //Used by TemplatedMixin to point to HTML template

			_lensMap: null,
			_started: false,
			_clickPoint: null,
			_popupColors: null,
			_popupTitles: null,
			_popupColors2: [],
			_popupTitles2: [],
			_layers: null,
			_displayedPopupIndex: null,
			_spyExtent: null,
			_rightVal: null,
			_leftVal: null,
			_topVal: null,
			_bottomVal: null,
			_isGraphics: false,
			_moving: false,
			_popupClosedByUser: false,
			_clickOnLens: false,
			_popup: true,
			_mode: null,

			startup: function(webmapId, lensNode, colors, titles, mode, layers, lensCenterOffset, popup)
			{			
				_this = this;
					
				this.lensWin = "lensWin";
				
				$("#lensWin").css("display", "block");
				
				//Hide slider used in swipe method
				domStyle.set(dom.byId('sliderDiv'), "display", "none");
				
				//Needed to prevent spyglass movement from expanding window beyond map
				$('#mapPanel').css('overflowX', 'hidden');
				
				$('#infoWindowTitle').html(i18n.swipe.infoWindow.noFeature);
				$('#infoWindowContent').html('<div class="noFeature">' + i18n.swipe.infoWindow.noFeatureExplain + '</div>');
				
				_layers = layers;
				_popupColors = colors;
				_popupTitles = titles; 
				_mode = mode;
				_popup = popup;
				if(!_popup){
					$('#infoWindow').addClass('disable');
					$.each(app.popup, function(i){
						app.popup[i].destroy();
					})
				}

				_this._isGraphics = false;
				if(app.mainMap.getLayer(_layers[0]))
					_this._isGraphics = app.mainMap.getLayer(_layers[0]).type == "Feature Layer";

				// function to define the boundaries for the lens window
				// this is used in the constrainedMoveable constructor
				var mbFunction = function(){
					var coords = html.coords("mainMap0");
					var b = {};
					b.t = 0;
					b.l = 0;
					b.w = coords.l + coords.w;
					b.h = coords.h + coords.t;
					return b;
				};
				
				var handleLensClick = function(evt){
					setTimeout(function(){
						if( _this._moving ) {
							_this._moving = false;
							return;
						}

						var seriesPanelHeight = parseInt($('#seriesPanel').css('height'));
						if($('#seriesPanel').css('display') == 'none')
							seriesPanelHeight = 0;
						
						var x = evt.pageX;
						var y = evt.pageY - $("#header").height() - seriesPanelHeight;
						
						evt.x = x;
						evt.y = y;
						evt.screenPoint = {x: x, y: y};
						evt.type = "click";
						evt.fromLens = true;
						evt.mapPoint = app.mainMap.toMap(new Point(x, y, app.mainMap.spatialReference));
						
						app.mainMap.onClick(evt, "other");
						_this._moving = false;
					}, 100);
				};
				
				var handleLensDblClick = function(){
					var mapLevel = parseInt(dom.byId("mainMap0").getAttribute("data-zoom"));
					app.mainMap.setZoom(mapLevel + 1);
				}
				
				$('#lensTool').click(function(e) {
    				var that = this;
    				setTimeout(function() {
        				var dblclick = parseInt($(that).data('double'), 10);
        				if (dblclick > 0) {
            				$(that).data('double', dblclick-1);
        				} else {
            				handleLensClick.call(this, e);
        				}
    				}, 300);
				}).dblclick(function(e) {
    				$(this).data('double', 2);
    				handleLensDblClick.call();
				});
				
				var $touchArea = $('#lensTool'),
                    touchStarted = false, // detect if a touch event is started
                    currX = 0,
                    currY = 0,
                    cachedX = 0,
                    cachedY = 0;
                
                //setting the events listeners
                $touchArea.on('touchstart mousedown',function (e){
                    e.preventDefault();
                    cachedX = e.pageX;
                    cachedY = e.pageY;
                    touchStarted = true;
                    setTimeout(function (){
                        currX = e.pageX;
                        currY = e.pageY;
                        if ((cachedX === currX) && !touchStarted && (cachedY === currY)) {
                                    handleLensClick(e.originalEvent);
                        }
                    }, 200);
                });
                $touchArea.on('touchend mouseup touchcancel',function (e){
                    e.preventDefault();
                    touchStarted = false;
                });
                $touchArea.on('touchmove mousemove',function (e){
                    e.preventDefault();
                });
								
				on(dom.byId("lensWin"), (!has("mozilla") ? "mousewheel" : "DOMMouseScroll"), function(e){
   					var scroll = e[(!has("mozilla") ? "wheelDelta" : "detail")] * (!has("mozilla") ? 1 : -1);
					var mapLevel = parseInt(dom.byId("mainMap0").getAttribute("data-zoom"));
					var wheelDelta = !has("mozilla") ? 120 : 3;
					var mapZoom = scroll/wheelDelta;
					app.mainMap.setZoom(mapLevel + mapZoom)
				});
				
				// make the window moveable
				this.draggableWin = new move.constrainedMoveable(this.lensWin, {
					handle: this.lensWin,
					constraints: mbFunction,
					within: true
				});
				
				// make the window appear in the center of the screen
				// subtract half the height and width of the div to get it centered
				var lensHeight = 130;
				if ($('#lensTool').css("width") == "200px")
					lensHeight = 100;
				
				var vertCenter = Math.floor((parseInt($("#mainMap0").css("height"))) / 2) - lensHeight + "px";
				var horizCenter = Math.floor(parseInt($("#mainMap0").css("width")) / 2) - lensHeight + lensCenterOffset + "px";
				domStyle.set(this.lensWin, {
					top: vertCenter,
					left: horizCenter
				});
				
				on(app.popup[0], "set-features", function() 
				{
					if (mode == "TWO_WEBMAPS") {
						if( ! _this._clickOnLens ) 
							getPopupFeature(0, 1);
						_this._displayedPopupIndex = _this._clickOnLens ? 1 : 0;
					}
					else {
						_this._displayedPopupIndex = 0;
						if(!_this._isGraphics)
							_this.clipGlass();
						else
							_this.clipGraphics();
						
					}
				});
				
				if (mode == "TWO_WEBMAPS") {
					on(app.popup[1], "set-features", function(e){
						getPopupFeature(1, 0, _this._clickOnLens ? true : false);
					});
				}
				
				on(app.mainMap, "click", function(evt){
					_this._popupClosedByUser = false;
					app.popup[0].hide();
					_this._clickPoint = evt;
					
					_this._clickOnLens = evt.fromLens;
										
					var x = evt.pageX - $("#lensWin").position().left;
					var y = evt.pageY - ($("#lensWin").position().top + $("#header").height());
					
					evt.x = x;
					evt.y = y;
					evt.screenPoint.x = x;
					evt.screenPoint.y = y;

					if (mode == "TWO_WEBMAPS") 
						app.maps[1].onClick(evt, "other");
				});
				
				if( app.maps[1] ) {
					on(app.maps[1], "click", function(evt){
						app.popup[1].hide();
					});
				}
				
				on(dom.byId("infoWindowTabImg"), 'click', _this.toggleInfoWindow);
				
				connect.connect(this.draggableWin, "onMove", function(){
					_this._moving = true;
				});
				
				if (mode == "TWO_WEBMAPS") 
				{
					$('#lensTool').addClass("twoMaps");
					esriConfig.defaults.map.panDuration = 0;				
					
					// Used?
					var center = (function(){
						var c = webMercatorUtils.webMercatorToGeographic(app.maps[0].extent.getCenter());
						return [parseFloat(c.x.toFixed(3)), parseFloat(c.y.toFixed(3))];
					}());			
					
					this._lensMap = app.maps[1];
					
					connect.connect(this.draggableWin, "onMove", lang.hitch(this, this.syncLensExtent));	
					on(app.maps[0], "pan", lang.hitch(this, this.syncLensExtent));
					on(app.maps[0], "extent-change", lang.hitch(this, this.syncLensExtent));	
					
					if (has("touch")) {
						connect.connect(this.draggableWin, "onMoveStop", lang.hitch(this, this.checkLensFeature));
						on(app.maps[0], "pan-end", lang.hitch(this, this.checkLensFeature));
					}
					else {
						connect.connect(this.draggableWin, "onMove", lang.hitch(this, this.checkLensFeature));	
						on(app.maps[0], "pan", lang.hitch(this, this.checkLensFeature));					
					}
					
					if( has("safari") || has("ie") == 8 || has("agent-ios") || has("agent-android"))
						$("#lensMapNode, #lensTool").addClass("safariFix");
					
					lang.hitch(this, this.syncLensExtent());			
				}		
				else
				{
					//set up two layers
					$('#lensTool').addClass("twoLayers");
					if (!_this._isGraphics) {
						connect.connect(this.draggableWin, "onMove", lang.hitch(this, this.clipGlass));
						on(app.map, "pan", lang.hitch(this, function(){
							this.clipGlass("pan");
						}));
						
						if (has("touch")) {
							connect.connect(this.draggableWin, "onMoveStop", lang.hitch(this, this.clipGlass));
							on(app.map, "pan-end", lang.hitch(this, this.clipGlass));
						}				
					}
					else
						connect.connect(this.draggableWin, "onMove", lang.hitch(this, this.clipGraphics));
						on(app.map, "pan", lang.hitch(this, this.clipGraphics));
					
					if (_this._isGraphics) {
						on(app.map, 'zoom-end', lang.hitch(this, this.clipGraphics));
					}

					$(window).resize(function(){
						if (!_this._isGraphics)
							_this.clipGlass();
						else
							this.clipGraphics;
					})
					
					if(!_this._isGraphics)
						setTimeout(this.clipGlass, 0);
					else
						setTimeout(this.clipGraphics, 1500);

					$('#lensWin').css({borderRadius: 0});
				}
				
				if( _this._isGraphics ) {
					on(app.map, "pan-end", lang.hitch(this, this.clipGraphics));
				}

				this._started = true;			
    		},
			
			clipGraphics: function()
			{
				if( !_this._isGraphics )
					return
				var spyGlassDiv = $("#lensWin");
				var leftval = parseFloat(spyGlassDiv.css('left'));
				var rightval = parseInt($('#lensWin').css('width'));
				var topval = parseFloat(spyGlassDiv.css('top'));
				var bottomval = parseInt($('#lensWin').css('height'));
				
				var layer = app.mainMap.getLayer(_layers[0])._div;
				var tr = layer.getTransform();
				// if we got the transform object
				if (tr) {
					// if layer is offset x
					if (tr.hasOwnProperty('dx')) {
						leftval += -(tr.dx);
					}
					// if layer is offset y
					if (tr.hasOwnProperty('dy')) {
						topval += -(tr.dy);
					}
				}
				
				layer.setClip({
					x: leftval + 9,
					y: topval + 9,
					width: rightval - 18,
					height: bottomval - 18
				})
				
				_this.calculateSpyExtent();	
			},

			syncLensExtent: function() 
			{
				// get the bounding box of the entire lens window
				var bb = html.coords(_this.lensWin);
				// create new extent for the lens map
				// lower-left x and y, add 400 to the y coordinate get to the minimum y
				// the height of the map is actually still 400
				var ll = app.mainMap.toMap(new Point(bb.l, bb.t + 400, app.mainMap.spatialReference));
				// upper-right x and y
				var ur = app.mainMap.toMap(new Point(bb.l + 400, bb.t, app.mainMap.spatialReference));
				_spyExtent = new Extent(ll.x, ll.y, ur.x, ur.y, app.mainMap.spatialReference);

				_this._lensMap.setExtent(_spyExtent);
				
				if($('#lensTool').css("width")=="200px")
					return
			},
			
			// Calculate the geographic extent of the spyglass and check to see if it contains the feature
			checkLensFeature: function()
			{
				if(!_popup)
					return;
				
				var mapSize = 400;
				var lensSize = $("#lensTool").width();
				
				var center = new Point(
						_spyExtent.xmin + ((_spyExtent.xmax - _spyExtent.xmin) / mapSize) * lensSize / 2,
						_spyExtent.ymax + ((_spyExtent.ymin - _spyExtent.ymax) / mapSize) * lensSize / 2,
						_spyExtent.spatialReference
				);
				var radius = (_spyExtent.xmax - _spyExtent.xmin) / (mapSize/lensSize) / 2;
				var coords = [];
				
	  			for(var i = 1; i<31; i++){
					var randAngle = i * 12 * Math.PI / 180;
					var x = center.x + radius * Math.cos(randAngle);
					var y = center.y + radius * Math.sin(randAngle);
					coords.push([x, y]);
	  			}
				// Enclose the circle by adding the first set of coordinates
	  			coords.push(coords[0]);
	  			var polygon = new Polygon(new SpatialReference(app.maps[0].spatialReference));
	  			polygon.addRing(coords);
				// Should we do check at top of function for _this._clickPoint and exit if false?
				if( _this._clickPoint ) {
					if (polygon.contains(_this._clickPoint.mapPoint)) {
						getPopupFeature(1, 0);
					}
					else {
						getPopupFeature(0, 1);
					}
				}	
			},
			
			// Calculates area to apply for css clip method to reveal layer in spyglass
			clipGlass: function(mapEvt) 
			{
				var spyGlassDiv = $("#lensWin");
				var clipDiv = app.map.getLayer(_layers[0])._div;
				if (spyGlassDiv != null) 
				{			                    
					_leftVal = parseFloat(spyGlassDiv.css('left'));
					_topVal = parseFloat(spyGlassDiv.css('top'));						
					_rightVal = _leftVal + parseInt($('#lensWin').css('width'));
					_bottomVal = _topVal + parseInt($('#lensWin').css('height'));

					var lensPos = $("#lensWin").position();
					var layerPos = $(clipDiv).position();
						
					var x = lensPos.left - layerPos.left;
					var y = lensPos.top - layerPos.top;
					
					if ($("#lensTool").css("width") == "200px") {
						_leftVal = x + 7;
						_rightVal = x + 200 - 6;
						_topVal = y + 7;
						_bottomVal = y + 200 - 6;
					}
					else {
						_leftVal = x + 9;
						_rightVal = x + 261 - 9;
						_topVal = y + 9;
						_bottomVal = y + 261 - 9;
					}
					         
				    //Syntax for clip "rect(top,right,bottom,left)" commas b/w values is standard syntax, w/o is backwards compatible
					var clipString = "rect(" + _topVal + "px, " + _rightVal + "px, " + _bottomVal + "px, " + _leftVal + "px)";
					clipDiv.style.clip = clipString;
					//_this._displayedPopupIndex = _this.checkSelectedFeature();
					_this.calculateSpyExtent();				
			   }
			},
			
			calculateSpyExtent: function(hideGraphics)
			{				
				var mapExtent = app.map.extent;
				var mapWidth = app.map.width;
				var mapHeight = app.map.height;
				
				if (_this._isGraphics) {
					var spyGlassDiv = $("#lensWin");
					if (spyGlassDiv != null) {
						
						_leftVal = parseFloat(spyGlassDiv.css('left'));
						_rightVal = _leftVal + parseInt($('#lensWin').css('width'));
						_topVal = parseFloat(spyGlassDiv.css('top'));
						_bottomVal = _topVal + parseInt($('#lensWin').css('height'));
						
						if ($("#lensTool").css("width") == "200px") {
							_leftVal += 6;
							_rightVal += -6;
							_topVal += 6;
							_bottomVal += -6;
						}
						else {
							_leftVal += 9;
							_rightVal += -9;
							_topVal += 9;
							_bottomVal += -9;
						}
					}
				}
				
				var max = new ScreenPoint(_rightVal, _topVal);
				var min = new ScreenPoint(_leftVal, _bottomVal);

				var projMax = screenUtils.toMapGeometry(mapExtent, mapWidth, mapHeight, max);
				var projMin = screenUtils.toMapGeometry(mapExtent, mapWidth, mapHeight, min);
				
				spyExtent = new Extent(projMin.x, projMin.y, projMax.x, projMax.y, new SpatialReference(
					app.map.spatialReference
				));
		
				var colorTitleIndex = null;
		
				spyExtent = new Extent(projMin.x, projMin.y, projMax.x, projMax.y, new SpatialReference( app.map.spatialReference ));
				
				_this.checkSelectedFeature(spyExtent);
			},
			
			hideGraphics: function(spyExtent)
			{
				$.each(app.map.getLayer(_layers[0]).graphics, function(i, graphic){
					var center = graphic.geometry.type == 'point' ? graphic.geometry : graphic.geometry.getExtent().getCenter();
					if(spyExtent.contains(center))
						graphic.show();
					else
						graphic.hide();
				});		
			},
			
			//  Used for 2 layers
			checkSelectedFeature: function(spyExtent)
			{
				if(!_popup || !app.popup[0].features)
					return;
				
				spyExtent = spyExtent;
				if (_this._clickPoint != null && app.popup[0].features) {
					var isOnSpecificLayer = spyExtent.contains(_this._clickPoint.mapPoint);
					var specificLayerId = _layers[0] + (_this._isGraphics ? "" : "_1"); // TODO is that _1 safe ?
					colorTitleIndex = isOnSpecificLayer ? 0 : 1;
					
					// Find feature that is not currently selected to set mobile infowindow (mobile infowindow of selected feature is set in setInfoWindow())
					for (var i = 0; i < app.popup[0].features.length; i++) {
						var features = app.popup[0].features[i];
						// layerId of selected feature
						var layerId = features._graphicsLayer.id;

						if ((!isOnSpecificLayer && layerId == specificLayerId)|| (isOnSpecificLayer && layerId != specificLayerId)) {
							var feature = app.popup[0].features[i];
							registry.byId("infoView-mobile" + 1).set("content", feature.getContent());
							$("#infoWindowView .noData").hide();
							$('.swiper.infoWindowView').css('display', 'block');
							if(_this._isGraphics)
								app.popup[0]._highlighted._graphicsLayer.graphics[0].hide()
							break;
						}
					}
					
					for (var i = 0; i < app.popup[0].features.length; i++) {
						var feature = app.popup[0].features[i];
						var layerId = feature._graphicsLayer.id;
						if ((isOnSpecificLayer && layerId == specificLayerId) || (!isOnSpecificLayer && layerId != specificLayerId)) {
							app.popup[0].select(i);
							getPopupFeature(0, colorTitleIndex);
							if(_this._isGraphics)
								app.popup[0]._highlighted._graphicsLayer.graphics[0].show()
							break;
						}
					}
					_this._displayedPopupIndex = colorTitleIndex;
				}
			},
						
			//Toggle InfoWindow
			toggleInfoWindow: function()
			{
				if (_this.getInfoWindowState() == "open")
					_this.closeInfoWindow();
				else
					_this.openInfoWindow();
					
				_this._popupClosedByUser = ! _this._popupClosedByUser;
			},

			getInfoWindowState: function()
			{
				return $("#infoWindowTabImg").hasClass("open") ? "open" : "close";
			},
			
			closeInfoWindow: function()
			{
				// The panel has not been open yet
				if($("#infoWindow").css("right") == "-260px")
					return;
					 
				_this.infoWindowSlide("in");
				domClass.remove("infoWindowTabImg", "closeImg");
				if ($("#infoWindowTabImg").hasClass("open")) $("#infoWindowTabImg").removeClass("open");
			},
				
			openInfoWindow: function()
			{
				//$("#infoWindow").css('display', 'block')
				_this.infoWindowSlide("out");
				domClass.add("infoWindowTabImg", "closeImg");
				if (! $("#infoWindowTabImg").hasClass("open")) $("#infoWindowTabImg").addClass("open");
			},

			infoWindowSlide: function(direction)
			{
				$("#infoWindow").animate({
					right: (direction=="in") ? -240 : 3
				},{
					duration: 1000
				}
				);			
			},
			updateSettings: function(popupColors, popupTitles)
			{
				if( ! this._started )
					return;
				
				if( this._displayedPopupIndex == null )
					return;
				
				$('#infoWindowTitle').css('backgroundColor', '#' + _popupColors[this._displayedPopupIndex]);				
				$('#infoWindowTitle').html(_popupTitles[this._displayedPopupIndex] || '&nbsp;');
			}
	});
	
	function getPopupFeature(index, popupAttrIndex, map2Click)
	{	
		if(!_popup)
			return;
		
		var feature = app.popup[index].getSelectedFeature();
		if (!feature) {
			$('#infoWindowTitle').css('backgroundColor', '#' + _popupColors[(popupAttrIndex)]);
			$('#infoWindowTitle').html(_popupTitles[popupAttrIndex] || '&nbsp;');
			$('#infoWindowContent').html(i18n.swipe.mobileData.noPopup);
			return
		}
		setInfoWindow(feature, index, map2Click);
			
		if (map2Click != false) {
			$('#infoWindowTitle').css('backgroundColor', '#' + _popupColors[(popupAttrIndex)]);
			$('#infoWindowTitle').html(_popupTitles[popupAttrIndex] || '&nbsp;');
			if (_this.getInfoWindowState() == "close" && !_this._popupClosedByUser) {
				_this.openInfoWindow();
			}
		}		
	}
	
	function setInfoWindow(feature, popupIndex, map2Click)
	{
		if( feature )
			registry.byId("infoView-mobile" + popupIndex).set("content", feature.getContent());
		else
			registry.byId("infoView-mobile" + popupIndex).set("content", '<div class="noDataMap"><div class="title">' + i18n.swipe.mobileData.noDataMap + '</div></div>');
					
		$("#infoWindowView .noData").hide();
		$('.swiper.infoWindowView').css('display', 'block');
		
		if (map2Click != false) {
			$('#infoWindowContent').removeClass('noData');
			var content = feature.getContent();
			registry.byId("infoWindowContent").set("content", content);
		}
		
	}
	
	return LENS;
});