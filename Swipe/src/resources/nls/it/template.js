define(
	({
		viewer: {
			loading: {
				step1: "CARICAMENTO APPLICAZIONE",
				step2: "CARICAMENTO DATI",
				step3: "INIZIALIZZAZIONE IN CORSO",
				fail: "Caricamento scorrimento con dito non riuscito",
				loadBuilder: "PASSAGGIO A MODALITÀ GENERATORE",
				failButton: "Riprova"
			},
			errors: {
				boxTitle: "Si è verificato un errore",
				portalSelf: "Errore irreversibile: impossibile ottenere la configurazione del portale",
				invalidConfig: "Errore irreversibile: configurazione non valida",
				invalidConfigNoWebmap: "Errore irreversibile: configurazione non valida (nessuna mappa Web specificata)",
				createMap: "Impossibile creare la mappa",
				invalidApp: "Errore irreversibile: impossibile caricare l\'applicazione",
				initMobile: "Benvenuto nell\'applicazione Web per scorrimento con dito. L\'applicazione non è configurata. Il generatore interattivo non è supportato sui dispositivi mobili.",
				noBuilderIE8: "Il generatore interattivo per scorrimento con dito non è supportato dalle versioni di Internet Explorer precedenti alla versione 9.",
				noLayerView: "Benvenuto nell\'applicazione Web per scorrimento con dito.<br />L\'applicazione non è ancora configurata.",
				appSave: "Errore durante il salvataggio dell\'applicazione Web",
				mapSave: "Errore durante il salvataggio della mappa Web",
				notAuthorized: "L\'utente non è autorizzato ad accedere a questa applicazione",
				conflictingProjectionsTitle: "Proiezioni in conflitto",
				conflictingProjections: "Scorrimento non supportato in caso di utilizzo di due mappe Web con proiezioni differenti. Aprire la pagina delle impostazioni e utilizzare una mappa Web con proiezione uguale alla prima mappa Web.",
				cpButton: "Chiudi"
			},
			mobileView: {
				hideIntro: "NASCONDI INTRODUZIONE",
				navLeft: "Legenda",
				navMap: "Mappa",
				navRight: "Dati"
			},
			desktopView: {
				storymapsText: "Mappa collegata a una storia",
				builderButton: "Passa a modalità generatore",
				bitlyTooltip: "Ottieni un collegamento breve all\'applicazione"
			}
		},
		builder: {
			builder: {
				panelHeader: "CONFIGURAZIONE APPLICAZIONE",
				buttonSave: "SALVA",
				buttonDiscard: "ANNULLA",
				buttonSettings: "Impostazioni",
				buttonView: "Modalità visualizzazione",
				buttonItem: "Aprire l\'elemento dell\'applicazione Web",
				noPendingChange: "Nessuna modifica in sospeso",
				unSavedChangeSingular: "1 modifica non salvata",
				unSavedChangePlural: "modifiche non salvate",
				popoverDiscard: "Annullare tutte le modifiche non salvate?",
				yes: "Sì",
				no: "No",
				popoverOpenViewExplain: "Se si apre il viewer, tutte le modifiche non salvate andranno perse",
				popoverOpenViewOk: "OK",
				popoverOpenViewCancel: "Annulla",
				popoverSaveWhenDone: "Al termine, non dimenticare di salvare",
				closeWithPendingChange: "Confermare l\'azione? Le modifiche apportate andranno perse.",
				gotIt: "OK",
				savingApplication: "Salvataggio dell\'applicazione",
				saveSuccess: "Salvataggio dell\'applicazione completato",
				saveError: "Salvataggio non riuscito. Riprovare",
				signIn: "Effettuare l\'accesso con un account su",
				signInTwo: "per salvare l\'applicazione."
			},
			header:{
				editMe: "Modifica utente",
				templateTitle: "Imposta titolo modello",
				templateSubtitle: "Imposta sottotitolo modello"
			},
			settings: {
				settingsHeader: "Impostazioni applicazione",
				modalCancel: "Annulla",
				modalApply: "Applica"
			},
			settingsColors: {
				settingsTabColor: "Tema",
				settingsColorExplain: "Scegliere un tema per l\'app o definire i propri colori.",
				settingsLabelColor: "Colori sfondo intestazione e pannello laterale"
			},
			settingsHeader: {
				settingsTabLogo: "Intestazione",
				settingsLogoExplain: "Personalizza il logo dell\'intestazione (max 250 x 50 px).",
				settingsLogoEsri: "Logo Esri",
				settingsLogoNone: "Nessun logo",
				settingsLogoCustom: "Logo personalizzato",
				settingsLogoCustomPlaceholder: "URL immagine",
				settingsLogoCustomTargetPlaceholder: "Collegamento clickthrough",
				settingsLogoSocialExplain: "Personalizzare il collegamento in alto a destra nell\'intestazione.",
				settingsLogoSocialText: "Testo",
				settingsLogoSocialLink: "Collegamento",
				settingsLogoSocialDisabled: "Questa feature è stata disabilitata dall\'Amministratore"
			},
			settingsExtent: {
				settingsTabExtent: "Estensione",
				settingsExtentExplain: "Impostare l\'estensione iniziale mediante la mappa interattiva riportata di seguito.",
				settingsExtentExplainBottom: "L\'estensione specificata modificherà l\'estensione iniziale della mappa Web. Tenere presente che tale estensione non verrà utilizzata se si sta effettuando una serie di scorrimenti.",
				settingsExtentDateLineError: "L\'estensione non può attraversare il meridiano per 180° di longitudine",
				settingsExtentDateLineError2: "Errore di calcolo dell\'estensione",
				settingsExtentDrawBtn: "Disegna una nuova estensione",
				settingsExtentModifyBtn: "Modifica l\'estensione corrente",
				settingsExtentApplyBtn: "Applica su mappa principale",
				settingsExtentUseMainMap: "Usa estensione della mappa principale"
			}
        },
		swipe: {
			mobileData: {
				noData: "Nessun dato da visualizzare.",
				noDataExplain: "Toccare la mappa per selezionare una feature e tornare qui",
				noDataMap: "Nessun dato per questa mappa",
				noPopup: "Nessun popup trovato per questa feature"
			},
			mobileLegend: {
				noLegend: "Nessuna legenda da visualizzare."
			},
			swipeSidePanel: {
				editTooltip: "Impostare la descrizione del pannello laterale",
				editMe: "Modifica utente",
				legendTitle: "Legenda"
			},
			infoWindow: {
				noFeature: "Nessun dato da visualizzare",
				noFeatureExplain: "Toccare la mappa per selezionare una feature"
			},
			settingsLayout: {
				settingsTabLayout: "Stile di scorrimento con dito",
				settingsLayoutExplain: "Scegliere uno stile per lo strumento per lo scorrimento con dito.",
				settingsLayoutSwipe: "Barra verticale",
				settingsLayoutSpyGlass: "Cannocchiale",
				settingsLayoutSelected: "Layout selezionato",
				settingsLayoutSelect: "Seleziona il layout",
				settingsSaveConfirm: "Per alcune modifiche è necessario salvare e ricaricare l\'applicazione"
			},
			settingsDataModel: {
				settingsTabDataModel: "Tipo di scorrimento con il dito",
				settingsDataModelExplainSwipe: "Su che cosa gli utenti possono scorrere con il dito?",
				settingsDataModelExplainSwipe2: "",
				settingsDataModelExplainSpyGlass: "Scegliere il layer o la mappa Web da visualizzare nel cannocchiale.",
				settingsDataModelOneMap: "Un layer in una mappa Web",
				settingsDataModel1Explain: "Selezionare un layer da scorrere con il dito",
				settingsDataModel1Warning: "Se il layer è nascosto dai layer superiori, lo scorrimento non ha alcun effetto.",
				settingsDataModel1SpyGlassExplain: "Selezionare il layer da visualizzare nel cannocchiale.",
				settingsDataModelTwoMaps: "Due mappe Web",
				settingsDataModelLayerIds: "ID layer mappa Web",
				settingsDataModelSelected: "Tipo selezionato",
				settingsDataModelWebmapSwipeId1: "ID mappa Web destro",
				settingsDataModelWebmapSwipeId2: "ID mappa Web sinistro",
				settingsDataModelWebmapGlassId1: "ID mappa Web principale",
				settingsDataModelWebmapGlassId2: "ID mappa Web cannocchiale",
				settingsDataModelSelect: "Seleziona questo tipo",
				settingsDataModel2Explain: "Scorrimento con il dito con un\'altra mappa Web.",
				settingsDataModel2SpyGlassExplain: "Mostra un\'altra mappa Web.",
				settingsDataModel2HelpTitle: "Come trovare gli ID delle mappe Web",
				settingsDataModel2HelpContent: "Copiare e incollare le cifre dopo il segno \"=\" nell\'URL della mappa Web"
			},
			settingsLegend: {
				settingsTabLegend: "Layout app",
				settingsLegendExplain: "Selezionare le impostazioni di layout dell\'applicazione.",
				settingsLegendEnable: "Abilita legenda",
				settingsDescriptionEnable: "Abilita descrizione",
				settingsBookmarksEnable: "Abilita serie di scorrimenti con dito",
				settingsPopupDisable: "Abilita popup",
				settingsLocationSearchEnable: "Abilita ricerca con localizzatore",
				settingsGeolocatorEnable: "Abilita geolocalizzatore",
				settingsLegendHelpContent: "Per definire il contenuto della legenda, utilizzare il sommario del map viewer Web di ArcGIS.com (Nascondi nella legenda)",
				settingsSeriesHelpContent: "La serie di scorrimenti con dito è un\'opzione di spostamento tra le schede che guida il visualizzatore a una particolare estensione e visualizza un testo e una descrizione nel pannello laterale. Durante l\'attivazione iniziale i segnalibri delle mappe Web verranno importati e utilizzati per pre-popolare la barra della serie. Se si disabilita l\'opzione relativa alla serie viene disattivata anche la barra corrispondente, tuttavia la configurazione della serie viene mantenuta per usi futuri.", 
				settingsSeriesHelpContent2: "La serie di scorrimenti consente di creare e modificare una selezione di posizioni unitamente ai titoli e al testo cui sono associate. Verranno visualizzati gli eventuali segnalibri presenti nella mappa Web. È possibile disabilitare la serie, ma la configurazione verrà mantenuta per usi futuri.",
				settingsSeriesHelpLink: "Per un esempio di applicazione con una serie di scorrimenti, vedere qui",
				preview: "Anteprima interfaccia utente",
				settingsLocateButtonExplain: "Questa funzionalità è supportata nella maggior parte dei browser per dispositivi mobili e desktop (incluso Internet Explorer 9 e versioni successive).",
				settingsLocateButton: "Abilita un pulsante Trova posizione nei browser supportati",
				settingsAddressSearch: "Abilita uno strumento per la ricerca di indirizzi"
			},
			settingsSwipePopup: {
				settingsSwipePopup: "Popup",
				settingsSwipePopupExplain: "Personalizza l\'aspetto dell\'intestazione dei popup per aiutare l\'utente ad associare i popup con i layer delle mappe.",
				settingsSwipePopupSwipe1: "Mappa sinistra",
				settingsSwipePopupSwipe2: "Mappa destra",
				settingsSwipePopupGlass1: "Mappa principale",
				settingsSwipePopupGlass2: "Mappa cannocchiale",
				settingsSwipePopupTitle: "Titolo intestazione",
				settingsSwipePopupColor: "Colore intestazione"
			},
			initPopup: {
				initHeader: "Benvenuto in Swipe Builder",
				modalNext: "Avanti",
				modalPrev: "Indietro",
				modalApply: "Apri l\'app"
			},
			seriesPanel: {
				title: "Titolo",
				descr: "Descrizione",
				discard: "Annulla segnalibro",
				saveExtent: "Impostare l\'estensione del segnalibro",
				discardDisabled: "Impossibile rimuovere il segnalibro. È possibile disabilitare la serie di scorrimenti nelle impostazioni."
			}
		}
    })
);