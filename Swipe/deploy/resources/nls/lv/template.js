define(
	({
		viewer: {
			loading: {
				step1: "IELĀDĒ APLIKĀCIJU",
				step2: "IELĀDĒ DATUS",
				step3: "INICIALIZĒŠANA",
				fail: "Atvainojiet, Pārvilkt ielādēšana neizdevās",
				loadBuilder: "PĀRSLĒGT UZ BUILDER MODE",
				failButton: "Atkārtot"
			},
			errors: {
				boxTitle: "Kļūda",
				invalidConfig: "Fatāla kļūda: konfigurācijas neveiksme",
				invalidConfigNoWebmap: "Fatāla kļūda: konfigurācijas neveiksme (nav norādīta web karte)",
				createMap: "Nevar izveidot karti",
				invalidApp: "Fatāla kļūda: aplikāciju nevar ielādēt",
				initMobile: "Laipni lūdzam pārvilkšanas web aplikācijā. Aplikācija nav konfigurēta. Interaktīvais būvētājs netiek atbalstīta uz mobilajām ierīcēm.",
				noBuilderIE8: "Pārvilkt interaktīvais būvētājs neatbalsta Internet Explorer pirms 9 versiju.",
				noLayerView: "Laipni lūdzam Pārvilkt web aplikācijā.<br />Aplikācija vēl nav konfigurēta.",
				appSave: "Kļūda, saglabājot web aplikāciju",
				mapSave: "Kļūda, saglabājot web karti",
				notAuthorized: "Jums nav atļauts konfigurēt šo aplikāciju",
				conflictingProjectionsTitle: "Konfliktējošas projekcijas",
				conflictingProjections: "Pārvilkt neatbalsta divu web karšu ar dažādām projekcijām lietošanu. Lūdzu, atveriet iestatījumus un izmantojiet web karti, kas izmanto to pašu projekciju nekā pirmā web karte.",
				cpButton: "Aizvērt"
			},
			mobileView: {
				hideIntro: "PASLĒPT IEVADU",
				navLeft: "Leģenda",
				navMap: "Karte",
				navRight: "Dati"
			},
			desktopView: {
				storymapsText: "Stāstu karte",
				builderButton: "Pārslēgties uz veidotāja režīmu"
			}
		},
		builder: {
			builder: {
				panelHeader: "APLIKĀCIJAS KONFIGURĀCIJA",
				buttonSave: "SAGLABĀT",
				buttonDiscard: "ATCELT",
				buttonSettings: "Iestatījumi",
				buttonView: "Skata režīms",
				noPendingChange: "Nav neizpildītu izmaiņu",
				unSavedChangeSingular: "1 nesaglabāta izmaiņa",
				unSavedChangePlural: "nesaglabātas izmaiņas",
				popoverDiscard: "Vai esat pārliecināts, ka vēlaties izmest visas nesaglabātās izmaiņas?",
				yes: "Jā",
				no: "Nē",
				popoverOpenViewExplain: "Atverot skatītāju, jūs zaudēsiet visas nesaglabātās izmaiņas",
				popoverOpenViewOk: "Labi",
				popoverOpenViewCancel: "Atcelt",
				popoverSaveWhenDone: "Neaizmirstiet saglabāt, kad jūs pabeidzat",
				closeWithPendingChange: "Vai esat pārliecināts, ka vēlaties apstiprināt darbību? Jūsu izmaiņas tiks zaudētas.",
				gotIt: "Labi",
				savingApplication: "Saglabā aplikāciju",
				saveSuccess: "Aplikācija saglabāta veiksmīgi",
				saveError: "Saglabāt neizdevās, lūdzu, mēģiniet vēlreiz",
				signIn: "Lūdzu, pierakstieties kontā uz",
				signInTwo: "lai saglabātu aplikāciju."
			},
			header:{
				editMe: "Rediģē mani !",
				templateTitle: "Iestatīt šablona virsrakstu",
				templateSubtitle: "Iestatīt šablona apakšvirsrakstu"
			},
			settings: {
				settingsHeader: "Aplikācijas iestatījumi",
				modalCancel: "Atcelt",
				modalApply: "Lietot"
			},
			settingsColors: {
				settingsTabColor: "Tēma",
				settingsColorExplain: "Izvēlieties lietotņu tēmu vai definējiet savas krāsas.",
				settingsLabelColor: "Galvenes un sānu paneļa fona krāsas"
			},
			settingsHeader: {
				settingsTabLogo: "Galvene",
				settingsLogoExplain: "Pielāgot galvenes logotipu (maksimums  ir 250 x 50piks).",
				settingsLogoEsri: "Esri logotips",
				settingsLogoNone: "Nav logotipa",
				settingsLogoCustom: "Pielāgots logotips",
				settingsLogoCustomPlaceholder: "Attēla URL",
				settingsLogoCustomTargetPlaceholder: "Klikšķis caur saiti",
				settingsLogoSocialExplain: "Pielāgot galvenes labās augšējās saites.",
				settingsLogoSocialText: "Teksts",
				settingsLogoSocialLink: "Saite"
			},
			settingsExtent: {
				settingsTabExtent: "Pārklājums",
				settingsExtentExplain: "Izmantojot interaktīvo karti zemāk, iestatiet sākotnējo pārklājumu.",
				settingsExtentExplainBottom: "Jūsu definētais pārklājums modificēs web kartes sākotnējo pārklājumu.",
				settingsExtentDrawBtn: "Zīmēt jaunu pārklājumu",
				settingsExtentModifyBtn: "Rediģēt pašreizējo pārklājumu",
				settingsExtentApplyBtn: "Lietot galvenajā kartē"
			}
        },
		swipe: {
			mobileData: {
				noData: "Nav datu attēlošanai!",
				noDataExplain: "Pieskarieties kartei, lai izvēlētos elementu un atgriezieties šeit",
				noDataMap: "Nav datu par šo karti",
				noPopup: "Nav atrasti uznirstošie logi šim elementam"
			},
			mobileLegend: {
				noLegend: "Nav leģendas, ko parādīt."
			},
			swipeSidePanel: {
				editTooltip: "Iestatiet sānu paneļa aprakstu",
				editMe: "Rediģē mani !",
				legendTitle: "Leģenda"
			},
			infoWindow: {
				noFeature: "Nav datu, ko parādīt.",
				noFeatureExplain: "Pieskarieties kartei, lai izvēlētos elementu"
			},
			settingsLayout: {
				settingsTabLayout: "Pārvilkt stils",
				settingsLayoutExplain: "Izvēlieties stilu priekš rīka pārvilkt.",
				settingsLayoutSwipe: "Vertikāla josla",
				settingsLayoutSpyGlass: "Tālskatis",
				settingsLayoutSelected: "Izvēlētais izkārtojums",
				settingsLayoutSelect: "Izvēlieties šo izkārtojumu",
				settingsSaveConfirm: "Dažas no jūsu izmaiņām pieprasa saglabāt un pārlādēt aplikāciju"
			},
			settingsDataModel: {
				settingsTabDataModel: "Pārvilkt slānis",
				settingsDataModelExplainSwipe: "Izvēlieties slāni vai web karti, kas parādīsies un pazudīs ar pārvikšanu.",
				settingsDataModelExplainSwipe2: "",
				settingsDataModelExplainSpyGlass: "Izvēlieties slāni vai web karti, kas parādīsies tālskatī.",
				settingsDataModelOneMap: "Viena web karte, viens slānis",
				settingsDataModel1Explain: "Izvēlieties slāni, ko kontrolē pārvilkšanas rīks.",
				settingsDataModel1Warning: "Tikai Dinamikas, Mozaikas un Attēlu servisus var izmantot. Ja slānis ir paslēpts augšējos slāņos, pārvilkšanai nebūs nekādas ietekmes.",
				settingsDataModel1SpyGlassExplain: "Izvēlieties slāni, ko parādīt tālskata ietvaros.",
				settingsDataModelTwoMaps: "Divas web kartes",
				settingsDataModelLayerIds: "Web kartes slāņa ID",
				settingsDataModelSelected: "Izvēlieties tipu",
				settingsDataModelWebmapSwipeId1: "Labās web kartes ID",
				settingsDataModelWebmapSwipeId2: "Kreisās web kartes ID",
				settingsDataModelWebmapGlassId1: "Galvenās web kartes ID",
				settingsDataModelWebmapGlassId2: "Tālskata web kartes ID",
				settingsDataModelSelect: "Izvēlieties šo tipu",
				settingsDataModel2Explain: "Pārvilkt ar citu web karti.",
				settingsDataModel2SpyGlassExplain: "Atklāt citu web karti.",
				settingsDataModel2HelpTitle: "Kā atrast web kartes ID",
				settingsDataModel2HelpContent: "Kopēt un ielīmēt ciparus aiz "=" zīmes iekš URL no web kartes"
			},
			settingsLegend: {
				settingsTabLegend: "Lietotnes izkārtojums",
				settingsLegendExplain: "Izvēlieties aplikācijas izkārtojuma iestatījumus.",
				settingsLegendEnable: "Iespējot leģendu",
				settingsDescriptionEnable: "Iespējot aprakstu",
				settingsBookmarksEnable: "Iespējot sēriju Pārvilkt",
				settingsLegendHelpTitle: "Kā uzlabot leģendas saturu",
				settingsLegendHelpContent: "Izmantojiet ArcGIS.com web kartes skatītāja satura tabulu (Paslēpt leģendā)",
				preview: "Saskarnes priekšskatījums"
			},
			settingsSwipePopup: {
				settingsSwipePopup: "Uznirstošie logi",
				settingsSwipePopupExplain: "Pielāgot izskatu uznirstošā loga galvenē, lai palīdzētu lietotājam saistīt uznirstošā logu ar kartēm slāņiem.",
				settingsSwipePopupSwipe1: "Kreisā Karte",
				settingsSwipePopupSwipe2: "Labā Karte",
				settingsSwipePopupGlass1: "Galvenā Karte",
				settingsSwipePopupGlass2: "Tālskata Karte",
				settingsSwipePopupTitle: "Galvenes virsraksts",
				settingsSwipePopupColor: "Galvenes krāsa"
			},
			initPopup: {
				initHeader: "Laipni lūdzam Pārvilkt veidotājā",
				modalNext: "Nākošais",
				modalApply: "Atveriet lietotni"
			}
		}
    })
);