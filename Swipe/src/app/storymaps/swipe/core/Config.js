define([], function(){
	return {
		checkConfigFileIsOK: function()
		{
			return APPCFG
				&& APPCFG.COLORS && APPCFG.COLORS.length == 2
				&& APPCFG.COLOR_SCHEMES
				&& APPCFG.DEFAULT_SHARING_URL 
				&& APPCFG.DEFAULT_PROXY_URL 
				&& APPCFG.TIMEOUT_VIEWER_LOAD
				&& APPCFG.TIMEOUT_VIEWER_REQUEST
				&& APPCFG.TIMEOUT_BUILDER_REQUEST
				&& APPCFG.EMBED !== undefined
				&& APPCFG.HEADER_LOGO_URL != undefined 
				&& APPCFG.HEADER_LOGO_TARGET != undefined
				&& APPCFG.HEADER_LINK_TEXT != undefined
				&& APPCFG.HEADER_LINK_URL != undefined
				&& APPCFG.HEADER_SOCIAL 
				&& APPCFG.CORS_SERVER;
		}
	}
});