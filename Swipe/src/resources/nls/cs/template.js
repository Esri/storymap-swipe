define(
	 ({
		viewer: {
			loading: {
				step1: "NAČÍTÁNÍ PŘÍBĚHU",
				step2: "NAHRÁVÁNÍ DAT",
				step3: "INICIALIZACE",
				fail: "Nepodařilo se načíst nástroj překrývání.",
				loadBuilder: "PŘEPÍNÁNÍ DO REŽIMU TVORBY",
				redirectSignIn: "PROBÍHÁ PŘESMĚROVÁNÍ NA PŘIHLAŠOVACÍ STRÁNKU",
				redirectSignIn2: "(budete sem přesměrováni po přihlášení)",
				failButton: "Zkusit znovu"
			},
			errors: {
				boxTitle: "Nastala chyba",
				portalSelf: "Závažná chyba: Nepodařilo se získat konfiguraci portálu.",
				invalidConfig: "Závažná chyba: Neplatná konfigurace",
				invalidConfigNoWebmap: "Závažná chyba: Neplatná konfigurace (není specifikována žádná webová mapa)",
				createMap: "Nelze vytvořit mapu",
				invalidApp: "Závažná chyba: Příběh nelze načíst",
				initMobile: "Vítejte ve webové aplikaci pro překrývání. Aplikace není nakonfigurována. Interaktivní nástroj pro tvorbu není podporován v mobilních zařízeních.",
				initMobile2: "Nástroj pro tvorbu překrývání není v této velikosti zobrazení podporován.",
				noBuilderIE8: "Interaktivní nástroj pro tvorbu překrývání není podporován v programu Internet Explorer verze nižší než 9.",
				noLayerView: "Vítejte ve webové aplikaci pro překrývání.<br />Aplikace zatím není nakonfigurována.",
				appSave: "Chyba při ukládání webového příběhu",
				mapSave: "Chyba při ukládání webové mapy",
				notAuthorized: "Nejste oprávněni přistupovat k tomuto příběhu",
				conflictingProjectionsTitle: "Konfliktní projekce",
				conflictingProjections: "Překrývání nepodporuje používání dvou webových map s různými projekcemi. Otevřete nastavení a použijte webovou mapu, která využívá stejnou projekci jako první webová mapa.",
				cpButton: "Zavřít",
				unspecifiedConfigOwner: "Nebyl nakonfigurován autorizovaný vlastník.",
				invalidConfigOwner: "Vlastník příběhu není autorizován."
			},
			mobileView: {
				hideIntro: "SKRÝT ÚVOD",
				navLeft: "Legenda",
				navMap: "Mapa",
				navRight: "Data"
			},
			desktopView: {
				storymapsText: "Mapa s příběhem",
				builderButton: "Přepnout do režimu tvorby",
				facebookTooltip: "Sdílet na Facebooku",
				twitterTooltip: "Sdílet na Twitteru",
				bitlyTooltip: "Získat krátký odkaz"
			}
		},
		builder: {
			builder: {
				panelHeader: "KONFIGURACE PŘÍBĚHU",
				buttonSave: "ULOŽIT",
				buttonHelp: "Nápověda",
				buttonShare: "Sdílet",
				buttonDiscard: "ZRUŠIT",
				buttonSettings: "Nastavení",
				buttonView: "Režim prohlížení",
				buttonItem: "Otevřít položku webové aplikace",
				noPendingChange: "Žádná neuložená změna",
				unSavedChangeSingular: "1 neuložená změna",
				unSavedChangePlural: "neuložených změn",
				popoverDiscard: "Určitě chcete přijít o všechny neuložené změny?",
				yes: "Ano",
				no: "Ne",
				popoverOpenViewExplain: "Otevřením tohoto prohlížeče přijdete o všechny neuložené změny.",
				popoverOpenViewOk: "OK",
				popoverOpenViewCancel: "Storno",
				popoverSaveWhenDone: "Až budete hotovi, nezapomeňte provedené změny uložit.",
				closeWithPendingChange: "Určitě chcete potvrdit tuto akci? Změny se neuloží.",
				gotIt: "OK",
				savingApplication: "Ukládání příběhu",
				saveSuccess: "Příběh byl úspěšně uložen",
				saveError: "Ukládání se nezdařilo, zkuste to znovu.",
				saveError2: "Ukládání selhalo kvůli neplatnému HTML tagu v názvu nebo popisu.",
				saveError3: "Název nesmí být prázdný",
				signIn: "Přihlaste se pomocí účtu na",
				signInTwo: "pro uložení příběhu."
			},
			header:{
				editMe: "Edituj mě!",
				templateTitle: "Nastavit název šablony",
				templateSubtitle: "Nastavit podnadpis šablony"
			},
			settings: {
				settingsHeader: "Nastavení příběhu",
				modalCancel: "Storno",
				modalApply: "Použít"
			},
			settingsColors: {
				settingsTabColor: "Motiv",
				settingsColorExplain: "Vyberte motiv aplikace nebo vyberte vlastní barvy.",
				settingsLabelColor: "Barvy pozadí postranního panelu a záhlaví"
			},
			settingsHeader: {
				settingsTabLogo: "Záhlaví",
				settingsLogoExplain: "Přizpůsobte logo v záhlaví (maximum je 250×50 px).",
				settingsLogoEsri: "Logo Esri",
				settingsLogoNone: "Bez loga",
				settingsLogoCustom: "Vlastní logo",
				settingsLogoCustomPlaceholder: "URL obrázku",
				settingsLogoCustomTargetPlaceholder: "Odkaz při kliknutí na obrázek",
				settingsLogoSocialExplain: "Přizpůsobte odkaz v pravé horní části záhlaví.",
				settingsLogoSocialText: "Text",
				settingsLogoSocialLink: "Odkaz",
				settingsLogoSocialDisabled: "Tato funkce byla zakázána administrátorem."
			},
			settingsExtent: {
				settingsTabExtent: "Rozsah",
				settingsExtentExplain: "Prostřednictvím následující interaktivní mapy nastavte výchozí rozsah.",
				settingsExtentExplainBottom: "Podle zadaného rozsahu se upraví výchozí rozsah webové mapy. Vytváříte-li sérii překrývání, tento rozsah se nepoužije.",
				settingsExtentDateLineError: "Rozsah nesmí přesahovat 180° zeměpisné délky",
				settingsExtentDateLineError2: "Při výpočtu rozsahu došlo k chybě",
				settingsExtentDrawBtn: "Určit nový rozsah",
				settingsExtentModifyBtn: "Editovat aktuální rozsah",
				settingsExtentApplyBtn: "Použít v hlavní mapě",
				settingsExtentUseMainMap: "Použít rozsah hlavní mapy"
			}
        },
		swipe: {
			mobileData: {
				noData: "Žádná data k zobrazení",
				noDataExplain: "Po klepnutí na mapu vyberte prvek a vraťte se sem",
				noDataMap: "Žádná data pro tuto mapu",
				noPopup: "Vyskakovací okno pro tento prvek nenalezeno"
			},
			mobileLegend: {
				noLegend: "Žádná legenda k zobrazení."
			},
			swipeSidePanel: {
				editTooltip: "Nastavit popis postranního panelu",
				editMe: "Edituj mě!",
				legendTitle: "Legenda"
			},
			infoWindow: {
				noFeature: "Žádná data k zobrazení",
				noFeatureExplain: "Klepnutím na mapu vyberete prvek"
			},
			settingsLayout: {
				settingsTabLayout: "Styl překrývání",
				settingsLayoutExplain: "Vyberte styl pro nástroj překrývání.",
				settingsLayoutSwipe: "Svislý sloupec",
				settingsLayoutSpyGlass: "Lupa",
				settingsLayoutSelected: "Vybrané rozvržení",
				settingsLayoutSelect: "Vybrat toto rozvržení",
				settingsSaveConfirm: "Některé ze změn vyžadují uložení a opětovné spuštění příběhu"
			},
			settingsDataModel: {
				settingsTabDataModel: "Typ překrývání",
				settingsDataModelExplainSwipe: "Co chcete, aby uživatelé překrývali?",
				settingsDataModelExplainSwipe2: "",
				settingsDataModelExplainSpyGlass: "Vyberte vrstvu nebo webovou mapu, která se zobrazí v lupě.",
				settingsDataModelOneMap: "Vrstva ve webové mapě",
				settingsDataModel1Explain: "Vyberte vrstvu, kterou chcete překrýt",
				settingsDataModel1Warning: "Pokud je vrstva zakrytá svrchnějšími vrstvami, překrývání se nijak neprojeví.",
				settingsDataModel1SpyGlassExplain: "Vyberte vrstvu, která se zobrazí v lupě.",
				settingsDataModelTwoMaps: "Dvě webové mapy",
				settingsDataModelLayerIds: "Identifikátory vrstev webové mapy",
				settingsDataModelSelected: "Vybraný typ",
				settingsDataModelWebmapSwipeId1: "Identifikátor pravé webové mapy",
				settingsDataModelWebmapSwipeId2: "Identifikátor levé webové mapy",
				settingsDataModelWebmapGlassId1: "Identifikátor hlavní webové mapy",
				settingsDataModelWebmapGlassId2: "Identifikátor webové mapy pro dalekohled",
				settingsDataModelSelect: "Vybrat tento typ",
				settingsDataModel2Explain: "Proveďte překrytí jinou webovou mapou.",
				settingsDataModel2SpyGlassExplain: "Odkryjte jinou webovou mapu.",
				settingsDataModel2HelpTitle: "Jak najdu ID webové mapy?",
				settingsDataModel2HelpContent: "Překopírovat číslice po rovnítku (=) v URL webové mapy",
				switchMaps: "Přepnout mapy",
				browseWebMaps: "Procházet webové mapy"
			},
			settingsLegend: {
				settingsTabLegend: "Rozvržení aplikace",
				settingsLegendExplain: "Vyberte nastavení rozvržení.",
				settingsLegendEnable: "Povolit legendu",
				settingsDescriptionEnable: "Povolit popis",
				settingsBookmarksEnable: "Povolit série překrývání",
				settingsPopupDisable: "Povolit vyskakovací okna",
				settingsLocationSearchEnable: "Povolit vyhledávání lokátoru",
				settingsGeolocatorEnable: "Povolit geolokátor",
				settingsLegendHelpContent: "Chcete-li doplnit obsah legendy, použijte obsah prohlížeče webových map ArcGIS.com (Skrýt v legendě)",
				settingsSeriesHelpContent: "Série překrývání je možnost navigace s pomocí karet, která diváka vede ke konkrétnímu rozsahu a zobrazí název a textový popis v postranním panelu. Během počáteční aktivace se importují záložky z webové mapy / webových map a použijí se k prvotnímu zaplnění lišty série. Zakázáním možnosti série lištu série vypnete, ale konfigurace série zůstane uložena pro budoucí použití.",
				settingsSeriesHelpContent2: "Série překrývání vám umožní vytvořit a editovat výběr lokalit s připojenými nadpisy a textem. Pokud má vaše webová mapa záložky, budou zobrazeny. Sérii můžete zakázat, ale konfigurace bude uložena pro budoucí použití.",
				settingsSeriesHelpLink: "Zde se podívejte na příklad aplikace se sérií překrývání",
				preview: "Náhled uživatelského rozhraní",
				settingsLocateButtonExplain: "Tato funkcionalita je podporována na většině mobilních zařízení a stolních prohlížečů (včetně Internet Explorer 9+).",
				settingsLocateButton: "Povolit tlačítko \'Lokalizovat\' v podporovaných prohlížečích",
				settingsAddressSearch: "Povolit nástroj pro vyhledávání adres"
			},
			settingsSwipePopup: {
				settingsSwipePopup: "Vyskakovací okno",
				settingsSwipePopupExplain: "Přizpůsobte vzhled záhlaví vyskakovacích oken, aby si je uživatelé lépe spojili s mapovými vrstvami.",
				settingsSwipePopupSwipe1: "Levá mapa",
				settingsSwipePopupSwipe2: "Pravá mapa",
				settingsSwipePopupGlass1: "Hlavní mapa",
				settingsSwipePopupGlass2: "Mapa pro lupu",
				settingsSwipePopupTitle: "Název záhlaví",
				settingsSwipePopupColor: "Barva záhlaví"
			},
			initPopup: {
				initHeader: "Vítejte v nástroji pro tvorbu Překrývání/Lupy",
				modalNext: "Další",
				modalPrev: "Předchozí",
				modalApply: "Otevřít aplikaci"
			},
			seriesPanel: {
				title: "Nadpis",
				descr: "Popis",
				discard: "Zrušit záložku",
				saveExtent: "Nastavit rozsah záložky",
				discardDisabled: "Tuto záložku nelze odstranit. Sérii překrývání můžete vypnout v nastavení."
			},
			helpPopup: {
				title: "Nápověda",
				close: "Zavřít",
				tab1: {
					div1: "Šablona Překrývání/Lupa je navržena pro porovnání dvou různých webových map nebo dvou vrstev jedné webové mapy v atraktivní, snadno ovladatelné webové aplikaci, kterou lze použít v jakémkoli webovém prohlížeči na jakémkoli zařízení včetně chytrých telefonů a tabletů.",
					div2: "Pro více informací o šabloně Překrývání/Lupa a příklady vytvořené komunitou <a href='http://storymaps.arcgis.com/en/app-list/swipe/' target='_blank'> navštivte stránku Mapy s příběhem</a>. Můžete nás také sledovat na Twitteru na <a href='https://twitter.com/EsriStoryMaps' target='_blank'>@EsriStoryMaps</a>.",
					div3: "Rádi od vás uslyšíme! Ať už máte otázku, chcete požádat o novou funkci nebo si myslíte, že jste našli chybu, navštivte prosím <a href='http://links.esri.com/storymaps/forum' target='_blank'>uživatelské fórum map s příběhem</a>."
				}
			},
			share: {
				firstSaveTitle: "Příběh byl úspěšně uložen",
				firstSaveHeader: "Váš příběh je nyní uložen v ArcGIS Online. Přečtěte si prosím následující odpovědi na časté dotazy.",
				firstSaveA1: "Pokud nejste obeznámeni s ArcGIS Online nebo chcete zkratku pro přístup do autorského rozhraní, můžete si uložit následující odkaz: %LINK1%",
				firstSaveA1bis: "Příběh naleznete i ve své <a href=\'%LINK2%\' target=\'_blank\'>složce s obsahem ArcGIS Online</a>.",
				firstSaveQ2: "Je můj příběh sdílený?",
				firstSaveA2: "Váš příběh momentálně není sdílený. Chcete-li ho sdílet, použijte tlačítko SDÍLET.",
				shareTitle: "Sdílejte svůj příběh",
				sharePrivateHeader: "Váš příběh není sdílený, chcete ho sdílet?",
				sharePrivateBtn1: "Sdílet veřejně",
				sharePrivateBtn2: "Sdílet s mou organizací",
				sharePrivateProgress: "Probíhá sdílení…",
				sharePrivateErr: "Sdílení selhalo, zkuste to znovu nebo",
				sharePrivateOk: "Sdílení bylo úspěšně aktualizováno, probíhá nahrávání…",
				shareStatus1: "Příběh není uložen",
				shareStatus2: "Příběh je veřejně sdílen",
				shareStatus3: "Příběh je sdílen v rámci organizace",
				shareStatus4: "Příběh není sdílen",
				sharePreviewAsUser: "Náhled",
				shareHeader1: "Váš příběh je <strong>veřejně přístupný</strong>.",
				shareHeader2: "Váš příběh je přístupný členům vaší organizace (je vyžadováno přihlášení).",
				shareLinkHeader: "Sdílejte příběh se svým publikem",
				shareLinkOpen: "OTEVŘENO",
				learnMore: "Více informací",
				shareQ1Opt1: "Jak lze příběh ponechat jako soukromý?",
				shareQ1Opt2: "Jak lze příběh ponechat jako soukromý nebo ho veřejně sdílet?",
				shareA1: "Použijte %SHAREIMG% na <a href='%LINK1%' target='_blank'>stránce položek aplikace</a>. Pokud chcete také přestat sdílet webové mapy, použijte <a href='%LINK2%' target='_blank'>stránku položek webové mapy</a>.",
				shareA1bis: "Pokud chcete také zrušit sdílení služby Feature Service, použijte <a href='%LINK1%' target='_blank'>stránku položek služby Feature Service</a>.",
				shareQ2: "Jak lze příběh později upravit?",
				shareQ2bis: "Jak se vrátím do autorského rozhraní?",
				shareA2div1: "Uložte si pro budoucí použití tento odkaz %LINK1% nebo použijte <a href=\'%LINK2%\' target=\'_blank\'>stránku položek příběhu</a>.",
				shareA2div2: "Když jste na webu ArcGIS.com přihlášeni jako majitel příběhu, příběh obsahuje tlačítko pro otevření interaktivního nástroje pro tvorbu:",
				shareQ3: "Kde jsou uložena data?",
				shareA3: "Konfigurace příběhu je uložena v této položce webové aplikace</a>.",
				shareWarning: "Sdílení %WITH% bylo zakázáno, protože nejste vlastníkem <a href='%LINK%' target='_blank'>webové mapy</a>.",
 				shareWarningWith1: "veřejně",
 				shareWarningWith2: "veřejně a s organizací"
			},
			directCreation: {
				header: "Vítejte v nástroji pro tvorbu Překrývání/Lupy",
				mapPickHeader: "Pro začátek zadejte platný identifikátor webové mapy nebo použijte tlačítko vyhledávání k procházení webových map.",
				launchBuilder: "Spustit nástroj pro tvorbu",
				chooseWebmapLbl: "Vybrat webovou mapu…",
				explain2: "Chcete-li vytvořit mapu vyprávění s překrýváním nebo lupou, vyberte pomocí níže umístěného tlačítka existující webovou mapu ArcGIS Online, kterou chcete použít. Případně můžete do níže umístěného pole vložit ID této webové mapy.",
				explain3: "Chcete-li v mapě vyprávění používat dvě webové mapy, budete na druhou mapu dotázáni později při volbě takové možnosti.",
				webmapPlaceholder: "Zadejte ID webové mapy…"
			}
		},
		configure: {
			mapdlg:{
				items:{
					organizationLabel: "Moje organizace",
					onlineLabel: "ArcGIS Online",
					contentLabel: "Můj obsah",
					favoritesLabel: "Moje oblíbené"
				},
				title: "Vybrat webovou mapu",
				searchTitle: "Hledat",
				ok: "OK",
				cancel: "Storno",
				placeholder: "Zadat vyhledávací výraz"
			}
		}
    })
);
