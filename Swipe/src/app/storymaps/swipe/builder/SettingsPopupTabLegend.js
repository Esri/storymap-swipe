define(["dojo/topic", 
		"storymaps/swipe/core/WebApplicationData", 
		"dojo/DeferredList", 
		"dojo/string",
		"esri/geometry/Extent",
		"dojo/_base/lang"],
	function (
		topic, 
		WebApplicationData, 
		DefferredList, 
		string,
		Extent,
		lang
	){
		return function SettingsPopupTabLegend(titleContainer, contentContainer) 
		{
			// Clone the #popupView template into a new DIV
			$(contentContainer).append($('#popupView-legend').children().clone());
			$(contentContainer).find('.legendControls').change(onUIChange);
			
			topic.subscribe("LAYOUT_CHANGE", configureUIThumbs);
					
			_layout = null;
			
			this.init = function(settings) 
			{		
				$(contentContainer).find('[value = "legend"]').prop('checked', settings.legend);
				$(contentContainer).find('[value = "description"]').prop('checked', settings.description);
				$(contentContainer).find('[value = "bookmarks"]').prop('checked', !! settings.bookmarks);
				$(contentContainer).find('[value = "popup"]').prop('checked', settings.popup);
				onUIChange();
			}
			
			this.show = function()
			{
				//
			}
			
			this.save = function()
			{			
				// Import bookmarks from webmap
				//  - The first time that the option is activated
				//  - Or when the option is activated and there isn't bookmark 
				var bookmarks = WebApplicationData.getSeriesBookmarks();
				if(isSeries() && ! WebApplicationData.getSeries() && ! bookmarks.length) {
					$.each(app.mapResponse, function(i, response){
						if( response.itemInfo.itemData.bookmarks && response.itemInfo.itemData.bookmarks.length ) {
							$.each(response.itemInfo.itemData.bookmarks, function(j, bookmark){
								var bkmk = lang.clone(bookmark);
								bkmk.extent = new Extent(bkmk.extent);
								bookmarks.push(bkmk);
							});
						}
					});
					
					// Add a default bookmark with the map initial extent if none
					if( ! bookmarks.length ) {
						bookmarks.push({
							name: i18n.swipe.seriesPanel.title,
							extent: app.maps[0]._params.extent,
							description: i18n.swipe.seriesPanel.descr
						});
					}
				}
				
				return {
					legend: isLegend(),
					description: isDescription(),
					series: isSeries(),
					bookmarks: bookmarks,
					popup: isPopup()
				};
			}
			
			function onUIChange()
			{
				var uiPreview = string.substitute("resources/icons/builder-preview-${layout}-${series}-${descr}-${legend}.png", 
						{
							layout: _layout == "swipe" ? 0 : 1,
							series: isSeries() ? 1 : 0,
							descr:  isDescription() ? 1 : 0,
							legend: isLegend() ? 1 : 0
						}
				);
				if (isSeries()) {
					$(contentContainer).find('[value = "description"]').attr('disabled', true);
					$(contentContainer).find('[value = "description"]').prop('checked', false)
					$('.descriptionText').css('opacity', 0.5);
				}
				else {
					$(contentContainer).find('[value = "description"]').attr('disabled', false);
					$('.descriptionText').css('opacity', 1);
				}
				
				$(contentContainer).find('.uiSimImg').attr("src", uiPreview);
			}
			
			function configureUIThumbs(layout){
				_layout = layout;
				onUIChange();
			}

			function isLegend()
			{
				return $(contentContainer).find('[value = "legend"]').prop('checked');
			}
			
			function isDescription()
			{
				return $(contentContainer).find('[value = "description"]').prop('checked');
			}
			
			function isSeries()
			{
				return $(contentContainer).find('[value = "bookmarks"]').prop('checked');
			}
			
			function isPopup()
			{
				return $(contentContainer).find('[value = "popup"]').prop('checked');
			}
			
			this.initLocalization = function()
			{
				$(titleContainer).html(i18n.swipe.settingsLegend.settingsTabLegend);
				
				$(contentContainer).find('p').html(i18n.swipe.settingsLegend.settingsLegendExplain);
				$(contentContainer).find('.legendText').html(i18n.swipe.settingsLegend.settingsLegendEnable);
				$(contentContainer).find('.descriptionText').html(i18n.swipe.settingsLegend.settingsDescriptionEnable);
				$(contentContainer).find('.bookmarksText').html(i18n.swipe.settingsLegend.settingsBookmarksEnable);
				$(contentContainer).find('.popupText').html(i18n.swipe.settingsLegend.settingsPopupDisable);
				$(contentContainer).find('.legendInfo').html('<a class="legendtooltip"><img src="resources/icons/builder-help.png" /></a>');
				$(contentContainer).find('.seriesInfo').html('<a class="seriestooltip"><img src="resources/icons/builder-help.png" /></a>');
				
				$(contentContainer).find('.legendtooltip').popover({
					trigger: 'hover',
					placement: 'right',
					html: true,
					content:'<script>$(".legendtooltip").next(".popover").addClass("legendtooltip-popover");</script>' 
						+ '<div style="text-align: center">' 
						+  i18n.swipe.settingsLegend.settingsLegendHelpContent
						+  '<img style="margin-top: 6px" src="resources/icons/tooltip-legend-configure.png" width="220px" height="123px"/>'
						+ '</div>' 
				});
				
				$(contentContainer).find('.seriestooltip').popover({
					trigger: 'hover',
					placement: 'right',
					html: true,
					content:'<script>$(".seriestooltip").next(".popover").addClass("seriestooltip-popover");</script>' 
						+  i18n.swipe.settingsLegend.settingsSeriesHelpContent
				});

				$(contentContainer).find('#uiSimulator div').html(i18n.swipe.settingsLegend.preview);
			}
		}
	}
);