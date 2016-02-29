define(
	 ({
		viewer: {
			loading: {
				step1: "LOO LAADIMINE",
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
				portalSelf: "Fataalne viga: portaali seadistuse hankimine nurjus",
				invalidConfig: "Fataalne viga: vigane konfiguratsioon",
				invalidConfigNoWebmap: "Pöördumatu tõrge: vigane konfiguratsioon (veebikaarti või rakenduse identifikaatorit pole failis index.html määratud)",
				invalidConfigNoAppDev: "Veebikaardi rakenduse identifikaatorit ega veebikaarti pole URL-i parameetrites (?appid= or ?webmap=) määratud. Faili index.html AppID ja veebikaardi konfiguratsioon on arendusrežiimis ignoreeritud.",
				createMap: "Võimetu koostama kaarti",
				invalidApp: "Pöördumatu tõrge. Lugu ei saa laadida",
				initMobile: "Tere tulemast rullimise veebirakendusse. Antud rakendus ei ole seadistatud. Interaktiivne koostaja ei ole mobiilsetes seadmetes toetatud.",
				initMobile2: "Selle kuvasuuruse korral rullimise koosturit ei toetata. Võimaluse korral muutke koosturile juurdepääsemiseks oma brauseri suurust või looge oma lugu suurema ekraaniga seadmes.",
				initMobile3: "Rullimise koosturi kasutamiseks pöörake oma seadet ja kasutage horisontaalpaigutust.",
				noBuilderIE8: "Rullimise interaktiivne koostaja ei ole toetatud Internet Explorer 9 eelse(te)s  versiooni(de)s.",
				noLayerView: "Tere tulemast rullimise veebirakendusse.<br />Antud rakendus ei ole veel seadistatud.",
				appSave: "Tõrge veebiloo salvestamisel",
				mapSave: "Viga veebikaardi salvestamisel",
				notAuthorized: "Teil puudub õigus sellele loole juurde pääseda",
				notAuthorizedBuilder: "Teil pole õigust rullimise ja pikksilma koosturit kasutada.",
				conflictingProjectionsTitle: "Konfliktsed projektsioonid",
				conflictingProjections: "Rullimisel ei toetata kahe erineva projektsiooniga veebikaardi kasutamist. Avage seaded ja kasutage veebikaarti, mis kasutab samasugust projektsiooni nagu esimene kaart.",
				cpButton: "Sulge",
				unspecifiedConfigOwner: "Omanikuõigusi pole määratud.",
				invalidConfigOwner: "Loo omanikul puuduvad õigused."
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
				facebookTooltip: "Jaga Facebookis",
				twitterTooltip: "Jaga Twitteris",
				bitlyTooltip: "Hangi lühike link",
				tooltipAutoplayDisabled: "See pole automaatesituse režiimis saadaval",
				autoplayLabel: "Automaatesituse režiim",
				autoplayExplain1: "Automaatesituse režiimis keritakse teie lugu kindla ajavahemiku järel edasi. Seda on hea kasutada kioskite või avalike kohtade ekraanidel, kuid arvestage, et muudel juhtudel võib see raskendada teie loo lugemist. See funktsioon pole väikestel ekraanidel toetatud.",
				autoplayExplain2: "Kui see režiim on aktiveeritud, saate kasutada loo esitamise või peatamise ja liikumiskiiruse reguleerimise juhtelemente."
			}
		},
		builder: {
			builder: {
				panelHeader: "LOO KONFIGUREERIMINE",
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
				savingApplication: "Loo salvestamine",
				saveSuccess: "Lugu on salvestatud",
				saveError: "Salvestamine ebaõnnestus, palun proovi uuesti",
				saveError2: "Salvestamine nurjus vigase HTML-märgendi tõttu nimes või kirjelduses",
				saveError3: "Pealkiri ei saa olla tühi",
				signIn: "Palun logige konto kaudu sisse",
				signInTwo: "loo salvestamiseks."
			},
			header:{
				editMe: "Muuda mind !",
				templateTitle: "Määra mallile pealkiri",
				templateSubtitle: "Määra mallile alampealkiri"
			},
			settings: {
				settingsHeader: "Loo sätted",
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
				settingsSaveConfirm: "Mõned teie tehtud muudatused eeldavad, et salvestate loo ning avate selle uuesti"
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
				settingsLegendExplain: "Valige paigutuse sätted.",
				settingsLegendEnable: "Lülita legend sisse",
				settingsDescriptionEnable: "Lülita kirjeldus sisse",
				settingsBookmarksEnable: "Võimalda rullimise seeriad",
				settingsPopupDisable: "Luba hüpikakna kuvamist",
				settingsLocationSearchEnable: "Luba asukoha otsing",
				settingsGeolocatorEnable: "Luba geolokaator",
				settingsLegendHelpContent: "Legendi sisu täpsustamiseks kasuta ArcGIS-i veebikaardi akna kihtide loendit (peida legendis)",
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
				initHeader: "Tere tulemast koostajasse Võrdlus/pikksilm",
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
				firstSaveTitle: "Lugu on salvestatud",
				manageStory: "Hallake oma lugu",
				manageStoryA1: "Nõuanne. Kasutage linki %LINK1%, et kontrollida, kas teie loos esineb vigu ja muuta selle komponentide jagamist. Portaali Minu lood abil saate ka parandada oma loo ilmet, et see näeks sotsiaalvõrgustikes jagamisel hea välja. Portaali Minu lood muude kasulike funktsioonide kohta leiate lisateavet järgmiste linkide kaudu: %LINK2%.",
				manageStoryA1V1: "Minu lood",
				manageStoryA1V2: "blogipostitused",
				shareTitle: "Jagage oma lugu",
				sharePrivateHeader: "Teie lugu ei ole jagatud. Kas soovite seda jagada?",
				sharePrivateBtn1: "Jaga avalikult",
				sharePrivateBtn2: "Jaga oma organisatsiooniga",
				sharePrivateProgress: "Jagamine...",
				sharePrivateErr: "Jagamine ebaõnnestus, proovige uuesti või",
				sharePrivateOk: "Jagamist on värskendatud, laadimine...",
				shareStatus1: "Lugu ei ole salvestatud",
				shareStatus2: "Lugu on jagatud avalikult",
				shareStatus3: "Lugu on jagatud organisatsiooni sees",
				shareStatus4: "Lugu ei ole jagatud",
				sharePreviewAsUser: "Eelvaade",
				shareHeader1: "Teie lugu on <strong>avalikult kättesaadav</strong>.",
				shareHeader2: "Teie lugu on kättesaadav teie organisatsiooni liikmetele (sisselogimine nõutud).",
				shareLinkHeader: "Jagage oma lugu",
				shareLinkOpen: "AVA",
				learnMore: "Loe lähemalt",
				shareA1: "Kasutage nuppu %SHAREIMG% <a href='%LINK1%' target='_blank'>rakenduse üksuse lehel</a>. Kui soovite tühistada ka veebikaardi jagamise, siis kasutage <a href='%LINK2%' target='_blank'>veebikaardi üksuse lehte</a>.",
				shareWarning: "%WITH% jagamine on keelatud, kuna te pole <a href='%LINK%' target='_blank'>veebikaardi</a> omanik.",
				shareWarningWith1: "avalikult",
				shareWarningWith2: "avalikult ja organisatsiooniga"
			},
			directCreation: {
				header: "Tere tulemast kasutama Rullimise/pikksilma koostajat",
				mapPickHeader: "Alustamiseks sisestage veebikaardi id või kasutage otsingunuppu veebikaartide sirvimiseks.",
				launchBuilder: "Käivita koostaja",
				chooseWebmapLbl: "Valige veebikaart...",
				explain2: "Rullimise või pikksilma kaardiloo loomiseks kasutage allolevat nuppu, et valida soovitud veebikaart. Teise võimalusena võite kleepida veebikaardi ID allpool olevale väljale.",
				explain3: "Kui soovite kaardiloos kasutada kahte veebikaarti, siis küsitakse selle valiku valimisel hiljem teist veebikaarti.",
				webmapPlaceholder: "Sisestage kaardi id..."
			},
			saveErrorSocial: {
				title: "Sotsiaalmeedias jagamise värskendus",
				panel1: "Teie loo ilmet on sotsiaalmeedias täiustatud, kuid teie ArcGIS-i veebirakenduse üksuse pealkiri ei ühti teie loo pealkirjaga.",
				panel1tooltip: "Kui lisate pealkirja, kokkuvõtte ja pisipildi, näeb teie lugu välja järgmine:",
				panel2:	"Millist pealkirja soovite sotsiaalmeedias kasutada:",
				panel2q1: "Loo pealkiri (soovitatav)",
				panel2q1tooltip: "Selle suvandi valimisel muudetakse teie üksuse pealkiri loo pealkirjaga samasuguseks ning sünkroonitakse täiendavad koosturis tehtud muudatused.",
				panel2q2: "Üksuse pealkiri",
				panel3: "Selleks et oma loo ilmet sotsiaalmeedias veelgi täiustada, kasutage portaali ${MYSTORIES}, et lisada kokkuvõte ja pisipilt.",
				panel4: "Ära hoiata mind enam selle loo puhul",
				mystories: "Minu lood",
				btnSave: "Salvesta"
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
