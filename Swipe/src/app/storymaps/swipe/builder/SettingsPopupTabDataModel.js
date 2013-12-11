define(["dojo/topic"], 
	function (topic) {
		return function SettingsPopupTabDataModel(titleContainer, contentContainer, popupApplyButton) 
		{
			// Clone the #popupView template into a new DIV
			$(contentContainer).append($('#popupView-dataModel').children().clone());		
			
			// Events
			$(contentContainer).find(".inputWebmapId1").keyup(checkWebmapsValidity);
			$(contentContainer).find(".inputWebmapId2").keyup(checkWebmapsValidity);
			$(contentContainer).find(".inputWebmapId2").blur(function(){ $(window).scrollTop(0); });
			$(contentContainer).find('.btnSelect').fastClick(onDataModelChange);
			$(contentContainer).find('.switchMapIds').fastClick(switchMapIds);
			
			topic.subscribe("LAYOUT_CHANGE", configureWebmapsModelLbl);
			
			this.init = function(settings) 
			{
				selectDataModel(settings.dataModel == "TWO_WEBMAPS" ? 1 : 0);
				buildLayersModel(settings.layers);
				buildWebmapsModel(settings.webmaps);
				configureWebmapsModelLbl(settings.layout);
				checkWebmapsValidity();
				
				if($(contentContainer).parent().parent()[0].id == 'settingsPopup')
					$('.switchMapIds').addClass('settings');
			}
			
			this.show = function()
			{
				//
			}
			
			this.save = function()
			{		
				return {
					dataModel: getSelectedDataModel(),
					webmaps: getWebmaps(),
					layers: getLayerIds()
				};
			}

			function getSelectedDataModel()
			{
				return $(contentContainer).find('.dataModel-box.selected').index() == 2 ? "TWO_WEBMAPS" : "TWO_LAYERS";
			}
			
			function getWebmaps()
			{
				var result = [ $(contentContainer).find('.inputWebmapId1').val() ];
				if( $(contentContainer).find('.inputWebmapId2').val() )
					result.push($(contentContainer).find('.inputWebmapId2').val());
				return result;
			}
			
			function checkWebmapsValidity()
			{
				if( getSelectedDataModel() != "TWO_WEBMAPS" )
					popupApplyButton.removeAttr("disabled");					
				else if( $(contentContainer).find(".inputWebmapId1").val().length != 32 || $(contentContainer).find(".inputWebmapId2").val().length != 32)
					popupApplyButton.attr("disabled", "disabled");
				else if ($(contentContainer).find('.inputWebmapId1').val() == $(contentContainer).find('.inputWebmapId2').val())
					popupApplyButton.attr("disabled", "disabled");
				else
					popupApplyButton.removeAttr("disabled");
			}
			
			function getLayerIds()
			{
				return [
					$(contentContainer).find('#mapLayers').find(":selected").attr("value")
				];
			}
			
			function onDataModelChange(event)
			{
				selectDataModel($(event.target).parent().index() == 2 ? 1 : 0)
			}
			
			function switchMapIds()
			{
				var map1 = $(contentContainer).find(".inputWebmapId1").val();
				var map2 = $(contentContainer).find(".inputWebmapId2").val();
				$(contentContainer).find(".inputWebmapId1").val(map2);
				$(contentContainer).find(".inputWebmapId2").val(map1);
				map1 == app.rootMapId ? $(contentContainer).find(".inputWebmapId2").attr('disabled', 'disabled') : $(contentContainer).find(".inputWebmapId2").attr('disabled', false);
				map2 == app.rootMapId ? $(contentContainer).find(".inputWebmapId1").attr('disabled', 'disabled') : $(contentContainer).find(".inputWebmapId1").attr('disabled', false);
			}
			
			function buildLayersModel(layers)
			{
				// Create the layer list if it wasn't already created
				if($(contentContainer).find('#mapLayers').children("option").length > 0)
					return;
				
				// Loop through all webmap layers
				var layersIds = (app.map.layerIds || []).concat(app.map.graphicsLayerIds);
				$.each(layersIds, function(i, layerId)
				{
					var layer = app.map.getLayer(layerId);
					var layerName = layer && layer.arcgisProps && layer.arcgisProps.title ? layer.arcgisProps.title : (layer && layer.name ? layer.name : layerId);

					// Exclude basemap
					if( ! layer || layer._basemapGalleryLayerType == "basemap" || layer._basemapGalleryLayerType == "reference" )
						return;
					
					// Exclude layer of dynamic services if the parent service is present
					// Meaning layer is here for popup and rendered server side
					// If parent service isn't present it's a client rendering so we need to keep it
					if( layer.layerId >= 0 ) {
						var serviceName = layer.id.split('_').slice(0,-1).join('_');
						if( $.inArray(serviceName, app.map.layerIds) >= 0 )
							return;
					}
					
					$(contentContainer).find('#mapLayers').append('<option value="' + layerId + '">' + (layerName || layerId) + '</option>');
				});

				// Selected the last layer
				var selectedIndex = $('#mapLayers').children("option").length-1;
				// If a layer has already been selected
				if( layers && layers[0] ) {
					$.each($('#mapLayers').children("option"), function(i, option){
						if( $(option).val() == layers[0] )
							selectedIndex = i;							
					});
				}
				
				var layerId = $(contentContainer).find('#mapLayers').find('option').eq(selectedIndex).val()
				$(contentContainer).find('#mapLayers').val(layerId);
			}
			
			function buildWebmapsModel(webmaps)
			{
				webmaps = webmaps || [];
				$(contentContainer).find('.inputWebmapId1').val(webmaps[0]);
				$(contentContainer).find('.inputWebmapId2').val(webmaps[1]);
				var map1 = $(contentContainer).find(".inputWebmapId1").val();
				var map2 = $(contentContainer).find(".inputWebmapId2").val();
				map1 == app.rootMapId ? $(contentContainer).find(".inputWebmapId1").attr('disabled', 'disabled') : $(contentContainer).find(".inputWebmapId1").attr('disabled', false);
				map2 == app.rootMapId ? $(contentContainer).find(".inputWebmapId2").attr('disabled', 'disabled') : $(contentContainer).find(".inputWebmapId2").attr('disabled', false);				
			}
			
			function configureWebmapsModelLbl(layout)
			{
				var dataModelTitle = layout == "swipe" ? i18n.swipe.settingsDataModel.settingsDataModelExplainSwipe : i18n.swipe.settingsDataModel.settingsDataModelExplainSpyGlass;
								
				var webmap1Lbl = layout == "swipe" ? i18n.swipe.settingsDataModel.settingsDataModelWebmapSwipeId2 : i18n.swipe.settingsDataModel.settingsDataModelWebmapGlassId1;
				var webmap2Lbl = layout == "swipe" ? i18n.swipe.settingsDataModel.settingsDataModelWebmapSwipeId1 : i18n.swipe.settingsDataModel.settingsDataModelWebmapGlassId2;
				
				var dataModel1Lbl = layout == "swipe" ? i18n.swipe.settingsDataModel.settingsDataModel1Explain : i18n.swipe.settingsDataModel.settingsDataModel1SpyGlassExplain;
				var dataModel2Lbl = layout == "swipe" ? i18n.swipe.settingsDataModel.settingsDataModel2Explain : i18n.swipe.settingsDataModel.settingsDataModel2SpyGlassExplain;

				$(contentContainer).find('p').html(dataModelTitle);
				
				$(contentContainer).find('.control-label[for=inputWebmapId1]').html(webmap1Lbl + ":");
				$(contentContainer).find('.control-label[for=inputWebmapId2]').html(webmap2Lbl + ":");
				
				$(contentContainer).find('.model1.alert').html(dataModel1Lbl);
				$(contentContainer).find('.model2.alert').html(
					dataModel2Lbl
					+ ' <a class="webmapidtooltip">' + '<br />' + i18n.swipe.settingsDataModel.settingsDataModel2HelpTitle + '</a>'
				);
				
				$(contentContainer).find('.webmapidtooltip').popover({
					trigger: 'hover',
					placement: 'bottom',
					html: true,
					content: '<div style="text-align: center">' 
						+  i18n.swipe.settingsDataModel.settingsDataModel2HelpContent
						+  '<img style="margin-top: 6px" src="resources/icons/tooltip-map-id.png" width="220px" height="126px"/>'
						+ '</div>' 
				});
			}
			
			function selectDataModel(index)
			{
				index == 0 ? app.mainMap = app.map : app.mainMap = (app.maps[0] || app.map);
				$(contentContainer).find('.dataModel-box').removeClass("selected");
				$(contentContainer).find('.dataModel-box').eq(index ? 1 : 0).addClass("selected selectedDataModel");
				
				$(contentContainer).find('.dataModel-box-content').removeClass("fade");
				$(contentContainer).find('.dataModel-box-content').eq(index ? 0 : 1).addClass("fade");
				
				checkWebmapsValidity();
			}
	
			this.initLocalization = function()
			{
				if($(titleContainer).find('.wizardLabel')[0])
					$(titleContainer).find('.wizardLabel').html(i18n.swipe.settingsDataModel.settingsTabDataModel);
				else
					$(titleContainer).html(i18n.swipe.settingsDataModel.settingsTabDataModel);
				$(contentContainer).find('p').html(i18n.swipe.settingsDataModel.settingsDataModelExplainSwipe);
				$(contentContainer).find('.model1').html(i18n.swipe.settingsDataModel.settingsDataModelOneMap);
				$(contentContainer).find('.model2').html(i18n.swipe.settingsDataModel.settingsDataModelTwoMaps);
				$(contentContainer).find('.dataModel-box .selectedDataModel').html(i18n.swipe.settingsDataModel.settingsDataModelSelected);
				$(contentContainer).find('.btnSelect').html(i18n.swipe.settingsDataModel.settingsDataModelSelect);
				$(contentContainer).find('.layersWarning').html(i18n.swipe.settingsDataModel.settingsDataModel1Warning);
			}
		}
	}
);