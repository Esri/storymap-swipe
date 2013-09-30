define([], 
	function () {
		return function SettingsPopupTabColors(titleContainer, contentContainer, colorSchemes) 
		{
			// Add the default StoryMaps theme
			colorSchemes.splice(0, 0, 
				{
					name: "Gray", 
					headerColor: APPCFG.COLORS[0], 
					panelColor: APPCFG.COLORS[1]
				}
			);

			var _tableColor =  buildColorTable();
			var _inputHeaderColor = $(_tableColor).find('#inputCustomHeaderColor');
			var _inputMiddleColor = $(_tableColor).find('#inputCustomMiddleColor');
			
			createColorPalette(_inputHeaderColor);
			createColorPalette(_inputMiddleColor);
			
			$(contentContainer).find('#colorScheme .controls').append(_tableColor);
			$(_inputHeaderColor).spectrum("set", APPCFG.COLORS[0]);	
			$(_inputMiddleColor).spectrum("set", APPCFG.COLORS[1]);	
			
			$("input[name=groupColorSchemes]", _tableColor).click(onColorSchemeRadioClick);			
			
			this.init = function(settings) 
			{			
				selectCurrentColorScheme(settings.colors);
				// if the last radio button is selected, that means it is the custom
				// color palette, so we need to initialize the pickers.
				var numRadios = $("input[name=groupColorSchemes]", contentContainer).length;
				if ($("input[name=groupColorSchemes]", contentContainer).eq(numRadios - 1).attr('checked') == "checked") {
					$(_inputHeaderColor).spectrum("set", settings.colors[0]);	
					$(_inputMiddleColor).spectrum("set", settings.colors[1]);	
				}
			};
			
			this.show = function()
			{
				//
			};
			
			this.save = function()
			{		
				var schemeName = getCurrentScheme();
				var colors;
				
				if (schemeName == "schemeCustom") {
					colors = [
						$(_inputHeaderColor).val(),
						$(_inputMiddleColor).val()
					];
				}
				else {
					var scheme = $.grep(colorSchemes,function(n){return n.name == schemeName})[0];
					colors = [
						scheme.headerColor,
						scheme.panelColor
					];
				}
				
				return {
					colors: colors
				};
			};
	
			function getCurrentScheme() 
			{
				return $("input[name=groupColorSchemes]:checked", contentContainer).val();
			}
			
			function selectCurrentColorScheme(currentColors) 
			{
				if ( ! currentColors || ! currentColors[0] || ! currentColors[1] ) {
					setSelectedScheme(1);
				}
				else {
					var colorFound = false;
					$.each(colorSchemes, function(index, value){
						var isCurrentColors = 
							currentColors[0] == value.headerColor 
							&& currentColors[1] == value.panelColor ;
							
						 if (isCurrentColors) {
						 	colorFound = true;
						 	setSelectedScheme(index + 1);
						 }
					});
					
					if( ! colorFound )
						setSelectedScheme(colorSchemes.length + 1);
				}
				
				updatePickers();	
			}
			
			function updatePickers()
			{
				if( getSelectedSchemeIndex() == colorSchemes.length ) {
					$(_inputHeaderColor).spectrum("enable");	
					$(_inputMiddleColor).spectrum("enable");	
				} 
				else {
					$(_inputHeaderColor).spectrum("disable");	
					$(_inputMiddleColor).spectrum("disable");	
				}
			}
			
			function getSelectedSchemeIndex()
			{
				var index = -1;
				$(contentContainer).find(".controls tr td:nth-child(1) input").each(function(i, input){ 
					if( $(input).is(":checked")) 
						index = i;
				});
				return index;
			}
			
			function setSelectedScheme(index)
			{
				$(contentContainer).find(".controls tr:nth-child(" + index + ") td:nth-child(1) input").attr("checked", "true");
			}
			
			function createColorPalette(input) 
			{
				$(input).spectrum({
					showButtons:false,
					color: APPCFG.COLORS[0],
					showPalette:false,
					showSelectionPalette:false,
					showPaletteOnly:false,
					showInput: true
				});
			}
			
			function onColorSchemeRadioClick()
			{
				updatePickers();
				
				// Har link to update the logo tab
				if (getSelectedSchemeIndex() == colorSchemes.length) {
					$("#headerSimulator", contentContainer).css("background-color", $(_inputHeaderColor).val());		
				}
				else {
					var scheme = $.grep(colorSchemes,function(n){
						return n.name == getCurrentScheme();
					})[0]; 
					$("#headerSimulator", contentContainer).css("background-color", scheme.headerColor);
				}
			}
			
			function buildColorTable() 
			{
				if( ! colorSchemes )
					return;
				
				var table = $("<table></table>");
				var row;
				
				$.each(colorSchemes, function(index, value){
					if( ! value.name || ! value.headerColor || ! value.panelColor )
						return;
					
					row = $("<tr></tr>");
					
					var input = $("<input type='radio' class='radio' name='groupColorSchemes'/>");
					$(input).attr("value",value.name);
					
					var td = $("<td></td>");
					$(td).append(input);
					$(row).append(td);
					$(row).append("<td><div class='swatch' style='background-color:"+value.headerColor+"'></div></td>");
					$(row).append("<td><div class='swatch' style='background-color:"+value.panelColor+"'></div></td>");
					
					$(table).append(row);
				});
		
				row = $("<tr></tr>");
				$(row).append("<td><input type='radio' class='radio' name='groupColorSchemes' value='schemeCustom'/></td>");
				$(row).append("<td><input id='inputCustomHeaderColor' class='colorInput' type='custom'/></td>");
				$(row).append("<td><input id='inputCustomMiddleColor' class='colorInput' type='custom'/></td>");
				
				$(table).append(row);
				return table;			
			}
			
			this.initLocalization = function()
			{
				$(titleContainer).html(i18n.builder.settingsColors.settingsTabColor);
				
				$(contentContainer).find('p').html(i18n.builder.settingsColors.settingsColorExplain);
				$(contentContainer).find('.control-label').html(i18n.builder.settingsColors.settingsLabelColor+":");
			}
		}
	}
);