define(["dojo/on",
		"storymaps/swipe/core/WebApplicationData"], 
	function (on, WebApplicationData) {
		return function initMapPicker(container)
		{
			_loadWebMap = null;
			
			$(container).find(".webmap-id-input").keyup(checkWebmapIdValidity);
			$(container).find(".webmap-id-input").bind('paste', null, function(){
				setTimeout(function(){
					checkWebmapIdValidity();
				}, 250);		
			});
			
			app.builder.openMapPicker = function()
			{
				container.hide();
				app.browseDlg.show();
			};
			
			this.present = function(loadWebMap) 
			{
				_loadWebMap = loadWebMap;
					
				container.find('h3').html(i18n.swipe.directCreation.header);
				// Link
				container.find('.webmap-id-input').html(
					'<div>'
					+ i18n.swipe.directCreation.explain2
					+ '<div style="margin-top: 10px;">'
					+ '<input type="text" maxlength="32" style="height: 20px; font-size: 20px; width: 350px; text-align: left;" id="firstMapInput" value="" />'
					+ ' <a class="btn collapse-btn" style="vertical-align: 4px" onClick="app.builder.openMapPicker()"><i class="icon-search"></i></a>'
					+ '</div>'
					+ '</div>'
				);
				container.find('.btnClose').html(i18n.swipe.initPopup.modalNext);
				container.find('.btnClose').attr('disabled', 'disabled');
				$(container).modal({keyboard: false});
			};
			
			function checkWebmapIdValidity()
			{
				if( container.find('.webmap-id-input').find('input').val().length != 32)
					container.find('.btnClose').attr('disabled', 'disabled');
				else
					container.find('.btnClose').attr('disabled', false);
			}
			
			on(container.find('.btnClose'), 'click', launchBuilder);
			
			function launchBuilder(){
				WebApplicationData.setWebmap(container.find('.webmap-id-input').find('input').val());
				app.rootMapId = container.find('.webmap-id-input').find('input').val();
				WebApplicationData.setWebmaps([container.find('.webmap-id-input').find('input').val()]);
				_loadWebMap(container.find('.webmap-id-input').find('input').val());
				loadingIndicator.start();
				$('#loadingMessage').css('visibility', 'visible');
			}
		};
	}
);