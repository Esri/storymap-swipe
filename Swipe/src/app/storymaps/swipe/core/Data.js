define(["storymaps/swipe/core/WebApplicationData",
		"storymaps/utils/Helper",
		"esri/layers/FeatureLayer",],
	function(WebApplicationData, Helper, FeatureLayer)
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
		var _webmapItem2 = null;
		var _appItem = null;
		
		// App proxies
		var _appProxies = null;
		
		// Reference to the map layer created through arcgisUtils.createMap
		// This layer is hidden and only used to save data
		var _sourceLayer = null;
		
		this.getSourceLayer = function()
		{
			return _sourceLayer;
		};

		this.getWebMapItem = function()
		{
			return _webmapItem;
		}

		this.setWebMapItem = function(webmapItem)
		{
			_webmapItem = webmapItem;
		}
		
		this.getAppProxies = function()
		{
			return _appProxies;
		};
		
		this.setAppProxies = function(appProxies)
		{
			_appProxies = appProxies;
		};
		
		this.getWebMapItem2 = function()
		{
			return _webmapItem2;
		}

		this.setWebMapItem2 = function(webmapItem2)
		{
			_webmapItem2 = webmapItem2;
		}

		this.getAppItem = function()
		{
			return _appItem || {};
		}

		this.setAppItem = function(appItem)
		{
			_appItem = appItem;
		}
		
		/**
		 * Return true if the web map data source containing the Map Tour data is a Feature Layer
		 */
		this.sourceIsFS = function()
		{
			return _sourceLayer instanceof FeatureLayer && _sourceLayer.url != null;
		};
		
		this.getFSSourceLayerItemId = function()
		{
			var sourceLayerItemId = null;
			
			if ( ! this.sourceIsFS() )
				return sourceLayerItemId;
			
			$.each(_webmapItem.itemData.operationalLayers, function(i, layer){
				if( layer.id == _sourceLayer.id )
					sourceLayerItemId = layer.itemId;
			});
			return sourceLayerItemId;
		};
		
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
			var portalUser = app.portal ? app.portal.getPortalUser() : null;
			
			return  (portalUser && portalUser.username == this.getAppItem().owner)
					|| (Helper.getPortalUser() != null && Helper.getPortalUser() == this.getAppItem().owner)
					// Admin privilege
					|| (portalUser && portalUser.privileges && $.inArray("portal:admin:updateItems", portalUser.privileges) > -1 )
					|| this.getAppItem().itemControl == "admin"
					// Group with shared ownership
					|| this.getAppItem().itemControl == "update";
		}
		
		this.checkUserItemPrivileges = function()
		{
			var portalUser = app.portal ? app.portal.getPortalUser() : null;
			
			return (portalUser && ! portalUser.orgId && ! portalUser.privileges)
					|| (portalUser && portalUser.privileges && $.inArray("portal:user:createItem", portalUser.privileges) > -1);
		};
		
		this.isOrga = function()
		{
			if ( ! app.portal || ! app.portal.getPortalUser() )
				return false;
			
			return !! app.portal.getPortalUser().orgId;
		};
	}
});