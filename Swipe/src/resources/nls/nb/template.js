define(
	({
		viewer: {
			loading: {
				step1: "LASTER INN APPLIKASJON",
				step2: "LASTER INN DATA",
				step3: "INITIALISERER",
				fail: "Beklager, men innlasting av sveipeverktøyet mislyktes",
				loadBuilder: "BYTTER TIL MODUS FOR BYGGEVERKTØY",
				redirectSignIn: "OMDIRIGERING TIL PÅLOGGINGSSIDEN",
				redirectSignIn2: "(du blir omdirigert hit etter pålogging)",
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
				buttonHelp: "Hjelp",
				buttonShare: "Del",
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
				saveError2: "Lagring mislyktes på grunn av ugyldig HTML-kode i et navn eller en beskrivelse",
				saveError3: "Tittelen må fylles ut",
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
				settingsDataModel2HelpContent: "Kopier og lim inn tallene etter likhetstegnet (=) i URL-adressen til webkartet",
				switchMaps: "Bytt kart",
				browseWebMaps: "Bla igjennom nettkart"
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
				settingsLocateButton: "Aktiver en 'Finn'-knapp i støttede nettlesere",
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
				initHeader: "Velkommen til byggeverktøyet for sveiping/forstørrelsesglass",
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
			},
			helpPopup: {
				title: "Hjelp",
				close: "Lukk",
				tab1: {
					div1: "Malen for sveiping/forstørrelsesglass er utviklet for å sammenligne to ulike nettkart eller to lag i ett enkelt nettkart i et flott og brukervennlig nettprogram som kan brukes i alle nettlesere på alle slags enheter, blant annet smarttelefoner og nettbrett.",
					div2: "Du finner mer informasjon om malen Sveiping/Forstørrelsesglass, blant annet eksempler opprettet av brukere, <a href='http://storymaps.arcgis.com/en/app-list/swipe/' target='_blank'> på webområdet med fortellingskart</a>. Du kan også følge oss på Twitter på <a href='https://twitter.com/EsriStoryMaps' target='_blank'>@EsriStoryMaps</a>.",
					div3: "Vi vil gjerne høre fra deg! Uansett om du har spørsmål, ønsker en ny funksjon eller tror du har funnet en feil, kan du besøke <a href='http://links.esri.com/storymaps/forum' target='_blank'>Story Maps User Forum</a>."
				}
			},
			share: {
				firstSaveTitle: "Programmet er lagret",
				firstSaveHeader: "Programmet er nå lagret i ArcGIS Online. Les disse svarene på vanlige spørsmål.",
				firstSaveA1: "Hvis du er ukjent med ArcGIS Online eller vil opprette en snarvei til grensesnittet for opprettere, kan du lagre følgende kobling: %LINK1%",
				firstSaveA1bis: "Du finner også programmet i <a href='%LINK2%' target='_blank'>innholdsmappen din i ArcGIS Online</a>.",
				firstSaveQ2: "Har programmet mitt blitt delt?",
				firstSaveA2: "For øyeblikket har ikke programmet ditt blitt delt. Hvis du vil dele det, bruker du DEL-knappen.",
				shareTitle: "Del programmet ditt",
				sharePrivateHeader: "Programmet ditt er ikke delt. Har du lyst til å dele det?",
				sharePrivateBtn1: "Del offentlig",
				sharePrivateBtn2: "Del med min organisasjon",
				sharePrivateProgress: "Deling pågår ...",
				sharePrivateErr: "Deling mislyktes. Prøv på nytt, eller",
				sharePrivateOk: "Delingen er blitt oppdatert, lastes inn ...",
				shareStatus1: "Programmet er ikke lagret",
				shareStatus2: "Programmet er delt offentlig",
				shareStatus3: "Programmet er delt innenfor organisasjonen",
				shareStatus4: "Programmet er ikke delt",
				sharePreviewAsUser: "Forhåndsvisning",
				shareHeader1: "Programmet er <strong>offentlig tilgjengelig</strong>.",
				shareHeader2: "Programmet ditt er tilgjengelig for medlemmer av organisasjonen din (krever pålogging).",
				shareLinkHeader: "Del programmet ditt med publikum",
				shareLinkOpen: "ÅPNE",
				learnMore: "Få mer informasjon",
				shareQ1Opt1: "Hvordan kan jeg beholde programmet privat?",
				shareQ1Opt2: "Hvordan kan jeg beholde programmet privat eller dele det offentlig?",
				shareA1: "Bruk %SHAREIMG% på <a href='%LINK1%' target='_blank'>elementsiden for programmet</a>. Hvis du også vil oppheve deling av nettkartet, bruker du <a href='%LINK2%' target='_blank'>elementsiden for nettkartet</a>.",
				shareA1bis: "Hvis du også vil oppheve delingen av geoobjektstjenesten, kan du bruke <a href='%LINK1%' target='_blank'>siden for geoobjektstjenesteelementer</a>.",
				shareQ2: "Hvordan kan jeg redigere programmet senere?",
				shareQ2bis: "Hvordan kommer jeg tilbake til grensesnittet for opprettere?",
				shareA2div1: "Lagre og bruk følgende kobling på nytt, %LINK1% eller bruk <a href='%LINK2%' target='_blank'>siden for programelementer</a>.",
				shareA2div2: "Når du har logget på ArcGIS.com som eier av programmet, får du tilgang til en knapp for å åpne det interaktive byggeverktøyet:",				
				shareQ3: "Hvor lagres dataene?",
				shareA3: "Programmets konfigurasjon er lagret i dette webprogramelementet</a>.",
				shareWarning: "Deling av %WITH% er deaktivert fordi du ikke eier <a href='%LINK%' target='_blank'>webkartet</a>.",
 				shareWarningWith1: "offentlig",
 				shareWarningWith2: "offentlig og med organisasjonen"
			},
			directCreation: {
				header: "Velkommen til byggeverktøyet for sveiping/forstørrelsesglass",
				mapPickHeader: "Angi en gyldig nettkart-ID for å komme i gang, eller bruk søkeknappen for å bla igjennom nettkart.",
				launchBuilder: "Start byggeverktøyet",
				chooseWebmapLbl: "Velg webkart...",
				explain2: "Hvis du vil lage et fortellingskart for Sveiping eller Forstørrelsesglass, bruker du knappen nedenfor for å velge det eksisterende ArcGIS Online-kartet du vil bruke. Alternativt kan du lime inn ID-en til webkartet i feltet nedenfor.",
				explain3: "Hvis du vil bruke to webkart i fortellingskartet ditt, blir du bedt om det andre webkartet senere, når du velger dette alternativet.",
				webmapPlaceholder: "Angi en webkart-ID ..."
			}
		},
		configure: {
			mapdlg:{
				items:{
					organizationLabel: "Min organisasjon",
					onlineLabel: "ArcGIS Online",
					contentLabel: "Mitt innhold",
					favoritesLabel: "Mine favoritter"
				},
				title: "Velg webkart",
				searchTitle: "Søk",
				ok: "Ok",
				cancel: "Avbryt",
				placeholder: "Angi søkeord"
			}
		}
    })
);