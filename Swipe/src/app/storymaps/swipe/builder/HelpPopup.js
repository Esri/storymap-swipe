define([], 
	function () {
		return function HelpPopup(container) 
		{
			var _initDone = false;
			
			var _btnClose = container.find(".btnClose");

			
			this.present = function(tabIndex) 
			{			
				if( ! _initDone )
					initContent();
					
				_btnClose.removeAttr("disabled");
				container.find(".modal-header .close").attr("data-dismiss", "modal");

				$(container).modal({keyboard: true});	
			};
	
			function initContent()
			{
				container.find('h3').html(i18n.swipe.helpPopup.title);
				container.find('.btnClose').html(i18n.swipe.helpPopup.close);

				/*container.find('#help-tab1').html(
					i18n.swipe.helpPopup.tab1.div1 + '<br /><br />'
					+ i18n.swipe.helpPopup.tab1.div2 + '<br /><br />'
					+ i18n.swipe.helpPopup.tab1.div3 + '<br />'
				);*/
				container.find('#help-tab1').html(
					i18n.swipe.helpPopup.tab1.div1 + '<br /><br />'
				);
				container.find('#help-tab2').html(
					i18n.swipe.helpPopup.tab1.div2 + '<br /><br />'
				);
				container.find('#help-tab3').html(
					i18n.swipe.helpPopup.tab1.div3 + '<br />'
				);
				
				_initDone = true;
			}
			
			this.initLocalization = function()
			{
				//
			};
		};
	}
);