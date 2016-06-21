define({
  "viewer": {
    "loading": {
      "step1": "UČITAVANJE PRIČE",
      "step2": "UČITAVANJE PODATAKA",
      "step3": "POKRETANJE",
      "fail": "Nažalost, učitavanje klizača nije uspjelo",
      "loadBuilder": "PREBACIVANJE NA NAČIN RADA SASTAVLJAČA",
      "redirectSignIn": "PREUSMJERAVANJE NA STRANICU ZA PRIJAVU",
      "redirectSignIn2": "(bit ćete preusmjereni ovamo nakon prijave)",
      "failButton": "Pokušaj ponovno"
    },
    "errors": {
      "boxTitle": "Došlo je do pogreške",
      "portalSelf": "Kobna pogreška: nije uspjelo učitavanje konfiguracije portala",
      "invalidConfig": "Kobna pogreška: neispravna konfiguracija",
      "invalidConfigNoWebmap": "Kobna pogreška: neispravna konfiguracija (identifikator web-karte ili aplikacije nije određen u index.html)",
      "invalidConfigNoAppDev": "Identifikator aplikacije za Web-kartiranje niti web-karta nisu određeni u parametrima URL-a (?appid= ili ?webmap=). U razvojnom načinu ignoriraju se konfiguracije za appid i web-kartu u index.html.",
      "createMap": "Nije moguće stvoriti kartu",
      "invalidApp": "Kobna pogreška: priča se ne može učitati",
      "initMobile": "Dobro došli u web-aplikaciju klizača. Aplikacija nije konfigurirana. Interaktivni sastavljač nije podržan na mobilnim uređajima.",
      "initMobile2": "Sastavljač klizača nije podržan u ovoj veličini prikaza. Ako je moguće, promijenite veličinu preglednika da biste pristupili sastavljaču ili izradite priču na uređaju s većim zaslonom.",
      "initMobile3": "Zakrenite uređaj u vodoravnu orijentaciju kako biste upotrijebili sastavljač klizača.",
      "noBuilderIE8": "Interaktivni sastavljač klizača nije podržan na ranijoj verziji preglednika Internet Explorer prije verzije 9.",
      "noLayerView": "Dobro došli u web-aplikaciju klizača.<br />Aplikacija još nije konfigurirana.",
      "appSave": "Pogreška pri spremanju web-priče",
      "mapSave": "Pogreška pri spremanju web-karte",
      "notAuthorized": "Niste ovlašteni za pristup ovoj priči",
      "notAuthorizedBuilder": "Niste ovlašteni za upotrebu sastavljača za klizač i povećalo.",
      "conflictingProjectionsTitle": "Nepodudarajuće projekcije",
      "conflictingProjections": "Klizač ne podržava upotrebu dvije web-karte s različitim projekcijama. Otvorite postavke i upotrijebite web-kartu koja upotrebljava istu projekciju kao i prva karta.",
      "cpButton": "Story Map",
      "unspecifiedConfigOwner": "Preuzmite kratku poveznicu",
      "invalidConfigOwner": "Ovo nije dostupno u načinu automatske reprodukcije"
    },
    "mobileView": {
      "hideIntro": "Način automatske reprodukcije",
      "navLeft": "Način automatske reprodukcije napredovat će kroz vašu priču u redovitim intervalima. To je idealno za kiosk ili javno prikazani zaslon, no budite svjesni da će se u drugim situacijama priča možda teže čitati. Ova značajka nije podržana na malim zaslonima.",
      "navMap": "nespremljenih promjena",
      "navRight": "Otvaranjem preglednika, izgubit ćete sve nespremljene promjene"
    },
    "desktopView": {
      "storymapsText": "Otvaranjem preglednika, izgubit ćete sve nespremljene promjene",
      "builderButton": "Prilagodite poveznicu u zaglavlju gore desno.",
      "facebookTooltip": "Obuhvat",
      "twitterTooltip": "Postavite početni obuhvat putem interaktivne karte u nastavku.",
      "bitlyTooltip": "Preuzmite kratku poveznicu",
      "tooltipAutoplayDisabled": "Ovo nije dostupno u načinu automatske reprodukcije",
      "autoplayLabel": "Način automatske reprodukcije",
      "autoplayExplain1": "Način automatske reprodukcije napredovat će kroz vašu priču u redovitim intervalima. To je idealno za kiosk ili javno prikazani zaslon, no budite svjesni da će se u drugim situacijama priča možda teže čitati. Ova značajka nije podržana na malim zaslonima.",
      "autoplayExplain2": "Uredite trenutačni obuhvat"
    }
  },
  "builder": {
    "builder": {
      "panelHeader": "Upotrijebi obuhvat glavne karte",
      "buttonSave": "Stil klizača",
      "buttonHelp": "Izaberite stil za alat klizača.",
      "buttonShare": "Odabrani izgled",
      "buttonDiscard": "Odaberi ovaj izgled",
      "buttonSettings": "Vrsta klizača",
      "buttonView": "Za što želite da korisnici upotrijebe klizač?",
      "buttonItem": "Odaberite sloj za koji želite da se može prikazati klizačem",
      "noPendingChange": "Ako je sloj skriven gornjim slojevima, klizač neće imati nikakvog učinka.",
      "unSavedChangeSingular": "Odaberite sloj koji će se pojaviti unutar povećala.",
      "unSavedChangePlural": "nespremljenih promjena",
      "popoverDiscard": "Izgled Appa",
      "yes": "Odaberite postavke izgleda.",
      "no": "Omogući serije klizača",
      "popoverOpenViewExplain": "Otvaranjem preglednika, izgubit ćete sve nespremljene promjene",
      "popoverOpenViewOk": "Serija s klizačem omogućuje vam da stvorite i uredite niz lokacija s popratnim naslovima i tekstom. Ako vaša web-karta ima knjižne oznake, one će se prikazati. Možete onemogućiti seriju, no konfiguracija će se sačuvati za buduću upotrebu.",
      "popoverOpenViewCancel": "Ovdje pogledajte primjer primjene sa serijom klizača",
      "popoverSaveWhenDone": "Dobro došli u sastavljač klizača/povećala",
      "closeWithPendingChange": "Otvori app",
      "gotIt": "Odbaci knjižnu oznaku",
      "savingApplication": "Postavi obuhvat knjižne oznake",
      "saveSuccess": "Ne možete ukloniti tu knjižnu oznaku. Serija s klizačem može se onemogućiti u postavkama.",
      "saveError": "Predložak klizača/povećala osmišljen je za usporedbu dvije zasebne web-karte ili dva sloja jedne web-karte u atraktivnoj web-aplikaciji jednostavnoj za upotrebu koja se može upotrijebiti u bilo kojem pregledniku na bilo kojem uređaju, uključujući pametne telefone i tablete.",
      "saveError2": "Spremanje nije uspjelo zbog neispravne html oznake u nazivu ili opisu",
      "saveError3": "Naslov ne smije biti prazan",
      "signIn": "Savjet: možete upotrijebiti %LINK1% kako biste provjerili ima li vaša priča pogreške i kako biste promijenili način na koji se dijele komponente priče. Značajka moje priče pomaže vam i u tome da vaša priča izgleda dobro kad se podijeli na društvenim mrežama. Možete saznati o drugim korisnim značajkama mojih priča ovdje %LINK2%.",
      "signInTwo": "Podijeli s mojom organizacijom"
    },
    "header": {
      "editMe": "Dijeljenje je ažurirano, učitavanje...",
      "templateTitle": "Dobro došli u sastavljač klizač/povećalo",
      "templateSubtitle": "Pokreni sastavljač"
    },
    "settings": {
      "settingsHeader": "Da biste stvorili kartu s pričom s klizačem ili povećalom, upotrijebite gumb u nastavku da biste izabrali postojeću web-kartu koju želite upotrijebiti. Možete i zalijepiti ID web-karte u polje u nastavku.",
      "modalCancel": "Poboljšana je prisutnost vaše priče na društvenim medijima, ali naziv stavke u web-aplikaciji ArcGIS nije jednak nazivu vaše priče.",
      "modalApply": "Kada odredite naziv, sažetak i sličicu, vaša će priča izgledati ovako:"
    },
    "settingsColors": {
      "settingsTabColor": "Ako odaberete ovu mogućnost, naziv vaše stavke izmijenit će se da bi se podudarao s naslovom vaše priče, dodatne promjene ažurirat će se u sastavljaču.",
      "settingsColorExplain": "Izgled priče s većom količinom teksta koji je odličan za kombiniranje fotografija, videozapisa i karata u jasno izrečenu poruku.",
      "settingsLabelColor": "Izgled koji stavlja naglasak na vašu kartografiju dok istovremeno omogućuje prozirnu ploču s kratkim tekstom koja pomaže ispričati priču."
    },
    "settingsHeader": {
      "settingsTabLogo": "Opcije izgleda",
      "settingsLogoExplain": "Prilagodite logotip u zaglavlju (maksimalno 250 x 50 px).",
      "settingsLogoEsri": "Onemogućeno je dodavanje odjeljka jer je dosegnut broj dopuštenih odjeljaka.",
      "settingsLogoNone": "Upotrijebite ove kontrole kako biste stvorili poveznice koje će promijeniti glavni prozor. Primjerice, kada čitatelj klikne na poveznicu, možda ćete htjeti povećati kartu na određenu lokaciju, prikazati drugu web-kartu ili prikazati sliku.",
      "settingsLogoCustom": "Posjetite web-mjesto Esri Story Maps.",
      "settingsLogoCustomPlaceholder": "Dodavanje odjeljaka omogućuje vam da uistinu prilagodite svoje iskustvo pričanja priče. Kako se čitatelji pomiču kroz vaš tekst %LAYOUT_TITLE%, karta na glavnom prozoru može se kretati i uvećavati na ključne točke te se automatski prebacivati između novih karata i slika kako bi se dala podrška vašoj poruci.",
      "settingsLogoCustomTargetPlaceholder": "U postavkama možete promijeniti izgled predloška %TPL_NAME%. Promijenite izgled, izaberite drugačiju paletu boja, promijenite font teksta itd.",
      "settingsLogoSocialExplain": "Prilagodite poveznicu u zaglavlju gore desno.",
      "settingsLogoSocialText": "Tekst",
      "settingsLogoSocialLink": "Pokreće se Map Journal",
      "settingsLogoSocialDisabled": "Identifikator aplikacije za web-kartiranje nije određen u index.html."
    },
    "settingsExtent": {
      "settingsTabExtent": "Obuhvat",
      "settingsExtentExplain": "Postavite početni obuhvat putem interaktivne karte u nastavku.",
      "settingsExtentExplainBottom": "Obuhvat koji definirate izmijenit će početni obuhvat vaše web-karte. Imajte na umu da ako radite seriju s klizačem, taj se obuhvat neće upotrijebiti.",
      "settingsExtentDateLineError": "Obuhvat se ne može protezati preko meridijana 180ï¿½ geografske dužine",
      "settingsExtentDateLineError2": "Pogreška pri izračunavanju obuhvata",
      "settingsExtentDrawBtn": "Nacrtajte novi obuhvat",
      "settingsExtentModifyBtn": "Uredite trenutačni obuhvat",
      "settingsExtentApplyBtn": "Prikažite karte i ostali sadržaj s pomoću proširivih kontrola koje sadrže opisni tekst.",
      "settingsExtentUseMainMap": "Upotrijebi obuhvat glavne karte"
    }
  },
  "swipe": {
    "mobileData": {
      "noData": "Opcije izgleda",
      "noDataExplain": "Dodirnite kartu da biste odabrali geoobjekt pa se vratite",
      "noDataMap": "Onemogućeno je dodavanje jer je dosegnut maksimalan broj dopuštenih oznaka %LBL_LAYOUT%.",
      "noPopup": "Naziv"
    },
    "mobileLegend": {
      "noLegend": "Potvrdite brisanje %NB% %LBL_LAYOUT%"
    },
    "swipeSidePanel": {
      "editTooltip": "Posjetite web-mjesto Esri Story Maps.",
      "editMe": "Da biste izradili %TPL_NAME%, upotrijebite gumb Dodaj za dodavanje karata ili drugog sadržaja na prikaz izgleda. Drugi sadržaj može uključivati slike, videozapise ili ugrađene web-stranice ili kodove. Na primjer, možda želite da čitatelji vide uvodnu sliku ili videozapis kada pokrenu %TPL_NAME% prije nego što nastave istraživati vaše karte.",
      "legendTitle": "Kada kliknete na gumb Dodaj, pojavit će se dijaloški okvir u kojem možete odabrati i konfigurirati kartu ili drugi sadržaj koji želite dodati. Na primjer, možete odrediti lokaciju koju želite da se prikaže na karti, omogućiti njezinu legendu itd."
    },
    "infoWindow": {
      "noFeature": "U postavkama možete promijeniti izgled predloška %TPL_NAME%. Promijenite izgled, paletu boja, odaberite gdje želite da se prikaže legenda karte itd.",
      "noFeatureExplain": "U dijaloškom okviru Organiziraj možete upravljati svojim predloškom %TPL_NAME%. Tu možete promijeniti redoslijed serija opcijom povlačenja i ispuštanja."
    },
    "settingsLayout": {
      "settingsTabLayout": "Stil klizača",
      "settingsLayoutExplain": "Izaberite stil za alat klizača.",
      "settingsLayoutSwipe": "Prema zadanim postavkama lokacije karata su sinkronizirane. Ako isključite sinkronizaciju, na svakoj će se karti moći prikazati druga lokacija.",
      "settingsLayoutSpyGlass": "Identifikator aplikacije za web-kartiranje nije određen u index.html.",
      "settingsLayoutSelected": "Odabrani izgled",
      "settingsLayoutSelect": "Odaberi ovaj izgled",
      "settingsSaveConfirm": "Način automatske reprodukcije"
    },
    "settingsDataModel": {
      "settingsTabDataModel": "Vrsta klizača",
      "settingsDataModelExplainSwipe": "Za što želite da korisnici upotrijebe klizač?",
      "settingsDataModelExplainSwipe2": "",
      "settingsDataModelExplainSpyGlass": "Jeste li sigurni da želite ponovo postaviti varijablu?",
      "settingsDataModelOneMap": "Nažalost, stvaranje ili uređivanje karte nije podržano u pregledniku Firefox zbog tehničkog ograničenja. Možete izraditi svoju priču s pomoću drugog web-preglednika ili upotrijebiti sljedeće zaobilazno rješenje.",
      "settingsDataModel1Explain": "Odaberite sloj za koji želite da se može prikazati klizačem",
      "settingsDataModel1Warning": "Ako je sloj skriven gornjim slojevima, klizač neće imati nikakvog učinka.",
      "settingsDataModel1SpyGlassExplain": "Odaberite sloj koji će se pojaviti unutar povećala.",
      "settingsDataModelTwoMaps": "Dvije web-karte",
      "settingsDataModelLayerIds": "ID-ovi sloja web-karte",
      "settingsDataModelSelected": "Odabrana vrsta",
      "settingsDataModelWebmapSwipeId1": "ID desne web-karte",
      "settingsDataModelWebmapSwipeId2": "ID lijeve web-karte",
      "settingsDataModelWebmapGlassId1": "ID glavne web-karte",
      "settingsDataModelWebmapGlassId2": "ID web-karte u povećalu",
      "settingsDataModelSelect": "Odaberi ovu vrstu",
      "settingsDataModel2Explain": "Upotrijebite klizač na drugoj web-karti.",
      "settingsDataModel2SpyGlassExplain": "Otkrijte novu web-kartu.",
      "settingsDataModel2HelpTitle": "Kako mogu pronaći ID web-karte?",
      "settingsDataModel2HelpContent": "Kopirajte i zalijepite znamenke nakon znaka '=' u URL web-karte",
      "switchMaps": "Zamijeni karte",
      "browseWebMaps": "Pregledaj web-karte"
    },
    "settingsLegend": {
      "settingsTabLegend": "Izgled Appa",
      "settingsLegendExplain": "Odaberite postavke izgleda.",
      "settingsLegendEnable": "Omogući legendu",
      "settingsDescriptionEnable": "Omogući opis",
      "settingsBookmarksEnable": "Omogući serije klizača",
      "settingsPopupDisable": "Omogući skočni prozor",
      "settingsLocationSearchEnable": "Omogući traženje lokatorom",
      "settingsGeolocatorEnable": "Omogući geolokator",
      "settingsLegendHelpContent": "Da biste pročistili sadržaj legende, upotrijebite tablicu sadržaj preglednika web-karte programa ArcGIS (Sakrij u legendi)",
      "settingsSeriesHelpContent": "Serija s klizačem jest opcija navigacije putem prikaza u karticama koja vodi gledatelja do određenog obuhvata i prikazuje naslov i opis u bočnoj ploči. Tijekom početne aktivacije uvest će se knjižne oznake s web-karte/a i upotrijebiti kako bi se napunila traka serije. Onemogućavanje opcije serije isključuje traku serije, no konfiguracija serije čuva se za buduću upotrebu.",
      "settingsSeriesHelpContent2": "Serija s klizačem omogućuje vam da stvorite i uredite niz lokacija s popratnim naslovima i tekstom. Ako vaša web-karta ima knjižne oznake, one će se prikazati. Možete onemogućiti seriju, no konfiguracija će se sačuvati za buduću upotrebu.",
      "settingsSeriesHelpLink": "Ovdje pogledajte primjer primjene sa serijom klizača",
      "preview": "Pretpregled korisničkog sučelja",
      "settingsLocateButtonExplain": "Ova je funkcionalnost podržana na većini preglednika mobilnih uređaja i radnih površina (uključujući Internet Explorer 9+).",
      "settingsLocateButton": "Omogući gumb „Lociraj” na podržanim preglednicima",
      "settingsAddressSearch": "Omogući alat za pretraživanje adresa"
    },
    "settingsSwipePopup": {
      "settingsSwipePopup": "Skočni prozor",
      "settingsSwipePopupExplain": "Prilagodite izgled zaglavlja skočnih prozora kako bi korisnici povezivali skočne prozore sa slojevima karte.",
      "settingsSwipePopupSwipe1": "Lijeva karta",
      "settingsSwipePopupSwipe2": "Desna karta",
      "settingsSwipePopupGlass1": "Glavna karta",
      "settingsSwipePopupGlass2": "Karta povećala",
      "settingsSwipePopupTitle": "Naslov zaglavlja",
      "settingsSwipePopupColor": "Boja zaglavlja"
    },
    "initPopup": {
      "initHeader": "Dobro došli u sastavljač klizača/povećala",
      "modalNext": "Sljedeće",
      "modalPrev": "Prethodno",
      "modalApply": "Otvori app"
    },
    "seriesPanel": {
      "title": "Naziv",
      "descr": "Opis",
      "discard": "Odbaci knjižnu oznaku",
      "saveExtent": "Postavi obuhvat knjižne oznake",
      "discardDisabled": "Ne možete ukloniti tu knjižnu oznaku. Serija s klizačem može se onemogućiti u postavkama."
    },
    "helpPopup": {
      "title": "Pomoć",
      "close": "Zatvori",
      "tab1": {
        "div1": "Predložak klizača/povećala osmišljen je za usporedbu dvije zasebne web-karte ili dva sloja jedne web-karte u atraktivnoj web-aplikaciji jednostavnoj za upotrebu koja se može upotrijebiti u bilo kojem pregledniku na bilo kojem uređaju, uključujući pametne telefone i tablete.",
        "div2": "Za dodatne informacije o predlošku klizača/povećala, uključujući primjere koje su stvorili korisnici, <a href='http://storymaps.arcgis.com/en/app-list/swipe/' target='_blank'> posjetite web-mjesto Story Maps</a>. Možete nas i pratiti na Twitteru na <a href='https://twitter.com/EsriStoryMaps' target='_blank'>@EsriStoryMaps</a>.",
        "div3": "Voljeli bismo da nam se javite! Neovisno o tome imate li pitanje, želite zatražiti novu značajku ili mislite da ste pronašli pogrešku, posjetite nas na <a href='http://links.esri.com/storymaps/forum' target='_blank'>Forumu za korisnike Story Mapsa</a>."
      }
    },
    "share": {
      "firstSaveTitle": "Priča spremljena",
      "manageStory": "Upravljajte svojom pričom",
      "manageStoryA1": "Savjet: možete upotrijebiti %LINK1% kako biste provjerili ima li vaša priča pogreške i kako biste promijenili način na koji se dijele komponente priče. Značajka moje priče pomaže vam i u tome da vaša priča izgleda dobro kad se podijeli na društvenim mrežama. Možete saznati o drugim korisnim značajkama mojih priča ovdje %LINK2%.",
      "manageStoryA1V1": "Moje priče",
      "manageStoryA1V2": "objave na blogu",
      "shareTitle": "Podijelite svoju priču",
      "sharePrivateHeader": "Vaša priča nije podijeljena, želite li je podijeliti?",
      "sharePrivateBtn1": "Podijeli javno",
      "sharePrivateBtn2": "Podijeli s mojom organizacijom",
      "sharePrivateProgress": "Dijeljenje u tijeku...",
      "sharePrivateErr": "Dijeljenje nije uspjelo, pokušajte ponovno ili",
      "sharePrivateOk": "Dijeljenje je ažurirano, učitavanje...",
      "shareStatus1": "Priča nije spremljena",
      "shareStatus2": "Priča je javno podijeljena",
      "shareStatus3": "Priča je podijeljena s organizacijom",
      "shareStatus4": "Priča nije podijeljena",
      "sharePreviewAsUser": "Pretpregled",
      "shareHeader1": "Vaša je priča <strong>javno dostupna</strong>.",
      "shareHeader2": "Vaša je priča dostupna članovima vaše organizacije (potrebna je prijava)",
      "shareLinkHeader": "Podijelite svoju priču",
      "shareLinkOpen": "OTVORI",
      "learnMore": "Saznaj više",
      "shareA1": "Upotrijebite %SHAREIMG% na <a href='%LINK1%' target='_blank'>stranici stavke aplikacije</a>. Ako želite prekinuti dijeljenje web-karte, upotrijebite <a href='%LINK2%' target='_blank'>stranicu stavke web-karte</a>.",
      "shareWarning": "Onemogućeno je dijeljenje %WITH% jer niste vlasnik <a href='%LINK%' target='_blank'>web-karte</a>.",
      "shareWarningWith1": "javno",
      "shareWarningWith2": "javno i s organizacijom"
    },
    "directCreation": {
      "header": "Dobro došli u sastavljač klizač/povećalo",
      "mapPickHeader": "Da biste započeli, unesite valjani ID karte ili gumbom za pretraživanje pretražujte web-karte.",
      "launchBuilder": "Pokreni sastavljač",
      "chooseWebmapLbl": "Izaberi web-kartu...",
      "explain2": "Da biste stvorili kartu s pričom s klizačem ili povećalom, upotrijebite gumb u nastavku da biste izabrali postojeću web-kartu koju želite upotrijebiti. Možete i zalijepiti ID web-karte u polje u nastavku.",
      "explain3": "Ako želite upotrijebiti dvije web-karte u svojoj karti s pričom, od vas će se zatražiti druga web-karta kasnije kada izaberete tu opciju.",
      "webmapPlaceholder": "Unesi ID web-karte..."
    },
    "saveErrorSocial": {
      "title": "Ažuriranje dijeljenja na društvenim mrežama",
      "panel1": "Poboljšana je prisutnost vaše priče na društvenim medijima, ali naziv stavke u web-aplikaciji ArcGIS nije jednak nazivu vaše priče.",
      "panel1tooltip": "Kada odredite naziv, sažetak i sličicu, vaša će priča izgledati ovako:",
      "panel2": "Koji biste naziv upotrijebili na društvenim medijima:",
      "panel2q1": "Naziv priče (preporučeno)",
      "panel2q1tooltip": "Ako odaberete ovu mogućnost, naziv vaše stavke izmijenit će se da bi se podudarao s naslovom vaše priče, dodatne promjene ažurirat će se u sastavljaču.",
      "panel2q2": "Naslov stavke",
      "panel3": "Da biste dodatno poboljšali izgled svoje priče na društvenim medijima, upotrijebite ${MYSTORIES} za dodavanje sažetka i sličice.",
      "panel4": "Ne upozoravaj me ponovno za ovu priču",
      "mystories": "Moje priče",
      "btnSave": "Spremi"
    }
  },
  "configure": {
    "mapdlg": {
      "items": {
        "organizationLabel": "Moja organizacija",
        "onlineLabel": "ArcGIS Online",
        "contentLabel": "Moj sadržaj",
        "favoritesLabel": "Moji favoriti"
      },
      "title": "Odaberite web-kartu",
      "searchTitle": "Pretraži",
      "ok": "U redu",
      "cancel": "Odustani",
      "placeholder": "Unesite termin za pretraživanje"
    }
  }
});