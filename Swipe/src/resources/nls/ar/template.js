define(
	 ({
		viewer: {
			loading: {
				step1: "LOADING STORY",
				step2: "تحميل البيانات",
				step3: "تهيئة",
				fail: "للأسف، فشل تحميل السحب",
				loadBuilder: "التبديل إلى وضع المُنشيء",
				redirectSignIn: "إعادة التوجيه لصفحة تسجيل الدخول",
				redirectSignIn2: "(سيتم إعادة توجيهك هنا بعد تسجيل الدخول)",
				failButton: "إعادة المحاولة"
			},
			errors: {
				boxTitle: "حدث خطأ",
				portalSelf: "خطأ فادح: فشل في الحصول على تكوين المدخل",
				invalidConfig: "خطأ فادح: تكوين غير صحيح",
				invalidConfigNoWebmap: "خطأ فادح: تكوين غير صحيح (معرف خريطة الويب أو التطبيق غير محدد في  index.html)",
				invalidConfigNoAppDev: "لم يتم تحديد مُعرّف تطبيق تخطيط الويب أو خريطة الويب في معلمات عنوان URL (?appid= or ?webmap=). في وضع التطوير، يتم تجاهل مُعرف التطبيق وتكوين خريطة الويب في index.html.",
				createMap: "يتعذر إنشاء الخريطة",
				invalidApp: "خطأ فادح: يتعذر تحميل القصة",
				initMobile: "مرحبًا بك في تطبيق خريطة السحب. تعذر تكوين التطبيق. المنشئ التفاعلي غير مدعوم على أجهزة الجوال.",
				initMobile2: "مُنشئ السحب غير مدعوم في حجم العرض الحالي. إذا أمكن، قم بتغيير حجم المستعرض للوصول إلى المُنشئ أو يرجى إنشاء القصة على جهاز بشاشة أكبر.",
				initMobile3: "يُرجى تدوير الجهاز للتوجيه الأفقي لاستخدام مُنشئ السحب.",
				noBuilderIE8: "منشئ السحب التفاعلي غير مدعوم على Internet Explorer فيما قبل الإصدار 9.",
				noLayerView: "مرحبًا في تطبيق السحب على الويب. <br /> لم يتم تكوين التطبيق بعد.",
				appSave: "خطأ في حفظ قصة الويب",
				mapSave: "خطأ أثناء حفظ خريطة الويب",
				notAuthorized: "يجب أن تكون مُعتمدًا للوصول إلى هذه القصة",
				notAuthorizedBuilder: "أنت غير معتمد لاستخدام منشئ السحب والمنظار.",
				conflictingProjectionsTitle: "تعارض الإسقاطات",
				conflictingProjections: "لا يدعم السحب استخدام اثنان من خرائط الويب ذات إسقاطات مختلفة. الرجاء فتح الإعدادات واستخدام خريطة الويب التي تستخدم نفس إسقاط خريطة الويب الأولى.",
				cpButton: "إغلاق",
				unspecifiedConfigOwner: "لم يتم تكوين المالك المعتمد.",
				invalidConfigOwner: "مالك القصة غير مُعتمد."
			},
			mobileView: {
				hideIntro: "إخفاء المقدمة",
				navLeft: "مفتاح الخريطة",
				navMap: "خريطة",
				navRight: "البيانات"
			},
			desktopView: {
				storymapsText: "قصة داخل خريطة",
				builderButton: "الانتقال إلى وضع المنشئ",
				facebookTooltip: "مشاركة على الفيس بوك",
				twitterTooltip: "مشاركة على تويتر",
				bitlyTooltip: "الحصول على رابط قصير",
				tooltipAutoplayDisabled: "وهو غير متوفر في عرض التشغيل التلقائي",
				autoplayLabel: "وضع التشغيل التلقائي",
				autoplayExplain1: "يتقدّم وضع التشغيل التلقائي خلال القصة في فواصل منتظمة، وهو مثالي في عارض بيانات أو مراقبة عرض عام، ولكن انتبه، ففي مواقف أخرى، قد يجعل القصة أصعب في القراءة. ولا يتم دعم هذا المعلم في عروض صغيرة.",
				autoplayExplain2: "عندما يكون هذا الوضع نشطًا، تتوفر عناصر تحكم تشغيل/إيقاف تشغيل القصة وتعديل سرعة الانتقال."
			}
		},
		builder: {
			builder: {
				panelHeader: "STORY CONFIGURATION",
				buttonSave: "حفظ",
				buttonHelp: "تعليمات",
				buttonShare: "مشاركة",
				buttonDiscard: "إلغاء الأمر",
				buttonSettings: "الإعدادات",
				buttonView: "عرض الوضع",
				buttonItem: "فتح عنصر تطبيق الويب",
				noPendingChange: "لا يوجد تغيير معلق",
				unSavedChangeSingular: "1 تغيير غير محفوظ",
				unSavedChangePlural: "تغييرات غير محفوظة",
				popoverDiscard: "هل تريد تجاهل أية تغييرات غير محفوظة؟",
				yes: "نعم",
				no: "لا",
				popoverOpenViewExplain: "عند فتح العارض، سوف تخسر أية تغييرات غير محفوظة",
				popoverOpenViewOk: "موافق",
				popoverOpenViewCancel: "إلغاء الأمر",
				popoverSaveWhenDone: "لا تنسى الحفظ بعد الانتهاء",
				closeWithPendingChange: "هل تريد تأكيد الإجراء؟ سوف تخسر جميع التغييرات.",
				gotIt: "موافق",
				savingApplication: "حفظ القصة",
				saveSuccess: "تم حفظ القصة",
				saveError: "حدث فشل أثناء الحفظ، يرجى المحاولة مرة أخرى",
				saveError2: "فشل الحفظ نظرًا لعلامة html غير الصحيحة في اسم أو وصف",
				saveError3: "يتعذر أن يكون العنوان فارغًا",
				signIn: "يرجى تسجيل الدخول بحساب داخل",
				signInTwo: "لحفظ القصة."
			},
			header:{
				editMe: "تحرير!",
				templateTitle: "تحديد عنوان القالب",
				templateSubtitle: "تحديد العنوان الفرعي للقالب"
			},
			settings: {
				settingsHeader: "إعدادات القصة",
				modalCancel: "إلغاء الأمر",
				modalApply: "تطبيق"
			},
			settingsColors: {
				settingsTabColor: "سمة",
				settingsColorExplain: "اختر سمة التطبيق أو قم بتعريف الألوان الخاصة بك.",
				settingsLabelColor: "ألوان خلفية اللوحة الجانبية والعنوان"
			},
			settingsHeader: {
				settingsTabLogo: "رأس الصفحة",
				settingsLogoExplain: "تخصيص شعار (الحد الأقصى 250 x 50 px).",
				settingsLogoEsri: "شعار Esri",
				settingsLogoNone: "لا يوجد شعار",
				settingsLogoCustom: "تخصيص الشعار",
				settingsLogoCustomPlaceholder: "عنوان URL للصورة",
				settingsLogoCustomTargetPlaceholder: "انقر فوق الرابط",
				settingsLogoSocialExplain: "تخصيص عنوان الرابط الموجود أعلى اليمين.",
				settingsLogoSocialText: "النص",
				settingsLogoSocialLink: "رابط",
				settingsLogoSocialDisabled: "لقد تم تعطيل هذا المعلم بواسطة المدير"
			},
			settingsExtent: {
				settingsTabExtent: "المدى",
				settingsExtentExplain: "تعيين النطاق الأولي خلال الخريطة التفاعلية الموضحة أدناه.",
				settingsExtentExplainBottom: "سيقوم النطاق الذي تم تعريفه بتعديل النطاق الأولي لخريطة الويب. لاحظ أنه إذا كنت تقوم بعمل سلسلة من السحب، فلن يتم استخدام هذا النطاق.",
				settingsExtentDateLineError: "لا يمكن أن يكون المدى عبر خط الطول 180ï¿½",
				settingsExtentDateLineError2: "حدث خطأ أثناء حساب النطاق",
				settingsExtentDrawBtn: "ارسم النطاق الجديد",
				settingsExtentModifyBtn: "تحرير النطاق الحالي",
				settingsExtentApplyBtn: "التطبيق على الخريطة الرئيسية",
				settingsExtentUseMainMap: "استخدام نطاق الخريطة الأساسي"
			}
        },
		swipe: {
			mobileData: {
				noData: "لا توجد بيانات للعرض!",
				noDataExplain: "اضغط على الخريطة لتحديد المعالم والرجوع إلى هنا مرة أخرى",
				noDataMap: "لا يوجد بيانات لهذه الخريطة",
				noPopup: "لا توجد أي عناصر منبثقة لهذه المعالم"
			},
			mobileLegend: {
				noLegend: "لا يوجد أي وسائل إيضاح لعرضها"
			},
			swipeSidePanel: {
				editTooltip: "تعيين وصف اللوحة الجانبية",
				editMe: "تحرير!",
				legendTitle: "مفتاح الخريطة"
			},
			infoWindow: {
				noFeature: "لا توجد بيانات لعرضها",
				noFeatureExplain: "اضغط فوق الخريطة لتحديد المعالم"
			},
			settingsLayout: {
				settingsTabLayout: "نمط السحب",
				settingsLayoutExplain: "اختر النمط لأداة السحب.",
				settingsLayoutSwipe: "الشريط العمودي",
				settingsLayoutSpyGlass: "منظار",
				settingsLayoutSelected: "مخطط محدد",
				settingsLayoutSelect: "حدد هذا المخطط",
				settingsSaveConfirm: "بعض التغييرات تتطلب الحفظ وإعادة تحميل القصة"
			},
			settingsDataModel: {
				settingsTabDataModel: "نوع السحب",
				settingsDataModelExplainSwipe: "ما ترغب أن يقوم المستخدمين بسحبه؟",
				settingsDataModelExplainSwipe2: "",
				settingsDataModelExplainSpyGlass: "اختر الطبقة أو خريطة الويب التي ستظهر في المنظار.",
				settingsDataModelOneMap: "الطبقة في خريطة الويب",
				settingsDataModel1Explain: "تحديد الطبقة التي تود سحبها",
				settingsDataModel1Warning: "إذا كانت الطبقة مختفية من قبل الطبقات العلوية، لن يكون السحب ذو تأثير يذكر.",
				settingsDataModel1SpyGlassExplain: "حدد الطبقة لتظهر داخل المنظار.",
				settingsDataModelTwoMaps: "اثنان من خرائط الويب",
				settingsDataModelLayerIds: "معرفات طبقة خريطة الويب",
				settingsDataModelSelected: "النوع المحدد",
				settingsDataModelWebmapSwipeId1: "معرف خريطة الويب الأيمن",
				settingsDataModelWebmapSwipeId2: "معرف خريطة الويب الأيسر",
				settingsDataModelWebmapGlassId1: "معرف خريطة الويب الرئيسي",
				settingsDataModelWebmapGlassId2: "معرف خريطة ويب المنظار",
				settingsDataModelSelect: "حدد هذا النوع",
				settingsDataModel2Explain: "اسحب مع خريطة ويب أخرى",
				settingsDataModel2SpyGlassExplain: "كشف خريطة ويب أخرى.",
				settingsDataModel2HelpTitle: "كيف أقوم بالعثور على معرف خريطة الويب؟",
				settingsDataModel2HelpContent: "انسخ والصق الأرقام بعد علامة \"=\" داخل عنوان URL لخريطة الويب",
				switchMaps: "تبديل الخرائط",
				browseWebMaps: "استعرض خرائط الويب"
			},
			settingsLegend: {
				settingsTabLegend: "التخطيط الطباعي للتطبيق",
				settingsLegendExplain: "تحديد إعدادات التخطيط.",
				settingsLegendEnable: "تمكين وسيلة الإيضاح",
				settingsDescriptionEnable: "تمكين الوصف",
				settingsBookmarksEnable: "تمكين سلاسل السحب",
				settingsPopupDisable: "تمكين العنصر المنبثق",
				settingsLocationSearchEnable: "تمكين بحث محدد المواقع",
				settingsGeolocatorEnable: "تمكين محدد المواقع الجغرافي",
				settingsLegendHelpContent: "لتحسين محتوى وسيلة الإيضاح، استخدام جدول محتويات عارض خرائط ويب ArcGIS (إخفاء في وسيلة الإيضاح)",
				settingsSeriesHelpContent: "سلاسل السحب هي خيارات التنقل التي سترشد العارض خلال النطاق المحدد وعرض العنوان ونص الوصف في اللوحة الجانبية. أثناء التفعيل الأولي، سيتم استيراد العلامات المرجعية من خرائط الويب وسيتم استخدامها لإعادة تعبئة شريط السلاسل. يقوم تعطيل خيار السلاسل بإيقاف تشغيل شريط السلاسل،لكن يتم الاحتفاظ بتكوين السلاسل للاستخدام المستقبلي.",
				settingsSeriesHelpContent2: "تتيح عملية سحب السلسلة إنشاء وتحرير مجموعة مختارة من المواقع مع النص والعناوين المصاحبة. إذا كانت خريطة الويب الخاص بك لديها علامات مرجعية، فإنه سيتم عرضهم. ويمكنك تعطيل هذه السلسلة، ولكن سيتم الاحتفاظ بالتكوين للاستخدام في المستقبل.",
				settingsSeriesHelpLink: "راجع مثال على التطبيق مع سحب السلاسل هنا",
				preview: "معاينة واجهة المستخدم",
				settingsLocateButtonExplain: "يتم دعم هذه الوظيفة على معظم أجهزة الجوال ومستعرضات سطح المكتب (بما في ذلك Internet Explorer 9+(.",
				settingsLocateButton: "تمكين زر \'تحديد الموقع\' في المستعرضات المدعومة",
				settingsAddressSearch: "تمكين أداة البحث عن العنوان"
			},
			settingsSwipePopup: {
				settingsSwipePopup: "العنصر المنبثق",
				settingsSwipePopupExplain: "تخصيص مظهر العنوان المنبثق لمساعدة المستخدمين في مشاركة العناصر المنبثقة مع طبقات الخريطة.",
				settingsSwipePopupSwipe1: "الخريطة اليسرى",
				settingsSwipePopupSwipe2: "الخريطة اليمنى",
				settingsSwipePopupGlass1: "الخريطة الأساسية",
				settingsSwipePopupGlass2: "خريطة المنظار",
				settingsSwipePopupTitle: "عنوان رأس الصفحة",
				settingsSwipePopupColor: "لون رأس الصفحة"
			},
			initPopup: {
				initHeader: "مرحبًا بك في مُنشئ Swipe/Spyglass",
				modalNext: "التالي",
				modalPrev: "السابق",
				modalApply: "فتح التطبيق"
			},
			seriesPanel: {
				title: "العنوان",
				descr: "الوصف",
				discard: "تجاهل العلامة المرجعية",
				saveExtent: "تعيين نطاق العلامة المرجعية",
				discardDisabled: "لا يمكنك إزالة العلامة المرجعية. يمكن تعطيل سلسلة السحب في الإعدادات."
			},
			helpPopup: {
				title: "تعليمات",
				close: "إغلاق",
				tab1: {
					div1: "يتم تصميم قالب Swipe/Spyglass لمقارنة خريطتي ويب منفصلتين أو طبقتي خريطة ويب مفردة في تطبيق ويب جذّاب سهل الاستخدام يمكن استخدامه في أي مستعرض ويب على أي جهاز، بما في ذلك الهواتف الذكية والحواسب اللوحية.",
					div2: "فيما يتعلق بالمعلومات الإضافية المتعلقة بقالب السحب، بما في ذلك الأمثلة التي يتم إنشائها بواسطة المستخدمين، <a href='http://storymaps.arcgis.com/en/app-list/swipe/' target='_blank'> تفضل بزيارة موقع خرائط القصص على الويب</a>. يمكن اتباعنا على Twitter <a href='https://twitter.com/EsriStoryMaps' target='_blank'>@EsriStoryMaps</a>.",
					div3: "نرغب في الاستماع إليك! سواء كان لديك سؤال، وترغب في طلب ميزة جديدة، أو تعتقد أنك وجدت خلل، يرجى زيارة <a href='http://links.esri.com/storymaps/forum' target='_blank'>منتدى مستخدمي خرائط القصة</a>."
				}
			},
			share: {
				firstSaveTitle: "تم حفظ القصة",
				manageStory: "إدارة القصة",
				manageStoryA1: "تلميح: يمكنك استخدام %LINK1% لفحص القصة من الأخطاء وتغيير كيفية مشاركة مكوناتها، وتُساعد \"القصص\" على عل القصة تظهر بشكل جيد عند مشاركتها في شبكات التواصل الاجتماعي، كما يمكنك معرفة المزيد عن المعالم المفيدة الأخرى لـ \"القصص\" في %LINK2%.",
				manageStoryA1V1: "قصتي",
				manageStoryA1V2: "منشورات المدونة",
				shareTitle: "مشاركة القصة",
				sharePrivateHeader: "لم يتم مشاركة القصة. هل تريد مشاركتها؟",
				sharePrivateBtn1: "مشاركتها بشكل عام",
				sharePrivateBtn2: "مشاركتها مع المنظمة",
				sharePrivateProgress: "المشاركة قيد التقدم...",
				sharePrivateErr: "فشلت المشاركة، أعد المحاولة مرة أخرى أو",
				sharePrivateOk: "تم تحديث المشاركة، جارِ التحميل...",
				shareStatus1: "لم يتم حفظ القصة",
				shareStatus2: "تم مشاركة الخريطة مع كل المستخدمين",
				shareStatus3: "تم مشاركة القصة في المؤسسة",
				shareStatus4: "لم يتم مشاركة القصة",
				sharePreviewAsUser: "معاينة",
				shareHeader1: "القصة هي <strong>publicly accessible</strong>.",
				shareHeader2: "يمكن لأعضاء المؤسسة الوصول إلى القصة (يجب تسجيل الدخول).",
				shareLinkHeader: "مشاركة القصة",
				shareLinkOpen: "فتح",
				learnMore: "تعلم المزيد",
				shareA1: "استخدم %SHAREIMG% في <a href='%LINK1%' target='_blank'> صفحة عنصر التطبيق</a>. إذا أردت أيضًا إلغاء مشاركة طبقة الويب، استخدام <a href='%LINK2%' target='_blank'>صفحة عنصر خريطة الويب</a>.",
				shareWarning: "تم تعطيل مشاركة %WITH% وذلك لأنك ليس مالك <a href='%LINK%' target='_blank'>خريطة الويب</a>.",
				shareWarningWith1: "علانية",
				shareWarningWith2: "علانية ومع المنظمة"
			},
			directCreation: {
				header: "مرحبًا بك في مُنشئ Swipe/Spyglass",
				mapPickHeader: "لبدء الاستخدام، يرجى إدخال مُعرف خريطة ويب صحيح أو استخدام زر البحث لاستعراض خرائط الويب.",
				launchBuilder: "تشغيل المُنشئ",
				chooseWebmapLbl: "اختيار خريطة الويب...",
				explain2: "لإنشاء خريطة قصة سحب أو منظار، استخدام الزر أدناه لاختيار خريطة الويب الحالية التي تريد استخدامها. وبدلاً من ذلك، يمكنك لصق مُعرّف خريطة الويب في الحقل أدناه.",
				explain3: "عند الرغبة في استخدام اثنان من خرائط الويب في خريطة الحكاية، ستطلب خريطة الويب الثانية فيما بعد عند اختيار هذا الخيار.",
				webmapPlaceholder: "أدخل مُعرف خريطة الويب..."
			},
			saveErrorSocial: {
				title: "تحديث مشاركة في مواقع التواصل الاجتماعي",
				panel1: "تم تحسين مظهر القصةâ€™s على المواقع التواصل الاجتماعي، ولكن لا يكون عنوان عنصر تطبيق ArcGIS على الويب هو نفسه عنوان القصة.",
				panel1tooltip: "وبتعريف العنوان والملخص والصورة المصغرة، ستظهر القصر كما يلي:",
				panel2:	"ما هو العنوان الذي تريد استخدامه في مواقع التواصل الاجتماعي:",
				panel2q1: "عنوان القصة (مُوصَى به)",
				panel2q1tooltip: "بتحديد هذا الخيار، سيتم تعديل عنوان العنصر ليطابق عنوان القصة، وسيتم تزامن مزيد من التغييرات في المُنشئ.",
				panel2q2: "عنوان العنصر",
				panel3: "لتحسين مظهر القصة بشكل أكبر في مواقع التواصل الاجتماعي، استخدم ${MYSTORIES} لإضافة ملخص وصورة مصغرة.",
				panel4: "لا تحذرني مجددًا بشأن هذه القصة",
				mystories: "قصتي",
				btnSave: "حفظ"
			}
		},
		configure: {
			mapdlg:{
				items:{
					organizationLabel: "المؤسسة",
					onlineLabel: "ArcGIS Online",
					contentLabel: "المحتوى",
					favoritesLabel: "المفضلات"
				},
				title: "تحديد خريطة الويب",
				searchTitle: "بحث",
				ok: "موافق",
				cancel: "إلغاء الأمر",
				placeholder: "إدخال مصطلح البحث"
			}
		}
    })
);
