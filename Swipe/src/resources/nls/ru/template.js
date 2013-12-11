define(
	({
		viewer: {
			loading: {
				step1: "ЗАГРУЗКА ПРИЛОЖЕНИЯ",
				step2: "ЗАГРУЗКА ДАННЫХ",
				step3: "ИНИЦИАЛИЗАЦИЯ",
				fail: "Загрузка инструмента Шторка (Swipe) не удалась",
				loadBuilder: "ПЕРЕКЛЮЧИТЬСЯ В РЕЖИМ КОНСТРУКТОРА",
				failButton: "Повторить"
			},
			errors: {
				boxTitle: "Произошла ошибка",
				portalSelf: "Критическая ошибка: не удалось получить конфигурацию портала",
				invalidConfig: "Критическая ошибка: недопустимая конфигурация",
				invalidConfigNoWebmap: "Критическая ошибка: недопустимая конфигурация (веб-карта не выбрана)",
				createMap: "Не удалось создать карту",
				invalidApp: "Критическая ошибка: не удается загрузить приложение",
				initMobile: "Добро пожаловать в веб-приложение Шторка (Swipe). Приложение не настроено. Компоновщик не поддерживается на мобильных устройствах.",
				noBuilderIE8: "Компоновщик Шторка (Swipe) не поддерживается в браузере Internet Explorer в версиях ранее 9.",
				noLayerView: "Добро пожаловать в веб-приложение Штрока (Swipe).<br />Приложение еще не настроено.",
				appSave: "Ошибка при сохранении веб-приложения",
				mapSave: "Ошибка при сохранении веб-карты",
				notAuthorized: "Вы не авторизованы для доступа к данному приложению",
				conflictingProjectionsTitle: "Конфликтующие проекции",
				conflictingProjections: "Шторка не поддерживает использование двух веб-карт с различными проекциями. Откройте настройки и используйте веб-карту с той же проекцией, что и первая веб-карта.",
				cpButton: "Закрыть"
			},
			mobileView: {
				hideIntro: "СКРЫТЬ ВВЕДЕНИЕ",
				navLeft: "Легенда",
				navMap: "Карта",
				navRight: "Данные"
			},
			desktopView: {
				storymapsText: "Карта истории",
				builderButton: "Переключиться в режим компоновки",
				bitlyTooltip: "Получить короткую ссылку на приложение"
			}
		},
		builder: {
			builder: {
				panelHeader: "КОНФИГУРАЦИЯ ПРИЛОЖЕНИЯ",
				buttonSave: "СОХРАНИТЬ",
				buttonDiscard: "ОТМЕНА",
				buttonSettings: "Настройки",
				buttonView: "Режим просмотра",
				buttonItem: "Открыть элемент Веб-приложение",
				noPendingChange: "Нет предполагаемых изменений",
				unSavedChangeSingular: "1 несохраненное изменение",
				unSavedChangePlural: "несохраненных изменений",
				popoverDiscard: "Вы действительно хотите отказаться от несохраненных изменений?",
				yes: "Да",
				no: "Нет",
				popoverOpenViewExplain: "При открытии вьюера вы потеряете все несохраненные изменения",
				popoverOpenViewOk: "Ok",
				popoverOpenViewCancel: "Отмена",
				popoverSaveWhenDone: "Не забудьте сохранить изменения, когда закончите",
				closeWithPendingChange: "Вы действительно хотите подтвердить это действие? Все изменения будут потеряны.",
				gotIt: "Ok",
				savingApplication: "Сохранение приложения",
				saveSuccess: "Приложение успешно сохранено",
				saveError: "Сохранение не удалось, попробуйте еще раз",
				signIn: "Войдите с помощью учетной записи в",
				signInTwo: "чтобы сохранить приложение."
			},
			header:{
				editMe: "Отредактируйте меня !",
				templateTitle: "Ввести заголовок шаблона",
				templateSubtitle: "Ввести подзаголовок шаблона"
			},
			settings: {
				settingsHeader: "Настройки приложения",
				modalCancel: "Отмена",
				modalApply: "Применить"
			},
			settingsColors: {
				settingsTabColor: "Тема",
				settingsColorExplain: "Выберите тему приложения либо укажите собственные цвета.",
				settingsLabelColor: "Фоновые цвета заголовка и боковой панели"
			},
			settingsHeader: {
				settingsTabLogo: "Заголовок",
				settingsLogoExplain: "Настройка логотипа заголовка (максимум 250 x 50px).",
				settingsLogoEsri: "Логотип Esri",
				settingsLogoNone: "Без логотипа",
				settingsLogoCustom: "Собственный логотип",
				settingsLogoCustomPlaceholder: "URL-адрес изображения",
				settingsLogoCustomTargetPlaceholder: "Переход по ссылке",
				settingsLogoSocialExplain: "Настроить верхнюю правую ссылку заголовка.",
				settingsLogoSocialText: "Текст",
				settingsLogoSocialLink: "Ссылка",
				settingsLogoSocialDisabled: "Объект был отключен администратором"
			},
			settingsExtent: {
				settingsTabExtent: "Экстент",
				settingsExtentExplain: "Выберите начальный экстент через интерактивную карту, показанную ниже.",
				settingsExtentExplainBottom: "Указанный вами экстент обновит исходный экстент веб-карты. Если вы создаете серию карт со шторками, этот экстент использоваться не будет.",
				settingsExtentDateLineError: "Экстент не может продолжаться за меридиан 180°",
				settingsExtentDateLineError2: "Ошибка вычисления экстента",
				settingsExtentDrawBtn: "Нарисовать новый экстент",
				settingsExtentModifyBtn: "Изменить текущий экстент",
				settingsExtentApplyBtn: "Применить на главной карте",
				settingsExtentUseMainMap: "Использовать экстент основной карты"
			}
        },
		swipe: {
			mobileData: {
				noData: "Нет данных для отображения!",
				noDataExplain: "Коснитесь карты, чтобы выбрать объект и вернуться обратно",
				noDataMap: "Нет данных для этой карты",
				noPopup: "Нет всплывающей информации для этого объекта"
			},
			mobileLegend: {
				noLegend: "Нет легенды для отображения."
			},
			swipeSidePanel: {
				editTooltip: "Укажите описание боковой панели",
				editMe: "Отредактируйте меня !",
				legendTitle: "Легенда"
			},
			infoWindow: {
				noFeature: "Нет данных для отображения",
				noFeatureExplain: "Коснитесь карты для выбора объекта"
			},
			settingsLayout: {
				settingsTabLayout: "Стиль шторки",
				settingsLayoutExplain: "Выберите стиль для инструмента Шторка (Swipe).",
				settingsLayoutSwipe: "Вертикальная черта",
				settingsLayoutSpyGlass: "Подзорная труба",
				settingsLayoutSelected: "Выбранная компоновка",
				settingsLayoutSelect: "Выбрать эту компоновку",
				settingsSaveConfirm: "Некоторые внесенные изменения требуют сохранения и перезагрузки приложения"
			},
			settingsDataModel: {
				settingsTabDataModel: "Тип шторки",
				settingsDataModelExplainSwipe: "Что пользователи должны сдвигать?",
				settingsDataModelExplainSwipe2: "",
				settingsDataModelExplainSpyGlass: "Выберите слой или веб-карту, которые появятся в подзорной трубе.",
				settingsDataModelOneMap: "Слой на веб-карте",
				settingsDataModel1Explain: "Выберите слой, который будет управляться инструментом Шторка.",
				settingsDataModel1Warning: "Если слой скрыт под другими слоями, использование шторки не даст никакого результата.",
				settingsDataModel1SpyGlassExplain: "Выберите слой, появляющийся в подзорной трубе.",
				settingsDataModelTwoMaps: "Две веб-карты",
				settingsDataModelLayerIds: "ID слоя веб-карты",
				settingsDataModelSelected: "Выбранный тип",
				settingsDataModelWebmapSwipeId1: "ID правой веб-карты",
				settingsDataModelWebmapSwipeId2: "ID левой веб-карты",
				settingsDataModelWebmapGlassId1: "ID основной веб-карты",
				settingsDataModelWebmapGlassId2: "ID веб-карты Spyglass",
				settingsDataModelSelect: "Выбрать этот тип",
				settingsDataModel2Explain: "Спрятать под другой веб-картой.",
				settingsDataModel2SpyGlassExplain: "Показать другую веб-карту.",
				settingsDataModel2HelpTitle: "Как найти ID веб-карты?",
				settingsDataModel2HelpContent: "Скопируйте и вставьте цифры, расположенные после знака '=' в URL веб-карты"
			},
			settingsLegend: {
				settingsTabLegend: "Компоновка приложения",
				settingsLegendExplain: "Выберите настройки компоновки приложения.",
				settingsLegendEnable: "Включить легенду",
				settingsDescriptionEnable: "Включить описание",
				settingsBookmarksEnable: "Включить несколько шторок",
				settingsPopupDisable: "Включить всплывающее окно",
				settingsLocationSearchEnable: "Включить поиск локатора",
				settingsGeolocatorEnable: "Включить геолокатор",
				settingsLegendHelpContent: "Для настройки содержания легенды используйте таблицу содержания вьюера веб-карт ArcGIS.com (Скрыть в легенде)",
				settingsSeriesHelpContent: "Серии шторок - это опция навигации, позволяющая пользователю переходить к определенному экстенту и отображать текст заголовка и описания на боковой панели.  При первоначальном включении закладки с веб-карт будут импортированы и использованы для создания серий.  Отключение опции работы с сериями приводит к отключению панели серий, но настройки серий остаются для использования в будущем.", 
				settingsSeriesHelpContent2: "Серии шторок позволяют создавать и редактировать выбранные местоположения, а также их заголовки и текст. Если ваша веб-карта содержит закладки, то они будут отображаться. Вы можете отменить отображение серии шторок, но их настройки сохранятся для будущей работы.",
				settingsSeriesHelpLink: "См. пример приложения с серией шторок здесь",
				preview: "Просмотр UI",
				settingsLocateButtonExplain: "Эта функция поддерживается на большинстве браузеров мобильных устройств и настольных браузеров (включая Internet Explorer 9+).",
				settingsLocateButton: "Включить в поддерживаемых браузерах кнопку Размещение",
				settingsAddressSearch: "Включить инструмент поиска адреса"
			},
			settingsSwipePopup: {
				settingsSwipePopup: "Всплывающая информация",
				settingsSwipePopupExplain: "Настройте внешний вид всплывающего заголовка, чтобы помочь пользователю связать всплывающую информацию со слоями карт.",
				settingsSwipePopupSwipe1: "Левая карта",
				settingsSwipePopupSwipe2: "Правая карта",
				settingsSwipePopupGlass1: "Основная карта",
				settingsSwipePopupGlass2: "Карта Spyglass",
				settingsSwipePopupTitle: "Название заголовка",
				settingsSwipePopupColor: "Цвет заголовка"
			},
			initPopup: {
				initHeader: "Начало работы со Шторкой",
				modalNext: "Далее",
				modalPrev: "Предыдущий",
				modalApply: "Открыть приложение"
			},
			seriesPanel: {
				title: "Название",
				descr: "Описание",
				discard: "Сброс закладки",
				saveExtent: "Задать экстент закладки",
				discardDisabled: "Вы не можете удалить эту закладку. Серию шторок можно отключить в Настройках."
			}
		}
    })
);