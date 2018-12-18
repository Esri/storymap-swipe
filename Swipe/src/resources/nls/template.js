define({
	root: ({
		viewer: {
			loading: {
				step1: "LOADING STORY",
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
				invalidConfigNoWebmap: "Fatal error: Invalid configuration (web map or application identifier not specified in index.html)",
				invalidConfigNoAppDev: "No Web Mapping Application identifier or webmap are specified in URL parameters (?appid= or ?webmap=). In development mode, the appid and webmap configuration in index.html are ignored.",
				createMap: "Unable to create map",
				invalidApp: "Fatal error: The story cannot be loaded",
				initMobile: "Welcome to the swipe web application. The application is not configured. The interactive builder is not supported on mobile devices.",
				initMobile2: "The Swipe builder is not supported at this display size. If possible, resize your browser to access the builder or please build your story on a device with a larger screen.",
				initMobile3: "Please rotate your device to landscape orientation to use the Swipe builder.",
				noBuilderIE8: "The Swipe interactive builder is not supported on Internet Explorer before version 9.",
				noViewerIE2: "You are attempting to view this story using an older, unsupported browser. There may be features that do not work or other unexpected issues. We suggest you upgrade to Internet Explorer 11 or use another browser, such as Chrome.",
 				noViewerIE3: "In late 2017, this story will no longer load on this browser. At that time, you must use a supported browser to view this story.",
				attention: "Attention!",
				noLayerView: "Welcome to the Swipe web application.<br />The application is not configured yet.",
				appSave: "Error saving the web story",
				mapSave: "Error saving the web map",
				notAuthorized: "You are not authorized to access this story",
				notAuthorizedBuilder: "You are not authorized to use Swipe and Spyglass builder.",
				conflictingProjectionsTitle: "Conflicting Projections",
				conflictingProjections: "Swipe does not support using two web maps with different projections. Please open settings and use a web map that use the same projection than the first web map.",
				cpButton: "Close",
				unspecifiedConfigOwner: "Authorized owner hasn't been configured.",
				invalidConfigOwner: "Story owner is not authorized."
			},
			mobileView: {
				hideIntro: "HIDE INTRO",
				navLeft: "Legend",
				navMap: "Map",
				navRight: "Data"
			},
			desktopView: {
				storymapsText: "A Story Map",
				builderButton: "Switch to builder mode",
				facebookTooltip: "Share on Facebook",
				twitterTooltip: "Share on Twitter",
				bitlyTooltip: "Get a short link",
				tooltipAutoplayDisabled: "This isn't available in autoplay mode",
				autoplayLabel: "Autoplay mode",
				autoplayExplain1: "Autoplay mode will advance through your story at a regular interval. This is ideal on a kiosk or public display monitor, but be aware that in other situations it may make the story harder to read. This feature isn't supported on small displays.",
				autoplayExplain2: "When this mode is active there are controls to play/pause the story and adjust the navigation speed."
			},
			bannerNotification: {
				learnMore: "Learn More",
				close: "Close",
				dontShowAgain: "Don't show this message again"
			},
			httpsTransitionMessage: {
				bannerMsg: "Important Message about Web Security and Story Maps",
				s1h1: "Esri is enhancing the security of Story Maps",
				s1p1: "Your Story Maps live on the web, and the web community is always working to establish and implement better security. HTTPS, which provides a secure connection for content transmitted over the internet, is emerging as the expected way to access web content. Most modern browsers now show warning messages when HTTP instead of HTTPS is used. Because of this emerging standard, beginning with the June 2018 update to ArcGIS Online, your Story Maps will need to use HTTPS.",
				s1p2: "Practically speaking, this means a Story Map and all its content (including images, layers, embedded apps and websites) must be accessed using links that start with HTTPS rather than HTTP. This ensures the best experience for your readers because most web browsers will indicate that your stories are secure.",
				s2h1: "What do I need to do?",
				s2p1: "Esri is working to make this an easy transition for Story Map authors and readers. Tools are available now in Story Map builders and My Stories that help you find insecure content (HTTP) in your stories and provide recommendations for how to address it. Please check your stories for insecure content and update to HTTPS before June 2018.",
				action1: "Close",
				action2: "Check my stories now",
				action3: "Learn more"
  			},
			licenseChange2018: {
				noAccess: "Your account (%USER_NAME%) is not licensed to open a Story Map that is not public.  Please ask your organization administrator to assign you a user type that includes Story Maps or an add-on Essential Apps license."
			}
		},
		builder: {
			builder: {
				panelHeader: "STORY CONFIGURATION",
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
				savingApplication: "Saving story",
				saveSuccess: "Story saved",
				saveError: "Save failed, please try again",
				saveError2: "Save failed due to an invalid html tag in a name or description",
				saveError3: "The title can't be empty",
				signIn: "Please sign in with an account on",
				signInTwo: "to save the story."
			},
			header:{
				editMe: "Edit me!",
				templateTitle: "Set template title",
				templateSubtitle: "Set template subtitle"
			},
			settings: {
				settingsHeader: "Story settings",
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
				settingsSaveConfirm: "Some of your changes require that you save and reload the story"
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
				settingsLegendExplain: "Select the layout settings.",
				settingsLegendEnable: "Enable Legend",
				settingsDescriptionEnable: "Enable Description",
				settingsBookmarksEnable: "Enable Swipe series",
				settingsPopupDisable: "Enable pop-up",
				settingsLocationSearchEnable: "Enable locator search",
				settingsGeolocatorEnable: "Enable geolocator",
				settingsLegendHelpContent: "To refine the legend content, use the ArcGIS web map viewer table of contents (Hide in Legend)",
				settingsSeriesHelpContent: "Swipe series is a tabbed navigation option that will guide the viewer to a particular extent and display a title and description text in the side panel.  During initial activation, the bookmarks from the web map(s) will be imported and used to pre-populate the series bar.  Disabling the series option turns off the series bar, but the series configuration is preserved for future use.",
				settingsSeriesHelpContent2: "Swipe series lets you create and edit a selection of locations with accompanying titles and text.  If your web map has bookmarks, they'll be displayed.  You can disable the series, but the configuration will be preserved for future use.",
				settingsSeriesHelpLink: "See an example of an application with a swipe series here",
				preview: "UI preview",
				settingsLocateButtonExplain: "Supported on most browsers. Only appears when story map accessed over HTTPS. Does not appear if the story is embedded.",
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
					div2: "For additional information on the Swipe/Spyglass template, including examples created by users, <a href='https://storymaps.arcgis.com/en/app-list/swipe-spyglass/' target='_blank'> visit the Story Maps website</a>. You can also follow us on Twitter at <a href='https://twitter.com/EsriStoryMaps' target='_blank'>@EsriStoryMaps</a>.",
					div3: "We would love to hear from you! Whether you have a question, want to request a new feature, or think you've found a bug, please visit the <a href='http://links.esri.com/storymaps/forum' target='_blank'>Story Maps User Forum</a>."
				}
			},
			share: {
				firstSaveTitle: "Story saved",
				manageStory: "Manage your story",
				manageStoryA1: "Tip: You can use %LINK1% to check your story for errors and change how its components are shared. My Stories also helps you make your story look good when it is shared on social networks. You can learn about other useful features of My Stories in these %LINK2%.",
				manageStoryA1V1: "My Stories",
				manageStoryA1V2: "blog posts",
				shareTitle: "Share your story",
				sharePrivateHeader: "Your story is not shared, would you like to share it?",
				sharePrivateBtn1: "Share publicly",
				sharePrivateBtn2: "Share with my Organization",
				sharePrivateProgress: "Sharing in progress...",
				sharePrivateErr: "Sharing failed, try again or",
				sharePrivateOk: "Sharing updated, loading...",
				shareStatus1: "Story is not saved",
				shareStatus2: "Story is shared publicly",
				shareStatus3: "Story is shared within the organization",
				shareStatus4: "Story is not shared",
				sharePreviewAsUser: "Preview",
				shareHeader1: "Your story is <strong>publicly accessible</strong>.",
				shareHeader2: "Your story is accessible by your organization members (login is required).",
				shareLinkHeader: "Share your story",
				shareLinkOpen: "OPEN",
				learnMore: "Learn more",
				shareA1: "Use %SHAREIMG% on <a href='%LINK1%' target='_blank'>the application item page</a>. If you also want to unshare the web map, use <a href='%LINK2%' target='_blank'>the web map item page</a>.",
				shareWarning: "Sharing %WITH% has been disabled because you are not the owner of the <a href='%LINK%' target='_blank'>webmap</a>.",
				shareWarningWith1: "publicly",
				shareWarningWith2: "publicly and with the Organization"
			},
			directCreation: {
				header: "Welcome to the Swipe/Spyglass Builder",
				mapPickHeader: "To get started, please input a valid web map id, or use the search button to browse web maps.",
				launchBuilder: "Launch Builder",
				chooseWebmapLbl: "Choose web map...",
				explain2: "To create a Swipe or Spyglass story map, use the button below to choose the existing web map you want to use. Alternatively, you can paste the ID of the web map into the field below.",
				explain3: "If you want to use two web maps in your story map, you'll be prompted for the second web map later when you choose that option.",
				webmapPlaceholder: "Enter a web map id..."
			},
			saveErrorSocial: {
				title: "Social media sharing update",
				panel1: "Your story’s appearance on social media has been improved, but your ArcGIS web application item title is not the same as your story title.",
				panel1tooltip: "By defining a title, summary and thumbnail image, your story will look like this:",
				panel2:	"Which title would you like to use on social media:",
				panel2q1: "Story title (recommended)",
				panel2q1tooltip: "By choosing this option, your item title will be modified to match your story title and further changes in the builder will be synchronized.",
				panel2q2: "Item title",
				panel3: "To further improve how your story looks on social media use ${MYSTORIES} to add a summary and a thumbnail image.",
				panel4: "Do not warn me again for this story",
				mystories: "My Stories",
				btnSave: "Save"
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
		},
		httpsTransitionNotification: {
				s1h1: "Esri is enhancing the security of Story Maps",
				s1p1: "Your Story Maps live on the web, and the web community is always working to establish and implement better security. HTTPS, which provides a secure connection for content transmitted over the internet, is emerging as the expected way to access web content. Most modern browsers now show warning messages when HTTP instead of HTTPS is used. Because of this emerging standard, we strongly recommend you use HTTPS links for authoring and sharing Story Maps, and only use HTTPS URLs when embedding web content or linking to images within a Story Map.",
				s1p2: "Practically speaking, this means a Story Map and all its content (including images, layers, embedded apps and websites) should be accessed using links that start with HTTPS rather than HTTP. This ensures the best experience for your readers because most web browsers will indicate that your stories are secure.",
				s2h1: "What do I need to do?",
				s2p1: "Esri is working to make this an easy transition for Story Map authors and readers. Tools are available now in Story Map builders and My Stories that help you find insecure content (HTTP) in your stories and provide recommendations for how to address it. Please check your stories for insecure content and update to HTTPS as soon as possible.",
				action1: "Close",
				action2: "Check my stories now",
				action3: "Learn more"
			},
			embedBar: {
				share: "Share",
				fullScreen: "Full screen",
				enlarge: "Enlarge",
				newTab: "Open in a new tab",
				tagline: "A Story Map",
				exitFullScreen: "Exit full screen"
 			},
			june2018SurveyMessage: {
				bannerMsg: "Can we ask you something? It will help shape the future of Story Maps.",
				s1h1: "Share your thoughts, shape the future",
				s1p1: "Your input is our single most important source of feedback, and learning more about you will help us improve Story Maps. We would be grateful if you could participate in this three-minute survey.",
				s2p1: "As always, thanks for using Esri Story Maps!",
				action1: "Close",
				action2: "Take the survey"
			}
    }),
	"ar": 1,
	"bs": 1,
	"ca": 1,
	"cs": 1,
	"da": 1,
	"de": 1,
	"el": 1,
	"es": 1,
	"et": 1,
	"fi": 1,
	"fr": 1,
	"he": 1,
	"hi": 1,
	"hr": 1,
	"hu": 1,
	"id": 1,
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
	"sl": 1,
	"sr": 1,
	"sv": 1,
	"th": 1,
	"tr": 1,
	"vi": 1,
	"zh-cn": 1,
	"zh-hk": 1,
	"zh-tw": 1
});
