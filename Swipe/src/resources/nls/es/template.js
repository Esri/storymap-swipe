define({
  "viewer": {
    "loading": {
      "step1": "CARGANDO HISTORIA",
      "step2": "CARGANDO DATOS",
      "step3": "INICIALIZANDO",
      "fail": "La carga de la comparativa de mapas ha fallado",
      "loadBuilder": "CAMBIANDO A MODO DE BUILDER",
      "redirectSignIn": "REDIRIGIENDO A LA PÁGINA DE INICIO DE SESIÓN",
      "redirectSignIn2": "(se te redirigirá aquí después del inicio de sesión)",
      "failButton": "Reintentar"
    },
    "errors": {
      "boxTitle": "Se ha producido un error",
      "portalSelf": "Error muy grave: no se ha podido obtener la configuración del portal",
      "invalidConfig": "Error muy grave: configuración no válida",
      "invalidConfigNoWebmap": "Error muy grave: configuración no válida (el mapa web o el identificador de la aplicación no están especificados en index.html)",
      "invalidConfigNoAppDev": "No se ha especificado ningún identificador de la aplicación de representación cartográfica web o mapa web en los parámetros de la dirección URL (?appid= o ?webmap=). En modo de desarrollo, la configuración de appid y webmap en index.html se ignora.",
      "createMap": "No se puede crear el mapa",
      "invalidApp": "Error grave: la historia no se puede cargar",
      "initMobile": "Bienvenido a la aplicación web para la comparativa. La aplicación no está configurada. El builder interactivo no es compatible con dispositivos móviles.",
      "initMobile2": "El builder de Swipe no es compatible con este tamaño de pantalla. Si es posible, cambia el tamaño de tu navegador para acceder al builder o crea tu historia en un dispositivo que tenga una pantalla más grande.",
      "initMobile3": "Rota el dispositivo a horizontal para utilizar el builder de Swipe.",
      "noBuilderIE8": "El builder interactivo de comparativas no es compatible con las versiones anteriores a Internet Explorer 9.",
      "noViewerIE2": "Está intentando ver esta historia con un navegador antiguo no compatible. Es posible que algunas características no funcionen o que se produzcan otros problemas inesperados. Es recomendable actualizar a Internet Explorer 11 o usar otro navegador como Chrome.",
      "noViewerIE3": "A finales de 2017, esta historia no se podrá cargar en este navegador. Cuando eso ocurra, deberá usar un navegador compatible para ver la historia.",
      "attention": "Atención",
      "noLayerView": "Bienvenido a la aplicación web para la comparativa.<br />La aplicación aún no está configurada.",
      "appSave": "Error al guardar la historia web",
      "mapSave": "Error al guardar el mapa web",
      "notAuthorized": "No tienes autorización para acceder a esta historia",
      "notAuthorizedBuilder": "No estás autorizado para utilizar el builder de Swipe y Spyglass.",
      "conflictingProjectionsTitle": "Conflicto de proyecciones",
      "conflictingProjections": "La comparativa de mapas no admite el uso de dos mapas web con distintas proyecciones. Abre los ajustes y utiliza un mapa web que use la misma proyección que el primer mapa web.",
      "cpButton": "Cerrar",
      "unspecifiedConfigOwner": "El propietario autorizado no se ha configurado.",
      "invalidConfigOwner": "El propietario de la historia no está autorizado."
    },
    "mobileView": {
      "hideIntro": "OCULTAR INTRODUCCIÓN",
      "navLeft": "Leyenda",
      "navMap": "Mapa",
      "navRight": "Datos"
    },
    "desktopView": {
      "storymapsText": "Un story map",
      "builderButton": "Cambiar a modo de builder",
      "facebookTooltip": "Compartir en Facebook",
      "twitterTooltip": "Compartir en Twitter",
      "bitlyTooltip": "Obtén un vínculo corto",
      "tooltipAutoplayDisabled": "Esto no está disponible en el modo de reproducción automática",
      "autoplayLabel": "Modo de reproducción automática",
      "autoplayExplain1": "El modo de reproducción automática avanzará por la historia a intervalos regulares. Esto es idóneo para monitores de quioscos o de visualización pública, pero debes tener en cuenta que, en otras situaciones, puede que dificulte la lectura de la historia. Esta función no es compatible con pantallas pequeñas.",
      "autoplayExplain2": "Cuando este modo está activado, hay disponibles controles para reproducir o detener la historia y para ajustar la velocidad de navegación."
    },
    "bannerNotification": {
      "learnMore": "Más información",
      "close": "Cerrar",
      "dontShowAgain": "No volver a mostrar este mensaje"
    },
    "httpsTransitionMessage": {
      "bannerMsg": "Mensaje importante sobre seguridad web y Story Maps",
      "s1h1": "Esri está mejorando la seguridad de Story Maps",
      "s1p1": "Sus Story Maps en vivo en la web y la comunidad web siempre están trabajando para establecer e implementar una mejor seguridad. HTTPS, que ofrece una conexión segura al contenido transmitido por Internet, está emergiendo como la forma esperada de acceder a contenido web. La mayoría de navegadores modernos ahora muestran mensajes de advertencia cuando se utiliza HTTP en lugar de HTTPS. Como se trata de un estándar emergente, a partir de la actualización de ArcGIS Online de junio de 2018, sus Story Maps tendrán que utilizar HTTPS.",
      "s1p2": "Desde el punto de vista práctico, significa que se debe acceder a un Story Map y todo su contenido (incluidas imágenes, capas, aplicaciones y sitios web integrados) por medio de vínculos que comiencen por HTTPS en lugar de HTTP. Con ello garantiza una experiencia óptima a sus lectores, ya que la mayoría de navegadores web indicarán que sus historias son seguras.",
      "s2h1": "¿Qué tengo que hacer?",
      "s2p1": "Esri está trabajando para que esta sea una transición fácil para los autores y lectores de Story Map. Ahora, los builders de Story Map y Mis historias cuentan con herramientas que le ayudarán a encontrar contenido no seguro (HTTP) en sus historias y le harán recomendaciones para actuar al respecto. Compruebe si sus historias tienen contenido no seguro y actualice a HTTPS antes de junio de 2018.",
      "action1": "Cerrar",
      "action2": "Comprobar mis historias ahora",
      "action3": "Más información"
    },
    "licenseChange2018": {
      "noAccess": "Su cuenta (%USER_NAME%) no tiene licencia para abrir un story map que no sea público.  Pídale al administrador de su organización que le asigne un tipo de usuario que incluya Story Maps o una licencia complementaria de aplicaciones esenciales."
    }
  },
  "builder": {
    "builder": {
      "panelHeader": "CONFIGURACIÓN DE LA HISTORIA",
      "buttonSave": "GUARDAR",
      "buttonHelp": "Ayuda",
      "buttonShare": "Compartir",
      "buttonDiscard": "CANCELAR",
      "buttonSettings": "Configuración",
      "buttonView": "Modo Vista",
      "buttonItem": "Abre el elemento de la aplicación web",
      "noPendingChange": "Sin cambios pendientes",
      "unSavedChangeSingular": "1 cambio sin guardar",
      "unSavedChangePlural": "cambios no guardados",
      "popoverDiscard": "¿Estás seguro de que deseas descartar los cambios no guardados?",
      "yes": "Sí",
      "no": "No",
      "popoverOpenViewExplain": "Al abrir el visor, perderás los cambios no guardados",
      "popoverOpenViewOk": "Aceptar",
      "popoverOpenViewCancel": "Cancelar",
      "popoverSaveWhenDone": "No olvides guardar los cambios cuando hayas terminado",
      "closeWithPendingChange": "¿Estás seguro de que deseas confirmar la acción? Tus cambios se perderán.",
      "gotIt": "Aceptar",
      "savingApplication": "Guardando la historia",
      "saveSuccess": "Historia guardada",
      "saveError": "Error al guardar. Inténtalo de nuevo",
      "saveError2": "Error al guardar a causa de una etiqueta HTML no válida en un nombre o una descripción",
      "saveError3": "El título no puede estar vacío",
      "signIn": "Inicia sesión con una cuenta en",
      "signInTwo": "para guardar la historia."
    },
    "header": {
      "editMe": "¡Modifícame!",
      "templateTitle": "Establecer título de plantilla",
      "templateSubtitle": "Establecer subtítulo de plantilla"
    },
    "settings": {
      "settingsHeader": "Configuración de la historia",
      "modalCancel": "Cancelar",
      "modalApply": "Aplicar"
    },
    "settingsColors": {
      "settingsTabColor": "Tema",
      "settingsColorExplain": "Elige un tema para la aplicación o define tus propios colores.",
      "settingsLabelColor": "Colores de fondo del encabezado y el panel lateral"
    },
    "settingsHeader": {
      "settingsTabLogo": "Encabezado",
      "settingsLogoExplain": "Personaliza el logotipo del encabezado (el valor máximo es 250 x 50px).",
      "settingsLogoEsri": "Logotipo de Esri",
      "settingsLogoNone": "Sin logotipo",
      "settingsLogoCustom": "Logotipo personalizado",
      "settingsLogoCustomPlaceholder": "URL de imagen",
      "settingsLogoCustomTargetPlaceholder": "Enlace click-through",
      "settingsLogoSocialExplain": "Personaliza el enlace superior derecho del encabezado.",
      "settingsLogoSocialText": "Texto",
      "settingsLogoSocialLink": "Vínculo",
      "settingsLogoSocialDisabled": "El administrador ha deshabilitado esta entidad"
    },
    "settingsExtent": {
      "settingsTabExtent": "Extensión",
      "settingsExtentExplain": "Establecer la extensión inicial mediante el mapa interactivo siguiente.",
      "settingsExtentExplainBottom": "La extensión que definas modificará la extensión inicial del mapa web. Ten en cuenta que si estás llevando a cabo una serie comparativa no se usará esa extensión.",
      "settingsExtentDateLineError": "La extensión no puede atravesar el meridiano de longitud 180ï¿½",
      "settingsExtentDateLineError2": "Error al calcular la extensión",
      "settingsExtentDrawBtn": "Dibuja una nueva extensión",
      "settingsExtentModifyBtn": "Edita la extensión actual",
      "settingsExtentApplyBtn": "Aplica en el mapa principal",
      "settingsExtentUseMainMap": "Usa la extensión del mapa principal"
    },
    "storyTellerUserType": {
      "notCreatorError": "Su cuenta (%USER_NAME%) no tiene licencia para usar builders de story maps clásicos. Pídale al administrador de su organización que le asigne un tipo de usuario Creator."
    }
  },
  "swipe": {
    "mobileData": {
      "noData": "No hay datos para mostrar",
      "noDataExplain": "Puntea el mapa para seleccionar una entidad y volver aquí",
      "noDataMap": "No hay datos para este mapa",
      "noPopup": "No se han encontrado ventanas emergentes para esta entidad"
    },
    "mobileLegend": {
      "noLegend": "No hay leyenda para mostrar."
    },
    "swipeSidePanel": {
      "editTooltip": "Establecer la descripción del panel lateral",
      "editMe": "¡Modifícame!",
      "legendTitle": "Leyenda"
    },
    "infoWindow": {
      "noFeature": "No hay datos que mostrar",
      "noFeatureExplain": "Puntea el mapa para seleccionar una entidad"
    },
    "settingsLayout": {
      "settingsTabLayout": "Cambiar estilo",
      "settingsLayoutExplain": "Elige un estilo para la comparativa de mapas.",
      "settingsLayoutSwipe": "Barra vertical",
      "settingsLayoutSpyGlass": "Lupa",
      "settingsLayoutSelected": "Diseño seleccionado",
      "settingsLayoutSelect": "Selecciona este diseño",
      "settingsSaveConfirm": "Algunos de tus cambios requieren que guardes y vuelvas a cargar la historia"
    },
    "settingsDataModel": {
      "settingsTabDataModel": "Tipo de comparación",
      "settingsDataModelExplainSwipe": "¿Qué quieres que comparen los usuarios?",
      "settingsDataModelExplainSwipe2": "",
      "settingsDataModelExplainSpyGlass": "Elige la capa o el mapa web que aparecerá en la lupa.",
      "settingsDataModelOneMap": "Una capa en un mapa web",
      "settingsDataModel1Explain": "Selecciona la capa que quieras comparar",
      "settingsDataModel1Warning": "Si la capa está oculta por capas superiores, la comparativa de mapas no tendrá ningún efecto.",
      "settingsDataModel1SpyGlassExplain": "Selecciona la capa que aparecerá en la lupa.",
      "settingsDataModelTwoMaps": "Dos mapas Web",
      "settingsDataModelLayerIds": "ID de capa de mapa web",
      "settingsDataModelSelected": "Tipo seleccionado",
      "settingsDataModelWebmapSwipeId1": "ID del mapa web derecho",
      "settingsDataModelWebmapSwipeId2": "ID del mapa web izquierdo",
      "settingsDataModelWebmapGlassId1": "ID del mapa web principal",
      "settingsDataModelWebmapGlassId2": "ID del mapa web de la lupa",
      "settingsDataModelSelect": "Selecciona este tipo",
      "settingsDataModel2Explain": "Comparar con otro mapa web.",
      "settingsDataModel2SpyGlassExplain": "Deja al descubierto otro mapa web.",
      "settingsDataModel2HelpTitle": "¿Cómo puedo encontrar el ID de un mapa web?",
      "settingsDataModel2HelpContent": "Copia y pega los dígitos que hay tras el signo \"=\" en la URL del mapa Web",
      "switchMaps": "Intercambiar mapas",
      "browseWebMaps": "Examinar mapas web"
    },
    "settingsLegend": {
      "settingsTabLegend": "Diseño de la aplicación",
      "settingsLegendExplain": "Selecciona los ajustes de diseño.",
      "settingsLegendEnable": "Activar leyenda",
      "settingsDescriptionEnable": "Activar descripción",
      "settingsBookmarksEnable": "Activar series de comparativas",
      "settingsPopupDisable": "Habilitar ventana emergente",
      "settingsLocationSearchEnable": "Habilitar la búsqueda del localizador",
      "settingsGeolocatorEnable": "Habilitar geolocalizador",
      "settingsLegendHelpContent": "Utiliza la tabla de contenido del visor de mapas web de ArcGIS (ocultar en leyenda) para delimitar el contenido de la leyenda.",
      "settingsSeriesHelpContent": "Las series comparativas es una opción de navegación por pestañas que guía al usuario a una extensión concreta y muestra un título y un texto descriptivo en el panel lateral. En el momento de la primera activación, los marcadores de mapas web se importarán y usarán para rellenar la barra de series. Si deshabilitas esta opción, la barra de series se desactivará, pero la configuración de las series se conservará para usarse de nuevo.",
      "settingsSeriesHelpContent2": "Las series de comparativas te permiten crear y editar una selección de ubicaciones junto con títulos y texto. Si tu mapa web tiene marcadores de posición, se mostrarán. Puedes desactivar las series, pero la configuración se mantendrá para su uso futuro.",
      "settingsSeriesHelpLink": "Mira un ejemplo de una aplicación con una serie de comparativas aquí",
      "preview": "Vista previa de la interfaz de usuario",
      "settingsLocateButtonExplain": "Es compatible con la mayoría de navegadores. Solo aparece cuando el acceso al story map se realiza mediante HTTPS. No aparece si la historia está integrada.",
      "settingsLocateButton": "Habilitar un botón 'Localizar' en los navegadores compatibles",
      "settingsAddressSearch": "Habilitar una herramienta de búsqueda de direcciones"
    },
    "settingsSwipePopup": {
      "settingsSwipePopup": "Ventana emergente",
      "settingsSwipePopupExplain": "Personaliza la apariencia de los encabezados emergentes para ayudar al usuario a asociar las ventanas emergentes con las capas de mapas.",
      "settingsSwipePopupSwipe1": "Mapa izquierdo",
      "settingsSwipePopupSwipe2": "Mapa derecho",
      "settingsSwipePopupGlass1": "Mapa principal",
      "settingsSwipePopupGlass2": "Mapa de la lupa",
      "settingsSwipePopupTitle": "Título del encabezado",
      "settingsSwipePopupColor": "Color del encabezado"
    },
    "initPopup": {
      "initHeader": "Bienvenido al builder de Comparativa/Lupa",
      "modalNext": "Siguiente",
      "modalPrev": "Anterior",
      "modalApply": "Abrir la aplicación"
    },
    "seriesPanel": {
      "title": "Título",
      "descr": "Descripción",
      "discard": "Descartar marcadores",
      "saveExtent": "Configurar extensión de marcadores",
      "discardDisabled": "No puedes eliminar ese marcador. Las series comparativas pueden deshabilitarse en la Configuración."
    },
    "helpPopup": {
      "title": "Ayuda",
      "close": "Cerrar",
      "tab1": {
        "div1": "La plantilla Comparativa/Lupa se ha diseñado para comparar dos mapas web o dos capas de un mismo mapa web en una aplicación web atractiva y fácil de usar que se puede utilizar en cualquier navegador web o dispositivo, incluidos los smartphones y las tablets.",
        "div2": "Si quiere obtener información adicional sobre la plantilla Comparativa/Lupa, incluidos algunos ejemplos creados por los usuarios, <a href='https://storymaps.arcgis.com/en/app-list/swipe-spyglass/' target='_blank'> visite el sitio web de Story Maps</a>. También puede seguirnos en Twitter en <a href='https://twitter.com/EsriStoryMaps' target='_blank'>@EsriStoryMaps</a>.",
        "div3": "Nos gusta mucho tener noticias tuyas. Tanto si tienes alguna pregunta, si deseas solicitar un nueva característica o si crees que has encontrado un error, visita el <a href='http://links.esri.com/storymaps/forum' target='_blank'>foro de usuarios de Story Maps</a>."
      }
    },
    "share": {
      "firstSaveTitle": "Historia guardada",
      "manageStory": "Administrar tu historia",
      "manageStoryA1": "Sugerencia: puedes utilizar %LINK1% para comprobar si tu historia tiene errores y para cambiar el modo en que se comparten sus componentes. Mis historias también te ayuda a mejorar la historia cuando se comparte en las redes sociales. Puedes obtener más información sobre otras funciones útiles en estos %LINK2%.",
      "manageStoryA1V1": "Mis historias",
      "manageStoryA1V2": "publicaciones de blogs",
      "shareTitle": "Compartir tu historia",
      "sharePrivateHeader": "Tu historia no está compartida. ¿Quieres compartirla?",
      "sharePrivateBtn1": "Compartir públicamente",
      "sharePrivateBtn2": "Compartir con mi organización",
      "sharePrivateProgress": "Uso compartido en curso...",
      "sharePrivateErr": "Error del uso compartido. Inténtalo de nuevo o",
      "sharePrivateOk": "Uso compartido actualizado, cargando...",
      "shareStatus1": "No se ha guardado la historia",
      "shareStatus2": "La historia se ha compartido públicamente",
      "shareStatus3": "La historia se ha compartido en la organización",
      "shareStatus4": "No se ha compartido la historia",
      "sharePreviewAsUser": "Presentación preliminar",
      "shareHeader1": "Tu historia está <strong>accesible públicamente</strong>.",
      "shareHeader2": "Tu historia está accesible para los miembros de tu organización (se necesita iniciar sesión).",
      "shareLinkHeader": "Compartir tu historia",
      "shareLinkOpen": "ABRIR",
      "learnMore": "Más información",
      "shareA1": "Usa %SHAREIMG% en <a href='%LINK1%' target='_blank'>la página de elemento de la aplicación</a>. Si también quieres dejar de compartir el mapa web, usa <a href='%LINK2%' target='_blank'>la página de elemento del mapa web</a>.",
      "shareWarning": "Se ha deshabilitado la opción de compartir %WITH% porque no eres el propietario del <a href='%LINK%' target='_blank'>mapa web</a>.",
      "shareWarningWith1": "públicamente",
      "shareWarningWith2": "públicamente y con la organización"
    },
    "directCreation": {
      "header": "Bienvenido al builder de Comparativa/Lupa",
      "mapPickHeader": "Para empezar, escribe un Id. de mapa web válido o usa el botón de búsqueda para examinar mapas web.",
      "launchBuilder": "Iniciar Builder",
      "chooseWebmapLbl": "Elegir mapa web...",
      "explain2": "Si vas a crear un mapa de historia de Comparativa o Lupa, usa el botón siguiente para elegir el mapa web que deseas utilizar. Si lo prefieres, puedes pegar el Id. del mapa web en el campo siguiente.",
      "explain3": "Si deseas usar dos mapas web en tu mapa de historia, se te pedirá el segundo mapa web más adelante cuando elijas esa opción.",
      "webmapPlaceholder": "Especificar un Id. de mapa web..."
    },
    "saveErrorSocial": {
      "title": "Actualización de uso compartido de redes sociales",
      "panel1": "La apariencia de tu historia en las redes sociales ha mejorado, pero el título del elemento de tu aplicación web en ArcGIS no coincide con el título de tu historia.",
      "panel1tooltip": "Al definir un título, un resumen y una imagen de la vista en miniatura, tu historia tendrá este aspecto:",
      "panel2": "Indica el título que deseas utilizar en las redes sociales:",
      "panel2q1": "Título de la historia (recomendado)",
      "panel2q1tooltip": "Si eliges esta opción, el título de tu elemento se modificará para que coincida con el título de la historia. Todos los cambios que se realicen en el builder se sincronizarán.",
      "panel2q2": "Título del elemento",
      "panel3": "Para mejorar aún más la apariencia de tu historia en las redes sociales, utiliza ${MYSTORIES} para agregar un resumen y una imagen de la vista en miniatura.",
      "panel4": "No volver a advertirme sobre esta historia",
      "mystories": "Mis historias",
      "btnSave": "Guardar"
    }
  },
  "configure": {
    "mapdlg": {
      "items": {
        "organizationLabel": "Mi organización",
        "onlineLabel": "ArcGIS Online",
        "contentLabel": "Mi contenido",
        "favoritesLabel": "Mis favoritos"
      },
      "title": "Seleccionar mapa web",
      "searchTitle": "Buscar",
      "ok": "Aceptar",
      "cancel": "Cancelar",
      "placeholder": "Introducir término de búsqueda"
    }
  },
  "httpsTransitionNotification": {
    "s1h1": "Esri está mejorando la seguridad de Story Maps",
    "s1p1": "Sus Story Maps viven en la web y la comunidad web siempre está trabajando para establecer e implementar una mejor seguridad. HTTPS, que ofrece una conexión segura al contenido transmitido por Internet, está emergiendo como la forma esperada de acceder a contenido web. La mayoría de navegadores modernos ahora muestran mensajes de advertencia cuando se utiliza HTTP en lugar de HTTPS. Debido a este estándar emergente, recomendamos encarecidamente que utilice vínculos HTTPS para crear y compartir Story Maps y usar únicamente URL de HTTPS al integrar contenido de web o vincular a imágenes de un Story Map.",
    "s1p2": "Desde el punto de vista práctico, significa que se debería acceder a un Story Map y todo su contenido (incluidas imágenes, capas, aplicaciones y sitios web integrados) por medio de vínculos que comiencen por HTTPS en lugar de HTTP. Con ello garantiza una experiencia óptima a sus lectores, ya que la mayoría de navegadores web indicarán que sus historias son seguras.",
    "s2h1": "¿Qué tengo que hacer?",
    "s2p1": "Esri está trabajando para que esta sea una transición fácil para los autores y lectores de Story Maps. Ahora, los builders de Story Maps y Mis historias cuentan con herramientas que le ayudarán a encontrar contenido no seguro (HTTP) en sus historias y le harán recomendaciones para actuar al respecto. Compruebe si sus historias tienen contenido no seguro y actualícese a HTTPS lo antes posible.",
    "action1": "Cerrar",
    "action2": "Comprobar mis historias ahora",
    "action3": "Más información"
  },
  "embedBar": {
    "share": "Compartir",
    "fullScreen": "Pantalla completa",
    "enlarge": "Ampliar",
    "newTab": "Abrir en una nueva pestaña",
    "tagline": "Un story map",
    "exitFullScreen": "Salir de pantalla completa"
  },
  "june2018SurveyMessage": {
    "bannerMsg": "¿Podemos preguntarle algo? Nos ayudará a dar forma al futuro de los Story Maps.",
    "s1h1": "Comparta su opinión y dé forma al futuro",
    "s1p1": "Sus comentarios son nuestra principal fuente de opiniones y, saber más acerca de usted nos ayuda a mejorar los Story Maps. Le agradeceríamos que participara en esta breve encuesta de tan solo tres minutos.",
    "s2p1": "Como siempre ¡gracias por usar Esri Story Maps!",
    "action1": "Cerrar",
    "action2": "Responder a la encuesta"
  }
});