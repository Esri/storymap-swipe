define(
	 ({
		viewer: {
			loading: {
				step1: "TRWA WCZYTYWANIE NARRACJI",
				step2: "WCZYTYWANIE DANYCH",
				step3: "INICJOWANIE",
				fail: "Przepraszamy, wczytywanie narzędzia zwijania nie powiodło się",
				loadBuilder: "PRZEŁĄCZANIE DO TRYBU KREATORA",
				redirectSignIn: "PRZEKIEROWANIE DO STRONY LOGOWANIA",
				redirectSignIn2: "(tutaj nastąpi przekierowanie po zalogowaniu)",
				failButton: "Ponów próbę"
			},
			errors: {
				boxTitle: "Wystąpił błąd",
				portalSelf: "Błąd krytyczny: Nie można pobrać konfiguracji portalu",
				invalidConfig: "Błąd krytyczny: Nieprawidłowa konfiguracja",
				invalidConfigNoWebmap: "Błąd krytyczny: Nieprawidłowa konfiguracja (brak zdefiniowanej mapy internetowej)",
				createMap: "Nie można utworzyć mapy",
				invalidApp: "Błąd krytyczny: nie można wczytać narracji",
				initMobile: "Witamy w internetowej aplikacji swipe (z funkcją zwijania). Aplikacja nie została skonfigurowana. Interaktywny kreator nie jest obsługiwany na urządzeniach przenośnych.",
				initMobile2: "Kreator aplikacji odsłaniania nie jest obsługiwany przy tej wielkości ekranu.",
				noBuilderIE8: "Interaktywny kreator narzędzia zwijania nie jest obsługiwany przez przeglądarkę Internet Explorer w wersji starszej niż 9.",
				noLayerView: "Witamy w internetowej aplikacji swipe (z funkcją zwijania).<br />Aplikacja nie została jeszcze skonfigurowana.",
				appSave: "Błąd zapisywania narracji internetowej",
				mapSave: "Błąd podczas zapisywania mapy internetowej",
				notAuthorized: "Nie masz uprawnień dostępu do tej narracji",
				conflictingProjectionsTitle: "Konflikt odwzorowań",
				conflictingProjections: "Narzędzie zwijania nie obsługuje dwóch map internetowych o różnych odwzorowaniach. Przejdź do ustawień i wybierz mapę internetową o tym samym odwzorowaniu, co pierwsza użyta mapa.",
				cpButton: "Zamknij",
				unspecifiedConfigOwner: "Nie skonfigurowano autoryzowanego właściciela.",
				invalidConfigOwner: "Właściciel narracji nie jest autoryzowany."
			},
			mobileView: {
				hideIntro: "UKRYJ WPROWADZENIE",
				navLeft: "Legenda",
				navMap: "Mapa",
				navRight: "Dane"
			},
			desktopView: {
				storymapsText: "Story Map",
				builderButton: "Przełącz do trybu kreatora",
				facebookTooltip: "Udostępnij na Facebooku",
				twitterTooltip: "Udostępnij na Twitterze",
				bitlyTooltip: "Utwórz skrócone łącze"
			}
		},
		builder: {
			builder: {
				panelHeader: "KONFIGURACJA NARRACJI",
				buttonSave: "ZAPISZ",
				buttonHelp: "Pomoc",
				buttonShare: "Udostępnij",
				buttonDiscard: "ANULUJ",
				buttonSettings: "Ustawienia",
				buttonView: "Tryb wyświetlania",
				buttonItem: "Otwórz element aplikacji internetowej",
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
				closeWithPendingChange: "Na pewno chcesz zatwierdzić operację? Twoje zmiany zostaną utracone.",
				gotIt: "OK",
				savingApplication: "Trwa zapisywanie narracji",
				saveSuccess: "Narracja została pomyślnie zapisana",
				saveError: "Zapisywanie nie powiodło się, spróbuj ponownie",
				saveError2: "Próba zapisania nie powiodła się - błędny znacznik HTML w nazwie lub opisie",
				saveError3: "Tytuł nie może być pusty",
				signIn: "Zaloguj się na konto,",
				signInTwo: "aby zapisać narrację."
			},
			header:{
				editMe: "Edytuj!",
				templateTitle: "Skonfiguruj tytuł szablonu",
				templateSubtitle: "Skonfiguruj podtytuł szablonu"
			},
			settings: {
				settingsHeader: "Ustawienia narracji",
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
				settingsLogoSocialLink: "Łącze",
				settingsLogoSocialDisabled: "Opcja ta została wyłączona przez Administratora"
			},
			settingsExtent: {
				settingsTabExtent: "Zasięg",
				settingsExtentExplain: "Skonfiguruj początkowy zasięg za pomocą poniższej mapy interaktywnej.",
				settingsExtentExplainBottom: "Zdefiniowany zasięg zostanie użyty do modyfikacji początkowego zasięgu mapy internetowej. Należy pamiętać, że zasięg ten nie będzie używany podczas korzystania z serii zwijania.",
				settingsExtentDateLineError: "Zasięg nie może przebiegać przez południk 180ï¿½",
				settingsExtentDateLineError2: "Błąd w obliczaniu zasięgu",
				settingsExtentDrawBtn: "Wyświetl nowy zasięg",
				settingsExtentModifyBtn: "Zmień bieżący zasięg",
				settingsExtentApplyBtn: "Zastosuj do mapy głównej",
				settingsExtentUseMainMap: "Użyj głównego zasięgu mapy"
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
				editTooltip: "Skonfiguruj opis panelu bocznego",
				editMe: "Edytuj!",
				legendTitle: "Legenda"
			},
			infoWindow: {
				noFeature: "Brak danych do wyświetlenia",
				noFeatureExplain: "Dotknij mapę, aby wybrać obiekt"
			},
			settingsLayout: {
				settingsTabLayout: "Styl zwijania",
				settingsLayoutExplain: "Wybierz styl dla narzędzia zwijania.",
				settingsLayoutSwipe: "Pasek pionowy",
				settingsLayoutSpyGlass: "Lunetka",
				settingsLayoutSelected: "Wybrany układ",
				settingsLayoutSelect: "Wybierz ten układ",
				settingsSaveConfirm: "Niektóre z wprowadzonych zmian wymagają zapisania i ponownego wczytania narracji"
			},
			settingsDataModel: {
				settingsTabDataModel: "Typ zwijania",
				settingsDataModelExplainSwipe: "Co mogą zwijać użytkownicy?",
				settingsDataModelExplainSwipe2: "",
				settingsDataModelExplainSpyGlass: "Wybierz warstwę lub mapę internetową, która pojawi się w lunetce.",
				settingsDataModelOneMap: "Warstwa mapy internetowej",
				settingsDataModel1Explain: "Wybierz warstwę, która ma być zwijana.",
				settingsDataModel1Warning: "Jeśli warstwa jest ukryta pod górnymi warstwami, użycie zwijania nie przyniesie rezultatów.",
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
				settingsDataModel2HelpTitle: "Jak odnaleźć identyfikator mapy internetowej?",
				settingsDataModel2HelpContent: "Skopiuj i wklej cyfry po znaku „=” w adresie URL mapy internetowej",
				switchMaps: "Przełącz mapy",
				browseWebMaps: "Przeglądaj mapy internetowe"
			},
			settingsLegend: {
				settingsTabLegend: "Układ aplikacji",
				settingsLegendExplain: "Wybierz ustawienia kompozycji.",
				settingsLegendEnable: "Włącz legendę",
				settingsDescriptionEnable: "Włącz opis",
				settingsBookmarksEnable: "Włącz serię zwijania",
				settingsPopupDisable: "Włącz okno podręczne",
				settingsLocationSearchEnable: "Włącz wyszukiwanie przy użyciu lokatora",
				settingsGeolocatorEnable: "Włącz geolokator",
				settingsLegendHelpContent: "Aby ulepszyć zawartość legendy, skorzystaj z tabeli zawartości przeglądarki map ArcGIS.com (Ukryj w legendzie)",
				settingsSeriesHelpContent: "Seria zwijania to opcja nawigacji przy użyciu kart, która kieruje użytkownika do określonego zasięgu i wyświetla tytuł oraz tekst opisu w panelu bocznym. Podczas pierwszej aktywacji zakładki mapy internetowej zostaną użyte do wstępnego wypełnienia paska serii. Jeżeli wyłączysz później opcję serii, zostanie też wyłączony pasek serii, ale konfiguracja serii zostanie zachowana na przyszłość.",
				settingsSeriesHelpContent2: "Serie zwijania umożliwiają tworzenie i edycję wybranych lokalizacji z towarzyszącymi im tytułami i tekstem. Jeśli dana mapa internetowa zawiera zakładki, zostaną one wyświetlone. Istnieje możliwość wyłączenia serii, ale ta konfiguracja zostanie zapisana do późniejszego wykorzystania.",
				settingsSeriesHelpLink: "Tutaj znajduje się przykładowa aplikacja zawierająca serie zwijania",
				preview: "Zobacz podgląd interfejsu użytkownika",
				settingsLocateButtonExplain: "Ta funkcjonalność jest obsługiwana w większości urządzeń mobilnych i przeglądarek komputerowych (w tym Internet Explorer 9 i jego nowszych wersjach).",
				settingsLocateButton: "Włącz przycisk Lokalizuj w obsługiwanych przeglądarkach",
				settingsAddressSearch: "Włącz narzędzie wyszukiwania adresów"
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
				initHeader: "Witamy w kreatorze szablonu Zwijanie/Luneta",
				modalNext: "Dalej",
				modalPrev: "Powrót",
				modalApply: "Otwórz aplikację"
			},
			seriesPanel: {
				title: "Tytuł",
				descr: "Opis",
				discard: "Odrzuć zakładkę",
				saveExtent: "Skonfiguruj zasięg zakładki",
				discardDisabled: "Nie można usunąć tej zakładki. Serie zwijania można wyłączyć w Ustawieniach."
			},
			helpPopup: {
				title: "Pomoc",
				close: "Zamknij",
				tab1: {
					div1: "Szablon Zwijanie/Luneta umożliwia porównywanie dwóch różnych map internetowych albo dwóch warstw pojedynczej mapy internetowej za pomocą atrakcyjnie wyglądającej i łatwej w obsłudze aplikacji internetowej. Aplikacji tej można używać w dowolnej przeglądarce i na każdym urządzeniu, w tym również na smartfonie i tablecie.",
					div2: "Dodatkowe informacje dotyczące szablonu Zwijanie/Lupa, w tym przykłady utworzone przez użytkowników, <a href='http://storymaps.arcgis.com/en/app-list/swipe/' target='_blank'> znajdują się na stronie internetowej Story Maps</a>. Możesz także śledzić nas w serwisie Twitter pod adresem <a href='https://twitter.com/EsriStoryMaps' target='_blank'>@EsriStoryMaps</a>.",
					div3: "Czekamy na wiadomości od Ciebie! Niezależnie od tego, czy masz pytanie, chcesz poprosić o nową funkcjonalność lub poinformować nas o znalezionym błędzie, odwiedź <a href='http://links.esri.com/storymaps/forum' target='_blank'>Forum użytkowników Story Maps</a>."
				}
			},
			share: {
				firstSaveTitle: "Narracja została pomyślnie zapisana",
				firstSaveHeader: "Narracja została zapisana w usłudze ArcGIS Online. Zapoznaj się z poniższymi odpowiedziami na często zadawane pytania.",
				firstSaveA1: "Jeżeli nie znasz jeszcze usługi ArcGIS Online lub chcesz korzystać ze skrótu do interfejsu dla autorów, możesz zapisać następujące łącze: %LINK1%",
				firstSaveA1bis: "Swoją narrację można również znaleźć w <a href=\'%LINK2%\' target=\'_blank\'>folderze zawartości usługi ArcGIS Online</a>.",
				firstSaveQ2: "Czy moja narracja została udostępniona?",
				firstSaveA2: "Obecnie Twoja narracja nie jest udostępniona. Aby ją udostępnić, użyj przycisku UDOSTĘPNIJ.",
				shareTitle: "Udostępnij narrację",
				sharePrivateHeader: "Narracja nie jest udostępniona. Czy chcesz ją udostępnić?",
				sharePrivateBtn1: "Udostępnij publicznie",
				sharePrivateBtn2: "Udostępnij mojej instytucji",
				sharePrivateProgress: "Trwa udostępnianie...",
				sharePrivateErr: "Udostępnianie nie powiodło się. Spróbuj ponownie lub",
				sharePrivateOk: "Aktualizacja udostępniania powiodła się. Trwa wczytywanie...",
				shareStatus1: "Narracja nie została zapisana",
				shareStatus2: "Narracja jest udostępniania publicznie",
				shareStatus3: "Narracja została udostępniana w obrębie instytucji",
				shareStatus4: "Narracja nie została udostępniona",
				sharePreviewAsUser: "Zobacz podgląd",
				shareHeader1: "Twoja narracja jest <strong>publicznie dostępna</strong>.",
				shareHeader2: "Narracja jest dostępna dla członków Twojej instytucji (wymagane logowanie).",
				shareLinkHeader: "Udostępnij narrację odbiorcom",
				shareLinkOpen: "OTWÓRZ",
				learnMore: "Dowiedz się więcej",
				shareQ1Opt1: "Jak mogę zachować prywatny status narracji?",
				shareQ1Opt2: "Jak mogę zachować prywatny status narracji lub udostępnić ją publicznie?",
				shareA1: "Odwiedź %SHAREIMG% <a href='%LINK1%' target='_blank'>stronę elementu aplikacji</a>. Jeżeli nie chcesz dłużej udostępniać mapy internetowej, odwiedź <a href='%LINK2%' target='_blank'>stronę elementu mapy internetowej</a>.",
				shareA1bis: "Jeśli chcesz przestać udostępniać Usługę obiektową, użyj <a href='%LINK1%' target='_blank'>strony elementu Usługi obiektowej</a>.",
				shareQ2: "Jak mogę edytować narrację w przyszłości?",
				shareQ2bis: "W jaki sposób mogę wrócić do interfejsu tworzenia?",
				shareA2div1: "Zapisz i ponownie wykorzystaj łącze %LINK1% lub użyj <a href=\'%LINK2%\' target=\'_blank\'>strony z elementami narracji</a>.",
				shareA2div2: "Gdy właściciel narracji zaloguje się w serwisie ArcGIS.com, narracja będzie zawierać przycisk do otwierania interaktywnego kreatora:",
				shareQ3: "Gdzie są przechowywane dane?",
				shareA3: "Konfiguracja narracji jest zapisana w tym elemencie aplikacji internetowej</a>.",
				shareWarning: "Udostępnianie %WITH% zostało wyłączone, ponieważ nie jesteś właścicielem <a href='%LINK%' target='_blank'>mapy internetowej</a>.",
 				shareWarningWith1: "publicznie",
 				shareWarningWith2: "publicznie i instytucji"
			},
			directCreation: {
				header: "Witamy w kreatorze szablonu Zwijanie/Luneta",
				mapPickHeader: "Aby rozpocząć, podaj prawidłowy identyfikator mapy internetowej albo skorzystaj z przycisku Wyszukaj w celu przeszukania map internetowych.",
				launchBuilder: "Kreator uruchamiania",
				chooseWebmapLbl: "Wybierz mapę internetową...",
				explain2: "Aby utworzyć story map Zwijanie lub Lupa, skorzystaj z poniższego przycisku i wybierz istniejącą mapę internetową ArcGIS Online, której chcesz użyć. Ewentualnie możesz wkleić do poniższego pola identyfikator mapy internetowej.",
				explain3: "Jeżeli na mapie narracji (story map) chcesz użyć dwóch map internetowych, po wybraniu tej opcji pojawi się później komunikat dotyczący drugiej mapy internetowej.",
				webmapPlaceholder: "Wprowadź identyfikator mapy internetowej..."
			}
		},
		configure: {
			mapdlg:{
				items:{
					organizationLabel: "Moja instytucja",
					onlineLabel: "Usługa ArcGIS Online",
					contentLabel: "Moje zasoby",
					favoritesLabel: "Moje ulubione"
				},
				title: "Wybierz mapę  internetową",
				searchTitle: "Wyszukaj",
				ok: "OK",
				cancel: "Anuluj",
				placeholder: "Wprowadź wyszukiwane wyrażenie"
			}
		}
    })
);
