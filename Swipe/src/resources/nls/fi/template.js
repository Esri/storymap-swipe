define({
  "viewer": {
    "loading": {
      "step1": "LADATAAN TARINAA",
      "step2": "LADATAAN AINEISTOA",
      "step3": "KÄYNNISTETÄÄN",
      "fail": "Pyyhkäisyn lataus epäonnistui",
      "loadBuilder": "VAIHDETAAN MUODOSTUSOHJELMAN TILAAN",
      "redirectSignIn": "OHJATAAN SISÄÄNKIRJAUTUMISSIVULLE",
      "redirectSignIn2": "(sinut ohjataan tänne sisäänkirjautumisen jälkeen)",
      "failButton": "Yritä uudelleen"
    },
    "errors": {
      "boxTitle": "Tapahtui virhe",
      "portalSelf": "Vakavavirhe: portaalin määritysten haku epäonnistui",
      "invalidConfig": "Vakava virhe: virheellinen kokoonpano",
      "invalidConfigNoWebmap": "Vakava virhe: virheellinen kokoonpano (web-karttaa tai sovelluksen tunnistetta ei ole määritetty index.html-tiedostoon)",
      "invalidConfigNoAppDev": "URL-osoitteen parametreissa (?appid= tai ?webmap=) ei ole määritetty yhtään Web-karttasovelluksen tunnusta tai Web-karttaa. Kehittäjätilassa index.html-tiedoston appid- ja webmap-määritykset ohitetaan.",
      "createMap": "Karttaa ei voi luoda",
      "invalidApp": "Vakava virhe: tarinaa ei voi ladata",
      "initMobile": "Tervetuloa käyttämään web-pyyhkäisysovellusta. Sovellusta ei ole määritetty. Vuorovaikutteinen luontitoiminto ei ole käytettävissä mobiililaitteissa.",
      "initMobile2": "Pyyhkäisy-luontitoimintoa ei tueta tässä näyttökoossa. Muuta selaimen kokoa mahdollisuuksien mukaan luontitoiminnon käyttöä varten tai luo tarinasi laitteessa, jossa on suurempi näyttö.",
      "initMobile3": "Käytä Pyyhkäisy-luontitoimintoa kääntämällä laitteesi vaakasuuntaan.",
      "noBuilderIE8": "Interaktiivinen pyyhkäisyn luontitoiminto ei tue Internet Explorer 9:ää vanhempia versioita.",
      "noLayerView": "Tervetuloa käyttämään web-pyyhkäisysovellusta.<br />Sovellusta ei ole vielä määritetty.",
      "appSave": "Virhe tallennettaessa Web-tarinaa",
      "mapSave": "Virhe tallennettaessa Web-karttaa",
      "notAuthorized": "Sinulla ei ole tämän tarinan käyttöoikeuksia",
      "notAuthorizedBuilder": "Sinulla ei ole Pyyhkäisy ja suurennuslasi -luontitoiminnon käyttöoikeuksia.",
      "conflictingProjectionsTitle": "Ristiriitaa aiheuttavat projektiot",
      "conflictingProjections": "Pyyhkäisysovellus ei tue projektioiltaan eroavien web-karttojen käyttämistä. Avaa asetukset ja ota käyttöön sellainen web-kartta, joka käyttää samaa projektiota kuin ensimmäinen web-kartta.",
      "cpButton": "Sulje",
      "unspecifiedConfigOwner": "Valtuutettua omistajaa ei ole määritetty.",
      "invalidConfigOwner": "Tarinan omistajalla ei ole valtuuksia."
    },
    "mobileView": {
      "hideIntro": "PIILOTA ESITTELY",
      "navLeft": "Selite",
      "navMap": "Kartta",
      "navRight": "Aineisto"
    },
    "desktopView": {
      "storymapsText": "Tarinakartta",
      "builderButton": "Vaihda muodostusohjelman tilaan",
      "facebookTooltip": "Jaa Facebookissa",
      "twitterTooltip": "Jaa Twitterissä",
      "bitlyTooltip": "Hanki lyhyt linkki",
      "tooltipAutoplayDisabled": "Tämä toiminto ei ole käytettävissä automaattisen toiston tilassa",
      "autoplayLabel": "Automaattisen toiston tila",
      "autoplayExplain1": "Automaattisen toiston tilassa tarina etenee säännöllisin väliajoin. Tämä soveltuu hyvin kioskin näyttöön tai julkiseen näyttöön. Huomaa kuitenkin, että muissa tilanteissa tarinan lukeminen voi olla vaikeampaa. Tätä ominaisuutta ei tueta pienissä näytöissä.",
      "autoplayExplain2": "Kun tämä tila on käytössä, tarinan voi toistaa tai keskeyttää tai sen nopeutta voi säätää ohjausobjekteilla."
    }
  },
  "builder": {
    "builder": {
      "panelHeader": "TARINAN MÄÄRITYS",
      "buttonSave": "TALLENNA",
      "buttonHelp": "Ohje",
      "buttonShare": "Jaa",
      "buttonDiscard": "PERUUTA",
      "buttonSettings": "Asetukset",
      "buttonView": "Näytä tila",
      "buttonItem": "Avaa web-sovelluskohde",
      "noPendingChange": "Ei odottavaa muutosta",
      "unSavedChangeSingular": "1 tallentamaton muutos",
      "unSavedChangePlural": "tallentamattomat muutokset",
      "popoverDiscard": "Haluatko varmasti hylätä kaikki tallentamattomat muutokset?",
      "yes": "Kyllä",
      "no": "Ei",
      "popoverOpenViewExplain": "Kun avaat katseluohjelman, kaikki tallentamattomat muutokset häviävät.",
      "popoverOpenViewOk": "OK",
      "popoverOpenViewCancel": "Peruuta",
      "popoverSaveWhenDone": "Älä unohda tallentaa, kun olet valmis",
      "closeWithPendingChange": "Haluatko varmasti vahvistaa toiminnon? Muutoksesi häviävät.",
      "gotIt": "OK",
      "savingApplication": "Tallennetaan tarinaa",
      "saveSuccess": "Tarina on tallennettu",
      "saveError": "Tallennus epäonnistui, yritä uudelleen",
      "saveError2": "Tallennus epäonnistui nimen tai kuvauksen virheellisen HTML-tunnisteen takia",
      "saveError3": "Otsikko ei voi olla tyhjä",
      "signIn": "Kirjaudu sisään tilillä palvelussa",
      "signInTwo": "tarinan tallentamiseksi."
    },
    "header": {
      "editMe": "Muokkaa minua!",
      "templateTitle": "Määritä mallin nimi",
      "templateSubtitle": "Määritä mallin alaotsikko"
    },
    "settings": {
      "settingsHeader": "Tarinan asetukset",
      "modalCancel": "Peruuta",
      "modalApply": "Käytä"
    },
    "settingsColors": {
      "settingsTabColor": "Teema",
      "settingsColorExplain": "Valitse sovellusteema tai määritä omat värisi.",
      "settingsLabelColor": "Otsikon ja sivupaneelin taustavärit"
    },
    "settingsHeader": {
      "settingsTabLogo": "Ylätunniste",
      "settingsLogoExplain": "Mukauta ylätunnisteen logo (enimmäiskoko on 250 x 50 pikseliä).",
      "settingsLogoEsri": "Esri-logo",
      "settingsLogoNone": "Ei logoa",
      "settingsLogoCustom": "Mukautettu logo",
      "settingsLogoCustomPlaceholder": "Kuvan URL",
      "settingsLogoCustomTargetPlaceholder": "Click-through-linkki",
      "settingsLogoSocialExplain": "Mukauta ylätunnisteen oikean yläkulman linkki.",
      "settingsLogoSocialText": "Teksti",
      "settingsLogoSocialLink": "Linkki",
      "settingsLogoSocialDisabled": "Pääkäyttäjä on poistanut tämän toiminnon käytöstä."
    },
    "settingsExtent": {
      "settingsTabExtent": "Laajuus",
      "settingsExtentExplain": "Määritä alkuperäinen laajuus alla olevan vuorovaikutteisen kartan avulla.",
      "settingsExtentExplainBottom": "Määrittämäsi laajuus muokkaa web-kartan alkuperäistä laajuutta. Huomaa, että jos teet pyyhkäisysarjan, määritettyä laajuutta ei käytetä.",
      "settingsExtentDateLineError": "Laajuus ei saa ylittää 180ï¿½ pituusasteen meridiaania",
      "settingsExtentDateLineError2": "Virhe laajuuden laskennassa",
      "settingsExtentDrawBtn": "Piirrä uusi laajuus",
      "settingsExtentModifyBtn": "Muokkaa nykyistä laajuutta",
      "settingsExtentApplyBtn": "Käytä pääkartalla",
      "settingsExtentUseMainMap": "Käytä pääkartan laajuutta"
    }
  },
  "swipe": {
    "mobileData": {
      "noData": "Näytettäviä aineistoja ei ole.",
      "noDataExplain": "Valitse kohde ja palaa tähän napauttamalla karttaa.",
      "noDataMap": "Tälle kartalle ei ole aineistoja.",
      "noPopup": "Tälle kohteelle ei ole ponnahdusikkunaa."
    },
    "mobileLegend": {
      "noLegend": "Näytettävää selitettä ei ole."
    },
    "swipeSidePanel": {
      "editTooltip": "Aseta sivupaneelin kuvaus",
      "editMe": "Muokkaa minua!",
      "legendTitle": "Selite"
    },
    "infoWindow": {
      "noFeature": "Näytettäviä aineistoja ei ole.",
      "noFeatureExplain": "Valitse kohde napauttamalla karttaa."
    },
    "settingsLayout": {
      "settingsTabLayout": "Pyyhkäisytyyli",
      "settingsLayoutExplain": "Valitse pyyhkäisytyökalun tyyli.",
      "settingsLayoutSwipe": "Pystypalkki",
      "settingsLayoutSpyGlass": "Kiikari",
      "settingsLayoutSelected": "Valittu asettelu",
      "settingsLayoutSelect": "Valitse tämä asettelu",
      "settingsSaveConfirm": "Jotkin muutokset edellyttävät tarinan tallennusta ja uudelleenkäynnistystä"
    },
    "settingsDataModel": {
      "settingsTabDataModel": "Pyyhkäisytyyppi",
      "settingsDataModelExplainSwipe": "Mitä haluat käyttäjien pyyhkäisevän?",
      "settingsDataModelExplainSwipe2": "",
      "settingsDataModelExplainSpyGlass": "Valitse karttataso tai web-kartta, joka tulee näkyviin kiikarissa.",
      "settingsDataModelOneMap": "Web-kartassa oleva karttataso",
      "settingsDataModel1Explain": "Valitse karttataso, jota haluat pyyhkäistävän",
      "settingsDataModel1Warning": "Jos karttataso on piirtojärjestyksessä ylempänä olevien karttatasojen peitossa, pyyhkäisyt eivät vaikuta mitenkään.",
      "settingsDataModel1SpyGlassExplain": "Valitse karttataso, joka näkyy kiikarissa.",
      "settingsDataModelTwoMaps": "Kaksi web-karttaa",
      "settingsDataModelLayerIds": "Web-karttatason tunnus",
      "settingsDataModelSelected": "Valittu tyyppi",
      "settingsDataModelWebmapSwipeId1": "Oikean web-kartan tunnus",
      "settingsDataModelWebmapSwipeId2": "Vasemman web-kartan tunnus",
      "settingsDataModelWebmapGlassId1": "Pää-web-kartan tunnus",
      "settingsDataModelWebmapGlassId2": "Kiikari-web-kartan tunnus",
      "settingsDataModelSelect": "Valitse tämä tyyppi",
      "settingsDataModel2Explain": "Pyyhkäise toisella web-kartalla.",
      "settingsDataModel2SpyGlassExplain": "Näytä toinen web-kartta.",
      "settingsDataModel2HelpTitle": "Miten löydän web-kartan tunnuksen?",
      "settingsDataModel2HelpContent": "Kopioi ja liitä web-kartan URL-osoitteessa olevan '='-merkin jälkeiset luvut.",
      "switchMaps": "Vaihda karttaa",
      "browseWebMaps": "Selaa web-karttoja"
    },
    "settingsLegend": {
      "settingsTabLegend": "Sovelluksen asettelu",
      "settingsLegendExplain": "Valitse asetteluasetukset.",
      "settingsLegendEnable": "Ota selite käyttöön",
      "settingsDescriptionEnable": "Ota kuvaus käyttöön",
      "settingsBookmarksEnable": "Ota sarjapyyhkäisy käyttöön",
      "settingsPopupDisable": "Ota ponnahdusikkunat käyttöön",
      "settingsLocationSearchEnable": "Ota käyttöön paikanninhaku",
      "settingsGeolocatorEnable": "Ota käyttöön paikannin",
      "settingsLegendHelpContent": "Jos haluat tarkentaa selitteen sisältöä, käytä ArcGISin Web-kartan katseluohjelman sisällysluetteloa (Piilota selitteessä)",
      "settingsSeriesHelpContent": "Pyyhintäsarja on välilehdellinen navigointivalinta, joka ohjaa katselijan tiettyyn laajuuteen ja näyttää otsikon ja kuvaavan tekstin sivupaneelissa. Kun otat asetuksen käyttöön ensimmäisen kerran, web-kartan(/-karttojen) kirjanmerkit tuodaan ja niillä täytetään valmiiksi sarjapalkki. Jos poistat sarjan asetuksen käytöstä, sarjapalkki poistuu käytöstä, mutta sarjan määritykset tallennetaan tulevaa käyttöä varten.",
      "settingsSeriesHelpContent2": "Pyyhkäisysarjan avulla voit luoda ja muokata sijaintivalikoimaa ja sijainteihin liittyviä otsikoita ja tekstejä. Jos web-kartassa on kirjanmerkkejä, ne tulevat näkyviin. Voit tuoda näkyviin sarjan, mutta kokoonpano säilytetään tulevaa käyttöä varten.",
      "settingsSeriesHelpLink": "Tarkastele tässä esimerkkiä sovelluksesta, jossa on pyyhkäisysarja",
      "preview": "Käyttöliittymän esikatselu",
      "settingsLocateButtonExplain": "Kyseinen toiminto on tuettu useimmissa mobiililaitteissa ja tietokoneiden selaimissa (mm. Internet Explorer 9 ja uudemmat versiot).",
      "settingsLocateButton": "Ota Paikanna-painike käyttöön tuetuissa selaimissa",
      "settingsAddressSearch": "Ota osoitehakutyökalu käyttöön"
    },
    "settingsSwipePopup": {
      "settingsSwipePopup": "Ponnahdusikkuna",
      "settingsSwipePopupExplain": "Voit mukauttaa ponnahdusikkunoiden otsikkojen ulkoasua, jotta käyttäjät voivat yhdistää ponnahdusikkunat helposti karttatasoihin.",
      "settingsSwipePopupSwipe1": "Vasen kartta",
      "settingsSwipePopupSwipe2": "Oikea kartta",
      "settingsSwipePopupGlass1": "Pääkartta",
      "settingsSwipePopupGlass2": "Kiikarikartta",
      "settingsSwipePopupTitle": "Otsikon nimi",
      "settingsSwipePopupColor": "Otsikon väri"
    },
    "initPopup": {
      "initHeader": "Tervetuloa käyttämään pyyhkäisyn/kiikarin luontitoimintoa",
      "modalNext": "Seuraava",
      "modalPrev": "Edellinen",
      "modalApply": "Avaa sovellus"
    },
    "seriesPanel": {
      "title": "Otsikko",
      "descr": "Kuvaus",
      "discard": "Hylkää kirjanmerkki",
      "saveExtent": "Aseta kirjanmerkin laajuus",
      "discardDisabled": "Tätä kirjanmerkkiä ei voi poistaa. Sarjapyyhkäisyn voi poistaa käytöstä asetuksissa."
    },
    "helpPopup": {
      "title": "Ohje",
      "close": "Sulje",
      "tab1": {
        "div1": "Pyyhkäisy-/kiikarimallipohjan avulla voi vertailla kahta eri web-karttaa tai yhden web-kartan kahta karttatasoa kiinnostavassa ja helppokäyttöisessä web-sovelluksessa, jota voi käyttää minkä tahansa laitteen, kuten älypuhelimen tai tabletin, selaimella.",
        "div2": "Lisätietoja pyyhkäisy-/kiikarimallipohjasta ja muiden käyttäjien luomia esimerkkejä on saatavilla <a href='http://storymaps.arcgis.com/en/app-list/swipe/' target='_blank'>Story Maps -sivustossa</a>. Voit myös seurata meitä Twitterissä: <a href='https://twitter.com/EsriStoryMaps' target='_blank'>@EsriStoryMaps</a>.",
        "div3": "Haluamme kuulla sinusta! Jos sinulla on kysymyksiä, ehdottaa uutta toimintoa tai luulet löytäneesi virheen, vieraile <a href='http://links.esri.com/storymaps/forum' target='_blank'>Story Maps -käyttäjäfoorumissa</a>."
      }
    },
    "share": {
      "firstSaveTitle": "Tarina on tallennettu",
      "manageStory": "Tarinan hallinta",
      "manageStoryA1": "Vihje: Voit käyttää linkkiä %LINK1% tarinan virheiden tarkistamiseen ja sen komponenttien jakamistavan muuttamiseen. Omat tarinat palvelun avulla voit myös parantaa tarinasi ulkoasua, kun se jaetaan sosiaalisiin verkostoihin. Voit tutustua muihin hyödyllisiin Omat tarinat -palvelun kohteisiin linkin %LINK2% kautta.",
      "manageStoryA1V1": "Omat tarinat",
      "manageStoryA1V2": "blogimerkinnät",
      "shareTitle": "Jaa tarinasi",
      "sharePrivateHeader": "Tarinaasi ei ole jaettu. Haluatko jakaa sen?",
      "sharePrivateBtn1": "Jaa julkisesti",
      "sharePrivateBtn2": "Jaa oman organisaation kanssa",
      "sharePrivateProgress": "Jakaminen käynnissä...",
      "sharePrivateErr": "Jakaminen epäonnistui. Yritä uudelleen tai",
      "sharePrivateOk": "Jakaminen on päivitetty, ladataan...",
      "shareStatus1": "Tarinaa ei ole tallennettu",
      "shareStatus2": "Tarina on jaettu julkisesti",
      "shareStatus3": "Tarina on jaettu organisaatiossa",
      "shareStatus4": "Tarinaa ei ole jaettu",
      "sharePreviewAsUser": "Esikatselu",
      "shareHeader1": "Tarinasi <strong>julkisesti käytettävissä</strong>.",
      "shareHeader2": "Organisaatiosi jäsenet voivat käyttää tarinaasi (sisäänkirjauduttuaan).",
      "shareLinkHeader": "Jaa tarinasi",
      "shareLinkOpen": "AVAA",
      "learnMore": "Lisätietoja",
      "shareA1": "Käytä kohdetta %SHAREIMG% <a href='%LINK1%' target='_blank'>sovelluskohteen sivulla</a>. Jos haluat myös lopettaa web-kartan jaon, käytä <a href='%LINK2%' target='_blank'>web-kartan kohdesivua</a>.",
      "shareWarning": "Jakaminen kohteen %WITH% kanssa on poistettu käytöstä, koska et ole <a href='%LINK%' target='_blank'>Web-kartan</a> omistaja.",
      "shareWarningWith1": "julkisesti",
      "shareWarningWith2": "julkisesti ja organisaation kanssa"
    },
    "directCreation": {
      "header": "Tervetuloa käyttämään pyyhkäisyn/kiikarin luontitoimintoa",
      "mapPickHeader": "Aloita antamalla kelvollinen web-kartan tunnus, tai selaa web-karttoja painamalla Etsi-painiketta.",
      "launchBuilder": "Käynnistä luontitoiminto",
      "chooseWebmapLbl": "Valitse Web-kartta...",
      "explain2": "Voit luoda pyyhkäisy- tai kiikaritarinakartan valitsemalla olemassa olevan Web-kartan, jota haluat käyttää, alla olevan painikkeen avulla. Voit vaihtoehtoisesti liittää Web-kartan tunnuksen alla olevaan kenttään.",
      "explain3": "Jos haluat käyttää kahta Web-karttaa tarinakartassasi, ohjelma kysyy toista Web-karttaa myöhemmin, kun valitset kyseisen vaihtoehdon.",
      "webmapPlaceholder": "Kirjoita Web-kartan tunnus..."
    },
    "saveErrorSocial": {
      "title": "Sosiaalisen median jakamispäivitys",
      "panel1": "Tarinasi ulkoasua sosiaalisessa mediassa on parannettu, mutta ArcGIS-Web-sovelluskohteen otsikko ei ole sama kuin tarinan otsikko.",
      "panel1tooltip": "Jos määrität otsikon, yhteenvedon ja pikkukuvan, tarinasi näyttää tältä:",
      "panel2": "Mitä otsikkoa haluat käyttää sosiaalisessa mediassa:",
      "panel2q1": "Tarinan otsikko (suositus)",
      "panel2q1tooltip": "Valitsemalla tämän vaihtoehdon kohteen otsikkoa muutetaan siten, että se vastaa tarinan otsikkoa ja luontitoiminnon uudet muutokset synkronoidaan.",
      "panel2q2": "Kohteen otsikko",
      "panel3": "Jos haluat edelleen parantaa tarinan ulkoasua sosiaalisessa mediassa, lisää yhteenveto ja pikkukuva käyttämällä toimintoa ${MYSTORIES}.",
      "panel4": "Älä varoita minua enää uudelleen tästä tarinasta",
      "mystories": "Omat tarinat",
      "btnSave": "Tallenna"
    }
  },
  "configure": {
    "mapdlg": {
      "items": {
        "organizationLabel": "Organisaationi",
        "onlineLabel": "ArcGIS Online",
        "contentLabel": "Oma sisältö",
        "favoritesLabel": "Omat suosikit"
      },
      "title": "Valitse Web-kartta",
      "searchTitle": "Etsi",
      "ok": "OK",
      "cancel": "Peruuta",
      "placeholder": "Anna hakuehto"
    }
  }
});