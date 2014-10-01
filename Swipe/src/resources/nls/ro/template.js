define(
	({
		viewer: {
			loading: {
				step1: "SE ÎNCARCĂ APLICAŢIA",
				step2: "SE ÎNCARCĂ DATELE",
				step3: "INIŢIALIZARE",
				fail: "Ne pare rău, încărcarea Swipe a eşuat",
				loadBuilder: "SE COMUTĂ LA MODUL INSTRUMENT DE CĂUTARE",
				failButton: "Reîncercare"
			},
			errors: {
				boxTitle: "A apărut o eroare",
				portalSelf: "Eroare fatală: Eşec la obţinerea configuraţiei portalului",
				invalidConfig: "Eroare gravă: Configurare incorectă",
				invalidConfigNoWebmap: "Eroare gravă: Configurare incorectă (nu a fost specificată nicio hartă web)",
				createMap: "Imposibil de creat harta",
				invalidApp: "Eroare gravă: Imposibil de încărcat aplicaţia",
				initMobile: "Bine aţi venit la aplicaţia web Swipe. Aplicaţia nu este configurată. Instrumentul de creare interactiv nu este suportat pe dispozitive mobile.",
				noBuilderIE8: "Instrumentul interactiv de creare a Swipe nu este suportat în versiunile Internet Explorer mai vechi decât 9.",
				noLayerView: "Bine aţi venit la aplicaţia web Swipe.<br />Aplicaţia nu este configurată încă.",
				appSave: "Eroare la salvarea aplicaţiei web",
				mapSave: "Eroare la salvarea hărţii web",
				notAuthorized: "Nu sunteţi autorizat pentru a accesa această aplicaţie",
				conflictingProjectionsTitle: "Proiecţii în conflict",
				conflictingProjections: "Instrumentul de preluare nu suportă utilizarea a două hărţi cu proiecţii diferite. Deschideţi setările şi utilizaţi o hartă web care foloseşte aceeaşi proiecţie ca şi prima hartă web.",
				cpButton: "Închidere"
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
				bitlyTooltip: "Obţinere link scurt către aplicaţie"
			}
		},
		builder: {
			builder: {
				panelHeader: "CONFIGURARE APLICAŢIE",
				buttonSave: "SALVARE",
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
				gotIt: "Ok",
				savingApplication: "Se salvează aplicaţia",
				saveSuccess: "S-a reuşit salvarea aplicaţiei",
				saveError: "Salvare nereuşită, încercaţi din nou",
				signIn: "Conectaţi-vă la un cont în",
				signInTwo: "pentru a salva aplicaţia."
			},
			header:{
				editMe: "Editează-mă!",
				templateTitle: "Setare titlu şablon",
				templateSubtitle: "Setare subtitlu şablon"
			},
			settings: {
				settingsHeader: "Setări aplicaţie",
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
				settingsExtentExplainBottom: "Extinderea pe care o definiţi va modifica extinderea iniţială a hărţii web.Reţineţi că, dacă efectuaţi o serie Swipe, extinderea respectivă nu va fi utilizată.",
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
				settingsSaveConfirm: "Unele modificări necesită salvarea şi reîncărcarea aplicaţiei"
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
				settingsDataModel2HelpContent: "Copiaţi şi lipiţi cifre după semnul „=” în URL-ul hărţii web"
			},
			settingsLegend: {
				settingsTabLegend: "Configuraţie aplicaţie",
				settingsLegendExplain: "Selectaţi setările pentru configuraţia aplicaţiei.",
				settingsLegendEnable: "Activare legendă",
				settingsDescriptionEnable: "Activare descriere",
				settingsBookmarksEnable: "Activare serii Swipe",
				settingsPopupDisable: "Activare pop-up",
				settingsLocationSearchEnable: "Activare căutare în localizator",
				settingsGeolocatorEnable: "Activare localizator geografic",
				settingsLegendHelpContent: "Pentru a rafina conţinutul legendei, utilizaţi cuprinsului aplicaţiei de vizualizare a hărţilor web din ArcGIS.com (Ascunderea în legendă)",
				settingsSeriesHelpContent: "Seria de preluare reprezintă o opţiune de navigare cu file care ghidează vizualizatorul către o anumită extindere şi afişează un titlu şi text descriptiv în panoul lateral. În timpul activării iniţiale, marcajele din hărţile Web vor fi importate şi utilizate pentru a popula în prealabil bara seriei. Dezactivarea opţiunii de serie dezactivează bara seriei, dar configuraţia seriei se păstrează pentru utilizare ulterioară.", 
				settingsSeriesHelpContent2: "Seriile de acţiuni vă permit să creaţi şi să editaţi o selecţie de locaţii împreună cu titlurile şi textele care le însoţesc. Dacă harta dvs. web conţine semne de carte, acestea vor fi afişate. Puteţi dezactiva seriile, însă configuraţia va fi păstrată pentru a fi utilizată în viitor.",
				settingsSeriesHelpLink: "Vedeţi aici un exemplu de aplicaţie cu o serie de acţiuni",
				preview: "Previzualizare interfaţă cu utilizatorul",
				settingsLocateButtonExplain: "Această funcţionalitate este acceptată pe majoritatea dispozitivelor mobile şi browserelor desktop (inclusiv Internet Explorer 9+).",
				settingsLocateButton: "Activare buton \„Localizare\” pe browsere acceptate",
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
				initHeader: "Bine aţi venit la builderul instrumentului de preluare",
				modalNext: "Înainte",
				modalPrev: "Anteriorul",
				modalApply: "Deschidere aplicaţie"
			},
			seriesPanel: {
				title: "Titlu",
				descr: "Descriere",
				discard: "Eliminare semn de carte",
				saveExtent: "Setare extindere semn de carte",
				discardDisabled: "Nu puteţi elimina acest semn de carte. Seriile Swipe pot fi dezactivate din Setări."
			}
		}
    })
);