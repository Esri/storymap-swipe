define(["storymaps/ui/inlineFieldEdit/InlineFieldEdit",
        "storymaps/swipe/core/WebApplicationData",
		"dojo/has",
		"dojo/topic",
		"esri/urlUtils"],
	function(
		InlineFieldEdit,
		WebApplicationData,
		has,
		topic,
		urlUtils
	){
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

			this.init = function(hideDesktop, title, subtitle, bgColor, logoURL, logoTarget, displaySwitchBuilderButton, topLinkText, topLinkURL, social)
			{
				this.setColor(bgColor);
				this.setLogoInfo(logoURL, logoTarget);

				if( hideDesktop )
					$(selector).addClass('hideDesktop');

				// Mobile
				$(selector + ' #headerMobile .title').html(title);
				$(selector + ' #headerMobile .subtitle').html(subtitle);

				// Desktop builder
				if( isInBuilderMode ) {
					$(selector).addClass('isBuilder');
					title =  "<div class='text_edit_label'>" + (title || i18n.builder.header.editMe) + "</div>";
					title += "<div class='text_edit_icon' title='"+i18n.builder.header.templateTitle+"'></div>";
					title += "<textarea rows='1' class='text_edit_input' type='text' spellcheck='true'></textarea>";

					subtitle =  "<span class='text_edit_label'>" + (subtitle || i18n.builder.header.editMe) + "</span>";
					subtitle += "<div class='text_edit_icon' title='"+i18n.builder.header.templateSubtitle+"'></div>";
					subtitle += "<textarea rows='2' class='text_edit_input' type='text' spellcheck='true'></textarea>";
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
				this.setSocial(social, true);

				$(selector).css("display", "block");
				app.requestBitly = requestBitly;
			};

			this.resize = function(widthViewport)
			{
				var rightAreaWidth = Math.max($(selector + " #headerDesktop .headerLogoImg").outerWidth() + 50, $(selector + " #headerDesktop .rightArea").outerWidth() + 20);
				$(selector + " #headerDesktop .textArea").width(widthViewport - rightAreaWidth - 15);
			};

			this.hideMobileBanner = function(immediate)
			{
				$(selector + " #headerMobile .banner").slideUp(immediate === true ? 0 : 250);
				$(selector + " #headerMobile").removeClass("firstDisplay");
			};

			this.mobileHeaderIsInFirstState = function()
			{
				return $(selector + " #headerMobile").hasClass("firstDisplay");
			};

			this.setColor = function(bgColor)
			{
				$(selector + ' #headerDesktop').css("background-color", bgColor);
				$(selector + ' #headerMobile').css("background-color", bgColor);
				$(selector + ' #builderPanel').css("background-color", bgColor);
			};

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
			};

			this.setTopRightLink = function(text, link)
			{
				if( link )
					$(selector + ' .social .msLink').html(text ? '<a href="' + link + '" target="_blank">' + text + '</a>' : '');
				else if ( text )
					$(selector + ' .social .msLink').html('<span>' + text + '</a>');
				else
					$(selector + ' .social .msLink').html('');
			};

			this.setTitleAndSubtitle = function(title, subtitle)
			{
				$(selector + ' #headerMobile .title').html(title);
				$(selector + ' #headerMobile .subtitle').html(subtitle);

				var defaultText = isInBuilderMode ? i18n.builder.header.editMe : '';

				$(selector + ' #headerDesktop .title' + (isInBuilderMode ? ' .text_edit_label' : '')).html(title || defaultText);
				$(selector + ' #headerDesktop .subtitle' + (isInBuilderMode ? ' .text_edit_label' : '')).html(subtitle || defaultText);
			};

			this.setSocial = function(social, initialCfg)
			{
				$(selector + " .share_facebook").toggle(
					APPCFG.HEADER_SOCIAL
					&& APPCFG.HEADER_SOCIAL.facebook
					&& (!social || social.facebook)
				);

				$(selector + " .share_twitter").toggle(
					APPCFG.HEADER_SOCIAL
					&& APPCFG.HEADER_SOCIAL.twitter
					&& (!social || social.twitter)
				);

				$(selector + " .share_bitly").toggle(
					APPCFG.HEADER_SOCIAL && APPCFG.HEADER_SOCIAL.bitly
					&& APPCFG.HEADER_SOCIAL.bitly.enable && APPCFG.HEADER_SOCIAL.bitly.login
					&& APPCFG.HEADER_SOCIAL.bitly.key && (!social || social.bitly)
				);

				if( initialCfg ) {
					$(selector + " .share_facebook").unbind('click');
					$(selector + " .share_twitter").unbind('click');
					$(selector + " .share_bitly").unbind('click');

					$(selector + " .share_facebook").fastClick(shareFacebook);
					$(selector + " .share_twitter").fastClick(shareTwitter);
					$(selector + " .share_bitly").fastClick(shareBitly);
				}
			};
			
			this.enableAutoplay = function()
			{
				$(selector + " .shareIcon").attr("title", "");
				
				$(selector + " .shareIcon")
					.toggleClass("disabled", true)
					.popover({
						trigger: 'hover',
						content: '<div style="font-size: 12px">' + i18n.viewer.desktopView.tooltipAutoplayDisabled + '</div>',
						placement: 'bottom',
						html: true
					});
			};

			function shareFacebook()
			{
				var options = '&p[title]=' + encodeURIComponent($(selector + ' #headerMobile .title').text())
								+ '&p[summary]=' + encodeURIComponent($(selector + ' #headerMobile .subtitle').text())
								+ '&p[url]=' + cleanURL(document.location.href)
								+ '&p[images][0]=' + encodeURIComponent($("meta[property='og:image']").attr("content"));
				
				if ( $(this).hasClass("disabled") ) {
					return;
				}

				window.open(
					'http://www.facebook.com/sharer.php?s=100' + options,
					'',
					'toolbar=0,status=0,width=626,height=436'
				);
			}

			function shareTwitter()
			{
				var options = 'text=' + encodeURIComponent($(selector + ' #headerMobile .title').text())
								+ '&url=' + cleanURL(document.location.href)
								+ '&related=EsriStoryMaps'
								+ '&hashtags=storymap';
				
				if ( $(this).hasClass("disabled") ) {
					return;
				}

				window.open(
					'https://twitter.com/intent/tweet?' + options,
					'Tweet',
					'toolbar=0,status=0,width=626,height=436'
				);
			}

			function shareBitly()
			{
				if ( $(this).hasClass("disabled") ) {
					return;
				}
				
				var isSeries = WebApplicationData.getSeries();
				
				$(selector).find(".share_bitly").popover({
					trigger: 'manual',
					placement: 'left',
					html: true,
					content:
                          '<div style="width:140px; height:' + (isSeries ? '40px' : '30px') + '">'
                        + ' <div id="bitlyLoad" style="position:absolute; top: 16px; left: 24px; width:130px; text-align:center;">'
                        + '  <img src="resources/icons/loader-upload.gif" alt="Loading" />'
                        + ' </div>'
                        + ' <input id="bitlyInput" type="text" value="" style="display:none; width: 130px; margin-bottom: 0px;"/>'
                        + '</div>'
						+ (isSeries ? (
                        ' <div class="autoplay-container" style="font-size: 0.8em; margin-top: 2px; margin-bottom: -1px; position: absolute; top: 38px; width: 100%; left: 0px; text-align: center;">'
						+ '   <input type="checkbox" class="autoplay-checkbox" value="autoplay" style="width: 10px; vertical-align: -2px;" /> '
						+    i18n.viewer.desktopView.autoplayLabel
						+ '  <a class="autoplay-help"><img src="resources/icons/builder-help.png" style="vertical-align: -5px;"/></a>'
						+ ' </div>'
						) : '')
                        + '<script>'
                        + ' $(document).on("click touchstart", function(src) { if( ! src || ! src.target || ! $(src.target).parents(".popover").length ){ $(".share_bitly").popover("hide"); $(document).off("click"); } });'
                        + '</script>'
				}).popover('toggle');
				
				$(selector).find(".autoplay-help").popover({
					content: "<div style='width: 150px'>"
						+ i18n.viewer.desktopView.autoplayExplain1
						+ "<br /><br />"
						+ i18n.viewer.desktopView.autoplayExplain2,
					placement: 'bottom',
					html: true
				});
				
				$(selector).find('.autoplay-checkbox').change(requestBitly);

				requestBitly();
			}

			function requestBitly()
			{
				var bitlyUrls = [
					"http://api.bitly.com/v3/shorten?callback=?",
					"https://api-ssl.bitly.com/v3/shorten?callback=?"
				];
				var bitlyUrl = location.protocol == 'http:' ? bitlyUrls[0] : bitlyUrls[1];

				var urlParams = urlUtils.urlToObject(document.location.search).query || {};
				var targetUrl = document.location.href;
				
				targetUrl = cleanURL(targetUrl, true);
				
				// Autoplay
				if( $(".autoplay-checkbox").is(":checked") ) {
					targetUrl += targetUrl.match(/\?/) ? '&' : '?';
					targetUrl += 'autoplay';
				}

				$.getJSON(
					bitlyUrl,
					{
						"format": "json",
						"apiKey": APPCFG.HEADER_SOCIAL.bitly.key,
						"login": APPCFG.HEADER_SOCIAL.bitly.login,
						"longUrl": targetUrl
					},
					function(response)
					{
						if( ! response || ! response || ! response.data.url )
							return;

						$("#bitlyLoad").fadeOut();
						$("#bitlyInput").fadeIn();
						$("#bitlyInput").val(response.data.url);
						$("#bitlyInput").select();
					}
				);
			}

			function cleanURL(url, noEncoding)
			{
				var urlParams = urlUtils.urlToObject(url);
				var newUrl = urlParams.path;

				if ( urlParams.query ) {
					delete urlParams.query.edit;
					delete urlParams.query.locale;
					delete urlParams.query.folderId;
					delete urlParams.query.webmap;
					delete urlParams.query.autoplay;

					$.each(Object.keys(urlParams.query), function(i, k){
						if ( i === 0 ){
							newUrl += '?';
						}
						else {
							newUrl += '&';
						}

						if ( urlParams.query[k] !== undefined && urlParams.query[k] !== "" ) {
							newUrl += k + '=' + urlParams.query[k];
						}
						else {
							newUrl += k;
						}
					});
				}

				return noEncoding ? newUrl : encodeURIComponent(newUrl);
			}

			function showMobileHeader(immediate)
			{
				$(selector + " #headerMobile .banner").slideDown(immediate === true ? 0 : 250);
			}

			function editFieldsEnterEvent()
			{
				if( ! _builderButtonHidden )
					$(selector + " #builderPanel").fadeOut("fast");
				_builderButtonHidden = false;
			}

			function editFieldsExitEvent(src, value)
			{
				_builderButtonHidden = true;
				setTimeout(function(){
					if( _builderButtonHidden )
						$(selector + " #builderPanel").fadeIn("fast");
					_builderButtonHidden = false;
				}, has("ios") || has("ie") >= 10 ? 500 : 100);

				setTimeout(function(){
					topic.publish("HEADER_EDITED", {
						src: $(src).attr("class"),
						value: value
					});
					$(selector + ' #headerMobile .banner .' + $(src).attr("class")).html(value);
				}, has("ios") || has("ie") >= 10 ? 700 : 0);
				app.builder.hideSaveConfirmation();
			}

			this.switchToBuilder = function() 
			{
				if( document.location.search.match(/appid/) )
					document.location = cleanURL(document.location.protocol + '//' + document.location.host + document.location.pathname + document.location.search, true) + "&edit" + document.location.hash;
				else if ( document.location.search.slice(-1) == '?' )
					document.location = cleanURL(document.location.protocol + '//' + document.location.host + document.location.pathname, true) + "?edit"  + document.location.hash;
				else
					document.location = cleanURL(document.location.protocol + '//' + document.location.host + document.location.pathname, true) + "?edit"  + document.location.hash;
			};

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
				$(selector + ' .share_facebook').attr("title", i18n.viewer.desktopView.facebookTooltip);
				$(selector + ' .share_twitter').attr("title", i18n.viewer.desktopView.twitterTooltip);
				$(selector + ' .share_bitly').attr("title", i18n.viewer.desktopView.bitlyTooltip);
			}
		}
	}
);
