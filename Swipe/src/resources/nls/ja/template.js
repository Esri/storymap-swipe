define({
  "viewer": {
    "loading": {
      "step1": "ストーリーの読み込み",
      "step2": "データを読み込んでいます",
      "step3": "初期化",
      "fail": "スワイプの読み込みに失敗しました",
      "loadBuilder": "ビルダ モードへの切り替え",
      "redirectSignIn": "サイン イン ページへのリダイレクト",
      "redirectSignIn2": "(サイン イン後にここにリダイレクトされます)",
      "failButton": "再試行"
    },
    "errors": {
      "boxTitle": "エラーが発生しました",
      "portalSelf": "致命的なエラー: ポータルの構成情報を取得できませんでした",
      "invalidConfig": "致命的なエラー: 無効な構成",
      "invalidConfigNoWebmap": "致命的なエラー: 無効な構成 (index.html で Web マップまたはアプリケーション ID が指定されていません)",
      "invalidConfigNoAppDev": "Web マッピング アプリケーション ID または webmap が URL パラメーター (?appid= or ?webmap=) で指定されていません。開発モードでは、index.html の appid および webmap の構成は無視されます。",
      "createMap": "マップを作成できません",
      "invalidApp": "致命的なエラー: ストーリーを読み込めません",
      "initMobile": "スワイプ Web アプリケーションへようこそ。アプリケーションは構成されていません。 モバイル デバイスでは、対話型ビルダはサポートされていません。",
      "initMobile2": "この表示サイズでは、スワイプ ビルダーはサポートされません。可能な場合、ブラウザーのサイズを変更してビルダーにアクセスするか、さらに大きい画面を持つデバイス上でストーリーを構築してください。",
      "initMobile3": "使用しているデバイスを横方向に回転してスワイプ ビルダーを使用してください。",
      "noBuilderIE8": "バージョン 9 よりも前の Internet Explorer では、スワイプ対話型ビルダはサポートされていません。",
      "noViewerIE2": "このストーリーをサポートされていない古いブラウザーで表示しようとしています。動作しない機能やその他の予期しない問題がある可能性があります。Internet Explorer 11 にアップグレードするか、Chrome などの別のブラウザーを使用することをお勧めします。",
      "noViewerIE3": "2017 年後半には、このストーリーはこのブラウザーで読み込めなくなります。その時点で、サポートされているブラウザーを使用してこのストーリーを表示する必要があります。",
      "attention": "注意",
      "noLayerView": "スワイプ Web アプリケーションへようこそ。<br />アプリケーションは、まだ構成されていません。",
      "appSave": "Web ストーリーの保存中にエラーが発生しました",
      "mapSave": "Web マップの保存中にエラーが発生しました",
      "notAuthorized": "このストーリーにアクセスする権限が与えられていません。",
      "notAuthorizedBuilder": "スワイプ ビルダーおよびスパイグラス ビルダーを使用する権限がありません。",
      "conflictingProjectionsTitle": "投影法の競合",
      "conflictingProjections": "スワイプでは、投影法の異なる 2 つの Web マップを使用できません。設定を開き、最初の Web マップと投影法が同じである Web マップを使用してください。",
      "cpButton": "閉じる",
      "unspecifiedConfigOwner": "権限のある所有者が構成されていません。",
      "invalidConfigOwner": "ストーリーの所有者に権限がありません。"
    },
    "mobileView": {
      "hideIntro": "概要を非表示",
      "navLeft": "凡例",
      "navMap": "マップ",
      "navRight": "データ"
    },
    "desktopView": {
      "storymapsText": "ストーリー マップ",
      "builderButton": "ビルダ モードに切り替え",
      "facebookTooltip": "Facebook で共有",
      "twitterTooltip": "Twitter で共有",
      "bitlyTooltip": "ショート リンクを取得",
      "tooltipAutoplayDisabled": "これは、自動再生モードでは使用できません",
      "autoplayLabel": "自動再生モード",
      "autoplayExplain1": "自動再生モードでは、ストーリーが一定の間隔で進みます。このモードは、売店や公共の表示モニターでは理想的ですが、その他の状況では、ストーリーを読むのを難しくする場合があることに注意してください。この機能は、小さいディスプレイではサポートされません。",
      "autoplayExplain2": "このモードがアクティブの場合、ストーリーの再生/一時停止および再生速度の調整を行うコントロールが表示されます。"
    },
    "bannerNotification": {
      "learnMore": "詳細",
      "close": "閉じる",
      "dontShowAgain": "今後このメッセージを表示しない"
    },
    "httpsTransitionMessage": {
      "bannerMsg": "Web セキュリティとストーリー マップに関する重要なメッセージ",
      "s1h1": "Esri はストーリー マップのセキュリティ向上に努めています",
      "s1p1": "Web および Web コミュニティ上のライブのストーリー マップは、常にセキュリティを向上するよう機能しています。HTTPS はインターネット経由で送信されるコンテンツを安全に接続するため、現在、Web コンテンツにアクセスする際に使用すべき手段となっています。最新のブラウザーでは、HTTPS ではなく HTTP が使用されると、警告メッセージが表示されます。これが標準となったことから、ArcGIS Online の 2018 年 6 月の更新版以降は、HTTPS を使用する必要があります。",
      "s1p2": "事実上、ストーリー マップとそのすべてのコンテンツ (画像、レイヤー、埋め込みアプリ、Web サイトなど) にアクセスするには、HTTP ではなく HTTPS で始まるリンクを使用する必要があります。これにより、ほとんどの Web ブラウザーでストーリーの安全性が示されるため、ユーザーの安全性が最大限に確保されます。",
      "s2h1": "必要な操作",
      "s2p1": "Esri では、ストーリー マップの作成者とユーザーの移行操作を容易にするよう努めています。ストーリー マップ ビルダーおよびマイ ストーリー内のツールを使用すると、ストーリー内の安全でないコンテンツ (HTTP) を見つけやすくなり、その場合の対処方法も提示してくれます。2018 年 6 月までに、ストーリー内に安全でないコンテンツがないかを確認し、ある場合は HTTPS に更新してください。",
      "action1": "閉じる",
      "action2": "ストーリーを今すぐ確認する",
      "action3": "詳細"
    },
    "licenseChange2018": {
      "noAccess": "パブリックでないストーリー マップを開くためのライセンスがアカウント (%USER_NAME%) に付与されていません。  組織の管理者にストーリー マップまたはアドオン Essential Apps ライセンスを含むユーザー タイプを割り当てるよう依頼してください。"
    }
  },
  "builder": {
    "builder": {
      "panelHeader": "ストーリーの構成",
      "buttonSave": "保存",
      "buttonHelp": "ヘルプ",
      "buttonShare": "共有",
      "buttonDiscard": "キャンセル",
      "buttonSettings": "設定",
      "buttonView": "ビュー モード",
      "buttonItem": "Web アプリケーション アイテムを開く",
      "noPendingChange": "保留中の変更はありません",
      "unSavedChangeSingular": "1 つの保存されていない変更",
      "unSavedChangePlural": "複数の保存されていない変更",
      "popoverDiscard": "保存されていない変更を破棄しますか？",
      "yes": "はい",
      "no": "いいえ",
      "popoverOpenViewExplain": "ビューアを開くと、保存されていない変更は失われます",
      "popoverOpenViewOk": "OK",
      "popoverOpenViewCancel": "キャンセル",
      "popoverSaveWhenDone": "完了したら必ず保存してください",
      "closeWithPendingChange": "アクションを確認しますか？変更内容は失われます。",
      "gotIt": "OK",
      "savingApplication": "ストーリーを保存しています",
      "saveSuccess": "ストーリーが保存されました",
      "saveError": "保存に失敗しました。もう一度やり直してください。",
      "saveError2": "名前または説明に無効な html タグがあるため保存に失敗しました",
      "saveError3": "タイトルは必ず入力してください",
      "signIn": "アカウントでサイン インして",
      "signInTwo": "ストーリーを保存してください。"
    },
    "header": {
      "editMe": "編集",
      "templateTitle": "テンプレートのタイトルの設定",
      "templateSubtitle": "テンプレートのサブタイトルの設定"
    },
    "settings": {
      "settingsHeader": "ストーリーの設定",
      "modalCancel": "キャンセル",
      "modalApply": "適用"
    },
    "settingsColors": {
      "settingsTabColor": "主題",
      "settingsColorExplain": "アプリケーションの主題を選択したり、独自の色を定義したりします。",
      "settingsLabelColor": "ヘッダーとサイド パネルの背景色"
    },
    "settingsHeader": {
      "settingsTabLogo": "ヘッダー",
      "settingsLogoExplain": "ヘッダー ロゴをカスタマイズします (最大 250 x 50 ピクセル)。",
      "settingsLogoEsri": "Esri ロゴ",
      "settingsLogoNone": "ロゴなし",
      "settingsLogoCustom": "カスタム ロゴ",
      "settingsLogoCustomPlaceholder": "画像の URL",
      "settingsLogoCustomTargetPlaceholder": "クリックスルー リンク",
      "settingsLogoSocialExplain": "ヘッダー右上にあるリンクのカスタマイズ",
      "settingsLogoSocialText": "テキスト",
      "settingsLogoSocialLink": "リンク",
      "settingsLogoSocialDisabled": "この機能は、管理者によって無効にされています"
    },
    "settingsExtent": {
      "settingsTabExtent": "範囲",
      "settingsExtentExplain": "以下の対話型マップを使用して初期範囲を設定します。",
      "settingsExtentExplainBottom": "定義した範囲によって、Web マップの初期範囲が変更されます。スワイプ操作を実行する場合、その範囲は使用されないことに注意してください。",
      "settingsExtentDateLineError": "この範囲は、経度 180°の子午線を超えることはできません。",
      "settingsExtentDateLineError2": "範囲を計算中にエラーが発生しました",
      "settingsExtentDrawBtn": "新しい範囲の描画",
      "settingsExtentModifyBtn": "現在の範囲の編集",
      "settingsExtentApplyBtn": "メイン マップに適用",
      "settingsExtentUseMainMap": "メイン マップ表示範囲の使用"
    },
    "storyTellerUserType": {
      "notCreatorError": "お使いのアカウント (%USER_NAME%) には、従来のストーリー マップ ビルダーを使用するライセンスがありません。 組織の管理者に問い合わせて、Creator ユーザー タイプを割り当ててもらってください。"
    }
  },
  "swipe": {
    "mobileData": {
      "noData": "表示するデータがありません",
      "noDataExplain": "マップをタップしてフィーチャを選択してから、ここに戻ってください",
      "noDataMap": "このマップ用のデータがありません",
      "noPopup": "このフィーチャにはポップアップがありません"
    },
    "mobileLegend": {
      "noLegend": "表示する凡例がありません。"
    },
    "swipeSidePanel": {
      "editTooltip": "サイド パネルの説明を設定",
      "editMe": "編集",
      "legendTitle": "凡例"
    },
    "infoWindow": {
      "noFeature": "表示するデータがありません",
      "noFeatureExplain": "マップをタップしてフィーチャを選択します"
    },
    "settingsLayout": {
      "settingsTabLayout": "スワイプのスタイル",
      "settingsLayoutExplain": "スワイプ ツールのスタイルを選択します。",
      "settingsLayoutSwipe": "垂直バー",
      "settingsLayoutSpyGlass": "スパイグラス (のぞき窓)",
      "settingsLayoutSelected": "選択したレイアウト",
      "settingsLayoutSelect": "このレイアウトを選択",
      "settingsSaveConfirm": "一部の変更は、保存してストーリーを再読み込みする必要があります"
    },
    "settingsDataModel": {
      "settingsTabDataModel": "スワイプのタイプ",
      "settingsDataModelExplainSwipe": "ユーザに許可するスワイプ操作の対象",
      "settingsDataModelExplainSwipe2": "",
      "settingsDataModelExplainSpyGlass": "スパイグラスに表示するレイヤまたは Web マップを選択します。",
      "settingsDataModelOneMap": "Web マップのレイヤ",
      "settingsDataModel1Explain": "スワイプ操作の対象となるレイヤの選択",
      "settingsDataModel1Warning": "レイヤが上に重なっているレイヤによって隠れている場合、スワイプは機能しません。",
      "settingsDataModel1SpyGlassExplain": "スパイグラス内に表示するレイヤを選択します。",
      "settingsDataModelTwoMaps": "2 つの Web マップ",
      "settingsDataModelLayerIds": "Web マップ レイヤ ID",
      "settingsDataModelSelected": "選択されたタイプ",
      "settingsDataModelWebmapSwipeId1": "右の Web マップ ID",
      "settingsDataModelWebmapSwipeId2": "左の Web マップ ID",
      "settingsDataModelWebmapGlassId1": "メイン Web マップ ID",
      "settingsDataModelWebmapGlassId2": "スパイグラス Web マップ ID",
      "settingsDataModelSelect": "このタイプを選択",
      "settingsDataModel2Explain": "別の Web マップでスワイプします。",
      "settingsDataModel2SpyGlassExplain": "別の Web マップを公開します。",
      "settingsDataModel2HelpTitle": "Web マップ ID の検索方法",
      "settingsDataModel2HelpContent": "Web マップの URL 内の「=」記号から後ろの数字をコピーして貼り付けます。",
      "switchMaps": "マップの切り替え",
      "browseWebMaps": "Web マップの参照"
    },
    "settingsLegend": {
      "settingsTabLegend": "アプリケーションのレイアウト",
      "settingsLegendExplain": "レイアウト設定を選択します。",
      "settingsLegendEnable": "凡例を有効化",
      "settingsDescriptionEnable": "説明を有効化",
      "settingsBookmarksEnable": "一連のスワイプを有効化",
      "settingsPopupDisable": "ポップアップの有効化",
      "settingsLocationSearchEnable": "ロケータ検索の有効化",
      "settingsGeolocatorEnable": "ジオロケータの有効化",
      "settingsLegendHelpContent": "凡例のコンテンツを更新するには、ArcGIS Web マップ ビューアーの [コンテンツ] ウィンドウを使用します (凡例では非表示)",
      "settingsSeriesHelpContent": "スワイプは、タブ付きのナビゲーション オプションで、ビューアを特定の範囲に移動したり、サイド パネルにタイトルや説明文を表示したりできます。最初に起動したときに、Web マップのブックマークがインポートされ使用されて、一連のバーに値が事前入力されます。一連のオプションを無効にすると、一連のバーは無効になりますが、一連の構成は保持され、後で使用することができます。",
      "settingsSeriesHelpContent2": "スワイプ操作を使用すると、選択した場所とそのタイトルおよびテキストを作成および編集できます。Web マップにブックマークがある場合は表示されます。スワイプ操作は無効化できますが、構成は今後の使用のために維持されます。",
      "settingsSeriesHelpLink": "スワイプ操作を使用したアプリケーションの例を表示",
      "preview": "UI のプレビュー",
      "settingsLocateButtonExplain": "ほとんどのブラウザーでサポートされています。HTTPS を介してストーリー マップにアクセスした場合にのみ表示されます。ストーリーが埋め込まれている場合は表示されません。",
      "settingsLocateButton": "サポートされているブラウザで [検索] ボタンを有効化",
      "settingsAddressSearch": "アドレス検索ツールの有効化"
    },
    "settingsSwipePopup": {
      "settingsSwipePopup": "ポップアップ",
      "settingsSwipePopupExplain": "簡単にポップアップをマップ レイヤに関連付けできるよう、ポップアップ ヘッダーの外観をカスタマイズします。",
      "settingsSwipePopupSwipe1": "左マップ",
      "settingsSwipePopupSwipe2": "右マップ",
      "settingsSwipePopupGlass1": "メイン マップ",
      "settingsSwipePopupGlass2": "スパイグラス マップ",
      "settingsSwipePopupTitle": "ヘッダーのタイトル",
      "settingsSwipePopupColor": "ヘッダーの色"
    },
    "initPopup": {
      "initHeader": "スワイプ/スパイグラス ビルダへようこそ",
      "modalNext": "次へ",
      "modalPrev": "前へ",
      "modalApply": "アプリケーションを開く"
    },
    "seriesPanel": {
      "title": "タイトル",
      "descr": "説明",
      "discard": "ブックマークの破棄",
      "saveExtent": "ブックマークの範囲の設定",
      "discardDisabled": "そのブックマークを削除することができません。[設定] で、スワイプが無効化されている可能性があります。"
    },
    "helpPopup": {
      "title": "ヘルプ",
      "close": "閉じる",
      "tab1": {
        "div1": "スワイプ/スパイグラス テンプレートは、スマートフォンやタブレットなど、あらゆるデバイスのあらゆる Web ブラウザで使用できる使いやすく魅力的なアプリケーションで、2 つの別々の Web マップまたは 1 つの Web マップの 2 つのレイヤを比較できるよう設計されています。",
        "div2": "ユーザーが作成した例を含むスワイプ/スパイグラス テンプレートの詳細については、<a href='https://storymaps.arcgis.com/en/app-list/swipe-spyglass/' target='_blank'>ストーリー マップ Web サイト</a>をご覧ください。 Twitter で <a href='https://twitter.com/EsriStoryMaps' target='_blank'>@EsriStoryMaps</a> をフォローすることもできます。",
        "div3": "みなさまのご参加をお待ちしています。質問がある場合、新しい機能を依頼する場合、あるいはバグを見つけた場合は、<a href='http://links.esri.com/storymaps/forum' target='_blank'>ストーリー マップ ユーザ フォーラム</a>をご覧ください。"
      }
    },
    "share": {
      "firstSaveTitle": "ストーリーが保存されました",
      "manageStory": "ストーリーの管理",
      "manageStoryA1": "ヒント: %LINK1% を使用してストーリーのエラーをチェックし、そのコンポーネントの共有方法を変更できます。マイ ストーリーは、ストーリーをソーシャル ネットワークで共有したときの見栄えを良くするのにも役立ちます。マイ ストーリーのその他の役立つ機能については、%LINK2% をご参照ください。",
      "manageStoryA1V1": "マイ ストーリー",
      "manageStoryA1V2": "ブログ記事",
      "shareTitle": "ストーリーの共有",
      "sharePrivateHeader": "ストーリーが共有されていません。共有しますか？",
      "sharePrivateBtn1": "パブリックに共有",
      "sharePrivateBtn2": "組織内で共有",
      "sharePrivateProgress": "共有の実行中...",
      "sharePrivateErr": "共有に失敗しました。もう一度行ってください。",
      "sharePrivateOk": "共有を更新しました。読み込んでいます...",
      "shareStatus1": "ストーリーが保存されていません",
      "shareStatus2": "ストーリーがパブリックに共有されています",
      "shareStatus3": "ストーリーが組織サイト内で共有されています",
      "shareStatus4": "ストーリーが共有されていません",
      "sharePreviewAsUser": "プレビュー",
      "shareHeader1": "ストーリーは<strong>パブリックにアクセスできます</strong>。",
      "shareHeader2": "ストーリーには組織のメンバーがアクセスできます (ログインが必要)。",
      "shareLinkHeader": "ストーリーの共有",
      "shareLinkOpen": "オープン",
      "learnMore": "詳細",
      "shareA1": "<a href='%LINK1%' target='_blank'>アプリケーション アイテム ページ</a>で %SHAREIMG% を使用します。Web マップの共有も解除する場合は、<a href='%LINK2%' target='_blank'>Web マップ アイテム ページ</a>を使用します。",
      "shareWarning": "<a href='%LINK%' target='_blank'>Web マップ</a>の所有者でないため、%WITH% の共有は無効化されています。",
      "shareWarningWith1": "パブリック",
      "shareWarningWith2": "パブリックおよび組織"
    },
    "directCreation": {
      "header": "スワイプ/スパイグラス ビルダへようこそ",
      "mapPickHeader": "開始するには、有効な Web マップ ID を入力するか、または [検索] ボタンを使用して Web マップを参照してください。",
      "launchBuilder": "ビルダの開始",
      "chooseWebmapLbl": "Web マップの選択...",
      "explain2": "スワイプまたはスパイグラス ストーリー マップを作成するには、下のボタンを使用して、使用する既存の Web マップを選択します。あるいは、Web マップの ID を下のフィールドに貼り付けることもできます。",
      "explain3": "ストーリー マップに Web マップを 2 つ使用する場合、そのオプションを選択するときに、2 番目のマップの入力を求められます。",
      "webmapPlaceholder": "Web マップ ID の入力..."
    },
    "saveErrorSocial": {
      "title": "ソーシャル メディアでの共有の更新",
      "panel1": "ソーシャル メディアでのストーリーの外観が改善されていますが、ArcGIS Web アプリケーション アイテムのタイトルがストーリーのタイトルと同じではありません。",
      "panel1tooltip": "タイトル、サマリー、およびサムネイル画像を定義すると、ストーリーは次のように表示されます。",
      "panel2": "ソーシャル メディアで使用するタイトル:",
      "panel2q1": "ストーリーのタイトル (推奨)",
      "panel2q1tooltip": "このオプションを選択すると、アイテムのタイトルは、ストーリーのタイトルと一致するように変更され、ビルダーでの追加の変更が同期するようになります。",
      "panel2q2": "アイテムのタイトル",
      "panel3": "ソーシャル メディアでのストーリーの外観をさらに改善するには、${MYSTORIES} を使用してサマリーとサムネイル画像を追加します。",
      "panel4": "今後、ストーリーについて警告しない",
      "mystories": "マイ ストーリー",
      "btnSave": "保存"
    }
  },
  "configure": {
    "mapdlg": {
      "items": {
        "organizationLabel": "組織",
        "onlineLabel": "ArcGIS Online",
        "contentLabel": "マイ コンテンツ",
        "favoritesLabel": "お気に入り"
      },
      "title": "Web マップの選択",
      "searchTitle": "検索",
      "ok": "OK",
      "cancel": "キャンセル",
      "placeholder": "検索語句の入力"
    }
  },
  "httpsTransitionNotification": {
    "s1h1": "Esri はストーリー マップのセキュリティ向上に努めています",
    "s1p1": "ストーリー マップは Web 上に存在しており、Web コミュニティが、より良いセキュリティを確立して実装しようと、常に努力しています。 インターネットを経由して送信されるコンテンツにセキュリティで保護された接続を提供する HTTPS は、Web コンテンツにアクセスすることが期待される方法として現れました。 最新のブラウザーは現在、HTTPS の代わりに HTTP が使用された場合、警告メッセージを表示します。 これが標準となったことから、ストーリー マップを作成および共有する場合には HTTPS リンクを使用すること、Web コンテンツを埋め込む場合またはストーリー マップ内の画像にリンクする場合には HTTPS URL のみを使用することが強く推奨されます。",
    "s1p2": "事実上、ストーリー マップおよびそのすべてのコンテンツ (画像、レイヤー、埋め込まれたアプリおよび Web サイトを含む) には、HTTP ではなく HTTPS で始まるリンクを使用してアクセスする必要があるということです。 これによって、ストーリーが安全であることをほとんどの Web ブラウザーが示すようになるため、ユーザーに最高の体験を提供します。",
    "s2h1": "必要な操作",
    "s2p1": "Esri は、ストーリー マップの作成者およびユーザーの HTTPS への移行を簡単にするように努めています。 ストーリー内の安全でないコンテンツ (HTTP) を検出するのに役立ち、それに対処する方法に関する推奨を提供するツールが、ストーリー マップ ビルダーおよびマイ ストーリーで使用できるようになりました。 安全でないコンテンツがあるかどうかストーリーをチェックし、できるだけ速やかに HTTPS に更新してください。",
    "action1": "閉じる",
    "action2": "ストーリーを今すぐ確認する",
    "action3": "詳細"
  },
  "embedBar": {
    "share": "共有",
    "fullScreen": "全画面表示",
    "enlarge": "拡大",
    "newTab": "新しいタブで開く",
    "tagline": "ストーリー マップ",
    "exitFullScreen": "全画面表示を終了"
  },
  "june2018SurveyMessage": {
    "bannerMsg": "ユーザーの皆様にお願いがあります。 これは今後のストーリー マップを形成するのに役立つものです。",
    "s1h1": "皆様のご意見を共有することで、今後のストーリー マップが形成されます。",
    "s1p1": "皆様のご意見が最も重要かつ唯一のフィードバック ソースとなり、ユーザーの状況を詳細に知ることがストーリー マップの改善につながります。 この 3 分ほどの調査にご参加いただけると幸いです。",
    "s2p1": "Esri ストーリー マップを今後ともよろしくお願いいたします。",
    "action1": "閉じる",
    "action2": "調査を実行"
  }
});