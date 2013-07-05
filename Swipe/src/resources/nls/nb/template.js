define(
	({
		viewer: {
			loading: {
				step1: "LASTER INN APPLIKASJON",
				step2: "LASTER INN DATA",
				step3: "INITIALISERER",
				fail: "Beklager, men innlasting av sveipeverktøyet mislyktes",
				loadBuilder: "BYTTER TIL MODUS FOR BYGGEVERKTØY",
				failButton: "Prøv på nytt"
			},
			errors: {
				boxTitle: "Det har oppstått en feil",
				invalidConfig: "Alvorlig feil: Ugyldig konfigurasjon",
				invalidConfigNoWebmap: "Alvorlig feil: Ugyldig konfigurasjon (webkart ikke spesifisert)",
				createMap: "Kan ikke opprette kart",
				invalidApp: "Alvorlig feil: Kan ikke laste inn applikasjonen",
				initMobile: "Velkommen til webprogrammet for sveiping. Programmet er ikke konfigurert. Det interaktive verktøyet støttes ikke på mobile enheter.",
				noBuilderIE8: "Det interaktive sveipeverktøyet støttes ikke på Internet Explorer som er eldre enn versjon 9.",
				noLayerView: "Velkommen til webprogrammet for sveiping.<br />Programmet er ennå ikke konfigurert.",
				appSave: "Feil under lagring av webapplikasjonen",
				mapSave: "Feil under lagring av webkartet",
				notAuthorized: "Du har ikke tillatelse til å konfigurere denne applikasjonen",
				conflictingProjectionsTitle: "Projeksjonskonflikt",
				conflictingProjections: "Swipe støtter ikke bruk av to webkart med ulik projeksjon. Åpne Innstillinger og bruk et webkart med samme projeksjon som det første webkartet.",
				cpButton: "Lukk"
			},
			mobileView: {
				hideIntro: "SKJUL INTRO",
				navLeft: "Tegnforklaring",
				navMap: "Kart",
				navRight: "Data"
			},
			desktopView: {
				storymapsText: "Et fortellingskart",
				builderButton: "Gå over til byggermodus"
			}
		},
		builder: {
			builder: {
				panelHeader: "KONFIGURASJON AV APPLIKASJON",
				buttonSave: "LAGRE",
				buttonDiscard: "AVBRYT",
				buttonSettings: "Innstillinger",
				buttonView: "Visningsmodus",
				noPendingChange: "Ingen ventende endring",
				unSavedChangeSingular: "1 ulagret endring",
				unSavedChangePlural: "ulagrede endringer",
				popoverDiscard: "Er du sikker på at du vil forkaste endringer som ikke er lagret?",
				yes: "Ja",
				no: "Nei",
				popoverOpenViewExplain: "Dersom du åpner viseren, mister du endringer som ikke er lagret",
				popoverOpenViewOk: "Ok",
				popoverOpenViewCancel: "Avbryt",
				popoverSaveWhenDone: "Ikke glem å lagre når du er ferdig",
				closeWithPendingChange: "Er du sikker på at du vil bekrefte handlingen? Du mister da endringene du har gjort.",
				gotIt: "Ok",
				savingApplication: "Lagrer applikasjonen",
				saveSuccess: "Applikasjonen er lagret",
				saveError: "Lagringen mislyktes. Prøv på nytt.",
				signIn: "Logg på med en konto på",
				signInTwo: "for å lagre applikasjonen."
			},
			header:{
				editMe: "Rediger meg!",
				templateTitle: "Angi tittel på malen",
				templateSubtitle: "Angi undertittel for malen"
			},
			settings: {
				settingsHeader: "Applikasjonsinnstillinger",
				modalCancel: "Avbryt",
				modalApply: "Bruk"
			},
			settingsColors: {
				settingsTabColor: "Tema",
				settingsColorExplain: "Velg et app-tema eller angi dine egne farger.",
				settingsLabelColor: "Bakgrunnsfarger for overskrift og sidepaneler"
			},
			settingsHeader: {
				settingsTabLogo: "Overskrift",
				settingsLogoExplain: "Tilpass logoen øverst (maks. 250 x 50 piksler).",
				settingsLogoEsri: "Esri-logo",
				settingsLogoNone: "Ingen logo",
				settingsLogoCustom: "Tilpasset logo",
				settingsLogoCustomPlaceholder: "Bilde-URL",
				settingsLogoCustomTargetPlaceholder: "Gjennomklikkingskobling",
				settingsLogoSocialExplain: "Tilpass overskriftkoblingen øverst til høyre.",
				settingsLogoSocialText: "Tekst",
				settingsLogoSocialLink: "Kobling"
			},
			settingsExtent: {
				settingsTabExtent: "Utstrekning",
				settingsExtentExplain: "Angi begynnerutstrekningen via det interaktive kartet nedenfor.",
				settingsExtentExplainBottom: "Utstrekningen du definerer, endrer begynnerutstrekningen av webkartet.",
				settingsExtentDrawBtn: "Tegn en ny utstrekning",
				settingsExtentModifyBtn: "Rediger gjeldende utstrekning",
				settingsExtentApplyBtn: "Bruk på hovedkart"
			}
        },
		swipe: {
			mobileData: {
				noData: "Ingen data å vise!",
				noDataExplain: "Trykk på kartet for å velge et geoobjekt og kom tilbake hit",
				noDataMap: "Ingen data for dette kartet",
				noPopup: "Finner ingen popup for dette geoobjektet"
			},
			mobileLegend: {
				noLegend: "Ingen tegnforklaringer å vise."
			},
			swipeSidePanel: {
				editTooltip: "Angi beskrivelsen av sidepanelet",
				editMe: "Rediger meg!",
				legendTitle: "Tegnforklaring"
			},
			infoWindow: {
				noFeature: "Ingen data å vise",
				noFeatureExplain: "Trykk på kartet for å velge et geoobjekt"
			},
			settingsLayout: {
				settingsTabLayout: "Sveipestil",
				settingsLayoutExplain: "Velg en stil for sveipeverktøyet.",
				settingsLayoutSwipe: "Vertikal stolpe",
				settingsLayoutSpyGlass: "Kikkert",
				settingsLayoutSelected: "Valgt utforming",
				settingsLayoutSelect: "Velg denne utformingen",
				settingsSaveConfirm: "Noen av endringene dine krever at du lagrer og laster inn programmet på nytt"
			},
			settingsDataModel: {
				settingsTabDataModel: "Sveipelag",
				settingsDataModelExplainSwipe: "Velg hvilket lag eller webkart som skal vises og forsvinne med sveiping.",
				settingsDataModelExplainSwipe2: "",
				settingsDataModelExplainSpyGlass: "Velg hvilket lag eller webkart som skal vises i kikkerten.",
				settingsDataModelOneMap: "Ett webkart, ett enkelt lag",
				settingsDataModel1Explain: "Velg et lag som skal styres av sveipeverktøyet.",
				settingsDataModel1Warning: "Bare flis-, bilde- og dynamiske tjenester kan brukes. Hvis laget er skjult av overliggende lag, har ikke sveiping noen virkning.",
				settingsDataModel1SpyGlassExplain: "Velg laget som skal vises i kikkerten.",
				settingsDataModelTwoMaps: "To webkart",
				settingsDataModelLayerIds: "ID-er for webkartlag",
				settingsDataModelSelected: "Valgt type",
				settingsDataModelWebmapSwipeId1: "Høyre webkart-ID",
				settingsDataModelWebmapSwipeId2: "Venstre webkart-ID",
				settingsDataModelWebmapGlassId1: "ID for hovedwebkart",
				settingsDataModelWebmapGlassId2: "ID for webkart med kikkert",
				settingsDataModelSelect: "Velg denne typen",
				settingsDataModel2Explain: "Sveip med et annet webkart.",
				settingsDataModel2SpyGlassExplain: "Avdekk et annet webkart.",
				settingsDataModel2HelpTitle: "Slik finner du webkartets ID",
				settingsDataModel2HelpContent: "Kopier og lim inn tallene etter likhetstegnet (=) i URL-adressen til webkartet"
			},
			settingsLegend: {
				settingsTabLegend: "Appens utforming",
				settingsLegendExplain: "Velg innstillinger for utforming av programmet.",
				settingsLegendEnable: "Aktiver tegnforklaring",
				settingsDescriptionEnable: "Aktiver beskrivelse",
				settingsBookmarksEnable: "Aktiver sveipeserier",
				settingsLegendHelpTitle: "Slik begrenser du innholdet i tegnforklaringen",
				settingsLegendHelpContent: "Bruk innholdsfortegnelsen til kartvisningsprogrammet for ArcGIS.com (skjul i tegnforklaringen)",
				preview: "Forhåndsvisning av brukergrensesnitt"
			},
			settingsSwipePopup: {
				settingsSwipePopup: "Popup",
				settingsSwipePopupExplain: "Tilpass utseendet til overskriften i popupfeltene slik at det hjelper brukeren med å assosiere popupfelt med kartlag.",
				settingsSwipePopupSwipe1: "Venstre kart",
				settingsSwipePopupSwipe2: "Høyre kart",
				settingsSwipePopupGlass1: "Hovedkart",
				settingsSwipePopupGlass2: "Kikkertkart",
				settingsSwipePopupTitle: "Tittel i overskrift",
				settingsSwipePopupColor: "Farge på overskrift"
			},
			initPopup: {
				initHeader: "Velkommen til Swipe-verktøyet",
				modalNext: "Neste",
				modalApply: "Åpne appen"
			}
		}
    })
);