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
				portalSelf: "Alvorlig feil: Kan ikke hente portalkonfigurasjon",
				invalidConfig: "Alvorlig feil: Ugyldig konfigurasjon",
				invalidConfigNoWebmap: "Alvorlig feil: Ugyldig konfigurasjon (webkart ikke spesifisert)",
				createMap: "Kan ikke opprette kart",
				invalidApp: "Alvorlig feil: Kan ikke laste inn applikasjonen",
				initMobile: "Velkommen til webprogrammet for sveiping. Programmet er ikke konfigurert. Det interaktive verktøyet støttes ikke på mobile enheter.",
				noBuilderIE8: "Det interaktive sveipeverktøyet støttes ikke på Internet Explorer som er eldre enn versjon 9.",
				noLayerView: "Velkommen til webprogrammet for sveiping.<br />Programmet er ennå ikke konfigurert.",
				appSave: "Feil under lagring av webapplikasjonen",
				mapSave: "Feil under lagring av webkartet",
				notAuthorized: "Du har ikke tillatelse til å bruke denne applikasjonen",
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
				builderButton: "Gå over til byggermodus",
				bitlyTooltip: "Få en kort kobling til applikasjonen"
			}
		},
		builder: {
			builder: {
				panelHeader: "KONFIGURASJON AV APPLIKASJON",
				buttonSave: "LAGRE",
				buttonDiscard: "AVBRYT",
				buttonSettings: "Innstillinger",
				buttonView: "Visningsmodus",
				buttonItem: "Åpne webapplikasjonselementet",
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
				settingsLogoSocialLink: "Kobling",
				settingsLogoSocialDisabled: "Administratoren har deaktivert denne funksjonen"
			},
			settingsExtent: {
				settingsTabExtent: "Utstrekning",
				settingsExtentExplain: "Angi begynnerutstrekningen via det interaktive kartet nedenfor.",
				settingsExtentExplainBottom: "Utstrekningen du definerer, endrer webkartets opprinnelige utstrekning. Legg merke til at hvis du foretar en sveipeserie, blir ikke denne utstrekningen brukt.",
				settingsExtentDateLineError: "Utstrekningen kan ikke være over den 180. lengdegraden",
				settingsExtentDateLineError2: "Feil ved beregning av utstrekningen",
				settingsExtentDrawBtn: "Tegn en ny utstrekning",
				settingsExtentModifyBtn: "Rediger gjeldende utstrekning",
				settingsExtentApplyBtn: "Bruk på hovedkart",
				settingsExtentUseMainMap: "Bruk utstrekningen for hovedkartet"
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
				settingsTabDataModel: "Sveipetype",
				settingsDataModelExplainSwipe: "Hva vil du at brukerne skal sveipe?",
				settingsDataModelExplainSwipe2: "",
				settingsDataModelExplainSpyGlass: "Velg hvilket lag eller webkart som skal vises i kikkerten.",
				settingsDataModelOneMap: "Et lag i et webkart",
				settingsDataModel1Explain: "Velg laget du vil at skal sveipes",
				settingsDataModel1Warning: "Hvis laget er skjult av overliggende lag, har ikke sveipingen noen virkning.",
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
				settingsDataModel2HelpTitle: "Hvordan finner jeg webkartets ID?",
				settingsDataModel2HelpContent: "Kopier og lim inn tallene etter likhetstegnet (=) i URL-adressen til webkartet"
			},
			settingsLegend: {
				settingsTabLegend: "Appens utforming",
				settingsLegendExplain: "Velg innstillinger for utforming av programmet.",
				settingsLegendEnable: "Aktiver tegnforklaring",
				settingsDescriptionEnable: "Aktiver beskrivelse",
				settingsBookmarksEnable: "Aktiver sveipeserier",
				settingsPopupDisable: "Aktiver sprettoppvindu",
				settingsLocationSearchEnable: "Aktiver posisjonsindikatorsøk",
				settingsGeolocatorEnable: "Aktiver geoposisjonsindikatoren",
				settingsLegendHelpContent: "Hvis du vil finjustere innholdet i tegnforklaringen, bruker du innholdsfortegnelsen for kartviseren på ArcGIS.com (skjul i tegnforklaringen)",
				settingsSeriesHelpContent: "Sveip serier er et fanebasert navigeringsalternativ som veileder brukeren til en bestemt utstrekning, og viser en tittel og beskrivende tekst i sidepanelet.  Under den første aktiveringen, blir bokmerkene fra webkart importert og brukt for å fylle serieraden.  Hvis seriealternativet deaktiveres, slås serieraden av, men seriekonfigurasjonen spares til senere bruk.", 
				settingsSeriesHelpContent2: "Med sveipeserier kan du opprette og redigere et utvalg av lokasjoner med tilhørende titler og tekst. Hvis du har et webkart med bokmerker, vises de. Du kan deaktivere serien, men konfigurasjonen beholdes for fremtidig bruk.",
				settingsSeriesHelpLink: "Se et eksempel på et program med en sveipeserie her",
				preview: "Forhåndsvisning av brukergrensesnitt",
				settingsLocateButtonExplain: "Denne funksjonen støttes på de fleste mobile enheter og nettlesere på stasjonære datamaskiner (inkludert Internet Explorer 9+).",
				settingsLocateButton: "Akriver en Lokaliser-knapp i støttede nettlesere",
				settingsAddressSearch: "Aktiver et adressesøkverktøy"
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
				modalPrev: "Forrige",
				modalApply: "Åpne appen"
			},
			seriesPanel: {
				title: "Tittel",
				descr: "Beskrivelse",
				discard: "Fjern bokmerke",
				saveExtent: "Angi utstrekning for bokmerke",
				discardDisabled: "Du kan ikke fjerne dette bokmerket. Du kan deaktivere sveipeserier i innstillingene."
			}
		}
    })
);