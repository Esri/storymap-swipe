define(
	 ({
		viewer: {
			loading: {
				step1: "CARREGANDO HISTÓRIA",
				step2: "CARREGANDO DADOS",
				step3: "INICIALIZANDO",
				fail: "Desculpe, falha ao carregar a ferramenta Oscilar",
				loadBuilder: "TROCANDO PARA MODO DO CONSTRUTOR",
				redirectSignIn: "REDIRECIONANDO PARA PÁGINA DE REGISTRO",
				redirectSignIn2: "(você será redirecionado aqui após registrar)",
				failButton: "Tentar Novamente"
			},
			errors: {
				boxTitle: "Ocorreu um erro",
				portalSelf: "Erro fatal: Falha ao obter configuração do portal",
				invalidConfig: "Erro fatal: configuração inválida",
				invalidConfigNoWebmap: "Erro fatal: Configuração inválida (nenhum mapa da web especificado)",
				createMap: "Não foi possível criar o mapa",
				invalidApp: "Erro fatal:  A história não pode ser carregada",
				initMobile: "Bem-Vindo ao aplicativo da web Oscilar. O aplicativo não está configurado. O construtor interativo não tem suporte em dispositivos móveis.",
				initMobile2: "O Construtor de Oscilação não é suportado neste tamanho de visualização.",
				noBuilderIE8: "O construtor interativo Oscilar não tem suporte no Internet Explorer anterior à versão 9.",
				noLayerView: "Bem-Vindo ao aplicativo da web Oscilar.<br />O aplicativo não está configurado",
				appSave: "Erro ao salvar a história da web",
				mapSave: "Erro ao salvar o mapa da web",
				notAuthorized: "Você não tem autorização para acessar esta história",
				conflictingProjectionsTitle: "Projeções em Conflito",
				conflictingProjections: "A ferramenta Oscilar não suporta dois mapas da web com projeções diferentes. Abra as configurações e utilize um mapa da web que utiliza a mesma projeção que o primeiro mapa da web.",
				cpButton: "Fechar",
				unspecifiedConfigOwner: "O proprietário autorizado não foi configurado.",
				invalidConfigOwner: "O proprietário da história não está autorizado."
			},
			mobileView: {
				hideIntro: "OCULTAR INTRO",
				navLeft: "Legenda",
				navMap: "Mapa",
				navRight: "Dados"
			},
			desktopView: {
				storymapsText: "Um mapa histórico",
				builderButton: "Trocar para modo do construtor",
				facebookTooltip: "Compartilhar no Facebook",
				twitterTooltip: "Compartilhar no Twitter",
				bitlyTooltip: "Obter um link curto"
			}
		},
		builder: {
			builder: {
				panelHeader: "CONFIGURAÇÃO DA HISTÓRIA",
				buttonSave: "SALVAR",
				buttonHelp: "Ajuda",
				buttonShare: "Compartilhar",
				buttonDiscard: "CANCELAR",
				buttonSettings: "Configurações",
				buttonView: "Modo de visualização",
				buttonItem: "Abra o item do Aplicativo da Web",
				noPendingChange: "Nenhuma alteração pendente",
				unSavedChangeSingular: "1 alteração não salva",
				unSavedChangePlural: "alterações não salvas",
				popoverDiscard: "Tem certeza que deseja descartar quaisquer alterações não salvas?",
				yes: "Sim",
				no: "Não",
				popoverOpenViewExplain: "Ao abrir o visualizador, você perderá quaisquer alterações não slavas",
				popoverOpenViewOk: "Ok",
				popoverOpenViewCancel: "Cancelar",
				popoverSaveWhenDone: "Não esqueça de salvar ao finalizar",
				closeWithPendingChange: "Tem certeza que deseja confirmar a ação ? Suas alterações serão perdidas.",
				gotIt: "Ok",
				savingApplication: "Salvando história",
				saveSuccess: "História salva com sucesso",
				saveError: "Falha ao salvar, tente novamente",
				saveError2: "Falha ao salvar devido a uma tag de html inválida em um nome ou descrição",
				saveError3: "O título não pode estar vazio",
				signIn: "Registre-se com uma conta em",
				signInTwo: "para salvar a história."
			},
			header:{
				editMe: "Editar-me!",
				templateTitle: "Configurar título do modelo",
				templateSubtitle: "Configurar subtítulo do modelo"
			},
			settings: {
				settingsHeader: "Configurações da história",
				modalCancel: "Cancelar",
				modalApply: "Aplicar"
			},
			settingsColors: {
				settingsTabColor: "Tema",
				settingsColorExplain: "Escolha um tema do aplicativo ou defina suas próprias cores.",
				settingsLabelColor: "Cores do plano de fundo do painel lateral e cabeçalho"
			},
			settingsHeader: {
				settingsTabLogo: "Cabeçalho",
				settingsLogoExplain: "Personalize o logo do cabeçalho (máximo de 250 x 50px).",
				settingsLogoEsri: "Logo da Esri",
				settingsLogoNone: "Nenhum logo",
				settingsLogoCustom: "Logo personalizado",
				settingsLogoCustomPlaceholder: "URL da Imagem",
				settingsLogoCustomTargetPlaceholder: "Clicar pelo link",
				settingsLogoSocialExplain: "Personalizar o link no cabeçalho superior direito.",
				settingsLogoSocialText: "Texto",
				settingsLogoSocialLink: "Link",
				settingsLogoSocialDisabled: "Este recurso foi desabilitado pelo Administrador"
			},
			settingsExtent: {
				settingsTabExtent: "Extensão",
				settingsExtentExplain: "Configure a extensão inicial pelo mapa interativo abaixo.",
				settingsExtentExplainBottom: "A extensão que você define modificará sua extensão inicial do mapa da web. Observe que se você estiver realizando uma série de oscilações esta extensão não será utilizada.",
				settingsExtentDateLineError: "A extensão não pode cruzar o meridiano de longitude de 180ï¿½",
				settingsExtentDateLineError2: "Erro ao calcular a extensão",
				settingsExtentDrawBtn: "Desenhar uma nova extensão",
				settingsExtentModifyBtn: "Editar a extensão atual",
				settingsExtentApplyBtn: "Aplicar no mapa principal",
				settingsExtentUseMainMap: "Utilizar extensão de mapa atual"
			}
        },
		swipe: {
			mobileData: {
				noData: "Nenhum dado para exibir!",
				noDataExplain: "Toque no mapa para selecionar uma feição e voltar aqui",
				noDataMap: "Nenhum dado para este mapa",
				noPopup: "Nenhum pop-up encontrado para esta feição"
			},
			mobileLegend: {
				noLegend: "Nenhuma legenda para exibir."
			},
			swipeSidePanel: {
				editTooltip: "Configure a descrição do painel lateral",
				editMe: "Editar-me!",
				legendTitle: "Legenda"
			},
			infoWindow: {
				noFeature: "Nenhum dado para exibir",
				noFeatureExplain: "Toque no mapa para selecionar uma feição"
			},
			settingsLayout: {
				settingsTabLayout: "Estilo de Oscilar",
				settingsLayoutExplain: "Escolha um estilo para a ferramenta Oscilar.",
				settingsLayoutSwipe: "Barra vertical",
				settingsLayoutSpyGlass: "Luneta",
				settingsLayoutSelected: "Layout selecionado",
				settingsLayoutSelect: "Selecionar este layout",
				settingsSaveConfirm: "Algumas de suas alterações exigem que você salve e recarregue a história"
			},
			settingsDataModel: {
				settingsTabDataModel: "Tipo de Oscilação",
				settingsDataModelExplainSwipe: "O que você deseja que seja oscilado pelos usuários?",
				settingsDataModelExplainSwipe2: "",
				settingsDataModelExplainSpyGlass: "Escolha a camada ou mapa da web que aparecerá na luneta.",
				settingsDataModelOneMap: "Uma camada em um mapa da web",
				settingsDataModel1Explain: "Selecione uma camada que deseja que seja oscilada",
				settingsDataModel1Warning: "Se a camada estiver ocultada por camadas superiores, a oscilação não terá efeito.",
				settingsDataModel1SpyGlassExplain: "Selecione a camada para aparecer na luneta.",
				settingsDataModelTwoMaps: "Dois mapas da web",
				settingsDataModelLayerIds: "IDs da Camada do Mapa da Web",
				settingsDataModelSelected: "Tipo selecionado",
				settingsDataModelWebmapSwipeId1: "ID do mapa da web à direita",
				settingsDataModelWebmapSwipeId2: "ID do mapa da web à esquerda",
				settingsDataModelWebmapGlassId1: "ID do mapa da web principal",
				settingsDataModelWebmapGlassId2: "ID do mapa da web da luneta",
				settingsDataModelSelect: "Selecionar este tipo",
				settingsDataModel2Explain: "Oscilar com outro mapa da web.",
				settingsDataModel2SpyGlassExplain: "Revelar com outro mapa da web.",
				settingsDataModel2HelpTitle: "Como encontrar ID do mapa da web?",
				settingsDataModel2HelpContent: "Copie e cole os dígitos após o sinal \'=\' na URL do mapa da web",
				switchMaps: "Trocar mapas",
				browseWebMaps: "Procurar mapas da web"
			},
			settingsLegend: {
				settingsTabLegend: "Layout do Aplicativo",
				settingsLegendExplain: "Seleciona as configurações do layout.",
				settingsLegendEnable: "Habilitar Legenda",
				settingsDescriptionEnable: "Habilitar Descrição",
				settingsBookmarksEnable: "Habilitar série do Oscilar",
				settingsPopupDisable: "Habilitar pop-up",
				settingsLocationSearchEnable: "Habilitar pesquisa do localizador",
				settingsGeolocatorEnable: "Habilitar geolocalizador",
				settingsLegendHelpContent: "Para refinar o conteúdo da legenda, utilize a área de controle do visualizador de mapa da web do ArcGIS.com (Oculto na Legenda)",
				settingsSeriesHelpContent: "A série Oscilar é uma opção de navegação por abas, que irá orientar o visualizador até uma extensão em particular e exibir um texto de descrição e título no painel lateral. Durante a ativação inicial, os marcadores de mapa da web serão importados e utilizados para preencher a barra de série. Desabilitar a opção em série desligará a barra de série, mas a configuração de série é preservada para utilização futura.",
				settingsSeriesHelpContent2: "A série de oscilação permite a você criar e editar uma seleção de posições com acompanhamento de títulos e texto.  Se seu mapa da web tiver marcadores, eles serão exibidos.  Você pode desativar a série, mas a configuração será preservada para uso futuro.",
				settingsSeriesHelpLink: "Consulte um exemplo de um aplicativo com uma série de oscilação aqui",
				preview: "Visualizar ID",
				settingsLocateButtonExplain: "Esta funcionalidade é suportada na maioria dos dispositivos móveis e navegadores desktop (incluindo Internet Explorer 9 +).",
				settingsLocateButton: "Habilitar botão \'Localizar\' em navegadores suportados",
				settingsAddressSearch: "Habilitar uma ferramenta de pesquisa de endereço"
			},
			settingsSwipePopup: {
				settingsSwipePopup: "Pop-up",
				settingsSwipePopupExplain: "Personalize a aparência de pop-ups do cabeçalho para ajudar o usuário à associar pop-ups com camadas de mapas.",
				settingsSwipePopupSwipe1: "Mapa à Esquerda",
				settingsSwipePopupSwipe2: "Mapa à Direita",
				settingsSwipePopupGlass1: "Mapa Principal",
				settingsSwipePopupGlass2: "Mapa da Luneta",
				settingsSwipePopupTitle: "Título do Cabeçalho",
				settingsSwipePopupColor: "Cor do Cabeçalho"
			},
			initPopup: {
				initHeader: "Bem-Vindo ao Builder de Oscilar/Luneta",
				modalNext: "Avançar",
				modalPrev: "Anterior",
				modalApply: "Abrir o aplicativo"
			},
			seriesPanel: {
				title: "Título",
				descr: "Descrição",
				discard: "Descartar Marcador",
				saveExtent: "Configurar Extensão do Marcador",
				discardDisabled: "Você não pode remover este marcador. A troca de série pode ser desabilitada nas Configurações."
			},
			helpPopup: {
				title: "Ajuda",
				close: "Fechar",
				tab1: {
					div1: "O modelo Oscilar/Luneta é projetado para comparar dois mapas da web separados ou duas camadas de um único mapa da web em um aplicativo da web atrativo, de fácil uso que pode ser utilizado em qualquer navegador da web em qualquer dispositivo, incluindo smartphones e tablets.",
					div2: "Para informações adicionais sobre o modelo Oscilar/Luneta, incluindo exemplos criados por usuários, <a href='http://storymaps.arcgis.com/en/app-list/swipe/' target='_blank'> visite o site da web Mapas Históricos</a>. Você também pode nos seguir pelo Twitter em <a href='https://twitter.com/EsriStoryMaps' target='_blank'>@EsriStoryMaps</a>.",
					div3: "Nós adoraríamos ouvir sua opinião! Se você tem uma pergunta, deseja solicitar uma nova feição ou se você localizou um erro, visite <a href='http://links.esri.com/storymaps/forum' target='_blank'>Story Maps User Forum</a>."
				}
			},
			share: {
				firstSaveTitle: "História salva com sucesso",
				firstSaveHeader: "Sua história está agora salva no ArcGIS Online. Leia as respostas seguintes para as perguntas frequentes.",
				firstSaveA1: "Se você não estiver familiarizado com ArcGIS Online ou deseja um atalho para acessar a interface de criação, você pode salvar o seguinte link: %LINK1%",
				firstSaveA1bis: "A história também pode ser localizada em sua <a href=\'%LINK2%\' target=\'_blank\'>pasta de conteúdo do ArcGIS Online</a>.",
				firstSaveQ2: "Minha história está compartilhada?",
				firstSaveA2: "Atualmente sua história não está compartilhada. Para compartilhá-la, utilize o botão COMPARTILHAR.",
				shareTitle: "Compartilhar sua história",
				sharePrivateHeader: "Sua história não foi compartilhada, deseja compartilhá-la?",
				sharePrivateBtn1: "Compartilhar publicamente",
				sharePrivateBtn2: "Compartilhar com minha Organização",
				sharePrivateProgress: "Compartilhamento em progresso...",
				sharePrivateErr: "Falha ao compartilhar, tente novamente ou",
				sharePrivateOk: "Compatilhando atualizados com sucesso, carregando...",
				shareStatus1: "A história não foi salva",
				shareStatus2: "A história está compartilhada publicamente",
				shareStatus3: "A história está compartilhada dentro da organização",
				shareStatus4: "A história não foi compartilhada",
				sharePreviewAsUser: "Visualizar",
				shareHeader1: "Sua história é <strong>acessível publicamente</strong>.",
				shareHeader2: "Sua história é acessível por seus membros da organização (login é exigido).",
				shareLinkHeader: "Compartilhar a história com seu público",
				shareLinkOpen: "ABRIR",
				learnMore: "Mais informações",
				shareQ1Opt1: "Como eu mantenho a história privada?",
				shareQ1Opt2: "Como eu mantenho a história privada ou compartilhada publicamente?",
				shareA1: "Utilize %SHAREIMG% na <a href='%LINK1%' target='_blank'>página de item do aplicativo</a>. Se você também desejar descompartilhar o mapa web, utilize <a href='%LINK2%' target='_blank'>página de item do mapa da web</a>.",
				shareA1bis: "Se você também desejar cancelar o compartilhamento do Serviço de Feição, utilize <a href='%LINK1%' target='_blank'>a página de item do Serviço de Feição</a>.",
				shareQ2: "Como eu edito a história posteriormente?",
				shareQ2bis: "Como eu volto para a criação de interface?",
				shareA2div1: "Salve e reutilize o link seguinte %LINK1% ou utilize <a href=\'%LINK2%\' target=\'_blank\'>a página de item da história</a>.",
				shareA2div2: "Como o proprietário da história, quando você está conectado no ArcGIS.com, o aplicativo inclui um botão para abrir o construtor interativo:",
				shareQ3: "Onde os dados estão armazenados?",
				shareA3: "A configuração da história é armazenada neste item do aplicativo da web</a>.",
				shareWarning: "O compartilhamento %WITH% foi desabilitada, pois você não é o proprietário do <a href='%LINK%' target='_blank'>mapa da web</a>.",
 				shareWarningWith1: "publicamente",
 				shareWarningWith2: "publicamente e com a Organização"
			},
			directCreation: {
				header: "Bem-Vindo ao Builder de Oscilar/Luneta",
				mapPickHeader: "Para iniciar, insira um ID de mapa da web válido ou utilize o botão de pesquisa para consultar mapas da web.",
				launchBuilder: "Inciar Builder",
				chooseWebmapLbl: "Escolher mapa da web...",
				explain2: "Para criar um mapa histórico do modelo Oscilar ou Luneta, utilize o botão abaixo para escolher o mapa da web existente do ArcGIS Online que você deseja utilizar. Alternativamente, você pode colar o ID do mapa da web no campo abaixo.",
				explain3: "Se desejar utilizar dois mapas da web em seu mapa histórico, você será solicitado para o segundo mapa da web posteriormente, ao escolher esta opção.",
				webmapPlaceholder: "Inserir um ID de mapa da web..."
			}
		},
		configure: {
			mapdlg:{
				items:{
					organizationLabel: "Minha Organização",
					onlineLabel: "ArcGIS Online",
					contentLabel: "Meu Conteúdo",
					favoritesLabel: "Meus Favoritos"
				},
				title: "Selecionar Mapa da Web",
				searchTitle: "Pesquisar",
				ok: "Ok",
				cancel: "Cancelar",
				placeholder: "Inserir termo de pesquisa"
			}
		}
    })
);
