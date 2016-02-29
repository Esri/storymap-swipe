define(
	 ({
		viewer: {
			loading: {
				step1: "CARICAMENTO STORIA",
				step2: "CARICAMENTO DATI",
				step3: "INIZIALIZZAZIONE IN CORSO",
				fail: "Caricamento scorrimento con dito non riuscito",
				loadBuilder: "PASSAGGIO A MODALITÀ GENERATORE",
				redirectSignIn: "REINDIRIZZAMENTO ALLA PAGINA DI ACCESSO",
				redirectSignIn2: "(pagina alla quale si verrà reindirizzati dopo l\'accesso)",
				failButton: "Riprova"
			},
			errors: {
				boxTitle: "Si è verificato un errore",
				portalSelf: "Errore irreversibile: impossibile ottenere la configurazione del portale",
				invalidConfig: "Errore irreversibile: configurazione non valida",
				invalidConfigNoWebmap: "Errore irreversibile: configurazione non valida (mappa Web o identificatore dell\'applicazione non specificati in index.html)",
				invalidConfigNoAppDev: "Nessun identificatore applicazione mappatura Web o mappa Web specificati nei parametri URL (?appid= o ?webmap=). Nella modalità di sviluppo, la configurazione dell\'ID dell\'app e della mappa Web in index.html viene ignorata.",
				createMap: "Impossibile creare la mappa",
				invalidApp: "Errore irreversibile: impossibile caricare la storia",
				initMobile: "Benvenuto nell\'applicazione Web per scorrimento con dito. L\'applicazione non è configurata. Il generatore interattivo non è supportato sui dispositivi mobili.",
				initMobile2: "Il generatore Swipe non è supportato per queste dimensioni schermo. Se possibile, ridimensionare il browser per accedere al generatore o creare la storia su un dispositivo con uno schermo più grande.",
				initMobile3: "Ruotare il dispositivo nell\'orientamento orizzontale per utilizzare il generatore Swipe.",
				noBuilderIE8: "Il generatore interattivo per scorrimento con dito non è supportato dalle versioni di Internet Explorer precedenti alla versione 9.",
				noLayerView: "Benvenuto nell\'applicazione Web per scorrimento con dito.<br />L\'applicazione non è ancora configurata.",
				appSave: "Errore durante il salvataggio della storia",
				mapSave: "Errore durante il salvataggio della mappa Web",
				notAuthorized: "Non si è autorizzati ad accedere alla storia.",
				notAuthorizedBuilder: "L\'utente non è autorizzato a utilizzare il generatore Swipe e Cannocchiale.",
				conflictingProjectionsTitle: "Proiezioni in conflitto",
				conflictingProjections: "Scorrimento non supportato in caso di utilizzo di due mappe Web con proiezioni differenti. Aprire la pagina delle impostazioni e utilizzare una mappa Web con proiezione uguale alla prima mappa Web.",
				cpButton: "Chiudi",
				unspecifiedConfigOwner: "L\'utente autorizzato non è stato configurato.",
				invalidConfigOwner: "Il proprietario della storia non è autorizzato."
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
				facebookTooltip: "Condividi su Facebook",
				twitterTooltip: "Condividi su Twitter",
				bitlyTooltip: "Crea un link breve",
				tooltipAutoplayDisabled: "Questo non è disponibile nella modalità di riproduzione automatica",
				autoplayLabel: "Modalità di riproduzione automatica",
				autoplayExplain1: "La modalità di riproduzione automatica consente di avanzare nella storia a intervalli regolari. Questa soluzione è ideale in un chiosco o monitor pubblico, ma occorre tenere presente che in altre situazioni potrebbe creare problemi di lettura della storia. Questa funzione non è supportata su display di piccole dimensioni.",
				autoplayExplain2: "Quando questa modalità è attiva, sono disponibili controlli per riprodurre/sospendere la storia e regolare la velocità di navigazione."
			}
		},
		builder: {
			builder: {
				panelHeader: "CONFIGURAZIONE STORIA",
				buttonSave: "SALVA",
				buttonHelp: "Guida",
				buttonShare: "Condividi",
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
				savingApplication: "Salvataggio storia",
				saveSuccess: "Storia salvata",
				saveError: "Salvataggio non riuscito. Riprovare",
				saveError2: "Salvataggio non riuscito a causa di un tag HTML non valido in un nome o in una descrizione",
				saveError3: "Specificare il titolo",
				signIn: "Effettuare l\'accesso con un account su",
				signInTwo: "per salvare la storia."
			},
			header:{
				editMe: "Modifica utente",
				templateTitle: "Imposta titolo modello",
				templateSubtitle: "Imposta sottotitolo modello"
			},
			settings: {
				settingsHeader: "Impostazioni storia",
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
				settingsLogoSocialDisabled: "Questa feature è stata disabilitata dall\'amministratore"
			},
			settingsExtent: {
				settingsTabExtent: "Estensione",
				settingsExtentExplain: "Impostare l\'estensione iniziale mediante la mappa interattiva riportata di seguito.",
				settingsExtentExplainBottom: "L\'estensione specificata modificherà l\'estensione iniziale della mappa Web. Tenere presente che tale estensione non verrà utilizzata se si sta effettuando una serie di scorrimenti.",
				settingsExtentDateLineError: "L\'estensione non può attraversare il meridiano per 180ï¿½ di longitudine",
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
				settingsSaveConfirm: "Per alcune modifiche è necessario salvare e ricaricare la storia"
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
				settingsDataModel2HelpContent: "Copiare e incollare le cifre dopo il segno \"=\" nell\'URL della mappa Web",
				switchMaps: "Cambia mappa",
				browseWebMaps: "Sfoglia mappe Web"
			},
			settingsLegend: {
				settingsTabLegend: "Layout app",
				settingsLegendExplain: "Selezionare le impostazioni di layout.",
				settingsLegendEnable: "Abilita legenda",
				settingsDescriptionEnable: "Abilita descrizione",
				settingsBookmarksEnable: "Abilita serie di scorrimenti con dito",
				settingsPopupDisable: "Abilita popup",
				settingsLocationSearchEnable: "Abilita ricerca con localizzatore",
				settingsGeolocatorEnable: "Abilita geolocalizzatore",
				settingsLegendHelpContent: "Per definire il contenuto della legenda, utilizzare il sommario del map viewer Web di ArcGIS (Nascondi nella legenda)",
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
				initHeader: "Benvenuti al generatore Scorrimento con dito/Cannocchiale",
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
			},
			helpPopup: {
				title: "Guida",
				close: "Chiudi",
				tab1: {
					div1: "Il modello Scorrimento con dito/Cannocchiale consente di confrontare due mappe Web distinte o due layer di un\'unica mappa Web grazie a un\'applicazione Web interessante e di facile utilizzo che può essere eseguita in qualsiasi browser Web su qualsiasi dispositivo, inclusi smartphone e tablet.",
					div2: "Per ulteriori informazioni sul modello Scorrimento con dito/Cannocchiale, inclusi esempi creati dagli utenti, <a href='http://storymaps.arcgis.com/en/app-list/swipe/' target='_blank'>visitare il sito Web delle mappe collegate a storie</a>. È anche possibile seguire Esri su Twitter all\'indirizzo <a href='https://twitter.com/EsriStoryMaps' target='_blank'>@EsriStoryMaps</a>.",
					div3: "Esri è lieta di ricevere commenti e suggerimenti degli utenti. Se si desidera porre una domanda, richiedere una nuova funzionalità o si ritiene di aver individuato un difetto nel software, visitare il <a href='http://links.esri.com/storymaps/forum' target='_blank'>forum degli utenti delle mappe collegate a storie</a>."
				}
			},
			share: {
				firstSaveTitle: "Storia salvata",
				manageStory: "Gestisci la storia",
				manageStoryA1: "Suggerimento: è possibile utilizzare %LINK1% per controllare che la storia non contenga errori e cambiare la modalità di condivisione dei suoi componenti. My Stories consente anche di migliorare l\'aspetto della storia quando viene condivisa su reti social. È possibile reperire ulteriori informazioni su altre feature utili di My Stories in questi %LINK2%.",
				manageStoryA1V1: "My Stories",
				manageStoryA1V2: "post del blog",
				shareTitle: "Condividi la storia",
				sharePrivateHeader: "La storia non è condivisa. Condividerla?",
				sharePrivateBtn1: "Condividi pubblicamente",
				sharePrivateBtn2: "Condividi con l\'organizzazione",
				sharePrivateProgress: "Condivisione in corso...",
				sharePrivateErr: "Condivisione non riuscita. Riprovare o",
				sharePrivateOk: "Condivisione aggiornata. Caricamento in corso...",
				shareStatus1: "Storia non salvata",
				shareStatus2: "Storia condivisa pubblicamente",
				shareStatus3: "Storia condivisa nell\'ambito dell\'organizzazione",
				shareStatus4: "Storia non condivisa",
				sharePreviewAsUser: "Anteprima",
				shareHeader1: "La storia è <strong>accessibile pubblicamente</strong>.",
				shareHeader2: "La storia è accessibile ai membri dell\'organizzazione (accesso obbligatorio).",
				shareLinkHeader: "Condividi la storia",
				shareLinkOpen: "APRI",
				learnMore: "Ulteriori informazioni",
				shareA1: "Utilizzare %SHAREIMG% nella <a href='%LINK1%' target='_blank'>pagina degli elementi dell\'applicazione</a>. Se si desidera anche annullare la condivisione della mappa Web, utilizzare la <a href='%LINK2%' target='_blank'>pagina degli elementi della mappa Web</a>.",
				shareWarning: "La condivisione %WITH% è stata disabilitata perché non si è proprietari della <a href='%LINK%' target='_blank'>mappa Web</a>.",
				shareWarningWith1: "con il pubblico",
				shareWarningWith2: "pubblicamente e con l\'organizzazione"
			},
			directCreation: {
				header: "Benvenuti al generatore Scorrimento con dito/Cannocchiale",
				mapPickHeader: "Per iniziare, immettere un ID mappa valido oppure utilizzare il pulsante Cerca per cercare mappe Web.",
				launchBuilder: "Avvia generatore",
				chooseWebmapLbl: "Scegli mappa Web...",
				explain2: "Per creare una Story Map Swipe o Cannocchiale, utilizzare il pulsante seguente per selezionare la mappa Web esistente che si desidera utilizzare. In alternativa, è possibile incollare l\'ID della mappa Web nel campo sottostante.",
				explain3: "Se si desidera utilizzare due mappe Web nella mappa collegata a storie, la seconda mappa verrà richiesta più avanti quando si sceglie la relativa opzione.",
				webmapPlaceholder: "Immetti un ID mappa Web..."
			},
			saveErrorSocial: {
				title: "Aggiornamento condivisione con social media",
				panel1: "L\'aspetto della storia sui social media è stata migliorata, ma il titolo dell\'elemento applicazione Web ArcGIS è diverso dal titolo della storia.",
				panel1tooltip: "Se si definisce un titolo, un riepilogo e un\'immagine di anteprima, l\'aspetto della storia sarà:",
				panel2:	"Specificare il titolo che si desidera utilizzare sui social media:",
				panel2q1: "Titolo della storia (consigliato)",
				panel2q1tooltip: "Se si sceglie questa opzione, il titolo dell\'elemento verrà modificato per corrispondere al titolo della storia e ulteriori modifiche nel generatore verranno sincronizzate.",
				panel2q2: "Titolo elemento",
				panel3: "Per migliorare ulteriormente l\'aspetto della storia sui social media utilizzare ${MYSTORIES} per aggiungere un riepilogo e un\'immagine di anteprima.",
				panel4: "Non visualizzare più avvisi per questa storia",
				mystories: "My Stories",
				btnSave: "Salva"
			}
		},
		configure: {
			mapdlg:{
				items:{
					organizationLabel: "La mia organizzazione",
					onlineLabel: "ArcGIS Online",
					contentLabel: "I miei contenuti",
					favoritesLabel: "I miei preferiti"
				},
				title: "Seleziona mappa Web",
				searchTitle: "Cerca",
				ok: "OK",
				cancel: "Annulla",
				placeholder: "Immettere il termine da cercare"
			}
		}
    })
);
