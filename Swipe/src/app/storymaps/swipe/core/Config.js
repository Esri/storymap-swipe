define([], function(){
	return {
		checkConfigFileIsOK: function()
		{
			return APPCFG
				&& APPCFG.COLORS && APPCFG.COLORS.length == 2
				&& APPCFG.COLOR_SCHEMES
				&& APPCFG.DEFAULT_SHARING_URL 
				&& APPCFG.MINIMUM_MAP_WIDTH 
				&& APPCFG.TIMEOUT_VIEWER_LOAD
				&& APPCFG.TIMEOUT_VIEWER_REQUEST
				&& APPCFG.TIMEOUT_BUILDER_REQUEST
				&& APPCFG.HEADER_LOGO_URL != undefined 
				&& APPCFG.HEADER_LOGO_TARGET != undefined
				&& APPCFG.HEADER_LINK_TEXT != undefined
				&& APPCFG.HEADER_LINK_URL != undefined
				&& APPCFG.CORS_SERVER;
		}
	}
});