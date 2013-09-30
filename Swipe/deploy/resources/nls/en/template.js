define(
	({
		viewer: {
			loading: {
				step1: "LOADING APPLICATION",
				step2: "LOADING DATA",
				step3: "INITIALIZING",
				fail: "Sorry, Swipe loading failed",
				loadBuilder: "SWITCHING TO BUILDER MODE",
				failButton: "Retry"
			},
			errors: {
				boxTitle: "An error has occurred",
				portalSelf: "Fatal error: Failed to get portal configuration",
				invalidConfig: "Fatal error: Invalid configuration",
				invalidConfigNoWebmap: "Fatal error: Invalid configuration (no web map specified)",
				createMap: "Unable to create map",
				invalidApp: "Fatal error: The application cannot be loaded",
				initMobile: "Welcome to the swipe web application. The application is not configured. The interactive builder is not supported on mobile devices.",
				noBuilderIE8: "The Swipe interactive builder is not supported on Internet Explorer before version 9.",
				noLayerView: "Welcome to the Swipe web application.<br />The application is not configured yet.",
				appSave: "Error saving the web application",
				mapSave: "Error saving the web map",
				notAuthorized: "You are not authorized to access this application",
				conflictingProjectionsTitle: "Conflicting Projections",
				conflictingProjections: "Swipe does not support using two webmaps with different projections. Please open settings and use a webmap that use the same projection than the first webmap.",
				cpButton: "Close"
			},
			mobileView: {
				hideIntro: "HIDE INTRO",
				navLeft: "Legend",
				navMap: "Map",
				navRight: "Data"
			},
			desktopView: {
				storymapsText: "A story map",
				builderButton: "Switch to builder mode",
				bitlyTooltip: "Get a short link to the application"
			}
		},
		builder: {
			builder: {
				panelHeader: "APPLICATION CONFIGURATION",
				buttonSave: "SAVE",
				buttonDiscard: "CANCEL",
				buttonSettings: "Settings",
				buttonView: "View mode",
				buttonItem: "Open the Web Application item",
				noPendingChange: "No pending change",
				unSavedChangeSingular: "1 unsaved change",
				unSavedChangePlural: "unsaved changes",
				popoverDiscard: "Are you sure to want to discard any unsaved changes?",
				yes: "Yes",
				no: "No",
				popoverOpenViewExplain: "By opening the viewer, you will lose any unsaved changes",
				popoverOpenViewOk: "Ok",
				popoverOpenViewCancel: "Cancel",
				popoverSaveWhenDone: "Don't forget to save when you are done",
				closeWithPendingChange: "Are you sure to want to confirm the action ? Your changes will be lost.",
				gotIt: "Ok",
				savingApplication: "Saving application",
				saveSuccess: "Application saved successfully",
				saveError: "Save failed, please try again",
				signIn: "Please sign in with an account on",
				signInTwo: "to save the application."
			},
			header:{
				editMe: "Edit me !",
				templateTitle: "Set template title",
				templateSubtitle: "Set template subtitle"
			},
			settings: {
				settingsHeader: "Application settings",
				modalCancel: "Cancel",
				modalApply: "Apply"
			},
			settingsColors: {
				settingsTabColor: "Theme",
				settingsColorExplain: "Choose an app theme or define your own colors.",
				settingsLabelColor: "Header and side panel background colors"
			},
			settingsHeader: {
				settingsTabLogo: "Header",
				settingsLogoExplain: "Customize the header logo (maximum is 250 x 50px).",
				settingsLogoEsri: "Esri logo",
				settingsLogoNone: "No logo",
				settingsLogoCustom: "Custom logo",
				settingsLogoCustomPlaceholder: "Image URL",
				settingsLogoCustomTargetPlaceholder: "Click-through link",
				settingsLogoSocialExplain: "Customize the header top right link.",
				settingsLogoSocialText: "Text",
				settingsLogoSocialLink: "Link",
				settingsLogoSocialDisabled: "This feature has been disabled by the Administrator"
			},
			settingsExtent: {
				settingsTabExtent: "Extent",
				settingsExtentExplain: "Set the initial extent through the interactive map below.",
				settingsExtentExplainBottom: "The extent you define will modify your web map initial extent. Note that if you are doing a swipe series that extent won't be used.",
				settingsExtentDateLineError: "The extent cannot be across the meridian of 180° longitude",
				settingsExtentDateLineError2: "Error computing the extent",
				settingsExtentDrawBtn: "Draw a new extent",
				settingsExtentModifyBtn: "Edit the current extent",
				settingsExtentApplyBtn: "Apply on main map",
				settingsExtentUseMainMap: "Use main map extent"
			}
        },
		swipe: {
			mobileData: {
				noData: "No data to display!",
				noDataExplain: "Tap the map to select a feature and come back here",
				noDataMap: "No data for this map",
				noPopup: "No pop-up found for this feature"
			},
			mobileLegend: {
				noLegend: "No legend to display."
			},
			swipeSidePanel: {
				editTooltip: "Set the side panel description",
				editMe: "Edit me !",
				legendTitle: "Legend"
			},
			infoWindow: {
				noFeature: "No data to display",
				noFeatureExplain: "Tap the map to select a feature"
			},
			settingsLayout: {
				settingsTabLayout: "Swipe Style",
				settingsLayoutExplain: "Choose a style for the swipe tool.",
				settingsLayoutSwipe: "Vertical bar",
				settingsLayoutSpyGlass: "Spyglass",
				settingsLayoutSelected: "Selected layout",
				settingsLayoutSelect: "Select this layout",
				settingsSaveConfirm: "Some of your changes require that you save and reload the application"
			},
			settingsDataModel: {
				settingsTabDataModel: "Swipe Layer",
				settingsDataModelExplainSwipe: "Choose the layer or the web map that will appear and disappear with swipe.",
				settingsDataModelExplainSwipe2: "",
				settingsDataModelExplainSpyGlass: "Choose the layer or the web map that will appear in the spyglass.",
				settingsDataModelOneMap: "One web map, single layer",
				settingsDataModel1Explain: "Select a layer to be controlled by the swipe tool.",
				settingsDataModel1Warning: "If the layer is hidden by upper layers, swipe won't have any effect.",
				settingsDataModel1SpyGlassExplain: "Select the layer to appear within the spyglass.",
				settingsDataModelTwoMaps: "Two web maps",
				settingsDataModelLayerIds: "Web map Layer IDs",
				settingsDataModelSelected: "Selected type",
				settingsDataModelWebmapSwipeId1: "Right Web map ID",
				settingsDataModelWebmapSwipeId2: "Left Web map ID",
				settingsDataModelWebmapGlassId1: "Main Web map ID",
				settingsDataModelWebmapGlassId2: "Spyglass Web map ID",
				settingsDataModelSelect: "Select this type",
				settingsDataModel2Explain: "Swipe with another web map.",
				settingsDataModel2SpyGlassExplain: "Reveal another web map.",
				settingsDataModel2HelpTitle: "How to find web map's ID",
				settingsDataModel2HelpContent: "Copy and paste digits after the '=' sign in the URL of the web map"
			},
			settingsLegend: {
				settingsTabLegend: "App Layout",
				settingsLegendExplain: "Select the application layout settings.",
				settingsLegendEnable: "Enable Legend",
				settingsDescriptionEnable: "Enable Description",
				settingsBookmarksEnable: "Enable Swipe series",
				settingsPopupDisable: "Enable popup",
				settingsLegendHelpContent: "To refine the legend content, use ArcGIS.com web map viewer table of contents (Hide in Legend)",
				settingsSeriesHelpContent: "On first activation, your web map(s) bookmarks will be used to pre-populate the series bar. If you disable the series option later, your series configuration won't be discarded and will be available if you decide to enable the series again.",
				preview: "UI preview"
			},
			settingsSwipePopup: {
				settingsSwipePopup: "Pop-up",
				settingsSwipePopupExplain: "Customize the appearance of the pop-ups header to help user associate pop-ups with maps layers.",
				settingsSwipePopupSwipe1: "Left Map",
				settingsSwipePopupSwipe2: "Right Map",
				settingsSwipePopupGlass1: "Main Map",
				settingsSwipePopupGlass2: "Spyglass Map",
				settingsSwipePopupTitle: "Header Title",
				settingsSwipePopupColor: "Header Color"
			},
			initPopup: {
				initHeader: "Welcome to the Swipe Builder",
				modalNext: "Next",
				modalApply: "Open the app"
			},
			seriesPanel: {
				title: "Title",
				descr: "Description",
				discard: "Discard Bookmark",
				saveExtent: "Set Bookmark Extent",
				discardDisabled: "You can't remove that bookmark. Swipe series can be disabled in the Settings."
			}
		}
    })
);