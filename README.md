# Swipe

A storytelling template that enables users to reveal a layer of a web map or another web map 
using a vertical bar or a spy glass. This is a new version of the popular swipe template that provide 
a better experience on smartphone and an interactive builder on ArcGIS Online, see [what's new](#whats-new).

![App](https://raw.github.com/Esri/swipe-map-storytelling-template-js/master/storytelling-swipe-map-template-js.png)

[View it live](http://storymaps.esri.com/templates/swipe/) 
| [User Download (source code not included)](https://github.com/Esri/swipe-map-storytelling-template-js/raw/master/Storytelling-Swipe-1.0.zip)
| [Developer Download (include source code)](https://github.com/Esri/swipe-map-storytelling-template-js/archive/master.zip)

**Latest release is version version 1.0**, if you want to be informed of new releases, we recommend you to watch these repository.


Help content:
 * [Introduction](#introduction)
 * [How to deploy a Swipe application](#how-to-deploy-a-swipe-application)
 * [FAQ](#faq)
 * [Feedback](#feedback)
 * [What's new](#whats-new)
 * [Issues](#issues)
 * [Contributing](#contributing)
 * [Customize the look and feel](#customize-the-look-and-feel)
 * [Developer guide](#developer-guide)
 * [Licensing](#licensing)

## Introduction

The template is available in two versions:
 * **An hosted version** in ArcGIS Online that provide hosting and an interactive builder tool to all ArcGIS Online account levels including the free Public account
 * **A downloadable version** that you can deploy on your web server and enhance to fit your needs

So you don't have to download the template to use it! 
We freely host the template for you so you don't have to download the template and put it on your server.
Using the hosted template is the easiest and fastest way to create a Swipe application and you will 
benefits from ArcGIS Online periodic updates  that improve performance and fix issues without 
introducting breaking changes.

If you don't find the option you expect or you are a developer and want to enhance the application, you should use the downloadable version.

Main features are:
* Choose the swipe style between a vertical bar or a spy glass
* Reveal a layer of a webmap or a second web map
* Choose to include a legend and/or a description as a left side panel
* Pop-ups are displayed hover the Map when using the vertical bar and on a right panel when using the spy glass
* Customize the appearance of the pop-ups header to help user associate pop-ups with maps layers


## How to deploy a Swipe application

1. [Download](https://github.com/Esri/swipe-map-storytelling-template-js/raw/master/Storytelling-Swipe-1.0.zip)
2. [Install](#install)
3. [Configure](#configure)
4. [Personalize](#personalize)

Note that a [more complete documentation](https://github.com/Esri/swipe-map-storytelling-template-js/raw/master/Readme.pdf) is included in the downloadable archive.

#### Install

The swipe application require to be deployed on a web server like [Internet Information Services(IIS)](http://www.iis.net/). 

1. Copy the contents of the zip file into your web server's root directory. In IIS, the default location for the web server's root folder is `c:\inetpub\wwwroot`
2. Test the page using the following URL: http://localhost/[template name]/index.html, where [template name] is the name of the folder where you extracted the zip contents.

#### Configure

The minimal steps to configure the application are the following:

1. Find your web map(s) id(s), navigate to [ArcGIS Online](http://www.arcgis.com), and find the map you want to display. If it is one of your maps, make sure it's shared with everyone (public). View the map details and copy the ID from the URL in the top of your browser. The section you need to copy is bolded in the following URL: arcgis.com/home/webmap/viewer.html?webmap= **5ae9e138a17842688b0b79283a4353f6**.
2. Open the index.html file in a text editor and edit the webmaps and layerIndex parameter. 
    - **layout**: choose to use the vertical swipe bar or the spy glass
	- **webmaps**: unique identifier(s) of the web map(s) you want to use
	- **layerIndex**: if using one webmap, dictate the layer index of the layer to be revealed. The value is defined by the order of the layer the web map table of contents (0 is the top layer)

#### Personalize

More customization are accessible through three files :

1. Index.html offers major settings:
	- **popupTitles**: text that appears in pop-up header
	- **popupColors**: popup header background colors
	- **legend**: dictate if the legend panel is displayed in the side panel
	- **description**: dictate if the description panel is displayed in the side panel
	- **sidePanelDescription**: Text that appears in the description panel
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

## FAQ

### Is the template compatible with previous version?
Yes, some configuration parameter changed name but they are all available. 
UI customization will require changes.

### Can I deploy Swipe on Portal for ArcGIS
Yes, you will just need to configure the sharing URL in index.html. 
The interactive builder will be available.
Swipe should be included in future releases of Portal for ArcGIS (after 10.2).

## Feedback

We would love to hear from you!
* Email us at storymaps@esri.com
* [StoryMaps Website](http://storymaps.esri.com/home/)
* [@EsriStoryMaps](http://twitter.com/EsriStoryMaps)
* [ArcGIS Blog](http://blogs.esri.com/esri/arcgis/)

## What's new?

#### Swipe 1.0 released on 07/05/2013
 * Responsive web design that offer a new user experience on Smartphone
 * Offer an interactive builder in ArcGIS Online
 * Choose the swipe style between a vertical bar or a spy glass
 * Popup managment
 * Support revealing graphics layer
 * Localized in 22 languages

## Issues

Find a bug or want to request a new feature?  Please let us know by submitting an issue.

## Contributing

Anyone and everyone is welcome to contribute.

## Customize the look and feel
Most of the look and feel customization can be done using the user download and including the css/html override directly into index.html. 
If you want to change the behavior of one functionality or want to add new one, you will need to read the developer guide below.

The easiest way to find the id or path to the DOM element that you want to customize is to use your browser developer tool, read documentation for for [Chrome](https://developers.google.com/chrome-developer-tools/), [Safari](http://developer.apple.com/library/safari/#documentation/AppleApplications/Conceptual/Safari_Developer_Guide/2SafariDeveloperTools/SafariDeveloperTools.html), [Firefox](https://getfirebug.com/).

Here are some customization examples that have to be included inside a \<style\> element after the \<body\> element like below :

      ...
      <body class="claro">
         <style>
            #element {
               /* changes */
            }
         </style>
      <div id="header">
      ...

#### Use an image as the background of the desktop header

      #headerDesktop {
         background: url('resources/my_background.jpg');
      }

To remove the bottom border:

      #header {
         background: none !important;
      }

#### Customizing the links in the top right of the header

Hide the link to the external website and the social buttons:

      #header .social {
         visibility: hidden; 
      }

Same but reuse the vertical space for the logo:

      #header .social {
         display: none;
      }

Hide only the social buttons:

      #header .social > span:not(.msLink) {
         display: none;
      }

The external link can be configured through swipe-config.js file. 

To hide the text, empty the HEADER_LINK_TEXT property.

To display multiple line text, empty the HEADER_LINK_URL and configure HEADER_LINK_TEXT with html markup like 

      <a href='http://myorganization.com' target='_blank'>My organization</a><br /><a href='http://myorganization.com/myproject' target='_blank'>My project</a>

#### Customizing the header logo

The logo image can be configured through swipe-config.js file. To hide the logo, empty the HEADER_LOGO_URL property.

The logo dimension is constrained to 250x50px. To use more horizontal or vertical space you need to remove this restriction using:

      #headerDesktop .logo img {
         max-width: none;
         max-height: 90px;
      }
      
You can save 10 more px by changing the top margin of the logo:

      #headerDesktop .rightArea {
         padding-top: 15px;
      }

      #headerDesktop .logo img {
         max-width: none;
         max-height: 100px;
      }


## Developer guide

This developer guide is intended to developer that wants to modify behavior or add new functionalities to the Swipe application. If you only need to customize look and feel of the application, you should be able to do so using the User download.
It requires basic knowledge of HTML, Javascript and CSS languages.

### Developer archive

Download and unzip the [Developer download](https://github.com/Esri/swipe-map-storytelling-template-js/archive/master.zip) or clone the repo.

| File                                       | Contains                                                              |
| ------------------------------------------ | --------------------------------------------------------------------- |
| **Swipe/**            	             | Swipe source folder                                                |
| **Swipe/src/**                             | The application source code                                           |
| **Swipe/deploy/**                          | The ready to be deployed Swipe application                         |
| **Swipe/tools/**                           | Developer tools to build deploy/ from src/                            |
| Storytelling-Swipe-1.0.zip      	     | User download archive	                                             |
| Readme.pdf       		             | The detailed readme guide                                             |
| Readme.md                                  | This document                                                         |
| storytelling-swipe-map-template-js.png     | The application screenshot                                            |
| license.txt                                | The application license                                               |


### Introduction

To build a production version of the application from the source code, you need:
 * a Windows OS 
 * [Node.js](http://nodejs.org/)
 * [Java Runtime version 6 or higher](http://www.oracle.com/technetwork/java/javase/downloads/jre7-downloads-1880261.html)

The build script use: 
 * [RequireJS](http://requirejs.org/) to optimize the Swipe code 
 * [Google Closure Compiler](https://developers.google.com/closure/compiler/) and [YUI Compressor](http://yui.github.com/yuicompressor/) to optimize external dependencies

 The script will be ported to a full node.js later on. 

### Design
Swipe relies on AMD and Dojo loader [AMD](http://help.arcgis.com/en/webapi/javascript/arcgis/jshelp/#inside_dojo_amd) for application structure.

The application is structured as this:

| Path          			                  	| Contains																				|
| ---------------------------------------------	|  ------------------------------------------------------------------------------------ |
| app/      				                     	| Package structured Javascript and CSS source code 									|
| app/swipe-config.js			            	| Configuration file (loaded at execution time) 										|
| app/storymaps/builder/		         		| Builder modules common with other storymaps templates (main module is Builder.js)		|
| app/storymaps/core/		         			| Core modules common with other storymaps templates (main module is Core.js)			|
| app/storymaps/swipe/builder/	         	| UI components of the interactive builder (main module is BuilderView.js) 				|
| app/storymaps/swipe/core/		         	| Core modules (main module is MainView.js) 											|
| app/storymaps/swipe/ui/ 		         	| UI components of the viewer grouped by target device 									|
| app/storymaps/swipe/ui/Responsive.css      	| CSS Media queries rules							 									|
| app/storymaps/swipe/BuildConfigBuilder.js 	| Require.js build configuration file for the interactive builder						|
| app/storymaps/swipe/BuildConfigViewer.js 	| Require.js build configuration file for the viewer 									|
| app/storymaps/ui/ 			               	| UI components common with other storymaps templates 									|
| app/storymaps/utils/ 			            	| Utility modules common with other storymaps templates  								|
| lib/ 					                     	| External dependencies 																|
| resources/nls/                  				| Externalized text strings of the application  										|														|
| resources/icons/ 			               		| Icons 																				|

The main dependencies are:
 * [jQuery](http://jquery.com/)
 * [Bootstrap](http://twitter.github.com/bootstrap/)

### How to use the application from the source code
 * Make accessible the src folder to your web server
 * Edit index.html to the web map you want to use

### How to build application from the source code
  * Open a terminal and navigate to the tools folder 
  * Run the following command:

        build.bat

The deploy folder now contains the built application that you can deploy to your web server.


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
