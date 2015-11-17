define(
	 ({
		viewer: {
			loading: {
				step1: "HiKAYE YÜKLENiYOR",
				step2: "VERİLER YÜKLENİYOR",
				step3: "BAŞLATILIYOR",
				fail: "Özür dileriz; Swipe yüklenemedi",
				loadBuilder: "DERLEYİCİ MODUNA GEÇİLİYOR",
				redirectSignIn: "OTURUM AÇMA SAYFASINA YÖNLENDİRİLİYOR",
				redirectSignIn2: "(oturum açtıktan sonra buraya yeniden yönlendirileceksiniz)",
				failButton: "Tekrar dene"
			},
			errors: {
				boxTitle: "Hata oluştu",
				portalSelf: "Onarılamaz hata: Portal yapılandırması alınamadı",
				invalidConfig: "Onarılamaz: Geçersiz yapılandırma",
				invalidConfigNoWebmap: "Onarılamaz hata: Geçersiz yapılandırma (hiçbir web haritası belirtilmedi)",
				createMap: "Harita oluşturulamıyor",
				invalidApp: "Onarılamaz hata: Hikaye yüklenemiyor",
				initMobile: "Swipe web uygulamasına hoş geldiniz. Uygulama yapılandırılmadı. Etkileşimli derleyici mobil cihazlarda desteklenmez.",
				initMobile2: "Kaydırma oluşturucu bu ekran boyutunda desteklenmiyor.",
				noBuilderIE8: "Swipe etkileşimli derleyicisi Internet Explorer\'ın 9. sürümünden öncesinde desteklenmez.",
				noLayerView: "Swipe web uygulamasına hoş geldiniz.<br />Uygulama henüz yapılandırılmadı.",
				appSave: "Web hikayesi kaydetme hatası",
				mapSave: "Web haritasını kaydederken hata oluştu",
				notAuthorized: "Bu hikayeye erişme yetkiniz yok",
				conflictingProjectionsTitle: "Çelişen Projeksiyonlar",
				conflictingProjections: "Sıyır, farklı projeksiyonları olan iki web haritasını desteklemez. Ayarları açın ve ilk web haritasıyla aynı projeksiyonu kullanan bir web haritası kullanın.",
				cpButton: "Kapat",
				unspecifiedConfigOwner: "Yetkili sahip yapılandırılmamış.",
				invalidConfigOwner: "Hikaye sahibi yetkilendirilmemiş."
			},
			mobileView: {
				hideIntro: "GİRİŞİ GİZLE",
				navLeft: "Gösterim",
				navMap: "Harita",
				navRight: "Veri"
			},
			desktopView: {
				storymapsText: "Öykü haritası",
				builderButton: "Derleyici moduna geç",
				facebookTooltip: "Facebook\'ta Paylaş",
				twitterTooltip: "Twitter\'da Paylaş",
				bitlyTooltip: "Kısa bağlantı edin"
			}
		},
		builder: {
			builder: {
				panelHeader: "HİKAYE YAPILANDIRMASI",
				buttonSave: "KAYDET",
				buttonHelp: "Yardım",
				buttonShare: "Paylaş",
				buttonDiscard: "İPTAL",
				buttonSettings: "Ayarlar",
				buttonView: "Modu görüntüle",
				buttonItem: "Web Uygulaması öğesini açın",
				noPendingChange: "Bekleyen değişiklik yok",
				unSavedChangeSingular: "Kaydedilmemiş 1 değişiklik var",
				unSavedChangePlural: "kaydedilmemiş değişiklikler",
				popoverDiscard: "Kaydedilmemiş değişiklerden vazgeçmek istediğinizden emin misiniz?",
				yes: "Evet",
				no: "Hayır",
				popoverOpenViewExplain: "Görüntüleyiciyi açarsanız, kaydedilmemiş değişiklikleri kaybedeceksiniz",
				popoverOpenViewOk: "Tamam",
				popoverOpenViewCancel: "İptal",
				popoverSaveWhenDone: "İşiniz bittiğinde kaydetmeyi unutmayın",
				closeWithPendingChange: "Eylemi onaylamak istediğinizden emin misiniz? Değişiklikleriniz kaybolacak.",
				gotIt: "Tamam",
				savingApplication: "Hikaye kaydediliyor",
				saveSuccess: "Hikaye başarıyla kaydedildi",
				saveError: "Kaydetme başarısız; tekrar deneyin",
				saveError2: "Addaki veya açıklamadaki geçersiz bir html etiketi nedeniyle kaydetme başarısız oldu",
				saveError3: "Başlık boş olamaz",
				signIn: "Uygulamayı kaydetmek için",
				signInTwo: "hikayeyi kaydetmek için."
			},
			header:{
				editMe: "Beni düzenle!",
				templateTitle: "Şablon başlığını ayarla",
				templateSubtitle: "Şablon altyazısını ayarla"
			},
			settings: {
				settingsHeader: "Hikaye ayarları",
				modalCancel: "İptal",
				modalApply: "Uygula"
			},
			settingsColors: {
				settingsTabColor: "Tema",
				settingsColorExplain: "Uygulama teması seçin veya kendi renklerinizi tanımlayın.",
				settingsLabelColor: "Üstbilgi ve yan panel arka plan renkleri"
			},
			settingsHeader: {
				settingsTabLogo: "Üstbilgi",
				settingsLogoExplain: "Üstbilgi logosunu özelleştirin. (Maksimum 250 x 50 px\'tir.)",
				settingsLogoEsri: "Esri logosu",
				settingsLogoNone: "Logo yok",
				settingsLogoCustom: "Özel logo",
				settingsLogoCustomPlaceholder: "Görüntü URL\'si",
				settingsLogoCustomTargetPlaceholder: "Tıklanabilir bağlantı",
				settingsLogoSocialExplain: "Üstbilgi üst sağ bağlantısını özelleştirin.",
				settingsLogoSocialText: "Metin",
				settingsLogoSocialLink: "Bağlantı",
				settingsLogoSocialDisabled: "Bu özellik Yönetici tarafından devre dışı bırakıldı"
			},
			settingsExtent: {
				settingsTabExtent: "Yayılım",
				settingsExtentExplain: "Aşağıdaki harita yoluyla ilk yayılımı ayarlayın.",
				settingsExtentExplainBottom: "Tanımladığınız yayılım web haritanızın ilk yayılımını değiştirir. Bir swipe serisi yapıyorsanız, yayılımın kullanılmayacağına dikkat edin.",
				settingsExtentDateLineError: "Yayılım 180ï¿½ boylamının meridyeni boyunca olamaz",
				settingsExtentDateLineError2: "Yayılımı hesaplanırken hata oluştu",
				settingsExtentDrawBtn: "Yeni yayılım çiz",
				settingsExtentModifyBtn: "Geçerli yayılımı düzenle",
				settingsExtentApplyBtn: "Ana haritaya uygula",
				settingsExtentUseMainMap: "Ana harita yayılımını kullan"
			}
        },
		swipe: {
			mobileData: {
				noData: "Görüntülenecek veri yok!",
				noDataExplain: "Detay seçmek ve buraya geri dönmek için haritaya dokunun",
				noDataMap: "Bu harita için veri yok",
				noPopup: "Bu özellik için açılan bir pencere bulunamadı"
			},
			mobileLegend: {
				noLegend: "Görüntülenecek gösterim yok."
			},
			swipeSidePanel: {
				editTooltip: "Yan panel açıklamasını ayarlayın",
				editMe: "Beni düzenle!",
				legendTitle: "Gösterim"
			},
			infoWindow: {
				noFeature: "Görüntülenecek veri yok",
				noFeatureExplain: "Detay seçmek için haritaya dokunun"
			},
			settingsLayout: {
				settingsTabLayout: "Swipe Tarzı",
				settingsLayoutExplain: "Swipe aracı için bir tarz seçin.",
				settingsLayoutSwipe: "Dikey çubuk",
				settingsLayoutSpyGlass: "Küçük dürbün",
				settingsLayoutSelected: "Seçili düzen",
				settingsLayoutSelect: "Bu düzeni seç",
				settingsSaveConfirm: "Değişikliklerinizden bazıları için hikayeyi kaydedip tekrar yüklemeniz gerekiyor"
			},
			settingsDataModel: {
				settingsTabDataModel: "Swipe Türü",
				settingsDataModelExplainSwipe: "Kullanıcıların swipe ile gezmesini istersiniz?",
				settingsDataModelExplainSwipe2: "",
				settingsDataModelExplainSpyGlass: "Küçük dürbünde görünecek katmanı veya web haritasını seçin.",
				settingsDataModelOneMap: "Web haritasındaki bir katman",
				settingsDataModel1Explain: "Swipe ile gezilmesini istediğiniz katmanı seçin",
				settingsDataModel1Warning: "Katman üst katmanlar tarafından gizlenirse, swipe\'ın bir etkisi olmaz.",
				settingsDataModel1SpyGlassExplain: "Küçük dürbünde görünecek katmanı seçin.",
				settingsDataModelTwoMaps: "İki web haritası",
				settingsDataModelLayerIds: "Web haritası Katman Kimlikleri",
				settingsDataModelSelected: "Seçilen tür",
				settingsDataModelWebmapSwipeId1: "Sağ Web haritası kimliği",
				settingsDataModelWebmapSwipeId2: "Sol Web haritası kimliği",
				settingsDataModelWebmapGlassId1: "Ana Web haritası kimliği",
				settingsDataModelWebmapGlassId2: "Küçük Dürbün Web haritası kimliği",
				settingsDataModelSelect: "Bu türü seç",
				settingsDataModel2Explain: "Başka bir web haritasıyla swipe kullan.",
				settingsDataModel2SpyGlassExplain: "Başka bir web haritasını ortaya çıkarın.",
				settingsDataModel2HelpTitle: "Bir web haritasının kimliğini nasıl bulabilirim?",
				settingsDataModel2HelpContent: "Web haritasının URL\'sindeki \'=\' işaretinden sonraki rakamları kopyalayıp yapıştırın",
				switchMaps: "Haritaları değiştir",
				browseWebMaps: "Web haritalarına gözat"
			},
			settingsLegend: {
				settingsTabLegend: "Uygulama Düzeni",
				settingsLegendExplain: "Yerleşim ayarlarını seçin.",
				settingsLegendEnable: "Gösterimi Etkinleştir",
				settingsDescriptionEnable: "Açıklamayı Etkinleştir",
				settingsBookmarksEnable: "Swipe serisini etkinleştir",
				settingsPopupDisable: "Açılan pencereyi etkinleştir",
				settingsLocationSearchEnable: "Bulucu aramasını etkinleştir",
				settingsGeolocatorEnable: "Coğrafi bulucuyu etkinleştir",
				settingsLegendHelpContent: "Gösterim içeriğini netleştirmek için, ArcGIS.com web haritası görüntüleyicisi içindekiler tablosunu kullanın (Göstergede Gizle)",
				settingsSeriesHelpContent: "Swipe serisi, izleyiciye belirli bir yayılım için kılavuzluk eden ve yan panelde bir başlık ve açıklama metni gösteren sekmeli bir gezinme seçeneğidir.  İlk etkinleştirme sırasında web haritalarının yer işaretleri içe aktarılır ve seri çubuğunu önceden doldurmak için kullanılır.  Seri seçeneğini devre dışı bırakmak seri çubuğunu kapatır, ancak seri yapılandırması gelecekte kullanılmak üzere saklanır.",
				settingsSeriesHelpContent2: "Swipe serisi, beraberinde başlıklar ve metin ile seçili bir konum kümesi oluşturmanıza ve bunu düzenlemenize izin verir.  Web haritanızın yer işaretleri varsa, bunlar görüntülenir.  Seriyi devre dışı bırakabilirsiniz, ancak yapılandırma gelecekte kullanılmak üzere saklanır.",
				settingsSeriesHelpLink: "Bir swipe serisi olan bir uygulama örneğini burada görebilirsiniz",
				preview: "Kullanıcı arayüzü önizlemesi",
				settingsLocateButtonExplain: "Bu işlevsellik çoğu mobil cihazda ve (Internet Explorer 9+ dahil) masaüstü tarayıcısında desteklenir.",
				settingsLocateButton: "Desteklenen tarayıcılarda \'Konum Bul\' düğmesini etkileştir",
				settingsAddressSearch: "Adres arama aracını etkinleştir"
			},
			settingsSwipePopup: {
				settingsSwipePopup: "Açılan Pencere",
				settingsSwipePopupExplain: "Açılan pencere üstbilgisinin görünümünü, kullanıcının açılan pencereleri katmanlar ile ilişkilendirmesine yardımcı olacak şekilde özelleştirin.",
				settingsSwipePopupSwipe1: "Sol Harita",
				settingsSwipePopupSwipe2: "Sağ Harita",
				settingsSwipePopupGlass1: "Ana Harita",
				settingsSwipePopupGlass2: "Küçük Dürbün Haritası",
				settingsSwipePopupTitle: "Üstbilgi Başlığı",
				settingsSwipePopupColor: "Üstbilgi Rengi"
			},
			initPopup: {
				initHeader: "Swipe/Küçük Dürbün Derleyici\'ye Hoş Geldiniz",
				modalNext: "Sonraki",
				modalPrev: "Önceki",
				modalApply: "Uygulamayı aç"
			},
			seriesPanel: {
				title: "Başlık",
				descr: "Açıklama",
				discard: "Yer İşaretinden Vazgeç",
				saveExtent: "Yer İşareti Yayılımını Ayarla",
				discardDisabled: "Bu yer işaretini kaldıramazsınız. Swipe serisi Ayarlar\'da devre dışı bırakılabilir."
			},
			helpPopup: {
				title: "Yardım",
				close: "Kapat",
				tab1: {
					div1: "Swipe/Küçük Dürbün şablonu iki ayrı web haritasını veya tek bir web haritasının iki katmanını akıllı telefonlar ve tabletler dahil herhangi bir cihazda herhangi bir web tarayıcısında kullanılabilecek çekici, kolay kullanılan bir web uygulamasında karşılaştırmak için tasarlanmıştır.",
					div2: "Swipe/Küçük Dürbün şablonu hakkında, kullanıcıların oluşturduğu örnekler dahil ek bilgi için, <a href='http://storymaps.arcgis.com/en/app-list/swipe/' target='_blank'> Öykü Haritaları web sitesini ziyaret edin</a>. Bizi <a href='https://twitter.com/EsriStoryMaps' target='_blank'>@EsriStoryMaps</a> adresinden Twitter\'da izleyebilirsiniz.",
					div3: "Bize yazmanızı istiyoruz! İster bir soru sormak istiyor, ister yeni bir özellik istiyor, ister bir hata bulduğunuzu düşünüyor olun, <a href='http://links.esri.com/storymaps/forum' target='_blank'>Öykü Haritaları Kullanıcı Forumu</a>\'nu ziyaret edin."
				}
			},
			share: {
				firstSaveTitle: "Hikaye başarıyla kaydedildi",
				firstSaveHeader: "Hikayeniz artık ArcGIS Online\'a kaydedildi. Aşağıdaki sık sorulan sorulara verilen yanıtları okuyun.",
				firstSaveA1: "ArcGIS Online\'ı iyi bilmiyorsanız veya hazırlama arayüzüne erişmek için bir kısayol istiyorsanız, şu bağlantıyı kaydedebilirsiniz: %LINK1%",
				firstSaveA1bis: "Hikaye ayrıca <a href=\'%LINK2%\' target=\'_blank\'>ArcGIS Online içerik klasörünüzde de bulunabilir</a>.",
				firstSaveQ2: "Hikayem paylaşılıyor mu?",
				firstSaveA2: "Hikayeniz şu anda paylaşılmıyor. Paylaşmak için PAYLAŞ düğmesini kullanın.",
				shareTitle: "Hikayenizi paylaşın",
				sharePrivateHeader: "Hikayeniz paylaşılmıyor, paylaşmak ister misiniz?",
				sharePrivateBtn1: "Herkesle paylaş",
				sharePrivateBtn2: "Kuruluşumla Paylaş",
				sharePrivateProgress: "Paylaşma sürüyor...",
				sharePrivateErr: "Paylaşma başarısız, tekrar deneyin veya",
				sharePrivateOk: "Paylaşma başarıyla güncellendi, yükleniyor...",
				shareStatus1: "Hikaye kaydedilmedi",
				shareStatus2: "Hikaye herkes ile paylaşılıyor",
				shareStatus3: "Hikaye kuruluş içinde paylaşılıyor",
				shareStatus4: "Hikaye paylaşılmıyor",
				sharePreviewAsUser: "Önizleme",
				shareHeader1: "Hikayeniz <strong>genel olarak erişilebilir durumda</strong>.",
				shareHeader2: "Hikayenize kuruluşunuzun üyeleri erişebilir (Oturum açılması gerekir).",
				shareLinkHeader: "Hikayeyi izleyici kitlenizle paylaşın",
				shareLinkOpen: "AÇ",
				learnMore: "Daha fazla bilgi",
				shareQ1Opt1: "Hikayeyi nasıl özel tutabilirim?",
				shareQ1Opt2: "Hikayeyi nasıl özel tutabilir veya herkesle paylaşabilirim?",
				shareA1: "<a href='%LINK1%' target='_blank'>Uygulama öğesi sayfasında</a> %SHAREIMG% kullanın. Ayrıca, web haritasını paylaşmayı kaldırmak istiyorsanız, <a href='%LINK2%' target='_blank'>web haritası öğe sayfasını</a> kullanın.",
				shareA1bis: "Detay Servisi\'ni paylaşmayı iptal etmek istiyorsanız, <a href='%LINK1%' target='_blank'>Detay Servisi öğesi sayfasını</a> kullanın.",
				shareQ2: "Hikayeyi daha sonra nasıl düzenlerim?",
				shareQ2bis: "Hazırlama arayüzüne nasıl geri dönerim?",
				shareA2div1: "Aşağıdaki bağlantıyı kaydedin ve yeniden kullanın %LINK1% veya şunu kullanın: <a href=\'%LINK2%\' target=\'_blank\'>hikaye öğesi sayfası</a>.",
				shareA2div2: "Hikayenin sahibi olarak ArcGIS.com\'da oturum açtığınızda, hikayede etkileşimli derleyiciyi açmak için bir düğme bulunur:",
				shareQ3: "Veriler nerede saklanıyor?",
				shareA3: "Hikaye yapılandırması bu web uygulama öğesinde saklanır</a>.",
				shareWarning: "%WITH% ile paylaşma devre dışı bırakıldı çünkü <a href='%LINK%' target='_blank'>web haritasının</a> sahibi değilsiniz.",
 				shareWarningWith1: "genel ile",
 				shareWarningWith2: "genel ve Kuruluş ile"
			},
			directCreation: {
				header: "Swipe/Küçük Dürbün Derleyici\'ye Hoş Geldiniz",
				mapPickHeader: "Başlamak için geçerli bir web haritası kimliği girin veya web haritalarına göz atmak için arama düğmesini kullanın.",
				launchBuilder: "Derleyiciyi Başlat",
				chooseWebmapLbl: "Web haritası seç...",
				explain2: "Swipe veya Küçük Dürbün öykü haritası oluşturmak için, kullanmak istediğiniz mevcut ArcGIS Online web haritasını seçmek üzere aşağıdaki düğmeyi kullanın. Bunu yapmanın başka bir yolu da web haritasının kimliğini aşağıdaki alana yapıştırmaktır.",
				explain3: "Öykü haritanızda iki web haritası kullanmak istiyorsanız, bu seçeneği belirlediğinizde daha sonra sizden ikinci web haritası istenir.",
				webmapPlaceholder: "Web haritası kimliği girin..."
			}
		},
		configure: {
			mapdlg:{
				items:{
					organizationLabel: "Kuruluşum",
					onlineLabel: "ArcGIS Online",
					contentLabel: "İçeriğim",
					favoritesLabel: "Favorilerim"
				},
				title: "Web Haritası Seç",
				searchTitle: "Ara",
				ok: "Tamam",
				cancel: "İptal",
				placeholder: "Arama terimini gir"
			}
		}
    })
);
