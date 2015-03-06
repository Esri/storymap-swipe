define(["dojo/_base/lang", "esri/geometry/Extent"], function(lang, Extent){
	/**
	 * WebApplicationData
	 * @class WebApplicationData
	 * 
	 * Store the Web mapping Application /data request
	 */
	
	var _originalData = {};
	var _data = { 
		values: {}
	};
	
	return {
		set: function(data)
		{
			_originalData = lang.clone(data);
			
			if( ! data || ! data.values )
				return;
			
			_data = data;
			
			// Instance Extent Object for bookmarks
			if( _data.values.bookmarks ) {
				$.each(_data.values.bookmarks, function(i, bkmk){
					bkmk.extent = new Extent(bkmk.extent);
				});
			}
		},
		get: function()
		{
			app.sidePanel.checkDescription(true);
			var data = lang.clone(_data);
			
			if( ! data.values.template )
				data.values.template = "Swipe";
			if( ! data.values.templateCreation )
				data.values.templateCreation = version;
			
			data.values.templateLastEdit = version;
			
			return data;
		},
		getBlank: function()
		{
			return {
				values: {
					webmap: _data.values.webmap
				}
			};
		},
		restoreOriginalData: function()
		{
			this.set(_originalData);
		},
		updateAfterSave: function()
		{
			_originalData = lang.clone(_data);
		},
		getWebmap: function(condition)
		{
			if( _data.values.webmap )
				return _data.values.webmap 
			if( condition == false )
				return null
				
			return configOptions.webmap;
		},
		setWebmap: function(webmap)
		{
			_data.values.webmap = webmap;
		},
		getWebmaps: function(condition)
		{
			if( _data.values.webmaps )
				return _data.values.webmaps;
			if( _data.values.webmap )
				return [_data.values.webmap];
			if( condition == false )
				return null
			
			return configOptions.webmaps;
		},
		setWebmaps: function(webmaps)
		{
			_data.values.webmaps = webmaps;
		},
		getLayers: function()
		{
			if( _data.values.layers )
				return _data.values.layers;
			
			if( ! app.maps[0] && ! app.map)
				return null;
				
			var mainMap = app.mode == "TWO_LAYERS" ? app.map : app.maps[0];

			var layers = mainMap.layerIds || [];
			layers = layers.concat(mainMap.graphicsLayerIds);
			
			var layer = layers[layers.length - 1 - configOptions.layerIndex];
			if( layer )
				return [layer];

			if ( mainMap.layerIds[0] )
				return [mainMap.layerIds[mainMap.layerIds.length-1]];
			return null;
		},
		setLayers: function(layers)
		{
			_data.values.layers = layers;
		},
		getDataModel: function()
		{
			return _data.values.dataModel;
		},
		setDataModel: function(dataModel)
		{
			_data.values.dataModel = dataModel;
		},
		getPopupTitles: function()
		{
			return _data.values.popupTitles || configOptions.popupTitles;
		},
		setPopupTitles: function(titles)
		{
			_data.values.popupTitles = titles;
		},
		getPopupColors: function()
		{
			return _data.values.popupColors || configOptions.popupColors;
		},
		setPopupColors: function(colors)
		{
			_data.values.popupColors = colors;
		},
		getTitle: function()
		{
			return _data.values.title || configOptions.title;
		},
		setTitle: function(title)
		{
			_data.values.title = title;
		},
		getSubtitle: function()
		{
			return _data.values.subtitle || configOptions.subtitle;
		},
		setSubtitle: function(subtitle)
		{
			_data.values.subtitle = subtitle;
		},
		setColors: function(color1, color2) 
		{
			_data.values.colors = color1 + ';' + color2;
		},
		getColors: function()
		{
			return _data.values.colors ? _data.values.colors.split(';') : APPCFG.COLORS;
		},
		setLogoURL: function(url)
		{
			_data.values.logoURL = url;
		},
		getLogoURL: function()
		{
			return _data.values.logoURL;
		},
		setLogoTarget: function(url)
		{
			_data.values.logoTarget = url;
		},
		getLogoTarget: function()
		{
			return _data.values.logoTarget;
		},
		getLayout: function()
		{
			return _data.values.layout || configOptions.layout;
		},
		setLayout: function(layout)
		{
			_data.values.layout = layout;
		},
		getLegend: function()
		{
			return _data.values.legend != null ? _data.values.legend : configOptions.legend;
		},
		setLegend: function(legend)
		{
			_data.values.legend = legend;
		},
		getPopup: function()
		{
			return _data.values.popup != null ? _data.values.popup : configOptions.popup;
		},
		setPopup: function(popup)
		{
			_data.values.popup = popup;
		},
		getLocationSearch: function()
		{
			return _data.values.locationSearch != null ? _data.values.locationSearch : configOptions.locationSearch;
		},
		setLocationSearch: function(locationSearch)
		{
			_data.values.locationSearch = locationSearch;
		},
		getGeolocator: function()
		{
			return _data.values.geolocator != null ? _data.values.geolocator : configOptions.geolocator;
		},
		setGeolocator: function(geolocator)
		{
			_data.values.geolocator = geolocator;
		},
		getDescription: function()
		{
			return _data.values.description != null ? _data.values.description : configOptions.description;
		},
		setDescription: function(description)
		{
			_data.values.description = description;
		},
		getBookmarks: function()
		{
			return _data.values.bookmarks || configOptions.bookmarks;
		},
		setBookmarks: function(bookmarks)
		{
			_data.values.bookmarks = bookmarks;
		},
		getHeaderLinkText: function()
		{
			return _data.values.headerLinkText;
		},
		getHeaderLinkURL: function()
		{
			return _data.values.headerLinkURL;
		},
		setHeaderLink: function(linkText, linkURL)
		{
			_data.values.headerLinkText = linkText;
			_data.values.headerLinkURL = linkURL;
		},
		getSidePanelDescription: function()
		{
			return _data.values.sidePanelDescription || configOptions.sidePanelDescription;
		},
		setSidePanelDescription: function(description)
		{
			_data.values.sidePanelDescription = description;
		},
		getSeries: function()
		{
			return _data.values.series || configOptions.series;
		},
		setSeries: function(series)
		{
			_data.values.series = series;
		},
		getSeriesBookmarks: function()
		{
			if( configOptions.bookmarks && configOptions.bookmarks.length ) {
				$.each(configOptions.bookmarks, function(i, bkmk){
					bkmk.extent = new Extent(bkmk.extent);
				});
				return configOptions.bookmarks;
			}
			
			return _data.values.bookmarks || [];
		},
		setSeriesBookmarks: function(bookmarks)
		{
			if(bookmarks && bookmarks.length)
				_data.values.bookmarks = bookmarks;
		},
		getSocial: function()
		{
			return _data.values.social;
		},
		setSocial: function(social)
		{
			_data.values.social = social;
		}
	}
});