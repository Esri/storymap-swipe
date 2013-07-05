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
				invalidConfig: "Eroare gravă: Configurare incorectă",
				invalidConfigNoWebmap: "Eroare gravă: Configurare incorectă (nu a fost specificată nicio hartă web)",
				createMap: "Imposibil de creat harta",
				invalidApp: "Eroare gravă: Imposibil de încărcat aplicaţia",
				initMobile: "Bine aţi venit la aplicaţia web Swipe. Aplicaţia nu este configurată. Instrumentul de creare interactiv nu este suportat pe dispozitive mobile.",
				noBuilderIE8: "Instrumentul interactiv de creare a Swipe nu este suportat în versiunile Internet Explorer mai vechi decât 9.",
				noLayerView: "Bine aţi venit la aplicaţia web Swipe.<br />Aplicaţia nu este configurată încă.",
				appSave: "Eroare la salvarea aplicaţiei web",
				mapSave: "Eroare la salvarea hărţii web",
				notAuthorized: "Nu sunteţi autorizat pentru a configura această aplicaţie",
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
				builderButton: "Comutare la modul Instrument de creare"
			}
		},
		builder: {
			builder: {
				panelHeader: "CONFIGURARE APLICAŢIE",
				buttonSave: "SALVARE",
				buttonDiscard: "ANULARE",
				buttonSettings: "Setări",
				buttonView: "Mod de vizualizare",
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
				settingsLogoSocialLink: "Link"
			},
			settingsExtent: {
				settingsTabExtent: "Extindere",
				settingsExtentExplain: "Setaţi extinderea iniţială prin harta interactivă de mai jos.",
				settingsExtentExplainBottom: "Extinderea pe care o definiţi va modifica extinderea iniţială a hărţii web.",
				settingsExtentDrawBtn: "Trasare extindere nouă",
				settingsExtentModifyBtn: "Editare extindere curentă",
				settingsExtentApplyBtn: "Aplicare pe harta principală"
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
				settingsTabDataModel: "Strat tematic Swipe",
				settingsDataModelExplainSwipe: "Alegeţi stratul tematic sau harta web care va apărea şi dispărea cu Swipe.",
				settingsDataModelExplainSwipe2: "",
				settingsDataModelExplainSpyGlass: "Alegeţi stratul tematic sau harta web care va apărea în ochean.",
				settingsDataModelOneMap: "O hartă web, un singur strat tematic",
				settingsDataModel1Explain: "Selectaţi un strat tematic de controlat de către instrumentul Swipe.",
				settingsDataModel1Warning: "Se pot utiliza numai serviciile Dinamic, Tile şi Imagine. Dacă stratul tematic este ascuns de straturi tematice superioare, preluarea nu va avea niciun efect.",
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
				settingsDataModel2HelpTitle: "Cum găsiţi ID-urile hărţilor web",
				settingsDataModel2HelpContent: "Copiaţi şi lipiţi cifre după semnul „=” în URL-ul hărţii web"
			},
			settingsLegend: {
				settingsTabLegend: "Configuraţie aplicaţie",
				settingsLegendExplain: "Selectaţi setările pentru configuraţia aplicaţiei.",
				settingsLegendEnable: "Activare legendă",
				settingsDescriptionEnable: "Activare descriere",
				settingsBookmarksEnable: "Activare serii Swipe",
				settingsLegendHelpTitle: "Modul de rafinare a conţinutului legendei",
				settingsLegendHelpContent: "Utilizarea cuprinsului aplicaţiei de vizualizare a hărţilor web din ArcGIS.com (Ascunderea în legendă)",
				preview: "Previzualizare interfaţă cu utilizatorul"
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
				modalApply: "Deschidere aplicaţie"
			}
		}
    })
);