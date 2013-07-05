define(["storymaps/swipe/core/WebApplicationData", "storymaps/swipe/builder/SettingsPopupTabDataModel","storymaps/swipe/builder/SettingsPopupTabLayout", "storymaps/swipe/builder/SettingsPopupTabLegend", "storymaps/swipe/builder/SettingsPopupTabSwipePopup"], 
	function (WebApplicationData, SettingsPopupTabDataModel, SettingsPopupTabLayout, SettingsPopupTabLegend, SettingsPopupTabSwipePopup) {
		return function InitPopup(container) 
		{
			var _tabs = [];
			var _initDeferred = null;
			
			var _tabsBar = $(container).find(".tab");
			var _tabContent = $(container).find(".tab-content");

			var _btnNext = $(container).find(".btnSave");

			_tabsBar.click(onTabClick);
			_btnNext.click(next);
			
			this.init = function()
			{
				_tabs = [
					new SettingsPopupTabLayout(_tabsBar.eq(0), _tabContent.eq(0)),
					new SettingsPopupTabDataModel(_tabsBar.eq(1), _tabContent.eq(1), _btnNext),
					new SettingsPopupTabLegend(_tabsBar.eq(2), _tabContent.eq(2)),
					new SettingsPopupTabSwipePopup(_tabsBar.eq(3), _tabContent.eq(3))
				];
				
				initLocalization();
			}
			
			this.present = function(settings, lockOnTabIndex) 
			{			
				_initDeferred = new dojo.Deferred(); 
				_tabs[0].init({});
				_tabs[1].init({
					webmaps: WebApplicationData.getWebmaps(),
					layout: "swipe"
				});
				_tabs[2].init({});
				_tabs[3].init({
					layout: "swipe"
				});
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
				if ( currentTab < 3 && ! _btnNext.hasClass('btn-success') ) {
					displayTab(++currentTab);
					return false;
				}
				
				return save();
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
					console.log("check dataResult ", dataResult);
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
					console.log("check legend result ", legendResult);
					WebApplicationData.setLegend(legendResult.legend);
					WebApplicationData.setDescription(legendResult.description);
					WebApplicationData.setBookmarks(legendResult.bookmarks);
				}
				else {
					displayTab(2);
					return false;
				}	
				
				var popupResult = _tabs[3].save();
				if (popupResult) {
					console.log("check popupResult ", popupResult);
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
	
			function initLocalization()
			{
				$(container).find('h3').html(i18n.swipe.initPopup.initHeader);
				
				$.each(_tabs, function(i, tab){
					tab.initLocalization();
				});
				
				$(container).find('.btnSave').html(i18n.swipe.initPopup.modalNext);
				$(container).find('.error').html(i18n.swipe.initPopup.tabError);
			}
		}
	}
);
