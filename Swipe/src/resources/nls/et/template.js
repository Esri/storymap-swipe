define(
	({
		viewer: {
			loading: {
				step1: "RAKENDUSE LAADIMINE",
				step2: "ANDMETE LAADIMINE",
				step3: "LÄHTESTAMINE",
				fail: "Vabandust, svaipimise laadimine nurjus",
				loadBuilder: "VAHETA KOOSTAJA TÜÜP",
				failButton: "Proovi uuesti"
			},
			errors: {
				boxTitle: "Esines tõrge",
				invalidConfig: "Totaalne viga: vigane konfiguratsioon",
				invalidConfigNoWebmap: "Totaalne viga: Vigane konfiguratsioon (ühtegi veebikaarti ei ole määratud)",
				createMap: "Võimetu koostama kaarti",
				invalidApp: "Totaalne viga: Rakendust ei saa laadida",
				initMobile: "Tere tulemast svaipimise veebirakendusse. Antud rakendus ei ole seadistatud. Interaktiivne koostaja ei ole mobiilsetes seadmetes toetatud.",
				noBuilderIE8: "Svaipimise interaktiivne koostaja ei ole toetatud Internet Explorer 9 eelse(te)s  versiooni(de)s.",
				noLayerView: "Tere tulemast svaipimise veebirakendusse.<br />Antud rakendus ei ole veel seadistatud.",
				appSave: "Viga veebirakenduse salvestamisel",
				mapSave: "Viga veebikaardi salvestamisel",
				notAuthorized: "Te ei ole selle rakenduse konfigureerimiseks autoriseeritud",
				conflictingProjectionsTitle: "Konfliktsed projektsioonid",
				conflictingProjections: "Svaipimine ei ole toetatud kahe erineva projektsiooniga veebikaardil. Palun avage seaded ja kasutage veebikaarti, mis kasutab esimese kaardiga samasugust projektsiooni.",
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
				builderButton: "Vaheta koostamise režiimile"
			}
		},
		builder: {
			builder: {
				panelHeader: "RAKENDUSE KONFIGURATSIOON",
				buttonSave: "SALVESTA",
				buttonDiscard: "TÜHISTA",
				buttonSettings: "Seaded",
				buttonView: "Vaaterežiim",
				noPendingChange: "Ühtegi muudatust ei ole ootel",
				unSavedChangeSingular: "1 mittesalvestatud muudatus",
				unSavedChangePlural: "mittesalvestatud muudatused",
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
				settingsColorExplain: "Vali appi teema või määra enda värvid.",
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
				settingsLogoSocialLink: "Link"
			},
			settingsExtent: {
				settingsTabExtent: "Kuvaulatus",
				settingsExtentExplain: "Määra sisemine ulatus läbi alloleva interaktiivse kaardi.",
				settingsExtentExplainBottom: "Ulatus, mille määrad, muudab Teie veebikaardi sisemist ulatust.",
				settingsExtentDrawBtn: "Joonista uus ulatus",
				settingsExtentModifyBtn: "Muuda praegust ulatust",
				settingsExtentApplyBtn: "Kehtesta peamisele kaardile"
			}
        },
		swipe: {
			mobileData: {
				noData: "Pole andmeid, mida kuvada!",
				noDataExplain: "Koputage kaardile, et valida objekt ning tulge siia tagasi",
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
				noFeatureExplain: "Koputage kaardile, et valida objekt"
			},
			settingsLayout: {
				settingsTabLayout: "Svaipimise stiil",
				settingsLayoutExplain: "Vali svaipimise töövahendi stiil.",
				settingsLayoutSwipe: "Vertikaalne riba",
				settingsLayoutSpyGlass: "Pikksilm",
				settingsLayoutSelected: "Valitud kujundus",
				settingsLayoutSelect: "Vali see kujundus",
				settingsSaveConfirm: "Mõned Teie muudatustest eeldavad, et salvestate tööseisu ning avate rakenduse uuesti"
			},
			settingsDataModel: {
				settingsTabDataModel: "Svaipimise kiht",
				settingsDataModelExplainSwipe: "Vali kiht või veebikaart, mis ilmub ja kaob koos svaipimisega.",
				settingsDataModelExplainSwipe2: "",
				settingsDataModelExplainSpyGlass: "Vali kiht või veebikaart, mis ilmub pikksilma.",
				settingsDataModelOneMap: "Üks veebikaart, üks kiht",
				settingsDataModel1Explain: "Vali kiht, mis on kontrollitud svaipimise tööriista poolt.",
				settingsDataModel1Warning: "Kasutatavad on ainult dünaamilise soisuga, pildiüksuste ja piltide teenused. Svaipimine ei oma efekti, kui vastav kiht on peidetud ülemiste kihtide  alla.",
				settingsDataModel1SpyGlassExplain: "Vali kiht, mis ilmub pikksilma.",
				settingsDataModelTwoMaps: "Kaks veebikaarti",
				settingsDataModelLayerIds: "Veebikaardi kihi ID-d",
				settingsDataModelSelected: "Valitud tüüp",
				settingsDataModelWebmapSwipeId1: "Parempoolse veebikaardi ID",
				settingsDataModelWebmapSwipeId2: "Vasakpoolse veebikaardi ID",
				settingsDataModelWebmapGlassId1: "Peamise veebikaardi ID",
				settingsDataModelWebmapGlassId2: "Pikksilma veebikaardi ID",
				settingsDataModelSelect: "Vali see tüüp",
				settingsDataModel2Explain: "Svaibi mõne teise veebikaardiga.",
				settingsDataModel2SpyGlassExplain: "Ilmu teises veebikaardis.",
				settingsDataModel2HelpTitle: "Kuidas leida veebikaardi ID-d",
				settingsDataModel2HelpContent: "Kopeeri ja kleebi numbrid pärast '=' märki veebikaardi URL sisust"
			},
			settingsLegend: {
				settingsTabLegend: "Appi paigutus",
				settingsLegendExplain: "Vali rakenduse paigutuse seaded.",
				settingsLegendEnable: "Lülita legend sisse",
				settingsDescriptionEnable: "Lülita kirjeldus sisse",
				settingsBookmarksEnable: "Võimalda svaipimise seeriad",
				settingsLegendHelpTitle: "Kuidas täiustada legendi sisu",
				settingsLegendHelpContent: "Kasuta ArcGIS.com veebikaardi akna kihtide loendit (peida legendis)",
				preview: "UI vaade"
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
				initHeader: "Tere tulemast svaipimise koostajasse",
				modalNext: "Järgmine",
				modalApply: "Ava app"
			}
		}
    })
);