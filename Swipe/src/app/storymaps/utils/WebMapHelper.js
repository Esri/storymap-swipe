define(["esri/request", 
		"esri/renderers/jsonUtils", 
		"dojo/Deferred",
		"dojo/_base/lang",
		"dojo/_base/array"], 
	function(
		esriRequest, 
		jsonUtils,
		Deferred,
		lang,
		array)
	{
		return {
			/**
			 * Clean the web map item to allow to clone the item
			 * @param {Object} item
			 */
			prepareWebmapItemForCloning: function(webmap)
			{
				array.forEach(webmap.itemData.baseMap.baseMapLayers, function(layer){
					delete layer.errors;
					delete layer.layerObject;
					delete layer.resourceInfo;
				});
				
				array.forEach(webmap.itemData.operationalLayers, function(layer){
					delete layer.errors;
					delete layer.layerObject;
					delete layer.resourceInfo;
					
					// Graphics layer
					if( layer.featureCollection && layer.featureCollection.layers ) {
						array.forEach(layer.featureCollection.layers, function(fc){
							delete fc.layerObject;
						});
					}
					
					// Graphics layer
					if( layer.featureCollection && layer.featureCollection.featureSet && layer.featureCollection.featureSet.features ) {
						array.forEach(layer.featureCollection.featureSet.features, function(f){
							delete f._shape;
							delete f._graphicsLayer;
						});
					}
					
					// Dynamic CSV
					if( layer.type == "CSV" && layer.featureCollection )
						delete layer.featureCollection;
					
					// Map Service
					array.forEach(layer.layers, function(subLayer){
						delete subLayer.drawingInfo;
						
						if( subLayer.layerDefinition && subLayer.layerDefinition.drawingInfo && subLayer.layerDefinition.drawingInfo.renderer )
							subLayer.layerDefinition.drawingInfo.renderer = jsonUtils.fromJson(subLayer.layerDefinition.drawingInfo.renderer).toJson();
					});
					
					// Feature Servuce
					if( layer.layerDefinition && layer.layerDefinition.drawingInfo && layer.layerDefinition.drawingInfo.renderer )
						layer.layerDefinition.drawingInfo.renderer = jsonUtils.fromJson(layer.layerDefinition.drawingInfo.renderer).toJson();
				});
			}
		};
	}
);			