define(
	({
		viewer: {
			loading: {
				step1: "NAHRÁVÁNÍ APLIKACE",
				step2: "NAHRÁVÁNÍ DAT",
				step3: "INICIALIZACE",
				fail: "Nepodařilo se načíst nástroj překrývání.",
				loadBuilder: "PŘEPÍNÁNÍ DO REŽIMU TVORBY",
				failButton: "Zkusit znovu"
			},
			errors: {
				boxTitle: "Nastala chyba",
				portalSelf: "Závažná chyba: Nepodařilo se získat konfiguraci portálu.",
				invalidConfig: "Závažná chyba: Neplatná konfigurace",
				invalidConfigNoWebmap: "Závažná chyba: Neplatná konfigurace (není specifikována žádná webová mapa)",
				createMap: "Nelze vytvořit mapu",
				invalidApp: "Závažná chyba: Aplikaci nelze načíst",
				initMobile: "Vítejte ve webové aplikaci pro překrývání. Aplikace není nakonfigurována. Interaktivní nástroj pro tvorbu není podporován v mobilních zařízeních.",
				noBuilderIE8: "Interaktivní nástroj pro tvorbu překrývání není podporován v programu Internet Explorer verze nižší než 9.",
				noLayerView: "Vítejte ve webové aplikaci pro překrývání.<br />Aplikace zatím není nakonfigurována.",
				appSave: "Chyba při ukládání webové aplikace",
				mapSave: "Chyba při ukládání webové mapy",
				notAuthorized: "Nemáte oprávnění k přístupu do této aplikace.",
				conflictingProjectionsTitle: "Konfliktní projekce",
				conflictingProjections: "Překrývání nepodporuje používání dvou webových map s různými projekcemi. Otevřete nastavení a použijte webovou mapu, která využívá stejnou projekci jako první webová mapa.",
				cpButton: "Zavřít"
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
				bitlyTooltip: "Získejte krátký odkaz k aplikaci"
			}
		},
		builder: {
			builder: {
				panelHeader: "KONFIGURACE APLIKACE",
				buttonSave: "ULOŽIT",
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
				savingApplication: "Ukládání aplikace",
				saveSuccess: "Aplikace byla úspěšně uložena",
				saveError: "Ukládání se nezdařilo, zkuste to prosím znovu.",
				signIn: "Přihlaste se pomocí účtu na",
				signInTwo: "pro uložení aplikace."
			},
			header:{
				editMe: "Edituj mě !",
				templateTitle: "Nastavit název šablony",
				templateSubtitle: "Nastavit podnadpis šablony"
			},
			settings: {
				settingsHeader: "Nastavení aplikace",
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
				editMe: "Edituj mě !",
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
				settingsSaveConfirm: "Některé ze změn vyžadují uložení a opětovné spuštění aplikace"
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
				settingsDataModel2HelpContent: "Překopírovat číslice po rovnítku (=) v URL webové mapy"
			},
			settingsLegend: {
				settingsTabLegend: "Rozvržení aplikace",
				settingsLegendExplain: "Vyberte nastavení pro rozvržení aplikace.",
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
				settingsLocateButton: "Povolit tlačítko 'Hledat' v podporovaných prohlížečích",
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
				initHeader: "Vítá vás nástroj pro tvorbu překrývání.",
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
			}
		}
    })
);