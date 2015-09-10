define(
	 ({
		viewer: {
			loading: {
				step1: "CARGANDO APLICACIÓN",
				step2: "CARGANDO DATOS",
				step3: "INICIALIZANDO",
				fail: "La carga de la comparativa de mapas ha fallado",
				loadBuilder: "CAMBIANDO A MODO DE BUILDER",				
				redirectSignIn: "REDIRIGIENDO A LA PÁGINA DE INICIO DE SESIÓN",
				redirectSignIn2: "(se te redirigirá aquí después del inicio de sesión)",
				failButton: "Reintentar"
			},
			errors: {
				boxTitle: "Se ha producido un error",
				portalSelf: "Error muy grave: no se ha podido obtener la configuración del portal",
				invalidConfig: "Error muy grave: configuración no válida",
				invalidConfigNoWebmap: "Error muy grave: configuración no válida (no se ha especificado mapa Web)",
				createMap: "No se puede crear el mapa",
				invalidApp: "Error muy grave: la aplicación no se puede cargar",
				initMobile: "Bienvenido a la aplicación Web para la comparativa. La aplicación no está configurada. El builder interactivo no es compatible con dispositivos móviles.",
				noBuilderIE8: "El builder interactivo de comparativas no es compatible con las versiones anteriores a Internet Explorer 9.",
				noLayerView: "Bienvenido a la aplicación Web para la comparativa.<br />La aplicación aún no está configurada.",
				appSave: "Error al guardar la aplicación web",
				mapSave: "Error al guardar el mapa web",
				notAuthorized: "No tienes autorización para acceder a esta aplicación",
				conflictingProjectionsTitle: "Conflicto de proyecciones",
				conflictingProjections: "La comparativa de mapas no admite el uso de dos mapas web con distintas proyecciones. Abre los ajustes y utiliza un mapa web que use la misma proyección que el primer mapa web.",
				cpButton: "Cerrar"
			},
			mobileView: {
				hideIntro: "OCULTAR INTRODUCCIÓN",
				navLeft: "Leyenda",
				navMap: "Mapa",
				navRight: "Datos"
			},
			desktopView: {
				storymapsText: "Un mapa de historias",
				builderButton: "Cambiar a modo de builder",
				facebookTooltip: "Compartir en Facebook",
				twitterTooltip: "Compartir en Twitter",
				bitlyTooltip: "Obtén un vínculo corto"
			}
		},
		builder: {
			builder: {
				panelHeader: "CONFIGURACIÓN DE LA APLICACIÓN",
				buttonSave: "GUARDAR",
				buttonHelp: "Ayuda",
				buttonShare: "Compartir",
				buttonDiscard: "CANCELAR",
				buttonSettings: "Configuración",
				buttonView: "Modo Vista",
				buttonItem: "Abre el elemento de la aplicación web",
				noPendingChange: "Sin cambios pendientes",
				unSavedChangeSingular: "1 cambio sin guardar",
				unSavedChangePlural: "cambios no guardados",
				popoverDiscard: "¿Estás seguro de que deseas descartar los cambios no guardados?",
				yes: "Sí",
				no: "No",
				popoverOpenViewExplain: "Al abrir el visor, perderás los cambios no guardados",
				popoverOpenViewOk: "Aceptar",
				popoverOpenViewCancel: "Cancelar",
				popoverSaveWhenDone: "No olvides guardar los cambios cuando hayas terminado",
				closeWithPendingChange: "¿Estás seguro de que deseas confirmar la acción? Tus cambios se perderán.",
				gotIt: "Aceptar",
				savingApplication: "Guardando la aplicación",
				saveSuccess: "La aplicación se ha guardado con éxito",
				saveError: "Error al guardar. Inténtalo de nuevo",
				saveError2: "Error al guardar a causa de una etiqueta HTML no válida en un nombre o una descripción",
				saveError3: "El título no puede estar vacío",
				signIn: "Inicia sesión con una cuenta en",
				signInTwo: "para guardar la aplicación."
			},
			header:{
				editMe: "¡Modifícame!",
				templateTitle: "Establecer título de plantilla",
				templateSubtitle: "Establecer subtítulo de plantilla"
			},
			settings: {
				settingsHeader: "Ajustes de la aplicación",
				modalCancel: "Cancelar",
				modalApply: "Aplicar"
			},
			settingsColors: {
				settingsTabColor: "Tema",
				settingsColorExplain: "Elige un tema para la aplicación o define tus propios colores.",
				settingsLabelColor: "Colores de fondo del encabezado y el panel lateral"
			},
			settingsHeader: {
				settingsTabLogo: "Encabezado",
				settingsLogoExplain: "Personaliza el logotipo del encabezado (el valor máximo es 250 x 50px).",
				settingsLogoEsri: "Logotipo de Esri",
				settingsLogoNone: "Sin logotipo",
				settingsLogoCustom: "Logotipo personalizado",
				settingsLogoCustomPlaceholder: "URL de imagen",
				settingsLogoCustomTargetPlaceholder: "Enlace click-through",
				settingsLogoSocialExplain: "Personaliza el enlace superior derecho del encabezado.",
				settingsLogoSocialText: "Texto",
				settingsLogoSocialLink: "Vínculo",
				settingsLogoSocialDisabled: "El administrador ha deshabilitado esta entidad"
			},
			settingsExtent: {
				settingsTabExtent: "Extensión",
				settingsExtentExplain: "Establecer la extensión inicial mediante el mapa interactivo siguiente.",
				settingsExtentExplainBottom: "La extensión que definas modificará la extensión inicial del mapa web. Ten en cuenta que si estás llevando a cabo una serie comparativa no se usará esa extensión.",
				settingsExtentDateLineError: "La extensión no puede atravesar el meridiano de longitud 180ï¿½",
				settingsExtentDateLineError2: "Error al calcular la extensión",
				settingsExtentDrawBtn: "Dibuja una nueva extensión",
				settingsExtentModifyBtn: "Edita la extensión actual",
				settingsExtentApplyBtn: "Aplica en el mapa principal",
				settingsExtentUseMainMap: "Usa la extensión del mapa principal"
			}
        },
		swipe: {
			mobileData: {
				noData: "No hay datos para mostrar",
				noDataExplain: "Puntea el mapa para seleccionar una entidad y volver aquí",
				noDataMap: "No hay datos para este mapa",
				noPopup: "No se han encontrado ventanas emergentes para esta entidad"
			},
			mobileLegend: {
				noLegend: "No hay leyenda para mostrar."
			},
			swipeSidePanel: {
				editTooltip: "Establecer la descripción del panel lateral",
				editMe: "¡Modifícame!",
				legendTitle: "Leyenda"
			},
			infoWindow: {
				noFeature: "No hay datos que mostrar",
				noFeatureExplain: "Puntea el mapa para seleccionar una entidad"
			},
			settingsLayout: {
				settingsTabLayout: "Cambiar estilo",
				settingsLayoutExplain: "Elige un estilo para la comparativa de mapas.",
				settingsLayoutSwipe: "Barra vertical",
				settingsLayoutSpyGlass: "Lupa",
				settingsLayoutSelected: "Diseño seleccionado",
				settingsLayoutSelect: "Selecciona este diseño",
				settingsSaveConfirm: "Algunos de tus cambios requieren que guardes y vuelvas a cargar la aplicación"
			},
			settingsDataModel: {
				settingsTabDataModel: "Tipo de comparación",
				settingsDataModelExplainSwipe: "¿Qué quieres que comparen los usuarios?",
				settingsDataModelExplainSwipe2: "",
				settingsDataModelExplainSpyGlass: "Elige la capa o el mapa Web que aparecerá en la lupa.",
				settingsDataModelOneMap: "Una capa en un mapa web",
				settingsDataModel1Explain: "Selecciona la capa que quieras comparar",
				settingsDataModel1Warning: "Si la capa está oculta por capas superiores, la comparativa de mapas no tendrá ningún efecto.",
				settingsDataModel1SpyGlassExplain: "Selecciona la capa que aparecerá en la lupa.",
				settingsDataModelTwoMaps: "Dos mapas Web",
				settingsDataModelLayerIds: "ID de capa de mapa Web",
				settingsDataModelSelected: "Tipo seleccionado",
				settingsDataModelWebmapSwipeId1: "ID del mapa Web derecho",
				settingsDataModelWebmapSwipeId2: "ID del mapa Web izquierdo",
				settingsDataModelWebmapGlassId1: "ID del mapa Web principal",
				settingsDataModelWebmapGlassId2: "ID del mapa Web de la lupa",
				settingsDataModelSelect: "Selecciona este tipo",
				settingsDataModel2Explain: "Comparar con otro mapa Web.",
				settingsDataModel2SpyGlassExplain: "Deja al descubierto otro mapa Web.",
				settingsDataModel2HelpTitle: "¿Cómo puedo encontrar el ID de un mapa Web?",
				settingsDataModel2HelpContent: "Copia y pega los dígitos que hay tras el signo \"=\" en la URL del mapa Web",
				switchMaps: "Intercambiar mapas",
				browseWebMaps: "Examinar mapas web"
			},
			settingsLegend: {
				settingsTabLegend: "Diseño de la aplicación",
				settingsLegendExplain: "Selecciona los ajustes de diseño de la aplicación.",
				settingsLegendEnable: "Activar leyenda",
				settingsDescriptionEnable: "Activar descripción",
				settingsBookmarksEnable: "Activar series de comparativas",
				settingsPopupDisable: "Habilitar ventana emergente",
				settingsLocationSearchEnable: "Habilitar la búsqueda del localizador",
				settingsGeolocatorEnable: "Habilitar geolocalizador",
				settingsLegendHelpContent: "Utiliza la tabla de contenido del visor de mapas web de ArcGIS.com (ocultar en leyenda) para delimitar el contenido de la leyenda.",
				settingsSeriesHelpContent: "Las series comparativas es una opción de navegación por pestañas que guía al usuario a una extensión concreta y muestra un título y un texto descriptivo en el panel lateral. En el momento de la primera activación, los marcadores de mapas web se importarán y usarán para rellenar la barra de series. Si deshabilitas esta opción, la barra de series se desactivará, pero la configuración de las series se conservará para usarse de nuevo.", 
				settingsSeriesHelpContent2: "Las series de comparativas te permiten crear y editar una selección de ubicaciones junto con títulos y texto. Si tu mapa Web tiene marcadores de posición, se mostrarán. Puedes desactivar las series, pero la configuración se mantendrá para su uso futuro.",
				settingsSeriesHelpLink: "Mira un ejemplo de una aplicación con una serie de comparativas aquí",
				preview: "Vista previa de la interfaz de usuario",
				settingsLocateButtonExplain: "Esta funcionalidad es compatible con la mayoría de dispositivos móviles y navegadores de escritorio (incluido Internet Explorer 9+).",
				settingsLocateButton: "Habilitar un botón \'Localizar\' en los navegadores compatibles",
				settingsAddressSearch: "Habilitar una herramienta de búsqueda de direcciones"
			},
			settingsSwipePopup: {
				settingsSwipePopup: "Ventana emergente",
				settingsSwipePopupExplain: "Personaliza la apariencia de los encabezados emergentes para ayudar al usuario a asociar las ventanas emergentes con las capas de mapas.",
				settingsSwipePopupSwipe1: "Mapa izquierdo",
				settingsSwipePopupSwipe2: "Mapa derecho",
				settingsSwipePopupGlass1: "Mapa principal",
				settingsSwipePopupGlass2: "Mapa de la lupa",
				settingsSwipePopupTitle: "Título del encabezado",
				settingsSwipePopupColor: "Color del encabezado"
			},
			initPopup: {
				initHeader: "Bienvenido al builder de Comparativa/Lupa",
				modalNext: "Siguiente",
				modalPrev: "Anterior",
				modalApply: "Abrir la aplicación"
			},
			seriesPanel: {
				title: "Título",
				descr: "Descripción",
				discard: "Descartar marcadores",
				saveExtent: "Configurar extensión de marcadores",
				discardDisabled: "No puedes eliminar ese marcador. Las series comparativas pueden deshabilitarse en la Configuración."
			},
			helpPopup: {
				title: "Ayuda",
				close: "Cerrar",
				tab1: {
					div1: "La plantilla Comparativa/Lupa se ha diseñado para comparar dos mapas web o dos capas de un mismo mapa web en una aplicación web atractiva y fácil de usar que se puede utilizar en cualquier navegador web o dispositivo, incluidos los smartphones y las tablets.",
					div2: "Si quieres obtener información adicional sobre la plantilla Comparativa/Lupa, incluidos algunos ejemplos creados por los usuarios, <a href='http://storymaps.arcgis.com/en/app-list/swipe/' target='_blank'> visita el sitio web de Story Maps</a>. También puedes seguirnos en Twitter en <a href='https://twitter.com/EsriStoryMaps' target='_blank'>@EsriStoryMaps</a>.",
					div3: "Nos gusta mucho tener noticias tuyas. Tanto si tienes alguna pregunta, si deseas solicitar un nueva característica o si crees que has encontrado un error, visita el <a href='http://links.esri.com/storymaps/forum' target='_blank'>foro de usuarios de Story Maps</a>."
				}
			},
			share: {
				firstSaveTitle: "La aplicación se ha guardado correctamente",
				firstSaveHeader: "La aplicación se ha guardado en ArcGIS Online. Lee las siguientes respuestas a las preguntas frecuentes.",
				firstSaveA1: "Si no estás familiarizado con el uso de ArcGIS Online o necesitas un acceso directo a la interfaz de creación, puedes guardar el siguiente enlace: %LINK1%",
				firstSaveA1bis: "También puedes encontrar la aplicación en tu <a href='%LINK2%' target='_blank'>carpeta de contenido de ArcGIS Online</a>.",
				firstSaveQ2: "¿Se comparte mi aplicación?",
				firstSaveA2: "Actualmente, tu aplicación no se comparte. Para compartirla, usa el botón COMPARTIR.",
				shareTitle: "Compartir la aplicación",
				sharePrivateHeader: "Tu aplicación no se comparte. ¿Deseas compartirla?",
				sharePrivateBtn1: "Compartir públicamente",
				sharePrivateBtn2: "Compartir con mi organización",
				sharePrivateProgress: "Uso compartido en curso...",
				sharePrivateErr: "Error del uso compartido. Inténtalo de nuevo o",
				sharePrivateOk: "Uso compartido actualizado correctamente, cargando...",
				shareStatus1: "La aplicación no se ha guardado",
				shareStatus2: "La aplicación se comparte públicamente",
				shareStatus3: "La aplicación se comparte dentro de la organización",
				shareStatus4: "La aplicación no se comparte",
				sharePreviewAsUser: "Presentación preliminar",
				shareHeader1: "Tu aplicación está <strong>disponible públicamente</strong>.",
				shareHeader2: "Tu aplicación está disponible para los miembros de tu organización (se requiere inicio de sesión).",
				shareLinkHeader: "Comparte la aplicación con tu audiencia",
				shareLinkOpen: "ABRIR",
				learnMore: "Más información",
				shareQ1Opt1: "¿Qué debo hacer para que la aplicación siga siendo privada?",
				shareQ1Opt2: "¿Qué debo hacer para que la aplicación siga siendo privada o para compartirla públicamente?",
				shareA1: "Usa %SHAREIMG% en <a href='%LINK1%' target='_blank'>la página de elemento de la aplicación</a>. Si también quieres dejar de compartir el mapa web, usa <a href='%LINK2%' target='_blank'>la página de elemento del mapa web</a>.",
				shareA1bis: "Si también deseas dejar de compartir el servicio de entidades, utiliza la <a href='%LINK1%' target='_blank'>página de elementos del servicio de entidades</a>.",
				shareQ2: "¿Cómo puedo editar la aplicación más adelante?",
				shareQ2bis: "¿Cómo regreso a la interfaz de creación?",
				shareA2div1: "Guarda y vuelve a usar el siguiente vínculo %LINK1% o utiliza la <a href='%LINK2%' target='_blank'>página de elementos de la aplicación</a>.",
				shareA2div2: "Como propietario de la aplicación, cuando inicias sesión en ArcGIS.com, la aplicación incluye un botón para abrir el builder interactivo:",				
				shareQ3: "¿Dónde se almacenan los datos?",
				shareA3: "La configuración de la aplicación se almacena en este elemento de aplicación web</a>.",
				shareWarning: "Se ha deshabilitado la opción de compartir %WITH% porque no eres el propietario del <a href='%LINK%' target='_blank'>mapa web</a>.",
 				shareWarningWith1: "públicamente",
 				shareWarningWith2: "públicamente y con la organización"
			},
			directCreation: {
				header: "Bienvenido al builder de Comparativa/Lupa",
				mapPickHeader: "Para empezar, escribe un Id. de mapa web válido o usa el botón de búsqueda para examinar mapas web.",
				launchBuilder: "Iniciar Builder",
				chooseWebmapLbl: "Elegir mapa web...",
				explain2: "Si vas a crear un mapa de historia de Comparativa o Lupa, usa el botón siguiente para elegir el mapa web de ArcGIS Online que deseas utilizar. Si lo prefieres, puedes pegar el Id. del mapa web en el campo siguiente.",
				explain3: "Si deseas usar dos mapas web en tu mapa de historia, se te pedirá el segundo mapa web más adelante cuando elijas esa opción.",
				webmapPlaceholder: "Especificar un Id. de mapa web..."
			}
		},
		configure: {
			mapdlg:{
				items:{
					organizationLabel: "Mi organización",
					onlineLabel: "ArcGIS Online",
					contentLabel: "Mi contenido",
					favoritesLabel: "Mis favoritos"
				},
				title: "Seleccionar mapa web",
				searchTitle: "Buscar",
				ok: "Aceptar",
				cancel: "Cancelar",
				placeholder: "Introducir término de búsqueda"
			}
		}
    })
);

