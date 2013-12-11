define(
	({
		viewer: {
			loading: {
				step1: "RAKENDUSE LAADIMINE",
				step2: "ANDMETE LAADIMINE",
				step3: "LÄHTESTAMINE",
				fail: "Vabandust, rullimisvahendi laadimine nurjus",
				loadBuilder: "VAHETA KOOSTAJA TÜÜP",
				failButton: "Proovi uuesti"
			},
			errors: {
				boxTitle: "Esines tõrge",
				portalSelf: "Totaalne viga: Portaali seadistuse hankimine nurjus",
				invalidConfig: "Totaalne viga: vigane konfiguratsioon",
				invalidConfigNoWebmap: "Totaalne viga: Vigane konfiguratsioon (ühtegi veebikaarti ei ole määratud)",
				createMap: "Võimetu koostama kaarti",
				invalidApp: "Totaalne viga: Rakendust ei saa laadida",
				initMobile: "Tere tulemast rullimise veebirakendusse. Antud rakendus ei ole seadistatud. Interaktiivne koostaja ei ole mobiilsetes seadmetes toetatud.",
				noBuilderIE8: "Rullimise interaktiivne koostaja ei ole toetatud Internet Explorer 9 eelse(te)s  versiooni(de)s.",
				noLayerView: "Tere tulemast rullimise veebirakendusse.<br />Antud rakendus ei ole veel seadistatud.",
				appSave: "Viga veebirakenduse salvestamisel",
				mapSave: "Viga veebikaardi salvestamisel",
				notAuthorized: "Te ei ole sellele rakendusele ligipääsuks autoriseeritud",
				conflictingProjectionsTitle: "Konfliktsed projektsioonid",
				conflictingProjections: "Rullimine ei ole toetatud kahe erineva projektsiooniga veebikaardil. Palun avage seaded ja kasutage veebikaarti, mis kasutab esimese kaardiga samasugust projektsiooni.",
				cpButton: "Sulge"
			},
			mobileView: {
				hideIntro: "PEIDA INTRO",
				navLeft: "Legend",
				navMap: "Kaart",
				navRight: "Andmed"
			},
			desktopView: {
				storymapsText: "Kaardilugu",
				builderButton: "Vaheta koostamise režiimile",
				bitlyTooltip: "Tekita kiirlink rakendusele"
			}
		},
		builder: {
			builder: {
				panelHeader: "RAKENDUSE KONFIGURATSIOON",
				buttonSave: "SALVESTA",
				buttonDiscard: "TÜHISTA",
				buttonSettings: "Seaded",
				buttonView: "Vaaterežiim",
				buttonItem: "Ava veebirakenduse sisu",
				noPendingChange: "Ühtegi muudatust ei ole ootel",
				unSavedChangeSingular: "1 mittesalvestatud muudatus",
				unSavedChangePlural: "mittesalvestatud muudatust",
				popoverDiscard: "Olete kindel, et soovite loobuda salvestamata muudatustest?",
				yes: "Jah",
				no: "Ei",
				popoverOpenViewExplain: "Kui avate sirvija, siis kaotate kõik salvestamata muudatused",
				popoverOpenViewOk: "Ok",
				popoverOpenViewCancel: "Tühista",
				popoverSaveWhenDone: "Ärge unustage salvestada, kui olete lõpetanud",
				closeWithPendingChange: "Olete kindel, et soovite tegevuse kinnitada? Teie tehtud muudatused võivad kaduma minna.",
				gotIt: "Ok",
				savingApplication: "Salvestan rakenduse",
				saveSuccess: "Rakenduse salvestamine õnnestus",
				saveError: "Salvestamine ebaõnnestus, palun proovi uuesti",
				signIn: "Palun logige konto kaudu sisse",
				signInTwo: ", et salvestada rakendus."
			},
			header:{
				editMe: "Muuda mind !",
				templateTitle: "Määra mallile pealkiri",
				templateSubtitle: "Määra mallile alampealkiri"
			},
			settings: {
				settingsHeader: "Rakenduse seaded",
				modalCancel: "Tühista",
				modalApply: "Kehtesta"
			},
			settingsColors: {
				settingsTabColor: "Teema",
				settingsColorExplain: "Vali apiga seotud teema või määra  värvid.",
				settingsLabelColor: "Päise ja küljepaneeli taustvärvid"
			},
			settingsHeader: {
				settingsTabLogo: "Päis",
				settingsLogoExplain: "Kohanda päise logo (maksimum on 250 x 50px).",
				settingsLogoEsri: "Esri logo",
				settingsLogoNone: "Logo puudub",
				settingsLogoCustom: "Valikuline logo",
				settingsLogoCustomPlaceholder: "Pildi URL",
				settingsLogoCustomTargetPlaceholder: "Kliki läbi lingi",
				settingsLogoSocialExplain: "Kohanda päist ülemise paremal pool asuva lingi kaudu.",
				settingsLogoSocialText: "Tekst",
				settingsLogoSocialLink: "Link",
				settingsLogoSocialDisabled: "See funktsionaalsus on administraatori poolt välja lülitatud"
			},
			settingsExtent: {
				settingsTabExtent: "Kuvaulatus",
				settingsExtentExplain: "Määra sisemine ulatus läbi alloleva interaktiivse kaardi.",
				settingsExtentExplainBottom: "Määratud ulatus muudab veebikaardi sisemist ulatust. Pange tähele, et kui teete rullimise seeriaid, siis ulatust ei kasutata.",
				settingsExtentDateLineError: "Ulatus ei saa ületada 180° pikkuskraadi",
				settingsExtentDateLineError2: "Viga ulatuse arvutamisel",
				settingsExtentDrawBtn: "Joonista uus ulatus",
				settingsExtentModifyBtn: "Muuda praegust ulatust",
				settingsExtentApplyBtn: "Kehtesta peamisele kaardile",
				settingsExtentUseMainMap: "Kasuta peamist kaardi ulatust"
			}
        },
		swipe: {
			mobileData: {
				noData: "Pole andmeid, mida kuvada!",
				noDataExplain: "Koputa kaardile, et valida objekt ning tule siia tagasi",
				noDataMap: "Sellel kaardil pole andmeid",
				noPopup: "Selle objekti kohta ei leitud hüpikakent"
			},
			mobileLegend: {
				noLegend: "Kuvamiseks puudub legend."
			},
			swipeSidePanel: {
				editTooltip: "Määra küljepaneeli kirjeldus",
				editMe: "Muuda mind !",
				legendTitle: "Legend"
			},
			infoWindow: {
				noFeature: "Pole andmeid, mida kuvada",
				noFeatureExplain: "Koputa kaardile, et valida objekt"
			},
			settingsLayout: {
				settingsTabLayout: "Rullimise stiil",
				settingsLayoutExplain: "Vali rullimisvahendi stiil.",
				settingsLayoutSwipe: "Vertikaalne riba",
				settingsLayoutSpyGlass: "Pikksilm",
				settingsLayoutSelected: "Valitud paigutus",
				settingsLayoutSelect: "Vali see paigutus",
				settingsSaveConfirm: "Mõned muudatustest eeldavad, et salvestad tööseisu ning avad rakenduse uuesti"
			},
			settingsDataModel: {
				settingsTabDataModel: "Rullitav tüüp",
				settingsDataModelExplainSwipe: "Mida kasutajad peaksid rullima?",
				settingsDataModelExplainSwipe2: "",
				settingsDataModelExplainSpyGlass: "Vali kiht või veebikaart, mis ilmub pikksilma.",
				settingsDataModelOneMap: "Kiht veebikaardil",
				settingsDataModel1Explain: "Vali kiht rullimiseks",
				settingsDataModel1Warning: "Rullimine ei mõju, kui vastav kiht on peidetud ülemiste kihtide alla.",
				settingsDataModel1SpyGlassExplain: "Vali kiht, mis ilmub pikksilma.",
				settingsDataModelTwoMaps: "Kaks veebikaarti",
				settingsDataModelLayerIds: "Veebikaardi kihi ID-d",
				settingsDataModelSelected: "Valitud tüüp",
				settingsDataModelWebmapSwipeId1: "Parempoolse veebikaardi ID",
				settingsDataModelWebmapSwipeId2: "Vasakpoolse veebikaardi ID",
				settingsDataModelWebmapGlassId1: "Peamise veebikaardi ID",
				settingsDataModelWebmapGlassId2: "Pikksilma veebikaardi ID",
				settingsDataModelSelect: "Vali see tüüp",
				settingsDataModel2Explain: "Rulli mõne teise veebikaardiga.",
				settingsDataModel2SpyGlassExplain: "Ilmu teises veebikaardis.",
				settingsDataModel2HelpTitle: "Kuidas leida veebikaardi ID-d?",
				settingsDataModel2HelpContent: "Kopeeri ja kleebi numbrid pärast \'=\' märki veebikaardi URL sisust"
			},
			settingsLegend: {
				settingsTabLegend: "Rakenduse paigutus",
				settingsLegendExplain: "Vali rakenduse paigutuse seaded.",
				settingsLegendEnable: "Lülita legend sisse",
				settingsDescriptionEnable: "Lülita kirjeldus sisse",
				settingsBookmarksEnable: "Võimalda rullimise seeriad",
				settingsPopupDisable: "Luba hüpikaken",
				settingsLocationSearchEnable: "Luba asukoha otsing",
				settingsGeolocatorEnable: "Luba geolokaator",
				settingsLegendHelpContent: "Legendi sisu täpsustamiseks kasuta ArcGIS.com veebikaardi akna kihtide loendit (peidetud legendi)",
				settingsSeriesHelpContent: "Rullimiste seeria on vahelehtedega navigeerimise valik, mis viib vaataja konkreetsele kuvaulatusele ja kuvab pealkirja ning kirjeldust külje paneelil. Algselt aktiveerimiseks imporditakse veebikaardi järjehoidjad ja kasutatakse seeriate lehe eelgenereerimiseks. Seeriate valiku keelamine lülitab välja ka seeriate riba, aga seeriate konfiguratsioon säilitatakse tulevikus kasutamiseks.", 
				settingsSeriesHelpContent2: "Vahetamise seeriad lubab teil luua ja muuta asukohtade selektsiooni koos vastavate pealkirjade ja tekstidega. Kui teie veebikaartidel on järjehoidjad, siis kuvatakse neid. Võite keelata seeriad, kuid konfiguratsioon säilitatakse võimalikuks kasutuseks tulevikuks.",
				settingsSeriesHelpLink: "Vaata vahetatavate seeriatega rakenduse näidet siit",
				preview: "UI vaade",
				settingsLocateButtonExplain: "Funktsionaalsus on toetatud enamustel nutiseadmetel ja töökoha brauserites (k.a Internet Explorer 9+).",
				settingsLocateButton: "Luba positsioneerimise nupp toetatud brauserites",
				settingsAddressSearch: "Luba aadressi otsimise tööriist"
			},
			settingsSwipePopup: {
				settingsSwipePopup: "Hüpikaken",
				settingsSwipePopupExplain: "Kohanda hüpikakende päise välimust, et hõlbustada kasutajal seostada hüpikaknaid kaartide kihtidega.",
				settingsSwipePopupSwipe1: "Vasakpoolne kaart",
				settingsSwipePopupSwipe2: "Parempoolne kaart",
				settingsSwipePopupGlass1: "Peamine kaart",
				settingsSwipePopupGlass2: "Pikksilma kaart",
				settingsSwipePopupTitle: "Päise pealkiri",
				settingsSwipePopupColor: "Päise värv"
			},
			initPopup: {
				initHeader: "Tere tulemast rullimise koostajasse",
				modalNext: "Järgmine",
				modalPrev: "Eelmine",
				modalApply: "Ava app"
			},
			seriesPanel: {
				title: "Pealkiri",
				descr: "Kirjeldus",
				discard: "Loobu järjehoidjast",
				saveExtent: "Määra järjehoidja ulatus",
				discardDisabled: "Te ei saa seda järjehoidjat eemaldada. Vahetamise seeriaid saab keelata seadetest."
			}
		}
    })
);