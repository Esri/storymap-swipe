﻿define(
	({
		viewer: {
			loading: {
				step1: "CARREGAR A APLICAÇÃO",
				step2: "CARREGAR DADOS",
				step3: "INICIALIZAR",
				fail: "Não foi possível carregar o Varrimento",
				loadBuilder: "A MUDAR PARA O MODO DE BUILDER",
				failButton: "Tentar Novamente"
			},
			errors: {
				boxTitle: "Ocorreu um erro",
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
				conflictingProjections: "A ferramenta de varrimento não suporta a utilização de dois mapas web com projeções diferentes. Abra as definições e utilize um mapa web que utilize uma projeção igual à do primeiro mapa.",
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
				builderButton: "Mudar para modo de construtor"
			}
		},
		builder: {
			builder: {
				panelHeader: "CONFIGURAÇÃO DA APLICAÇÃO",
				buttonSave: "GUARDAR",
				buttonDiscard: "CANCELAR",
				buttonSettings: "Configurações",
				buttonView: "Ver modo",
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
				signIn: "Inicie sessão com uma conta em",
				signInTwo: "para guardar a aplicação."
			},
			header:{
				editMe: "Editar-me!",
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
				settingsLogoSocialLink: "Ligação"
			},
			settingsExtent: {
				settingsTabExtent: "Extensão",
				settingsExtentExplain: "Defina a extensão inicial através do mapa interativo abaixo.",
				settingsExtentExplainBottom: "A extensão definida irá modificar a extensão inicial do seu mapa web.",
				settingsExtentDrawBtn: "Desenhar uma nova extensão",
				settingsExtentModifyBtn: "Editar a extensão atual",
				settingsExtentApplyBtn: "Aplicar ao mapa principal"
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
				editMe: "Editar-me!",
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
				settingsTabDataModel: "Camada de Varrimento",
				settingsDataModelExplainSwipe: "Selecione a camada ou o mapa web que irá aparecer e desaparecer com o varrimento.",
				settingsDataModelExplainSwipe2: "",
				settingsDataModelExplainSpyGlass: "Selecione a camada ou o mapa web que irá aparecer na luneta.",
				settingsDataModelOneMap: "Um mapa web, camada única",
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
				settingsDataModel2HelpContent: "Copie e cole os dígitos que aparecem depois do sinal \'=\' no URL do mapa web"
			},
			settingsLegend: {
				settingsTabLegend: "Layout da Aplicação",
				settingsLegendExplain: "Selecione as definições de layout da aplicação.",
				settingsLegendEnable: "Ativar Legenda",
				settingsDescriptionEnable: "Ativar Descrição",
				settingsBookmarksEnable: "Ativar série de Varrimento",
				settingsLegendHelpTitle: "Como ajustar o conteúdo da legenda",
				settingsLegendHelpContent: "Utilize o índice do visualizador de mapas do ArcGIS.com (Ocultar em Legenda)",
				preview: "Pré-visualizar IU"
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
				initHeader: "Bem-vindo ao Builder de Varrimento",
				modalNext: "Seguinte",
				modalApply: "Abrir a aplicação"
			}
		}
    })
);