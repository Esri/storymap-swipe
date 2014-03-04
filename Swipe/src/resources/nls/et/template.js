define(
	({
		viewer: {
			loading: {
				step1: "RAKENDUSE LAADIMINE",
				step2: "ANDMETE LAADIMINE",
				step3: "LÄHTESTAMINE",
				fail: "Vabandust, rullimisvahendi laadimine nurjus",
				loadBuilder: "VAHETA KOOSTAJA TÜÜP",
				redirectSignIn: "SUUNAN ÜMBER SISSELOGIMISE LEHELE",
				redirectSignIn2: "(Teid suunatakse peale sisselogimist siia)",
				failButton: "Proovi uuesti"
			},
			errors: {
				boxTitle: "Esines tõrge",
				portalSelf: "Fataaltõrge: portaali seadistuse hankimine nurjus",
				invalidConfig: "Fataaltõrge: vigane konfiguratsioon",
				invalidConfigNoWebmap: "Fatalltõrge: vigane konfiguratsioon (ühtegi veebikaarti ei ole määratud)",
				createMap: "Võimetu koostama kaarti",
				invalidApp: "Fataaltõrge: rakendust ei saa laadida",
				initMobile: "Tere tulemast rullimise veebirakendusse. Antud rakendus ei ole seadistatud. Interaktiivne koostaja ei ole mobiilsetes seadmetes toetatud.",
				noBuilderIE8: "Rullimise interaktiivne koostaja ei ole toetatud Internet Explorer 9 eelse(te)s  versiooni(de)s.",
				noLayerView: "Tere tulemast rullimise veebirakendusse.<br />Antud rakendus ei ole veel seadistatud.",
				appSave: "Viga veebirakenduse salvestamisel",
				mapSave: "Viga veebikaardi salvestamisel",
				notAuthorized: "Teil ei ole luba sellele rakendusele juurde pääseda",
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
				buttonHelp: "Abi",
				buttonShare: "Jaga",
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
				saveError2: "Salvestamine nurjus vigase HTML-sildi tõttu nimes või kirjelduses",
				saveError3: "Pealkiri ei saa olla tühi",
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
				settingsLogoSocialDisabled: "See funktsioon on administraatori poolt välja lülitatud"
			},
			settingsExtent: {
				settingsTabExtent: "Kuvaulatus",
				settingsExtentExplain: "Määra sisemine ulatus läbi alloleva interaktiivse kaardi.",
				settingsExtentExplainBottom: "Määratud ulatus muudab veebikaardi sisemist ulatust. Pange tähele, et kui teete rullimise seeriaid, siis ulatust ei kasutata.",
				settingsExtentDateLineError: "Ulatus ei saa ületada 180ï¿½ pikkuskraadi",
				settingsExtentDateLineError2: "Ulatuse arvutamise viga",
				settingsExtentDrawBtn: "Joonista uus ulatus",
				settingsExtentModifyBtn: "Muuda praegust ulatust",
				settingsExtentApplyBtn: "Kehtesta peamisele kaardile",
				settingsExtentUseMainMap: "Kasuta peamist kaardiulatust"
			}
        },
		swipe: {
			mobileData: {
				noData: "Pole andmeid, mida kuvada!",
				noDataExplain: "Puuduta kaarti, et valida objekt ning tule siia tagasi",
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
				noFeatureExplain: "Objekti valimiseks puudutage kaarti"
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
				settingsDataModel2HelpContent: "Kopeeri ja kleebi numbrid pärast \'=\' märki veebikaardi URL sisust",
				switchMaps: "Vaheta kaarti",
				browseWebMaps: "Sirvi veebikaarte"
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
				settingsLocateButton: "Luba asukoha määramise nupp toetatud brauserites",
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
				initHeader: "Tere tulemast koosturisse Võrdlus/pikksilm",
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
			},
			helpPopup: {
				title: "Abi",
				close: "Sulge",
				tab1: {
					div1: "Mall Rullimine/pikksilm on loodud kahe erineva veebikaardi või ühe veebikaardi kahe kihi võrdlemiseks meeldivas ja lihtsasti kasutatavas veebirakenduses, mida saab kasutada mis tahes veebibrauseris ja seadmes, k.a nutitelefonides ja tahvelarvutites.",
					div2: "Lisateabe saamiseks malli Rullimine/pikksilm kohta (sh kasutajate loodud näidised) <a href='http://storymaps.arcgis.com/en/app-list/swipe/' target='_blank'> külastage kaardilugude veebisaiti</a>. Saate jälgida ka meie Twitteri kontot <a href='https://twitter.com/EsriStoryMaps' target='_blank'>@EsriStoryMaps</a>.",
					div3: "Ootame tagasisidet!  Kui teil on küsimusi, soovite küsida uue funktsiooni kohta või arvate, et olete leidnud vea, siis külastage meid <a href='http://links.esri.com/storymaps/forum' target='_blank'>Kaardilugude kasutajate foorumis</a>."
				}
			},
			share: {
				firstSaveTitle: "Rakendus on salvestatud",
				firstSaveHeader: "Teie rakendus on nüüd salvestatud ArcGIS Online\'i keskkonda. Lugege järgnevate korduma kippuvate küsimuste vastuseid.",
				firstSaveA1: "Kui te ei ole tuttav ArcGIS Online keskkonnaga või soovite otseteed redigeerimise liidesele, siis võite salvestada järgmise lingi: %LINK1%",
				firstSaveA1bis: "Rakenduse leiate samuti oma <a href='%LINK2%' target='_blank'>ArcGIS Online\'i sisu kaustast</a>.",
				firstSaveQ2: "Kas minu rakendus on jagatud?",
				firstSaveA2: "Hetkel pole teie rakendus jagatud. Selle jagamiseks kasutage nuppu JAGA.",
				shareTitle: "Rakenduse jagamine",
				sharePrivateHeader: "Teie rakendus pole jagatud, kas soovite selle jagada?",
				sharePrivateBtn1: "Jaga avalikult",
				sharePrivateBtn2: "Jaga oma organisatsiooniga",
				sharePrivateProgress: "Jagamine...",
				sharePrivateErr: "Jagamine ebaõnnestus, proovige uuesti või",
				sharePrivateOk: "Jagamine uuendatud edukalt, laadin...",
				shareStatus1: "Rakendus pole salvestatud",
				shareStatus2: "Rakendus on jagatud avalikult",
				shareStatus3: "Rakendus on jagatud organisatsiooniga",
				shareStatus4: "Rakendus pole jagatud",
				sharePreviewAsUser: "Eelvaade",
				shareHeader1: "Teie rakendus on <strong>avalikult kättesaadav</strong>.",
				shareHeader2: "Teie rakendus on kättesaadav organisatsiooni liikmetele (sisselogimine nõutud).",
				shareLinkHeader: "Jagage rakendust oma sihtrühmaga",
				shareLinkOpen: "AVA",
				learnMore: "Loe lähemalt",
				shareQ1Opt1: "Kuidas saan hoida rakenduse privaatsena?",
				shareQ1Opt2: "Kuidas saan hoida rakenduse privaatsena või jagada seda avalikult?",
				shareA1: "Kasutage nuppu %SHAREIMG% <a href='%LINK1%' target='_blank'>rakenduse üksuse lehel</a>. Kui soovite tühistada ka veebikaardi jagamise, siis kasutage <a href='%LINK2%' target='_blank'>veebikaardi üksuse lehte</a>.",
				shareA1bis: "Kui soovite jagamise eemaldada ka objektiteenuselt, kasutage <a href='%LINK1%' target='_blank'>objektiteenuse sisu lehte</a>.",
				shareQ2: "Kuidas saab rakendust hiljem muuta?",
				shareQ2bis: "Kuidas ma pääsen tagasi loomise liidesesse?",
				shareA2div1: "Salvestage ja taaskasutage järgnevat linki %LINK1% või kasutage <a href='%LINK2%' target='_blank'>rakenduse sisu lehte</a>.",
				shareA2div2: "Kui olete rakenduse omanikuna ArcGIS.com’i sisse logitud, sisaldab rakendus nuppu interaktiivse koosturi avamiseks.",				
				shareQ3: "Kuhu on andmed majutatud?",
				shareA3: "Rakenduse konfiguratsioon on salvestatud selles veebirakenduse üksuses</a>.",
				shareWarning: "%WITH% jagamine on keelatud, kuna te pole <a href='%LINK%' target='_blank'>veebikaardi</a> omanik.",
 				shareWarningWith1: "Avalikult",
 				shareWarningWith2: "Avalikult ja organisatsiooniga"
			},
			directCreation: {
				header: "Tere tulemast kasutama Rullimise/pikksilma koostajat",
				mapPickHeader: "Alustamiseks sisestage veebikaaardi id või kasutage otsingunuppu veebikaartide sirvimiseks.",
				launchBuilder: "Käivita koostur",
				chooseWebmapLbl: "Valige veebikaart...",
				explain2: "Rullimise või pikksilma kaardiloo loomiseks kasutage allolevat nuppu kasutatava olemasoleva ArcGIS Online\'i veebikaardi valimiseks. Teiseks võimaluseks on veebikaardi ID kleepimine allpool olevale väljale.",
				explain3: "Kui soovite kaardiloos kasutada kahte veebikaarti, siis küsitakse selle valiku valimisel hiljem teist veebikaarti.",
				webmapPlaceholder: "Sisestage kaardi id..."
			}
		},
		configure: {
			mapdlg:{
				items:{
					organizationLabel: "Minu organisatsioon",
					onlineLabel: "ArcGIS Online",
					contentLabel: "Minu sisu",
					favoritesLabel: "Minu lemmikud"
				},
				title: "Vali veebikaart",
				searchTitle: "Otsi",
				ok: "Ok",
				cancel: "Tühista",
				placeholder: "Sisestage otsingusõnad"
			}
		}
    })
);