define(["dojo/topic", 
		"storymaps/swipe/core/WebApplicationData", 
		"dojo/DeferredList", 
		"dojo/string",
		"esri/geometry/Extent"],
	function (
		topic, 
		WebApplicationData, 
		DefferredList, 
		string,
		Extent
	){
		return function SettingsPopupTabLegend(titleContainer, contentContainer) 
		{
			// Clone the #popupView template into a new DIV
			$(contentContainer).append($('#popupView-legend').children().clone());
			$(contentContainer).find('.legendControls').change(onUIChange);
			$(contentContainer).find('[value = "popup"]').fastClick(onPopupChange)
			
			topic.subscribe("LAYOUT_CHANGE", configureUIThumbs);
					
			_layout = null;
			_settings = null;
			
			this.init = function(settings) 
			{	
				_settings = settings;
				$(contentContainer).find('[value = "legend"]').prop('checked', settings.legend);
				$(contentContainer).find('[value = "description"]').prop('checked', settings.description);
				$(contentContainer).find('[value = "bookmarks"]').prop('checked', !! settings.bookmarks);
				$(contentContainer).find('[value = "popup"]').prop('checked', settings.popup);
				$(contentContainer).find('[value = "locationSearch"]').prop('checked', settings.locationSearch);
				$(contentContainer).find('[value = "geolocator"]').prop('checked', settings.geolocator);
				onUIChange();
			}
			
			this.show = function()
			{
				//
			}
			
			this.save = function()
			{			
				return {
					legend: isLegend(),
					description: isDescription(),
					series: isSeries(),
					popup: isPopup(),
					locationSearch: isLocationSearch(),
					geolocator: isGeolocator()
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
					$('.descriptionText').css('opacity', 0.5);
				}
				else {
					$(contentContainer).find('[value = "description"]').attr('disabled', false);
					$(contentContainer).find('[value = "description"]').prop('checked', isDescription())
					$('.descriptionText').css('opacity', 1);
				}
				
				$(contentContainer).find('.uiSimImg').attr("src", uiPreview);
			}
			
			function onPopupChange()
			{
				var isPopup = $(contentContainer).find('[value = "popup"]').prop('checked') ? true : false
				topic.publish("POPUP_CHANGE", isPopup);
				app.isPopup = isPopup;
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
			
			function isLocationSearch()
			{
				return $(contentContainer).find('[value = "locationSearch"]').prop('checked');
			}
			
			function isGeolocator()
			{
				return $(contentContainer).find('[value = "geolocator"]').prop('checked');
			}
			
			this.initLocalization = function()
			{
				if($(titleContainer).find('.wizardLabel')[0])
					$(titleContainer).find('.wizardLabel').html(i18n.swipe.settingsLegend.settingsTabLegend);
				else
					$(titleContainer).html(i18n.swipe.settingsLegend.settingsTabLegend);
				$(contentContainer).find('p').html(i18n.swipe.settingsLegend.settingsLegendExplain);
				$(contentContainer).find('.legendText').html(i18n.swipe.settingsLegend.settingsLegendEnable);
				$(contentContainer).find('.descriptionText').html(i18n.swipe.settingsLegend.settingsDescriptionEnable);
				$(contentContainer).find('.bookmarksText').html(i18n.swipe.settingsLegend.settingsBookmarksEnable);
				$(contentContainer).find('.popupText').html(i18n.swipe.settingsLegend.settingsPopupDisable);
				$(contentContainer).find('.locationSearchText').html(i18n.swipe.settingsLegend.settingsAddressSearch);
				$(contentContainer).find('.geolocatorText').html(i18n.swipe.settingsLegend.settingsLocateButton);
				$(contentContainer).find('.legendInfo').html('<a class="legendtooltip"><img src="resources/icons/builder-help.png" /></a>');
				$(contentContainer).find('.seriesInfo').html('<a class="seriestooltip"><img src="resources/icons/builder-help.png" /></a>');
				$(contentContainer).find('.geolocatorInfo').html('<a class="geolocatortooltip"><img src="resources/icons/builder-help.png" /></a>');
				
				$(contentContainer).find('.legendtooltip').popover({
					trigger: 'hover',
					placement: 'right',
					html: true,
					content:'<script>$(".legendtooltip").next(".popover").addClass("legendtooltip-popover");</script>' 
						+ '<div style="text-align: center">' 
						+  i18n.swipe.settingsLegend.settingsLegendHelpContent
						+  '<img style="margin-top: 6px" src="resources/icons/tooltip-legend-configure.png" width="220px" height="110px"/>'
						+ '</div>' 
				});
				
				$(contentContainer).find('.seriestooltip').popover({
					trigger: 'hover',
					placement: 'right',
					html: true,
					content:'<script>$(".seriestooltip").next(".popover").addClass("seriestooltip-popover");</script>' 
						+  i18n.swipe.settingsLegend.settingsSeriesHelpContent2
				});
				
				$(contentContainer).find('.geolocatortooltip').popover({
					trigger: 'hover',
					placement: 'top',
					html: true,
					content:'<script>$(".geolocatortooltip").next(".popover").addClass("geolocatortooltip-popover");</script>' 
						+ '<div >'
						+  '<img style="float: left; margin-right: 10px; margin-top: 8px;" src="resources/icons/builder-settings-locate.png" />'
						+  i18n.swipe.settingsLegend.settingsLocateButtonExplain
						+ '</div>'
						
						 
				});

				$(contentContainer).find('#uiSimulator div').html(i18n.swipe.settingsLegend.preview);
			}
		}
	}
);