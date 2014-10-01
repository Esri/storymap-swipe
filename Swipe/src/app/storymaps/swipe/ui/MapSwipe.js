define(["dojo/dnd/move",
		"esri/widgets",
		"dijit/registry", 
		"dojo/has", 
		"esri/geometry/Point", 
		"esri/geometry/Extent",
		"esri/geometry/screenUtils", 
		"dojo/on",
		"dojo/_base/connect", 
		"dojo/query", 
		"dojo/dom",
		"dojo/dom-style",
		"dojo/mouse"],
	function(
		Move,
		Widgets, 
		registry, 
		has, 
		Point, 
		Extent,
		screenUtils, 
		on,
		connect, 
		query, 
		dom,
		domStyle,
		mouse)
	{
		return function MapSwipe(container)
		{
			var _webMapArray = null;
			var _layers = null;
			var _popupColors = null;
			var _popupTitles = null;
			var _popup = true;
			var _xOffset = null;
			
			var _lastSwiperEventPoint = null;
			var _inProgress = true;
			
			var _pointTest = null;
			var _popupState = null;
			
			var _popupTest = null;
			var _clickPoint = null;
			
			this.init = function(webMapArray, layers, popupColors, popupTitles, xOffset, popup)
			{
				console.log("MapSwipe init", webMapArray, layers, popupColors, popupTitles, popup);
				_webMapArray = webMapArray;
				_layers = layers;
				_popupColors = popupColors;
				_popupTitles = popupTitles;
				_xOffset = xOffset;
				_popup = popup;
				
				$('#infoWindowTabImg').css('display', 'none');
				$('#infoWindow').css('display', 'none');
				
				if (!_popup) {
					$.each(app.popup, function(i){
						app.popup[i].destroy();
					})
				}

				setUpPopup();
								
				if (_webMapArray.length == 1)
					setUpClipper();
				else
					setUpSwiper();
			}
			
			this.updateSettings = function(popupColors, popupTitles)
			{
				if( ! _webMapArray || _webMapArray.length == 0 )
					return;
				
				_popupColors = popupColors;
				_popupTitles = popupTitles;
				if (_webMapArray.length == 1) {
					if (_lastSwiperEventPoint) 
						setPopup(_lastSwiperEventPoint);
				}
				else 
					setSwiperPopupHeader();
			}
			
			//
			// Common
			
			function setUpPopup()
			{			
				$('.esriPopup').css('visibility', 'hidden');
				$('.esriPopup .title').css('display', 'none');
				$('.esriPopup .prev').css('display', 'none');
				$('.esriPopup .next').css('display', 'none');
				$('.esriPopup .maximize').css('display', 'none');
				
				// Add a div that will hold the custom title as it's tricky to edit the popup title
				$('.esriPopup .title').after('<div class="swipeTitle"></div>');
			}
			
			//
			
			//
			// 2 layers : clip
			//
			
			function setUpClipper()
			{
				// Hide elements for 2 webmaps model
				$('#resizeWrapper').css('width', '0%');
				$('#mainMap1').css('width', '0%');
				
				$("#swipeImg").css('top',(($('#mainMap0').height() / 2 - 26 + "px")));
				$("#swipeImg").show();
				
				var node = query(container + " #sliderDiv");
				var sliderDiv = new Move.parentConstrainedMoveable(node[0], {
	        		area: "mainMap0",
	        		within: true
	      		});
				
				on(node, mouse.enter, function(){
					$("#swipeImg").css("background", "url(resources/icons/sprite-icons.png)-536px -1152px");
				})
				
				on(node, mouse.leave, function(){
					$("#swipeImg").css("background", "url(resources/icons/sprite-icons.png)-536px -1254px");
				})
				
				app.sliderDiv = sliderDiv;
				
				if (has("touch")) {
					$('.moveable').addClass('touch');
					$('#swipeImg').addClass('touch');
				}
				
				sliderDiv.node.style.height = _webMapArray[0].height + "px";
				sliderDiv.node.style.top = "0px";
				sliderDiv.node.style.left = $('#mainMap0').width() / 2 + _xOffset + "px";
				
				clipLayer(sliderDiv);
			}
			
			function clipLayer(slider)
			{					
				var mapPoint = null;
				
				var clipVal = slider.node.offsetLeft;

				getClip(clipVal);
				
				on(_webMapArray[0], 'click', function(evt) 
				{	
					// Hide popup in case no data is found for layer.  Popup will be shown if found during popup check (setPopup())
					$('.esriPopup').css('visibility', 'hidden');
					mapPoint = evt;	
					$("#swipeImg").fadeOut();
					_popupState = 'open';
	        	});				
				
				on(app.popup[0], "set-features", function() 
				{
					setTimeout(function (){
						setPopup(mapPoint, 0);
					});
				});
								
				connect.connect(slider, 'onMove', function(args) 
				{
					var left = parseInt(slider.node.offsetLeft);
					if (left <=0 || left >= (_webMapArray[0].width)) 
						return;       
					clipVal = left;
					getClip(clipVal);
					setPopup(mapPoint);
	        	});
				
				$(window).resize(function()
				{
					slider.node.style.height = _webMapArray[0].height + "px";
				});
				
				connect.connect(slider, "onMoveStart", function(args) {
					$("#swipeImg").fadeOut();
	          	});
				
				on(_webMapArray[0], 'pan', function(args) 
				{
	          		getClip(slider.node.offsetLeft);				
	        	});
				
				on(_webMapArray[0], 'pan-end', function(args) 
				{
					setPopup(mapPoint);			
	        	});
				
				var isGraphics = app.mainMap.getLayer(_layers[0]).type == "Feature Layer";
				if(isGraphics){
					on(_webMapArray[0], 'pan-end', function(args) 
					{
		          		getClip(slider.node.offsetLeft);				
		        	});
					
					var layer = app.mainMap.getLayer(_layers[0]);
						
					if(layer._collection)
						dojo.connect(app.mainMap, 'onZoomEnd', function(){
							getClip(slider.node.offsetLeft)
						});
					else {
						var opacity = layer._params && layer._params.opacity ? layer._params.opacity : 1.0;
						var updateIsZoom = false;
						
						on(app.mainMap, 'zoom-start', function(){
							updateIsZoom = true;
						});
						
						// To prevent flashing of graphics on zoom
						on(app.mainMap.getLayer(_layers[0]), 'update-start', function(){
							if( updateIsZoom )
								app.mainMap.getLayer(_layers[0]).setOpacity(0.0);
						});
					
						on(app.mainMap.getLayer(_layers[0]), 'update-end', function(){
							if( updateIsZoom ) 
								app.mainMap.getLayer(_layers[0]).setOpacity(opacity);
							getClip(slider.node.offsetLeft)
							updateIsZoom = false;
						});
					}
				}												
				
	        	if (_webMapArray[0].navigationMode === "css-transforms") 
				{
	          		on(_webMapArray[0], 'pan', function(args) {
	          			getClip(slider.node.offsetLeft);
	        		});
	      		}
			}
			
			function hideGraphics(val)
			{
				var ll = app.mainMap.toMap(new Point(0, app.mainMap.height, app.mainMap.spatialReference));
				var ur = app.mainMap.toMap(new Point(val, 0, app.mainMap.spatialReference));
				var leftExtent = new Extent(ll.x, ll.y, ur.x, ur.y, app.mainMap.spatialReference);
	
				$.each(_webMapArray[0].getLayer(_layers[0]).graphics, function(i, graphic){
					var center = graphic.geometry.type == 'point' ? graphic.geometry : graphic.geometry.getExtent().getCenter();
					if(leftExtent.contains(center))
						graphic.show();
					else
						graphic.hide();
				});				
			}
			
			function getClip(val)
			{
				var swipeDiv = dom.byId("sliderDiv");
				var clipDiv = _webMapArray[0].getLayer(_layers[0])._div; 
				
				if (swipeDiv != null) {
		      		offset_left = parseFloat(swipeDiv.style.left);
			        offset_top = parseFloat(swipeDiv.style.top);
			                    
					var rightval, leftval, topval, bottomval;
			                    
			        if (offset_left > 0) {
			        	rightval = parseFloat(val) - Math.abs(offset_left);
			        	leftval = (offset_left);
			        }
			        else if (offset_left < 0) {
			        	leftval = 0;
			        	rightval = parseFloat(val) + Math.abs(offset_left);
			        }
			        else {
			        	leftval = 0;
			        	rightval = parseFloat(val);
			        }
					
			        if (offset_top > 0) {
			        	topval = -(offset_top);
			        	bottomval = _webMapArray[0].height - offset_top;
					}
			        else if (offset_top < 0) {
			        	topval = 0;
			        	bottomval = _webMapArray[0].height + Math.abs(offset_top);
			        }
			        else {
			        	topval = 0;
			        	bottomval = _webMapArray[0].height;
			        }
					
					var isGraphics = app.mainMap.getLayer(_layers[0]).type == "Feature Layer";
					if(isGraphics){
						rightval = app.mainMap.width;
						var tr = clipDiv.getTransform();
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
						
						clipDiv.setClip({
							x: leftval,
							y: topval,
							width: rightval,
							height: bottomval
						})
						return;
					}

					var sliderPos = dojo.position(dojo.byId("sliderDiv"));
					var layerPos = dojo.position(clipDiv);

					var x = sliderPos.x - layerPos.x;
					var y = sliderPos.y - layerPos.y;
						
					leftval = x;
					bottomval = sliderPos.h + (sliderPos.y - layerPos.y);
					rightval = parseInt(app.mainMap.width)+ Math.abs(layerPos.x);//0 - layerPos.x;
					topval = y;
           
			        //Syntax for clip "rect(top,right,bottom,left)" commas b/w values is standard syntax, w/o is backwards compatible
					var clipString = "rect(" + topval + "px, " + rightval + "px, " + bottomval + "px, " + leftval + "px)";
			        clipDiv.style.clip = clipString;
		      	}
			}
			
			function setPopup(evt)
			{
				if( ! evt || ! app.popup[0] || _popupState == 'closed'  || !_popup)
					return;
				var screenGeom = screenUtils.toScreenGeometry(app.mainMap.extent, app.mainMap.width, app.mainMap.height, evt.mapPoint);
				var isGraphics = app.mainMap.getLayer(_layers[0]).type == "Feature Layer";
				var clipLeft = parseInt(dom.byId("sliderDiv").style.left.split("px",1));
				var isOnSpecificLayer = screenGeom.x > clipLeft;
				var specificLayerId = _layers[0] /*+ (isGraphics ? "" : "_1")*/; // TODO is that _1 safe ?
				var colorTitleIndex = isOnSpecificLayer ? 0 : 1;
				
				_lastSwiperEventPoint = evt;
				
				// Desktop popup
				if(!app.popup[0].features)
					return;
				
				// Data may not be found when clicking on the same side than a graphics layer
				var dataFound = false;
				for(var i=0; i < app.popup[0].features.length; i++) {
					var feature = app.popup[0].features[i];
					var layerId = feature._graphicsLayer.id;
				
					if(layerId.charAt(layerId.length-2) === '_')
						layerId = layerId.split('_').slice(0, -1).join('_')

					if ( (isOnSpecificLayer && layerId == specificLayerId) || (!isOnSpecificLayer && layerId != specificLayerId) ) {
						dataFound = true;
						$('.esriPopup .titlePane').css('backgroundColor', '#' + _popupColors[colorTitleIndex]);
						$('.esriPopup .swipeTitle').html(_popupTitles[colorTitleIndex] || '&nbsp;');
						$('.esriPopup .swipeTitle').append('<div id="popup0" class="closePopup"><a ><i class="icon-remove icon-white"></i></a></div>');
						$('.esriPopup').css('visibility', 'visible');
						
	        			on(query(".titleButton.close"), 'click', function(){
							_popupState = 'closed';
						})
						
						if(isGraphics)
							app.popup[0]._highlighted._graphicsLayer.graphics[0].show()
						app.popup[0].select(i);
						_popupState = 'open';
						break;
					}
				}
				
				if( ! dataFound ) {
					$('.esriPopup').css('visibility', 'hidden');
					if(isGraphics)
						app.popup[0]._highlighted._graphicsLayer.graphics[0].hide()
				}
				
				// Mobile popup
				var leftFeatureFound = false;
				var rightFeatureFound = false;
				for (var i = 0; i < app.popup[0].features.length; i++) {
					var feature = app.popup[0].features[i];
					var layerId = feature._graphicsLayer.id;
					
					if ( ! leftFeatureFound && layerId != specificLayerId ) {
						leftFeatureFound = true;
						setMobilePopup(0, feature);
					}
					
					if ( ! rightFeatureFound && layerId == specificLayerId ) {
						rightFeatureFound = true;
						setMobilePopup(1, feature);
					}
					
					if( leftFeatureFound && rightFeatureFound )
						break
				}
			}
			
			//
			// 2 webmaps : swipe
			//
			
			function handlerIn(){
				$("#swipeImg1").css("background", "url(resources/icons/sprite-icons.png)-536px -1152px"); 
				$("#swipeImg2").css("background", "url(resources/icons/sprite-icons.png)-536px -1152px"); 
			}
			
			function handlerOut(){
				$("#swipeImg1").css("background", "url(resources/icons/sprite-icons.png)-536px -1254px");
				$("#swipeImg2").css("background", "url(resources/icons/sprite-icons.png)-536px -1254px");
			}
			
			function setUpSwiper()
			{
				$("#resizeWrapper").resizable({
					handles: 'e',
					containement: 'parent',
					minWidth: 2
				});
				
				if (has("touch")) {
					$('.ui-resizable-e').addClass('touch');
					$('#swipeImg').addClass('touch');
				}
					
				$('.ui-resizable-e').append("<div id='swipeImg2'></div>");
				
				$('.ui-resizable-e').hover(handlerIn, handlerOut);

				$('#mainMap1').css('width', '100%');
				$('.esriPopup').css("zIndex", "99");

				var mapPoint = null;
				
				setSwiperPopupHeader();
				
				on(_webMapArray[0], 'click', function(evt)
				{	
					app.popup[0].hide();
					app.popup[1].hide();
					
					var z = {};
					if (evt.target.e_graphic && evt.target.e_graphic.geometry.type == "point") {
						z.screenPoint = app.maps[0].toScreen(evt.target.e_graphic.geometry);
					}
					else
						z = evt;
					
					$("#swipeImg1").fadeOut();
					$("#swipeImg2").fadeOut();
					
					mapPoint = evt;
					_popupState = 'open';
					
					if(app.popup[0].isShowing == true)
						return;				
	
					if(evt.val === "other")
						return;
					
					z.val = 'other';
					
					_webMapArray[1].onClick(z);	
	        	});
				
				on(app.popup[0], "set-features", function() 
				{
					setTimeout(function (){
						setSwipePopup(mapPoint, 0);
					}, 0);
				});
				
				on(_webMapArray[1], 'click', function(evt)
				{	
					app.popup[0].hide();
					app.popup[1].hide();
					var z = {};
					if (evt.target.e_graphic && evt.target.e_graphic.geometry.type == "point") {
						z.screenPoint = app.maps[1].toScreen(evt.target.e_graphic.geometry);
					}
					else
						z = evt;
					
					mapPoint = evt;
					_popupState = 'open';
					
					if(app.popup[1].isShowing == true)
						return;				
							
					if(evt.val === "other")
						return;
						
					z.val = 'other';

					_webMapArray[0].onClick(z, "other");	
	        	});
				
				on(app.popup[1], "set-features", function() 
				{
					setTimeout(function (){
						setSwipePopup(mapPoint, 1);
					}, 0);
				});
				
				on(_webMapArray[0], 'pan-end', function(args)
				{
					var popupAnchor = {};
					if (app.popup[0].isShowing == true) {
						popupAnchor.x = app.popup[0].domNode.offsetLeft;
					}
					else if (app.popup[1].isShowing == true){
						popupAnchor.x = app.popup[1].domNode.offsetLeft;
					}
					else 
						return;
					setSwipePopup(popupAnchor);
	        	});
				
				on(_webMapArray[1], 'pan-end', function(args)
				{
					var popupAnchor = {};
					if (app.popup[0].isShowing == true) {
						popupAnchor.x = app.popup[0].domNode.offsetLeft;
					}
					else if (app.popup[1].isShowing == true){
						popupAnchor.x = app.popup[1].domNode.offsetLeft;
					}
					else 
						return;
					setSwipePopup(popupAnchor);
	        	});
				
				$(window).resize(function(){
					var x = null;
					if (app.popup[0].isShowing)
						x = app.popup[0].domNode.offsetLeft;
					if (app.popup[1].isShowing)
						x = app.popup[1].domNode.offsetLeft;
						
					$("#swipeImg1").hide();
					$("#swipeImg2").fadeOut();
						
					resizeMapDiv({x:x});
				});
				
				// Place popup of width constrained map into other to always display on top
				var popup1 = $('#mainMap0').find('.esriPopup');
				popup1.after($('#mainMap1').find('.esriPopup'));
				
				//Hide slider from clip method
				domStyle.set(dom.byId('sliderDiv'), "display", "none");
				
				initiateSwipe();
			}
			
			function setSwiperPopupHeader()
			{
				$('.esriPopup .titlePane').eq(0).css('backgroundColor', '#' + _popupColors[0]);
				$('.esriPopup .swipeTitle').eq(0).html(_popupTitles[0] || '&nbsp;');
				$('.esriPopup .swipeTitle').eq(0).append('<div id="closePopup0" class="closePopup"><a ><i class="icon-remove icon-white"></i></a></div>');

				if( dom.byId("closePopup0") ) {
					on(dom.byId("closePopup0"), 'click', function(){
						_popupState = 'closed';
						$('.esriPopup').css('visibility', 'hidden');
					});
				}		
				
				$('.esriPopup .titlePane').eq(1).css('backgroundColor', '#' + _popupColors[1]);
				$('.esriPopup .swipeTitle').eq(1).html(_popupTitles[1] || '&nbsp;');
				$('.esriPopup .swipeTitle').eq(1).append('<div id="closePopup1" class="closePopup"><a ><i class="icon-remove icon-white"></i></a></div>');
				
				if( dom.byId("closePopup1") ) {
					on(dom.byId("closePopup1"), 'click', function(){
						_popupState = 'closed';
						$('.esriPopup').css('visibility', 'hidden');
					});
				}
			}
			
			// Should take care of showing mapDiv2
			function resizeMapDiv(mapPoint) 
			{
				$("#mainMap1").css('width', dom.byId('mainMap0').clientWidth);
				$("#mainMap1").css('height', dom.byId('mainMap0').clientHeight);
				if(_webMapArray[0])
				{
					_webMapArray[0].resize();
	  			}
	  			if(_webMapArray[1])
				{
	  				_webMapArray[1].resize();
	  			}
				if(mapPoint.x)
					setSwipePopup(mapPoint);
			}
			
			function syncMap2()
			{
				if (_inProgress == true){
					_inProgress = false;
					return;
	  			}
				
	  			_inProgress = true;
	  			_webMapArray[1].setExtent(_webMapArray[0].extent);
			}
	
			function syncMap1()
			{
				if (_inProgress == true){
	    			_inProgress = false;
	    			return;
	  			}
				
	  			_inProgress = true;
	  			_webMapArray[0].setExtent(_webMapArray[1].extent);
			}
			
			function initiateSwipe() 
			{
				$("#mainMap1").css('width', dom.byId('mainMap0').clientWidth);
				$("#resizeWrapper").css("width", $('#mainMap0').width() / 2 + _xOffset);
				
				$("#swipeImg1").css('left',($('#mainMap0').width()/2 - 48 + _xOffset + "px"));
				$("#swipeImg1").css('top',(($('#mainMap0').height() / 2 -26 + "px")));
				$("#swipeImg1").show();
				
				$("#swipeImg2").css('top',(($('#mainMap0').height() / 2 -26 + "px")));
				$("#swipeImg2").show();
				
				app.maps[0].resize(true);
				app.maps[1].resize(true);
				_webMapArray[0].setExtent(_webMapArray[1].extent).then(function(){
					on(_webMapArray[1], "extent-change", syncMap1);
					on(_webMapArray[0], "extent-change", syncMap2);					
					_inProgress = false;
				});
				
			}
			
			function setSwipePopup(evt, mapIndex)
			{
				if( ! evt || _popupState == 'closed' || !_popup)
					return;
				
				_pointTest = evt.pageY ? evt.mapPoint : _pointTest;
				
				var evtX = evt.pageX || evt.x;
				var targetPopup = evtX > $('#resizeWrapper').width() ? 0 : 1;
				
				app.popup[targetPopup].show(_pointTest);
				app.popup[targetPopup ? 0 : 1].hide();
				
				//Can we use targetPopup in place of mapIndex?
				if( mapIndex != null ) 
					setMobilePopup(mapIndex, (app.popup[mapIndex].features || [null])[0]);
			}
			
			//
			// Common
			//
			
			function setMobilePopup(popupIndex, feature)
			{
				if( feature )
					registry.byId("infoView-mobile" + popupIndex).set("content", feature.getContent());
				else
					registry.byId("infoView-mobile" + popupIndex).set("content", '<div class="noDataMap"><div class="title">' + i18n.swipe.mobileData.noDataMap + '</div></div>');
					
				$("#infoWindowView .noData").hide();
				$('.swiper.infoWindowView').css('display', 'block');
			}
		}
	}
);
