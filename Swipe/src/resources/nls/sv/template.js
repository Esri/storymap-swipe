define({
  "viewer": {
    "loading": {
      "step1": "LÄSER IN BERÄTTELSE",
      "step2": "LÄSER IN DATA",
      "step3": "INITIERAR",
      "fail": "Det gick inte att hämta svep",
      "loadBuilder": "VÄXLAR TILL BYGGLÄGET",
      "redirectSignIn": "OMDIRIGERAR TILL INLOGGNINGSSIDAN",
      "redirectSignIn2": "(du omdirigeras hit efter inloggning)",
      "failButton": "Försök igen"
    },
    "errors": {
      "boxTitle": "Ett fel har inträffat",
      "portalSelf": "Allvarligt fel: det gick inte att hämta portalkonfigurationen",
      "invalidConfig": "Allvarligt fel: ogiltig konfiguration",
      "invalidConfigNoWebmap": "Allvarligt fel: ogiltig konfiguration (webbkarta eller applikations-ID anges inte i index.html)",
      "invalidConfigNoAppDev": "Ingen identifierare för en GIS-applikation för webben eller webbkarta anges i URL-parametrarna (?appid= eller ?webmap=). I utvecklingsläge ignoreras app-ID och webbkartans konfiguration i index.html.",
      "createMap": "Det gick inte att skapa kartan",
      "invalidApp": "Allvarligt fel: berättelsen kunde inte läsas in",
      "initMobile": "Välkommen till Svep-webbapplikationen. Applikationen är inte konfigurerad. Det interaktiva byggverktyget fungerar inte på mobila enheter.",
      "initMobile2": "Svepbyggverktyget stöds inte för den här skärmstorleken. Ändra om möjligt storlek på webbläsaren för att få åtkomst till verktyget, eller bygg din berättelse på en enhet med större skärm.",
      "initMobile3": "Rotera enheten till liggande läge om du vill använda byggverktyget Svep.",
      "noBuilderIE8": "Det interaktiva Svep-byggverktyget fungerar inte med tidigare versioner av Internet Explorer än version 9.",
      "noLayerView": "Välkommen till Svep-webbapplikationen.<br />Applikationen är ännu inte konfigurerad.",
      "appSave": "Det uppstod ett fel när webberättelsen skulle sparas",
      "mapSave": "Det uppstod ett fel när webbkartan skulle sparas",
      "notAuthorized": "Du är inte behörig att öppna den här berättelsen",
      "notAuthorizedBuilder": "Du har inte behörighet att använda byggverktygen Svep och Kikare.",
      "conflictingProjectionsTitle": "Projektionerna är i konflikt",
      "conflictingProjections": "Svep går inte att använda med två webbkartor som har olika projektioner. Öppna inställningarna och använd en webbkarta med samma projektion som den första webbkartan.",
      "cpButton": "Stäng",
      "unspecifiedConfigOwner": "Ingen auktoriserad ägare har konfigurerats.",
      "invalidConfigOwner": "Berättelsens ägare är inte auktoriserad."
    },
    "mobileView": {
      "hideIntro": "DÖLJ INTRODUKTION",
      "navLeft": "Teckenförklaring",
      "navMap": "Karta",
      "navRight": "Data"
    },
    "desktopView": {
      "storymapsText": "En berättelsekarta",
      "builderButton": "Växla till byggläget",
      "facebookTooltip": "Dela på Facebook",
      "twitterTooltip": "Dela på Twitter",
      "bitlyTooltip": "Hämta en kort länk",
      "tooltipAutoplayDisabled": "Funktionen finns inte tillgänglig i autouppspelningsläge",
      "autoplayLabel": "Autouppspelningsläge",
      "autoplayExplain1": "Autouppspelningsläge kommer att köras på din berättelse med ett regelbundet intervall. Detta är idealiskt för informationskiosker och offentliga bildskärmar, men du bör vara medveten om att det i andra situationer kan göra berättelsen svårare att läsa. Funktionen stöds inte på små skärmar.",
      "autoplayExplain2": "När läget är aktivt finns det kontroller för att spela upp/pausa berättelsen och anpassa navigeringshastigheten."
    }
  },
  "builder": {
    "builder": {
      "panelHeader": "BERÄTTELSEKONFIGURATION",
      "buttonSave": "SPARA",
      "buttonHelp": "Hjälp",
      "buttonShare": "Dela",
      "buttonDiscard": "AVBRYT",
      "buttonSettings": "Inställningar",
      "buttonView": "Visningsläge",
      "buttonItem": "Öppna webbapplikationsobjektet",
      "noPendingChange": "Ingen väntande ändring",
      "unSavedChangeSingular": "1 osparad ändring",
      "unSavedChangePlural": "osparade ändringar",
      "popoverDiscard": "Vill du kasta alla osparade ändringar?",
      "yes": "Ja",
      "no": "Nej",
      "popoverOpenViewExplain": "Om du öppnar vyn förlorar du alla osparade ändringar",
      "popoverOpenViewOk": "OK",
      "popoverOpenViewCancel": "Avbryt",
      "popoverSaveWhenDone": "Glöm inte att spara när du är klar",
      "closeWithPendingChange": "Vill du bekräfta åtgärden? Du kommer att förlora dina ändringar.",
      "gotIt": "OK",
      "savingApplication": "Sparar berättelsen",
      "saveSuccess": "Berättelsen har sparats",
      "saveError": "Det gick inte att spara, försök igen",
      "saveError2": "Det gick inte att spara på grund av en ogiltig html-tagg i ett namn eller en beskrivning",
      "saveError3": "Titeln får inte vara tom",
      "signIn": "Logga in med ett konto på",
      "signInTwo": "och spara berättelsen."
    },
    "header": {
      "editMe": "Redigera mig!",
      "templateTitle": "Ange malltitel",
      "templateSubtitle": "Ange underrubrik för mallen"
    },
    "settings": {
      "settingsHeader": "Inställningar för berättelsen",
      "modalCancel": "Avbryt",
      "modalApply": "Använd"
    },
    "settingsColors": {
      "settingsTabColor": "Tema",
      "settingsColorExplain": "Välj ett applikationstema eller definiera egna färger.",
      "settingsLabelColor": "Bakgrundsfärg för rubrik och sidopanel"
    },
    "settingsHeader": {
      "settingsTabLogo": "Rubrik",
      "settingsLogoExplain": "Anpassa rubriklogotypen (maxstorlek är 250 x 50 px).",
      "settingsLogoEsri": "Esris logotyp",
      "settingsLogoNone": "Ingen logotyp",
      "settingsLogoCustom": "Egen logotyp",
      "settingsLogoCustomPlaceholder": "Bild-URL",
      "settingsLogoCustomTargetPlaceholder": "Genomklickningslänkar",
      "settingsLogoSocialExplain": "Anpassa den övre högra rubriklänken.",
      "settingsLogoSocialText": "Text",
      "settingsLogoSocialLink": "Länk",
      "settingsLogoSocialDisabled": "Den här funktionen har inaktiverats av administratören"
    },
    "settingsExtent": {
      "settingsTabExtent": "Utbredning",
      "settingsExtentExplain": "Ange den ursprungliga utbredningen via den interaktiva kartan nedan.",
      "settingsExtentExplainBottom": "Den utbredning du definierar ändrar webbkartans ursprungliga utbredning. Om du kör en svepserie kommer den här utbredningen inte att användas.",
      "settingsExtentDateLineError": "Det går inte att ha en utbredning över 180ï¿½-meridianen",
      "settingsExtentDateLineError2": "Det gick inte att beräkna utbredningen",
      "settingsExtentDrawBtn": "Rita en ny utbredning",
      "settingsExtentModifyBtn": "Redigera aktuell utbredning",
      "settingsExtentApplyBtn": "Använd på huvudkartan",
      "settingsExtentUseMainMap": "Använd huvudkartans utbredning"
    }
  },
  "swipe": {
    "mobileData": {
      "noData": "Inga data att visa!",
      "noDataExplain": "Peka på kartan för att välja ett geoobjekt och återgå hit",
      "noDataMap": "Inga data för den här kartan",
      "noPopup": "Det gick inte att hitta något popupfönster för det här geoobjektet"
    },
    "mobileLegend": {
      "noLegend": "Det finns ingen teckenförklaring att visa."
    },
    "swipeSidePanel": {
      "editTooltip": "Ange sidopanelbeskrivningen",
      "editMe": "Redigera mig!",
      "legendTitle": "Teckenförklaring"
    },
    "infoWindow": {
      "noFeature": "Det finns inga data att visa",
      "noFeatureExplain": "Välj ett geoobjekt genom att peka på kartan"
    },
    "settingsLayout": {
      "settingsTabLayout": "Svepstil",
      "settingsLayoutExplain": "Välj en stil för svepverktyget",
      "settingsLayoutSwipe": "Lodrät stapel",
      "settingsLayoutSpyGlass": "Kikare",
      "settingsLayoutSelected": "Markerad layout",
      "settingsLayoutSelect": "Markera denna layout",
      "settingsSaveConfirm": "En del av ändringarna kräver att du sparar och läser in berättelsen igen"
    },
    "settingsDataModel": {
      "settingsTabDataModel": "Sveptyp",
      "settingsDataModelExplainSwipe": "Vad vill du att användarna ska svepa?",
      "settingsDataModelExplainSwipe2": "",
      "settingsDataModelExplainSpyGlass": "Välj det lager eller den webbkarta som ska visas i kikaren.",
      "settingsDataModelOneMap": "Ett lager i en webbkarta",
      "settingsDataModel1Explain": "Välj det lager som ska svepas.",
      "settingsDataModel1Warning": "Om lagret är dolt av högre lager har det ingen effekt när du sveper.",
      "settingsDataModel1SpyGlassExplain": "Välj det lager som ska visas i kikaren.",
      "settingsDataModelTwoMaps": "Två webbkartor",
      "settingsDataModelLayerIds": "ID för webbkartlager",
      "settingsDataModelSelected": "Vald typ",
      "settingsDataModelWebmapSwipeId1": "ID för den högra kartan",
      "settingsDataModelWebmapSwipeId2": "ID för den vänstra kartan",
      "settingsDataModelWebmapGlassId1": "ID för huvudwebbkartan",
      "settingsDataModelWebmapGlassId2": "ID för kikarwebbkartan",
      "settingsDataModelSelect": "Välj den här typen",
      "settingsDataModel2Explain": "Svep med en annan webbkarta.",
      "settingsDataModel2SpyGlassExplain": "Visa en annan webbkarta.",
      "settingsDataModel2HelpTitle": "Hitta ett webbkart-ID",
      "settingsDataModel2HelpContent": "Kopiera och klistra in siffror efter tecknet '=' i webbkartans webbadress",
      "switchMaps": "Växla kartor",
      "browseWebMaps": "Bläddra bland webbkartor"
    },
    "settingsLegend": {
      "settingsTabLegend": "Applikationslayout",
      "settingsLegendExplain": "Välj layoutinställningarna.",
      "settingsLegendEnable": "Aktivera teckenförklaring",
      "settingsDescriptionEnable": "Aktivera beskrivning",
      "settingsBookmarksEnable": "Aktivera svepserie",
      "settingsPopupDisable": "Aktivera popupfönster",
      "settingsLocationSearchEnable": "Aktivera sökning med lokaliserare",
      "settingsGeolocatorEnable": "Aktivera geolokalisering",
      "settingsLegendHelpContent": "Om du vill förfina innehållsförteckningen använder du innehållsförteckningen i webbkartvyn på ArcGIS (Dölj i teckenförklaringen)",
      "settingsSeriesHelpContent": "En svepserie är ett tabbat navigeringsalternativ som hjälper användaren till en viss utbredning och visar en titel och beskrivande text i sidopanelen. Vid den första aktiveringen importeras webbkartans bokmärken och används för att fylla i seriefältet. Om du inaktiverar alternativet stängs seriefältet, men seriekonfigurationen finns kvar för framtida användning.",
      "settingsSeriesHelpContent2": "Med hjälp av en svepserie kan du skapa och redigera ett urval platser med tillhörande rubriker och text. Om det finns bokmärken i webbkartan visas dessa. Du kan inaktivera serien, men konfigurationen finns ändå kvar och kan användas senare.",
      "settingsSeriesHelpLink": "Här finns ett exempel på en applikation med en svepserie",
      "preview": "Förhandsgranska användargränssnitt",
      "settingsLocateButtonExplain": "Den här funktionen kan användas på de flesta mobila enheter och datorwebbläsare (inklusive Internet Explorer 9+).",
      "settingsLocateButton": "Aktivera knappen Hitta för webbläsare som stöds",
      "settingsAddressSearch": "Aktivera ett adressökverktyg"
    },
    "settingsSwipePopup": {
      "settingsSwipePopup": "Popupfönster",
      "settingsSwipePopupExplain": "Anpassa utseendet på popupfönstrens rubriker för att hjälpa användaren koppla popupfönstren till kartlager.",
      "settingsSwipePopupSwipe1": "Vänster karta",
      "settingsSwipePopupSwipe2": "Höger karta",
      "settingsSwipePopupGlass1": "Huvudkarta",
      "settingsSwipePopupGlass2": "Kikarkarta",
      "settingsSwipePopupTitle": "Rubrikens namn",
      "settingsSwipePopupColor": "Rubrikens färg"
    },
    "initPopup": {
      "initHeader": "Välkommen till byggverktyget för Svep/Kikare",
      "modalNext": "Nästa",
      "modalPrev": "Föregående",
      "modalApply": "Öppna applikationen"
    },
    "seriesPanel": {
      "title": "Titel",
      "descr": "Beskrivning",
      "discard": "Ignorera bokmärke",
      "saveExtent": "Ange utbredning för bokmärke",
      "discardDisabled": "Det går inte att ta bort det här bokmärket. Du kan inaktivera svepserier i inställningarna."
    },
    "helpPopup": {
      "title": "Hjälp",
      "close": "Stäng",
      "tab1": {
        "div1": "Mallen Svep/Kikare är utformad för att jämföra två separata webbkartor eller två lager i en webbkarta i en tilltalande och lättanvänd webbapplikation som kan användas i valfri webbläsare på alla enheter, inklusive smartphones och surfplattor.",
        "div2": "Ytterligare information om mallen Svep/Kikare, inklusive exempel som har skapats av användare, <a href='http://storymaps.arcgis.com/en/app-list/swipe/' target='_blank'> finns på webbplatsen med berättelsekartor</a>. Du kan även följa oss på Twitter på <a href='https://twitter.com/EsriStoryMaps' target='_blank'>@EsriStoryMaps</a>.",
        "div3": "Vi vill gärna att du hör av dig! Om du undrar något, vill föreslå en ny funktion eller vill rapportera ett programfel är du välkommen att besöka <a href='http://links.esri.com/storymaps/forum' target='_blank'>användarforumet på Story Maps</a>."
      }
    },
    "share": {
      "firstSaveTitle": "Berättelsen har sparats",
      "manageStory": "Hantera din berättelse",
      "manageStoryA1": "Tips: Du kan använda %LINK1% för att kontrollera om berättelsen har några fel och ändra hur dess komponenter delas. Mina berättelser hjälper dig också att få berättelsen att se bra ut när den delas på sociala nätverk. Läs om fler praktiska funktioner i Mina berättelser: %LINK2%.",
      "manageStoryA1V1": "Mina berättelser",
      "manageStoryA1V2": "blogginlägg",
      "shareTitle": "Dela din berättelse",
      "sharePrivateHeader": "Din berättelse delas inte. Vill du dela den?",
      "sharePrivateBtn1": "Dela offentligt",
      "sharePrivateBtn2": "Dela med min organisation",
      "sharePrivateProgress": "Delning pågår ...",
      "sharePrivateErr": "Det gick inte att dela. Försök igen eller",
      "sharePrivateOk": "Delningen har uppdaterats, laddar ...",
      "shareStatus1": "Berättelsen har inte sparats",
      "shareStatus2": "Berättelsen delas offentligt",
      "shareStatus3": "Berättelsen delas inom organisationen",
      "shareStatus4": "Berättelsen delas inte",
      "sharePreviewAsUser": "Förhandsgranska",
      "shareHeader1": "Din berättelse är <strong>offentligt tillgänglig</strong>.",
      "shareHeader2": "Berättelsen är tillgänglig för organisationens medlemmar (inloggning krävs).",
      "shareLinkHeader": "Dela din berättelse",
      "shareLinkOpen": "ÖPPNA",
      "learnMore": "Läs mer",
      "shareA1": "Använd %SHAREIMG% på <a href='%LINK1%' target='_blank'>applikationens objektsida</a>. Om du även vill sluta dela webbkartan använder du <a href='%LINK2%' target='_blank'>webbkartans objektsida</a>.",
      "shareWarning": "Delning %WITH% har inaktiverats efter som du inte är ägare till <a href='%LINK%' target='_blank'>webbkartan</a>.",
      "shareWarningWith1": "offentligt",
      "shareWarningWith2": "offentligt och med organisationen"
    },
    "directCreation": {
      "header": "Välkommen till byggverktyget för Svep/Kikare",
      "mapPickHeader": "Du kan börja genom att ange ett giltigt webbkart-ID eller bläddra igenom webbkartorna med sökknappen.",
      "launchBuilder": "Starta byggverktyget",
      "chooseWebmapLbl": "Välj webbkarta ...",
      "explain2": "Om du vill skapa en berättelsekarta för Svep eller Kikare använder du knappen nedan för att välja den befintliga webbkarta du vill använda. Alternativt kan du klistra in webbkartans ID i fältet nedan.",
      "explain3": "Om du vill använda två webbkartor i berättelsekartan uppmanas du ange den andra webbkartan senare när du väljer det alternativet.",
      "webmapPlaceholder": "Ange ett webbkart-ID ..."
    },
    "saveErrorSocial": {
      "title": "Delningsuppdatering för sociala medier",
      "panel1": "Din berättelses presentation på sociala medier har förbättrats, men objekttiteln på ArcGIS-webbapplikationen är inte samma som berättelsens titel.",
      "panel1tooltip": "Om du definierar en titel, sammanfattning och miniatyrbild kommer din berättelse att se ut så här:",
      "panel2": "Vilken titel skulle du vilja använda på sociala medier:",
      "panel2q1": "Titel på berättelsen (rekommenderas)",
      "panel2q1tooltip": "Om du väljer det här alternativet ändras titeln på objektet så att den överensstämmer med titeln på berättelsen. Även övriga ändringar i byggverktyget synkroniseras.",
      "panel2q2": "Titel på objektet",
      "panel3": "Om du vill förbättra presentationen av din berättelse på sociala medier ännu mer använder du ${MYSTORIES} för att lägga till en sammanfattning och en miniatyrbild.",
      "panel4": "Varna mig inte igen för den här berättelsen",
      "mystories": "Mina berättelser",
      "btnSave": "Spara"
    }
  },
  "configure": {
    "mapdlg": {
      "items": {
        "organizationLabel": "Min organisation",
        "onlineLabel": "ArcGIS Online",
        "contentLabel": "Mitt innehåll",
        "favoritesLabel": "Mina favoriter"
      },
      "title": "Välj webbkarta",
      "searchTitle": "Sök",
      "ok": "OK",
      "cancel": "Avbryt",
      "placeholder": "Ange sökterm"
    }
  }
});