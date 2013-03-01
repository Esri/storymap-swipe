  dojo.require("esri.map");
  dojo.require("esri.layout");
  dojo.require("esri.widgets");
  dojo.require("esri.arcgis.utils");
  dojo.require("esri.IdentityManager");


     var map, urlObject, i18n, chooseLayer, swipeslider, swipediv, clipval, offset_left, offset_top, swipelayerid="", swipeconnect=null, mapPoint, layers, setFeatures = true;
     var mapLoaded = false;

     function initMap() {
       patchID();

       dojo.some(["ar","he"], function(l){
         if(dojo.locale.indexOf(l) !== -1){
           configOptions.isRightToLeft = true;
           return true;
         }
       });
       var dirNode = document.getElementsByTagName("html")[0];
       if(configOptions.isRightToLeft){
         dirNode.setAttribute("dir","rtl");
         dojo.addClass( dirNode,"esriRtl");
         //Page Specific
         dojo.attr(dojo.byId("legendCon"),"dir","rtl");
       }else{
         dirNode.setAttribute("dir","ltr");
         dojo.addClass(dirNode,"esriLtr");
         //Page Specific
         dojo.attr(dojo.byId("legendCon"),"dir","ltr");
       }

       i18n = dojo.i18n.getLocalization("esriTemplate","template");
       dojo.byId('loading').innerHTML = i18n.viewer.loading.message;
       dojo.byId('legTogText').innerHTML = i18n.viewer.legToggle.down;

       if(configOptions.geometryserviceurl && location.protocol === "https:"){
         configOptions.geometryserviceurl = configOptions.geometryserviceurl.replace('http:','https:');
       }
       esri.config.defaults.geometryService = new esri.tasks.GeometryService(configOptions.geometryserviceurl);

       if(!configOptions.sharingurl){
         configOptions.sharingurl = location.protocol + '//' + location.host + "/sharing/content/items";
       }
       esri.arcgis.utils.arcgisUrl = configOptions.sharingurl;

       if(!configOptions.proxyurl){
         configOptions.proxyurl = location.protocol + '//' + location.host + "/sharing/proxy";
       }

       esri.config.defaults.io.proxyUrl =  configOptions.proxyurl;

       esri.config.defaults.io.alwaysUseProxy = false;

       urlObject = esri.urlToObject(document.location.href);
       urlObject.query = urlObject.query || {};

       if(urlObject.query.title){
         configOptions.title = urlObject.query.title;
       }
       if(urlObject.query.subtitle){
         configOptions.subtitle = urlObject.query.subtitle;
       }
       if(urlObject.query.swipe){
         configOptions.chooseSwipeLevel = urlObject.query.swipe;
       }
       if(urlObject.query.webmap){
         configOptions.webmap = urlObject.query.webmap;
       }
       if(urlObject.query.legend){
         configOptions.showLegend = urlObject.query.legend;
       }
       if(urlObject.query.bingMapsKey){
         configOptions.bingmapskey = urlObject.query.bingMapsKey;
       }

	   esri.arcgis.utils.arcgisUrl = configOptions.sharingurl;
       
       //is an appid specified - if so read json from there
      if(configOptions.appid || (urlObject.query && urlObject.query.appid)){
    var appid = configOptions.appid || urlObject.query.appid;
    var requestHandle = esri.request({
      url: configOptions.sharingurl + "/" + appid + "/data",
      content: {f:"json"},
      callbackParamName:"callback",
      load: function(response){
         if(response.values.title !== undefined){configOptions.title = response.values.title;}
         if(response.values.subtitle !== undefined){configOptions.subtitle = response.values.subtitle;}
         if(response.values.legend !== undefined){configOptions.showLegend = response.values.legend;}
         if(response.values.swipe !== undefined){configOptions.chooseSwipeLevel = response.values.swipe;}
           if(response.values.webmap !== undefined){configOptions.webmap = response.values.webmap;}

         createMap();
      },
      error: function(response){
      var e = response.message;
       alert(i18n.viewer.errors.createMap +  response.message);
      }
    });
     }else{
      createMap();
     }

     }

     function createMap(){

	  var popup = new esri.dijit.Popup({
		highlight:true
      }, dojo.create("div"));

	   var mapDeferred = esri.arcgis.utils.createMap(configOptions.webmap, "map", {
         mapOptions: {
           slider: true,
           sliderStyle:"small",
           nav: false,
           wrapAround180:true,
		   infoWindow:popup
         },
         ignorePopups:false,
         bingMapsKey: configOptions.bingmapskey
       });

       mapDeferred.addCallback(function (response) {

		 document.title = configOptions.title|| response.itemInfo.item.title || "";
         dojo.byId("title").innerHTML = configOptions.title ||response.itemInfo.item.title;
         dojo.byId("subtitle").innerHTML = configOptions.subtitle|| response.itemInfo.item.snippet || "";

         map = response.map;

		 dojo.connect(map,"onUpdateEnd",hideLoader);
		 dojo.connect(map,"onClick",function(event){
			 mapPoint = event.mapPoint;
		 });
		 dojo.connect(popup,"onSetFeatures",function(){
			 if (setFeatures == true){
				 var selectedFeatures = [];
				 dojo.forEach(popup.features,function(lyr,i){
					 if(lyr.geometry.type == 'polygon'){
						 if (lyr.geometry.contains(mapPoint) == true){
							 selectedFeatures.push(lyr);
						 }
					 }
				 });
				 setFeatures = false;
				 popup.setFeatures(selectedFeatures);
			 }
			 else{
				 setFeatures = true;
			 }
		 });

         layers = response.itemInfo.itemData.operationalLayers;

         if(map.loaded){
           initUI(layers);
		   populateLayerList();
		   if(configOptions.showLegend === "false" || configOptions.showLegend === false){
			   $("#legendCon").hide();
		   }
         }
         else{
           dojo.connect(map,"onLoad",function(){
             initUI(layers);
			 populateLayerList();
			 if(configOptions.showLegend === "false" || configOptions.showLegend === false){
			   $("#legendCon").hide();
		   	 }
           });
         }
         //resize the map when the browser resizes
         dojo.connect(dijit.byId('map'), 'resize', map,map.resize);
       });

       mapDeferred.addErrback(function (error) {
         alert(i18n.viewer.errors.createMap + " " + dojo.toJson(error.message));
       });

     }


     function initUI(layers) {
       //add chrome theme for popup
       dojo.addClass(map.infoWindow.domNode, "chrome");
       //add the scalebar
       var scalebar = new esri.dijit.Scalebar({
         map: map,
         scalebarUnit:i18n.viewer.main.scaleBarUnits //metric or english
       });

       $(".esriSimpleSliderIncrementButton").addClass("zoomButtonIn");
            $(".zoomButtonIn").each(function(i){
              $(this).after("<div class='esriSimpleSliderIncrementButton initExtentButton'><img style='margin-top:5px' src='images/home.png'></div>");
        $(".initExtentButton").click(function(){
          map.setExtent(map._mapParams.extent);
        });
      });

       var layerInfo = buildLayersList(layers);

       if(layerInfo.length > 0){
         var legendDijit = new esri.dijit.Legend({
           map:map,
           layerInfos:layerInfo
         },"legendDiv");
         legendDijit.startup();
       }
       else{
         $("#legendToggle").hide();
       }
     }

