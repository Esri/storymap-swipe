define(
	({
		viewer: {
			loading: {
				step1: "ЗАГРУЗКА ПРИЛОЖЕНИЯ",
				step2: "ЗАГРУЗКА ДАННЫХ",
				step3: "ИНИЦИАЛИЗАЦИЯ",
				fail: "Загрузка инструмента Шторка (Swipe) не удалась",
				loadBuilder: "ПЕРЕКЛЮЧИТЬСЯ В РЕЖИМ КОМПОНОВКИ",
				failButton: "Повторить"
			},
			errors: {
				boxTitle: "Произошла ошибка",
				invalidConfig: "Критическая ошибка: недопустимая конфигурация",
				invalidConfigNoWebmap: "Критическая ошибка: недопустимая конфигурация (веб-карта не выбрана)",
				createMap: "Не удалось создать карту",
				invalidApp: "Критическая ошибка: не удается загрузить приложение",
				initMobile: "Добро пожаловать в веб-приложение Шторка (Swipe). Приложение не настроено. Компоновщик не поддерживается на мобильных устройствах.",
				noBuilderIE8: "Компоновщик Шторка (Swipe) не поддерживается в браузере Internet Explorer в версиях ранее 9.",
				noLayerView: "Добро пожаловать в веб-приложение Штрока (Swipe).<br />Приложение еще не настроено.",
				appSave: "Ошибка при сохранении веб-приложения",
				mapSave: "Ошибка при сохранении веб-карты",
				notAuthorized: "Вы не авторизованы для настройки данного приложения",
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
				builderButton: "Переключиться в режим компоновки"
			}
		},
		builder: {
			builder: {
				panelHeader: "КОНФИГУРАЦИЯ ПРИЛОЖЕНИЯ",
				buttonSave: "СОХРАНИТЬ",
				buttonDiscard: "ОТМЕНА",
				buttonSettings: "Настройки",
				buttonView: "Режим просмотра",
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
				settingsLogoSocialLink: "Ссылка"
			},
			settingsExtent: {
				settingsTabExtent: "Экстент",
				settingsExtentExplain: "Выберите начальный экстент через интерактивную карту, показанную ниже.",
				settingsExtentExplainBottom: "Указанный вами экстент обновит исходный экстент веб-карты.",
				settingsExtentDrawBtn: "Нарисовать новый экстент",
				settingsExtentModifyBtn: "Изменить текущий экстент",
				settingsExtentApplyBtn: "Применить на главной карте"
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
				settingsTabDataModel: "Слой Шторка (Swipe)",
				settingsDataModelExplainSwipe: "Выберите слой или веб-карту, которые будут появляться и исчезать за шторкой.",
				settingsDataModelExplainSwipe2: "",
				settingsDataModelExplainSpyGlass: "Выберите слой или веб-карту, которые появятся в подзорной трубе.",
				settingsDataModelOneMap: "Одна веб-карта, простой слой",
				settingsDataModel1Explain: "Выберите слой, который будет контролироваться инструментом Шторка (Swipe).",
				settingsDataModel1Warning: "Могут использоваться только динамические сервисы, сервисы изображений и кэшированные сервисы. Если слой скрыт под другими слоями, инструмент \"Спрятать\" не даст никакого результата.",
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
				settingsDataModel2HelpTitle: "Как найти ID веб карты",
				settingsDataModel2HelpContent: "Скопируйте и вставьте цифры, расположенные после знака '=' в URL веб-карты"
			},
			settingsLegend: {
				settingsTabLegend: "Компоновка приложения",
				settingsLegendExplain: "Выберите настройки компоновки приложения.",
				settingsLegendEnable: "Включить легенду",
				settingsDescriptionEnable: "Включить описание",
				settingsBookmarksEnable: "Включить несколько шторок",
				settingsLegendHelpTitle: "Как улучшить содержание легенды",
				settingsLegendHelpContent: "Используйте таблицу содержания вьюера веб-карты ArcGIS.com (Скрыта в легенде)",
				preview: "Просмотр UI"
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
				modalApply: "Открыть приложение"
			}
		}
    })
);