define(["esri/widgets","dijit/registry", "dojo/has"],
	function(Widgets, registry, has)
	{
		return function MapSwipe(container)
		{
			var _webMapArray = null;
			var _layers = null;
			var _popupColors = null;
			var _popupTitles = null;
			var _xOffset = null;
			
			var _lastSwiperEventPoint = null;
			var _inProgress = true;
			
			var _pointTest = null;
			var _popupState = null;
			
			this.init = function(webMapArray, layers, popupColors, popupTitles, xOffset)
			{
				console.log("MapSwipe init", webMapArray, layers, popupColors, popupTitles);
				_webMapArray = webMapArray;
				_layers = layers;
				_popupColors = popupColors;
				_popupTitles = popupTitles;
				_xOffset = xOffset;
				
				$('#infoWindowTabImg').css('display', 'none');
				$('#infoWindow').css('display', 'none');

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
				if (_webMapArray.length == 1)
					if(_lastSwiperEventPoint)
						setPopup(_lastSwiperEventPoint);					
				else
					setSwiperPopupHeader();
			}
			
			//
			// Common
			
			function setUpPopup()
			{
				$('.esriPopup .titleButton').css('display', 'none');
				$('.esriPopup .title').css('display', 'none');
				
				// Add a div that will hold the custom title as it's tricky to edit the popup title
				$('.esriPopup .title').after('<div class="swipeTitle"></div>');
			}
			
			//
			
			//
			// 2 layers : clip
			//
			
			function setUpClipper()
			{
				$('#resizeWrapper').css('width', '0%');
				$('#mainMap1').css('width', '0%');
				
				var node = dojo.query(container + " #sliderDiv");
				var sliderDiv = new dojo.dnd.move.parentConstrainedMoveable(node[0], {
	        		area: "mainMap0",
	        		within: true
	      		});
				
				if(has("touch"))
					$('.moveable').addClass('touch');
				
				sliderDiv.node.style.height = _webMapArray[0].height + "px";
				sliderDiv.node.style.top = "0px";
				sliderDiv.node.style.left = $('#mainMap0').width() / 2 + _xOffset + "px";
				
				$("#swipeImg").css('left',($('#mainMap0').width()/2 - 34 + _xOffset + "px"));
				$("#swipeImg").css('top',(($('#mainMap0').height() / 2 - 26 + "px")));
				$("#swipeImg").show();
				
				clipLayer(sliderDiv);
				
				// TODO: should not be needed here
				app.maps[0].reposition();
				app.maps[0].resize();
			}
			
			function clipLayer(slider)
			{					
				var mapPoint = null;
				
				var clipVal = slider.node.offsetLeft;

				getClip(clipVal);
				
				dojo.connect(app.popup[0], "onSetFeatures", function() 
				{
					setPopup(mapPoint);
				});
				
				dojo.connect(_webMapArray[0], 'onClick', function(evt) 
				{	
					mapPoint = evt;	
					$("#swipeImg").fadeOut();
	        	});
				
				dojo.connect(slider, 'onMove', function(args) 
				{
					//sliderDiv.style.top = "0px"; 
					
					var left = parseInt(slider.node.offsetLeft);
					if (left <=0 || left >= (_webMapArray[0].width)) 
						return;       
					clipVal = left;
					setPopup(mapPoint);
					getClip(clipVal);
	        	});
				
				$(window).resize(function()
				{
					slider.node.style.height = _webMapArray[0].height + "px";
				});
				
				dojo.connect(slider, "onMoveStart", function(args) {
					//dojo._setOpacity(this.node, 0.5);
					$("#swipeImg").fadeOut();
	          	});
				
				dojo.connect(slider, "onMoveStop", function(args)
				{
					//dojo._setOpacity(this.node, 1.0);
	        	});
	        	
				
				dojo.connect(_webMapArray[0], 'onPan', function(args) 
				{
					setPopup(mapPoint);
	          		getClip(slider.node.offsetLeft);				
	        	});
				
				var isGraphics = app.maps[0].getLayer(_layers[0]).type == "Feature Layer";
				if(isGraphics){
					dojo.connect(_webMapArray[0], 'onPanEnd', function(args) 
					{
		          		getClip(slider.node.offsetLeft);				
		        	});
					
					var layer = app.maps[0].getLayer(_layers[0]);
						
					if(layer._collection)
						dojo.connect(app.maps[0], 'onZoomEnd', getClip(slider.node.offsetLeft));
					else {
						var opacity = layer._params && layer._params.opacity ? layer._params.opacity : 1.0;
						var updateIsZoom = false;
						
						dojo.connect(app.maps[0], 'onZoomStart', function(){
							updateIsZoom = true;
						});
						
						dojo.connect(app.maps[0].getLayer(_layers[0]), 'onUpdateStart', function(){
							if( updateIsZoom )
								app.maps[0].getLayer(_layers[0]).setOpacity(0.0);
						});
					
						dojo.connect(app.maps[0].getLayer(_layers[0]), 'onUpdateEnd', function(){
							if( updateIsZoom ) 
								app.maps[0].getLayer(_layers[0]).setOpacity(opacity);
							getClip(slider.node.offsetLeft)
							updateIsZoom = false;
						});
					}
				}												
				
	        	if (_webMapArray[0].navigationMode === "css-transforms") 
				{
	          		dojo.connect(_webMapArray[0], 'onPan', function(args) {
	          			getClip(slider.node.offsetLeft);
	        		});
	      		}
			}
			
			function hideGraphics(val)
			{
				//val += 12;
				var ll = app.maps[0].toMap(new esri.geometry.Point(0, app.maps[0].height, app.maps[0].spatialReference));
				var ur = app.maps[0].toMap(new esri.geometry.Point(val, 0, app.maps[0].spatialReference));
				var leftExtent = new esri.geometry.Extent(ll.x, ll.y, ur.x, ur.y, app.maps[0].spatialReference);
	
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
				var swipeDiv = dojo.byId("sliderDiv");
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
					
					var isGraphics = app.maps[0].getLayer(_layers[0]).type == "Feature Layer";
					if(isGraphics){
						hideGraphics(leftval);
						return;
					}
			                    
			        // If CSS Transformation is applied to the layer (i.e. swipediv), 
			        // record the amount of translation and adjust clip rect accordingly
			        var tx = 0, ty = 0;
					if (_webMapArray[0].navigationMode === "css-transforms")
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
							if(transformValue.toLowerCase().indexOf("translate3d") !== -1) 
							{
								transformValue = transformValue.replace("translate3d(", "").replace(")", "").replace(/px/ig, "").replace(/\s/i, "").split(",");				
							}
						
							else if(transformValue.toLowerCase().indexOf("translate") !== -1) 
							{
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
			            	leftval -= tx;
			            	rightval -= tx;
			            	topval -= ty;
			            	bottomval -= ty;
			        	}
			        }
			                    
			        //Syntax for clip "rect(top,right,bottom,left)" commas b/w values is standard syntax, w/o is backwards compatible
			        //var clipstring = "rect(0px " + val + "px " + map.height + "px " + " 0px)";      
			        //var clipString = "rect(" + topval + "px " + rightval + "px " + bottomval + "px " + leftval + "px)";
					var clipString = "rect(" + topval + "px, " + leftval + "px, " + bottomval + "px, " + rightval + "px)";
			        clipDiv.style.clip = clipString;
		      	}
			}
			
			function setPopup(evt)
			{
				if( ! evt || ! app.popup[0] )
					return;

				var isGraphics = app.maps[0].getLayer(_layers[0]).type == "Feature Layer";
				var clipLeft = parseInt(dojo.byId("sliderDiv").style.left.split("px",1));
				var isOnSpecificLayer = evt.pageX < clipLeft;
				var specificLayerId = _layers[0] + (isGraphics ? "" : "_1"); // TODO is that _1 safe ?
				var colorTitleIndex = isOnSpecificLayer ? 1 : 0;
				
				_lastSwiperEventPoint = evt;
				
				// Desktop popup
				if(!app.popup[0].features)
					return;
				
				// Data may not be found when clicking on the same side than a graphics layer
				var dataFound = false;
				for(var i=0; i < app.popup[0].features.length; i++) {
					var feature = app.popup[0].features[i];
					var layerId = feature._graphicsLayer.id;
					if ( (isOnSpecificLayer && layerId == specificLayerId) || (!isOnSpecificLayer && layerId != specificLayerId) ) {
						dataFound = true;
						
						$('.esriPopup .titlePane').css('backgroundColor', '#' + _popupColors[colorTitleIndex]);
						$('.esriPopup .swipeTitle').html(_popupTitles[colorTitleIndex] || '&nbsp;');
						$('.esriPopup .swipeTitle').append('<div id="popup0" class="closePopup"><a ><i class="icon-remove icon-white"></i></a></div>');
						
	        			dojo.connect(dojo.byId("popup0"), 'onclick', function(){
							$('.esriPopup').css('visibility', 'hidden');
						})
						
						app.popup[0].select(i);
						var feature = app.popup[0].getSelectedFeature();
						break;
					}
				}
				
				if( ! dataFound ) {
					$('.esriPopup .titlePane').css('backgroundColor', '#' + _popupColors[0]);
					$('.esriPopup .swipeTitle').html(_popupTitles[0] || '&nbsp;');
					$('.esriPopup .swipeTitle').append('<div id="popup0" class="closePopup"><a ><i class="icon-remove icon-white"></i></a></div>');
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
			
			function setUpSwiper()
			{
				$("#resizeWrapper").resizable({
					handles: 'e',
					containement: 'parent',
					minWidth: 2
				});
				
				if(has("touch"))
					$('.ui-resizable-e').addClass('touch');
					
				//$('#resizeWrapper').css('width', '100%');
				$('#mainMap1').css('width', '100%');
				$('.esriPopup').css("zIndex", "99");

				var mapPoint = null;
				
				setSwiperPopupHeader();
				
				dojo.connect(_webMapArray[0], 'onClick', function(evt, source)
				{	
					app.popup[0].hide();
					app.popup[1].hide();
					$("#swipeImg1").fadeOut();
					
					mapPoint = evt;
					_popupState = 'open';
					
					if(app.popup[0].isShowing == true)
						return;				
	
					if(source == "other")
						return;
						
					_webMapArray[1].onClick(evt, "other");
	        	});
				
				dojo.connect(app.popup[0], "onSetFeatures", function() 
				{
					setSwipePopup(mapPoint, 0);
				});
				
				dojo.connect(_webMapArray[1], 'onClick', function(evt, source)
				{	
					app.popup[0].hide();
					app.popup[1].hide();
					
					mapPoint = evt;
					_popupState = 'open';
					
					if(app.popup[1].isShowing == true)
						return;				
	
					if( app.popup[1].deferreds ) {
						app.popup[1].deferreds[0].then(function(){
							setSwipePopup(mapPoint, 1);
						});
					}
							
					if(source == "other")
						return;
						
					_webMapArray[0].onClick(evt, "other");	
	        	});
				
				dojo.connect(_webMapArray[0], 'onPanEnd', function(args)
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
				
				dojo.connect(_webMapArray[1], 'onPanEnd', function(args)
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
						
					$("#swipeImg1").fadeOut();
						
					resizeMapDiv({x:x});
				});
				
				// Place popup of width constrained map into other to always display on top
				var popup1 = $('#mainMap0').find('.esriPopup');
				popup1.after($('#mainMap1').find('.esriPopup'));
				
				//Hide slider from clip method
				dojo.style(dojo.byId('sliderDiv'), "display", "none");
				
				initiateSwipe();
			}
			
			function setSwiperPopupHeader()
			{
				$('.esriPopup .titlePane').eq(0).css('backgroundColor', '#' + _popupColors[0]);
				$('.esriPopup .swipeTitle').eq(0).html(_popupTitles[0] || '&nbsp;');
				$('.esriPopup .swipeTitle').eq(0).append('<div id="closePopup0" class="closePopup"><a ><i class="icon-remove icon-white"></i></a></div>');
						
	        	dojo.connect(dojo.byId("closePopup0"), 'onclick', function(){
					_popupState = 'closed';
					$('.esriPopup').css('visibility', 'hidden');
				})
				
				$('.esriPopup .titlePane').eq(1).css('backgroundColor', '#' + _popupColors[1]);
				$('.esriPopup .swipeTitle').eq(1).html(_popupTitles[1] || '&nbsp;');
				$('.esriPopup .swipeTitle').eq(1).append('<div id="closePopup1" class="closePopup"><a ><i class="icon-remove icon-white"></i></a></div>');
						
	        	dojo.connect(dojo.byId("closePopup1"), 'onclick', function(){
					_popupState = 'closed';
					$('.esriPopup').css('visibility', 'hidden');
				})
			}
			
			// Should take care of showing mapDiv2
			function resizeMapDiv(mapPoint) 
			{
				$("#mainMap1").css('width', dojo.byId('mainMap0').clientWidth);
				$("#mainMap1").css('height', dojo.byId('mainMap0').clientHeight);
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
				$("#mainMap1").css('width', dojo.byId('mainMap0').clientWidth);
				$("#resizeWrapper").css("width", $('#mainMap0').width() / 2 + _xOffset);
				
				$("#swipeImg1").css('left',($('#mainMap0').width()/2 - 44 + _xOffset + "px"));
				$("#swipeImg1").css('top',(($('#mainMap0').height() / 2 -26 + "px")));
				$("#swipeImg1").show();
				
				app.maps[1].resize(true);
				_webMapArray[1].setExtent(_webMapArray[0].extent).then(function(){
					dojo.connect(_webMapArray[0], "onExtentChange", syncMap2);
					dojo.connect(_webMapArray[1], "onExtentChange", syncMap1);
					_inProgress = false;
				});
			}
			
			function setSwipePopup(evt, mapIndex)
			{
				if( ! evt || _popupState == 'closed')
					return;
				
				_pointTest = evt.y ? evt.mapPoint : _pointTest;
				
				var targetPopup = evt.x > $('#resizeWrapper').width() ? 0 : 1;
				
				app.popup[targetPopup].show(_pointTest);
				app.popup[targetPopup ? 0 : 1].hide();
				
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
