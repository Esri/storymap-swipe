define([], 
	function () {
		return function SettingsPopupTabLegend(titleContainer, contentContainer) 
		{
			// Clone the #popupView template into a new DIV
			$(contentContainer).append($('#popupView-legend').children().clone());
			$(contentContainer).find('.legendControls').change(onUIChange);
			
			dojo.subscribe("LAYOUT_CHANGE", configureUIThumbs);
					
			_layout = null;
			
			this.init = function(settings) 
			{			
				$(contentContainer).find('[value = "legend"]').prop('checked', settings.legend);
				$(contentContainer).find('[value = "description"]').prop('checked', settings.description);
				//$(contentContainer).find('[value = "bookmarks"]').prop('checked', settings.bookmarks);
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
					description: isDescription()/*,
					bookmarks: isBookmarks()*/
				};
			}
			
			function onUIChange()
			{
				var isDescription = $(contentContainer).find('[value = "description"]').prop('checked');
				var isLegend = $(contentContainer).find('[value = "legend"]').prop('checked');
				
				if( isDescription && isLegend )
					if(_layout == "swipe")
						$(contentContainer).find('img').attr("src", "resources/icons/builder-sidepanel.png");
					else
						$(contentContainer).find('img').attr("src", "resources/icons/builder-spyglass-sidepanel.png");
				else if( isDescription && !isLegend )
					if(_layout == "swipe")
						$(contentContainer).find('img').attr("src", "resources/icons/builder-sidepanel-description.png");
					else
						$(contentContainer).find('img').attr("src", "resources/icons/builder-sidepanel-spyglass-description.png");
				else if( !isDescription && isLegend )
					if(_layout == "swipe")
						$(contentContainer).find('img').attr("src", "resources/icons/builder-sidepanel-legend.png");
					else
						$(contentContainer).find('img').attr("src", "resources/icons/builder-sidepanel-spyglass-legend.png");
				else 
					if(_layout == "swipe")
						$(contentContainer).find('img').attr("src", "resources/icons/builder-sidepanel-none.png");
					else
						$(contentContainer).find('img').attr("src", "resources/icons/builder-sidepanel-spyglass-none.png");
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
			
			function isBookmarks()
			{
				//return $(contentContainer).find('[value = "bookmarks"]').prop('checked');
			}
			
			function selectLegend(index)
			{
				//
			}
	
			this.initLocalization = function()
			{
				$(titleContainer).html(i18n.swipe.settingsLegend.settingsTabLegend);
				
				$(contentContainer).find('p').html(i18n.swipe.settingsLegend.settingsLegendExplain);
				$(contentContainer).find('.legendText').html(i18n.swipe.settingsLegend.settingsLegendEnable);
				$(contentContainer).find('.descriptionText').html(i18n.swipe.settingsLegend.settingsDescriptionEnable);
				//$(contentContainer).find('.bookmarksText').html(i18n.swipe.settingsLegend.settingsBookmarksEnable);
				$(contentContainer).find('img').attr("src", "resources/icons/builder-sidepanel.png");
				$(contentContainer).find('.legendInfo').html('<a class="legendtooltip">' + i18n.swipe.settingsLegend.settingsLegendHelpTitle + '</a>');
				
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

				$(contentContainer).find('#uiSimulator div').html(i18n.swipe.settingsLegend.preview);
			}
		}
	}
);