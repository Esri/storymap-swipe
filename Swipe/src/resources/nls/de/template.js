define(
	({
		viewer: {
			loading: {
				step1: "ANWENDUNG WIRD GELADEN",
				step2: "DATEN WERDEN GELADEN",
				step3: "WIRD INITIALISIERT",
				fail: "\"Ausblenden\" konnte leider nicht geladen werden",
				loadBuilder: "ES WIRD ZUM BUILDER-MODUS GEWECHSELT",
				redirectSignIn: "UMLEITUNG ZUR ANMELDESEITE",
				redirectSignIn2: "(Sie werden nach der Anmeldung hierher umgeleitet)",
				failButton: "Wiederholen"
			},
			errors: {
				boxTitle: "Ein Fehler ist aufgetreten",
				portalSelf: "Schwerwiegender Fehler: Die Portalkonfiguration konnte nicht abgerufen werden",
				invalidConfig: "Schwerwiegender Fehler: Ungültige Konfiguration",
				invalidConfigNoWebmap: "Schwerwiegender Fehler: Ungültige Konfiguration (keine Webkarte angegeben)",
				createMap: "Karte konnte nicht erstellt werden",
				invalidApp: "Schwerwiegender Fahler: Die Anwendung kann nicht geladen werden",
				initMobile: "Willkommen bei der Webanwendung \"Ausblenden\". Die Anwendung ist nicht konfiguriert. Der interaktive Generator wird auf mobilen Geräten nicht unterstützt.",
				noBuilderIE8: "Der interaktive Generator \"Ausblenden\" wird in Internet Explorer vor Version 9 nicht unterstützt.",
				noLayerView: "Willkommen bei der Webanwendung \"Ausblenden\".<br />Die Anwendung ist noch nicht konfiguriert.",
				appSave: "Fehler beim Speichern der Webanwendung",
				mapSave: "Fehler beim Speichern der Webkarte",
				notAuthorized: "Sie sind nicht autorisiert, auf diese Anwendung zuzugreifen",
				conflictingProjectionsTitle: "In Konflikt stehende Projektionen",
				conflictingProjections: "Für zwei Webkarten mit unterschiedlichen Projektionen kann \"Ausblenden\ nicht verwendet werden. Bitte gehen Sie zu den Einstellungen und wählen Sie eine Webkarte, die die gleiche Projektion wie die erste Webkarte aufweist.",
				cpButton: "Schließen"
			},
			mobileView: {
				hideIntro: "INTRO AUSBLENDEN",
				navLeft: "Legende",
				navMap: "Karte",
				navRight: "Daten"
			},
			desktopView: {
				storymapsText: "Eine Story Map",
				builderButton: "Zum Generator-Modus wechseln",
				bitlyTooltip: "Kurzlink zur Anwendung abrufen"
			}
		},
		builder: {
			builder: {
				panelHeader: "ANWENDUNGSKONFIGURATION",
				buttonSave: "SPEICHERN",
				buttonHelp: "Hilfe",
				buttonShare: "Freigeben",
				buttonDiscard: "ABBRECHEN",
				buttonSettings: "Einstellungen",
				buttonView: "Anzeigemodus",
				buttonItem: "Webanwendungselement öffnen",
				noPendingChange: "Keine ausstehende Änderung",
				unSavedChangeSingular: "1 nicht gespeicherte Änderung",
				unSavedChangePlural: "nicht gespeicherte Änderungen",
				popoverDiscard: "Möchten Sie wirklich alle nicht gespeicherten Änderungen verwerfen?",
				yes: "Ja",
				no: "Nein",
				popoverOpenViewExplain: "Durch Öffnen des Viewers gehen alle nicht gespeicherten Änderungen verloren",
				popoverOpenViewOk: "OK",
				popoverOpenViewCancel: "Abbrechen",
				popoverSaveWhenDone: "Denken Sie daran, nach Abschluss des Vorgangs eine Speicherung durchzuführen",
				closeWithPendingChange: "Möchten Sie die Aktion wirklich bestätigen? Ihre Änderungen gehen dabei verloren.",
				gotIt: "OK",
				savingApplication: "Anwendung wird gespeichert",
				saveSuccess: "Anwendung wurde erfolgreich gespeichert",
				saveError: "Speichern fehlgeschlagen, versuchen Sie es erneut",
				saveError2: "Fehler beim Speichern aufgrund eines ungültigen HTML-Tags in einem Namen oder einer Beschreibung",
				saveError3: "Der Titel darf nicht leer sein",
				signIn: "Melden Sie sich mit einem Konto an,",
				signInTwo: "um die Anwendung zu speichern."
			},
			header:{
				editMe: "Bearbeiten!",
				templateTitle: "Vorlagentitel festlegen",
				templateSubtitle: "Untertitel der Vorlage festlegen"
			},
			settings: {
				settingsHeader: "Anwendungseinstellungen",
				modalCancel: "Abbrechen",
				modalApply: "Übernehmen"
			},
			settingsColors: {
				settingsTabColor: "Design",
				settingsColorExplain: "App-Design auswählen oder eigene Farben definieren.",
				settingsLabelColor: "Hintergrundfarben von Kopfzeile und seitlichem Fenster"
			},
			settingsHeader: {
				settingsTabLogo: "Kopfzeile",
				settingsLogoExplain: "Kopfzeilen-Logo anpassen (max. 250 x 50 Pixel).",
				settingsLogoEsri: "Esri Logo",
				settingsLogoNone: "Kein Logo",
				settingsLogoCustom: "Benutzerdefiniertes Logo",
				settingsLogoCustomPlaceholder: "Bild-URL",
				settingsLogoCustomTargetPlaceholder: "Link zum Durchklicken",
				settingsLogoSocialExplain: "Den Link rechts oben für die Kopfzeile anpassen.",
				settingsLogoSocialText: "Text",
				settingsLogoSocialLink: "Link",
				settingsLogoSocialDisabled: "Diese Funktion wurde vom Administrator deaktiviert"
			},
			settingsExtent: {
				settingsTabExtent: "Ausdehnung",
				settingsExtentExplain: "Die Anfangsausdehnung über die nachstehende interaktive Karte festlegen.",
				settingsExtentExplainBottom: "Die definierte Ausdehnung ändert die Anfangsausdehnung Ihrer Webkarte. Beachten Sie, dass die Ausdehnung nicht verwendet wird, wenn Sie eine Ausblendereihe festlegen.",
				settingsExtentDateLineError: "Die Ausdehnung darf nicht über den Meridian von 180ï¿½ Längengrad hinausreichen",
				settingsExtentDateLineError2: "Fehler beim Berechnen der Ausdehnung",
				settingsExtentDrawBtn: "Eine neue Ausdehnung darstellen",
				settingsExtentModifyBtn: "Die aktuelle Ausdehnung bearbeiten",
				settingsExtentApplyBtn: "Auf Hauptkarte anwenden",
				settingsExtentUseMainMap: "Ausdehnung der Haupkarte verwenden"
			}
        },
		swipe: {
			mobileData: {
				noData: "Keine Daten, die angezeigt werden können!",
				noDataExplain: "Auf die Karte tippen, um ein Feature auszuwählen und hierher zurückzukehren",
				noDataMap: "Keine Daten für diese Karte",
				noPopup: "Kein Pop-up für dieses Feature gefunden"
			},
			mobileLegend: {
				noLegend: "Keine Legende vorhanden."
			},
			swipeSidePanel: {
				editTooltip: "Beschreibung des Seitenfensters festlegen",
				editMe: "Bearbeiten!",
				legendTitle: "Legende"
			},
			infoWindow: {
				noFeature: "Keine anzeigbaren Daten vorhanden",
				noFeatureExplain: "Tippen Sie zum Auswählen eines Features auf die Karte"
			},
			settingsLayout: {
				settingsTabLayout: "Style für \"Ausblenden\"",
				settingsLayoutExplain: "Style für das Werkzeug \"Ausblenden\" auswählen.",
				settingsLayoutSwipe: "Vertikaler Balken",
				settingsLayoutSpyGlass: "Fernglas",
				settingsLayoutSelected: "Ausgewähltes Layout",
				settingsLayoutSelect: "Dieses Layout auswählen",
				settingsSaveConfirm: "Für einige Änderungen muss die Anwendung gespeichert und neu geladen werden"
			},
			settingsDataModel: {
				settingsTabDataModel: "Ausblendungstyp",
				settingsDataModelExplainSwipe: "Welche Elemente sollen Benutzer ausblenden können?",
				settingsDataModelExplainSwipe2: "",
				settingsDataModelExplainSpyGlass: "Layer oder Webkarte auswählen, der bzw. die im Fernglas angezeigt werden soll.",
				settingsDataModelOneMap: "Ein Layer in einer Webkarte",
				settingsDataModel1Explain: "Wählen Sie den Layer aus, der ausgeblendet werden soll",
				settingsDataModel1Warning: "Wenn der Layer von darüberliegenden Layern verdeckt wird, hat \"Ausblenden\" keine Wirkung.",
				settingsDataModel1SpyGlassExplain: "Layer auswählen, der im Fernglas angezeigt werden soll.",
				settingsDataModelTwoMaps: "Zwei Webkarten",
				settingsDataModelLayerIds: "Webkarten-Layer-IDs",
				settingsDataModelSelected: "Ausgewählter Typ",
				settingsDataModelWebmapSwipeId1: "ID der rechten Webkarte",
				settingsDataModelWebmapSwipeId2: "ID der linken Webkarte",
				settingsDataModelWebmapGlassId1: "ID der Hauptwebkarte",
				settingsDataModelWebmapGlassId2: "ID der Fernglas-Webkarte",
				settingsDataModelSelect: "Diesen Typ auswählen",
				settingsDataModel2Explain: "Mit anderer Webkarte ausblenden.",
				settingsDataModel2SpyGlassExplain: "Andere Webkarte einblenden.",
				settingsDataModel2HelpTitle: "Suchen der ID einer Webkarte",
				settingsDataModel2HelpContent: "Kopieren Sie die Ziffern nach dem Zeichen '=' in der URL der Webkarte, und fügen Sie sie ein",
				switchMaps: "Karten wechseln",
				browseWebMaps: "Webkarten durchsuchen"
			},
			settingsLegend: {
				settingsTabLegend: "App-Layout",
				settingsLegendExplain: "Layouteinstellungen der Anwendung auswählen.",
				settingsLegendEnable: "Legende aktivieren",
				settingsDescriptionEnable: "Beschreibung aktivieren",
				settingsBookmarksEnable: "Ausblendereihe aktivieren",
				settingsPopupDisable: "Pop-up aktivieren",
				settingsLocationSearchEnable: "Locator-Suche aktivieren",
				settingsGeolocatorEnable: "Geolocator aktivieren",
				settingsLegendHelpContent: "Verwenden Sie das Inhaltsverzeichnis des ArcGIS.com-Webkarten-Viewers, um den Legendeninhalt zu optimieren (In Legende ausblenden)",
				settingsSeriesHelpContent: "\"Ausblendereihe\" ist die Navigationsoption einer Registerkarte, die den Viewer zu einer bestimmten Ausdehnung führt und einen Titel und einen Beschreibungstext im Seitenfenster anzeigt. Bei der ersten Aktivierung werden Ihre Webkarten-Lesezeichen verwendet, um die Leiste der Reihe vorab auszufüllen. Durch Deaktivieren der Reihen-Option wird die Leiste der Reihen deaktiviert, die Konfiguration der Reihe wird jedoch zur zukünftigen Verwendung beibehalten.", 
				settingsSeriesHelpContent2: "Mit Ausblendereihen können Sie eine Auswahl von Positionen mit zugehörigen Titeln und Texten erstellen und bearbeiten.  Wenn Ihre Webkarte über Lesezeichen verfügt, werden diese angezeigt.  Sie können die Reihen deaktivieren, die Konfiguration wird jedoch zur zukünftigen Verwendung beibehalten.",
				settingsSeriesHelpLink: "Nachfolgend finden Sie ein Beispiel für eine Anwendung mit einer Ausblendereihe",
				preview: "Benutzeroberflächen-Vorschau",
				settingsLocateButtonExplain: "Diese Funktion wird auf den meisten mobilen Geräten und Desktop-Browsern (einschließlich Internet Explorer 9+) unterstützt.",
				settingsLocateButton: "Schaltfläche \"Suchen\" für unterstützte Browser aktivieren",
				settingsAddressSearch: "Werkzeug für Adressensuche aktivieren"
			},
			settingsSwipePopup: {
				settingsSwipePopup: "Pop-up",
				settingsSwipePopupExplain: "Darstellung der Pop-up-Kopfzeile anpassen, damit Benutzer Pop-ups mit Karten-Layern in Verbindung bringen können.",
				settingsSwipePopupSwipe1: "Linke Karte",
				settingsSwipePopupSwipe2: "Rechte Karte",
				settingsSwipePopupGlass1: "Hauptkarte",
				settingsSwipePopupGlass2: "Fernglas-Karte",
				settingsSwipePopupTitle: "Kopfzeilentitel",
				settingsSwipePopupColor: "Kopfzeilenfarbe"
			},
			initPopup: {
				initHeader: "Willkommen beim Ausblenden/Fernglas-Generator",
				modalNext: "Weiter",
				modalPrev: "Zurück",
				modalApply: "App öffnen"
			},
			seriesPanel: {
				title: "Titel",
				descr: "Beschreibung",
				discard: "Lesezeichen verwerfen",
				saveExtent: "Lesezeichenausdehnung festlegen",
				discardDisabled: "Sie können dieses Lesezeichen nicht entfernen. Das Ausblenden von Reihen lässt sich in den Einstellungen deaktivieren."
			},
			helpPopup: {
				title: "Hilfe",
				close: "Schließen",
				tab1: {
					div1: "Mit der Vorlage Ausblenden/Fernglas können zwei getrennte Webkarten oder zwei Layer einer einzelnen Webkarte in einer ansprechenden, benutzerfreundlichen Webanwendung verglichen werden. Sie kann in jedem Webbrowser auf einem beliebigen Gerät, einschließlich Smartphones und Tablets verwendet werden.",
					div2: "Zusätzliche Informationen zur Vorlage Ausblenden/Fernglas, darunter von Benutzern erstellte Beispiele, <a href='http://storymaps.arcgis.com/en/app-list/swipe/' target='_blank'> finden Sie auf der Story Maps-Website</a>. Sie können uns unter <a href='https://twitter.com/EsriStoryMaps' target='_blank'>@EsriStoryMaps</a> auch auf Twitter folgen.",
					div3: "Wir freuen uns darauf, von Ihnen zu hören! Ob Sie eine Frage haben, ein neues Feature anfordern möchten oder einen Fehler gefunden haben, besuchen Sie das <a href='http://links.esri.com/storymaps/forum' target='_blank'>Story Maps-Benutzerforum</a>."
				}
			},
			share: {
				firstSaveTitle: "Anwendung wurde erfolgreich gespeichert",
				firstSaveHeader: "Ihre Anwendung ist jetzt in ArcGIS Online gespeichert. Lesen Sie die folgenden Antworten auf häufig gestellte Fragen.",
				firstSaveA1: "Wenn Sie nicht mit ArcGIS Online vertraut sind oder eine Verknüpfung für den Zugriff auf die Autor-Oberfläche wünschen, können Sie den folgenden Link speichern: %LINK1%",
				firstSaveA1bis: "Die Anwendung befindet sich außerdem in Ihrem <a href='%LINK2%' target='_blank'>ArcGIS Online-Inhaltsordner</a>.",
				firstSaveQ2: "Ist meine Anwendung freigegeben?",
				firstSaveA2: "Ihre Anwendung ist zurzeit nicht freigegeben. Um sie freizugeben, verwenden Sie die FREIGABE-Schaltfläche.",
				shareTitle: "Anwendung freigeben",
				sharePrivateHeader: "Ihre Anwendung ist nicht freigegeben. Möchten Sie sie freigeben?",
				sharePrivateBtn1: "Öffentlich freigeben",
				sharePrivateBtn2: "Für meine Organisation freigeben",
				sharePrivateProgress: "Freigabe wird ausgeführt...",
				sharePrivateErr: "Fehler bei der Freigabe. Versuchen Sie es erneut, oder",
				sharePrivateOk: "Freigabe wurde erfolgreich aktualisiert. Wird geladen...",
				shareStatus1: "Anwendung ist nicht gespeichert",
				shareStatus2: "Anwendung ist öffentlich freigegeben",
				shareStatus3: "Anwendung ist innerhalb der Organisation freigegeben",
				shareStatus4: "Anwendung ist nicht freigegeben",
				sharePreviewAsUser: "Vorschau",
				shareHeader1: "Ihre Anwendung ist <strong>öffentlich zugänglich</strong>.",
				shareHeader2: "Ihre Anwendung ist für die Mitglieder Ihrer Organisation zugänglich (Anmeldung ist erforderlich).",
				shareLinkHeader: "Freigeben der Anwendung für Ihre Zielgruppe",
				shareLinkOpen: "ÖFFNEN",
				learnMore: "Weitere Informationen",
				shareQ1Opt1: "Wie bleibt die Anwendung privat?",
				shareQ1Opt2: "Wie bleibt die Anwendung privat oder wie wird sie veröffentlicht?",
				shareA1: "Verwenden Sie %SHAREIMG% auf <a href='%LINK1%' target='_blank'>der Seite der Anwendungselemente</a>. Wenn Sie die Freigabe der Webkarte aufheben möchten, verwenden Sie <a href='%LINK2%' target='_blank'>die Seite der Webkartenelemente</a>.",
				shareA1bis: "Wenn Sie die Freigabe des Feature-Service aufheben möchten, verwenden Sie <a href='%LINK1%' target='_blank'>die Seite der Feature-Service-Elemente</a>.",
				shareQ2: "Wie kann ich die Anwendung später bearbeiten?",
				shareQ2bis: "Wie kehre ich zur Autor-Oberfläche zurück?",
				shareA2div1: "Speichern Sie den folgenden Link %LINK1%, und verwenden Sie ihn erneut, oder verwenden Sie <a href='%LINK2%' target='_blank'>die Seite der Anwendungselemente</a>.",
				shareA2div2: "Wenn Sie bei ArcGIS.com als Besitzer der Anwendung angemeldet sind, enthält die Anwendung eine Schaltfläche zum Öffnen des interaktiven Builders:",				
				shareQ3: "Wo werden die Daten gespeichert?",
				shareA3: "Die Anwendungskonfiguration wird in diesem Webanwendungselement gespeichert</a>.",
				shareWarning: "Die Freigabe von %WITH% wurde deaktiviert, da Sie nicht der Besitzer der <a href='%LINK%' target='_blank'>Webkarte</a> sind.",
 				shareWarningWith1: "öffentlich",
 				shareWarningWith2: "öffentlich und für die Organisation"
			},
			directCreation: {
				header: "Willkommen beim Ausblenden/Fernglas-Generator",
				mapPickHeader: "Um zu beginnen, geben Sie eine gültige Webkarten-ID ein, oder verwenden Sie die Schaltfläche \"Suchen\", um Webkarten zu durchsuchen.",
				launchBuilder: "Generator starten",
				chooseWebmapLbl: "Webkarte auswählen...",
				explain2: "Um eine Story Map Ausblenden/Fernglas zu erstellen, wählen Sie anhand der Schaltfläche unten die vorhandene ArcGIS Online-Webkarte aus, die Sie verwenden möchten. Es ist auch möglich, die ID der Webkarte in das Feld unten einzufügen.",
				explain3: "Wenn Sie zwei Webkarten in der Story Map verwenden möchten, werden Sie bei Auswahl dieser Option später zur Eingabe der zweiten Webkarte aufgefordert.",
				webmapPlaceholder: "Webkarten-ID eingeben..."
			}
		},
		configure: {
			mapdlg:{
				items:{
					organizationLabel: "Eigene Organisation",
					onlineLabel: "ArcGIS Online",
					contentLabel: "Eigene Inhalte",
					favoritesLabel: "Eigene Favoriten"
				},
				title: "Webkarte auswählen",
				searchTitle: "Suchen",
				ok: "OK",
				cancel: "Abbrechen",
				placeholder: "Suchbegriff eingeben"
			}
		}
    })
);