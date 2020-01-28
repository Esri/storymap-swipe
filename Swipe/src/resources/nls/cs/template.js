define({
  "viewer": {
    "loading": {
      "step1": "NAČÍTÁNÍ PŘÍBĚHU",
      "step2": "NAHRÁVÁNÍ DAT",
      "step3": "INICIALIZACE",
      "fail": "Nepodařilo se načíst nástroj překrývání.",
      "loadBuilder": "PŘEPÍNÁNÍ DO REŽIMU TVORBY",
      "redirectSignIn": "PROBÍHÁ PŘESMĚROVÁNÍ NA PŘIHLAŠOVACÍ STRÁNKU",
      "redirectSignIn2": "(budete sem přesměrováni po přihlášení)",
      "failButton": "Zkusit znovu"
    },
    "errors": {
      "boxTitle": "Nastala chyba",
      "portalSelf": "Závažná chyba: Nepodařilo se získat konfiguraci portálu.",
      "invalidConfig": "Závažná chyba: Neplatná konfigurace",
      "invalidConfigNoWebmap": "Závažná chyba: Neplatná konfigurace (v index.html není specifikována webová mapa nebo identifikátor aplikace)",
      "invalidConfigNoAppDev": "V parametrech adresy URL nebyl zadán identifikátor webové mapovací aplikace ani identifikátor webové mapy (?appid= nebo ?webmap=). V režimu vývoje jsou ID aplikace a konfigurace webové mapy v souboru index.html ignorovány.",
      "createMap": "Nelze vytvořit mapu",
      "invalidApp": "Závažná chyba: Příběh nelze načíst",
      "initMobile": "Vítejte ve webové aplikaci pro překrývání. Aplikace není nakonfigurována. Interaktivní nástroj pro tvorbu není podporován v mobilních zařízeních.",
      "initMobile2": "Nástroj pro tvorbu příběhu podle šablony překrývání není v této velikosti zobrazení podporován. Pokud je to možné, zvětšete velikost prohlížeče nebo příběh vytvořte na zařízení s větší obrazovkou.",
      "initMobile3": "Aby bylo možné použít nástroj pro tvorbu překrývání, otočte své zařízení na šířku.",
      "noBuilderIE8": "Interaktivní nástroj pro tvorbu překrývání není podporován v programu Internet Explorer verze nižší než 9.",
      "noViewerIE2": "Pokoušíte se tento příběh prohlížet pomocí staršího, nepodporovaného prohlížeče. Některé funkce nemusí fungovat nebo se mohou vyskytnout jiné nečekané problémy. Doporučujeme přejít na Internet Explorer 11 nebo použít jiný prohlížeč, například Chrome.",
      "noViewerIE3": "Koncem roku 2017 se tento příběh v tomto prohlížeči již nenačte. K jeho prohlížení bude nutné použít podporovaný prohlížeč.",
      "attention": "Upozornění!",
      "noLayerView": "Vítejte ve webové aplikaci pro překrývání.<br />Aplikace zatím není nakonfigurována.",
      "appSave": "Chyba při ukládání webového příběhu",
      "mapSave": "Chyba při ukládání webové mapy",
      "notAuthorized": "Nejste oprávněni přistupovat k tomuto příběhu",
      "notAuthorizedBuilder": "Nejste oprávněni používat nástroj Překrývání a lupa.",
      "conflictingProjectionsTitle": "Konfliktní projekce",
      "conflictingProjections": "Překrývání nepodporuje používání dvou webových map s různými projekcemi. Otevřete nastavení a použijte webovou mapu, která využívá stejnou projekci jako první webová mapa.",
      "cpButton": "Zavřít",
      "unspecifiedConfigOwner": "Nebyl nakonfigurován autorizovaný vlastník.",
      "invalidConfigOwner": "Vlastník příběhu není autorizován."
    },
    "mobileView": {
      "hideIntro": "SKRÝT ÚVOD",
      "navLeft": "Legenda",
      "navMap": "Mapa",
      "navRight": "Data"
    },
    "desktopView": {
      "storymapsText": "Mapa s příběhem",
      "builderButton": "Přepnout do režimu tvorby",
      "facebookTooltip": "Sdílet na Facebooku",
      "twitterTooltip": "Sdílet na Twitteru",
      "bitlyTooltip": "Získat krátký odkaz",
      "tooltipAutoplayDisabled": "Není k dispozici v režimu automatického přehrávání.",
      "autoplayLabel": "Režim automatického přehrávání",
      "autoplayExplain1": "Režim automatického přehrávání bude příběhem procházet v pravidelných intervalech. Ideální pro použití na výstavních stáncích nebo veřejných monitorech, buďte si však vědomi toho, že to v některých případech může znesnadnit čtení příběhu. Tato funkce není podporována na malých obrazovkách.",
      "autoplayExplain2": "Je-li tento režim aktivní, budou k dispozici ovládací prvky ke spuštění/pozastavení přehrávání příběhu a k nastavení rychlosti procházení."
    },
    "bannerNotification": {
      "learnMore": "Více informací",
      "close": "Zavřít",
      "dontShowAgain": "Toto hlášení příště nezobrazovat"
    },
    "httpsTransitionMessage": {
      "bannerMsg": "Důležité upozornění týkající se webové bezpečnosti a map s příběhem",
      "s1h1": "Společnost Esri zvyšuje zabezpečení map s příběhem",
      "s1p1": "Vaše mapy s příběhem živě na webu a webová komunita neustále pracují na tom, jak zajistit a implementovat lepší zabezpečení. Protokol HTTPS, který poskytuje bezpečné připojení k obsahu šířenému po internetu, se profiluje jako běžný způsob přístupu k webovému obsahu. Většina moderních prohlížečů dnes zobrazuje varování, když internetová adresa používá protokol HTTP místo HTTPS. Kvůli tomuto vznikajícímu standardu bude nutné, počínaje updatem ArcGIS Online v červnu 2018, aby vaše mapy s příběhem používaly protokol HTTPS.",
      "s1p2": "V praxi to znamená, že přístup k mapě s příběhem a veškerému jejímu obsahu (včetně obrázků, vrstev, připojených aplikací a webových stránek) musí probíhat prostřednictvím odkazů, které začínají řetězcem HTTPS místo HTTP. Zajistíte tak svým čtenářům ten nejlepší možný zážitek, jelikož většina webových prohlížečů bude hlásit, že vaše příběhy používají zabezpečené připojení.",
      "s2h1": "Co mám udělat?",
      "s2p1": "Společnost Esri pracuje na tom, aby pro autory map s příběhem a čtenáře tento přechod proběhl hladce. V nástrojích pro tvorbu map s příběhem a aplikaci Moje příběhy jsou nyní k dispozici pomůcky, které vám umožní najít nezabezpečený obsah (HTTP) ve vašich příbězích a které vám poradí, jak postupovat dál. Zkontrolujte prosím zabezpečení svých příběhů a přejděte na protokol HTTPS do června 2018.",
      "action1": "Zavřít",
      "action2": "Chci si prohlédnout svoje příběhy",
      "action3": "Více informací"
    },
    "licenseChange2018": {
      "noAccess": "Váš účet (%USER_NAME%) nevlastní licenci k otevření mapy s příběhem, která není veřejná. Požádejte prosím správce své organizace, aby vám přidělil typ uživatele, jehož součástí jsou mapy s příběhem nebo doplňková licence základních aplikací."
    }
  },
  "builder": {
    "builder": {
      "panelHeader": "KONFIGURACE PŘÍBĚHU",
      "buttonSave": "ULOŽIT",
      "buttonHelp": "Nápověda",
      "buttonShare": "Sdílet",
      "buttonDiscard": "ZRUŠIT",
      "buttonSettings": "Nastavení",
      "buttonView": "Režim prohlížení",
      "buttonItem": "Otevřít položku webové aplikace",
      "noPendingChange": "Žádná neuložená změna",
      "unSavedChangeSingular": "1 neuložená změna",
      "unSavedChangePlural": "neuložených změn",
      "popoverDiscard": "Určitě chcete přijít o všechny neuložené změny?",
      "yes": "Ano",
      "no": "Ne",
      "popoverOpenViewExplain": "Otevřením tohoto prohlížeče přijdete o všechny neuložené změny.",
      "popoverOpenViewOk": "OK",
      "popoverOpenViewCancel": "Storno",
      "popoverSaveWhenDone": "Až budete hotovi, nezapomeňte provedené změny uložit.",
      "closeWithPendingChange": "Určitě chcete potvrdit tuto akci? Změny se neuloží.",
      "gotIt": "OK",
      "savingApplication": "Ukládání příběhu",
      "saveSuccess": "Příběh uložen",
      "saveError": "Ukládání se nezdařilo, zkuste to znovu.",
      "saveError2": "Ukládání selhalo kvůli neplatnému HTML tagu v názvu nebo popisu.",
      "saveError3": "Název nesmí být prázdný",
      "signIn": "Přihlaste se pomocí účtu na",
      "signInTwo": "pro uložení příběhu."
    },
    "header": {
      "editMe": "Edituj mě!",
      "templateTitle": "Nastavit název šablony",
      "templateSubtitle": "Nastavit podnadpis šablony"
    },
    "settings": {
      "settingsHeader": "Nastavení příběhu",
      "modalCancel": "Storno",
      "modalApply": "Použít"
    },
    "settingsColors": {
      "settingsTabColor": "Motiv",
      "settingsColorExplain": "Vyberte motiv aplikace nebo vyberte vlastní barvy.",
      "settingsLabelColor": "Barvy pozadí postranního panelu a záhlaví"
    },
    "settingsHeader": {
      "settingsTabLogo": "Záhlaví",
      "settingsLogoExplain": "Přizpůsobte logo v záhlaví (maximum je 250×50 px).",
      "settingsLogoEsri": "Logo Esri",
      "settingsLogoNone": "Bez loga",
      "settingsLogoCustom": "Vlastní logo",
      "settingsLogoCustomPlaceholder": "URL obrázku",
      "settingsLogoCustomTargetPlaceholder": "Odkaz při kliknutí na obrázek",
      "settingsLogoSocialExplain": "Přizpůsobte odkaz v pravé horní části záhlaví.",
      "settingsLogoSocialText": "Text",
      "settingsLogoSocialLink": "Odkaz",
      "settingsLogoSocialDisabled": "Tato funkce byla zakázána administrátorem."
    },
    "settingsExtent": {
      "settingsTabExtent": "Rozsah",
      "settingsExtentExplain": "Prostřednictvím následující interaktivní mapy nastavte výchozí rozsah.",
      "settingsExtentExplainBottom": "Podle zadaného rozsahu se upraví výchozí rozsah webové mapy. Vytváříte-li sérii překrývání, tento rozsah se nepoužije.",
      "settingsExtentDateLineError": "Rozsah nesmí přesahovat 180° zeměpisné délky",
      "settingsExtentDateLineError2": "Při výpočtu rozsahu došlo k chybě",
      "settingsExtentDrawBtn": "Určit nový rozsah",
      "settingsExtentModifyBtn": "Editovat aktuální rozsah",
      "settingsExtentApplyBtn": "Použít v hlavní mapě",
      "settingsExtentUseMainMap": "Použít rozsah hlavní mapy"
    },
    "storyTellerUserType": {
      "notCreatorError": "Váš účet (%USER_NAME%) nevlastní licenci k použití nástrojů pro tvorbu klasických map s příběhem. Požádejte prosím administrátora své organizace, aby vám přidělil typ uživatele Creator."
    }
  },
  "swipe": {
    "mobileData": {
      "noData": "Žádná data k zobrazení",
      "noDataExplain": "Po klepnutí na mapu vyberte prvek a vraťte se sem",
      "noDataMap": "Žádná data pro tuto mapu",
      "noPopup": "Vyskakovací okno pro tento prvek nenalezeno"
    },
    "mobileLegend": {
      "noLegend": "Žádná legenda k zobrazení."
    },
    "swipeSidePanel": {
      "editTooltip": "Nastavit popis postranního panelu",
      "editMe": "Edituj mě!",
      "legendTitle": "Legenda"
    },
    "infoWindow": {
      "noFeature": "Žádná data k zobrazení",
      "noFeatureExplain": "Klepnutím na mapu vyberete prvek"
    },
    "settingsLayout": {
      "settingsTabLayout": "Styl překrývání",
      "settingsLayoutExplain": "Vyberte styl pro nástroj překrývání.",
      "settingsLayoutSwipe": "Svislý sloupec",
      "settingsLayoutSpyGlass": "Lupa",
      "settingsLayoutSelected": "Vybrané rozvržení",
      "settingsLayoutSelect": "Vybrat toto rozvržení",
      "settingsSaveConfirm": "Některé ze změn vyžadují uložení a opětovné spuštění příběhu"
    },
    "settingsDataModel": {
      "settingsTabDataModel": "Typ překrývání",
      "settingsDataModelExplainSwipe": "Co chcete, aby uživatelé překrývali?",
      "settingsDataModelExplainSwipe2": "",
      "settingsDataModelExplainSpyGlass": "Vyberte vrstvu nebo webovou mapu, která se zobrazí v lupě.",
      "settingsDataModelOneMap": "Vrstva ve webové mapě",
      "settingsDataModel1Explain": "Vyberte vrstvu, kterou chcete překrýt",
      "settingsDataModel1Warning": "Pokud je vrstva zakrytá svrchnějšími vrstvami, překrývání se nijak neprojeví.",
      "settingsDataModel1SpyGlassExplain": "Vyberte vrstvu, která se zobrazí v lupě.",
      "settingsDataModelTwoMaps": "Dvě webové mapy",
      "settingsDataModelLayerIds": "Identifikátory vrstev webové mapy",
      "settingsDataModelSelected": "Vybraný typ",
      "settingsDataModelWebmapSwipeId1": "Identifikátor pravé webové mapy",
      "settingsDataModelWebmapSwipeId2": "Identifikátor levé webové mapy",
      "settingsDataModelWebmapGlassId1": "Identifikátor hlavní webové mapy",
      "settingsDataModelWebmapGlassId2": "Identifikátor webové mapy pro dalekohled",
      "settingsDataModelSelect": "Vybrat tento typ",
      "settingsDataModel2Explain": "Proveďte překrytí jinou webovou mapou.",
      "settingsDataModel2SpyGlassExplain": "Odkryjte jinou webovou mapu.",
      "settingsDataModel2HelpTitle": "Jak najdu ID webové mapy?",
      "settingsDataModel2HelpContent": "Překopírovat číslice po rovnítku (=) v URL webové mapy",
      "switchMaps": "Přepnout mapy",
      "browseWebMaps": "Procházet webové mapy"
    },
    "settingsLegend": {
      "settingsTabLegend": "Rozvržení aplikace",
      "settingsLegendExplain": "Vyberte nastavení rozvržení.",
      "settingsLegendEnable": "Povolit legendu",
      "settingsDescriptionEnable": "Povolit popis",
      "settingsBookmarksEnable": "Povolit série překrývání",
      "settingsPopupDisable": "Povolit vyskakovací okno",
      "settingsLocationSearchEnable": "Povolit vyhledávání lokátoru",
      "settingsGeolocatorEnable": "Povolit geolokátor",
      "settingsLegendHelpContent": "Chcete-li upravit obsah legendy, použijte tabulku obsahu prohlížeče webových map ArcGIS (Skrýt v legendě)",
      "settingsSeriesHelpContent": "Série překrývání je možnost navigace s pomocí karet, která diváka vede ke konkrétnímu rozsahu a zobrazí název a textový popis v postranním panelu. Během počáteční aktivace se importují záložky z webové mapy / webových map a použijí se k prvotnímu zaplnění lišty série. Zakázáním možnosti série lištu série vypnete, ale konfigurace série zůstane uložena pro budoucí použití.",
      "settingsSeriesHelpContent2": "Série překrývání vám umožní vytvořit a editovat výběr lokalit s připojenými nadpisy a textem. Pokud má vaše webová mapa záložky, budou zobrazeny. Sérii můžete zakázat, ale konfigurace bude uložena pro budoucí použití.",
      "settingsSeriesHelpLink": "Zde se podívejte na příklad aplikace se sérií překrývání",
      "preview": "Náhled uživatelského rozhraní",
      "settingsLocateButtonExplain": "Podporováno většinou prohlížečů. Zobrazuje se pouze, pokud se k mapě s příběhem přistupuje přes HTTPS. Nezobrazuje se, pokud je příběh vložený.",
      "settingsLocateButton": "Povolit tlačítko 'Lokalizovat' v podporovaných prohlížečích",
      "settingsAddressSearch": "Povolit nástroj pro vyhledávání adres"
    },
    "settingsSwipePopup": {
      "settingsSwipePopup": "Vyskakovací okno",
      "settingsSwipePopupExplain": "Přizpůsobte vzhled záhlaví vyskakovacích oken, aby si je uživatelé lépe spojili s mapovými vrstvami.",
      "settingsSwipePopupSwipe1": "Levá mapa",
      "settingsSwipePopupSwipe2": "Pravá mapa",
      "settingsSwipePopupGlass1": "Hlavní mapa",
      "settingsSwipePopupGlass2": "Mapa pro lupu",
      "settingsSwipePopupTitle": "Název záhlaví",
      "settingsSwipePopupColor": "Barva záhlaví"
    },
    "initPopup": {
      "initHeader": "Vítejte v nástroji pro tvorbu Překrývání/Lupy",
      "modalNext": "Další",
      "modalPrev": "Předchozí",
      "modalApply": "Otevřít aplikaci"
    },
    "seriesPanel": {
      "title": "Nadpis",
      "descr": "Popis",
      "discard": "Zrušit záložku",
      "saveExtent": "Nastavit rozsah záložky",
      "discardDisabled": "Tuto záložku nelze odstranit. Sérii překrývání můžete vypnout v nastavení."
    },
    "helpPopup": {
      "title": "Nápověda",
      "close": "Zavřít",
      "tab1": {
        "div1": "Šablona Překrývání/Lupa je navržena pro porovnání dvou různých webových map nebo dvou vrstev jedné webové mapy v atraktivní, snadno ovladatelné webové aplikaci, kterou lze použít v jakémkoli webovém prohlížeči na jakémkoli zařízení včetně chytrých telefonů a tabletů.",
        "div2": "Další informace o šabloně Překrývání/Lupa a příklady vytvořené komunitou <a href='https://storymaps.arcgis.com/en/app-list/swipe-spyglass/' target='_blank'> naleznete na webu Mapy s příběhem</a>. Můžete nás také sledovat na Twitteru na  <a href='https://twitter.com/EsriStoryMaps' target='_blank'>@EsriStoryMaps</a>.",
        "div3": "Rádi od vás uslyšíme! Ať už máte otázku, chcete požádat o novou funkci nebo si myslíte, že jste našli chybu, navštivte prosím <a href='http://links.esri.com/storymaps/forum' target='_blank'>uživatelské fórum map s příběhem</a>."
      }
    },
    "share": {
      "firstSaveTitle": "Příběh uložen",
      "manageStory": "Spravujte svůj příběh",
      "manageStoryA1": "Tip: Sekci %LINK1% můžete použít k vyhledání chyb ve vašem příběhu a změně způsobu sdílení jeho součástí. Sekce Moje příběhy také pomáhá vylepšit vzhled příběhu při sdílení na sociálních sítích. Více informací o dalších užitečných funkcích sekce Moje příběhy naleznete v těchto %LINK2%.",
      "manageStoryA1V1": "Moje příběhy",
      "manageStoryA1V2": "příspěvcích na blogu",
      "shareTitle": "Sdílejte svůj příběh",
      "sharePrivateHeader": "Váš příběh není sdílený, chcete ho sdílet?",
      "sharePrivateBtn1": "Sdílet veřejně",
      "sharePrivateBtn2": "Sdílet s mou organizací",
      "sharePrivateProgress": "Probíhá sdílení…",
      "sharePrivateErr": "Sdílení selhalo, zkuste to znovu nebo",
      "sharePrivateOk": "Sdílení aktualizováno, načítání…",
      "shareStatus1": "Příběh není uložen",
      "shareStatus2": "Příběh je veřejně sdílen",
      "shareStatus3": "Příběh je sdílen v rámci organizace",
      "shareStatus4": "Příběh není sdílen",
      "sharePreviewAsUser": "Náhled",
      "shareHeader1": "Váš příběh je <strong>veřejně přístupný</strong>.",
      "shareHeader2": "Váš příběh je přístupný členům vaší organizace (je vyžadováno přihlášení).",
      "shareLinkHeader": "Sdílejte svůj příběh",
      "shareLinkOpen": "OTEVŘENO",
      "learnMore": "Více informací",
      "shareA1": "Použijte %SHAREIMG% na <a href='%LINK1%' target='_blank'>stránce položek aplikace</a>. Pokud chcete také přestat sdílet webové mapy, použijte <a href='%LINK2%' target='_blank'>stránku položek webové mapy</a>.",
      "shareWarning": "Sdílení %WITH% bylo zakázáno, protože nejste vlastníkem <a href='%LINK%' target='_blank'>webové mapy</a>.",
      "shareWarningWith1": "veřejně",
      "shareWarningWith2": "veřejně a s organizací"
    },
    "directCreation": {
      "header": "Vítejte v nástroji pro tvorbu Překrývání/Lupy",
      "mapPickHeader": "Pro začátek zadejte platný identifikátor webové mapy nebo použijte tlačítko vyhledávání k procházení webových map.",
      "launchBuilder": "Spustit nástroj pro tvorbu",
      "chooseWebmapLbl": "Vybrat webovou mapu…",
      "explain2": "Chcete-li vytvořit mapu s příběhem Překrývání nebo Lupa, použijte tlačítko níže ke zvolení existující webové mapy, kterou chcete použít. Alternativně můžete zkopírovat ID této webové mapy do pole umístěného níže.",
      "explain3": "Chcete-li v mapě vyprávění používat dvě webové mapy, budete na druhou mapu dotázáni později při volbě takové možnosti.",
      "webmapPlaceholder": "Zadejte ID webové mapy…"
    },
    "saveErrorSocial": {
      "title": "Aktualizace sdílení na sociálních sítích",
      "panel1": "Vzhled vašeho příběhu na sociálních sítích byl aktualizován, název položky webové aplikace ArcGIS se však neshoduje s názvem vašeho příběhu.",
      "panel1tooltip": "Pokud definujete název, shrnutí a náhledový obrázek, váš příběh bude vypadat následovně:",
      "panel2": "Název, který chcete použít na sociálních sítích:",
      "panel2q1": "Název příběhu (doporučeno)",
      "panel2q1tooltip": "Pokud zvolíte tuto možnost, název položky se změní tak, aby se shodoval s názvem příběhu, a následující změny provedené v nástroji pro tvorbu se synchronizují.",
      "panel2q2": "Název položky",
      "panel3": "Chcete-li dále vylepšit vzhled příběhu na sociálních sítích, přejděte na ${MYSTORIES} a přidejte shrnutí a náhledový obrázek.",
      "panel4": "Příště již neupozorňovat u tohoto příběhu",
      "mystories": "Moje příběhy",
      "btnSave": "Uložit"
    }
  },
  "configure": {
    "mapdlg": {
      "items": {
        "organizationLabel": "Moje organizace",
        "onlineLabel": "ArcGIS Online",
        "contentLabel": "Můj obsah",
        "favoritesLabel": "Moje oblíbené"
      },
      "title": "Vybrat webovou mapu",
      "searchTitle": "Hledat",
      "ok": "OK",
      "cancel": "Storno",
      "placeholder": "Zadat vyhledávací výraz"
    }
  },
  "httpsTransitionNotification": {
    "s1h1": "Společnost Esri zvyšuje zabezpečení map s příběhem",
    "s1p1": "Vaše mapy s příběhem žijí na webu a webová komunita neustále pracuje na zajištění a implementaci lepší bezpečnosti. Protokol HTTPS, který poskytuje zabezpečené připojení pro obsah přenášený přes internet se stává standardním způsobem přístupu na web. Většina moderních prohlížečů nyní zobrazí varování, pokud se použije protokol HTTP místo HTTPS. Díky této rozvíjející se normě vám důrazně doporučujeme pro tvorbu a sdílení map s příběhem používat odkazy HTTPS a používat pouze adresy URL s protokolem HTTPS při vkládání webového obsahu či odkazů na snímky v mapách s příběhem.",
    "s1p2": "V praxi to znamená, že k mapě s příběhem a veškerému jejímu obsahu (včetně snímků, vrstev, vložených aplikací a webových stránek) by měly vést odkazy začínající na HTTPS místo HTTP. To zajistí maximální spokojenost vašich čtenářů, protože většina webových prohlížečů vaše příběhy označí jako bezpečné.",
    "s2h1": "Co mám udělat?",
    "s2p1": "Esri provádí kroky, aby to pro autory a čtenáře map s příběhem znamenalo hladký přechod. V nástrojích pro tvorbu map s příběhem a v sekci Moje příběhy jsou nyní k dispozici pomůcky, které vám umožní najít nezabezpečený obsah (HTTP) ve vašich příbězích a které vám poradí, jak postupovat dál. Zkontrolujte prosím zabezpečení svých příběhů a přejděte na protokol HTTPS co nejdříve.",
    "action1": "Zavřít",
    "action2": "Chci si prohlédnout svoje příběhy",
    "action3": "Více informací"
  },
  "embedBar": {
    "share": "Sdílet",
    "fullScreen": "Celá obrazovka",
    "enlarge": "Zvětšit",
    "newTab": "Otevřít na nové kartě.",
    "tagline": "Mapa s příběhem",
    "exitFullScreen": "Ukončit režim celé obrazovky"
  },
  "june2018SurveyMessage": {
    "bannerMsg": "Můžeme vám položit několik otázek? Pomůže nám to vytvořit budoucnost map s příběhem.",
    "s1h1": "Podělte se o své nápady, vytvářejte budoucnost.",
    "s1p1": "Váš ohlas je naším nejdůležitějším zdrojem zpětné vazby a více informací o vás nám pomůže mapy s příběhem dále vylepšovat. Velice bychom ocenili, kdybyste se mohli zúčastnit tohoto tříminutového průzkumu.",
    "s2p1": "A jako vždy, děkujeme vám za to, že používáte mapy s příběhem!",
    "action1": "Zavřít",
    "action2": "Provést průzkum"
  }
});