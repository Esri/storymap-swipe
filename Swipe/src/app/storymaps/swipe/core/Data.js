define(["storymaps/swipe/core/WebApplicationData",
		"storymaps/utils/Helper"],
	function(WebApplicationData, Helper)
	{
	/**
	 * Data
	 * @class Data
	 *
	 * Application data model
	 */
	return function Data()
	{
	 	var _this = this;
		
		// Web map and Web application JSON
		var _webmapItem = null;
		var _appItem = null;

		this.getWebMapItem = function()
		{
			return _webmapItem;
		}

		this.setWebMapItem = function(webmapItem)
		{
			_webmapItem = webmapItem;
		}

		this.getAppItem = function()
		{
			return _appItem || {};
		}

		this.setAppItem = function(appItem)
		{
			_appItem = appItem;
		}
		
		this.discardChanges = function()
		{
			// 
		}

		this.updateAfterSave = function()
		{
			WebApplicationData.updateAfterSave();
		}
		
		this.getWebAppData = function()
		{
			return WebApplicationData.get();
		}
		
		this.userIsAppOwner = function()
		{
			return (Helper.getPortalUser() != null && Helper.getPortalUser() == this.getAppItem().owner)
					|| (app.portal && app.portal.getPortalUser() && app.portal.getPortalUser().username == this.getAppItem().owner);	
		}
	}
});