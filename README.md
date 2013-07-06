# swipe-map-storytelling-template-js

A storytelling template that enables users to view and compare two layers of a web map or two web maps using a vertical bar or a spy glass. This is a new version of the popular swipe template that provide a better experience on smartphone and an interactive builder on ArcGIS Online, see what's new.

[View live app here](http://storymaps.esri.com/templates/swipe/)

![App](https://raw.github.com/Esri/swipe-map-storytelling-template-js/master/storytelling-swipe-map-template-js.png)

## Features
* Choose the swipe style between a vertical bar or a spy glass
* Reveal a layer of a webmap or a second web map
* Choose to include a legend and/or a description as a left side panel
* Pop-ups are displayed hover the Map when using the vertical bar and on a right panel when using the spy glass
* Customize the appearance of the pop-ups header to help user associate pop-ups with maps layers

## Instructions

1. [Install the web application](#install-the-web-application)
2. [Configure the application](#configure-the-application)
3. [Personalize the application](#personalize-the-application)

[A more complete readme is available here](https://github.com/Esri/swipe-map-storytelling-template-js/raw/master/Readme.pdf) 
| [New to Github? Get started here.](http://htmlpreview.github.com/?https://github.com/Esri/esri.github.com/blob/master/help/esri-getting-to-know-github.html)

#### Install the web application

These instructions assume that you have a Web server like [Internet Information Services(IIS)](http://www.iis.net/) installed and setup on your machine. If you are using another Web server the general installation steps will be the same but you will need to check your Web server's documentation for specific information on deploying and testing the application.

1. Copy the contents of the zip file into your web server's root directory. In IIS, the default location for the web server's root folder is `c:\inetpub\wwwroot`
2. (Optional). If your application edits features in a feature service or generates requests that exceed 2000 characters you may need to setup and use a proxy page. Common situations where you may exceed the URL length are, using complext polygons as input to a task or specifying a spatial reference using well-known text (wkt). View the [Using the proxy page](http://help.arcgis.com/en/webapi/javascript/arcgis/jshelp/#ags_proxy) help topic for details on installing and configuring a proxy page.
3. Test the page using the following URL: http://localhost/[template name]/index.html, where [template name] is the name of the folder where you extracted the zip contents.

#### Configure the application

The minimal steps to configure the application are the following:

1. Find your web map(s) id(s), navigate to [ArcGIS Online](http://www.arcgis.com), and find the map you want to display. If it is one of your maps, make sure it's shared with everyone (public). View the map details and copy the ID from the URL in the top of your browser. The section you need to copy is bolded in the following URL: arcgis.com/home/webmap/viewer.html?webmap= **5ae9e138a17842688b0b79283a4353f6**.
2. Open the index.html file in a text editor and edit the webmaps and layerIndex parameter. 
    - **layout**: choose to use the vertical swipe bar or the spy glass
	- **webmaps**: unique identifier(s) of the web map(s) you want to use
	- **layerIndex**: if using one webmap, dictate the layer index of the layer to be revealed. The value is defined by the order of the layer the web map table of contents (0 is the top layer)

#### Personalize the application

More customization are accessible through three files :

1. Index.html offers major settings:
	- **popupTitles**: text that appears in pop-up header
	- **popupColors**: popup header background colors
	- **legend**: dictate if the legend panel is displayed in the side panel
	- **description**: dictate if the description panel is displayed in the side panel
	- **sidePanelDescription**: Text that appears in the description panel. Valid HTML string expected
    - **title**: if not specified the ArcGIS.com map's title is used
    - **subtitle**: if not specified the ArcGIS.com webmap's summary is used
2. app/swipe-config.js offers to customize the header and the application colors:
    - **HEADER_LOGO_URL**: path to the header logo image (blank to disable)
	- **HEADER_LOGO_TARGET**: logo click-through link
	- **HEADER_LINK_TEXT**: header top-right link text
	- **HEADER_LINK_URL**: header top-right link URL
	- **COLORS**: header and panel background colors
3. commonConfig.js contains the optional Bing Maps key:
    - **bingMapsKey**: if the map uses data from Bing Maps, enter your Bing Maps Key

## Feedback

We would love to hear from you!
* Email us at storymaps@esri.com
* [StoryMaps Website](http://storymaps.esri.com/home/)
* [@EsriStoryMaps](http://twitter.com/EsriStoryMaps)
* [ArcGIS Blog](http://blogs.esri.com/esri/arcgis/)

## Issues

Find a bug or want to request a new feature?  Please let us know by submitting an issue.

## Contributing

Anyone and everyone is welcome to contribute.

## Licensing
Copyright 2012 Esri

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

A copy of the license is available in the repository's [license.txt](https://raw.github.com/Esri/swipe-map-storytelling-template-js/master/license.txt) file.

[](Esri Tags: ArcGIS-Online Template Storytelling Swipe)
[](Esri Language: JavaScript)