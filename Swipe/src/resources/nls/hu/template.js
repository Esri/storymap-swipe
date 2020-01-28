define({
  "viewer": {
    "loading": {
      "step1": "TÖRTÉNET BETÖLTÉSE",
      "step2": "ADATOK BETÖLTÉSE",
      "step3": "INICIALIZÁLÁS",
      "fail": "Nem sikerült a Swipe betöltése",
      "loadBuilder": "VÁLTÁS SZERKESZTŐ MÓDRA",
      "redirectSignIn": "ÁTIRÁNYÍTÁS A BEJELENTKEZÉSI OLDALRA",
      "redirectSignIn2": "(ide lesz átirányítva bejelentkezés után)",
      "failButton": "Újra"
    },
    "errors": {
      "boxTitle": "Hiba történt",
      "portalSelf": "Helyreállíthatatlan hiba: Nem sikerült lekérni a portál konfigurációját",
      "invalidConfig": "Helyreállíthatatlan hiba: Érvénytelen konfiguráció",
      "invalidConfigNoWebmap": "Helyreállíthatatlan hiba: Érvénytelen konfiguráció (a webtérkép vagy az alkalmazás azonosítója nincs megadva az index.html fájlban)",
      "invalidConfigNoAppDev": "A Webes térképkészítő alkalmazás azonosítója vagy a webtérkép nincs megadva az URL paramétereiben (?appid= vagy ?webmap=). Fejlesztői módban az index.html fájlban található appid és webmap konfiguráció figyelmen kívül van hagyva.",
      "createMap": "Nem sikerült létrehozni a térképet",
      "invalidApp": "Helyreállíthatatlan hiba: A történetet nem lehet betölteni",
      "initMobile": "Üdvözöli a Swipe webes alkalmazás. Az alkalmazás nincs konfigurálva. Az interaktív szerkesztő nem támogatott a mobileszközökön.",
      "initMobile2": "A Swipe szerkesztő nem támogatott ennél a kijelzőméretnél. Ha lehetséges, módosítsa a böngésző méretét úgy, hogy elérhető legyen a szerkesztő, vagy használjon nagyobb képernyővel rendelkező eszközt a történet összeállításához.",
      "initMobile3": "A Swipe szerkesztő használatához fordítsa el fekvő tájolásra az eszközt.",
      "noBuilderIE8": "A Swipe szerkesztő nem támogatott a 9-es verzió előtti Internet Explorerben.",
      "noViewerIE2": "Ezt a történetet egy régebbi, nem támogatott böngészőben próbálja megtekinteni. Előfordulhat, hogy néhány vektoros elem nem fog megfelelően működni, vagy váratlan hibák történhetnek. Azt javasoljuk, hogy frissítsen az Internet Explorer 11-es verziójára, vagy használjon más böngészőt, például a Chrome-ot.",
      "noViewerIE3": "2017 végén ez a történet már nem töltődik be ebben a böngészőben. A történet megtekintéséhez támogatott böngészőt kell használnia.",
      "attention": "Figyelem!",
      "noLayerView": "Üdvözöli a Swipe webes alkalmazás.<br />Az alkalmazás még nincs konfigurálva.",
      "appSave": "Nem sikerült a webes történet mentése",
      "mapSave": "Nem sikerült a webtérkép mentése",
      "notAuthorized": "Ön nem jogosult a történet elérésére",
      "notAuthorizedBuilder": "Ön nem jogosult a Swipe és a Spyglass szerkesztő használatára.",
      "conflictingProjectionsTitle": "Eltérő vetületi rendszerek",
      "conflictingProjections": "A Swipe nem támogatja két olyan webtérkép használatát, amelyekhez különböző vetületek tartoznak. Nyissa meg a beállításokat, és adjon meg olyan webtérképet, amelynek vetülete megegyezik az első webtérkép vetületével.",
      "cpButton": "Bezárás",
      "unspecifiedConfigOwner": "Nincs konfigurálva jogosult tulajdonos.",
      "invalidConfigOwner": "Nincs jogosultsága a történet tulajdonosának."
    },
    "mobileView": {
      "hideIntro": "BEVEZETÉS ELREJTÉSE",
      "navLeft": "Jelmagyarázat",
      "navMap": "Térkép",
      "navRight": "Adatok"
    },
    "desktopView": {
      "storymapsText": "Egy story map",
      "builderButton": "Váltás a szerkesztő módra",
      "facebookTooltip": "Megosztás Facebookon",
      "twitterTooltip": "Megosztás Twitteren",
      "bitlyTooltip": "Rövid hivatkozás lekérése",
      "tooltipAutoplayDisabled": "Ez nem érhető el automatikus lejátszási módban",
      "autoplayLabel": "Automatikus lejátszási mód",
      "autoplayExplain1": "Az automatikus lejátszási mód meghatározott időközönként léptetve halad végig a történeten. Ez ideális megoldás a  nyilvános monitorokon történő megjelenítéshez, de vegye figyelembe, hogy más helyzetekben megnehezítheti a történet olvasását. Ez a funkció kisméretű kijelzőkön nem támogatott.",
      "autoplayExplain2": "Amikor aktív ez a mód, vezérlők érhetők el a történet lejátszásához/szüneteltetéséhez, valamint a navigáció sebességének beállításához."
    },
    "bannerNotification": {
      "learnMore": "További információk",
      "close": "Bezárás",
      "dontShowAgain": "Ne jelenjen meg újra ez az üzenet"
    },
    "httpsTransitionMessage": {
      "bannerMsg": "Fontos üzenet a webbiztonságról és story mapekről",
      "s1h1": "Az Esri számára fontos a story mapek biztonsága",
      "s1p1": "Az ön story mapjei jelen vannak az interneten, és az internetes közösség folyamatosan a biztonság javítására törekszik. A HTTPS biztonságos kapcsolatot biztosít az internetes tartalmakhoz, ezért egyre inkább ez az internetes tartalmakhoz való kapcsolódás elvárt módja. A legtöbb modern böngésző most már hibaüzeneteket küld, ha HTTPS helyett HTTP kerül használatra. Mivel a HTTPS használata egyre inkább normává válik, 2018 júniusától az ArcGIS Online-ra történő frissítéssel a story mapekhez HTTPS használata lesz szükséges.",
      "s1p2": "Ez a gyakorlatban azt jelenti, hogy egy story maphez és annak összes tartalmához (pl. képek, rétegek, beágyazott applikációk és weboldalak) HTTP-vel kezdődő hivatkozások helyett HTTPS-sel kezdődő hivatkozással kell hozzáférni. Ez a legjobb felhasználói tapasztalatokat biztosítja olvasói számára, mivel a legtöbb böngésző ki fogja írni, hogy az ön története biztonságos.",
      "s2h1": "Mit a teendőm?",
      "s2p1": "Az Esri azon dolgozik, hogy az átállás könnyű legyen a story mapek szerzőinek és olvasóinak. A Story Map szerkesztőkben és a Saját történetek alatt elérhetők azok az eszközök, amelyek segítenek önnek megtalálni a nem biztonságos tartalmakat (HTTP) a történeteiben, valamint javaslatokat is tesznek a problémák javítására. Kérjük, ellenőrizze történeteit nem biztonságos tartalmak szempontjából, és 2018 júniusa előtt frissítsen HTTPS-re.",
      "action1": "Bezárás",
      "action2": "Saját történetek megtekintése most",
      "action3": "További információk"
    },
    "licenseChange2018": {
      "noAccess": "Az Ön fiókjának (%USER_NAME%) licence nem teszi lehetővé a nem nyilvános story map megnyitását.  Igényelje a szervezete adminisztrátorától, hogy rendeljen Önhöz olyan felhasználótípust, amely tartalmazza a story map-eket, vagy egy kiegészítő story map-ekre vonatkozó licencet."
    }
  },
  "builder": {
    "builder": {
      "panelHeader": "TÖRTÉNET KONFIGURÁCIÓJA",
      "buttonSave": "MENTÉS",
      "buttonHelp": "Súgó",
      "buttonShare": "Megosztás",
      "buttonDiscard": "MÉGSE",
      "buttonSettings": "Beállítások",
      "buttonView": "Megjelenítési mód",
      "buttonItem": "A webes alkalmazás elemének megnyitása",
      "noPendingChange": "Nincs függőben lévő módosítás",
      "unSavedChangeSingular": "1 nem mentett módosítás",
      "unSavedChangePlural": "nem mentett módosítás",
      "popoverDiscard": "Biztos, hogy elveti a nem mentett módosításokat?",
      "yes": "Igen",
      "no": "Nem",
      "popoverOpenViewExplain": "A megtekintő megnyitásával elveszíti a nem mentett módosításokat",
      "popoverOpenViewOk": "OK",
      "popoverOpenViewCancel": "Mégse",
      "popoverSaveWhenDone": "Ne feledkezzen el a mentésről, amikor elkészült",
      "closeWithPendingChange": "Biztos, hogy megerősíti a műveletet? A módosításai el fognak veszni.",
      "gotIt": "OK",
      "savingApplication": "Történet mentése",
      "saveSuccess": "A történet mentve",
      "saveError": "Nem sikerült a mentés, próbálja meg újra",
      "saveError2": "Nem sikerült a mentés, mert érvénytelen html-címke van egy névben vagy leírásban",
      "saveError3": "A cím nem lehet üres",
      "signIn": "Jelentkezzen be egy fiókkal:",
      "signInTwo": "a történet mentéséhez."
    },
    "header": {
      "editMe": "Szerkesztés!",
      "templateTitle": "Sablon címének beállítása",
      "templateSubtitle": "Sablon alcímének beállítása"
    },
    "settings": {
      "settingsHeader": "Történetbeállítások",
      "modalCancel": "Mégse",
      "modalApply": "Alkalmaz"
    },
    "settingsColors": {
      "settingsTabColor": "Téma",
      "settingsColorExplain": "Válasszon egy alkalmazástémát, vagy definiáljon saját színeket.",
      "settingsLabelColor": "Fejléc és oldalsó panel háttérszíne"
    },
    "settingsHeader": {
      "settingsTabLogo": "Fejléc",
      "settingsLogoExplain": "Állítsa be igényei szerint  a fejlécet (a maximális méret 250 x 50 képpont).",
      "settingsLogoEsri": "Esri logója",
      "settingsLogoNone": "Nincs logó",
      "settingsLogoCustom": "Egyéni logó",
      "settingsLogoCustomPlaceholder": "Kép URL-címe",
      "settingsLogoCustomTargetPlaceholder": "Átirányító hivatkozás",
      "settingsLogoSocialExplain": "Állítsa be igényei szerint  a fejléc jobb felső hivatkozását.",
      "settingsLogoSocialText": "Szöveg",
      "settingsLogoSocialLink": "Hivatkozás",
      "settingsLogoSocialDisabled": "Ezt a vektoros elemet letiltotta az adminisztrátor"
    },
    "settingsExtent": {
      "settingsTabExtent": "Kiterjedés",
      "settingsExtentExplain": "Állítsa be a kezdeti kiterjedést az alábbi interaktív térképen.",
      "settingsExtentExplainBottom": "Az Ön által megadott kiterjedés módosítani fogja a webtérkép kezdeti kiterjedését. Vegye figyelembe, hogy ha csúszkasorozatot készít, az adott kiterjedés nem lesz használva.",
      "settingsExtentDateLineError": "A kiterjedés nem keresztezheti a 180° hosszúsági kört",
      "settingsExtentDateLineError2": "Nem sikerült a kiterjedés kiszámítása",
      "settingsExtentDrawBtn": "Új kiterjedés rajzolása",
      "settingsExtentModifyBtn": "Az aktuális kiterjedés szerkesztése",
      "settingsExtentApplyBtn": "Alkalmazás a főtérképen",
      "settingsExtentUseMainMap": "Fő térkép kiterjedésének használata"
    },
    "storyTellerUserType": {
      "notCreatorError": "Az Ön fiókjának (%USER_NAME%) licence nem teszi lehetővé a klasszikus story map szerkesztők használatát. Kérje meg a szervezete adminisztrátorát, hogy rendeljen Önhöz Készítő felhasználótípust."
    }
  },
  "swipe": {
    "mobileData": {
      "noData": "Nincs megjeleníthető adat.",
      "noDataExplain": "Koppintson a térképre egy vektoros elem kiválasztásához, és térjen vissza ide",
      "noDataMap": "Nincs adat ehhez a térképhez",
      "noPopup": "Nem található felugró ablak ehhez a vektoros elemhez"
    },
    "mobileLegend": {
      "noLegend": "Nincs megjeleníthető jelmagyarázat."
    },
    "swipeSidePanel": {
      "editTooltip": "Állítsa be az oldalsó panel leírását",
      "editMe": "Szerkesztés!",
      "legendTitle": "Jelmagyarázat"
    },
    "infoWindow": {
      "noFeature": "Nincs megjeleníthető adat",
      "noFeatureExplain": "Koppintson a térképre egy vektoros elem kiválasztásához"
    },
    "settingsLayout": {
      "settingsTabLayout": "Csúszkastílus",
      "settingsLayoutExplain": "Válasszon ki egy stílust a csúszka eszközhöz.",
      "settingsLayoutSwipe": "Függőleges sáv",
      "settingsLayoutSpyGlass": "Nagyító",
      "settingsLayoutSelected": "Kiválasztott elrendezés",
      "settingsLayoutSelect": "Az elrendezés kiválasztása",
      "settingsSaveConfirm": "Néhány módosítás a történet mentését és újratöltését igényli"
    },
    "settingsDataModel": {
      "settingsTabDataModel": "Csúszkatípus",
      "settingsDataModelExplainSwipe": "Mihez használják majd a felhasználók a csúszkát?",
      "settingsDataModelExplainSwipe2": "",
      "settingsDataModelExplainSpyGlass": "Válassza ki azt a réteget vagy webtérképet, amely meg fog jelenni a nagyítóban.",
      "settingsDataModelOneMap": "Egy réteg egy webtérképben",
      "settingsDataModel1Explain": "Válassza ki a csúszkával húzandó réteget",
      "settingsDataModel1Warning": "Ha a réteget eltakarják a felső rétegek, a csúszka hatástalan lesz.",
      "settingsDataModel1SpyGlassExplain": "Válassza ki a nagyítóban megjeleníteni kívánt réteget.",
      "settingsDataModelTwoMaps": "Két webtérkép",
      "settingsDataModelLayerIds": "Webtérképréteg-azonosítók",
      "settingsDataModelSelected": "Kiválasztott típus",
      "settingsDataModelWebmapSwipeId1": "Jobb webtérkép azonosítója",
      "settingsDataModelWebmapSwipeId2": "Bal webtérkép azonosítója",
      "settingsDataModelWebmapGlassId1": "Fő webtérkép azonosítója",
      "settingsDataModelWebmapGlassId2": "Nagyítóban lévő webtérkép azonosítója",
      "settingsDataModelSelect": "A típus kiválasztása",
      "settingsDataModel2Explain": "Csúszka egy másik webtérképpel.",
      "settingsDataModel2SpyGlassExplain": "A másik webtérkép felfedése.",
      "settingsDataModel2HelpTitle": "Hogyan találhatom meg a webtérkép azonosítóját?",
      "settingsDataModel2HelpContent": "Másolja és illessze be a webtérkép URL-címében az „=” jel után következő számjegyeket",
      "switchMaps": "Térképek váltása",
      "browseWebMaps": "Webtérképek tallózása"
    },
    "settingsLegend": {
      "settingsTabLegend": "Alkalmazás elrendezése",
      "settingsLegendExplain": "Válassza ki az elrendezés beállításait.",
      "settingsLegendEnable": "Jelmagyarázat engedélyezése",
      "settingsDescriptionEnable": "Leírás engedélyezése",
      "settingsBookmarksEnable": "Csúszkasorozatok engedélyezése",
      "settingsPopupDisable": "Felugró ablak engedélyezése",
      "settingsLocationSearchEnable": "Helymeghatározó keresés engedélyezése",
      "settingsGeolocatorEnable": "Földrajzi helymeghatározó engedélyezése",
      "settingsLegendHelpContent": "A jelmagyarázat tartalmának pontosításához használja az ArcGIS webtérkép-nézegető tartalomjegyzékét (elrejtés a jelmagyarázatban)",
      "settingsSeriesHelpContent": "A csúszkasorozat egy többlapos navigálási lehetőség, amely az olvasót egy meghatározott kiterjedéshez vezeti, és az oldalsó panelen jeleníti meg a címet és a leírást. Az első aktiválás során a webtérkép(ek) könyvjelzői importálva lesznek, és ezek lesznek megjelenítve a sorozat sávjában. A sorozat letiltása esetén kikapcsolódik a sorozat sávja, de a sorozat konfigurációja megőrződik a későbbi használathoz.",
      "settingsSeriesHelpContent2": "A csúszkasorozat segítségével kiválasztott helyeket hozhat létre és szerkeszthet, és címet és szöveget adhat meg hozzájuk. Ha a webtérkép tartalmaz könyvjelzőket, ezek meg lesznek jelenítve. A sorozatot letilthatja, de a konfiguráció megőrződik a későbbi használathoz.",
      "settingsSeriesHelpLink": "Tekintsen meg egy példát a csúszkasorozatot használó alkalmazásra",
      "preview": "Felhasználói felület előnézete",
      "settingsLocateButtonExplain": "A legtöbb böngészőben támogatott. Csak akkor jelenik meg, ha a story map elérése HTTPS-kapcsolaton keresztül történik. Nem jelenik meg, ha a történet be van ágyazva.",
      "settingsLocateButton": "„Megkeresés” gomb engedélyezése a támogatott böngészőkben",
      "settingsAddressSearch": "Címkereső eszköz engedélyezése"
    },
    "settingsSwipePopup": {
      "settingsSwipePopup": "Felugró ablak",
      "settingsSwipePopupExplain": "Állítsa be igényei szerint a felugró ablakok fejlécének megjelenését, hogy megkönnyítse a felhasználóknak a felugró ablakok és a társított térképrétegek azonosítását.",
      "settingsSwipePopupSwipe1": "Bal térkép",
      "settingsSwipePopupSwipe2": "Jobb térkép",
      "settingsSwipePopupGlass1": "Főtérkép",
      "settingsSwipePopupGlass2": "Nagyítóban lévő térkép",
      "settingsSwipePopupTitle": "Fejléc címe",
      "settingsSwipePopupColor": "Fejléc színe"
    },
    "initPopup": {
      "initHeader": "Üdvözöli a Swipe/Spyglass szerkesztője!",
      "modalNext": "Következő",
      "modalPrev": "Előző",
      "modalApply": "Alkalmazás megnyitása"
    },
    "seriesPanel": {
      "title": "Cím",
      "descr": "Leírás",
      "discard": "Könyvjelző elvetése",
      "saveExtent": "Könyvjelző kiterjedésének beállítása",
      "discardDisabled": "Ezt a könyvjelzőt nem távolíthatja el. A csúszkasorozat a beállítások között tiltható le."
    },
    "helpPopup": {
      "title": "Súgó",
      "close": "Bezárás",
      "tab1": {
        "div1": "A Swipe/Spyglass sablonnal összehasonlítható két különálló webtérkép vagy egy webtérkép két rétege egy tetszetős, könnyen használható webes alkalmazásban, amely bármilyen böngészőben és bármilyen eszközön használható, beleértve az okostelefonokat és a táblagépeket.",
        "div2": "A Swipe/Spyglass sablonnal kapcsolatos további információkat, valamint a felhasználók által létrehozott példákat a <a href='https://storymaps.arcgis.com/en/app-list/swipe-spyglass/' target='_blank'>Story Maps webhelyen</a> talál. A Twitteren is követhet minket: <a href='https://twitter.com/EsriStoryMaps' target='_blank'>@EsriStoryMaps</a>.",
        "div3": "Örömmel hallanánk Önről! Ha kérdése merül fel, ha új funkciót szeretne kérni, vagy ha úgy véli, hogy hibát talált, keresse fel a <a href='http://links.esri.com/storymaps/forum' target='_blank'>Story Maps felhasználói fórumot</a>."
      }
    },
    "share": {
      "firstSaveTitle": "A történet mentve",
      "manageStory": "A történet kezelése",
      "manageStoryA1": "Tipp: A(z) %LINK1% használatával megkeresheti a hibákat a történetben, és megváltoztathatja az összetevőinek megosztását. A Saját történetek segítségével biztosíthatja a történet megfelelő megjelenését, amikor megosztja azt a közösségi hálózatokban. A Saját történetek további hasznos funkcióinak ismertetését lásd: %LINK2%.",
      "manageStoryA1V1": "Saját történetek",
      "manageStoryA1V2": "blogbejegyzések",
      "shareTitle": "A történet megosztása",
      "sharePrivateHeader": "A történet nincs megosztva, szeretné megosztani?",
      "sharePrivateBtn1": "Megosztás nyilvánosan",
      "sharePrivateBtn2": "Megosztás a saját szervezettel",
      "sharePrivateProgress": "A megosztás folyamatban...",
      "sharePrivateErr": "Nem sikerült a megosztás, próbálja újra vagy",
      "sharePrivateOk": "A megosztás frissült, betöltés...",
      "shareStatus1": "A történet nincs mentve",
      "shareStatus2": "A történet nyilvánosan megosztott",
      "shareStatus3": "A történet a szervezeten belül megosztott",
      "shareStatus4": "A történet nincs megosztva",
      "sharePreviewAsUser": "Előnézet",
      "shareHeader1": "A történet <strong>nyilvánosan elérhető</strong>.",
      "shareHeader2": "A történetet a szervezetének tagjai érhetik el (bejelentkezés szükséges).",
      "shareLinkHeader": "A történet megosztása",
      "shareLinkOpen": "MEGNYITÁS",
      "learnMore": "További információk",
      "shareA1": "Használja a(z) %SHAREIMG% lehetőséget az <a href='%LINK1%' target='_blank'>alkalmazás elemoldalán</a>. Ha meg szeretné szüntetni a webtérkép megosztását, használja a <a href='%LINK2%' target='_blank'>webtérkép elemoldalát</a>.",
      "shareWarning": "A %WITH% történő megosztás le lett tiltva, mert nem Ön a <a href='%LINK%' target='_blank'>webtérkép</a> tulajdonosa.",
      "shareWarningWith1": "nyilvánosan",
      "shareWarningWith2": "nyilvánosan és a szervezettel"
    },
    "directCreation": {
      "header": "Üdvözöli a Swipe/Spyglass szerkesztője!",
      "mapPickHeader": "A kezdéshez adjon meg egy érvényes webtérkép-azonosítót, vagy a Keresés gomb segítségével tallózással keressen webtérképeket.",
      "launchBuilder": "Szerkesztő elindítása",
      "chooseWebmapLbl": "Válasszon webtérképet...",
      "explain2": "Csúszkás vagy nagyítós story map létrehozásához használja az alábbi gombot, vagy válassza ki a használni kívánt meglévő webtérképet. Másik lehetőségként beillesztheti a webtérkép azonosítóját az alábbi mezőbe.",
      "explain3": "Ha két webtérképet szeretne használni a story mapben, a rendszer kérni fogja a második webtérkép megadását, amikor ezt a lehetőséget választja.",
      "webmapPlaceholder": "Webtérkép azonosítójának megadása..."
    },
    "saveErrorSocial": {
      "title": "Közösségi médiamegosztás módosítása",
      "panel1": "Történetének közösségi médiabeli megjelenését javítottuk, de az ArcGIS webes alkalmazás elemcíme nem azonos a történetének a címével.",
      "panel1tooltip": "Cím, összefoglalás és bélyegkép megadásával a történet így fog megjelenni:",
      "panel2": "Melyik címet kívánja használni a közösségi médiában:",
      "panel2q1": "Történet címe (ajánlott)",
      "panel2q1tooltip": "Ha ezt a beállítást választja, az elemcím módosítva lesz úgy, hogy megegyezzen a történet címével, és a szerkesztőben megadott további változtatások szinkronizálva lesznek.",
      "panel2q2": "Elem címe",
      "panel3": "Ha még tovább szeretné javítani a történet közösségi médiabeli megjelenését, a(z) ${MYSTORIES} használatával adjon meg összefoglalást és bélyegképet.",
      "panel4": "Ne figyelmeztessen újra ennél a történetnél",
      "mystories": "Saját történetek",
      "btnSave": "Mentés"
    }
  },
  "configure": {
    "mapdlg": {
      "items": {
        "organizationLabel": "Saját szervezet",
        "onlineLabel": "ArcGIS Online",
        "contentLabel": "Saját tartalom",
        "favoritesLabel": "Saját kedvencek"
      },
      "title": "Webtérkép kiválasztása",
      "searchTitle": "Keresés",
      "ok": "OK",
      "cancel": "Mégse",
      "placeholder": "Adjon meg egy keresőkifejezést"
    }
  },
  "httpsTransitionNotification": {
    "s1h1": "Az Esri számára fontos a story mapek biztonsága",
    "s1p1": "Az ön story map-jei jelen vannak az interneten, és az internetes közösség folyamatosan a biztonság javítására törekszik. A HTTPS biztonságos kapcsolatot biztosít az internetes tartalmakhoz, ezért egyre inkább ez az internetes tartalmakhoz való kapcsolódás elvárt módja. A legmodernebb böngészők most már hibaüzeneteket küldenek, ha HTTPS helyett HTTP kerül használatra. Mivel a HTTPS használata egyre inkább normává válik, erősen ajánlott HTTPS hivatkozásokat használni a story mapek létrehozásához és megosztásához, továbbá kizárólag HTTPS URL-címek használatát javasoljuk internetes tartalmaknak beágyazására és képek hivatkozására a story mapeken belül.",
    "s1p2": "Ez a gyakorlatban azt jelenti, hogy egy story maphez és annak összes tartalmához (pl. képek, rétegek, beágyazott applikációk és weboldalak) HTTP-vel kezdődő hivatkozások helyett HTTPS-sel kezdődő hivatkozással kell hozzáférni. Ez a legjobb felhasználói tapasztalatokat biztosítja olvasói számára, mivel a legtöbb böngésző ki fogja írni, hogy az ön története biztonságos.",
    "s2h1": "Mit a teendőm?",
    "s2p1": "Az Esri azon dolgozik, hogy az átállás könnyű legyen a story mapek szerzőinek és olvasóinak. A Story Map szerkesztőkben és a Saját történetek alatt elérhetők azok az eszközök, amelyek segítenek önnek megtalálni a nem biztonságos tartalmakat (HTTP) a történeteiben, valamint javaslatokat is tesznek a problémák javítására. Kérjük, ellenőrizze történeteit nem biztonságos tartalmak szempontjából, és frissítsen HTTPS-re a lehető leghamarabb.",
    "action1": "Bezárás",
    "action2": "Saját történetek megtekintése most",
    "action3": "További információk"
  },
  "embedBar": {
    "share": "Megosztás",
    "fullScreen": "Teljes képernyő",
    "enlarge": "Nagyítás",
    "newTab": "Megnyitás új fülön",
    "tagline": "Egy story map",
    "exitFullScreen": "Kilépés a teljes képernyőből"
  },
  "june2018SurveyMessage": {
    "bannerMsg": "Lehet egy kérdésünk? A segítségünkre lesz a Story Map-ek továbbfejlesztésében.",
    "s1h1": "Ossza meg a gondolatait, és járuljon hozzá a fejlődéshez",
    "s1p1": "Az Öntől érkező megjegyzések a legfontosabb visszajelzési forrásunkat adják, és minél többet tudunk Önről, annál hatékonyabban fejleszthetjük a story map-eket. Fogadja hálás köszönetünket, ha részt vesz ebben a háromperces felmérésben!",
    "s2p1": "Köszönjük, hogy az Esri story mapeket választotta!",
    "action1": "Bezárás",
    "action2": "A felmérés indítása"
  }
});