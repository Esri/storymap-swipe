define(
	({
		viewer: {
			loading: {
				step1: "WCZYTYWANIE APLIKACJI",
				step2: "WYCZYTYWANIE DANYCH",
				step3: "INICJOWANIE",
				fail: "Przepraszamy, wczytywanie narzędzia odsłaniania nie powiodło się",
				loadBuilder: "PRZEŁĄCZANIE DO TRYBU KREATORA",
				failButton: "Ponów próbę"
			},
			errors: {
				boxTitle: "Wystąpił błąd",
				invalidConfig: "Błąd krytyczny: Nieprawidłowa konfiguracja",
				invalidConfigNoWebmap: "Błąd krytyczny: Nieprawidłowa konfiguracja (brak zdefiniowanej mapy internetowej)",
				createMap: "Nie można utworzyć mapy",
				invalidApp: "Błąd krytyczny: Nie można wczytać aplikacji",
				initMobile: "Witamy w internetowej aplikacji odsłaniania. Aplikacja nie została skonfigurowana. Interaktywny kreator nie jest obsługiwany na urządzeniach przenośnych.",
				noBuilderIE8: "Interaktywny kreator narzędzia odsłaniania nie jest obsługiwany przez przeglądarkę Internet Explorer w wersji starszej niż 9.",
				noLayerView: "Witamy w internetowej aplikacji odsłaniania.<br />Aplikacja nie została jeszcze skonfigurowana.",
				appSave: "Błąd podczas zapisywania aplikacji internetowej",
				mapSave: "Błąd podczas zapisywania mapy internetowej",
				notAuthorized: "Nie masz odpowiednich uprawnień do przeprowadzenia konfiguracji aplikacji.",
				conflictingProjectionsTitle: "Konfliktujące odwzorowania",
				conflictingProjections: "Narzędzie odsłaniania nie obsługuje dwóch map internetowych o różnych odwzorowaniach. Przejdź do ustawień i wybierz mapę internetową o tym samym odwzorowaniu co pierwsza użyta mapa.",
				cpButton: "Zamknij"
			},
			mobileView: {
				hideIntro: "UKRYJ WPROWADZENIE",
				navLeft: "Legenda",
				navMap: "Mapa",
				navRight: "Dane"
			},
			desktopView: {
				storymapsText: "Mapa z historią",
				builderButton: "Przełącz w tryb konstruktora"
			}
		},
		builder: {
			builder: {
				panelHeader: "APPLICATION CONFIGURATION",
				buttonSave: "SAVE",
				buttonDiscard: "CANCEL",
				buttonSettings: "Ustawienia",
				buttonView: "Tryb wyświetlania",
				noPendingChange: "Brak oczekujących zmian",
				unSavedChangeSingular: "1 niezapisana zmiana",
				unSavedChangePlural: "niezapisane zmiany",
				popoverDiscard: "Na pewno chcesz odrzucić wszystkie niezapisane zmiany?",
				yes: "Tak",
				no: "Nie",
				popoverOpenViewExplain: "Otwarcie przeglądarki spowoduje utratę niezapisanych zmian",
				popoverOpenViewOk: "OK",
				popoverOpenViewCancel: "Anuluj",
				popoverSaveWhenDone: "Nie zapomnij zapisać po zakończeniu pracy",
				closeWithPendingChange: "Na pewno chcesz zatwierdzić czynność? Twoje zmiany zostaną utracone.",
				gotIt: "OK",
				savingApplication: "Zapisywanie aplikacji",
				saveSuccess: "Aplikacja została pomyślnie zapisana",
				saveError: "Zapisywanie nie powiodło się, spróbuj ponownie",
				signIn: "Zaloguj się na konto,",
				signInTwo: "aby zapisać aplikację."
			},
			header:{
				editMe: "Zmodyfikuj mnie!",
				templateTitle: "Ustaw tytuł szablonu",
				templateSubtitle: "Ustaw podtytuł szablonu"
			},
			settings: {
				settingsHeader: "Ustawienia aplikacji",
				modalCancel: "Anuluj",
				modalApply: "Zastosuj"
			},
			settingsColors: {
				settingsTabColor: "Motyw",
				settingsColorExplain: "Wybierz motyw aplikacji lub zdefiniuj własną kolorystykę.",
				settingsLabelColor: "Kolory nagłówka i tła panelu bocznego"
			},
			settingsHeader: {
				settingsTabLogo: "Nagłówek",
				settingsLogoExplain: "Dostosuj logo w nagłówku (maksymalny rozmiar to 250 x 50 pikseli).",
				settingsLogoEsri: "Logo firmy Esri",
				settingsLogoNone: "Brak logo",
				settingsLogoCustom: "Logo niestandardowe",
				settingsLogoCustomPlaceholder: "Adres URL obrazu",
				settingsLogoCustomTargetPlaceholder: "łącze przekierowujące do innej strony",
				settingsLogoSocialExplain: "Dostosuj łącze nagłówka wyświetlane u góry po prawej.",
				settingsLogoSocialText: "Tekst",
				settingsLogoSocialLink: "Łącze"
			},
			settingsExtent: {
				settingsTabExtent: "Zasięg",
				settingsExtentExplain: "Ustaw początkowy zasięg za pomocą poniższej mapy interaktywnej.",
				settingsExtentExplainBottom: "Zdefiniowany zasięg zostanie użyty do modyfikacji początkowego zasięgu mapy internetowej.",
				settingsExtentDrawBtn: "Określ nowy zasięg",
				settingsExtentModifyBtn: "Zmień bieżący zasięg",
				settingsExtentApplyBtn: "Zastosuj do mapy głównej"
			}
        },
		swipe: {
			mobileData: {
				noData: "Brak danych do wyświetlenia!",
				noDataExplain: "Dotknij mapę, aby wybrać obiekt i powrócić tutaj",
				noDataMap: "Brak danych dla tej mapy",
				noPopup: "Nie znaleziono okna podręcznego dla tego obiektu"
			},
			mobileLegend: {
				noLegend: "Brak legendy do wyświetlenia."
			},
			swipeSidePanel: {
				editTooltip: "Ustaw opis panelu bocznego",
				editMe: "Zmodyfikuj mnie!",
				legendTitle: "Legenda"
			},
			infoWindow: {
				noFeature: "Brak danych do wyświetlenia",
				noFeatureExplain: "Dotknij mapę, aby wybrać obiekt"
			},
			settingsLayout: {
				settingsTabLayout: "Styl odsłaniania",
				settingsLayoutExplain: "Wybierz styl dla narzędzia odsłaniania.",
				settingsLayoutSwipe: "Pasek pionowy",
				settingsLayoutSpyGlass: "Lunetka",
				settingsLayoutSelected: "Wybrany układ",
				settingsLayoutSelect: "Wybierz ten układ",
				settingsSaveConfirm: "Niektóre z dokonanych zmian wymagają zapisania i ponownego wczytania aplikacji"
			},
			settingsDataModel: {
				settingsTabDataModel: "Warstwa odsłaniana",
				settingsDataModelExplainSwipe: "Wybierz warstwę lub mapę internetową, która będzie pojawiać się i znikać po zastosowaniu odsłaniania.",
				settingsDataModelExplainSwipe2: "",
				settingsDataModelExplainSpyGlass: "Wybierz warstwę lub mapę internetową, która pojawi się w lunetce.",
				settingsDataModelOneMap: "Jedna mapa internetowa, pojedyncza warstwa",
				settingsDataModel1Explain: "Wybierz warstwę, która ma być kontrolowana przez narzędzie odsłaniania.",
				settingsDataModel1Warning: "Można użyć jedynie usług dynamicznych, kafelkowych lub rastrowych. Jeśli warstwa jest ukryta pod górnymi warstwami, użycie odsłaniania nie przyniesie rezultatów.",
				settingsDataModel1SpyGlassExplain: "Wybierz warstwę, która ma pojawić się w lunetce.",
				settingsDataModelTwoMaps: "Dwie mapy internetowe",
				settingsDataModelLayerIds: "Identyfikatory warstwy mapy internetowej",
				settingsDataModelSelected: "Wybrany typ",
				settingsDataModelWebmapSwipeId1: "Identyfikator mapy internetowej po prawej stronie",
				settingsDataModelWebmapSwipeId2: "Identyfikator mapy internetowej po lewej stronie",
				settingsDataModelWebmapGlassId1: "Identyfikator głównej mapy internetowej",
				settingsDataModelWebmapGlassId2: "Identyfikator mapy internetowej z lunetki",
				settingsDataModelSelect: "Wybierz ten typ",
				settingsDataModel2Explain: "Odsłanianie z inną mapą internetową.",
				settingsDataModel2SpyGlassExplain: "Odkryj kolejną mapę internetową.",
				settingsDataModel2HelpTitle: "Jak odnaleźć identyfikator mapy internetowej",
				settingsDataModel2HelpContent: "Skopiuj i wklej cyfry po znaku „=” w adresie URL mapy internetowej"
			},
			settingsLegend: {
				settingsTabLegend: "Układ aplikacji",
				settingsLegendExplain: "Wybierz ustawienia układu aplikacji.",
				settingsLegendEnable: "Włącz legendę",
				settingsDescriptionEnable: "Włącz opis",
				settingsBookmarksEnable: "Włącz serię odsłaniania",
				settingsLegendHelpTitle: "Jak ulepszyć zawartość legendy",
				settingsLegendHelpContent: "Korzystanie ze spisu treści przeglądarki map ArcGIS.com (Ukryj w legendzie)",
				preview: "Podgląd interfejsu użytkownika"
			},
			settingsSwipePopup: {
				settingsSwipePopup: "Okno podręczne",
				settingsSwipePopupExplain: "Dostosuj wygląd nagłówka okien podręcznych, aby pomóc użytkownikom skojarzyć okna z warstwami map.",
				settingsSwipePopupSwipe1: "Mapa po lewej stronie",
				settingsSwipePopupSwipe2: "Mapa po prawej stronie",
				settingsSwipePopupGlass1: "Mapa główna",
				settingsSwipePopupGlass2: "Mapa w lunetce",
				settingsSwipePopupTitle: "Tytuł nagłówka",
				settingsSwipePopupColor: "Kolor nagłówka"
			},
			initPopup: {
				initHeader: "Witamy w kreatorze aplikacji odsłaniania",
				modalNext: "Dalej",
				modalApply: "Otwórz aplikację"
			}
		}
    })
);