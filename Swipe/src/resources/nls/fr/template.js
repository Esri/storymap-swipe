define(
	({
		viewer: {
			loading: {
				step1: "CHARGEMENT DE L\’APPLICATION",
				step2: "CHARGEMENT DES DONNEES",
				step3: "INITIALISATION",
				fail: "Echec de chargement du balayage",
				loadBuilder: "PASSAGE EN MODE DE GENERATEUR",
				failButton: "Réessayez"
			},
			errors: {
				boxTitle: "Une erreur s\’est produite",
				portalSelf: "Erreur fatale : échec de l\'obtention de la configuration du portail",
				invalidConfig: "Erreur fatale : configuration non valide",
				invalidConfigNoWebmap: "Erreur fatale : configuration non valide (aucune carte Web n\'est spécifiée)",
				createMap: "Impossible de créer la carte",
				invalidApp: "Erreur fatale : impossible de charger l\’application",
				initMobile: "Bienvenue dans l\’application Web de balayage. L\’application n\’est pas configurée. Le générateur interactif n\’est pas pris en charge sur les appareils mobiles.",
				noBuilderIE8: "Le générateur interactif de balayage n\'est pas pris en charge avant la version 9 d\'Internet Explorer.",
				noLayerView: "Bienvenue dans l\’application Web de balayage.<br />L\’application n\’est pas encore configurée.",
				appSave: "Erreur d\’enregistrement de l\’application Web",
				mapSave: "Erreur d\’enregistrement de la carte Web",
				notAuthorized: "Vous n\’êtes pas autorisé à accéder à cette application",
				conflictingProjectionsTitle: "Projections conflictuelles",
				conflictingProjections: "Le balayage ne prend pas en charge l\'utilisation de deux cartes Web avec des projections différentes. Ouvrez les paramètres et utilisez une carte Web dotée de la même projection que la première carte Web.",
				cpButton: "Fermer"
			},
			mobileView: {
				hideIntro: "MASQUER L\'INTRODUCTION",
				navLeft: "Légende",
				navMap: "Carte",
				navRight: "Données"
			},
			desktopView: {
				storymapsText: "Carte de narration",
				builderButton: "Mode de générateur",
				bitlyTooltip: "Obtenir un lien court vers l\'application"
			}
		},
		builder: {
			builder: {
				panelHeader: "CONFIGURATION DE L\’APPLICATION",
				buttonSave: "ENREGISTRER",
				buttonDiscard: "ANNULER",
				buttonSettings: "Paramètres",
				buttonView: "Mode d\’affichage",
				buttonItem: "Ouvrir l\'élément d\'application Web",
				noPendingChange: "Aucune modification en attente",
				unSavedChangeSingular: "1 modification non enregistrée",
				unSavedChangePlural: "modifications non enregistrées",
				popoverDiscard: "Voulez-vous vraiment ignorer les modifications non enregistrées ?",
				yes: "Oui",
				no: "Non",
				popoverOpenViewExplain: "En ouvrant la visionneuse, vous perdez les modifications non enregistrées",
				popoverOpenViewOk: "OK",
				popoverOpenViewCancel: "Annuler",
				popoverSaveWhenDone: "N\’oubliez pas d\’enregistrer lorsque vous avez terminé",
				closeWithPendingChange: "Voulez-vous vraiment confirmer l\’opération ? Vos modifications seront perdues.",
				gotIt: "OK",
				savingApplication: "Enregistrement de l\’application",
				saveSuccess: "L\’application a été enregistrée",
				saveError: "L\’enregistrement a échoué, réessayez",
				signIn: "Connectez-vous avec un compte sur",
				signInTwo: "pour enregistrer l\’application."
			},
			header:{
				editMe: "Modifier",
				templateTitle: "Définir le titre du modèle",
				templateSubtitle: "Définir le sous-titre du modèle"
			},
			settings: {
				settingsHeader: "Paramètres de l\’application",
				modalCancel: "Annuler",
				modalApply: "Appliquer"
			},
			settingsColors: {
				settingsTabColor: "Thème",
				settingsColorExplain: "Sélectionnez un thème d\'application ou définissez vos propres couleurs.",
				settingsLabelColor: "Couleurs d\'arrière-plan de l\'en-tête et des volets latéraux"
			},
			settingsHeader: {
				settingsTabLogo: "En-tête",
				settingsLogoExplain: "Personnalisez le logo d\’en-tête (250 x 50 px au maximum).",
				settingsLogoEsri: "Logo Esri",
				settingsLogoNone: "Aucun logo",
				settingsLogoCustom: "Logo personnalisé",
				settingsLogoCustomPlaceholder: "URL de l\’image",
				settingsLogoCustomTargetPlaceholder: "Lien",
				settingsLogoSocialExplain: "Personnalisez le lien d\’en-tête en haut à droite.",
				settingsLogoSocialText: "Texte",
				settingsLogoSocialLink: "Lien",
				settingsLogoSocialDisabled: "Cette entité a été désactivée par l\'administrateur"
			},
			settingsExtent: {
				settingsTabExtent: "Etendue",
				settingsExtentExplain: "Définissez l\’étendue initiale au moyen de la carte interactive ci-dessous.",
				settingsExtentExplainBottom: "L\'étendue que vous définissez modifiera l\'étendue initiale de votre carte Web. Notez que si vous effectuez une série de balayages, cette étendue ne sera pas utilisée.",
				settingsExtentDateLineError: "L\'étendue ne peut pas traverser le méridien de 180° de longitude",
				settingsExtentDateLineError2: "Erreur de calcul de l\'étendue",
				settingsExtentDrawBtn: "Tracer une nouvelle étendue",
				settingsExtentModifyBtn: "Modifier l\’étendue actuelle",
				settingsExtentApplyBtn: "Appliquer à la carte principale",
				settingsExtentUseMainMap: "Utiliser l\'étendue de carte principale"
			}
        },
		swipe: {
			mobileData: {
				noData: "Aucune donnée à afficher.",
				noDataExplain: "Touchez la carte pour sélectionner une entité puis revenez ici",
				noDataMap: "Aucune donnée pour cette carte",
				noPopup: "Aucune fenêtre contextuelle trouvée pour cette entité"
			},
			mobileLegend: {
				noLegend: "Aucune légende à afficher."
			},
			swipeSidePanel: {
				editTooltip: "Définissez la description du volet latéral",
				editMe: "Modifier",
				legendTitle: "Légende"
			},
			infoWindow: {
				noFeature: "Aucune donnée à afficher",
				noFeatureExplain: "Touchez la carte pour sélectionner une entité"
			},
			settingsLayout: {
				settingsTabLayout: "Style de balayage",
				settingsLayoutExplain: "Sélectionnez un style pour l\'outil de balayage.",
				settingsLayoutSwipe: "Barre verticale",
				settingsLayoutSpyGlass: "Longue-vue",
				settingsLayoutSelected: "Mise en page sélectionnée",
				settingsLayoutSelect: "Sélectionner cette mise en page",
				settingsSaveConfirm: "Certaines de vos modifications nécessitent d\'enregistrer et de recharger l\'application"
			},
			settingsDataModel: {
				settingsTabDataModel: "Balayer un type",
				settingsDataModelExplainSwipe: "Que voulez-vous que les utilisateurs balayent ?",
				settingsDataModelExplainSwipe2: "",
				settingsDataModelExplainSpyGlass: "Sélectionnez la couche ou la carte Web qui apparaîtra dans la longue-vue.",
				settingsDataModelOneMap: "Une couche dans une carte Web",
				settingsDataModel1Explain: "Sélectionnez la couche à balayer",
				settingsDataModel1Warning: "Si la couche est masquée par des couches supérieures, le balayage sera sans effet.",
				settingsDataModel1SpyGlassExplain: "Sélectionner la couche devant apparaître dans la longue-vue.",
				settingsDataModelTwoMaps: "Deux cartes Web",
				settingsDataModelLayerIds: "ID de couches de carte Web",
				settingsDataModelSelected: "Type sélectionné",
				settingsDataModelWebmapSwipeId1: "ID de la carte Web de droite",
				settingsDataModelWebmapSwipeId2: "ID de la carte Web de gauche",
				settingsDataModelWebmapGlassId1: "ID de la principale carte Web",
				settingsDataModelWebmapGlassId2: "ID de la carte Web dans la longue-vue",
				settingsDataModelSelect: "Sélectionner ce type",
				settingsDataModel2Explain: "Balayer avec une autre carte Web.",
				settingsDataModel2SpyGlassExplain: "Révéler une autre carte Web.",
				settingsDataModel2HelpTitle: "Comment trouver l\'ID d\'une carte Web ?",
				settingsDataModel2HelpContent: "Copiez et collez les chiffres après le signe « = » dans l\'URL de la carte Web"
			},
			settingsLegend: {
				settingsTabLegend: "Mise en page de l\'application",
				settingsLegendExplain: "Sélectionnez les paramètres de mise en page de l\'application.",
				settingsLegendEnable: "Activer la légende",
				settingsDescriptionEnable: "Activer la description",
				settingsBookmarksEnable: "Activer la série de balayages",
				settingsPopupDisable: "Activer la fenêtre contextuelle",
				settingsLocationSearchEnable: "Activer la recherche de localisateur",
				settingsGeolocatorEnable: "Activer le géolocalisateur",
				settingsLegendHelpContent: "Pour affiner le contenu de la légende, utilisez la table des matières de la visionneuse de carte Web ArcGIS.com (Masquer dans la légende)",
				settingsSeriesHelpContent: "La série de balayages est une option de navigation par onglets qui guide la visionneuse vers une étendue particulière et qui affiche un titre et un texte de description dans le volet latéral. Lors de la première activation, les géosignets des cartes Web sont importés et utilisés pour renseigner la barre de la série. Si vous désactivez l\'option de série, la barre de série est désactivée, mais la configuration de votre série est conservée pour une utilisation ultérieure.", 
				settingsSeriesHelpContent2: "La série de balayages vous permet de créer et de mettre à jour une sélection d\'emplacements accompagnés de titres et de texte. Si votre carte Web comprend des géosignets, ils s\'afficheront. Vous pouvez désactiver la série, mais la configuration sera conservée pour une utilisation future.",
				settingsSeriesHelpLink: "Consultez un exemple d\'application avec une série de balayages ici",
				preview: "Aperçu de l\'interface utilisateur",
				settingsLocateButtonExplain: "Cette fonctionnalité est prise en charge par la plupart des appareils mobiles et des navigateurs bureautiques (y compris Internet Explorer 9+).",
				settingsLocateButton: "Activer un bouton \'Localiser\' sur les navigateurs pris en charge",
				settingsAddressSearch: "Activer un outil de recherche d\'adresses"
			},
			settingsSwipePopup: {
				settingsSwipePopup: "Fenêtre contextuelle",
				settingsSwipePopupExplain: "Personnalisez l\'apparence de l\'en-tête des fenêtres contextuelles en vue d\'aider l\'utilisateur à associer des fenêtres contextuelles à des couches de carte.",
				settingsSwipePopupSwipe1: "Carte de gauche",
				settingsSwipePopupSwipe2: "Carte de droite",
				settingsSwipePopupGlass1: "Carte principale",
				settingsSwipePopupGlass2: "Carte de longue-vue",
				settingsSwipePopupTitle: "Titre de l\'en-tête",
				settingsSwipePopupColor: "Couleur de l\'en-tête"
			},
			initPopup: {
				initHeader: "Bienvenue dans le Générateur de balayages",
				modalNext: "Suivant",
				modalPrev: "Précédent",
				modalApply: "Ouvrir l\'application"
			},
			seriesPanel: {
				title: "Titre",
				descr: "Description",
				discard: "Ignorer le géosignet",
				saveExtent: "Définir l\'étendue du géosignet",
				discardDisabled: "Vous ne pouvez pas supprimer ce géosignet. La série de balayages peut être désactivée dans les paramètres."
			}
		}
    })
);