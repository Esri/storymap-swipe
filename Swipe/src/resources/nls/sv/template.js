define(
	({
		viewer: {
			loading: {
				step1: "LÄSER IN PROGRAM",
				step2: "LÄSER IN DATA",
				step3: "INITIERAR",
				fail: "Det gick inte att hämta svep",
				loadBuilder: "VÄXLAR TILL BYGGLÄGET",
				failButton: "Försök igen"
			},
			errors: {
				boxTitle: "Ett fel har inträffat",
				portalSelf: "Allvarligt fel: det gick inte att hämta portalkonfigurationen",
				invalidConfig: "Allvarligt fel: ogiltig konfiguration",
				invalidConfigNoWebmap: "Allvarligt fel: ogiltig konfiguration (ingen webbkarta angiven)",
				createMap: "Det gick inte att skapa kartan",
				invalidApp: "Allvarligt fel: programmet kunde inte läsas in",
				initMobile: "Välkommen till Svep-webbapplikationen. Applikationen är inte konfigurerad. Det interaktiva byggverktyget fungerar inte på mobila enheter.",
				noBuilderIE8: "Det interaktiva Svep-byggverktyget fungerar inte med tidigare versioner av Internet Explorer än version 9.",
				noLayerView: "Välkommen till Svep-webbapplikationen.<br />Applikationen är ännu inte konfigurerad.",
				appSave: "Det uppstod ett fel när webbprogrammet skulle sparas",
				mapSave: "Det uppstod ett fel när webbkartan skulle sparas",
				notAuthorized: "Du är inte behörig att konfigurera det här programmet",
				conflictingProjectionsTitle: "Projektionerna är i konflikt",
				conflictingProjections: "Svep-verktyget går inte att använda med två webbkartor som har olika projektioner. Öppna inställningarna och använd en webbkarta med samma projektion som den första webbkartan.",
				cpButton: "Stäng"
			},
			mobileView: {
				hideIntro: "DÖLJ INTRODUKTION",
				navLeft: "Teckenförklaring",
				navMap: "Karta",
				navRight: "Data"
			},
			desktopView: {
				storymapsText: "En berättelsekarta",
				builderButton: "Växla till byggläget",
				bitlyTooltip: "Hämta en kort länk till applikationen"
			}
		},
		builder: {
			builder: {
				panelHeader: "PROGRAMKONFIGURATION",
				buttonSave: "SPARA",
				buttonDiscard: "AVBRYT",
				buttonSettings: "Inställningar",
				buttonView: "Visningsläge",
				buttonItem: "Öppna webbapplikationsobjektet",
				noPendingChange: "Ingen väntande ändring",
				unSavedChangeSingular: "1 osparad ändring",
				unSavedChangePlural: "osparade ändringar",
				popoverDiscard: "Vill du kasta alla osparade ändringar?",
				yes: "Ja",
				no: "Nej",
				popoverOpenViewExplain: "Om du öppnar vyn förlorar du alla osparade ändringar",
				popoverOpenViewOk: "OK",
				popoverOpenViewCancel: "Avbryt",
				popoverSaveWhenDone: "Glöm inte att spara när du är klar",
				closeWithPendingChange: "Vill du bekräfta åtgärden? Du kommer att förlora dina ändringar.",
				gotIt: "OK",
				savingApplication: "Sparar programmet",
				saveSuccess: "Programmet har sparats",
				saveError: "Det gick inte att spara, försök igen",
				signIn: "Logga in med ett konto på",
				signInTwo: "och spara programmet."
			},
			header:{
				editMe: "Redigera mig!",
				templateTitle: "Ange malltitel",
				templateSubtitle: "Ange underrubrik för mallen"
			},
			settings: {
				settingsHeader: "Programinställningar",
				modalCancel: "Avbryt",
				modalApply: "Använd"
			},
			settingsColors: {
				settingsTabColor: "Tema",
				settingsColorExplain: "Välj ett applikationstema eller definiera egna färger.",
				settingsLabelColor: "Bakgrundsfärg för rubrik och sidopanel"
			},
			settingsHeader: {
				settingsTabLogo: "Rubrik",
				settingsLogoExplain: "Anpassa rubriklogotypen (maxstorlek är 250 x 50 px).",
				settingsLogoEsri: "Esris logotyp",
				settingsLogoNone: "Ingen logotyp",
				settingsLogoCustom: "Egen logotyp",
				settingsLogoCustomPlaceholder: "Bild-URL",
				settingsLogoCustomTargetPlaceholder: "Genomklickningslänkar",
				settingsLogoSocialExplain: "Anpassa den övre högra rubriklänken.",
				settingsLogoSocialText: "Text",
				settingsLogoSocialLink: "Länk",
				settingsLogoSocialDisabled: "Den här funktionen har inaktiverats av administratören"
			},
			settingsExtent: {
				settingsTabExtent: "Utbredning",
				settingsExtentExplain: "Ange den ursprungliga utbredningen via den interaktiva kartan nedan.",
				settingsExtentExplainBottom: "Den utbredning du definierar ändrar webbkartans ursprungliga utbredning. Om du kör en svepserie kommer den här utbredningen inte att användas.",
				settingsExtentDateLineError: "Det går inte att ha en utbredning över 180°-meridianen",
				settingsExtentDateLineError2: "Det gick inte att beräkna utbredningen",
				settingsExtentDrawBtn: "Rita en ny utbredning",
				settingsExtentModifyBtn: "Redigera aktuell utbredning",
				settingsExtentApplyBtn: "Använd på huvudkartan",
				settingsExtentUseMainMap: "Använd huvudkartans utbredning"
			}
        },
		swipe: {
			mobileData: {
				noData: "Inga data att visa!",
				noDataExplain: "Peka på kartan för att välja ett geoobjekt och återgå hit",
				noDataMap: "Inga data för den här kartan",
				noPopup: "Det gick inte att hitta något popupfönster för det här geoobjektet"
			},
			mobileLegend: {
				noLegend: "Det finns ingen teckenförklaring att visa."
			},
			swipeSidePanel: {
				editTooltip: "Ange sidopanelbeskrivningen",
				editMe: "Redigera mig!",
				legendTitle: "Teckenförklaring"
			},
			infoWindow: {
				noFeature: "Det finns inga data att visa",
				noFeatureExplain: "Välj ett geoobjekt genom att peka på kartan"
			},
			settingsLayout: {
				settingsTabLayout: "Svepstil",
				settingsLayoutExplain: "Välj en stil för svepverktyget",
				settingsLayoutSwipe: "Lodrät stapel",
				settingsLayoutSpyGlass: "Kikare",
				settingsLayoutSelected: "Markerad layout",
				settingsLayoutSelect: "Markera denna layout",
				settingsSaveConfirm: "En del av ändringarna kräver att du sparar och hämtar applikationen igen"
			},
			settingsDataModel: {
				settingsTabDataModel: "Sveptyp",
				settingsDataModelExplainSwipe: "Vad vill du att användarna ska svepa?",
				settingsDataModelExplainSwipe2: "",
				settingsDataModelExplainSpyGlass: "Välj det lager eller den webbkarta som ska visas i kikaren.",
				settingsDataModelOneMap: "Ett lager i en webbkarta",
				settingsDataModel1Explain: "Välj det lager som ska svepas.",
				settingsDataModel1Warning: "Om lagret är dolt av högre lager har det ingen effekt när du sveper.",
				settingsDataModel1SpyGlassExplain: "Välj det lager som ska visas i kikaren.",
				settingsDataModelTwoMaps: "Två webbkartor",
				settingsDataModelLayerIds: "ID för webbkartlager",
				settingsDataModelSelected: "Vald typ",
				settingsDataModelWebmapSwipeId1: "ID för den högra kartan",
				settingsDataModelWebmapSwipeId2: "ID för den vänstra kartan",
				settingsDataModelWebmapGlassId1: "ID för huvudwebbkartan",
				settingsDataModelWebmapGlassId2: "ID för kikarwebbkartan",
				settingsDataModelSelect: "Välj den här typen",
				settingsDataModel2Explain: "Svep med en annan webbkarta.",
				settingsDataModel2SpyGlassExplain: "Visa en annan webbkarta.",
				settingsDataModel2HelpTitle: "Hitta ett webbkart-ID",
				settingsDataModel2HelpContent: "Kopiera och klistra in siffror efter tecknet '=' i webbkartans webbadress"
			},
			settingsLegend: {
				settingsTabLegend: "Applikationslayout",
				settingsLegendExplain: "Välj inställningar för applikationens layout.",
				settingsLegendEnable: "Aktivera teckenförklaring",
				settingsDescriptionEnable: "Aktivera beskrivning",
				settingsBookmarksEnable: "Aktivera svepserie",
				settingsPopupDisable: "Aktivera popup-fönster",
				settingsLocationSearchEnable: "Aktivera sökning med lokaliserare",
				settingsGeolocatorEnable: "Aktivera geolokalisering",
				settingsLegendHelpContent: "Om du vill förfina innehållsförteckningen använder du innehållsförteckningen i webbkartvyn på ArcGIS.com (Dölj i teckenförklaringen)",
				settingsSeriesHelpContent: "En svepserie är ett tabbat navigeringsalternativ som hjälper användaren till en viss utbredning och visar en titel och beskrivande text i sidopanelen. Vid den första aktiveringen importeras webbkartans bokmärken och används för att fylla i seriefältet. Om du inaktiverar alternativet stängs seriefältet, men seriekonfigurationen finns kvar för framtida användning.", 
				settingsSeriesHelpContent2: "Med hjälp av en svepserie kan du skapa och redigera ett urval platser med tillhörande rubriker och text. Om det finns bokmärken i webbkartan visas dessa. Du kan inaktivera serien, men konfigurationen finns ändå kvar och kan användas senare.",
				settingsSeriesHelpLink: "Här finns ett exempel på en applikation med en svepserie",
				preview: "Förhandsgranska användargränssnitt",
				settingsLocateButtonExplain: "Den här funktionen kan användas på de flesta mobila enheter och datorwebbläsare (inklusive Internet Explorer 9+).",
				settingsLocateButton: "Aktivera knappen Hitta på webbläsare som stöds",
				settingsAddressSearch: "Aktivera ett adressökverktyg"
			},
			settingsSwipePopup: {
				settingsSwipePopup: "Popupfönster",
				settingsSwipePopupExplain: "Anpassa utseendet på popupfönstrens rubriker för att hjälpa användaren koppla popupfönstren till kartlager.",
				settingsSwipePopupSwipe1: "Vänster karta",
				settingsSwipePopupSwipe2: "Höger karta",
				settingsSwipePopupGlass1: "Huvudkarta",
				settingsSwipePopupGlass2: "Kikarkarta",
				settingsSwipePopupTitle: "Rubrikens namn",
				settingsSwipePopupColor: "Rubrikens färg"
			},
			initPopup: {
				initHeader: "Välkommen till Svep-byggverktyget",
				modalNext: "Nästa",
				modalPrev: "Föregående",
				modalApply: "Öppna applikationen"
			},
			seriesPanel: {
				title: "Titel",
				descr: "Beskrivning",
				discard: "Ignorera bokmärke",
				saveExtent: "Ange utbredning för bokmärke",
				discardDisabled: "Det går inte att ta bort det här bokmärket. Du kan inaktivera svepserier i inställningarna."
			}
		}
    })
);