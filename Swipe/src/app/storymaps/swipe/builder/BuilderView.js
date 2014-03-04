define(["storymaps/swipe/core/WebApplicationData", 
		"storymaps/builder/SettingsPopup",
		"storymaps/utils/Helper",
		"storymaps/swipe/builder/HelpPopup",
		"storymaps/swipe/builder/SharePopup",
		"storymaps/swipe/builder/InitMapPicker",
		// Settings tab
		"storymaps/swipe/builder/SettingsPopupTabDataModel",
		"storymaps/swipe/builder/SettingsPopupTabLayout",
		"storymaps/swipe/builder/SettingsPopupTabLegend",
		"storymaps/swipe/builder/SettingsPopupTabSwipePopup",
		"storymaps/builder/SettingsPopupTabColors",
		"storymaps/builder/SettingsPopupTabHeader",
		"storymaps/builder/SettingsPopupTabExtent",
		"dojo/topic"], 
	function (
		WebApplicationData, 
		SettingsPopup,
		Helper,
		HelpPopup,
		SharePopup,
		InitMapPicker,
		SettingsPopupTabDataModel,
		SettingsPopupTabLayout,
		SettingsPopupTabLegend,
		SettingsPopupTabSwipePopup,
		SettingsPopupTabColors, 
		SettingsPopupTabHeader, 
		SettingsPopupTabExtent,
		topic)
	{
		return function BuilderView() 
		{
			var NO_LOGO_OPTION = "NO_LOGO";
			var _settingsPopup = null;
			var _helpPopup = new HelpPopup($('#helpPopup'));
			var _sharePopup = new SharePopup($('#sharePopup'));
			var _initMapPicker = new InitMapPicker($('#initMapPopup'));
			
			
			
			this.init = function(settingsPopup)
			{
				_settingsPopup = settingsPopup;
				topic.subscribe("SETTINGS_POPUP_SAVE", settingsPopupSave);
				topic.subscribe("POPUP_CHANGE", controlPopupOptions);
				app.builder.openHelpPopup = openHelpPopup;
				app.builder.openSharePopup = openSharePopup;
				app.builder.initMapPicker = openInitMapPicker;
			}
			
			//
			// Settings
			//
			
			this.getSettingsTab = function(_tabsBar, _tabContent, _btnSave, params)
			{
				return [
					new SettingsPopupTabLayout(_tabsBar.eq(0), _tabContent.eq(0)),
					new SettingsPopupTabDataModel(_tabsBar.eq(1), _tabContent.eq(1), _btnSave),
					new SettingsPopupTabLegend(_tabsBar.eq(2), _tabContent.eq(2)),
					new SettingsPopupTabSwipePopup(_tabsBar.eq(3), _tabContent.eq(3)),
					new SettingsPopupTabColors(_tabsBar.eq(4), _tabContent.eq(4), params.colorSchemes),
					new SettingsPopupTabHeader(_tabsBar.eq(5), _tabContent.eq(5), params.defaultLogoURL),
					new SettingsPopupTabExtent(_tabsBar.eq(6), _tabContent.eq(6)),
					
				];
			}
			
			this.openSettingPopup = function(fieldsError)
			{
				_settingsPopup.present(
					[
						{
							layout: WebApplicationData.getLayout()
						},
						{
							dataModel : WebApplicationData.getDataModel(),
							layers: WebApplicationData.getLayers(),
							webmaps: WebApplicationData.getWebmaps(),
							layout: WebApplicationData.getLayout(),
							webmap: WebApplicationData.getWebmap()
						},
						{
							legend: WebApplicationData.getLegend(),
							description: WebApplicationData.getDescription(),
							bookmarks: WebApplicationData.getSeries(),
							popup: WebApplicationData.getPopup(),
							locationSearch: WebApplicationData.getLocationSearch(),
							geolocator: WebApplicationData.getGeolocator()
						},
						{
							popupColors: WebApplicationData.getPopupColors(),
							popupTitles: WebApplicationData.getPopupTitles(),
							layout: WebApplicationData.getLayout()
						},
						{
							colors: WebApplicationData.getColors()
						},
						{
							logoURL: getLogoURL(),
							logoTarget: WebApplicationData.getLogoTarget(),
							linkText: WebApplicationData.getHeaderLinkText() == undefined ? APPCFG.HEADER_LINK_TEXT : WebApplicationData.getHeaderLinkText(),
							linkURL: WebApplicationData.getHeaderLinkURL() == undefined ? APPCFG.HEADER_LINK_URL : WebApplicationData.getHeaderLinkURL(),
							// For the simulator
							colors: WebApplicationData.getColors(),
							social: WebApplicationData.getSocial()
						},
						{
							extent: Helper.getWebMapExtentFromItem(app.data.getWebMapItem().item)
						}
					]
				);

				controlPopupOptions(app.isPopup);
				
			}
	
			function settingsPopupSave(data)
			{
				console.log("settingsPopupSave data = ", data);
				
				var layoutBeforeSave = WebApplicationData.getLayout();
				
				// Layout
				WebApplicationData.setLayout(data.settings[0].layout);
				
				// DataModel
				WebApplicationData.setDataModel(data.settings[1].dataModel);
				WebApplicationData.setWebmaps(data.settings[1].webmaps);
				WebApplicationData.setLayers(data.settings[1].layers);
				
				// UI Layout
				WebApplicationData.setLegend(data.settings[2].legend);
				WebApplicationData.setDescription(data.settings[2].description);
				WebApplicationData.setSeries(data.settings[2].series);
				WebApplicationData.setSeriesBookmarks(data.settings[2].bookmarks);
				WebApplicationData.setPopup(data.settings[2].popup);
				WebApplicationData.setLocationSearch(data.settings[2].locationSearch);
				WebApplicationData.setGeolocator(data.settings[2].geolocator);
				
				// Popup
				WebApplicationData.setPopupColors(data.settings[3].popupColors);
				WebApplicationData.setPopupTitles(data.settings[3].popupTitles);
				
				// Colors
				WebApplicationData.setColors(data.settings[4].colors[0], data.settings[4].colors[1]);
				
				// Header	
				WebApplicationData.setHeaderLink(data.settings[5].linkText, data.settings[5].linkURL);
	
				var logoURL = data.settings[5].logoURL;
				if (logoURL) {
					if (logoURL == APPCFG.HEADER_LOGO_URL)
						WebApplicationData.setLogoURL(null);
					else 
						WebApplicationData.setLogoURL(logoURL);
				}
				else {
					WebApplicationData.setLogoURL(NO_LOGO_OPTION);
				}
				WebApplicationData.setLogoTarget(data.settings[5].logoTarget);
				WebApplicationData.setSocial(data.settings[5].social);
				
				// Extent
				var extent = Helper.serializeExtentToItem(data.settings[6].extent);
				if( ! Helper.serializedExtentEquals(extent, app.data.getWebMapItem().item.extent) ) {
					app.data.getWebMapItem().item.extent = extent;
					app.data.initialExtentHasBeenEdited = true;
				}
				
				if( layoutBeforeSave == "swipe" )
					app.mapSwipe.updateSettings(WebApplicationData.getPopupColors(), WebApplicationData.getPopupTitles());
				else
					app.spyGlass.updateSettings(WebApplicationData.getPopupColors(), WebApplicationData.getPopupTitles());
				
				topic.publish("BUILDER_INCREMENT_COUNTER", 1);
				topic.publish("CORE_UPDATE_UI");
			}
			
			this.resize = function()
			{
				//
			}
			
			function getLogoURL()
			{
				var logoURL = WebApplicationData.getLogoURL();
				
				if ( ! logoURL )
					logoURL = APPCFG.HEADER_LOGO_URL;
				else if ( logoURL == NO_LOGO_OPTION )
					logoURL = null;
				
				return logoURL;
			}
			
			//
			// Help popup
			//
			
			function openHelpPopup(tabIndex)
			{
				_helpPopup.present(tabIndex);
			}
			
			//
			// Direct creation first save
			//
			
			function openSharePopup(isFirstSave)
			{
				_sharePopup.present(isFirstSave);
			}
			
			//
			// Direct creation map picker
			//
			
			function openInitMapPicker(loadWebMap)
			{
				_initMapPicker.present(loadWebMap);
			}
			
			function controlPopupOptions(enablePopup)
			{
				if (enablePopup == true)
					$('.settingsPopupHeader').find('.tab').eq(3).removeClass('disabled');
				else 
					$('.settingsPopupHeader').find('.tab').eq(3).addClass('disabled');
			}
		}
	}
);