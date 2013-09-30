define(
	({
		viewer: {
			loading: {
				step1: "ANWENDUNG WIRD GELADEN",
				step2: "DATEN WERDEN GELADEN",
				step3: "WIRD INITIALISIERT",
				fail: "\"Ausblenden\" konnte leider nicht geladen werden",
				loadBuilder: "ES WIRD ZUM BUILDER-MODUS GEWECHSELT",
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
				settingsExtentDateLineError: "Die Ausdehnung darf nicht über den Meridian von 180° Längengrad hinausreichen",
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
				settingsTabDataModel: "Layer für \"Ausblenden\"",
				settingsDataModelExplainSwipe: "Layer oder Webkarte auswählen, der bzw. die mit \"Ausblenden\" ein- und ausgeblendet wird.",
				settingsDataModelExplainSwipe2: "",
				settingsDataModelExplainSpyGlass: "Layer oder Webkarte auswählen, der bzw. die im Fernglas angezeigt werden soll.",
				settingsDataModelOneMap: "Eine Webkarte, einzelner Layer",
				settingsDataModel1Explain: "Layer auswählen, der mit dem Werkzeug \"Ausblenden\" gesteuert wird.",
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
				settingsDataModel2HelpTitle: "Suchen der Webkarten-ID",
				settingsDataModel2HelpContent: "Kopieren Sie die Ziffern nach dem Zeichen '=' in der URL der Webkarte, und fügen Sie sie ein"
			},
			settingsLegend: {
				settingsTabLegend: "App-Layout",
				settingsLegendExplain: "Layouteinstellungen der Anwendung auswählen.",
				settingsLegendEnable: "Legende aktivieren",
				settingsDescriptionEnable: "Beschreibung aktivieren",
				settingsBookmarksEnable: "Ausblendereihe aktivieren",
				settingsPopupDisable: "Pop-up aktivieren",
				settingsLegendHelpContent: "Verwenden Sie das Inhaltsverzeichnis des ArcGIS.com-Webkarten-Viewers, um den Legendeninhalt zu optimieren (In Legende ausblenden)",
				settingsSeriesHelpContent: "Bei der ersten Aktivierung werden Ihre Webkarten-Lesezeichen verwendet, um die Leiste der Reihe vorab auszufüllen. Wenn Sie die Reihen-Option später deaktivieren, geht die Konfiguration der Reihe nicht verloren, sondern steht bei einer eventuellen späteren Aktivierung der Serie wieder zur Verfügung.",
				preview: "Benutzeroberflächen-Vorschau"
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
				initHeader: "Willkommen beim Builder für \"Ausblenden\"",
				modalNext: "Weiter",
				modalApply: "App öffnen"
			},
			seriesPanel: {
				title: "Titel",
				descr: "Beschreibung",
				discard: "Lesezeichen verwerfen",
				saveExtent: "Lesezeichenausdehnung festlegen",
				discardDisabled: "Sie können dieses Lesezeichen nicht entfernen. Das Ausblenden von Reihen lässt sich in den Einstellungen deaktivieren."
			}
		}
    })
);