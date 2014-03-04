define(["storymaps/swipe/core/WebApplicationData", 
		"storymaps/swipe/builder/SettingsPopupTabDataModel",
		"storymaps/swipe/builder/SettingsPopupTabLayout", 
		"storymaps/swipe/builder/SettingsPopupTabLegend", 
		"storymaps/swipe/builder/SettingsPopupTabSwipePopup",
		"dojo/Deferred",
		"dojo/topic"], 
	function (
		WebApplicationData, 
		SettingsPopupTabDataModel, 
		SettingsPopupTabLayout, 
		SettingsPopupTabLegend, 
		SettingsPopupTabSwipePopup,
		Deferred,
		topic
	){
		return function InitPopup(container) 
		{
			var _tabs = [];
			var _initDeferred = null;
			
			var _tabsBar = $(container).find(".tab");
			var _tabContent = $(container).find(".step-pane");
			var _btnPrev = $(container).find(".btn-prev");
			var _btnNext = $(container).find(".btn-next");

			_btnPrev.click(prev);
			_btnNext.click(next);
			
			$('#builderWizard').wizard();
			$(container).find('.btn-prev').attr('disabled','disabled')
			
			this.init = function()
			{
				_tabs = [
					new SettingsPopupTabLayout(_tabsBar.eq(0), _tabContent.eq(0)),
					new SettingsPopupTabDataModel(_tabsBar.eq(1), _tabContent.eq(1), _btnNext),
					new SettingsPopupTabLegend(_tabsBar.eq(2), _tabContent.eq(2)),
					new SettingsPopupTabSwipePopup(_tabsBar.eq(3), _tabContent.eq(3))
				];
				$("#initPopup").addClass('started');
				initLocalization();
				topic.subscribe("POPUP_CHANGE", controlPopupOptions);
			}
			
			this.present = function(settings, lockOnTabIndex) 
			{		
				_initDeferred = new Deferred(); 
				_tabs[0].init({});
				_tabs[1].init({
					webmaps: WebApplicationData.getWebmaps(),
					layout: "swipe"
				});
				_tabs[2].init({});
				_tabs[3].init({
					layout: "swipe"
				});
				if (app.isCreationLayout) {
					displayTab(1);
					$(container).find('.btn-prev').attr('disabled', false);
					_tabs[0].selectLayout(app.isCreationLayout == "swipe" ? 0 : 1)				
				}
				else 
					displayTab(0);
				
				$(container).modal({keyboard: false});

				return _initDeferred;
			}
			
			function onTabClick(event) 
			{
				if ( $(this).hasClass("disabled") )
					return;
				
				displayTab($(this).index("#initPopup .tab"));
			}
			
			function next()
			{
				var currentTab = $("#initPopup .tab.active").index("#initPopup .tab");
				$(container).find('.btn-prev').attr('disabled',false)
				if ( currentTab < 3 && !_btnNext.hasClass('btn-success')) {
					displayTab(++currentTab);
					$("#initPopup .tab.active").find('.badge').addClass('badge-info');
					$("#initPopup .tab").eq(currentTab-1).find('.badge').addClass('badge-success');
					if (currentTab == 3) {
						_btnNext.addClass('btn-success');
						$(container).find('.next').html(i18n.swipe.initPopup.modalApply);
					}
					return false;
				}
				
				return save();
			}
			
			function prev()
			{
				var currentTab = $("#initPopup .tab.active").index("#initPopup .tab");
				$(container).find('.btn-next').attr('disabled',false)
				if (currentTab == 1)
					$(container).find('.btn-prev').attr('disabled','disabled')
				if (currentTab > 0) {
					displayTab(--currentTab);
					_btnNext.removeClass('btn-success');
					$("#initPopup .tab").eq(currentTab+1).find('.badge').removeClass('badge-success');
					$("#initPopup .tab").eq(currentTab).find('.badge').removeClass('badge-success');
					$("#initPopup .tab").eq(currentTab+1).find('.badge').removeClass('badge-info');
					$("#initPopup .tab.active").find('.badge').addClass('badge-info');
					$(container).find('.next').html(i18n.swipe.initPopup.modalNext);
				}
			}
			
			function save()
			{		
				var layoutResult = _tabs[0].save();
				if (layoutResult) {
					WebApplicationData.setLayout(layoutResult.layout);
				}
				else {
					displayTab(0);
					return false;
				}
				
				var dataResult = _tabs[1].save();
				if (dataResult) {
					WebApplicationData.setWebmaps(dataResult.webmaps);
					WebApplicationData.setDataModel(dataResult.dataModel);
					WebApplicationData.setLayers(dataResult.layers);
					configOptions.webmaps = dataResult.webmaps;
				}
				else {
					displayTab(1);
					return false;
				}
				
				var legendResult = _tabs[2].save();
				if (legendResult) {
					WebApplicationData.setLegend(legendResult.legend);
					WebApplicationData.setDescription(legendResult.description);
					WebApplicationData.setPopup(legendResult.popup);
					WebApplicationData.setSeries(legendResult.series);
					WebApplicationData.setSeriesBookmarks(legendResult.bookmarks);
					WebApplicationData.setLocationSearch(legendResult.locationSearch);
					WebApplicationData.setGeolocator(legendResult.geolocator);
				}
				else {
					displayTab(2);
					return false;
				}	
				
				var popupResult = _tabs[3].save();
				if (popupResult) {
					WebApplicationData.setPopupColors(popupResult.popupColors);
					WebApplicationData.setPopupTitles(popupResult.popupTitles);
				}
				else {
					displayTab(2);
					return false;
				}	
				_initDeferred.resolve();
				return true;
			}
			
			function displayTab(index)
			{
				_tabsBar.removeClass("active disabled");
				_tabContent.hide();
				
				_tabsBar.eq(index).addClass("active");

				_tabs[index].show();
				_tabContent.eq(index).show();
				
				if( index == 3 )
					$(container).find('.btnSave').html(i18n.swipe.initPopup.modalApply).removeClass('btn-primary').addClass('btn-success');
			}
			
			function controlPopupOptions(popupEnabled)
			{
				if (popupEnabled == false) {
					_btnNext.addClass('btn-success');
					$(container).find('.next').html(i18n.swipe.initPopup.modalApply);
					$('#builderWizard').find('.tab').eq(3).addClass('disabled');
				}
				else {
					_btnNext.removeClass('btn-success');
					$('#builderWizard').find('.tab').eq(3).removeClass('disabled');
					$(container).find('.next').html(i18n.swipe.initPopup.modalNext);
				}
			}
	
			function initLocalization()
			{
				$(container).find('h3').html(i18n.swipe.initPopup.initHeader);
				
				$.each(_tabs, function(i, tab){
					tab.initLocalization();
				});

				$(container).find('.prev').html(i18n.swipe.initPopup.modalPrev);
				$(container).find('.next').html(i18n.swipe.initPopup.modalNext);
				$(container).find('.error').html(i18n.swipe.initPopup.tabError);
			}
		}
	}
);
