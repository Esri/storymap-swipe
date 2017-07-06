APPCFG = {
	//
	// UI
	//

	// Enable embed mode: disable header on desktop
	// Can also be set through url parameter ?embed
	EMBED: false,

	// Header Logo
	HEADER_LOGO_URL: "resources/icons/esri-logo-white.png",
	HEADER_LOGO_TARGET: "http://www.esri.com",
	// Header top right link
	HEADER_LINK_TEXT: "A story map",
	HEADER_LINK_URL: "http://storymaps.arcgis.com/",
	// Control display of Facebook and Twitter links
	HEADER_SOCIAL: {
		facebook: true,
		twitter: true,
		bitly: {
			enable: true,
			login: "esristorymaps",
			key: "R_14fc9f92e48f7c78c21db32bd01f7014"
		}
	},

	// Header and panel background colors
	COLORS: ["#444", "#FFF"],

	TIMEOUT_VIEWER_LOAD: 64000,
	TIMEOUT_VIEWER_REQUEST: 60000,
	TIMEOUT_BUILDER_REQUEST: 60000,

	//
	// Builder
	//

	DEFAULT_SHARING_URL: "//www.arcgis.com/sharing/content/items",
	DEFAULT_PROXY_URL: "//www.arcgis.com/sharing/proxy",

	COLOR_SCHEMES:  [
		// COLORS is added as the first item at runtime
		{name: "Black", headerColor: "#000", panelColor: "#FFF"},
		{name: "Blue", headerColor: "#0e3867", panelColor: "#FFF"},
		{name: "Green", headerColor: "#1a3606", panelColor: "#FFF"}
	],

	WEBAPP_KEYWORD_GENERIC: ["JavaScript", "Map", "Mapping Site", "Online Map", "Ready To Use", "selfConfigured", "Web Map"],
	WEBAPP_KEYWORD_APP: ["Story Map", "Story Maps", "SwipeSpyglass"],

	//
	// Portal configuration
	//

	// Optional array of servers that will leverage CORS (for development or specific cross domain deployment)
	CORS_SERVER: [],

	// Optional array of proxy rules
	PROXY_RULES: [
		/*{
			urlPrefix: "http://services.arcgis.com/",
			proxyUrl: "http://myserver.domain.com/DotNet/proxy.ash"
		}*/
	],

	BING_MAPS_KEY: "",
	HELPER_SERVICES: {
		geometry: {
			//url: location.protocol + "//utility.arcgisonline.com/ArcGIS/rest/services/Geometry/GeometryServer"
		},
		geocode: [
			/*
			{
				url: location.protocol + "//geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer",
				name: "My Geocoder"
			}
			*/
		]
	},

	// Edit those to set a custom sharing or proxy URL
	// You have to edit those only if your webmap is deployed on Portal for ArcGIS instance and if you are not deploying the template on the Portal webserver
	// If you are using ArcGIS Online or deploying the template on a Portal instance, you don't have to edit those URL
	DEFAULT_SHARING_URL: "//www.arcgis.com/sharing/content/items",
	//DEFAULT_SHARING_URL: "//portal.internal.com/arcgis/sharing/content/items",
	DEFAULT_PROXY_URL: "//www.arcgis.com/sharing/proxy"
	//DEFAULT_PROXY_URL: "//portal.internal.com/arcgis/sharing/proxy"
};
