define(
	 ({
		viewer: {
			loading: {
				step1: "CARREGAR A APLICAÇÃO",
				step2: "CARREGAR DADOS",
				step3: "INICIALIZAR",
				fail: "Não foi possível carregar o Varrimento",
				loadBuilder: "A MUDAR PARA O MODO DE BUILDER",				
				redirectSignIn: "A REDIRECIONAR PARA A PÁGINA DE INÍCIO DE SESSÃO",
				redirectSignIn2: "(será redirecionado para aqui depois de iniciar sessão)",
				failButton: "Tentar Novamente"
			},
			errors: {
				boxTitle: "Ocorreu um erro",
				portalSelf: "Erro fatal: falha na obtenção da configuração do portal",
				invalidConfig: "Erro fatal: configuração não válida",
				invalidConfigNoWebmap: "Erro fatal: configuração não válida (não foi definido um mapa web)",
				createMap: "Não foi possível criar o mapa",
				invalidApp: "Erro fatal: não é possível carregar a aplicação",
				initMobile: "Bem-vindo à aplicação web de Varrimento. A aplicação não está configurada. O builder interativo não é suportado em dispositivos móveis.",
				noBuilderIE8: "O builder interativo de Varrimento não é suportado em versões do Internet Explorer anteriores à versão 9.",
				noLayerView: "Bem-vindo à aplicação web de Varrimento.<br />A aplicação ainda não está configurada.",
				appSave: "Erro ao guardar a aplicação web",
				mapSave: "Erro ao guardar o mapa web",
				notAuthorized: "Não tem autorização para configurar esta aplicação",
				conflictingProjectionsTitle: "Projeções em Conflito",
				conflictingProjections: "A ferramenta de varrimento não suporta a utilização de dois mapas web com projeções diferentes. Abra as definições e utilize um mapa web que utilize uma projeção igual à do primeiro mapa web.",
				cpButton: "Fechar"
			},
			mobileView: {
				hideIntro: "OCULTAR INTRODUÇÃO",
				navLeft: "Legenda",
				navMap: "Mapa",
				navRight: "Dados"
			},
			desktopView: {
				storymapsText: "Um mapa de história",
				builderButton: "Mudar para modo de construtor",
				bitlyTooltip: "Obter uma pequena ligação para a aplicação"
			}
		},
		builder: {
			builder: {
				panelHeader: "CONFIGURAÇÃO DA APLICAÇÃO",
				buttonSave: "GUARDAR",
				buttonHelp: "Ajuda",
				buttonShare: "Partilhar",
				buttonDiscard: "CANCELAR",
				buttonSettings: "Configurações",
				buttonView: "Ver modo",
				buttonItem: "Abrir o item de Aplicação Web",
				noPendingChange: "Nenhuma alteração pendente",
				unSavedChangeSingular: "1 alteração não guardada",
				unSavedChangePlural: "alterações não guardadas",
				popoverDiscard: "Tem a certeza de que pretende eliminar alterações não guardadas?",
				yes: "Sim",
				no: "Não",
				popoverOpenViewExplain: "Ao abrir o visualizador, irá perder todas as alterações não guardadas",
				popoverOpenViewOk: "Ok",
				popoverOpenViewCancel: "Cancelar",
				popoverSaveWhenDone: "Não se esqueça de guardar quando terminar",
				closeWithPendingChange: "Tem a certeza de que pretende confirmar a ação? Perderá as alterações feitas.",
				gotIt: "Ok",
				savingApplication: "A guardar a aplicação",
				saveSuccess: "Aplicação guardada com sucesso",
				saveError: "Falha ao guardar, tente novamente",
				saveError2: "Não foi guardado, falhou devido a uma palavra chave HTML inválida no nome ou a descrição",
				saveError3: "O título não pode ser vazio",
				signIn: "Inicie sessão com uma conta em",
				signInTwo: "para guardar a aplicação."
			},
			header:{
				editMe: "Edite-me!",
				templateTitle: "Definir título do modelo",
				templateSubtitle: "Definir subtítulo do modelo"
			},
			settings: {
				settingsHeader: "Definições da aplicação",
				modalCancel: "Cancelar",
				modalApply: "Aplicar"
			},
			settingsColors: {
				settingsTabColor: "Tema",
				settingsColorExplain: "Selecione um tema para a aplicação ou defina cores à sua escolha.",
				settingsLabelColor: "Cores de fundo do cabeçalho e do painel lateral"
			},
			settingsHeader: {
				settingsTabLogo: "Cabeçalho",
				settingsLogoExplain: "Personalize o logótipo do cabeçalho (o máximo é 250 x 50 px).",
				settingsLogoEsri: "Logótipo Esri",
				settingsLogoNone: "Sem logótipo",
				settingsLogoCustom: "Logótipo personalizado",
				settingsLogoCustomPlaceholder: "URL de Imagem",
				settingsLogoCustomTargetPlaceholder: "Ligação para clicar",
				settingsLogoSocialExplain: "Personalize a ligação superior direita do cabeçalho.",
				settingsLogoSocialText: "Texto",
				settingsLogoSocialLink: "Ligação",
				settingsLogoSocialDisabled: "Esta funcionalidade foi desativada pelo Admnistrador"
			},
			settingsExtent: {
				settingsTabExtent: "Extensão",
				settingsExtentExplain: "Defina a extensão inicial através do mapa interativo abaixo.",
				settingsExtentExplainBottom: "A extensão definida irá modificar a extensão inicial do seu mapa web.",
				settingsExtentDateLineError: "A extensão não pode ser ao longo do meridiano de180° de longitude",
				settingsExtentDateLineError2: "Erro ao calcular extensão",
				settingsExtentDrawBtn: "Desenhar uma nova extensão",
				settingsExtentModifyBtn: "Editar a extensão atual",
				settingsExtentApplyBtn: "Aplicar ao mapa principal",
				settingsExtentUseMainMap: "Utilizar a extensão do mapa principal"
			}
        },
		swipe: {
			mobileData: {
				noData: "Não existem dados para apresentar!",
				noDataExplain: "Toque no mapa para selecionar um elemento e volte aqui",
				noDataMap: "Não existem dados para este mapa",
				noPopup: "Não foi encontrada uma janela pop-up para este elemento"
			},
			mobileLegend: {
				noLegend: "Não existe uma legenda para apresentar."
			},
			swipeSidePanel: {
				editTooltip: "Definir a descrição do painel lateral",
				editMe: "Edite-me!",
				legendTitle: "Legenda"
			},
			infoWindow: {
				noFeature: "Não existem dados para apresentar",
				noFeatureExplain: "Toque no mapa e selecione um elemento"
			},
			settingsLayout: {
				settingsTabLayout: "Estilo de Varrimento",
				settingsLayoutExplain: "Selecione um estilo para a ferramenta de varrimento.",
				settingsLayoutSwipe: "Barra vertical",
				settingsLayoutSpyGlass: "Luneta",
				settingsLayoutSelected: "Layout selecionado",
				settingsLayoutSelect: "Selecionar este layout",
				settingsSaveConfirm: "É necessário guardar e reiniciar a aplicação para aplicar algumas das alterações efetuadas"
			},
			settingsDataModel: {
				settingsTabDataModel: "Tipo de Varrimento",
				settingsDataModelExplainSwipe: "Selecione a camada ou o mapa web que irá aparecer e desaparecer com o varrimento.",
				settingsDataModelExplainSwipe2: "",
				settingsDataModelExplainSpyGlass: "Selecione a camada ou o mapa web que irá aparecer na luneta.",
				settingsDataModelOneMap: "Uma camada num mapa web",
				settingsDataModel1Explain: "Selecione uma camada para ser controlada pela ferramenta de varrimento.",
				settingsDataModel1Warning: "Só é possível utilizar serviços Dinâmicos, de Mosaicos e de Imagens. Se a camada estiver tapada por camadas superiores, o varrimento não terá qualquer efeito.",
				settingsDataModel1SpyGlassExplain: "Selecione a camada que irá aparecer dentro da luneta.",
				settingsDataModelTwoMaps: "Dois mapas web",
				settingsDataModelLayerIds: "IDs das Camadas do Mapa Web",
				settingsDataModelSelected: "Tipo selecionado",
				settingsDataModelWebmapSwipeId1: "ID do Mapa Web Direito",
				settingsDataModelWebmapSwipeId2: "ID do Mapa Web Esquerdo",
				settingsDataModelWebmapGlassId1: "ID do Mapa Web Principal",
				settingsDataModelWebmapGlassId2: "ID do Mapa Web de Luneta",
				settingsDataModelSelect: "Selecionar este tipo",
				settingsDataModel2Explain: "Varrer com outro mapa web.",
				settingsDataModel2SpyGlassExplain: "Revelar outro mapa web.",
				settingsDataModel2HelpTitle: "Como descobrir o ID do mapa web",
				settingsDataModel2HelpContent: "Copie e cole os dígitos que aparecem depois do sinal \'=\' no URL do mapa web",
				switchMaps: "Alternar mapas",
				browseWebMaps: "Navegar em mapas web"
			},
			settingsLegend: {
				settingsTabLegend: "Layout da Aplicação",
				settingsLegendExplain: "Selecione as definições de layout da aplicação.",
				settingsLegendEnable: "Ativar Legenda",
				settingsDescriptionEnable: "Ativar Descrição",
				settingsBookmarksEnable: "Ativar série de Varrimento",
				settingsPopupDisable: "Ativar janelas popup",
				settingsLocationSearchEnable: "Ativar pesquisa de localizadores",
				settingsGeolocatorEnable: "Ativar geolocalizador",
				settingsLegendHelpContent: "Utilize o índice do visualizador de mapas do ArcGIS.com (Ocultar em Legenda)",
				settingsSeriesHelpContent: "As Séries de Varrimento são uma opção de navegação por separadores que permite guiar o visualizador para uma extensão em particular, e exibir um título e descrição no painel lateral. Durante a primeira ativação, os seus eventuais marcadores de mapas web serão utilizados para pré-preencher a barra de séries. Se desativar esta opção mais tarde, as configurações das suas séries não serão perdidas, reativar esta opção irá carregar o estado antes da desativação.", 
				settingsSeriesHelpContent2: "A aplicação de varrimento permite-lhe criar e editar uma selecção de localizações que acompanham os títulos e texto. Se o seu mapa web possui marcadores, eles serão exibidos. Pode desativar esta opção, mas a configuração será preservada para futuras utilizações.",
				settingsSeriesHelpLink: "Consulte aqui um exemplo de uma aplicação de varrimento",
				preview: "Pré-visualizar IU",
				settingsLocateButtonExplain: "Esta funcionalidade é suportada na maioria dos dispositivos móveis e navegadores de internet (incluindo o Internet Explorer 9+).",
				settingsLocateButton: "Ativar um botão \'Localizar\' em navegadores suportados",
				settingsAddressSearch: "Ativar uma ferramenta de pesquisa de moradas"
			},
			settingsSwipePopup: {
				settingsSwipePopup: "Janela Pop-up",
				settingsSwipePopupExplain: "Personalize o aspeto do cabeçalho das janelas pop-up para ajudar o utilizador a associar janelas pop-up a camadas do mapa.",
				settingsSwipePopupSwipe1: "Mapa Esquerdo",
				settingsSwipePopupSwipe2: "Mapa Direito",
				settingsSwipePopupGlass1: "Mapa Principal",
				settingsSwipePopupGlass2: "Mapa de Luneta",
				settingsSwipePopupTitle: "Título do Cabeçalho",
				settingsSwipePopupColor: "Cor do Cabeçalho"
			},
			initPopup: {
				initHeader: "Bem-vindo(a) ao Swipe/Spyglass Builder",
				modalNext: "Seguinte",
				modalPrev: "Anterior",
				modalApply: "Abrir a aplicação"
			},
			seriesPanel: {
				title: "Título",
				descr: "Descrição",
				discard: "Rejeitar Marcador",
				saveExtent: "Definir a extensão do Marcador",
				discardDisabled: "Não pode remover aquele marcador. As séries Swipe podem ser desativadas nas Definições."
			},
			helpPopup: {
				title: "Ajuda",
				close: "Fechar",
				tab1: {
					div1: "O modelo Swipe/Spyglassfoi concebido para comparar dois mapas web ou camadas, ou duas camadas de um único mapa numa aplicação web atrativa, fácil de utilizar, que pode ser utilizada em qualquer navegador web ou em qualquer dispositivo, incluindo smartphones e tablets.",
					div2: "Para mais informações sobre o modelo de Varrimento/Lupa, incluindo exemplos criados por utilizadores, <a href='http://storymaps.arcgis.com/en/app-list/swipe/' target='_blank'> visite o site web dos Story Maps</a>. Pode ainda seguir-nos no Twitter em <a href='https://twitter.com/EsriStoryMaps' target='_blank'>@EsriStoryMaps</a>.",
					div3: "Gostaríamos de ter notícias suas! Não hesite em partilhar a sua Apresentação de Mapa connosco:"
				}
			},
			share: {
				firstSaveTitle: "Aplicação guardada com sucesso",
				firstSaveHeader: "A sua aplicação está agora guardada em ArcGIS Online. Por favor, leia as seguintes respostas a perguntas frequentes.",
				firstSaveA1: "Se não está familiarizado com o ArcGIS Online ou pretende um atalho para aceder ao interface de construção, pode guardar a seguinte ligação: %LINK1%",
				firstSaveA1bis: "A aplicação pode ainda ser encontrada na sua <a href='%LINK2%' target='_blank'>Pasta de conteúdo ArcGIS Online</a>.",
				firstSaveQ2: "A minha aplicação é partilhada?",
				firstSaveA2: "De momento, a sua aplicação não é partilhada. Para a partilhar, utilize o botão PARTILHAR.",
				shareTitle: "Partilhe a sua aplicação",
				sharePrivateHeader: "A sua aplicação não é partilhada. Pretende partilhá-la?",
				sharePrivateBtn1: "Partilhar publicamente",
				sharePrivateBtn2: "Partilhar com a organização",
				sharePrivateProgress: "Partilha em progresso...",
				sharePrivateErr: "A partilha falhou, tente novamente ou",
				sharePrivateOk: "A partilha foi atualizada com sucesso, a carregar...",
				shareStatus1: "A aplicação não está guardada",
				shareStatus2: "A aplicação é partilhada publicamente",
				shareStatus3: "A aplicação é partilhada com a organização",
				shareStatus4: "A aplicação não é partilhada",
				sharePreviewAsUser: "Pré-Visualizar",
				shareHeader1: "A sua aplicação encontra-se <strong>acessível ao público</strong>.",
				shareHeader2: "A sua aplicação está acessível aos membros da sua organização (é necessário início de sessão).",
				shareLinkHeader: "Partilhe a aplicação com o seu público",
				shareLinkOpen: "ABRIR",
				learnMore: "Obtenha mais informações",
				shareQ1Opt1: "Como posso manter a Aplicação privada?",
				shareQ1Opt2: "Como posso manter a Aplicação privada ou partilhá-la publicamente?",
				shareA1: "Utilize %SHAREIMG% na <a href='%LINK1%' target='_blank'>página da aplicação do item</a>. Se também quiser deixar de partilhar o mapa web, recorra à <a href='%LINK2%' target='_blank'>página do item de mapa web</a>.",
				shareA1bis: "Se pretende parar de partilhar o serviço de elementos, utilize <a href='%LINK1%' target='_blank'>a página de detalhes do serviço de elementos</a>.",
				shareQ2: "Como posso editar a Aplicação mais tarde?",
				shareQ2bis: "Como volto mais tarde ao interface de construção?",
				shareA2div1: "Guarde e reutilize a seguinte ligação %LINK1% ou utilize <a href='%LINK2%' target='_blank'>a página de detalhes do item</a>.",
				shareA2div2: "Como proprietário da aplicação, quando inicia sessão no ArcGIS.com, a aplicação incluí um botão para abrir o construtor interativo:",				
				shareQ3: "Onde estão guardados os dados?",
				shareA3: "A configuração da aplicação encontra-se armazenada neste item de aplicação web</a>.",
				shareWarning: "A partilha de %WITH% foi desativado porque não é o proprietário do <a href='%LINK%' target='_blank'>mapa web</a>.",
 				shareWarningWith1: "publicamente",
 				shareWarningWith2: "publicamente e com a Organização"
			},
			directCreation: {
				header: "Bem-vindo(a) ao Swipe/Spyglass Builder",
				mapPickHeader: "Para começar, por favor introduza um id de mapa válido ou utilize o botão procurar para procurar mapas web.",
				launchBuilder: "Iniciar o Builder",
				chooseWebmapLbl: "Escolha o mapa web...",
				explain2: "Para criar um story map de Varrimento ou Lupa, utilize o botão abaixo para escolher o mapa web ArcGIS Online existente que pretende utilizar. Em alternativa, pode colar a ID do mapa web no campo abaixo.",
				explain3: "Caso queira utiliza dois mapas web no seu story map, será dirigido para a segunda camada de mapa ao selecionar essa opção.",
				webmapPlaceholder: "Insira uma id de mapa web..."
			}
		},
		configure: {
			mapdlg:{
				items:{
					organizationLabel: "A Organização",
					onlineLabel: "ArcGIS Online",
					contentLabel: "O Meu Conteúdo",
					favoritesLabel: "Os Meus Favoritos"
				},
				title: "Selecionar Mapa Web",
				searchTitle: "Pesquisar",
				ok: "Ok",
				cancel: "Cancelar",
				placeholder: "Introduzir termo de pesquisa"
			}
		}
    })
);

