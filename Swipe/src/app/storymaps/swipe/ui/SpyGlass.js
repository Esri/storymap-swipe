define(["dojo/_base/declare", 
		"dojo/_base/connect", 
		"dojo/_base/html",
		"dojo/_base/lang",

		"dojo/dnd/move",
		"dojo/has",
	
		"dojo/dom",
		"dojo/dom-attr",
		"dojo/dom-style",
	
		"dijit/_WidgetBase", 
		"dijit/_TemplatedMixin",
		"dijit/_WidgetsInTemplateMixin",
	
		"dijit/registry"], 
	function(
		declare, connect, html, lang,
		move, has,
		dom, domAttr, domStyle,
		WidgetBase, TemplatedMixin, WidgetsInTemplateMixin,
		registry
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

			startup: function(webmapId, lensNode, colors, titles, mode, layers, lensCenterOffset)
			{			
				_this = this;
					
				this.lensWin = "lensWin";
				
				$("#lensWin").css("display", "block");
				
				//Hide slider used in swipe method
				dojo.style(dojo.byId('sliderDiv'), "display", "none");
				$('#mapPanel').css('overflowX', 'hidden'); //Needed to prevent spyglass movement from expanding window beyond map
				$('#infoWindowTitle').html(i18n.swipe.infoWindow.noFeature);
				$('#infoWindowContent').html('<div class="noFeature">' + i18n.swipe.infoWindow.noFeatureExplain + '</div>');
				_layers = layers;
				_popupColors = colors; //.reverse();
				_popupTitles = titles; //.reverse();
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
						
						var x = evt.pageX;
						var y = evt.pageY - $("#header").height();
						
						evt.x = x;
						evt.y = y;
						evt.screenPoint = {x: x, y: y};
						evt.type = "click";
						evt.fromLens = true;
						evt.mapPoint = app.maps[0].toMap(new esri.geometry.Point(x, y, app.maps[0].spatialReference));
						
						app.maps[0].onClick(evt, "other");
						_this._moving = false;
					}, 100);
				};
				
				var $touchArea = $('#lensTool'),
				    touchStarted = false, // detect if a touch event is sarted
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
				
				connect.connect(dojo.byId("lensTool"), 'onclick', function(evt){
					handleLensClick(evt);
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
				
				dojo.connect(app.popup[0], "onSetFeatures", function() 
				{
					if (mode == "TWO_WEBMAPS") {
						if( ! _this._clickOnLens ) 
							getPopupFeature(0, 1);
						_this._displayedPopupIndex = _this._clickOnLens ? 1 : 0;
					}
					else {
						_this.calculateSpyExtent();
						//getPopupFeature(0, 0);
						_this._displayedPopupIndex = 0;
					}
				});
				
				dojo.connect(app.popup[1], "onSetFeatures", function(e) 
				{
					getPopupFeature(1, 0, _this._clickOnLens ? true : false);
				});
				
				connect.connect(app.maps[0], "onClick", function(evt){
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
				
				connect.connect(app.maps[1], "onClick", function(evt){
					app.popup[1].hide();
				});
				
				connect.connect(dojo.byId("infoWindowTabImg"), 'onclick', _this.toggleInfoWindow);
				
				connect.connect(this.draggableWin, "onMove", function(){
					_this._moving = true;
				});
				
				if (mode == "TWO_WEBMAPS") 
				{
					_popupColors.reverse();
					_popupTitles.reverse();
					$('#lensTool').addClass("twoMaps");
					esri.config.defaults.map.panDuration = 0;
					//esri.config.defaults.map.zoomDuration = 0; -->> CAUSES CRAZY MAP RENDER ON ZOOM					
					
					var center = (function(){
						var c = esri.geometry.webMercatorToGeographic(app.maps[0].extent.getCenter());
						return [parseFloat(c.x.toFixed(3)), parseFloat(c.y.toFixed(3))];
					}());				
					
					this._lensMap = app.maps[1];
					
					connect.connect(this.draggableWin, "onMove", lang.hitch(this, this.syncLensExtent));	
					connect.connect(app.maps[0], "onPan", lang.hitch(this, this.syncLensExtent));
					connect.connect(app.maps[0], "onExtentChange", lang.hitch(this, this.syncLensExtent));	
					
					if (has("touch")) {
						connect.connect(this.draggableWin, "onMoveStop", lang.hitch(this, this.checkLensFeature));
						connect.connect(app.maps[0], "onPanEnd", lang.hitch(this, this.checkLensFeature));
					}
					else {
						connect.connect(this.draggableWin, "onMove", lang.hitch(this, this.checkLensFeature));	
						connect.connect(app.maps[0], "onPan", lang.hitch(this, this.checkLensFeature));					
					}
					
					if( dojo.isSafari || dojo.isIE == 8)
						$("#lensMapNode, #lensTool").addClass("safariFix");
					
					lang.hitch(this, this.syncLensExtent());			
				}		
				else
				{
					//set up two layers
					$('#lensTool').addClass("twoLayers");
					
					_this._isGraphics = app.maps[0].getLayer(_layers[0]).type == "Feature Layer";
					if (!_this._isGraphics) {
						connect.connect(this.draggableWin, "onMove", lang.hitch(this, this.clipGlass));
						connect.connect(app.maps[0], "onPan", lang.hitch(this, this.clipGlass));
						
						if (has("touch")) {
							connect.connect(this.draggableWin, "onMoveStop", lang.hitch(this, this.calculateSpyExtent));
							connect.connect(app.maps[0], "onPanEnd", lang.hitch(this, this.calculateSpyExtent));
						}				
					}
					
					connect.connect(this.draggableWin, "onMove", lang.hitch(this, this.calculateSpyExtent));
					connect.connect(app.maps[0], "onPan", lang.hitch(this, this.calculateSpyExtent));
					
					if (_this._isGraphics) {
						var layer = app.maps[0].getLayer(_layers[0]);
						
						if(layer._collection)
							connect.connect(app.maps[0], 'onZoomEnd', lang.hitch(this, this.calculateSpyExtent));
						else {
							var opacity = layer._params && layer._params.opacity ? layer._params.opacity : 1.0;
							var updateIsZoom = false;
							
							connect.connect(app.maps[0], 'onZoomStart', function(){
								updateIsZoom = true;
							});
							
							connect.connect(app.maps[0].getLayer(_layers[0]), 'onUpdateStart', function(){
								if( updateIsZoom )
									app.maps[0].getLayer(_layers[0]).setOpacity(0.0);
							});
						
							connect.connect(app.maps[0].getLayer(_layers[0]), 'onUpdateEnd', lang.hitch(this, function(){
								if( updateIsZoom ) 
									app.maps[0].getLayer(_layers[0]).setOpacity(opacity);
								this.calculateSpyExtent();
								updateIsZoom = false;
							}));
						}
					}

					$(window).resize(function(){
						if (!_this._isGraphics)
							_this.clipGlass();
						else
							this.calculateSpyExtent;
					})
					
					if(!_this._isGraphics)
						setTimeout(this.clipGlass, 0);
					else
						setTimeout(this.calculateSpyExtent, 1500);

					$('#lensWin').css({borderRadius: 0});
				}
				
				if( _this._isGraphics ) {
					connect.connect(app.maps[0], "onPanEnd", lang.hitch(this, this.calculateSpyExtent));
				}

				this._started = true;			
    		},

			syncLensExtent: function() 
			{
				// get the bounding box of the entire lens window
				var bb = html.coords(_this.lensWin);
				// create new extent for the lens map
				// lower-left x and y, add 400 to the y coordinate get to the minimum y
				// the height of the map is actually still 400
				var ll = app.maps[0].toMap(new esri.geometry.Point(bb.l, bb.t + 400, app.maps[0].spatialReference));
				// upper-right x and y
				var ur = app.maps[0].toMap(new esri.geometry.Point(bb.l + 400, bb.t, app.maps[0].spatialReference));
				_spyExtent = new esri.geometry.Extent(ll.x, ll.y, ur.x, ur.y, app.maps[0].spatialReference);

				_this._lensMap.setExtent(_spyExtent);
				
				if($('#lensTool').css("width")=="200px")
					return
			},
			
			checkLensFeature: function()
			{
				var mapSize = 400;
				var lensSize = $("#lensTool").width();
				
				var center = new esri.geometry.Point(
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
	  			coords.push(coords[0]);
	  			var polygon = new esri.geometry.Polygon(new esri.SpatialReference(app.maps[0].spatialReference));
	  			polygon.addRing(coords);
				if( _this._clickPoint ) {
					if (polygon.contains(_this._clickPoint.mapPoint)) {
						getPopupFeature(1, 0);
					}
					else {
						getPopupFeature(0, 1);
					}
				}	
			},
			
			clipGlass: function() 
			{
				var spyGlassDiv = $("#lensWin");
				var webMapArray = app.maps;
				var clipDiv = webMapArray[0].getLayer(_layers[0])._div;
				if (spyGlassDiv != null) 
				{			                    
					_leftVal = parseFloat(spyGlassDiv.css('left'));
					_rightVal = _leftVal + parseInt($('#lensWin').css('width'));
					_topVal = parseFloat(spyGlassDiv.css('top'));
					_bottomVal = _topVal + parseInt($('#lensWin').css('height'));
					
					if($("#lensTool").css("width") == "200px"){
						_leftVal += 6;
						_rightVal += -6;
						_topVal += 6;
						_bottomVal += -6;
					}
					else{
						_leftVal += 9;
						_rightVal += -9;
						_topVal += 9;
						_bottomVal += -9;
					}
				                    
				    // If CSS Transformation is applied to the layer (i.e. swipediv), 
				    // record the amount of translation and adjust clip rect accordingly
				    var tx = 0, ty = 0;
					if (webMapArray[0].navigationMode === "css-transforms")
					{
				        var prefix = "";
						if (dojo.isWebKit) 
				            prefix = "-webkit-";
						else if (dojo.isFF)
				            prefix = "-moz-";
						else if (dojo.isIE) 
				          	prefix = "-ms-";
						else if (dojo.isOpera) 
				            prefix = "-o-";
				                      
				        var transformValue = clipDiv.style.getPropertyValue(prefix + "transform");
				        if(transformValue) 
						{
							if(transformValue.toLowerCase().indexOf("translate3d") !== -1) {
								transformValue = transformValue.replace("translate3d(", "").replace(")", "").replace(/px/ig, "").replace(/\s/i, "").split(",");				
							}
						
							else if(transformValue.toLowerCase().indexOf("translate") !== -1) {
						  		transformValue = transformValue.replace("translate(", "").replace(")", "").replace(/px/ig, "").replace(/\s/i, "").split(",");
							} 
												
							try 
							{
								tx = parseFloat(transformValue[0]);
								ty = parseFloat(transformValue[1]);
							} 
							catch(e) 
							{
								alert("Error cannot continue");
								console.error(e);
							}
			            	_leftVal -= tx;
			            	_rightVal -= tx;
			            	_topVal -= ty;
			            	_bottomVal -= ty;
				        }
					}
					
					// Dont be fooled, this will work in IE9/8 mode on IE10, but in real IE9/8 its not necessary!
					/*if (dojo.isIE && dojo.isIE <= 9) {
						_topVal += 55;
						_bottomVal += 60;
					}*/                
				    //Syntax for clip "rect(top,right,bottom,left)" commas b/w values is standard syntax, w/o is backwards compatible
				    //var clipstring = "rect(0px " + val + "px " + map.height + "px " + " 0px)";      
				    //var clipString = "rect(" + topVal + "px " + rightVal + "px " + bottomVal + "px " + _leftVal + "px)";
					var clipString = "rect(" + _topVal + "px, " + _rightVal + "px, " + _bottomVal + "px, " + _leftVal + "px)";
					clipDiv.style.clip = clipString;
					//_this._displayedPopupIndex = _this.checkSelectedFeature();					
			   }
			},
			
			calculateSpyExtent: function(hideGraphics)
			{
				//TODO MOVE, messes up graphics in mobile
				//if($('#lensTool').css("width")=="200px")
					//return;
					
				var mapExtent = app.maps[0].extent;
				var mapWidth = app.maps[0].width;
				var mapHeight = app.maps[0].height;
				
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
				
				var max = new esri.geometry.ScreenPoint(_rightVal, _topVal);
				var min = new esri.geometry.ScreenPoint(_leftVal, _bottomVal);
				
				var projMax = new esri.geometry.toMapGeometry(mapExtent, mapWidth, mapHeight, max);
				var projMin = new esri.geometry.toMapGeometry(mapExtent, mapWidth, mapHeight, min);
				
				var colorTitleIndex = null;
				
				spyExtent = new esri.geometry.Extent(projMin.x, projMin.y, projMax.x, projMax.y, new esri.SpatialReference(
					app.maps[0].spatialReference
				));
		
				var colorTitleIndex = null;
		
				spyExtent = new esri.geometry.Extent(projMin.x, projMin.y, projMax.x, projMax.y, new esri.SpatialReference( app.maps[0].spatialReference ));
				
				_this.checkSelectedFeature(spyExtent);
				if(_this._isGraphics)
					_this.hideGraphics(spyExtent);
			},
			
			hideGraphics: function(spyExtent)
			{
				$.each(app.maps[0].getLayer(_layers[0]).graphics, function(i, graphic){
					var center = graphic.geometry.type == 'point' ? graphic.geometry : graphic.geometry.getExtent().getCenter();
					if(spyExtent.contains(center))
						graphic.show();
					else
						graphic.hide();
				});		
			},
			
			checkSelectedFeature: function(spyExtent)
			{
				spyExtent = spyExtent;
				if (_this._clickPoint != null && app.popup[0].features) {
					var isOnSpecificLayer = spyExtent.contains(_this._clickPoint.mapPoint);
					var specificLayerId = _layers[0] + (_this._isGraphics ? "" : "_1"); // TODO is that _1 safe ?
					colorTitleIndex = isOnSpecificLayer ? 1 : 0;
					
					for (var i = 0; i < app.popup[0].features.length; i++) {
						var features = app.popup[0].features[i];
						var layerId = features._graphicsLayer.id;
						if ((!isOnSpecificLayer && layerId == specificLayerId)) {
							var feature = app.popup[0].features[i];
							registry.byId("infoView-mobile" + 1).set("content", feature.getContent());
							$("#infoWindowView .noData").hide();
							$('.swiper.infoWindowView').css('display', 'block');
							break;
						}
					}
					
					for (var i = 0; i < app.popup[0].features.length; i++) {
						var feature = app.popup[0].features[i];
						var layerId = feature._graphicsLayer.id;
						if ((isOnSpecificLayer && layerId == specificLayerId) || (!isOnSpecificLayer && layerId != specificLayerId)) {
							app.popup[0].select(i);
							getPopupFeature(0, colorTitleIndex);
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
				dojo.removeClass("infoWindowTabImg", "closeImg");
				if ($("#infoWindowTabImg").hasClass("open")) $("#infoWindowTabImg").removeClass("open");
			},
				
			openInfoWindow: function()
			{
				//$("#infoWindow").css('display', 'block')
				_this.infoWindowSlide("out");
				dojo.addClass("infoWindowTabImg", "closeImg");
				if (! $("#infoWindowTabImg").hasClass("open")) $("#infoWindowTabImg").addClass("open");
			},

			infoWindowSlide: function(direction)
			{
				$("#infoWindow").animate({
					right: (direction=="in") ? -240 : 3
				},{
					duration: 1000/*,
					complete: function(){
						if(direction=="in")
							$("#infoWindow").css('display', 'none') 
					}*/
				}
				);			
			},
			updateSettings: function(popupColors, popupTitles)
			{
				if( ! this._started )
					return;
				
				//_popupColors = popupColors.reverse();
				//_popupTitles = popupTitles.reverse();
				
				if( this._displayedPopupIndex == null )
					return;
				
				$('#infoWindowTitle').css('backgroundColor', '#' + _popupColors[this._displayedPopupIndex]);				
				$('#infoWindowTitle').html(_popupTitles[this._displayedPopupIndex] || '&nbsp;');
			}
	});
	
	
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
		
	function getPopupFeature(index, popupAttrIndex, map2Click)
	{		
		var feature = app.popup[index].getSelectedFeature();
		if(!feature){
			$('#infoWindowTitle').css('backgroundColor', '#' + _popupColors[(popupAttrIndex)]);				
			$('#infoWindowTitle').html(_popupTitles[popupAttrIndex] || '&nbsp;');
			$('#infoWindowContent').html(i18n.swipe.mobileData.noPopup);
			return
		}
		setInfoWindow(feature, index, map2Click);

		if (map2Click != false) {
			$('#infoWindowTitle').css('backgroundColor', '#' + _popupColors[(popupAttrIndex)]);
			$('#infoWindowTitle').html(_popupTitles[popupAttrIndex] || '&nbsp;');
			if (_this.getInfoWindowState() == "close" && ! _this._popupClosedByUser) {
				_this.openInfoWindow();
			}
		}
	}
	
	return LENS;
});