//build a list of layers to dispaly in the legend
  function buildLayersList(layers){

 //layers  arg is  response.itemInfo.itemData.operationalLayers;
  var layerInfos = [];
  dojo.forEach(layers, function (mapLayer, index) {
      var layerInfo = {};
      if (mapLayer.featureCollection && mapLayer.type !== "CSV") {
        if (mapLayer.featureCollection.showLegend === true) {
            dojo.forEach(mapLayer.featureCollection.layers, function (fcMapLayer) {
              if (fcMapLayer.showLegend !== false) {
                  layerInfo = {
                      "layer": fcMapLayer.layerObject,
                      "title": mapLayer.title,
                      "defaultSymbol": false
                  };
                  if (mapLayer.featureCollection.layers.length > 1) {
                      layerInfo.title += " - " + fcMapLayer.layerDefinition.name;
                  }
                  layerInfos.push(layerInfo);
              }
            });
          }
      } else if (mapLayer.showLegend !== false && mapLayer.layerObject) {
      var showDefaultSymbol = false;
      if (mapLayer.layerObject.version < 10.1 && (mapLayer.layerObject instanceof esri.layers.ArcGISDynamicMapServiceLayer || mapLayer.layerObject instanceof esri.layers.ArcGISTiledMapServiceLayer)) {
        showDefaultSymbol = true;
      }
      layerInfo = {
        "layer": mapLayer.layerObject,
        "title": mapLayer.title,
        "defaultSymbol": showDefaultSymbol
      };
        //does it have layers too? If so check to see if showLegend is false
        if (mapLayer.layers) {
            var hideLayers = dojo.map(dojo.filter(mapLayer.layers, function (lyr) {
                return (lyr.showLegend === false);
            }), function (lyr) {
                return lyr.id;
            });
            if (hideLayers.length) {
                layerInfo.hideLayers = hideLayers;
            }
        }
        layerInfos.push(layerInfo);
    }
  });
  return layerInfos;
  }

     function patchID() {  //patch id manager for use in apps.arcgis.com
       esri.id._isIdProvider = function(server, resource) {
       // server and resource are assumed one of portal domains

       var i = -1, j = -1;

       dojo.forEach(this._gwDomains, function(domain, idx) {
         if (i === -1 && domain.regex.test(server)) {
           i = idx;
         }
         if (j === -1 && domain.regex.test(resource)) {
           j = idx;
         }
       });

       var retVal = false;

       if (i > -1 && j > -1) {
         if (i === 0 || i === 4) {
           if (j === 0 || j === 4) {
             retVal = true;
           }
         }
         else if (i === 1) {
           if (j === 1 || j === 2) {
             retVal = true;
           }
         }
         else if (i === 2) {
           if (j === 2) {
             retVal = true;
           }
         }
         else if (i === 3) {
           if (j === 3) {
             retVal = true;
           }
         }
       }

       return retVal;
     };
    }

	function hideLoader(){
	  if (mapLoaded == false){
		mapLoaded = true;
		$("#loadingCon").hide();
		$("#swipeImg").css('left',((map.width/2)-80));
		$("#swipeImg").css('top',((map.height/2)-50));
		$("#swipeImg").show();
	  }
	}

	//Jquery Layout
	$(document).ready(function(e) {
	  $("#legendToggle").click(function(){
		if ($("#legendDiv").css('display')=='none'){
		  $("#legTogText").html(i18n.viewer.legToggle.up);
		}
		else{
		  $("#legTogText").html(i18n.viewer.legToggle.down);
		}
		$("#legendDiv").slideToggle();
	  });
    });

	//Swipe Control
	function populateLayerList(){
	  var select = dojo.byId("layerlistdd");
	  if (map.graphics.graphics.length > 0) {
		select.options[select.options.length] = new Option("Graphics Layer", map.graphics.id,"selected");
	  }
	  //reverse to get the correct order of layers added to map
	  var layerids = dojo.clone(map.layerIds).reverse();
	  dojo.forEach(layerids, function(id, index){
		select.options[select.options.length] = new Option(id, id);
	  });
	  select.disabled= false;
	  startswipe();
	}

	function initswipe() {
      chooseLayer = configOptions.chooseSwipeLevel;
	  swipelayerid = dojo.byId("layerlistdd")[chooseLayer].value;
      clipval = map.width;
      swipediv = null;
      if (swipelayerid == map.graphics.id) {
        //console.log("Graphics layer");
        //map.graphics._div.parent.rawNode.id
        swipediv = dojo.byId(map.container.id + "_gc");
      }
      else {
        var layer = map.getLayer(swipelayerid);
        //console.log(layer);
        if (layer == null || layer == undefined) {
          alert(i18n.viewer.errors.notDefined);
          return;
        }
        swipediv = layer._div;
	  }
      if (swipediv === undefined) {
        alert(i18n.viewer.errors.undfnd);
        return;
      }
	  if (swipediv.style === undefined) {
		alert(i18n.viewer.errors.noStyle);
		return;
	  }
      //console.log("Swipe ready to use on layer: " + swipelayerid);
    }

    function startswipe(){
      //map.hideZoomSlider();
      //console.log("Swipe tool initializing ...");

      initswipe();

      if (swipeslider != undefined || swipeslider != null) {
        //console.log("swipe slider is visible? should not happen");
        //console.log(swipeslider);
	  }

	  //swipelayerid = dojo.byId("layerlistdd").value;
	  //dojo.byId("layerlistdd").disabled = true;

	  if (swipelayerid === undefined || swipelayerid == "") {
        alert(i18n.viewer.errors.notDefined);
        return;
      }
      swipeslider = new dojo.dnd.move.parentConstrainedMoveable("sliderdiv", {
        area: "content",
        within: true
      });

      swipeslider.node.style.height = map.height + "px";
      swipeslider.node.style.top = "0px";
      swipeslider.node.style.left = ((map.width/2)-4) + "px";
	  if (iPad == true){
		swipeslider.node.style.left = ((map.width/2)-7) + "px";
	  }
      clipval = ((map.width/2)-4);

      //Just a check, should not call this function here
        if (swipediv != null)
        clearClip();

        //console.log("Swipe layer: " + swipelayerid);

        if (swipelayerid == null || swipelayerid == "") {
          alert(i18n.viewer.errors.notDefined);
          return;
        }

        cliplayer(swipelayerid);
      }

      function cliplayer(layerid){
        //Initial swipe slider location
        swipe(dojo.byId("sliderdiv").style.left);

        //Make the slider visible
        dojo.byId("sliderdiv").style.display = "";

        dojo.connect(swipeslider, "onMoveStart", function(args){
        //console.log("move start");
        //this.node.style.opacity = "0.5";
        //dojo._setOpacity(this.node, 0.5);
		$("#sliderdiv").fadeTo("fast","0.5");
		$("#swipeImg").fadeOut();

      });
      swipeconnect = dojo.connect(swipeslider, 'onMove', function(args){
        this.node.style.top = "0px"; //needed to avoid offset
        var left = parseInt(this.node.style.left);
        //console.log(left + ", " + (map.width));
        if (left <=0 || left >= (map.width)) return;
          clipval = this.node.style.left;
          swipe(clipval);
        });
        dojo.connect(swipeslider, "onMoveStop", function(args){
          //console.log("move stop event");
          //this.node.style.opacity = "1.0";
          //dojo._setOpacity(this.node, 1.0);
		  $("#sliderdiv").fadeTo("fast","1.5");
        });
        panEndConnect = dojo.connect(map, 'onPanEnd', function(args){
          //console.log("pan end event - refreshing swipe position");
          swipe(clipval);
        });

        if (map.navigationMode === "css-transforms") {
          panConnect = dojo.connect(map, 'onPan', function(args){
          //console.log("pan end event - refreshing swipe position");
          swipe(clipval);
        });
      }
    }

    function clearClip(){
      //console.log("Clearing clip");
      if (swipediv != null) {
        swipediv.style.clip = dojo.isIE ? "rect(auto auto auto auto)" : "";
      }
    }

    function swipe(val){
      if (swipediv != null) {
        offset_left = parseFloat(swipediv.style.left);
        offset_top = parseFloat(swipediv.style.top);

        //console.log("Val: " + val);

        var rightval, leftval, topval, bottomval;

        if (offset_left > 0) {
          rightval = parseFloat(val) - Math.abs(offset_left);
          leftval = -(offset_left);
        }
        else
        if (offset_left < 0) {
          leftval = 0;
          rightval = parseFloat(val) + Math.abs(offset_left);
        }
        else {
          leftval = 0;
          rightval = parseFloat(val);
        }
        if (offset_top > 0) {
          topval = -(offset_top);
          bottomval = map.height - offset_top;
		}
        else
        if (offset_top < 0) {
          topval = 0;
          bottomval = map.height + Math.abs(offset_top);
        }
        else {
          topval = 0;
          bottomval = map.height;
        }

        // If CSS Transformation is applied to the layer (i.e. swipediv),
        // record the amount of translation and adjust clip rect
        // accordingly
        var tx = 0, ty = 0;
        if (map.navigationMode === "css-transforms") {
          var prefix = "";
          if (dojo.isWebKit) {
            prefix = "-webkit-";
          }
          if (dojo.isFF) {
            prefix = "-moz-";
          }
          if (dojo.isIE) {
            prefix = "-ms-";
          }
          if (dojo.isOpera) {
            prefix = "-o-";
          }

          var transformValue = swipediv.style.getPropertyValue(prefix + "transform");

          if(transformValue) {
			if(transformValue.toLowerCase().indexOf("translate3d") !== -1) {
			  transformValue = transformValue.replace("translate3d(", "").replace(")", "").replace(/px/ig, "").replace(/\s/i, "").split(",");
			}
			else if(transformValue.toLowerCase().indexOf("translate") !== -1) {
			  transformValue = transformValue.replace("translate(", "").replace(")", "").replace(/px/ig, "").replace(/\s/i, "").split(",");
			}

			//console.log(transformValue);

			try {
			  tx = parseFloat(transformValue[0]);
			  ty = parseFloat(transformValue[1]);
			} catch(e) {
			  alert(i18n.viewer.errors.noContinue);
			  console.error(e);
			}

            //console.log("transform = ", tx, ty);
            leftval -= tx;
            rightval -= tx;
            topval -= ty;
            bottomval -= ty;
          }
        }

        //Syntax for clip "rect(top,right,bottom,left)"
        //var clipstring = "rect(0px " + val + "px " + map.height + "px " + " 0px)";
        var clipstring = "rect(" + topval + "px " + rightval + "px " + bottomval + "px " + leftval + "px)";
        //console.log("New Clip string(T,R,B,L): " + clipstring);
        swipediv.style.clip = clipstring;
      }
	}

    //This is called when "Stop Swipe" button is clicked
    function stopswipe(){
      map.showZoomSlider();
      //console.log("Swipe tool disabled!");
      swipeslider = null;
      //dojo.byId("layerlistdd").disabled = false;
      dojo.byId("sliderdiv").style.display = "none";
      if (swipeconnect)
      dojo.disconnect(swipeconnect);
      if (panEndConnect)
      dojo.disconnect(panEndConnect);
      if (panConnect)
      dojo.disconnect(panConnect);
      clearInterval(animtimer);
      clearInterval(flashtimer);
      if (swipediv != null) {
        swipediv.style.clip = dojo.isIE ? "rect(auto auto auto auto)" : "";
        swipediv = null;
      }
	}