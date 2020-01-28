define({
  "viewer": {
    "loading": {
      "step1": "HiKAYE YÜKLENiYOR",
      "step2": "VERİLER YÜKLENİYOR",
      "step3": "BAŞLATILIYOR",
      "fail": "Özür dileriz; Swipe yüklenemedi",
      "loadBuilder": "DERLEYİCİ MODUNA GEÇİLİYOR",
      "redirectSignIn": "OTURUM AÇMA SAYFASINA YÖNLENDİRİLİYOR",
      "redirectSignIn2": "(oturum açtıktan sonra buraya yeniden yönlendirileceksiniz)",
      "failButton": "Tekrar dene"
    },
    "errors": {
      "boxTitle": "Hata oluştu",
      "portalSelf": "Onarılamaz hata: Portal yapılandırması alınamadı",
      "invalidConfig": "Onarılamaz: Geçersiz yapılandırma",
      "invalidConfigNoWebmap": "Onarılamaz hata: Geçersiz yapılandırma (web harita veya uygulama tanımlayıcısı index.html dosyasında belirtilmemiş)",
      "invalidConfigNoAppDev": "Web Haritalama Uygulaması belirteci veya web haritası URL parametrelerinde (?appid= veya ?webmap=) belirtilmemiş. Geliştirme modunda index.html dosyasındaki appid ve web haritası yapılandırması yoksayılır.",
      "createMap": "Harita oluşturulamıyor",
      "invalidApp": "Onarılamaz hata: Hikaye yüklenemiyor",
      "initMobile": "Swipe web uygulamasına hoş geldiniz. Uygulama yapılandırılmadı. Etkileşimli derleyici mobil cihazlarda desteklenmez.",
      "initMobile2": "Kaydırma oluşturucu, bu ekran boyutunda desteklenmez. Mümkünse, oluşturucu erişimi için tarayıcınızı yeniden boyutlandırın veya hikayenizi daha büyük ekranı olan bir cihazda oluşturun.",
      "initMobile3": "Cihazınızı yatay konuma döndürerek Kaydırma oluşturucuyu kullanın.",
      "noBuilderIE8": "Swipe etkileşimli derleyicisi Internet Explorer'ın 9. sürümünden öncesinde desteklenmez.",
      "noViewerIE2": "Bu hikayeyi daha eski ve desteklenmeyen bir tarayıcı kullanarak görüntülemeye çalışıyorsunuz. Çalışmayan özellikler olabilir veya başka beklenmedik sorunlarla karşılaşılabilir. Internet Explorer 11 sürümüne yükseltme yapmanız veya Chrome gibi başka bir tarayıcı kullanmanız önerilir.",
      "noViewerIE3": "2017’nin sonuna doğru bu hikaye artık bu tarayıcıda yüklenemeyecek. Hikayeyi o zaman görüntülemek için desteklenen bir tarayıcı kullanmanız gerekecek.",
      "attention": "Dikkat!",
      "noLayerView": "Swipe web uygulamasına hoş geldiniz.<br />Uygulama henüz yapılandırılmadı.",
      "appSave": "Web hikayesi kaydetme hatası",
      "mapSave": "Web haritasını kaydederken hata oluştu",
      "notAuthorized": "Bu hikayeye erişme yetkiniz yok",
      "notAuthorizedBuilder": "Kaydırma ve Dürbün oluşturucuyu kullanma yetkiniz yok.",
      "conflictingProjectionsTitle": "Çelişen Projeksiyonlar",
      "conflictingProjections": "Sıyır, farklı projeksiyonları olan iki web haritasını desteklemez. Ayarları açın ve ilk web haritasıyla aynı projeksiyonu kullanan bir web haritası kullanın.",
      "cpButton": "Kapat",
      "unspecifiedConfigOwner": "Yetkili sahip yapılandırılmamış.",
      "invalidConfigOwner": "Hikaye sahibi yetkilendirilmemiş."
    },
    "mobileView": {
      "hideIntro": "GİRİŞİ GİZLE",
      "navLeft": "Gösterim",
      "navMap": "Harita",
      "navRight": "Veri"
    },
    "desktopView": {
      "storymapsText": "Bir Story Map",
      "builderButton": "Derleyici moduna geç",
      "facebookTooltip": "Facebook'ta Paylaş",
      "twitterTooltip": "Twitter'da Paylaş",
      "bitlyTooltip": "Kısa bağlantı edin",
      "tooltipAutoplayDisabled": "Bu özellik otomatik oynatma modunda kullanılamaz",
      "autoplayLabel": "Otomatik oynatma modu",
      "autoplayExplain1": "Otomatik oynatma modu düzenli aralıklarla hikayenizde ilerler. Bu özellik, bir kiosk ya da genel ekran için idealdir, ancak bunun bazı durumlarda hikayenin okunmasını güçleştirebileceğini unutmayın. Bu özellik küçük ekranlarda desteklenmez.",
      "autoplayExplain2": "Bu etkin durumdayken hikayeyi oynatacak/duraklatacak ve gezinme hızını ayarlayacak kontroller vardır."
    },
    "bannerNotification": {
      "learnMore": "Daha Fazla Bilgi",
      "close": "Kapat",
      "dontShowAgain": "Bu iletiyi tekrar gösterme"
    },
    "httpsTransitionMessage": {
      "bannerMsg": "Web Güvenliği ve Story Maps hakkında Önemli İleti",
      "s1h1": "Esri, Story Maps'in güvenliğini geliştiriyor",
      "s1p1": "Story Maps'iniz web'de yayınlanır ve web topluluğu her zaman daha iyi güvenlik sağlamak ve uygulamak için çalışmaktadır. İnternet üzerinden iletilen içerik için güvenli bir bağlantı sağlayan HTTPS, web içeriğine erişmenin birincil yolu olarak kullanılmaktadır. Çoğu modern tarayıcı artık, HTTPS yerine HTTP kullanıldığında uyarı mesajları göstermektedir. Bu yeni geliştirilen standart nedeniyle Haziran 2018 ArcGIS Online güncellemesinden itibaren Story Maps'te HTTPS kullanılması gerekecektir.",
      "s1p2": "Pratik olarak bu, bir Story Map demektir ve tüm içeriğine (görüntüler, katmanlar, gömülü uygulamalar ve web siteleri dahil) HTTP yerine HTTPS ile başlayan bağlantılar kullanılarak erişim sağlanmalıdır. Bu, okuyucularınız için en iyi deneyimi sağlar; çünkü çoğu web tarayıcısında bu, hikayelerinizin güvenli olduğu anlamına gelir.",
      "s2h1": "Ne yapmam gerekiyor?",
      "s2p1": "Esri, Story Map yazarları ve okuyucuları için bu geçişi kolaylaştırmaya çalışmaktadır. Artık Story Map oluşturucuları ve Hikayelerim'de, hikayelerinizdeki güvensiz içeriği (HTTP) bulmanıza yardımcı olacak ve bunları nasıl ele alacağınıza dair tavsiyelerde bulunacak araçlar mevcuttur. Lütfen hikayenizi güvenli olmayan içeriklere karşı kontrol edin ve Haziran 2018'den önce HTTPS'ye güncelleyin.",
      "action1": "Kapat",
      "action2": "Hikayelerimi şimdi kontrol et",
      "action3": "Daha fazla bilgi"
    },
    "licenseChange2018": {
      "noAccess": "Hesabınız (%USER_NAME%) herkese açık olmayan bir Hikaye Haritasını açmak için lisanslandırılmamış. Lütfen kuruluş yöneticinizden Hikaye Haritaları veya eklenti Temel Uygulamalar lisansı içeren bir kullanıcı türü atamasını isteyin."
    }
  },
  "builder": {
    "builder": {
      "panelHeader": "HİKAYE YAPILANDIRMASI",
      "buttonSave": "KAYDET",
      "buttonHelp": "Yardım",
      "buttonShare": "Paylaş",
      "buttonDiscard": "İPTAL",
      "buttonSettings": "Ayarlar",
      "buttonView": "Modu görüntüle",
      "buttonItem": "Web Uygulaması öğesini açın",
      "noPendingChange": "Bekleyen değişiklik yok",
      "unSavedChangeSingular": "Kaydedilmemiş 1 değişiklik var",
      "unSavedChangePlural": "kaydedilmemiş değişiklikler",
      "popoverDiscard": "Kaydedilmemiş değişiklerden vazgeçmek istediğinizden emin misiniz?",
      "yes": "Evet",
      "no": "Hayır",
      "popoverOpenViewExplain": "Görüntüleyiciyi açarsanız, kaydedilmemiş değişiklikleri kaybedeceksiniz",
      "popoverOpenViewOk": "Tamam",
      "popoverOpenViewCancel": "İptal",
      "popoverSaveWhenDone": "İşiniz bittiğinde kaydetmeyi unutmayın",
      "closeWithPendingChange": "Eylemi onaylamak istediğinizden emin misiniz? Değişiklikleriniz kaybolacak.",
      "gotIt": "Tamam",
      "savingApplication": "Hikaye kaydediliyor",
      "saveSuccess": "Hikaye kaydedildi",
      "saveError": "Kaydetme başarısız; tekrar deneyin",
      "saveError2": "Addaki veya açıklamadaki geçersiz bir html etiketi nedeniyle kaydetme başarısız oldu",
      "saveError3": "Başlık boş olamaz",
      "signIn": "Uygulamayı kaydetmek için",
      "signInTwo": "hikayeyi kaydetmek için."
    },
    "header": {
      "editMe": "Beni düzenle!",
      "templateTitle": "Şablon başlığını ayarla",
      "templateSubtitle": "Şablon altyazısını ayarla"
    },
    "settings": {
      "settingsHeader": "Hikaye ayarları",
      "modalCancel": "İptal",
      "modalApply": "Uygula"
    },
    "settingsColors": {
      "settingsTabColor": "Tema",
      "settingsColorExplain": "Uygulama teması seçin veya kendi renklerinizi tanımlayın.",
      "settingsLabelColor": "Üstbilgi ve yan panel arka plan renkleri"
    },
    "settingsHeader": {
      "settingsTabLogo": "Üstbilgi",
      "settingsLogoExplain": "Üstbilgi logosunu özelleştirin. (Maksimum 250 x 50 px'tir.)",
      "settingsLogoEsri": "Esri logosu",
      "settingsLogoNone": "Logo yok",
      "settingsLogoCustom": "Özel logo",
      "settingsLogoCustomPlaceholder": "Görüntü URL'si",
      "settingsLogoCustomTargetPlaceholder": "Tıklanabilir bağlantı",
      "settingsLogoSocialExplain": "Üstbilgi üst sağ bağlantısını özelleştirin.",
      "settingsLogoSocialText": "Metin",
      "settingsLogoSocialLink": "Bağlantı",
      "settingsLogoSocialDisabled": "Bu özellik Yönetici tarafından devre dışı bırakıldı"
    },
    "settingsExtent": {
      "settingsTabExtent": "Yayılım",
      "settingsExtentExplain": "Aşağıdaki harita yoluyla ilk yayılımı ayarlayın.",
      "settingsExtentExplainBottom": "Tanımladığınız yayılım web haritanızın ilk yayılımını değiştirir. Bir swipe serisi yapıyorsanız, yayılımın kullanılmayacağına dikkat edin.",
      "settingsExtentDateLineError": "Yayılım 180ï¿½ boylamının meridyeni boyunca olamaz",
      "settingsExtentDateLineError2": "Yayılımı hesaplanırken hata oluştu",
      "settingsExtentDrawBtn": "Yeni yayılım çiz",
      "settingsExtentModifyBtn": "Geçerli yayılımı düzenle",
      "settingsExtentApplyBtn": "Ana haritaya uygula",
      "settingsExtentUseMainMap": "Ana harita yayılımını kullan"
    },
    "storyTellerUserType": {
      "notCreatorError": "Hesabınızın (%USER_NAME%) klasik story map oluşturucularını kullanma yetkisi yok. Kuruluşunuzun yöneticisinden size bir Creator kullanıcı türü atamasını isteyin."
    }
  },
  "swipe": {
    "mobileData": {
      "noData": "Görüntülenecek veri yok!",
      "noDataExplain": "Detay seçmek ve buraya geri dönmek için haritaya dokunun",
      "noDataMap": "Bu harita için veri yok",
      "noPopup": "Bu özellik için açılan bir pencere bulunamadı"
    },
    "mobileLegend": {
      "noLegend": "Görüntülenecek gösterim yok."
    },
    "swipeSidePanel": {
      "editTooltip": "Yan panel açıklamasını ayarlayın",
      "editMe": "Beni düzenle!",
      "legendTitle": "Gösterim"
    },
    "infoWindow": {
      "noFeature": "Görüntülenecek veri yok",
      "noFeatureExplain": "Detay seçmek için haritaya dokunun"
    },
    "settingsLayout": {
      "settingsTabLayout": "Swipe Tarzı",
      "settingsLayoutExplain": "Swipe aracı için bir tarz seçin.",
      "settingsLayoutSwipe": "Dikey çubuk",
      "settingsLayoutSpyGlass": "Küçük dürbün",
      "settingsLayoutSelected": "Seçili düzen",
      "settingsLayoutSelect": "Bu düzeni seç",
      "settingsSaveConfirm": "Değişikliklerinizden bazıları için hikayeyi kaydedip tekrar yüklemeniz gerekiyor"
    },
    "settingsDataModel": {
      "settingsTabDataModel": "Swipe Türü",
      "settingsDataModelExplainSwipe": "Kullanıcıların swipe ile gezmesini istersiniz?",
      "settingsDataModelExplainSwipe2": "",
      "settingsDataModelExplainSpyGlass": "Küçük dürbünde görünecek katmanı veya web haritasını seçin.",
      "settingsDataModelOneMap": "Web haritasındaki bir katman",
      "settingsDataModel1Explain": "Swipe ile gezilmesini istediğiniz katmanı seçin",
      "settingsDataModel1Warning": "Katman üst katmanlar tarafından gizlenirse, swipe'ın bir etkisi olmaz.",
      "settingsDataModel1SpyGlassExplain": "Küçük dürbünde görünecek katmanı seçin.",
      "settingsDataModelTwoMaps": "İki web haritası",
      "settingsDataModelLayerIds": "Web haritası Katman Kimlikleri",
      "settingsDataModelSelected": "Seçilen tür",
      "settingsDataModelWebmapSwipeId1": "Sağ Web haritası kimliği",
      "settingsDataModelWebmapSwipeId2": "Sol Web haritası kimliği",
      "settingsDataModelWebmapGlassId1": "Ana Web haritası kimliği",
      "settingsDataModelWebmapGlassId2": "Küçük Dürbün Web haritası kimliği",
      "settingsDataModelSelect": "Bu türü seç",
      "settingsDataModel2Explain": "Başka bir web haritasıyla swipe kullan.",
      "settingsDataModel2SpyGlassExplain": "Başka bir web haritasını ortaya çıkarın.",
      "settingsDataModel2HelpTitle": "Bir web haritasının kimliğini nasıl bulabilirim?",
      "settingsDataModel2HelpContent": "Web haritasının URL'sindeki '=' işaretinden sonraki rakamları kopyalayıp yapıştırın",
      "switchMaps": "Haritaları değiştir",
      "browseWebMaps": "Web haritalarına gözat"
    },
    "settingsLegend": {
      "settingsTabLegend": "Uygulama Düzeni",
      "settingsLegendExplain": "Yerleşim ayarlarını seçin.",
      "settingsLegendEnable": "Gösterimi Etkinleştir",
      "settingsDescriptionEnable": "Açıklamayı Etkinleştir",
      "settingsBookmarksEnable": "Swipe serisini etkinleştir",
      "settingsPopupDisable": "Açılan pencereyi etkinleştir",
      "settingsLocationSearchEnable": "Bulucu aramasını etkinleştir",
      "settingsGeolocatorEnable": "Coğrafi bulucuyu etkinleştir",
      "settingsLegendHelpContent": "Gösterim içeriğini netleştirmek için ArcGIS web haritası görüntüleyicisi içindekiler tablosunu kullanın (Göstergede Gizle)",
      "settingsSeriesHelpContent": "Swipe serisi, izleyiciye belirli bir yayılım için kılavuzluk eden ve yan panelde bir başlık ve açıklama metni gösteren sekmeli bir gezinme seçeneğidir.  İlk etkinleştirme sırasında web haritalarının yer işaretleri içe aktarılır ve seri çubuğunu önceden doldurmak için kullanılır.  Seri seçeneğini devre dışı bırakmak seri çubuğunu kapatır, ancak seri yapılandırması gelecekte kullanılmak üzere saklanır.",
      "settingsSeriesHelpContent2": "Swipe serisi, beraberinde başlıklar ve metin ile seçili bir konum kümesi oluşturmanıza ve bunu düzenlemenize izin verir.  Web haritanızın yer işaretleri varsa, bunlar görüntülenir.  Seriyi devre dışı bırakabilirsiniz, ancak yapılandırma gelecekte kullanılmak üzere saklanır.",
      "settingsSeriesHelpLink": "Bir swipe serisi olan bir uygulama örneğini burada görebilirsiniz",
      "preview": "Kullanıcı arayüzü önizlemesi",
      "settingsLocateButtonExplain": "Çoğu tarayıcıda desteklenir. Yalnızca hikaye haritasına HTTPS üzerinden erişim sağlandığında görünür. Hikaye gömülü ise görünmez.",
      "settingsLocateButton": "Desteklenen tarayıcılarda 'Konum Bul' düğmesini etkileştir",
      "settingsAddressSearch": "Adres arama aracını etkinleştir"
    },
    "settingsSwipePopup": {
      "settingsSwipePopup": "Açılan Pencere",
      "settingsSwipePopupExplain": "Açılan pencere üstbilgisinin görünümünü, kullanıcının açılan pencereleri katmanlar ile ilişkilendirmesine yardımcı olacak şekilde özelleştirin.",
      "settingsSwipePopupSwipe1": "Sol Harita",
      "settingsSwipePopupSwipe2": "Sağ Harita",
      "settingsSwipePopupGlass1": "Ana Harita",
      "settingsSwipePopupGlass2": "Küçük Dürbün Haritası",
      "settingsSwipePopupTitle": "Üstbilgi Başlığı",
      "settingsSwipePopupColor": "Üstbilgi Rengi"
    },
    "initPopup": {
      "initHeader": "Swipe/Küçük Dürbün Derleyici'ye Hoş Geldiniz",
      "modalNext": "Sonraki",
      "modalPrev": "Önceki",
      "modalApply": "Uygulamayı aç"
    },
    "seriesPanel": {
      "title": "Başlık",
      "descr": "Açıklama",
      "discard": "Yer İşaretinden Vazgeç",
      "saveExtent": "Yer İşareti Yayılımını Ayarla",
      "discardDisabled": "Bu yer işaretini kaldıramazsınız. Swipe serisi Ayarlar'da devre dışı bırakılabilir."
    },
    "helpPopup": {
      "title": "Yardım",
      "close": "Kapat",
      "tab1": {
        "div1": "Swipe/Küçük Dürbün şablonu iki ayrı web haritasını veya tek bir web haritasının iki katmanını akıllı telefonlar ve tabletler dahil herhangi bir cihazda herhangi bir web tarayıcısında kullanılabilecek çekici, kolay kullanılan bir web uygulamasında karşılaştırmak için tasarlanmıştır.",
        "div2": "Kullanıcı örneklerini de içeren Kaydırma/Dürbün şablonu hakkında ek bilgi için, <a href='https://storymaps.arcgis.com/en/app-list/swipe-spyglass/' target='_blank'>Story Maps web sitesini ziyaret edin</a>. Bizi <a href='https://twitter.com/EsriStoryMaps' target='_blank'>@EsriStoryMaps</a> adresinden Twitter'da da takip edebilirsiniz.",
        "div3": "Bize yazmanızı istiyoruz! İster bir soru sormak istiyor, ister yeni bir özellik istiyor, ister bir hata bulduğunuzu düşünüyor olun, <a href='http://links.esri.com/storymaps/forum' target='_blank'>Öykü Haritaları Kullanıcı Forumu</a>'nu ziyaret edin."
      }
    },
    "share": {
      "firstSaveTitle": "Hikaye kaydedildi",
      "manageStory": "Hikayenizi yönetin",
      "manageStoryA1": "İpucu: Hikayenizdeki hataları denetlemek için %LINK1% öğesini kullanabilir ve bileşenlerinin paylaşılma durumunu değiştirebilirsiniz. Hikayelerim de sosyal ağlarda paylaşılan hikayenizi daha iyi görüntülemenize yardım edebilir. Hikayelerim özelliğinin diğer yararlı işlevleri hakkında şuradan daha fazla bilgi edinebilirsiniz: %LINK2%.",
      "manageStoryA1V1": "Hikayelerim",
      "manageStoryA1V2": "blog gönderileri",
      "shareTitle": "Hikayenizi paylaşın",
      "sharePrivateHeader": "Hikayeniz paylaşılmıyor, paylaşmak ister misiniz?",
      "sharePrivateBtn1": "Herkesle paylaş",
      "sharePrivateBtn2": "Kuruluşumla Paylaş",
      "sharePrivateProgress": "Paylaşma sürüyor...",
      "sharePrivateErr": "Paylaşma başarısız, tekrar deneyin veya",
      "sharePrivateOk": "Paylaşma güncellendi, yükleniyor...",
      "shareStatus1": "Hikaye kaydedilmedi",
      "shareStatus2": "Hikaye herkes ile paylaşılıyor",
      "shareStatus3": "Hikaye kuruluş içinde paylaşılıyor",
      "shareStatus4": "Hikaye paylaşılmıyor",
      "sharePreviewAsUser": "Önizleme",
      "shareHeader1": "Hikayeniz <strong>genel olarak erişilebilir durumda</strong>.",
      "shareHeader2": "Hikayenize kuruluşunuzun üyeleri erişebilir (Oturum açılması gerekir).",
      "shareLinkHeader": "Hikayenizi paylaşın",
      "shareLinkOpen": "AÇ",
      "learnMore": "Daha fazla bilgi",
      "shareA1": "<a href='%LINK1%' target='_blank'>Uygulama öğesi sayfasında</a> %SHAREIMG% kullanın. Ayrıca, web haritasını paylaşmayı kaldırmak istiyorsanız, <a href='%LINK2%' target='_blank'>web haritası öğe sayfasını</a> kullanın.",
      "shareWarning": "%WITH% ile paylaşma devre dışı bırakıldı çünkü <a href='%LINK%' target='_blank'>web haritasının</a> sahibi değilsiniz.",
      "shareWarningWith1": "genel ile",
      "shareWarningWith2": "genel ve Kuruluş ile"
    },
    "directCreation": {
      "header": "Swipe/Küçük Dürbün Derleyici'ye Hoş Geldiniz",
      "mapPickHeader": "Başlamak için geçerli bir web haritası kimliği girin veya web haritalarına göz atmak için arama düğmesini kullanın.",
      "launchBuilder": "Derleyiciyi Başlat",
      "chooseWebmapLbl": "Web haritası seç...",
      "explain2": "Kaydırma veya Dürbün öykü haritası oluşturmak için, kullanmak istediğiniz mevcut web haritasını seçmek üzere aşağıdaki düğmeyi kullanın. Bunu yapmanın başka bir yolu da web haritasının kimliğini aşağıdaki alana yapıştırmaktır.",
      "explain3": "Öykü haritanızda iki web haritası kullanmak istiyorsanız, bu seçeneği belirlediğinizde daha sonra sizden ikinci web haritası istenir.",
      "webmapPlaceholder": "Web haritası kimliği girin..."
    },
    "saveErrorSocial": {
      "title": "Sosyal medya paylaşma güncellemesi",
      "panel1": "Hikayenizin sosyal medyadaki görünümü iyileştirildi, ancak ArcGIS web uygulaması öğenizin başlığı hikaye başlığınızla aynı değil.",
      "panel1tooltip": "Bir başlık, özet ve küçük resim tanımlandıktan sonra hikayeniz şöyle görüntülenir:",
      "panel2": "Sosyal medyada hangi başlığı kullanmak istersiniz?",
      "panel2q1": "Hikaye başlığı (önerilen)",
      "panel2q1tooltip": "Bu seçeneği tercih ettiğinizde, öğenizin başlığı hikaye başlığınızla eşleşecek biçimde değiştirilir ve oluşturucudaki ilave değişiklikler senkronize edilir.",
      "panel2q2": "Öğe başlığı",
      "panel3": "Hikayenizin sosyal medyada görüntülenme biçimini daha da iyileştirmek için ${MYSTORIES} kullanarak bir özet ve küçük resim ekleyin.",
      "panel4": "Bu hikaye için beni bir daha uyarma",
      "mystories": "Hikayelerim",
      "btnSave": "Kaydet"
    }
  },
  "configure": {
    "mapdlg": {
      "items": {
        "organizationLabel": "Kuruluşum",
        "onlineLabel": "ArcGIS Online",
        "contentLabel": "İçeriğim",
        "favoritesLabel": "Favorilerim"
      },
      "title": "Web Haritası Seç",
      "searchTitle": "Ara",
      "ok": "Tamam",
      "cancel": "İptal",
      "placeholder": "Arama terimini gir"
    }
  },
  "httpsTransitionNotification": {
    "s1h1": "Esri, Story Maps'in güvenliğini geliştiriyor",
    "s1p1": "Hikaye Haritanız web’de yayınlanır ve web topluluğu her zaman daha iyi güvenlik sağlamak ve uygulamak için çalışmaktadır. İnternet üzerinden iletilen içerik için güvenli bir bağlantı sağlayan HTTPS, web içeriğine erişmenin birincil yolu olarak kullanılmaktadır. Çoğu modern tarayıcı artık, HTTPS yerine HTTP kullanıldığında uyarı mesajları göstermektedir. Bu yeni standart nedeniyle, Hikaye Haritaları oluştururken ve paylaşırken HTTPS bağlantıları kullanmanızı ve Story Map’e web içeriği yerleştirirken veya görüntü bağlantısı yaparken yalnızca HTTPS URL’leri kullanmanızı öneririz.",
    "s1p2": "Pratik olarak, bu bir Hikaye Haritası anlamına gelir ve tüm içeriği (görüntüler, katmanlar, gömülü uygulamalar ve web siteleri dahil) HTTP yerine HTTPS ile başlayan bağlantılar kullanılarak erişilmelidir. Bu, okuyucularınız için en iyi deneyimi sağlar; çünkü çoğu web tarayıcısı hikayelerinizin güvenli olduğunu gösterecektir.",
    "s2h1": "Ne yapmam gerekiyor?",
    "s2p1": "Esri, Story Map sahipleri ve okuyucuları için bu geçişi kolaylaştırmaya çalışmaktadır. Artık Story Map oluşturucuları ve Hikayelerim’de, hikayelerinizdeki güvensiz içeriği (HTTP) bulmanıza yardımcı olacak ve bunları nasıl ele alacağınıza dair tavsiyelerde bulunacak araçlar mevcuttur. Lütfen hikayenizi güvenli olmayan içeriklere karşı kontrol edin ve bir an önce HTTPS’ye güncelleyin.",
    "action1": "Kapat",
    "action2": "Hikayelerimi şimdi kontrol et",
    "action3": "Daha fazla bilgi"
  },
  "embedBar": {
    "share": "Paylaş",
    "fullScreen": "Tam ekran",
    "enlarge": "Genişlet",
    "newTab": "Yeni sekmede aç",
    "tagline": "Bir Hikaye Haritası",
    "exitFullScreen": "Tam ekrandan çık"
  },
  "june2018SurveyMessage": {
    "bannerMsg": "Bir şey sorabilir miyiz? Story Maps’in geleceğini şekillendirmemize yardımcı olacak.",
    "s1h1": "Düşüncelerinizi paylaşın ve geleceği şekillendirin",
    "s1p1": "Verdiğiniz bilgiler, en önemli geri bildirim kaynağımız ve sizinle ilgili daha çok şey öğrenmek Story Maps’i geliştirmemize yardımcı olacak. Üç dakikanızı alacak bu ankete katılırsanız memnun oluruz.",
    "s2p1": "Her zaman olduğu gibi Esri Story Maps’i kullandığınız için teşekkür ederiz!",
    "action1": "Kapat",
    "action2": "Ankete katıl"
  }
});