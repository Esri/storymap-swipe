define(
	 ({
		viewer: {
			loading: {
				step1: "ĮKELIAMAS PASAKOJIMAS",
				step2: "ĮKELIAMI DUOMENYS",
				step3: "PRADEDAMA",
				fail: "Atsiprašome keitiklio krovimas nepavyko",
				loadBuilder: "PERSIJUNGIAMA Į KŪRIMO REŽIMĄ",
				redirectSignIn: "NUKREIPIAMA Į PRISIJUNGIMO PUSLAPĮ",
				redirectSignIn2: "(jūs būsite nukreiptas čia po prisijungimo)",
				failButton: "Pakartoti"
			},
			errors: {
				boxTitle: "Įvyko klaida",
				portalSelf: "Kritinė klaida: Nepavyko gauti portalo konfigūracijos",
				invalidConfig: "Kritinė klaida: Neteisinga konfigūracija",
				invalidConfigNoWebmap: "Kritinė klaida: Neteisinga konfigūracija (nenurodytas internetinis žemėlapis)",
				createMap: "Žemėlapio sukurti nepavyko",
				invalidApp: "Lemtinga klaida: Pasakojimo negalima įkelti",
				initMobile: "Sveiki atvykę į keitiklio internetinę aplikaciją. Aplikacija nesukonfigūruota. Interaktyvus kūrėjas mobiliuosiuose įrenginiuose nepalaikomas.",
				initMobile2: "Keitiklio kūrimo priemonė nepalaiko šio ekrano dydžio.",
				noBuilderIE8: "Keitiklio interaktyvus kūrėjas nepalaikomas žemesnės nei 9 versijos Internet Explorer.",
				noLayerView: "Sveiki atvykę į keitiklio internetinę aplikaciją.<br />Aplikacija dar nesukonfigūruota.",
				appSave: "Klaida įrašant žiniatinklio pasakojimą",
				mapSave: "Klaida įrašant internetinį žemėlapį",
				notAuthorized: "Neturite teisių pasiekti šį pasakojimą",
				conflictingProjectionsTitle: "Nesuderinamos projekcijos",
				conflictingProjections: "Keitiklis nepalaiko dviejų interneto žemėlapių su skirtingomis projekcijomis. Atidarykite nustatymus ir naudokite interneto žemėlapį, naudojantį tą pačią projekciją kaip ir pirmasis interneto žemėlapis.",
				cpButton: "Užverti",
				unspecifiedConfigOwner: "Nesukonfigūruotas teisėtas savininkas.",
				invalidConfigOwner: "Pasakojimo savininkas neautorizuotas."
			},
			mobileView: {
				hideIntro: "SLĖPTI ĮŽANGĄ",
				navLeft: "Legenda",
				navMap: "Žemėlapis",
				navRight: "Duomenys"
			},
			desktopView: {
				storymapsText: "Pristatomasis žemėlapis",
				builderButton: "Perjungti į kūrimo būseną",
				facebookTooltip: "Dalintis Facebook",
				twitterTooltip: "Dalintis Twitter",
				bitlyTooltip: "Gauti trumpą nuorodą"
			}
		},
		builder: {
			builder: {
				panelHeader: "PASAKOJIMO KONFIGŪRACIJA",
				buttonSave: "ĮRAŠYTI",
				buttonHelp: "Pagalba",
				buttonShare: "Bendrinti",
				buttonDiscard: "ATSISAKYTI",
				buttonSettings: "Nuostatos",
				buttonView: "Peržiūros būsena",
				buttonItem: "Atverti aplikaciją",
				noPendingChange: "Laukiančių pakeitimų nėra",
				unSavedChangeSingular: "1 neišsaugotas pakeitimas",
				unSavedChangePlural: "neišsaugoti pakeitimai",
				popoverDiscard: "Ar tikrai norite atsisakyti neįrašytų pakeitimų?",
				yes: "Taip",
				no: "Ne",
				popoverOpenViewExplain: "Atverdami peržiūros programą, prarasite visus neįrašytus pakeitimus",
				popoverOpenViewOk: "Gerai",
				popoverOpenViewCancel: "Atšaukti",
				popoverSaveWhenDone: "Užbaigus nepamirškite įrašyti",
				closeWithPendingChange: "Ar tikrai patvirtinate šį veiksmą ? Atlikti pakeitimai bus prarasti.",
				gotIt: "Gerai",
				savingApplication: "Įrašoma istorija",
				saveSuccess: "Pasakojimas įrašytas sėkmingai",
				saveError: "Įrašyti nepavyko, pabandykite iš naujo",
				saveError2: "Išsaugoti nepavyko dėl negalimo html tego pavadinime ar apraše",
				saveError3: "Pavadinimas negali būti tuščias",
				signIn: "Prisijunkite su paskyra prie",
				signInTwo: "pasakojimui įrašyti."
			},
			header:{
				editMe: "Redaguok !",
				templateTitle: "Nustatyti šablono antraštę",
				templateSubtitle: "Nustatyti šablono paantraštę"
			},
			settings: {
				settingsHeader: "Pasakojimo parametrai",
				modalCancel: "Atšaukti",
				modalApply: "Taikyti"
			},
			settingsColors: {
				settingsTabColor: "Apipavidalinimas",
				settingsColorExplain: "Pasirinkite aplikacijos temą arba nustatykite savo spalvas.",
				settingsLabelColor: "Antraštės ir šoninės panelės foninės spalvos"
			},
			settingsHeader: {
				settingsTabLogo: "Antraštė",
				settingsLogoExplain: "Pritaikyti antraštės logotipą (maksimalus dydis: 250 x 50px).",
				settingsLogoEsri: "Esri logotipas",
				settingsLogoNone: "Logotipo nėra",
				settingsLogoCustom: "Savas logotipas",
				settingsLogoCustomPlaceholder: "Paveikslėlio URL",
				settingsLogoCustomTargetPlaceholder: "Vieno mygtuko paspaudimo nuoroda",
				settingsLogoSocialExplain: "Priderinkite antraštės viršutinę dešinę nuorodą.",
				settingsLogoSocialText: "Tekstas",
				settingsLogoSocialLink: "Nuoroda",
				settingsLogoSocialDisabled: "Šią funkciją išjungė Administratorius"
			},
			settingsExtent: {
				settingsTabExtent: "Aprėptis",
				settingsExtentExplain: "Nustatykite pradinę aprėptį žemiau esančiame interaktyviame žemėlapyje.",
				settingsExtentExplainBottom: "Jūsų nurodyta aprėptis pakeis internetinio žemėlapio pradinę aprėptį. Jei naudojamas žemėlapių sukeitimas, ši aprėptis nebus naudojama.",
				settingsExtentDateLineError: "Aprėptis negali būti abipus 180ï¿½ ilgumos",
				settingsExtentDateLineError2: "Klaida apskaičiuojant aprėptį",
				settingsExtentDrawBtn: "Brėžti naują aprėptį",
				settingsExtentModifyBtn: "Redaguoti esamą aprėptį",
				settingsExtentApplyBtn: "Taikyti pagrindiniame žemėlapyje",
				settingsExtentUseMainMap: "Naudoti pagrindinę žemėlapio aprėptį"
			}
        },
		swipe: {
			mobileData: {
				noData: "Nėra duomenų atvaizdavimui!",
				noDataExplain: "Pasirinkite žemėlapį norėdami pasirinkti elementą ir sugrįžti čia",
				noDataMap: "Nėra duomenų šiam žemėlapiui",
				noPopup: "Šiam elementui nerasta jokių iššokančių langų"
			},
			mobileLegend: {
				noLegend: "Nėra legendos atvaizdavimui."
			},
			swipeSidePanel: {
				editTooltip: "Nustatyti šoninės panelės aprašą",
				editMe: "Redaguok !",
				legendTitle: "Legenda"
			},
			infoWindow: {
				noFeature: "Nėra duomenų atvaizdavimui",
				noFeatureExplain: "Spustelkite žemėlapį, norėdami pasirinkti elementą"
			},
			settingsLayout: {
				settingsTabLayout: "Keitiklio stilius",
				settingsLayoutExplain: "Pasirinkite keitiklio įrankio stilių",
				settingsLayoutSwipe: "Vertikali juosta",
				settingsLayoutSpyGlass: "Didinamasis stiklas",
				settingsLayoutSelected: "Pažymėtas maketas",
				settingsLayoutSelect: "Pažymėkite šį maketą",
				settingsSaveConfirm: "Kai kurie jūsų pakeitimai reikalauja išsaugoti ir perkrauti pasakojimą"
			},
			settingsDataModel: {
				settingsTabDataModel: "Keitiklio tipas",
				settingsDataModelExplainSwipe: "Ką norite, kad vartotojai keistų?",
				settingsDataModelExplainSwipe2: "",
				settingsDataModelExplainSpyGlass: "Pasirinkite sluoksnį arba internetinį žemėlapį, kuris atsiras po didinamuoju stiklu",
				settingsDataModelOneMap: "Sluoksnis internetiniame žemėlapyje",
				settingsDataModel1Explain: "Pasirinkite sluoksnį, kurį norite keisti",
				settingsDataModel1Warning: "Jei sluoksnis paslėptas po aukščiau esančiais sluoksniais, keitiklis neturės jokio poveikio.",
				settingsDataModel1SpyGlassExplain: "Pasirinkite sluoksnį, kuris atsiras po didinamuoju stiklu.",
				settingsDataModelTwoMaps: "Du internetiniai žemėlapiai",
				settingsDataModelLayerIds: "Internetinio žemėlapio sluoksnių ID",
				settingsDataModelSelected: "Pasirinktas tipas",
				settingsDataModelWebmapSwipeId1: "Dešiniojo internetinio žemėlapio ID",
				settingsDataModelWebmapSwipeId2: "Kairiojo internetinio žemėlapio ID",
				settingsDataModelWebmapGlassId1: "Pagrindinio internetinio žemėlapio ID",
				settingsDataModelWebmapGlassId2: "Didinamojo stiklo internetinio žemėlapio ID",
				settingsDataModelSelect: "Pasirinkite šį tipą",
				settingsDataModel2Explain: "Keisti kitu internetiniu žemėlapiu.",
				settingsDataModel2SpyGlassExplain: "Atidengti kitą internetinį žemėlapį.",
				settingsDataModel2HelpTitle: "Kaip surasti internetinio žemėlapio ID",
				settingsDataModel2HelpContent: "Nukopijuokite skaičius po \'=\' ženklo, esančio internetinio žemėlapio URL",
				switchMaps: "Sukeisti žemėlapius",
				browseWebMaps: "Naršyti internetinius žemėlapius"
			},
			settingsLegend: {
				settingsTabLegend: "Aplikacijos išdėstymas",
				settingsLegendExplain: "Pasirinkite išdėstymo parametrus.",
				settingsLegendEnable: "Įjungti legendą",
				settingsDescriptionEnable: "Įjungti aprašą",
				settingsBookmarksEnable: "Įjungti keitiklių serijas",
				settingsPopupDisable: "Įgalinti informacinį langą",
				settingsLocationSearchEnable: "Įgalinti lokatoriaus paiešką",
				settingsGeolocatorEnable: "Įgalinti geolokatorių",
				settingsLegendHelpContent: "Legendos nustatymui naudokite ArcGIS.com internetinio žemėlapio peržiūros aplikacijos turinį (Paslėpti legendoje)",
				settingsSeriesHelpContent: "Keitiklių serija yra navigavimo galimybė, supažindinanti vartotoją su tam tikra aprėptimi. Ji atvaizduoja pavadinimą bei aprašymo tekstą šoninėje panelėje. Aktyvuojant pirmą kartą, jūsų internetinio (-ių) žemėlapio (-ių) žymės bus panaudotos preliminariai užpildant serijų juostą. Šio pasirinkimo išjungimas išjungia ir serijų juostą, tačiau serijų konfigūracija bus išlaikoma, kad būtų galima naudoti ateityje.",
				settingsSeriesHelpContent2: "Keitiklių serijos leidžia jums sukurti ir redaguoti pažymėtas vietas su kartu esančiais pavadinimais ir tekstu. Jei jūsų internetinis žemėlapis turi žymių, jos bus atvaizduotos. Galite išjungti serijas, bet konfigūracija bus išsaugota ateičiai.",
				settingsSeriesHelpLink: "Peržiūrėkite aplikacijos su keitiklių serijomis pavyzdį čia",
				preview: "Vartotojo sąsajos peržiūra",
				settingsLocateButtonExplain: "Šis funkcionalumas palaikomas daugelyje mobilių įrenginių ir darbastalio naršyklių (įskaitant Internet Explorer 9+).",
				settingsLocateButton: "Palaikomose naršyklėse įgalinti mygtuką Rasti",
				settingsAddressSearch: "Įgalinti adreso paieškos įrankį"
			},
			settingsSwipePopup: {
				settingsSwipePopup: "Iškylantis langas",
				settingsSwipePopupExplain: "Adaptuokite iškylančių langų antraštės vaizdą, kad padėtumėt vartotojui asocijuoti iškylančius langus su žemėlapio sluoksniais.",
				settingsSwipePopupSwipe1: "Kairysis žemėlapis",
				settingsSwipePopupSwipe2: "Dešinysis žemėlapis",
				settingsSwipePopupGlass1: "Pagrindinis žemėlapis",
				settingsSwipePopupGlass2: "Didinamojo stiklo žemėlapis",
				settingsSwipePopupTitle: "Antraštės pavadinimas",
				settingsSwipePopupColor: "Antraštės spalva"
			},
			initPopup: {
				initHeader: "Sveiki atvykę į Keitiklio/Didinamojo stiklo kūrėją",
				modalNext: "Sekantis",
				modalPrev: "Ankstesnis",
				modalApply: "Atidaryti aplikaciją"
			},
			seriesPanel: {
				title: "Pavadinimas",
				descr: "Aprašas",
				discard: "Pašalinti žymę",
				saveExtent: "Nustatyti žymės aprėptį",
				discardDisabled: "Negalite pašalinti šios žymės. Keitiklio serijos gali būti išjungtos nustatymuose."
			},
			helpPopup: {
				title: "Pagalba",
				close: "Užverti",
				tab1: {
					div1: "Keitiklio / didinamojo stiklo šablonas leidžia palyginti du internetinius žemėlapius ar du internetinio žemėlapio sluoksnius patrauklioje, paprastoje naudoti tinklo aplikacijoje, kuri gali būti pasiekiama naršykle įvairiuose įrenginiuose, taip pat ir išmaniuosiuose telefonuose ir planšetiniuose kompiuteriuose.",
					div2: "Norėdami gauti papildomos informacijos apie keitiklio / didinamojo stiklo šabloną ir vartotojų sukurtų pavyzdžių, <a href='http://storymaps.arcgis.com/en/app-list/swipe/' target='_blank'> apsilankykite žemėlapių su pasakojimais svetainėje</a>. Be to, galite mus sekti Twitter <a href='https://twitter.com/EsriStoryMaps' target='_blank'>@EsriStoryMaps</a>.",
					div3: "Mes norėtume gauti iš jūsų žinių! Jei turite klausimų, pageidaujate naujo funkcionalumo, ar manote, kad radote klaidą, apsilankykite <a href='http://links.esri.com/storymaps/forum' target='_blank'>Pasakojimų žemėlapių vartotojų forumą</a>."
				}
			},
			share: {
				firstSaveTitle: "Pasakojimas sėkmingai įrašytas",
				firstSaveHeader: "Jūsų pasakojimas buvo įrašytas į ArcGIS Online. Perskaitykite toliau pateikiamus atsakymus į dažniausiai užduodamus klausimus.",
				firstSaveA1: "Jei nesate pažįstamas su ArcGIS Online arba norite greitai patekti į autoriaus vartotojo sąsają, galite išsaugoti šią nuorodą: %LINK1%",
				firstSaveA1bis: "Pasakojimas taip pat gali būti pasiekiamas <a href=\'%LINK2%\' target=\'_blank\'>ArcGIS Online turinio aplanke</a>.",
				firstSaveQ2: "Ar mano pasakojimas bendrinamas?",
				firstSaveA2: "Šiuo metu jūsų pasakojimas nebendrinamas. Norėdami jį bendrinti, naudokite mygtuką BENDRINTI.",
				shareTitle: "Bendrinti pasakojimą",
				sharePrivateHeader: "Pasakojimas nėra bendrinamas, ar norite jį bendrinti?",
				sharePrivateBtn1: "Bendrinti viešai",
				sharePrivateBtn2: "Bendrinti su viena organizacija",
				sharePrivateProgress: "Vyksta bendrinimas...",
				sharePrivateErr: "Bendrinimas nepavyko, bandykite dar kartą arba",
				sharePrivateOk: "Bendrinimas sėkmingai atnaujintas, kraunama...",
				shareStatus1: "Pasakojimas neįrašytas",
				shareStatus2: "Pasakojimas bendrinamas viešai",
				shareStatus3: "Pasakojimas bendrinamas organizacijos viduje",
				shareStatus4: "Pasakojimas nebendrinamas",
				sharePreviewAsUser: "Peržiūra",
				shareHeader1: "Pasakojimas <strong>prieinamas viešai</strong>.",
				shareHeader2: "Pasakojimas pasiekiamas organizacijos nariams (prisijungus).",
				shareLinkHeader: "Bendrinkite pasakojimą su savo auditorija",
				shareLinkOpen: "ATIDARYTI",
				learnMore: "Sužinokite daugiau",
				shareQ1Opt1: "Kaip pasakojimą išlaikyti asmeniniu?",
				shareQ1Opt2: "Kaip pasakojimą išlaikyti asmeniniu ar bendrinti?",
				shareA1: "Naudokite %SHAREIMG% <a href='%LINK1%' target='_blank'>aplikacijos elemento lange</a>. Jei norite išjungti bendrinimą, naudokite <a href='%LINK2%' target='_blank'>internetinio žemėlapio elemento lange</a>.",
				shareA1bis: "Jei taip pat norite nubendrinti elementų paslaugą, naudokite <a href='%LINK1%' target='_blank'>elementų paslaugos elemento puslapį</a>.",
				shareQ2: "Kaip redaguoti pasakojimą vėliau?",
				shareQ2bis: "Kaip grįžti į kūrimo sąsają?",
				shareA2div1: "Išsaugokite ir pernaudokite šią nuorodą %LINK1% arba naudokite <a href=\'%LINK2%\' target=\'_blank\'>pasakojimo elemento puslapį</a>.",
				shareA2div2: "Kai prisijungiate prie ArcGIS.com kaip pasakojimo savininkas, pasakojimas turės interaktyvaus kūrėjo atvėrimo mygtuką:",
				shareQ3: "Kur laikomi duomenys?",
				shareA3: "Pasakojimo konfigūracija įrašoma šiame žiniatinklio aplikacijos elemente</a>.",
				shareWarning: "Bendrinimas %WITH% buvo išjungtas, nes jūs nesate <a href='%LINK%' target='_blank'>internetinio žemėlapio</a> savininkas.",
 				shareWarningWith1: "viešai",
 				shareWarningWith2: "viešai ir su organizacija"
			},
			directCreation: {
				header: "Sveikiname prisijungus prie keitiklio / didinamojo stiklo kūrimo programos",
				mapPickHeader: "Norėdami pradėti, pirmiausia įveskite galiojantį internetinio žemėlapio id arba naudokite paieškos mygtuką ir naršykite internetinius žemėlapius.",
				launchBuilder: "Paleisti kūrimo programą",
				chooseWebmapLbl: "Pasirinkite internetinį žemėlapį...",
				explain2: "Norėdami sukurti keitiklio arba didinamojo stiklo žemėlapį su pasakojimu, žemiau esančiu mygtuku pasirinkite norimą naudoti ArcGIS Online internetinį žemėlapį. Taip pat į lauką galite nukopijuoti internetinio žemėlapio ID.",
				explain3: "Jei žemėlapyje su pasakojimu norite naudoti du internetinius žemėlapius, antrą žemėlapį  galėsite nurodyti vėliau, kai pasirinksite tą parinktį.",
				webmapPlaceholder: "Įveskite internetinio žemėlapio ID..."
			}
		},
		configure: {
			mapdlg:{
				items:{
					organizationLabel: "Organizacija",
					onlineLabel: "ArcGIS Online",
					contentLabel: "Turinys",
					favoritesLabel: "Mėgstamiausi"
				},
				title: "Pasirinkti internetinį žemėlapį",
				searchTitle: "Ieškoti",
				ok: "Gerai",
				cancel: "Atšaukti",
				placeholder: "Įveskite paieškos frazę"
			}
		}
    })
);
