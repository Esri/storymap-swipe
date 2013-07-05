define([], 
	function () {
		return function SettingsPopupTabSwipePopup(titleContainer, contentContainer) 
		{
			// Clone the #popupView template into a new DIV
			$(contentContainer).append($('#popupView-popup').children().clone());
			
			dojo.subscribe("LAYOUT_CHANGE", configureHeader);
			
			this.init = function(settings) 
			{			
				configureHeader(settings.layout);
				
				// Colors
				var popup1Color = settings.popupColors ? settings.popupColors[0] : ("#" + configOptions.popupColors[0]);
				var popup2Color = settings.popupColors ? settings.popupColors[1] : ("#" + configOptions.popupColors[1]);
				
				$(contentContainer).find("#popup2Color").spectrum({
    				color: popup1Color,
					showButtons:false,
					showPalette:false,
					showSelectionPalette:false,
					showPaletteOnly:false,
					showInput: true
				});
				$(contentContainer).find("#popup1Color").spectrum({
    				color: popup2Color,
					showButtons:false,
					showPalette:false,
					showSelectionPalette:false,
					showPaletteOnly:false,
					showInput: true
				});
				
				// Titles
				$(contentContainer).find(".selectPopup2").val(settings.popupTitles ? settings.popupTitles[0] : '');
				$(contentContainer).find(".selectPopup1").val(settings.popupTitles ? settings.popupTitles[1] : '');
			}
			
			this.show = function()
			{
				//
			}
			
			this.save = function()
			{		
				return {
					popupTitles: getPopupTitles(),
					popupColors: getPopupColors()
				};
			}
			
			function getPopupTitles(){
				return [
					$(contentContainer).find(".selectPopup2").val(),
					$(contentContainer).find(".selectPopup1").val()
				];
			}
			
			function getPopupColors(){
				return [
					$(contentContainer).find("#popup2Color").spectrum("get").toHex(),
					$(contentContainer).find("#popup1Color").spectrum("get").toHex()
				];
			}
			
			function configureHeader(layout)
			{
				var map1Lbl = layout == "swipe" ? i18n.swipe.settingsSwipePopup.settingsSwipePopupSwipe1 : i18n.swipe.settingsSwipePopup.settingsSwipePopupGlass2;
				var map2Lbl = layout == "swipe" ? i18n.swipe.settingsSwipePopup.settingsSwipePopupSwipe2 : i18n.swipe.settingsSwipePopup.settingsSwipePopupGlass1;
				$(contentContainer).find('.popup1Title').html(map1Lbl);
				$(contentContainer).find('.popup2Title').html(map2Lbl);
			}
	
			this.initLocalization = function()
			{
				$(titleContainer).html(i18n.swipe.settingsSwipePopup.settingsSwipePopup);
				
				$(contentContainer).find('p').html(i18n.swipe.settingsSwipePopup.settingsSwipePopupExplain);
				$(contentContainer).find('.popup1HeaderTitle').html(i18n.swipe.settingsSwipePopup.settingsSwipePopupTitle);
				$(contentContainer).find('.popup2HeaderTitle').html(i18n.swipe.settingsSwipePopup.settingsSwipePopupTitle);
				$(contentContainer).find('.popup1HeaderColor').html(i18n.swipe.settingsSwipePopup.settingsSwipePopupColor);
				$(contentContainer).find('.popup2HeaderColor').html(i18n.swipe.settingsSwipePopup.settingsSwipePopupColor);
			}
		}
	}
);