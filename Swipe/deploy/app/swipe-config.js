APPCFG = {
	//
	// UI
	//
	
	// Header Logo
	HEADER_LOGO_URL: "resources/icons/esri-logo.png",
	HEADER_LOGO_TARGET: "http://www.esri.com",
	// Header top right link
	HEADER_LINK_TEXT: "A story map",
	HEADER_LINK_URL: "http://storymaps.esri.com/home/",
	// Header and panel background colors 
	COLORS: ["#444", "#FFF"],
	
	MINIMUM_MAP_WIDTH: 450,
	TIMEOUT_VIEWER_LOAD: 12000,
	TIMEOUT_VIEWER_REQUEST: 8000,
	TIMEOUT_BUILDER_REQUEST: 20000,
	
	//
	// Builder
	//
	
	DEFAULT_SHARING_URL: "//www.arcgis.com/sharing/content/items",
	COLOR_SCHEMES:  [
		// COLORS is added as the first item at runtime
		{name: "Black", headerColor: "#000", panelColor: "#FFF"},
		{name: "Blue", headerColor: "#0e3867", panelColor: "#FFF"},
		{name: "Green", headerColor: "#1a3606", panelColor: "#FFF"}
	],
	// Optional array of server that will leverage CORS (for developement or specific cross domain deployment)
	CORS_SERVER: []
};