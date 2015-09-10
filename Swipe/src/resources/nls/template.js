define({
	root: ({
		viewer: {
			loading: {
				step1: "LOADING APPLICATION",
				step2: "LOADING DATA",
				step3: "INITIALIZING",
				fail: "Sorry, Swipe loading failed",
				loadBuilder: "SWITCHING TO BUILDER MODE",				
				redirectSignIn: "REDIRECTING TO SIGN-IN PAGE",
				redirectSignIn2: "(you will be redirected here after sign-in)",
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
				conflictingProjections: "Swipe does not support using two web maps with different projections. Please open settings and use a web map that use the same projection than the first web map.",
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
				facebookTooltip: "Share on Facebook",
				twitterTooltip: "Share on Twitter",
				bitlyTooltip: "Get a short link"
			}
		},
		builder: {
			builder: {
				panelHeader: "APPLICATION CONFIGURATION",
				buttonSave: "SAVE",
				buttonHelp: "Help",
				buttonShare: "Share",
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
				saveError2: "Save failed due to an invalid html tag in a name or description",
				saveError3: "The title can't be empty",
				signIn: "Please sign in with an account on",
				signInTwo: "to save the application."
			},
			header:{
				editMe: "Edit me!",
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
				settingsExtentDateLineError: "The extent cannot be across the meridian of 180� longitude",
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
				editMe: "Edit me!",
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
				settingsTabDataModel: "Swipe Type",
				settingsDataModelExplainSwipe: "What do you want users to swipe?",
				settingsDataModelExplainSwipe2: "",
				settingsDataModelExplainSpyGlass: "Choose the layer or the web map that will appear in the spyglass.",
				settingsDataModelOneMap: "A layer in a web map",
				settingsDataModel1Explain: "Select the layer you want to be swiped",
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
				settingsDataModel2HelpTitle: "How do I find a web map's ID?",
				settingsDataModel2HelpContent: "Copy and paste digits after the '=' sign in the URL of the web map",
				switchMaps: "Switch maps",
				browseWebMaps: "Browse web maps"
			},
			settingsLegend: {
				settingsTabLegend: "App Layout",
				settingsLegendExplain: "Select the application layout settings.",
				settingsLegendEnable: "Enable Legend",
				settingsDescriptionEnable: "Enable Description",
				settingsBookmarksEnable: "Enable Swipe series",
				settingsPopupDisable: "Enable popup",
				settingsLocationSearchEnable: "Enable locator search",
				settingsGeolocatorEnable: "Enable geolocator",
				settingsLegendHelpContent: "To refine the legend content, use ArcGIS.com web map viewer table of contents (Hide in Legend)",
				settingsSeriesHelpContent: "Swipe series is a tabbed navigation option that will guide the viewer to a particular extent and display a title and description text in the side panel.  During initial activation, the bookmarks from the web map(s) will be imported and used to pre-populate the series bar.  Disabling the series option turns off the series bar, but the series configuration is preserved for future use.", 
				settingsSeriesHelpContent2: "Swipe series lets you create and edit a selection of locations with accompanying titles and text.  If your web map has bookmarks, they'll be displayed.  You can disable the series, but the configuration will be preserved for future use.",
				settingsSeriesHelpLink: "See an example of an application with a swipe series here",
				preview: "UI preview",
				settingsLocateButtonExplain: "This functionality is supported on most mobile devices and desktop browsers (including Internet Explorer 9+).",
				settingsLocateButton: "Enable a 'Locate' button on supported browsers",
				settingsAddressSearch: "Enable an address search tool"
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
				initHeader: "Welcome to the Swipe/Spyglass Builder",
				modalNext: "Next",
				modalPrev: "Previous",
				modalApply: "Open the app"
			},
			seriesPanel: {
				title: "Title",
				descr: "Description",
				discard: "Discard Bookmark",
				saveExtent: "Set Bookmark Extent",
				discardDisabled: "You can't remove that bookmark. Swipe series can be disabled in the Settings."
			},
			helpPopup: {
				title: "Help",
				close: "Close",
				tab1: {
					div1: "The Swipe/Spyglass template is designed to compare two seperate web maps or two layers of a single web map in an attractive, easy-to-use web application that can be used in any web browser on any device, including smartphones and tablets.",
					div2: "For additional information on the Swipe/Spyglass template, including examples created by users, <a href='http://storymaps.arcgis.com/en/app-list/swipe/' target='_blank'> visit the Story Maps website</a>. You can also follow us on Twitter at <a href='https://twitter.com/EsriStoryMaps' target='_blank'>@EsriStoryMaps</a>.",
					div3: "We would love to hear from you! Whether you have a question, want to request a new feature, or think you've found a bug, please visit the <a href='http://links.esri.com/storymaps/forum' target='_blank'>Story Maps User Forum</a>."
				}
			},
			share: {
				firstSaveTitle: "Application successfully saved",
				firstSaveHeader: "Your Application is now saved in ArcGIS Online. Please read the following answers to frequent questions.",
				firstSaveA1: "If you are not familiar with ArcGIS Online or want a shortcut to access the authoring interface, you can save the following link: %LINK1%",
				firstSaveA1bis: "The Application can also be found in your <a href='%LINK2%' target='_blank'>ArcGIS Online content folder</a>.",
				firstSaveQ2: "Is my Application shared?",
				firstSaveA2: "Currently your Application is not shared. To share it, use the SHARE button.",
				shareTitle: "Share your Application",
				sharePrivateHeader: "Your Application is not shared, would you like to share it?",
				sharePrivateBtn1: "Share publicly",
				sharePrivateBtn2: "Share with my Organization",
				sharePrivateProgress: "Sharing in progress...",
				sharePrivateErr: "Sharing failed, try again or",
				sharePrivateOk: "Sharing updated successfully, loading...",
				shareStatus1: "Application is not saved",
				shareStatus2: "Application is shared publicly",
				shareStatus3: "Application is shared within the organization",
				shareStatus4: "Application is not shared",
				sharePreviewAsUser: "Preview",
				shareHeader1: "Your Application is <strong>publicly accessible</strong>.",
				shareHeader2: "Your Application is accessible by your organization members (login is required).",
				shareLinkHeader: "Share the Application with your audience",
				shareLinkOpen: "OPEN",
				learnMore: "Learn more",
				shareQ1Opt1: "How do I keep the Application private?",
				shareQ1Opt2: "How do I keep the Application private or share it publicly?",
				shareA1: "Use %SHAREIMG% on <a href='%LINK1%' target='_blank'>the application item page</a>. If you also want to unshare the web map, use <a href='%LINK2%' target='_blank'>the web map item page</a>.",
				shareA1bis: "If you also want to unshare the Feature Service, use <a href='%LINK1%' target='_blank'>the Feature Service item page</a>.",
				shareQ2: "How do I edit the Application later?",
				shareQ2bis: "How do I get back to the authoring interface?",
				shareA2div1: "Save and reuse the following link %LINK1% or use <a href='%LINK2%' target='_blank'>the application item page</a>.",
				shareA2div2: "As the owner of the application, when you are signed in on ArcGIS.com, the application includes a button to open the interactive builder:",				
				shareQ3: "Where is the data stored?",
				shareA3: "The Application configuration is stored in this web application item</a>.",
				shareWarning: "Sharing %WITH% has been disabled because you are not the owner of the <a href='%LINK%' target='_blank'>webmap</a>.",
 				shareWarningWith1: "publicly",
 				shareWarningWith2: "publicly and with the Organization"
			},
			directCreation: {
				header: "Welcome to the Swipe/Spyglass Builder",
				mapPickHeader: "To get started, please input a valid web map id, or use the search button to browse web maps.",
				launchBuilder: "Launch Builder",
				chooseWebmapLbl: "Choose web map...",
				explain2: "To create a Swipe or Spyglass story map, use the button below to choose the existing ArcGIS Online web map you want to use. Alternatively, you can paste the ID of the web map into the field below.",
				explain3: "If you want to use two web maps in your story map, you'll be prompted for the second web map later when you choose that option.",
				webmapPlaceholder: "Enter a web map id..."
			}
		},
		configure: {
			mapdlg:{
				items:{
					organizationLabel: "My Organization",
					onlineLabel: "ArcGIS Online",
					contentLabel: "My Content",
					favoritesLabel: "My Favorites"
				},
				title: "Select Web Map",
				searchTitle: "Search",
				ok: "Ok",
				cancel: "Cancel",
				placeholder: "Enter search term"
			}
		}
    }),
	"ar": 1,
	"cs": 1,
	"da": 1,
	"de": 1,
	"el": 1,
	"es": 1,
	"et": 1,
	"fi": 1,
	"fr": 1,
	"he": 1,
	"it": 1,
	"ja": 1,
	"ko": 1,
	"lt": 1,
	"lv": 1,
	"nl": 1,
	"nb": 1,
	"pl": 1,
	"pt-br": 1,
	"pt-pt": 1,
	"ro": 1,
	"ru": 1,
	"sv": 1,
	"tr": 1,
	"th": 1,
	"vi": 1,
	"zh-cn": 1,
	"zh-hk": 1, 
	"zh-tw": 1 
});

