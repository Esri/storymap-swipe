define(
	({
		viewer: {
			loading: {
				step1: "응용프로그램을 로드하는 중",
				step2: "데이터를 로드하는 중",
				step3: "초기화하는 중",
				fail: "죄송합니다. 스와이프를 로드하지 못했습니다.",
				loadBuilder: "빌더 모드로 전환하는 중",
				redirectSignIn: "로그인 페이지로 이동하는 중",
				redirectSignIn2: "(로그인 후 이 페이지로 다시 돌아옵니다.)",
				failButton: "재시도"
			},
			errors: {
				boxTitle: "오류가 발생했습니다.",
				portalSelf: "오류: 포털 구성을 가져오지 못했습니다.",
				invalidConfig: "오류: 잘못된 구성",
				invalidConfigNoWebmap: "오류: 잘못된 구성(웹 맵을 지정하지 않음)",
				createMap: "맵을 생성할 수 없음",
				invalidApp: "오류: 응용프로그램을 로드할 수 없습니다.",
				initMobile: "스와이프 웹 응용프로그램을 시작합니다. 응용프로그램이 구성되지 않았습니다. 대화형 빌더는 모바일 장치에서 지원되지 않습니다.",
				noBuilderIE8: "Internet Explorer 9 이전 버전에서는 스와이프 대화형 빌더가 지원되지 않습니다.",
				noLayerView: "스와이프 웹 응용프로그램을 시작합니다.<br />응용프로그램이 아직 구성되지 않았습니다.",
				appSave: "웹 응용프로그램을 저장하는 동안 오류가 발생했습니다.",
				mapSave: "웹 맵을 저장하는 동안 오류가 발생했습니다.",
				notAuthorized: "이 응용프로그램에 액세스할 권한이 없습니다.",
				conflictingProjectionsTitle: "투영 충돌",
				conflictingProjections: "사용 중인 두 웹 맵의 투영이 서로 다른 경우에는 스와이프가 지원되지 않습니다. 설정을 열어 첫 번째 웹 맵과 같은 투영을 사용하는 웹 맵을 사용하세요.",
				cpButton: "닫기"
			},
			mobileView: {
				hideIntro: "소개 메시지 숨기기",
				navLeft: "범례",
				navMap: "맵",
				navRight: "데이터"
			},
			desktopView: {
				storymapsText: "스토리 맵",
				builderButton: "빌더 모드로 전환",
				bitlyTooltip: "응용프로그램의 짧은 링크를 가져옵니다."
			}
		},
		builder: {
			builder: {
				panelHeader: "응용프로그램 구성",
				buttonSave: "저장",
				buttonHelp: "도움말",
				buttonShare: "공유",
				buttonDiscard: "취소",
				buttonSettings: "설정",
				buttonView: "보기 모드",
				buttonItem: "웹 응용프로그램 항목 열기",
				noPendingChange: "보류 중인 변경 사항 없음",
				unSavedChangeSingular: "저장되지 않은 변경 사항 1개",
				unSavedChangePlural: "저장되지 않은 변경 사항",
				popoverDiscard: "저장되지 않은 변경 사항을 취소하시겠습니까?",
				yes: "예",
				no: "아니요",
				popoverOpenViewExplain: "뷰어를 열면 저장되지 않은 변경 사항이 모두 손실됩니다.",
				popoverOpenViewOk: "확인",
				popoverOpenViewCancel: "취소",
				popoverSaveWhenDone: "작업을 마치면 저장하세요.",
				closeWithPendingChange: "작업을 확인하시겠습니까? 변경 사항이 손실됩니다.",
				gotIt: "확인",
				savingApplication: "응용프로그램을 저장하는 중",
				saveSuccess: "응용프로그램이 저장되었습니다.",
				saveError: "저장하지 못했습니다. 다시 시도하세요.",
				saveError2: "이름 또는 설명의 잘못된 html 태그로 인해 저장하지 못했습니다.",
				saveError3: "제목은 비워 둘 수 없습니다.",
				signIn: "응용프로그램을 저장하려면",
				signInTwo: "로그인 계정으로 로그인하세요."
			},
			header:{
				editMe: "편집!",
				templateTitle: "템플릿 제목 설정",
				templateSubtitle: "템플릿 부제목 설정"
			},
			settings: {
				settingsHeader: "응용프로그램 설정",
				modalCancel: "취소",
				modalApply: "적용"
			},
			settingsColors: {
				settingsTabColor: "테마",
				settingsColorExplain: "앱 테마를 선택하거나 사용자 고유의 색상을 정의합니다.",
				settingsLabelColor: "헤더 및 사이드 패널 배경 색상"
			},
			settingsHeader: {
				settingsTabLogo: "헤더",
				settingsLogoExplain: "머리글 로고를 사용자 지정합니다(최대 250x50 픽셀).",
				settingsLogoEsri: "Esri 로고",
				settingsLogoNone: "로고 없음",
				settingsLogoCustom: "사용자 지정 로고",
				settingsLogoCustomPlaceholder: "이미지 URL",
				settingsLogoCustomTargetPlaceholder: "클릭 이동 링크",
				settingsLogoSocialExplain: "헤더 오른쪽 상단 링크를 사용자 정의합니다.",
				settingsLogoSocialText: "텍스트",
				settingsLogoSocialLink: "링크",
				settingsLogoSocialDisabled: "이 기능은 관리자가 사용하지 않도록 설정했습니다."
			},
			settingsExtent: {
				settingsTabExtent: "범위",
				settingsExtentExplain: "아래의 대화형 맵을 통해 초기 범위를 설정합니다.",
				settingsExtentExplainBottom: "정의한 범위에 따라 웹 맵 초기 범위가 수정됩니다. 단, 스와이프 계열을 수행하는 경우에는 해당 범위가 사용되지 않습니다.",
				settingsExtentDateLineError: "범위는 180° 경도의 자오선을 교차할 수 없습니다.",
				settingsExtentDateLineError2: "범위를 계산하는 중 오류가 발생했습니다.",
				settingsExtentDrawBtn: "새 범위 그리기",
				settingsExtentModifyBtn: "현재 범위 편집",
				settingsExtentApplyBtn: "기본 맵에 적용",
				settingsExtentUseMainMap: "기본 맵 범위 사용"
			}
        },
		swipe: {
			mobileData: {
				noData: "표시할 데이터가 없습니다!",
				noDataExplain: "맵을 터치하고 피처를 선택한 후 이 화면으로 다시 돌아오세요.",
				noDataMap: "이 맵에 대한 데이터 없음",
				noPopup: "이 피처에 대한 팝업 없음"
			},
			mobileLegend: {
				noLegend: "표시할 범례가 없습니다."
			},
			swipeSidePanel: {
				editTooltip: "사이드 패널 설명을 설정합니다.",
				editMe: "편집!",
				legendTitle: "범례"
			},
			infoWindow: {
				noFeature: "표시할 데이터가 없습니다.",
				noFeatureExplain: "맵을 터치하여 피처를 선택하세요."
			},
			settingsLayout: {
				settingsTabLayout: "스와이프 스타일",
				settingsLayoutExplain: "스와이프 도구의 스타일을 선택합니다.",
				settingsLayoutSwipe: "수직 막대",
				settingsLayoutSpyGlass: "망원경",
				settingsLayoutSelected: "선택한 레이아웃",
				settingsLayoutSelect: "이 레이아웃 선택",
				settingsSaveConfirm: "일부 변경 사항은 응용프로그램을 저장하고 다시 로드해야 합니다."
			},
			settingsDataModel: {
				settingsTabDataModel: "스와이프 유형",
				settingsDataModelExplainSwipe: "사용자가 무엇을 스와이프하기를 원하시나요?",
				settingsDataModelExplainSwipe2: "",
				settingsDataModelExplainSpyGlass: "망원경에 표시할 레이어 또는 웹 맵을 선택합니다.",
				settingsDataModelOneMap: "웹 맵의 레이어",
				settingsDataModel1Explain: "스와이프하기를 원하는 레이어를 선택하세요.",
				settingsDataModel1Warning: "레이어가 상위 레이어에 의해 숨겨진 경우에는 스와이프가 적용되지 않습니다.",
				settingsDataModel1SpyGlassExplain: "망원경 내에 표시할 레이어를 선택합니다.",
				settingsDataModelTwoMaps: "웹 맵 두 개",
				settingsDataModelLayerIds: "웹 맵 레이어 ID",
				settingsDataModelSelected: "선택한 유형",
				settingsDataModelWebmapSwipeId1: "오른쪽 웹 맵 ID",
				settingsDataModelWebmapSwipeId2: "왼쪽 웹 맵 ID",
				settingsDataModelWebmapGlassId1: "기본 웹 맵 ID",
				settingsDataModelWebmapGlassId2: "망원경 웹 맵 ID",
				settingsDataModelSelect: "이 유형 선택",
				settingsDataModel2Explain: "다른 웹 맵으로 스와이프합니다.",
				settingsDataModel2SpyGlassExplain: "다른 웹 맵을 표시합니다.",
				settingsDataModel2HelpTitle: "웹 맵 ID를 찾는 방법",
				settingsDataModel2HelpContent: "웹 맵의 URL에 '=' 부호 뒤의 숫자 복사 및 붙여넣기",
				switchMaps: "맵 전환",
				browseWebMaps: "웹 맵 찾아보기"
			},
			settingsLegend: {
				settingsTabLegend: "앱 레이아웃",
				settingsLegendExplain: "응용프로그램 레이아웃 설정을 선택합니다.",
				settingsLegendEnable: "범례 사용",
				settingsDescriptionEnable: "설명 사용",
				settingsBookmarksEnable: "스와이프 계열 사용",
				settingsPopupDisable: "팝업 사용",
				settingsLocationSearchEnable: "로케이터 검색 사용",
				settingsGeolocatorEnable: "지오로케이터 사용",
				settingsLegendHelpContent: "범례 컨텐츠를 세분화하려면 ArcGIS.com web map viewer 목차를 사용하세요(범례에서 숨겨짐).",
				settingsSeriesHelpContent: "스와이프 계열은 뷰어를 특정 범위로 안내하고 사이드 패널에 제목 및 설명 텍스트를 표시하는 탭이 지정된 탐색 옵션입니다. 초기 활성화 중에 웹 맵의 책갈피를 가져오며 이를 통해 계열 모음이 미리 채워집니다. 계열 옵션을 비활성화하면 계열 모음이 꺼지지만 계열 구성은 나중에 사용할 수 있도록 유지됩니다.", 
				settingsSeriesHelpContent2: "스와이프 계열을 사용하면 선택한 위치 및 함께 제공되는 제목과 텍스트를 생성하고 편집할 수 있습니다. 웹 맵에 책갈피가 있으면 책갈피가 표시됩니다. 계열을 비활성화할 수도 있지만 구성은 나중에 사용할 수 있도록 유지됩니다.",
				settingsSeriesHelpLink: "스와이프 계열이 포함된 응용프로그램 예제 확인",
				preview: "UI 미리보기",
				settingsLocateButtonExplain: "이 기능은 대부분의 모바일 장치와 데스크탑 브라우저(Internet Explorer 9 이상 포함)에서 지원됩니다.",
				settingsLocateButton: "지원되는 브라우저에서 '찾기' 버튼 사용",
				settingsAddressSearch: "주소 검색 도구 사용"
			},
			settingsSwipePopup: {
				settingsSwipePopup: "팝업",
				settingsSwipePopupExplain: "사용자가 팝업을 맵 레이어와 연결하기 쉽도록 팝업 머리글의 모양을 사용자 정의합니다.",
				settingsSwipePopupSwipe1: "왼쪽 맵",
				settingsSwipePopupSwipe2: "오른쪽 맵",
				settingsSwipePopupGlass1: "기본 맵",
				settingsSwipePopupGlass2: "망원경 맵",
				settingsSwipePopupTitle: "머리글 제목",
				settingsSwipePopupColor: "머리글 색상"
			},
			initPopup: {
				initHeader: "스와이프/망원경 빌더 시작",
				modalNext: "다음",
				modalPrev: "이전",
				modalApply: "앱 열기"
			},
			seriesPanel: {
				title: "제목",
				descr: "설명",
				discard: "책갈피 취소",
				saveExtent: "책갈피 범위 설정",
				discardDisabled: "책갈피를 제거할 수 없습니다. 스와이프 계열이 설정에서 사용하지 않도록 설정되어 있을 수 있습니다."
			},
			helpPopup: {
				title: "도움말",
				close: "닫기",
				tab1: {
					div1: "스와이프/망원경 템플릿은 스마트폰과 태블릿을 비롯한 모든 장치의 모든 웹 브라우저에서 사용 가능한 간편하고 효율적인 웹 응용프로그램에서 단일 웹 맵의 두 레이어 또는 두 개별 웹 맵을 비교하도록 설계되었습니다.",
					div2: "사용자가 생성한 예시를 포함한 스와이프/확대 렌즈 템플릿에 대한 추가 정보는, <a href='http://storymaps.arcgis.com/en/app-list/swipe/' target='_blank'> 스토리 맵 웹 사이트를 방문하세요</a>. Twitter의 <a href='https://twitter.com/EsriStoryMaps' target='_blank'>@EsriStoryMaps</a>에서 팔로잉할 수도 있습니다.",
					div3: "여러분의 참여를 기다립니다. 질문이 있거나 새 기능이 필요하거나 버그가 확인된 경우 <a href='http://links.esri.com/storymaps/forum' target='_blank'>스토리 맵 사용자 포럼</a>을 방문해 주세요."
				}
			},
			share: {
				firstSaveTitle: "응용프로그램이 저장됨",
				firstSaveHeader: "이제 응용프로그램이 ArcGIS Online에 저장되었습니다. 다음 FAQ를 확인하세요.",
				firstSaveA1: "ArcGIS Online에 익숙하지 않거나 바로가기를 사용하여 작성 인터페이스에 액세스하려는 경우 다음 링크를 저장하면 됩니다. %LINK1%",
				firstSaveA1bis: "<a href='%LINK2%' target='_blank'>ArcGIS Online 컨텐츠 폴더</a>에서도 응용프로그램을 찾을 수 있습니다.",
				firstSaveQ2: "응용프로그램이 공유됩니까?",
				firstSaveA2: "현재는 응용프로그램이 공유되지 않습니다. 공유하려면 공유 버튼을 사용합니다.",
				shareTitle: "응용프로그램 공유",
				sharePrivateHeader: "응용프로그램이 공유되고 있지 않습니다. 공유하시겠습니까?",
				sharePrivateBtn1: "공개적으로 공유",
				sharePrivateBtn2: "내 기관과 공유",
				sharePrivateProgress: "공유 처리 중...",
				sharePrivateErr: "공유에 실패했습니다. 다시 시도하거나",
				sharePrivateOk: "공유가 업데이트되었습니다. 로그하는 중...",
				shareStatus1: "응용프로그램이 저장되지 않음",
				shareStatus2: "응용프로그램이 공개적으로 공유됨",
				shareStatus3: "응용프로그램이 기관 내에서 공유됨",
				shareStatus4: "응용프로그램이 공유되지 않음",
				sharePreviewAsUser: "미리보기",
				shareHeader1: "응용프로그램에 <strong>공개적으로 접근 가능</strong>합니다.",
				shareHeader2: "기관의 구성원이 응용프로그램에 접근할 수 있습니다(로그인 필요).",
				shareLinkHeader: "대상 그룹과 응용프로그램 공유",
				shareLinkOpen: "열기",
				learnMore: "자세한 정보",
				shareQ1Opt1: "응용프로그램을 비공개 상태로 유지하려면 어떻게 해야 합니까?",
				shareQ1Opt2: "응용프로그램을 비공개 상태로 유지하거나 공개적으로 공유하려면 어떻게 해야 합니까?",
				shareA1: "<a href='%LINK1%' target='_blank'>응용프로그램 항목 페이지</a>의 %SHAREIMG%을 사용합니다. 웹 맵도 공유 해제하려면 <a href='%LINK2%' target='_blank'>웹 맵 항목 페이지</a>를 사용합니다.",
				shareA1bis: "피처 서비스의 공유도 해제하려면 <a href='%LINK1%' target='_blank'>피처 서비스 항목 페이지</a>를 사용하세요.",
				shareQ2: "나중에 응용프로그램을 편집하려면 어떻게 해야 합니까?",
				shareQ2bis: "작성 인터페이스로 돌아가는 방법",
				shareA2div1: "%LINK1% 링크를 저장하여 다시 사용하거나 <a href='%LINK2%' target='_blank'>응용프로그램 항목 페이지</a>를 사용하세요.",
				shareA2div2: "응용프로그램의 소유자인 경우 ArcGIS.com에 로그인하면 대화형 빌더를 열 수 있는 버튼이 응용프로그램에 표시됩니다.",				
				shareQ3: "데이터는 어디에 저장되나요?",
				shareA3: "응용프로그램 구성은 이 웹 응용프로그램 항목에 저장됩니다</a>.",
				shareWarning: "<a href='%LINK%' target='_blank'>웹 맵</a>의 소유자가 아니므로 %WITH% 공유를 사용할 수 없습니다.",
 				shareWarningWith1: "공개",
 				shareWarningWith2: "기관에 공개"
			},
			directCreation: {
				header: "스와이프/망원경 빌더 시작",
				mapPickHeader: "시작하려면 유효한 웹 맵 ID를 입력하거나 검색 버튼을 사용하여 웹 맵을 찾으세요.",
				launchBuilder: "빌더 시작",
				chooseWebmapLbl: "웹 맵을 선택합니다...",
				explain2: "스와이프 또는 확대 렌즈 스토리 맵을 생성하려면 아래 버튼을 사용하여 사용할 기존 ArcGIS Online 웹 맵을 선택합니다. 또는 웹 맵의 ID를 아래 필드에 붙일 수도 있습니다.",
				explain3: "스토리 맵에서 두 개의 웹 맵을 사용하려는 경우 나중에 해당 옵션을 선택할 때 두 번째 웹 맵에 대한 프롬프트가 표시됩니다.",
				webmapPlaceholder: "웹 맵 ID를 입력합니다..."
			}
		},
		configure: {
			mapdlg:{
				items:{
					organizationLabel: "내 기관",
					onlineLabel: "ArcGIS Online",
					contentLabel: "내 컨텐츠",
					favoritesLabel: "내 즐겨찾기"
				},
				title: "웹 맵 선택",
				searchTitle: "검색",
				ok: "확인",
				cancel: "취소",
				placeholder: "검색어 입력"
			}
		}
    })
);