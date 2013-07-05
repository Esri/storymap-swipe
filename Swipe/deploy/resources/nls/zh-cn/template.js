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
				invalidConfig: "严重错误: 配置无效",
				invalidConfigNoWebmap: "严重错误: 配置无效(未指定 web 地图)",
				createMap: "无法创建地图",
				invalidApp: "严重错误: 无法加载应用程序",
				initMobile: "欢迎使用卷帘 web 应用程序。未配置该应用程序。移动设备不支持交互式构建器。",
				noBuilderIE8: "Internet Explorer 9 之前的版本不支持卷帘交互式构建器。",
				noLayerView: "欢迎使用卷帘 web 应用程序。<br />尚未配置该应用程序。",
				appSave: "保存 web 应用程序时出错",
				mapSave: "保存 web 地图时出错",
				notAuthorized: "未经授权，无法配置该应用程序",
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
				builderButton: "切换到构建器模式"
			}
		},
		builder: {
			builder: {
				panelHeader: "应用程序配置",
				buttonSave: "保存",
				buttonDiscard: "取消",
				buttonSettings: "设置",
				buttonView: "视图模式",
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
				settingsLogoSocialLink: "链接"
			},
			settingsExtent: {
				settingsTabExtent: "范围",
				settingsExtentExplain: "通过下面的交互式地图设置初始范围。",
				settingsExtentExplainBottom: "您定义的范围将修改您的 web 地图初始范围。",
				settingsExtentDrawBtn: "确定一个新范围",
				settingsExtentModifyBtn: "编辑当前范围",
				settingsExtentApplyBtn: "应用到主地图"
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
				settingsTabDataModel: "卷帘图层",
				settingsDataModelExplainSwipe: "选择随卷帘显示和消失的图层或 web 地图。",
				settingsDataModelExplainSwipe2: "",
				settingsDataModelExplainSpyGlass: "选择在望远镜中显示的图层或 web 地图。",
				settingsDataModelOneMap: "一幅 web 地图，单个图层",
				settingsDataModel1Explain: "选择由卷帘工具控制的图层。",
				settingsDataModel1Warning: "只能使用动态服务、切片服务和影像服务。当图层被上层图层隐藏时，卷帘不起任何作用。",
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
				settingsDataModel2HelpTitle: "如何查找 web 地图 ID",
				settingsDataModel2HelpContent: "复制并粘贴 web 地图 URL 中 '=' 符号后面的数字"
			},
			settingsLegend: {
				settingsTabLegend: "应用程序布局",
				settingsLegendExplain: "选择应用程序布局设置。",
				settingsLegendEnable: "启用图例",
				settingsDescriptionEnable: "启用描述",
				settingsBookmarksEnable: "启用卷帘系列",
				settingsLegendHelpTitle: "如何优化图例内容",
				settingsLegendHelpContent: "使用 ArcGIS.com web 地图查看器内容列表 (在图例中隐藏)",
				preview: "UI 预览"
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
				modalApply: "打开应用程序"
			}
		}
    })
);