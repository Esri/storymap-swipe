define(["storymaps/ui/inlineFieldEdit/InlineFieldEdit", "dojo/has"], function(InlineFieldEdit, has){
	/**
	 * Header
	 * @class Header
	 *
	 * UI Header component
	 *  - Mobile and desktop title/subtitle doesn't share the same div
	 *  - So title and subtile are set twice and edits in desktop are reported to the mobile
	 */
	return function Header(selector, isInBuilderMode)
	{
		var _builderButtonHidden = false;
		
		this.init = function(title, subtitle, bgColor, logoURL, logoTarget, displaySwitchBuilderButton, topLinkText, topLinkURL)
		{
			this.setColor(bgColor);
			this.setLogoInfo(logoURL, logoTarget);

			// Mobile
			$(selector + ' #headerMobile .title').html(title);
			$(selector + ' #headerMobile .subtitle').html(subtitle);

			// Desktop builder
			if( isInBuilderMode ) {
				$(selector).addClass('isBuilder');
				title =  "<p class='text_edit_label'>" + (title || i18n.builder.header.editMe) + "</p>";
				title += "<div class='text_edit_icon' title='"+i18n.builder.header.templateTitle+"'></div>";
				title += "<textarea rows='1' class='text_edit_input' type='text'></textarea>";

				subtitle =  "<span class='text_edit_label'>" + (subtitle || i18n.builder.header.editMe) + "</span>";
				subtitle += "<div class='text_edit_icon' title='"+i18n.builder.header.templateSubtitle+"'></div>";
				subtitle += "<textarea rows='2' class='text_edit_input' type='text'></textarea>";
			}

			$(selector + ' #headerDesktop .title').html(title);
			$(selector + ' #headerDesktop .subtitle').html(subtitle);

			// Desktop builder
			if( isInBuilderMode )
				new InlineFieldEdit(selector, editFieldsEnterEvent, editFieldsExitEvent);
			
			if( ! isInBuilderMode && ! subtitle ) {
				$(selector + ' #headerDesktop .title').css("padding-top", 40);
				$(selector + ' #headerDesktop .subtitle').css("height", 32);
			}

			// Mobile init
			$(window).scroll(this.hideMobileBanner);
			$(selector + " #headerMobile .banner").fastClick(this.hideMobileBanner);

			// Navigation bar
			$(".navBar span").fastClick(function(){
				if( ! $(this).hasClass("current") )
					location.hash = $(this).data("viewid");
			});

			if ( displaySwitchBuilderButton ) {
				$(selector + " .switchBuilder").fastClick(this.switchToBuilder);
				$(selector + " .switchBuilder").show();
			}

			showMobileHeader(true);
			this.setTopRightLink(topLinkText, topLinkURL);

			$(selector).css("display", "block");
		}
		
		this.resize = function(widthViewport)
		{
			$(selector + " #headerDesktop .textArea").width(widthViewport - $(selector + " #headerDesktop .rightArea").outerWidth() - 35);
		}

		this.hideMobileBanner = function(immediate)
		{
			$(selector + " #headerMobile .banner").slideUp(immediate === true ? 0 : 250);
			$(selector + " #headerMobile").removeClass("firstDisplay");
		}
		
		this.mobileHeaderIsInFirstState = function()
		{
			return $(selector + " #headerMobile").hasClass("firstDisplay");
		}

		this.setColor = function(bgColor)
		{
			$(selector + ' #headerDesktop').css("background-color", bgColor);
			$(selector + ' #headerMobile').css("background-color", bgColor);
			$(selector + ' #builderPanel').css("background-color", bgColor);
		}

		this.setLogoInfo = function(url, target)
		{
			if ( ! url || url == "NO_LOGO" ) {
				$(selector + ' .logo img').hide();
			}
			else {
				$(selector + ' .logo img').attr("src", url);
				if (target) {
					$(selector + ' .logo img').closest("a").css("cursor", "pointer");
					$(selector + ' .logo img').closest("a").attr("href", target);
				}
				else 
					$(selector + ' .logo img').closest("a").css("cursor", "default");
				
				$(selector + ' .logo img').show();
			}
		}
		
		this.setTopRightLink = function(text, link)
		{
			if( link )
				$(selector + ' .social .msLink').html(text ? '<a href="' + link + '" target="_blank">' + text + '</a>' : '');
			else if ( text )
				$(selector + ' .social .msLink').html('<span>' + text + '</a>');
			else 
				$(selector + ' .social .msLink').html('');
		}

		function showMobileHeader(immediate)
		{
			$(selector + " #headerMobile .banner").slideDown(immediate === true ? 0 : 250);
		}
		
		function editFieldsEnterEvent()
		{
			if( ! _builderButtonHidden )
				$(selector + " #builderPanel", selector).fadeOut("fast");
			_builderButtonHidden = false;
		}
		
		function editFieldsExitEvent(src, value)
		{
			_builderButtonHidden = true;
			setTimeout(function(){ 
				if( _builderButtonHidden )
					$(selector + " #builderPanel", selector).fadeIn("fast");
				_builderButtonHidden = false;
			}, has("ios") || has("ie") == 10 ? 500 : 100);
			
			setTimeout(function(){ 
				dojo.publish("HEADER_EDITED", {
					src: $(src).attr("class"), 
					value: value
				});
				$(selector + ' #headerMobile .banner .' + $(src).attr("class")).html(value);
			}, has("ios") || has("ie") == 10 ? 700 : 0);
		}

		this.switchToBuilder = function() {
			if( document.location.search.match(/appid/) )
				document.location = document.location.protocol + '//' + document.location.host + document.location.pathname + document.location.search + "&edit" + document.location.hash;
			else if ( document.location.search.slice(-1) == '?' )
				document.location = document.location.protocol + '//' + document.location.host + document.location.pathname + "edit"  + document.location.hash;
			else
				document.location = document.location.protocol + '//' + document.location.host + document.location.pathname + "?edit"  + document.location.hash;
		}
		
		this.initLocalization = function()
		{
			//Mobile
			$(selector + ' #closeHeaderMobile').html(i18n.viewer.mobileView.hideIntro);
			$(selector + ' #leftViewLink').html(i18n.viewer.mobileView.navLeft);
			$(selector + ' #mapViewLink').html(i18n.viewer.mobileView.navMap);
			$(selector + ' #rightViewLink').html(i18n.viewer.mobileView.navRight);
			//Desktop
			$(selector + ' .msLink').html(i18n.viewer.desktopView.storymapsText);
			$(selector + ' .switchBuilder').html('<div><img src="resources/icons/builder-edit-fields.png" /></div>' + i18n.viewer.desktopView.builderButton);
		}
	}
});