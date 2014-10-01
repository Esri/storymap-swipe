define(
	({
		viewer: {
			loading: {
				step1: "正在加载应用程序",
				step2: "正在加载数据",
				step3: "正在初始化",
				fail: "抱歉，卷帘加载失败",
				loadBuilder: "切换到构建器模式",
				failButton: "重试"
			},
			errors: {
				boxTitle: "发生错误",
				portalSelf: "严重错误: 获取门户配置失败",
				invalidConfig: "严重错误: 配置无效",
				invalidConfigNoWebmap: "严重错误: 配置无效(未指定 web 地图)",
				createMap: "无法创建地图",
				invalidApp: "严重错误: 无法加载应用程序",
				initMobile: "欢迎使用卷帘 web 应用程序。未配置该应用程序。移动设备不支持交互式构建器。",
				noBuilderIE8: "Internet Explorer 9 之前的版本不支持卷帘交互式构建器。",
				noLayerView: "欢迎使用卷帘 web 应用程序。<br />尚未配置该应用程序。",
				appSave: "保存 web 应用程序时出错",
				mapSave: "保存 web 地图时出错",
				notAuthorized: "您无权访问该应用程序",
				conflictingProjectionsTitle: "投影冲突",
				conflictingProjections: "卷帘不支持两个具有不同投影的 web 地图。请打开设置并使用与首个 web 地图具有相同投影的 web 地图。",
				cpButton: "关闭"
			},
			mobileView: {
				hideIntro: "隐藏简介",
				navLeft: "图例",
				navMap: "地图",
				navRight: "数据"
			},
			desktopView: {
				storymapsText: "故事地图",
				builderButton: "切换到构建器模式",
				bitlyTooltip: "获取应用程序的短链接"
			}
		},
		builder: {
			builder: {
				panelHeader: "应用程序配置",
				buttonSave: "保存",
				buttonDiscard: "取消",
				buttonSettings: "设置",
				buttonView: "视图模式",
				buttonItem: "打开 Web 应用程序项目",
				noPendingChange: "无待决的更改",
				unSavedChangeSingular: "1 个未保存的更改",
				unSavedChangePlural: "未保存的更改",
				popoverDiscard: "确定要放弃未保存的更改吗?",
				yes: "是",
				no: "否",
				popoverOpenViewExplain: "打开查看器，您将丢失所有未保存的更改",
				popoverOpenViewOk: "确定",
				popoverOpenViewCancel: "取消",
				popoverSaveWhenDone: "完成后请不要忘记保存",
				closeWithPendingChange: "确定要执行此操作吗? 您的更改将丢失。",
				gotIt: "确定",
				savingApplication: "保存应用程序",
				saveSuccess: "应用程序保存成功",
				saveError: "保存失败，请重试",
				signIn: "请使用帐户登录",
				signInTwo: "保存应用程序。"
			},
			header:{
				editMe: "编辑!",
				templateTitle: "设置模板标题",
				templateSubtitle: "设置模板子标题"
			},
			settings: {
				settingsHeader: "应用程序设置",
				modalCancel: "取消",
				modalApply: "应用"
			},
			settingsColors: {
				settingsTabColor: "专题",
				settingsColorExplain: "选择应用程序专题或定义自己的颜色。",
				settingsLabelColor: "页眉和侧面板背景颜色"
			},
			settingsHeader: {
				settingsTabLogo: "标题",
				settingsLogoExplain: "自定义页眉徽标(不超过 250 x 50px)。",
				settingsLogoEsri: "Esri 徽标",
				settingsLogoNone: "无徽标",
				settingsLogoCustom: "自定义徽标",
				settingsLogoCustomPlaceholder: "图像 URL",
				settingsLogoCustomTargetPlaceholder: "点击链接",
				settingsLogoSocialExplain: "自定义标题右上方的链接。",
				settingsLogoSocialText: "文本",
				settingsLogoSocialLink: "链接",
				settingsLogoSocialDisabled: "此功能已被管理员禁用"
			},
			settingsExtent: {
				settingsTabExtent: "范围",
				settingsExtentExplain: "通过下面的交互式地图设置初始范围。",
				settingsExtentExplainBottom: "您定义的范围将修改您的 web 地图初始范围。请注意，如果您正在执行卷帘操作，则不会使用该范围。",
				settingsExtentDateLineError: "范围不可跨越 180° 经线",
				settingsExtentDateLineError2: "计算范围时出错",
				settingsExtentDrawBtn: "确定一个新范围",
				settingsExtentModifyBtn: "编辑当前范围",
				settingsExtentApplyBtn: "应用到主地图",
				settingsExtentUseMainMap: "使用主地图范围"
			}
        },
		swipe: {
			mobileData: {
				noData: "无数据显示!",
				noDataExplain: "点击地图选择要素，然后返回到这里",
				noDataMap: "此地图无数据",
				noPopup: "未找到此要素的弹出窗口"
			},
			mobileLegend: {
				noLegend: "不显示任何图例。"
			},
			swipeSidePanel: {
				editTooltip: "设置侧面板描述",
				editMe: "编辑!",
				legendTitle: "图例"
			},
			infoWindow: {
				noFeature: "不显示任何数据",
				noFeatureExplain: "点击地图选择一个要素"
			},
			settingsLayout: {
				settingsTabLayout: "卷帘样式",
				settingsLayoutExplain: "为此卷帘工具选择样式。",
				settingsLayoutSwipe: "垂直条块",
				settingsLayoutSpyGlass: "望远镜",
				settingsLayoutSelected: "选中的布局",
				settingsLayoutSelect: "选择此布局",
				settingsSaveConfirm: "其中一些更改需要您保存和重新加载应用程序"
			},
			settingsDataModel: {
				settingsTabDataModel: "卷帘类型",
				settingsDataModelExplainSwipe: "您希望用户对哪些对象执行卷帘操作?",
				settingsDataModelExplainSwipe2: "",
				settingsDataModelExplainSpyGlass: "选择在望远镜中显示的图层或 web 地图。",
				settingsDataModelOneMap: "Web 地图中的图层",
				settingsDataModel1Explain: "选择要对其进行卷帘操作的图层",
				settingsDataModel1Warning: "如果图层被上面的图层所遮盖，则卷帘无任何效果。",
				settingsDataModel1SpyGlassExplain: "选择要在望远镜中显示的图层。",
				settingsDataModelTwoMaps: "两幅 web 地图",
				settingsDataModelLayerIds: "Web 地图图层 ID",
				settingsDataModelSelected: "已选类型",
				settingsDataModelWebmapSwipeId1: "右侧 Web 地图 ID",
				settingsDataModelWebmapSwipeId2: "左侧 Web 地图 ID",
				settingsDataModelWebmapGlassId1: "主 Web 地图 ID",
				settingsDataModelWebmapGlassId2: "望远镜 Web 地图 ID",
				settingsDataModelSelect: "选择该类型",
				settingsDataModel2Explain: "随另一 web 地图卷起。",
				settingsDataModel2SpyGlassExplain: "显示另一 web 地图。",
				settingsDataModel2HelpTitle: "如何查找 web 地图 ID？",
				settingsDataModel2HelpContent: "复制并粘贴 web 地图 URL 中\“=\”符号后面的数字"
			},
			settingsLegend: {
				settingsTabLegend: "应用程序布局",
				settingsLegendExplain: "选择应用程序布局设置。",
				settingsLegendEnable: "启用图例",
				settingsDescriptionEnable: "启用描述",
				settingsBookmarksEnable: "启用卷帘系列",
				settingsPopupDisable: "启用弹出窗口",
				settingsLocationSearchEnable: "启用定位器搜索",
				settingsGeolocatorEnable: "启用地理定位器",
				settingsLegendHelpContent: "要优化图例内容，请使用 ArcGIS.com web 地图查看器内容列表(隐藏在图例中)",
				settingsSeriesHelpContent: "卷帘系列是一种选项卡式的导航选项，它可将查看器设置为特定范围，并在侧面板中显示标题和描述文本。在首次激活时，将导入 web 地图的书签并将其用于预填充系列条形图。禁用系列选项将关闭系列条形图，但系列配置将被保留供以后使用。", 
				settingsSeriesHelpContent2: "通过卷帘系列可创建和编辑一系列具有随附标题和文本的位置。如果 web 地图具有书签，则会显示这些书签。您可以禁用卷帘系列，但配置将保留以供之后使用。",
				settingsSeriesHelpLink: "在此处查看具有卷帘系列的应用程序示例",
				preview: "UI 预览",
				settingsLocateButtonExplain: "此功能在大多数移动设备和桌面浏览器 (包括 Internet Explorer 9+) 中都受支持。",
				settingsLocateButton: "启用支持“定位”按钮的浏览器",
				settingsAddressSearch: "启用地址搜索工具"
			},
			settingsSwipePopup: {
				settingsSwipePopup: "弹出窗口",
				settingsSwipePopupExplain: "自定义弹出窗口页眉外观，帮助用户将弹出窗口与地图图层相关联。",
				settingsSwipePopupSwipe1: "左地图",
				settingsSwipePopupSwipe2: "右地图",
				settingsSwipePopupGlass1: "主地图",
				settingsSwipePopupGlass2: "望远镜地图",
				settingsSwipePopupTitle: "页眉标题",
				settingsSwipePopupColor: "页眉颜色"
			},
			initPopup: {
				initHeader: "欢迎使用 Swipe Builder",
				modalNext: "下一步",
				modalPrev: "上一步",
				modalApply: "打开应用程序"
			},
			seriesPanel: {
				title: "标题",
				descr: "描述",
				discard: "放弃书签",
				saveExtent: "设置书签范围",
				discardDisabled: "无法移除书签。可在设置中禁用卷帘系列。"
			}
		}
    })
);