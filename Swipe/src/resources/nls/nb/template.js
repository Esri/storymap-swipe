define(
	 ({
		viewer: {
			loading: {
				step1: "LASTER INN HISTORIEN",
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
				invalidConfigNoWebmap: "Alvorlig feil: Ugyldig konfigurasjon (webkart- eller applikasjons-ID ikke angitt i index.html)",
				invalidConfigNoAppDev: "Det er ikke angitt en webkartapplikasjons-ID eller et webkart i URL-parameterne (?appid= eller ?webmap=). App-ID-en og webkartkonfigurasjonen i Index.html ignoreres i utviklingsmodus.",
				createMap: "Kan ikke opprette kart",
				invalidApp: "Alvorlig feil: Kan ikke laste inn historien",
				initMobile: "Velkommen til webprogrammet for sveiping. Programmet er ikke konfigurert. Det interaktive verktøyet støttes ikke på mobile enheter.",
				initMobile2: "Swipe-byggeverktøyet støttes ikke med denne skjermstørrelsen. Hvis det er mulig, endrer du størrelsen på nettleseren for å få tilgang til byggeverktøyet. Du kan også lage historien på en enhet med større skjerm.",
				initMobile3: "Snu enheten i liggende retning for å bruke Swipe-byggeverktøyet.",
				noBuilderIE8: "Det interaktive sveipeverktøyet støttes ikke på Internet Explorer som er eldre enn versjon 9.",
				noLayerView: "Velkommen til webprogrammet for sveiping.<br />Programmet er ennå ikke konfigurert.",
				appSave: "Feil under lagring av webhistorien",
				mapSave: "Feil under lagring av webkartet",
				notAuthorized: "Du har ikke tillatelse til å lese denne historien",
				notAuthorizedBuilder: "Du har ikke tillatelse til å bruke byggeverktøyet Swipe and Spyglass.",
				conflictingProjectionsTitle: "Projeksjonskonflikt",
				conflictingProjections: "Swipe støtter ikke bruk av to webkart med ulik projeksjon. Åpne Innstillinger og bruk et webkart med samme projeksjon som det første webkartet.",
				cpButton: "Lukk",
				unspecifiedConfigOwner: "Godkjent eier er ikke konfigurert.",
				invalidConfigOwner: "Historieeier er ikke godkjent."
			},
			mobileView: {
				hideIntro: "SKJUL INTRO",
				navLeft: "Tegnforklaring",
				navMap: "Kart",
				navRight: "Data"
			},
			desktopView: {
				storymapsText: "Et fortellingskart",
				builderButton: "Gå over til byggemodus",
				facebookTooltip: "Del på Facebook",
				twitterTooltip: "Del på Twitter",
				bitlyTooltip: "Få en kort kobling",
				tooltipAutoplayDisabled: "Dette er ikke tilgjengelig i automatisk avspillingsmodus",
				autoplayLabel: "Automatisk avspillingsmodus",
				autoplayExplain1: "Automatisk avspillingsmodus går videre i historien med gitte intervaller. Dette fungerer utmerket til kiosker eller informasjonsskjermer, men kan i andre situasjoner gjøre det vanskeligere å lese historien. Denne funksjonen støttes ikke på små skjermer.",
				autoplayExplain2: "Når denne modusen er aktivert, vises det kontroller for å spille av/pause historien og justere navigeringshastigheten."
			}
		},
		builder: {
			builder: {
				panelHeader: "KONFIGURASJON AV HISTORIE",
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
				savingApplication: "Lagrer historien",
				saveSuccess: "Historien er lagret",
				saveError: "Lagringen mislyktes. Prøv på nytt.",
				saveError2: "Lagring mislyktes på grunn av ugyldig HTML-kode i et navn eller en beskrivelse",
				saveError3: "Tittelen må fylles ut",
				signIn: "Logg på med en konto på",
				signInTwo: "for å lagre historien."
			},
			header:{
				editMe: "Rediger meg!",
				templateTitle: "Angi tittel på malen",
				templateSubtitle: "Angi undertittel for malen"
			},
			settings: {
				settingsHeader: "Historieinnstillinger",
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
				settingsSaveConfirm: "Noen av endringene dine krever at du lagrer og laster inn historien på nytt"
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
				settingsLegendExplain: "Velg innstillinger for oppsett.",
				settingsLegendEnable: "Aktiver tegnforklaring",
				settingsDescriptionEnable: "Aktiver beskrivelse",
				settingsBookmarksEnable: "Aktiver sveipeserier",
				settingsPopupDisable: "Aktiver popup",
				settingsLocationSearchEnable: "Aktiver posisjonsindikatorsøk",
				settingsGeolocatorEnable: "Aktiver geoposisjonsindikatoren",
				settingsLegendHelpContent: "Hvis du vil finjustere innholdet i tegnforklaringen, bruker du innholdsfortegnelsen i ArcGIS-webkartvisningen (skjul i tegnforklaringen)",
				settingsSeriesHelpContent: "Sveipe-serier er et fanebasert navigeringsalternativ som veileder brukeren til en bestemt utstrekning, og viser en tittel og beskrivende tekst i sidepanelet.  Under den første aktiveringen, blir bokmerkene fra webkart importert og brukt for å fylle serieraden.  Hvis seriealternativet deaktiveres, slås serieraden av, men seriekonfigurasjonen spares til senere bruk.",
				settingsSeriesHelpContent2: "Med sveipeserier kan du opprette og redigere et utvalg av lokasjoner med tilhørende titler og tekst. Hvis du har et webkart med bokmerker, vises de. Du kan deaktivere serien, men konfigurasjonen beholdes for fremtidig bruk.",
				settingsSeriesHelpLink: "Se et eksempel på et program med en sveipeserie her",
				preview: "Forhåndsvisning av brukergrensesnitt",
				settingsLocateButtonExplain: "Denne funksjonen støttes på de fleste mobile enheter og nettlesere på stasjonære datamaskiner (inkludert Internet Explorer 9+).",
				settingsLocateButton: "Aktiver en 'Finn'-knapp i støttede nettlesere",
				settingsAddressSearch: "Aktiver et adressesøkverktøy"
			},
			settingsSwipePopup: {
				settingsSwipePopup: "Oppsprett",
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
				firstSaveTitle: "Historien er lagret",
				manageStory: "Administrer historien",
				manageStoryA1: "Tips: Du kan bruke %LINK1% til å sjekke om det er feil i historien og endre hvordan komponentene i historien deles. Mine historier gjør det også så enklere å sikre at historien vises på en god måte på sosiale nettverk. Du finner mer informasjon om nyttig funksjoner i disse %LINK2%.",
				manageStoryA1V1: "Mine historier",
				manageStoryA1V2: "blogginnlegg",
				shareTitle: "Del historien",
				sharePrivateHeader: "Historien din er ikke delt. Har du lyst til å dele den?",
				sharePrivateBtn1: "Del offentlig",
				sharePrivateBtn2: "Del med min organisasjon",
				sharePrivateProgress: "Deling pågår ...",
				sharePrivateErr: "Deling mislyktes. Prøv på nytt, eller",
				sharePrivateOk: "Delingen er oppdatert, laster inn ...",
				shareStatus1: "Historien er ikke lagret",
				shareStatus2: "Historien er delt offentlig",
				shareStatus3: "Historien er delt innenfor organisasjonen",
				shareStatus4: "Historien er ikke delt",
				sharePreviewAsUser: "Forhåndsvisning",
				shareHeader1: "Historien er <strong>offentlig tilgjengelig</strong>.",
				shareHeader2: "Historien din er tilgjengelig for medlemmer av organisasjonen din (krever pålogging).",
				shareLinkHeader: "Del historien",
				shareLinkOpen: "ÅPNE",
				learnMore: "Få mer informasjon",
				shareA1: "Bruk %SHAREIMG% på <a href='%LINK1%' target='_blank'>elementsiden for programmet</a>. Hvis du også vil oppheve deling av nettkartet, bruker du <a href='%LINK2%' target='_blank'>elementsiden for nettkartet</a>.",
				shareWarning: "Deling av %WITH% er deaktivert fordi du ikke eier <a href='%LINK%' target='_blank'>webkartet</a>.",
				shareWarningWith1: "offentlig",
				shareWarningWith2: "offentlig og med organisasjonen"
			},
			directCreation: {
				header: "Velkommen til byggeverktøyet for sveiping/forstørrelsesglass",
				mapPickHeader: "Angi en gyldig nettkart-ID for å komme i gang, eller bruk søkeknappen for å bla igjennom nettkart.",
				launchBuilder: "Start byggeverktøyet",
				chooseWebmapLbl: "Velg webkart...",
				explain2: "Du lager et Swipe- eller Spyglass-historiekart ved å trykke på knappen nedenfor for å velge et eksisterende webkart du vil bruke. Alternativt kan du lime inn ID-en til webkartet i feltet nedenfor.",
				explain3: "Hvis du vil bruke to webkart i Story Map ditt, blir du bedt om det andre webkartet senere, når du velger dette alternativet.",
				webmapPlaceholder: "Angi en webkart-ID ..."
			},
			saveErrorSocial: {
				title: "Oppdater deling på sosiale medier",
				panel1: "Historien vises på en bedre måte på sosiale medier, men tittelen på ArcGIS-webapplikasjonselementet er ikke den samme som historietittelen.",
				panel1tooltip: "Når du angir en tittel, et sammendrag og et miniatyrbilde, vil historien se slik ut:",
				panel2:	"Hvilken tittel vil du bruke på sosiale medier:",
				panel2q1: "Historietittel (anbefales)",
				panel2q1tooltip: "Når du velger dette alternativet, endres elementtittelen slik at den er identisk med historietittelen og andre endringer i byggeverktøyet synkroniseres.",
				panel2q2: "Elementtittel",
				panel3: "Hvis du vil forbedre hvordan historien vises på sosiale medier, bruker du ${MYSTORIES} til å legge til et sammendrag og et miniatyrbilde.",
				panel4: "Ikke vis denne advarselen igjen for denne historien",
				mystories: "Mine historier",
				btnSave: "Lagre"
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
