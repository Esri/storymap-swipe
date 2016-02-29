define(
	 ({
		viewer: {
			loading: {
				step1: "SE ÎNCARCĂ POVESTEA",
				step2: "SE ÎNCARCĂ DATELE",
				step3: "INIŢIALIZARE",
				fail: "Ne pare rău, încărcarea Swipe a eşuat",
				loadBuilder: "SE COMUTĂ LA MODUL INSTRUMENT DE CĂUTARE",
				redirectSignIn: "REDIRECŢIONARE LA PAGINA DE AUTENTIFICARE",
				redirectSignIn2: "(veţi fi redirecţionat aici după autentificare)",
				failButton: "Reîncercare"
			},
			errors: {
				boxTitle: "A apărut o eroare",
				portalSelf: "Eroare fatală: Eşec la obţinerea configuraţiei portalului",
				invalidConfig: "Eroare gravă: Configurare incorectă",
				invalidConfigNoWebmap: "Eroare gravă: Configurare incorectă (identificatorul pentru harta sau aplicaţia web nu este specificat în index.html)",
				invalidConfigNoAppDev: "Nu a fost specificat niciun identificator de aplicaţie web de cartografiere sau o hartă web în parametrii adresei URL (?appid= sau ?webmap=). În mod dezvoltare, configuraţia appid şi webmap din index.html sunt ignorate.",
				createMap: "Nu se poate crea harta",
				invalidApp: "Eroare gravă: Imposibil de încărcat povestea",
				initMobile: "Bine aţi venit la aplicaţia web Swipe. Aplicaţia nu este configurată. Instrumentul de creare interactiv nu este suportat pe dispozitive mobile.",
				initMobile2: "Aplicația de crearea a analizei Swipe nu este acceptat la această dimensiune a ecranului. Dacă este posibil, redimensionaţi browserul dvs. pentru accesarea aplicației de creare sau vă rugăm să creați scenariul dvs. pe un dispozitiv cu un ecran mai mare.",
				initMobile3: "Vă rugăm să rotiţi dispozitivul pe orientarea peisaj pentru a utiliza aplicația de creare a analizei Swipe.",
				noBuilderIE8: "Instrumentul interactiv de creare a Swipe nu este suportat în versiunile Internet Explorer mai vechi decât 9.",
				noLayerView: "Bine aţi venit la aplicaţia web Swipe.<br />Aplicaţia nu este configurată încă.",
				appSave: "Eroare la salvarea poveştii web",
				mapSave: "Eroare la salvarea hărţii web",
				notAuthorized: "Nu sunteţi autorizat să accesaţi această poveste",
				notAuthorizedBuilder: "Nu sunteţi autorizat să utilizaţi aplicația de creare pentru Swipe şi Lunetă.",
				conflictingProjectionsTitle: "Proiecţii în conflict",
				conflictingProjections: "Instrumentul de preluare nu suportă utilizarea a două hărţi cu proiecţii diferite. Deschideţi setările şi utilizaţi o hartă web care foloseşte aceeaşi proiecţie ca şi prima hartă web.",
				cpButton: "Închidere",
				unspecifiedConfigOwner: "Proprietarul autorizat nu a fost configurat.",
				invalidConfigOwner: "Proprietarul poveştii nu este autorizat."
			},
			mobileView: {
				hideIntro: "ASCUNDERE PREZENTARE",
				navLeft: "Legendă",
				navMap: "Hartă",
				navRight: "Date"
			},
			desktopView: {
				storymapsText: "O hartă informativă",
				builderButton: "Comutare la modul Instrument de creare",
				facebookTooltip: "Partajare pe Facebook",
				twitterTooltip: "Partajare pe Twitter",
				bitlyTooltip: "Obţinere link scurt",
				tooltipAutoplayDisabled: "Aceasta nu este disponibilă în modul de redare automată",
				autoplayLabel: "Mod redare automată",
				autoplayExplain1: "Modul de redare automată va avansa prin scenariul dvs. la un interval regulat. Această opţiune este ideală pentru un chioşc sau un monitor pentru afişare publică, dar, reţineţi, că în alte situaţii poate face ca scenariul să fie dificil de urmărit. Această caracteristică nu este acceptată pe ecranele de dimensiuni mici.",
				autoplayExplain2: "Când acest mod este activ, sunt afişate butoane pentru a reda/întrerupe scenariul şi pentru a regla viteza de navigare."
			}
		},
		builder: {
			builder: {
				panelHeader: "CONFIGURARE POVESTE",
				buttonSave: "SALVARE",
				buttonHelp: "Ajutor",
				buttonShare: "Partajare",
				buttonDiscard: "ANULARE",
				buttonSettings: "Setări",
				buttonView: "Mod de vizualizare",
				buttonItem: "Deschidere element aplicaţie web",
				noPendingChange: "Nicio modificare în aşteptare",
				unSavedChangeSingular: "O modificare nesalvată",
				unSavedChangePlural: "modificări nesalvate",
				popoverDiscard: "Sigur renunţaţi la toate modificările nesalvate?",
				yes: "Da",
				no: "Nu",
				popoverOpenViewExplain: "Prin deschiderea vizualizatorului veţi pierde toate modificările nesalvate",
				popoverOpenViewOk: "Ok",
				popoverOpenViewCancel: "Anulare",
				popoverSaveWhenDone: "Nu uitaţi să salvaţi când aţi terminat",
				closeWithPendingChange: "Sigur confirmaţi acţiunea? Se vor pierde modificările.",
				gotIt: "OK",
				savingApplication: "Se salvează povestea",
				saveSuccess: "Scenariul a fost salvat",
				saveError: "Salvare nereuşită, încercaţi din nou",
				saveError2: "Salvare eşuată din cauza unei etichete html nevalide într-un nume sau o descriere",
				saveError3: "Titlul nu poate fi necompletat",
				signIn: "Conectaţi-vă la un cont în",
				signInTwo: "pentru a salva povestea."
			},
			header:{
				editMe: "Editează-mă!",
				templateTitle: "Setare titlu şablon",
				templateSubtitle: "Setare subtitlu şablon"
			},
			settings: {
				settingsHeader: "Setări poveste",
				modalCancel: "Anulare",
				modalApply: "Aplicare"
			},
			settingsColors: {
				settingsTabColor: "Temă",
				settingsColorExplain: "Alegeţi o temă pentru aplicaţie sau definiţi propriile dvs. culori.",
				settingsLabelColor: "Culorile pentru fundalul antetului şi panoului lateral"
			},
			settingsHeader: {
				settingsTabLogo: "Antet",
				settingsLogoExplain: "Particularizaţi sigla antetului (maximum 250 x 50px).",
				settingsLogoEsri: "Sigla Esri",
				settingsLogoNone: "Fără siglă",
				settingsLogoCustom: "Siglă particularizată",
				settingsLogoCustomPlaceholder: "Adresă URL imagine",
				settingsLogoCustomTargetPlaceholder: "Link de accesare cu clic",
				settingsLogoSocialExplain: "Personalizaţi linkul din colţul din dreapta sus al antetului.",
				settingsLogoSocialText: "Text",
				settingsLogoSocialLink: "Link",
				settingsLogoSocialDisabled: "Acest obiect spaţial a fost dezactivat de administrator"
			},
			settingsExtent: {
				settingsTabExtent: "Extindere",
				settingsExtentExplain: "Setaţi extinderea iniţială prin harta interactivă de mai jos.",
				settingsExtentExplainBottom: "Extinderea pe care o definiţi va modifica extinderea iniţială a hărţii web.Reţineţi că, dacă efectuaţi o serie de preluare, extinderea respectivă nu va fi utilizată.",
				settingsExtentDateLineError: "Extinderea nu poate traversa meridianul cu longitudinea 180°",
				settingsExtentDateLineError2: "Eroare la calculul extinderii",
				settingsExtentDrawBtn: "Trasare extindere nouă",
				settingsExtentModifyBtn: "Editare extindere curentă",
				settingsExtentApplyBtn: "Aplicare pe harta principală",
				settingsExtentUseMainMap: "Utilizare extindere principală a hărţii"
			}
        },
		swipe: {
			mobileData: {
				noData: "Nu există date de afişat!",
				noDataExplain: "Atingeţi harta pentru a selecta un obiect spaţial şi reveniţi aici",
				noDataMap: "Nu există date pentru această hartă",
				noPopup: "Nu a fost găsită nicio fereastră pop-up pentru acest obiect spaţial"
			},
			mobileLegend: {
				noLegend: "Nicio legendă de afişat."
			},
			swipeSidePanel: {
				editTooltip: "Setare descrierea panou lateral",
				editMe: "Editează-mă!",
				legendTitle: "Legendă"
			},
			infoWindow: {
				noFeature: "Nu există date de afişat",
				noFeatureExplain: "Atingeţi harta pentru selectarea unui obiect spaţial"
			},
			settingsLayout: {
				settingsTabLayout: "Stil Swipe",
				settingsLayoutExplain: "Alegeţi un stil pentru instrumentul Swipe.",
				settingsLayoutSwipe: "Bară verticală",
				settingsLayoutSpyGlass: "Ochean",
				settingsLayoutSelected: "Configuraţie selectată",
				settingsLayoutSelect: "Selectaţi această configuraţie",
				settingsSaveConfirm: "Unele modificări necesită salvarea şi reîncărcarea poveştii"
			},
			settingsDataModel: {
				settingsTabDataModel: "Tip preluare",
				settingsDataModelExplainSwipe: "Ce doriţi să preia utilizatorii?",
				settingsDataModelExplainSwipe2: "",
				settingsDataModelExplainSpyGlass: "Alegeţi stratul tematic sau harta web care va apărea în ochean.",
				settingsDataModelOneMap: "Un strat tematic într-o hartă Web",
				settingsDataModel1Explain: "Selectaţi stratul tematic care doriţi să fie preluat",
				settingsDataModel1Warning: "Dacă stratul tematic este ascuns de straturi tematice superioare, preluarea nu va avea niciun efect.",
				settingsDataModel1SpyGlassExplain: "Selectaţi stratul tematic care să apară în ochean.",
				settingsDataModelTwoMaps: "Două hărţi web",
				settingsDataModelLayerIds: "ID-uri strat tematic de hartă web",
				settingsDataModelSelected: "Tip selectat",
				settingsDataModelWebmapSwipeId1: "ID hartă web dreapta",
				settingsDataModelWebmapSwipeId2: "ID hartă web stânga",
				settingsDataModelWebmapGlassId1: "ID hartă web principală",
				settingsDataModelWebmapGlassId2: "ID hartă web din ochean",
				settingsDataModelSelect: "Selectaţi acest tip",
				settingsDataModel2Explain: "Swipe cu altă hartă web.",
				settingsDataModel2SpyGlassExplain: "Aduceţi în prim-plan altă hartă web.",
				settingsDataModel2HelpTitle: "Cum găsesc ID-ul unei hărţi web?",
				settingsDataModel2HelpContent: "Copiaţi şi lipiţi cifre după semnul „=” în URL-ul hărţii web",
				switchMaps: "Comutaţi hărţi",
				browseWebMaps: "Răsfoiţi hărţi web"
			},
			settingsLegend: {
				settingsTabLegend: "Configuraţie aplicaţie",
				settingsLegendExplain: "Selectaţi setările pentru configuraţie.",
				settingsLegendEnable: "Activare legendă",
				settingsDescriptionEnable: "Activare descriere",
				settingsBookmarksEnable: "Activare serii Swipe",
				settingsPopupDisable: "Activare pop-up",
				settingsLocationSearchEnable: "Activare căutare în localizator",
				settingsGeolocatorEnable: "Activare localizator geografic",
				settingsLegendHelpContent: "Pentru a rafina conţinutul legendei, utilizaţi cuprinsului aplicaţiei de vizualizare a hărţilor web din ArcGIS (Ascunderea în legendă)",
				settingsSeriesHelpContent: "Seria de preluare reprezintă o opţiune de navigare cu file care ghidează vizualizatorul către o anumită extindere şi afişează un titlu şi text descriptiv în panoul lateral. În timpul activării iniţiale, marcajele din hărţile Web vor fi importate şi utilizate pentru a popula în prealabil bara seriei. Dezactivarea opţiunii de serie dezactivează bara seriei, dar configuraţia seriei se păstrează pentru utilizare ulterioară.",
				settingsSeriesHelpContent2: "Seriile de preluare vă permit să creaţi şi să editaţi o selecţie de locaţii împreună cu titlurile şi textele care le însoţesc. Dacă harta dvs. web conţine semne de carte, acestea vor fi afişate. Puteţi dezactiva seriile, însă configuraţia va fi păstrată pentru a fi utilizată în viitor.",
				settingsSeriesHelpLink: "Vedeţi aici un exemplu de aplicaţie cu o serie de preluare",
				preview: "Previzualizare interfaţă cu utilizatorul",
				settingsLocateButtonExplain: "Această funcţionalitate este acceptată pe majoritatea dispozitivelor mobile şi browserelor desktop (inclusiv Internet Explorer 9+).",
				settingsLocateButton: "Activaţi butonul \„Localizare\” în browserele acceptate",
				settingsAddressSearch: "Activare instrument de căutare adrese"
			},
			settingsSwipePopup: {
				settingsSwipePopup: "Mesaj pop-up",
				settingsSwipePopupExplain: "Personalizarea aspectului antetului ferestrelor pop-up pentru a ajuta utilizatorul să asocieze ferestrele pop-up cu straturi tematice de hărţi.",
				settingsSwipePopupSwipe1: "Harta din stânga",
				settingsSwipePopupSwipe2: "Harta din dreapta",
				settingsSwipePopupGlass1: "Harta principală",
				settingsSwipePopupGlass2: "Harta din ochean",
				settingsSwipePopupTitle: "Titlu antet",
				settingsSwipePopupColor: "Culoare antet"
			},
			initPopup: {
				initHeader: "Bine aţi venit la aplicaţia de creare a instrumentului Preluare/Ochean",
				modalNext: "Înainte",
				modalPrev: "Anterior",
				modalApply: "Deschidere aplicaţie"
			},
			seriesPanel: {
				title: "Titlu",
				descr: "Descriere",
				discard: "Eliminare semn de carte",
				saveExtent: "Setare extindere semn de carte",
				discardDisabled: "Nu puteţi elimina acest semn de carte. Seriile de preluare pot fi dezactivate din Setări."
			},
			helpPopup: {
				title: "Ajutor",
				close: "Închidere",
				tab1: {
					div1: "Şablonul Preluare/Ochean este conceput pentru a compara două hărţi web separate sau două straturi tematice ale unei singure hărţi web într-o aplicaţie web atractivă, uşor de utilizat, care se poate utiliza în orice browser web pe orice dispozitiv, inclusiv pe telefoane inteligente şi tablete.",
					div2: "Pentru informaţii suplimentare despre şablonul Preluare/Lunetă, inclusiv exemple create de utilizatori, <a href='http://storymaps.arcgis.com/en/app-list/swipe/' target='_blank'> vizitaţi site-ul web Hărţi informative</a>. De asemenea, ne puteţi urmări pe Twitter la adresa <a href='https://twitter.com/EsriStoryMaps' target='_blank'>@EsriStoryMaps</a>.",
					div3: "Ne-ar face plăcere să împărtăşiţi lucruri cu noi! Dacă aveţi o întrebare, doriţi să solicitaţi o caracteristică nouă sau credeţi că aţi găsit o defecţiune, vizitaţi <a href='http://links.esri.com/storymaps/forum' target='_blank'>Forumul utilizatorilor de hărţi informative</a>."
				}
			},
			share: {
				firstSaveTitle: "Scenariul a fost salvat",
				manageStory: "Gestionare scenariu",
				manageStoryA1: "Sfat: Puteţi utiliza %LINK1% pentru a verifica scenariul dvs. din punctul de vedere al erorilor şi pentru a modifica modul în care componentele acestuia sunt partajate. Scenariile mele vă ajută, de asemenea, să faceţi ca scenariile să fie prezentate bine atunci când le partajaţi pe reţelele sociale. Puteţi să aflaţi despre alte caracteristici utile ale aplicaţiei Scenariile mele consultând %LINK2%.",
				manageStoryA1V1: "Relatările mele",
				manageStoryA1V2: "postări de pe blog",
				shareTitle: "Partajaţi povestea",
				sharePrivateHeader: "Povestea dvs. nu este partajată, doriţi să o partajaţi?",
				sharePrivateBtn1: "Partajare în mod public",
				sharePrivateBtn2: "Partajare cu organizaţia mea",
				sharePrivateProgress: "Partajare în curs...",
				sharePrivateErr: "Partajare nereuşită, încercaţi din nou sau",
				sharePrivateOk: "Partajare actualizată, se încarcă...",
				shareStatus1: "Povestea nu este salvată",
				shareStatus2: "Povestea este partajată public",
				shareStatus3: "Povestea este partajată în cadrul organizaţiei",
				shareStatus4: "Povestea nu este partajată",
				sharePreviewAsUser: "Previzualizare",
				shareHeader1: "Povestea dvs. este <strong>accesibilă pentru public</strong>.",
				shareHeader2: "Povestea dvs. este accesibilă membrilor organizaţiei (este necesară conectarea).",
				shareLinkHeader: "Partajaţi povestea",
				shareLinkOpen: "DESCHIDERE",
				learnMore: "Învăţaţi mai mult",
				shareA1: "Utilizaţi %SHAREIMG% în <a href='%LINK1%' target='_blank'>pagina de element corespunzătoare aplicaţiei</a>. Dacă doriţi şi să anulaţi partajarea hărţii web, utilizaţi <a href='%LINK2%' target='_blank'>pagina de element corespunzătoare hărţii web</a>.",
				shareWarning: "Partajarea %WITH% a fost dezactivată, deoarece nu mai sunteţi proprietarul <a href='%LINK%' target='_blank'>hărţii web</a>.",
				shareWarningWith1: "public",
				shareWarningWith2: "public şi cu Organizaţia"
			},
			directCreation: {
				header: "Bine aţi venit la aplicaţia de creare a instrumentului Preluare/Ochean",
				mapPickHeader: "Pentru a începe, introduceţi un ID corect al unei hărţi web sau utilizaţi butonul de căutare pentru a răsfoi hărţile web.",
				launchBuilder: "Lansaţi aplicaţia de creare",
				chooseWebmapLbl: "Alegere hartă web...",
				explain2: "Pentru a crea o hartă informativă de tip Swipe sau Lunetă, utilizaţi butonul de mai jos pentru a alege harta web pe care doriţi să o utilizaţi. Ca opţiune, puteţi lipi ID-ul hărţii web în câmpul de mai jos.",
				explain3: "Dacă doriţi să utilizaţi două hărţi web în harta informativă, vi se va solicita a doua hartă web mai târziu, când alegeţi opţiunea respectivă.",
				webmapPlaceholder: "Introduceţi ID-ul hărţii web..."
			},
			saveErrorSocial: {
				title: "Actualizare partajare pe reţele de socializare",
				panel1: "Prezentarea scenariului dvs.â€™ pe reţelele de socializare, a fost îmbunătăţită, dar titlul elementului aplicaţiei dvs. web ArcGIS nu este acelaşi cu titlul scenariului dvs.",
				panel1tooltip: "Prin definirea unui titlu, unui rezumat şi unei imagini în miniatură, scenariul dvs. va arăta astfel:",
				panel2:	"Ce titlu doriţi să utilizaţi pe reţelele de socializare:",
				panel2q1: "Titlul scenariului (recomandat)",
				panel2q1tooltip: "Prin selectarea acestei opţiuni, titlul elementului dvs. va fi modificat pentru a corespunde titlului scenariului şi modificările ulterioare din aplicația de creare a scenariilor vor fi sincronizate.",
				panel2q2: "Titlu element",
				panel3: "Pentru a îmbunătăţi în continuare modul în care scenariul dvs. este prezentat pe reţelele de socializare, utilizaţi ${MYSTORIES} pentru a adăuga un rezumat şi o imagine în miniatură.",
				panel4: "Opriţi avertizarea pentru acest scenariu",
				mystories: "Relatările mele",
				btnSave: "Salvare"
			}
		},
		configure: {
			mapdlg:{
				items:{
					organizationLabel: "Organizaţia mea",
					onlineLabel: "ArcGIS Online",
					contentLabel: "Resursele mele",
					favoritesLabel: "Preferinţele mele"
				},
				title: "Selectare hartă web",
				searchTitle: "Căutare",
				ok: "OK",
				cancel: "Anulare",
				placeholder: "Introducere termen de căutare"
			}
		}
    })
);
