define(
	({
		viewer: {
			loading: {
				step1: "ЗАГРУЗКА ПРИЛОЖЕНИЯ",
				step2: "ЗАГРУЗКА ДАННЫХ",
				step3: "ИНИЦИАЛИЗАЦИЯ",
				fail: "Загрузка инструмента Шторка (Swipe) не удалась",
				loadBuilder: "ПЕРЕКЛЮЧИТЬСЯ В РЕЖИМ КОНСТРУКТОРА",
				redirectSignIn: "ПЕРЕНАПРАВЛЕНИЕ НА СТРАНИЦУ ВХОДА",
				redirectSignIn2: "(после входа вы будете перенаправлены сюда)",
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
				buttonHelp: "Справка",
				buttonShare: "Доступ",
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
				saveError2: "Ошибка при сохранении из-за недопустимого html-тега в имени или описании",
				saveError3: "Заголовок не может быть пустым",
				signIn: "Войдите с помощью учетной записи в",
				signInTwo: "чтобы сохранить приложение."
			},
			header:{
				editMe: "Отредактируйте меня!",
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
				settingsExtentDateLineError: "Экстент не может продолжаться за меридиан 180ï¿½",
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
				editMe: "Отредактируйте меня!",
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
				settingsDataModel2HelpContent: "Скопируйте и вставьте цифры, расположенные после знака \'=\' в URL веб-карты",
				switchMaps: "Переключить карты",
				browseWebMaps: "Обзор веб-карт"
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
				initHeader: "Добро пожаловать в конструктор шаблона Шторка/Подзорная труба",
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
			},
			helpPopup: {
				title: "Справка",
				close: "Закрыть",
				tab1: {
					div1: "Шаблон Шторка/Подзорная труба предназначен для сравнения двух отдельных веб-карт или двух слоев одной веб-карты в удобном и простом в использовании приложении, которое может применяться в любом браузере на любом устройстве, включая смартфоны и планшеты.",
					div2: "Для получения дополнительной информации по шаблону Шторка/Подзорная труба, включая примеры, созданные пользователями, <a href='http://storymaps.arcgis.com/en/app-list/swipe/' target='_blank'> посетите веб-сайт Story Maps</a>. Вы также можете следовать за нами в Twitter на <a href='https://twitter.com/EsriStoryMaps' target='_blank'>@EsriStoryMaps</a>.",
					div3: "Мы будем рады вам! Если у вас есть вопросы, вы желаете предложить новую функцию, или вы нашли ошибку, пожалуйста, посетите <a href='http://links.esri.com/storymaps/forum' target='_blank'>Форум пользователей Story Maps</a>."
				}
			},
			share: {
				firstSaveTitle: "Приложение успешно сохранено",
				firstSaveHeader: "Ваше приложение успешно сохранено в ArcGIS Online. Прочитайте следующие ответы на часто задаваемые вопросы.",
				firstSaveA1: "Если вы не знакомы с ArcGIS Online или хотите получить ссылку на интерфейс построения, сохраните эту ссылку: %LINK1%",
				firstSaveA1bis: "Приложение также можно найти в вашей <a href='%LINK2%' target='_blank'>директории ресурсов ArcGIS Online</a>.",
				firstSaveQ2: "Опубликовано ли мое приложение?",
				firstSaveA2: "В данный момент ваше приложение не опубликовано в общий доступ. Чтобы опубликовать его, используйте кнопку ОПУБЛИКОВАТЬ.",
				shareTitle: "Публикация приложения",
				sharePrivateHeader: "Приложение не опубликовано, хотите опубликовать его?",
				sharePrivateBtn1: "Публикация в общий доступ",
				sharePrivateBtn2: "Доступ только для моей организации",
				sharePrivateProgress: "Публикация...",
				sharePrivateErr: "Публикация не удалась, повторите попытку или",
				sharePrivateOk: "Тип публикации успешно изменен, загрузка...",
				shareStatus1: "Приложение не сохранено",
				shareStatus2: "К приложению предоставлен общий доступ",
				shareStatus3: "Приложение опубликовано в пределах организации",
				shareStatus4: "Приложение не опубликовано",
				sharePreviewAsUser: "Просмотр",
				shareHeader1: "Ваше приложение имеет <strong>общий доступ</strong>.",
				shareHeader2: "Ваше приложение доступно для сотрудников вашей организации (требуется учетная запись).",
				shareLinkHeader: "Опубликовать приложение для вашей аудитории",
				shareLinkOpen: "ОТКРЫТЬ",
				learnMore: "Подробнее",
				shareQ1Opt1: "Как сохранить приложение частным?",
				shareQ1Opt2: "Как я могу сохранить частный доступ к приложению или предоставить к нему общий доступ?",
				shareA1: "Используйте %SHAREIMG% на <a href='%LINK1%' target='_blank'>странице элемента приложения</a>. Если вы хотите закрыть общий доступ к веб-карте, перейдите на <a href='%LINK2%' target='_blank'>страницу элемента веб-карты</a>.",
				shareA1bis: "Если вы желаете убрать из общего доступа сервис объектов, используйте <a href='%LINK1%' target='_blank'>страницу элемента сервиса объектов</a>.",
				shareQ2: "Как позже отредактировать приложение?",
				shareQ2bis: "Как мне вернуться к интерфейсу создания?",
				shareA2div1: "Сохраните и используйте повторно следующую ссылку %LINK1% или обратитесь к<a href='%LINK2%' target='_blank'>странице элемента приложения</a>.",
				shareA2div2: "Как владелец приложения, при входе на ArcGIS.com вы увидите в приложении кнопку для открытия интерактивного конструктора:",				
				shareQ3: "Где хранятся данные?",
				shareA3: "Настройки приложения хранятся в элементе веб-приложения</a>.",
				shareWarning: "Доступ к %WITH%  был отключен, потому что вы не являетесь владельцем <a href='%LINK%' target='_blank'>webmap</a>.",
 				shareWarningWith1: "общий доступ",
 				shareWarningWith2: "общий и с Организацией"
			},
			directCreation: {
				header: "Добро пожаловать в  конструктор шаблона Шторка/Подзорная труба",
				mapPickHeader: "Сначала введите id веб-карты или выберите ее с помощью обзора веб-карт.",
				launchBuilder: "Запустить конструктор",
				chooseWebmapLbl: "Выберите веб-карту...",
				explain2: "Чтобы создать карту-историю Шторка или Подзорная труба, используйте кнопку ниже, чтобы выбрать существующую веб-карту ArcGIS Online, которую вы хотите использовать. Кроме того, вы можете вставить идентификатор ID веб-карты в поле ниже.",
				explain3: "Если вы хотите использовать две веб-карты в вашей карте-истории, то вы будете запрошены о второй веб-карте позже, когда выберете эту опцию.",
				webmapPlaceholder: "Введите id веб-карты..."
			}
		},
		configure: {
			mapdlg:{
				items:{
					organizationLabel: "Моя организация",
					onlineLabel: "ArcGIS Online",
					contentLabel: "Мои ресурсы",
					favoritesLabel: "Мое избранное"
				},
				title: "Выберите веб-карту",
				searchTitle: "Поиск",
				ok: "Ok",
				cancel: "Отмена",
				placeholder: "Введите текст поиска"
			}
		}
    })
);