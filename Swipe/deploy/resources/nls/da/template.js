define(
	({
		viewer: {
			loading: {
				step1: "INDLÆSER APPLIKATION",
				step2: "INDLÆSER DATA",
				step3: "STARTER",
				fail: "Beklager, Swipe-indlæsning mislykkedes",
				loadBuilder: "SKIFTER TIL BUILDER-TILSTAND",
				failButton: "Prøv igen"
			},
			errors: {
				boxTitle: "Der opstod en fejl",
				invalidConfig: "Uoprettelig fejl: Ugyldig konfiguration",
				invalidConfigNoWebmap: "Uoprettelig fejl: Ugyldig konfiguration (intet webkort angivet)",
				createMap: "Kan ikke oprette kort",
				invalidApp: "Uoprettelig fejl: Applikationen kan ikke indlæses",
				initMobile: "Velkommen til swipe-webapplikationen. Applikationen er ikke konfigureret. Det interaktive builder-program understøttes ikke på mobile enheder.",
				noBuilderIE8: "Swipe-builderprogrammet understøttes ikke i Internet Explorer før version 9.",
				noLayerView: "Velkommen til Swipe-webapplikationen.<br />Applikationen er endnu ikke konfigureret.",
				appSave: "Fejl ved lagring af webapplikationen",
				mapSave: "Fejl ved lagring af webkortet",
				notAuthorized: "Du har ikke autorisation til at konfigurere denne applikation",
				conflictingProjectionsTitle: "Konfliktende projektioner",
				conflictingProjections: "Swipe understøtter ikke, at man bruger to webkort med forskellige projektioner. Åbn indstillinger, og brug et webkort, der anvender den samme projektion som det første webkort.",
				cpButton: "Luk"
			},
			mobileView: {
				hideIntro: "SKJUL INTRO",
				navLeft: "Signaturforklaring",
				navMap: "Kort",
				navRight: "Data"
			},
			desktopView: {
				storymapsText: "Et historiekort",
				builderButton: "Skift til builder-tilstand"
			}
		},
		builder: {
			builder: {
				panelHeader: "APPLIKATIONSKONFIGURATION",
				buttonSave: "GEM",
				buttonDiscard: "ANNULLÉR",
				buttonSettings: "Indstillinger",
				buttonView: "Visningstilstand",
				noPendingChange: "Ingen ventende ændringer",
				unSavedChangeSingular: "1 ikke-gemt ændring",
				unSavedChangePlural: "ikke-gemte ændringer",
				popoverDiscard: "Er du sikker på, at du vil slette nogle ikke-gemte ændringer?",
				yes: "Ja",
				no: "Nej",
				popoverOpenViewExplain: "Ved at åbne viseren mister du eventuelle ikke-gemte ændringer",
				popoverOpenViewOk: "OK",
				popoverOpenViewCancel: "Annullér",
				popoverSaveWhenDone: "Glem ikke at gemme, når du er færdig",
				closeWithPendingChange: "Er du sikker på, at du vil bekræfte denne handling? Dine ændringer vil gå tabt.",
				gotIt: "OK",
				savingApplication: "Gemmer applikation",
				saveSuccess: "Applikation gemt med succes",
				saveError: "Lagring mislykkedes, prøv igen",
				signIn: "Log ind med en konto på",
				signInTwo: "for at gemme applikationen."
			},
			header:{
				editMe: "Redigér mig!",
				templateTitle: "Indstil skabelontitel",
				templateSubtitle: "Indstil skabelonundertitel"
			},
			settings: {
				settingsHeader: "Applikationsindstillinger",
				modalCancel: "Annullér",
				modalApply: "Anvend"
			},
			settingsColors: {
				settingsTabColor: "Tema",
				settingsColorExplain: "Vælg et app-tema, eller definer dine egne farver.",
				settingsLabelColor: "Baggrundsfarver til header og side panel"
			},
			settingsHeader: {
				settingsTabLogo: "Logo",
				settingsLogoExplain: "Tilpas toptekstlogoet  (maks. 250 x 50 pixel).",
				settingsLogoEsri: "Esri-logo",
				settingsLogoNone: "Intet logo",
				settingsLogoCustom: "Brugerdefineret logo",
				settingsLogoCustomPlaceholder: "Billede-URL",
				settingsLogoCustomTargetPlaceholder: "Klik gennem-link",
				settingsLogoSocialExplain: "Tilpas header-linket øverst til højre.",
				settingsLogoSocialText: "Tekst",
				settingsLogoSocialLink: "Link"
			},
			settingsExtent: {
				settingsTabExtent: "Område",
				settingsExtentExplain: "Indstil startudstrækningen via det interaktive kort nedenfor.",
				settingsExtentExplainBottom: "Den udstrækning, du definerer, ændrer dit webkorts oprindelige udstrækning.",
				settingsExtentDrawBtn: "Tegn ny udstrækning",
				settingsExtentModifyBtn: "Redigér den aktuelle udstrækning",
				settingsExtentApplyBtn: "Anvend på hovedkort"
			}
        },
		swipe: {
			mobileData: {
				noData: "Der er ingen data at vise",
				noDataExplain: "Tryk på kortet for at markere et objekt og komme tilbage hertil",
				noDataMap: "Ingen data til dette kort",
				noPopup: "Der blev ikke fundet noget pop-up-vindue til dette objekt"
			},
			mobileLegend: {
				noLegend: "Ingen signaturforklaring at vise."
			},
			swipeSidePanel: {
				editTooltip: "Angiv beskrivelse til sidepanelet",
				editMe: "Redigér mig!",
				legendTitle: "Signaturforklaring"
			},
			infoWindow: {
				noFeature: "Ingen at vise",
				noFeatureExplain: "Tryk på kortet for at vælge et objekt"
			},
			settingsLayout: {
				settingsTabLayout: "Swipe-typografi",
				settingsLayoutExplain: "Vælg en typografi til swipe-værktøjet.",
				settingsLayoutSwipe: "Lodret linje",
				settingsLayoutSpyGlass: "Kikkert",
				settingsLayoutSelected: "Vælg layout",
				settingsLayoutSelect: "Vælg dette layout",
				settingsSaveConfirm: "Nogle af dine ændringer kræver, at du gemmer og genindlæser applikationen"
			},
			settingsDataModel: {
				settingsTabDataModel: "Swipe-lag",
				settingsDataModelExplainSwipe: "Vælg det lag eller webkort, der vises og forsvinder med swipe.",
				settingsDataModelExplainSwipe2: "",
				settingsDataModelExplainSpyGlass: "Vælg det lag eller webkort, der vises i kikkerten.",
				settingsDataModelOneMap: "Et webkort, enkelt lag",
				settingsDataModel1Explain: "Vælg et lag, der skal styres af swipe-værktøjet.",
				settingsDataModel1Warning: "Kun dynamiske, tile- og billedtjenester kan anvendes. Hvis laget er skjult af øvre lag, har swipe ingen effekt.",
				settingsDataModel1SpyGlassExplain: "Marker det lag, der skal vises i kikkerten.",
				settingsDataModelTwoMaps: "To webkort",
				settingsDataModelLayerIds: "ID for webkort-lag",
				settingsDataModelSelected: "Valgt type",
				settingsDataModelWebmapSwipeId1: "ID for højre webkort",
				settingsDataModelWebmapSwipeId2: "ID for venstre webkort",
				settingsDataModelWebmapGlassId1: "ID for hoved-webkort",
				settingsDataModelWebmapGlassId2: "ID for kikkert-webkort",
				settingsDataModelSelect: "Vælg denne type",
				settingsDataModel2Explain: "Swipe med et andet webkort.",
				settingsDataModel2SpyGlassExplain: "Vis et andet webkort.",
				settingsDataModel2HelpTitle: "Sådan finder du et webkorts ID",
				settingsDataModel2HelpContent: "Kopiér tallene efter \'=\' -tegnet i webkortets URL"
			},
			settingsLegend: {
				settingsTabLegend: "App-layout",
				settingsLegendExplain: "Vælg indstillinger for applikationslayout.",
				settingsLegendEnable: "Aktiver signaturforklaring",
				settingsDescriptionEnable: "Aktiver beskrivelse",
				settingsBookmarksEnable: "Aktiver Swipe-serie",
				settingsLegendHelpTitle: "Sådan forbedres indholdet af signaturforklaringer",
				settingsLegendHelpContent: "Brug ArcGIS.com-webkortviserens indholdsfortegnelse (Skjul i signaturforklaring)",
				preview: "UI-forhåndsvisning"
			},
			settingsSwipePopup: {
				settingsSwipePopup: "Pop-up-vindue",
				settingsSwipePopupExplain: "Tilpas udseendet på pop-up-vinduets header for at hjælpe brugerne med at forbinde pop-up-vinduer med kortlag.",
				settingsSwipePopupSwipe1: "Venstre kort",
				settingsSwipePopupSwipe2: "Højre kort",
				settingsSwipePopupGlass1: "Hovedkort",
				settingsSwipePopupGlass2: "Kikkert-kort",
				settingsSwipePopupTitle: "Header-titel",
				settingsSwipePopupColor: "Header-farve"
			},
			initPopup: {
				initHeader: "Velkommen til Swipe Builder",
				modalNext: "Næste",
				modalApply: "Åbn app\'en"
			}
		}
    })
);