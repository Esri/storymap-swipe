define(["dojo/topic"], 
	function (topic) {
		return function SettingsPopupTabLayout(titleContainer, contentContainer) 
		{
			var _this = this
			// Clone the #popupView template into a new DIV
			$(contentContainer).append($('#popupView-layout').children().clone());
			
			$(contentContainer).find('.layout-box button').fastClick(onLayoutChange)
					
			this.init = function(settings) 
			{			
				_this.selectLayout(settings.layout == "spyglass" ? 1 : 0);
			}
			
			this.show = function()
			{
				//
			}
			
			this.save = function()
			{		
				return {
					layout: getSelectedlayout()
				};
			}

			function getSelectedlayout()
			{
				return $(contentContainer).find('.layout-box.selected').index() == 2 ? "spyglass" : "swipe";
			}
			
			function onLayoutChange(event)
			{
				var selectedLayoutIndex = $(event.target).parent().index() == 2 ? 1 : 0;
				_this.selectLayout(selectedLayoutIndex);
				topic.publish("LAYOUT_CHANGE", selectedLayoutIndex == 0 ? "swipe" : "spyglass");
			}
			
			this.selectLayout = function (index)
			{
				$(contentContainer).find('.layout-box').removeClass("selected");
				$(contentContainer).find('.layout-box').eq(index ? 1 : 0).addClass("selected");
				topic.publish("LAYOUT_CHANGE", index == 0 ? "swipe" : "spyglass");
			}
	
			this.initLocalization = function()
			{
				if($(titleContainer).find('.wizardLabel')[0])
					$(titleContainer).find('.wizardLabel').html(i18n.swipe.settingsLayout.settingsTabLayout);
				else
					$(titleContainer).html(i18n.swipe.settingsLayout.settingsTabLayout);
				
				$(contentContainer).find('p').html(i18n.swipe.settingsLayout.settingsLayoutExplain);
				$(contentContainer).find('.layout-box:nth-child(2) div').html(i18n.swipe.settingsLayout.settingsLayoutSwipe);
				$(contentContainer).find('.layout-box:nth-child(2) img').attr("src", "resources/icons/builder-layout-swipe.png");
				$(contentContainer).find('.layout-box:nth-child(3) div').html(i18n.swipe.settingsLayout.settingsLayoutSpyGlass);
				$(contentContainer).find('.layout-box:nth-child(3) img').attr("src", "resources/icons/builder-layout-spyglass.png");
				$(contentContainer).find('.layout-box .selectedLayout').html(i18n.swipe.settingsLayout.settingsLayoutSelected);
				$(contentContainer).find('.layout-box button').html(i18n.swipe.settingsLayout.settingsLayoutSelect);
			}
		}
	}
);
