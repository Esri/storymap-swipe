define(["storymaps/swipe/core/WebApplicationData", "dojo/topic"], 
	function (WebApplicationData, topic) {
		return function SettingsPopup(container, colorSchemes, defaultLogoURL) 
		{
			var _tabs = [];
			
			var _tabsBar = $(container).find(".tab");
			var _tabContent = $(container).find(".tab-content");

			var _btnSave = $(container).find(".btnSave");
			var _btnClose = $(container).find(".btnClose");

			_tabsBar.click(onTabClick);
			_btnSave.click(save);
			
			this.init = function(builderView)
			{
				_tabs = builderView.getSettingsTab(_tabsBar, _tabContent, _btnSave, {
					colorSchemes: colorSchemes,
					defaultLogoURL: defaultLogoURL
				});
				
				app.builder.settingsPopupSaveConfirmationCallback = saveConfirmationCallback;
			};
			
			this.present = function(settings, lockOnTabIndex) 
			{			
				_tabsBar.removeClass("disabled");
				_btnClose.removeAttr("disabled");
				$(".error-msg" ,container).hide();
				$(".modal-header .close" ,container).attr("data-dismiss", "modal");
				$(".modal-footer .error", container).hide();
				
				$.each(_tabs, function(i, tab){
					tab.init(settings[i], i == lockOnTabIndex);
				});
				
				displayTab(lockOnTabIndex ? lockOnTabIndex : 0);
				
				if( lockOnTabIndex ) {
					_tabsBar.addClass("disabled");
					_tabsBar.eq(lockOnTabIndex).removeClass("disabled");
					
					_btnClose.attr("disabled", "disabled");
					$(".modal-header .close", container).attr("data-dismiss", "none");
				}
				else
					displayTab(0);
				
				$(container).modal({keyboard: lockOnTabIndex == undefined });
			};
			
			function onTabClick() 
			{
				if ( $(this).hasClass("disabled") )
					return;
				
				displayTab($(this).index());
				if(!WebApplicationData.getPopup())
					$('.settingsPopupHeader').find('.tab').eq(3).addClass('disabled');
			}
			
			function save(saveConfirmed)
			{
				var settings = [];
				var tabError = -1;
				
				$.each(_tabs, function(i, tab){
					var result = tab.save();
					
					if( result === false )
						tabError = i;
					
					settings.push(result);
				});
				// Information popover if the data model or the layout has changed
				var needConfirmation = (WebApplicationData.getLayout() != settings[0].layout 
						|| WebApplicationData.getDataModel() != settings[1].dataModel
						|| WebApplicationData.getWebmaps().toString() != settings[1].webmaps.toString()
						|| WebApplicationData.getLayers().toString() != settings[1].layers.toString() 
						|| WebApplicationData.getLegend() != settings[2].legend
						|| WebApplicationData.getDescription() != settings[2].description
						|| WebApplicationData.getSeries() != settings[2].series
						|| WebApplicationData.getPopup() != settings[2].popup);
						
				if( saveConfirmed !== true && needConfirmation ) {
					createConfirmationPopover();
					return false;
				}
				
				if (tabError == -1) 
					topic.publish("SETTINGS_POPUP_SAVE", { settings: settings });
				else {
					displayTab(tabError);
					return false;
				}
			}
			
			function createConfirmationPopover()
			{
				_btnSave.popover({
					html: true,
					trigger: 'manual',
					// Inject the CSS properties
					content: '<script>$("#settingsPopup .btnSave").next(".popover").addClass("savePopover");</script>'
								+ i18n.swipe.settingsLayout.settingsSaveConfirm
								+ ' <button type="button" class="btn btn-success btn-small" onclick="app.builder.settingsPopupSaveConfirmationCallback(true);">'+i18n.builder.builder.popoverOpenViewOk+'</button> '
				});
				_btnSave.popover('show');
			}
			
			function saveConfirmationCallback(confirmed)
			{
				if( confirmed )
					save(true);
				
				dismiss();
			}
			
			function dismiss()
			{
				_btnSave.popover('destroy');
				$(container).modal('hide');
			}
			
			function displayTab(index)
			{
				_tabsBar.removeClass("active disabled");
				_tabContent.hide();
				
				_tabsBar.eq(index).addClass("active");
				_tabs[index].show();
				_tabContent.eq(index).show();
			}
	
			this.initLocalization = function()
			{
				$(container).find('h3').html(i18n.builder.settings.settingsHeader);
				
				$.each(_tabs, function(i, tab){
					tab && tab.initLocalization();
				});
				
				$(container).find('.btnClose').html(i18n.builder.settings.modalCancel);
				$(container).find('.btnSave').html(i18n.builder.settings.modalApply);
				$(container).find('.error').html(i18n.builder.settings.tabError);
			}
		}
	}
);