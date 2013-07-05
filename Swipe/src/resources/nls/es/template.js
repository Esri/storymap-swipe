define(
	({
		viewer: {
			loading: {
				step1: "CARGANDO APLICACIÓN",
				step2: "CARGANDO DATOS",
				step3: "INICIALIZANDO",
				fail: "La carga de la comparativa de mapas ha fallado",
				loadBuilder: "CAMBIANDO A MODO DE CREADOR",
				failButton: "Reintentar"
			},
			errors: {
				boxTitle: "Se ha producido un error",
				invalidConfig: "Error muy grave: configuración no válida",
				invalidConfigNoWebmap: "Error muy grave: configuración no válida (no se ha especificado mapa Web)",
				createMap: "No se puede crear el mapa",
				invalidApp: "Error muy grave: la aplicación no se puede cargar",
				initMobile: "Bienvenido a la aplicación Web para la comparativa. La aplicación no está configurada. El creador interactivo no está admitido en dispositivos móviles.",
				noBuilderIE8: "El creador interactivo de comparativas no es compatible con las versiones anteriores a Internet Explorer 9.",
				noLayerView: "Bienvenido a la aplicación Web para la comparativa.<br />La aplicación aún no está configurada.",
				appSave: "Error al guardar la aplicación web",
				mapSave: "Error al guardar el mapa web",
				notAuthorized: "No está autorizado a configurar esta aplicación",
				conflictingProjectionsTitle: "Conflicto de proyecciones",
				conflictingProjections: "La comparativa de mapas no admite el uso de dos mapas web con distintas proyecciones. Abre los ajustes y utiliza un mapa web que use la misma proyección que el primer mapa.",
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
				builderButton: "Cambiar el modo de creador"
			}
		},
		builder: {
			builder: {
				panelHeader: "CONFIGURACIÓN DE LA APLICACIÓN",
				buttonSave: "GUARDAR",
				buttonDiscard: "CANCELAR",
				buttonSettings: "Configuración",
				buttonView: "Modo Vista",
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
				settingsLogoSocialLink: "Vínculo"
			},
			settingsExtent: {
				settingsTabExtent: "Extensión",
				settingsExtentExplain: "Establecer la extensión inicial mediante el mapa interactivo siguiente.",
				settingsExtentExplainBottom: "La extensión que definas modificará la extensión inicial del mapa web.",
				settingsExtentDrawBtn: "Dibuja una nueva extensión",
				settingsExtentModifyBtn: "Edita la extensión actual",
				settingsExtentApplyBtn: "Aplica en el mapa principal"
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
				settingsLayoutSpyGlass: "Catalejo",
				settingsLayoutSelected: "Diseño seleccionado",
				settingsLayoutSelect: "Selecciona este diseño",
				settingsSaveConfirm: "Algunos de tus cambios requieren que guardes y vuelvas a cargar la aplicación"
			},
			settingsDataModel: {
				settingsTabDataModel: "Cambiar capa",
				settingsDataModelExplainSwipe: "Elige la capa o el mapa Web que aparecerá y desaparecerá con la comparativa.",
				settingsDataModelExplainSwipe2: "",
				settingsDataModelExplainSpyGlass: "Elige la capa o el mapa Web que aparecerá en el catalejo.",
				settingsDataModelOneMap: "Un mapa Web con una sola capa",
				settingsDataModel1Explain: "Selecciona la capa que controlará la comparativa de mapas.",
				settingsDataModel1Warning: "Solo se pueden usar los servicios dinámicos, de teselas e imágenes. Si la capa está oculta por las capas superiores, la comparativa de mapas no tendrá ningún efecto.",
				settingsDataModel1SpyGlassExplain: "Selecciona la capa que aparecerá en el catalejo.",
				settingsDataModelTwoMaps: "Dos mapas Web",
				settingsDataModelLayerIds: "ID de capa de mapa Web",
				settingsDataModelSelected: "Tipo seleccionado",
				settingsDataModelWebmapSwipeId1: "ID del mapa Web derecho",
				settingsDataModelWebmapSwipeId2: "ID del mapa Web izquierdo",
				settingsDataModelWebmapGlassId1: "ID del mapa Web principal",
				settingsDataModelWebmapGlassId2: "ID del mapa Web de catalejo",
				settingsDataModelSelect: "Selecciona este tipo",
				settingsDataModel2Explain: "Comparar con otro mapa Web.",
				settingsDataModel2SpyGlassExplain: "Deja al descubierto otro mapa Web.",
				settingsDataModel2HelpTitle: "Cómo encontrar el ID de un mapa Web",
				settingsDataModel2HelpContent: "Copia y pega los dígitos que hay tras el signo "=" en la URL del mapa Web"
			},
			settingsLegend: {
				settingsTabLegend: "Diseño de la aplicación",
				settingsLegendExplain: "Selecciona los ajustes de diseño de la aplicación.",
				settingsLegendEnable: "Activar leyenda",
				settingsDescriptionEnable: "Activar descripción",
				settingsBookmarksEnable: "Activar series de comparativas",
				settingsLegendHelpTitle: "Cómo delimitar el contenido de la leyenda",
				settingsLegendHelpContent: "Utiliza la tabla de contenido del visor de mapas Web de ArcGIS.com (ocultar en leyenda)",
				preview: "Vista previa de la interfaz de usuario"
			},
			settingsSwipePopup: {
				settingsSwipePopup: "Ventana emergente",
				settingsSwipePopupExplain: "Personaliza la apariencia de los encabezados emergentes para ayudar al usuario a asociar las ventanas emergentes con las capas de mapas.",
				settingsSwipePopupSwipe1: "Mapa izquierdo",
				settingsSwipePopupSwipe2: "Mapa derecho",
				settingsSwipePopupGlass1: "Mapa principal",
				settingsSwipePopupGlass2: "Mapa de catalejo",
				settingsSwipePopupTitle: "Título del encabezado",
				settingsSwipePopupColor: "Color del encabezado"
			},
			initPopup: {
				initHeader: "Bienvenido a Swipe Builder",
				modalNext: "Siguiente",
				modalApply: "Abrir la aplicación"
			}
		}
    })
);