A storytelling template for publishing an ArcGIS webmap to a general audience (Available as a hosted template on ArcGIS Online)

# storytelling-basic-map-template-js

A storytelling template for publishing an ArcGIS webmap to a general audience. The template lets the map do most of the talking: its simple design features map, title, sub-title, and retractable legend.

This template is part of the ArcGIS Online template gallery. These templates can be accessed from the ArcGIS Online's map viewer Share window or from the Web Application Templates group. When accessed from the map viewer the templates can be published as a hosted application or you can download the template ZIP file to install on your web server.

[View live app here](http://storymaps.esri.com/templates/basic/)

![App](https://raw.github.com/Esri/switch-basemaps-js/master/switch-basemaps-js.png)

## Features
* A simple map viewer for an ArcGIS Online webmap.
* Includes a banner section to display a title and subtitle.
* Retractable legend.

## Instructions

1. [Install the web applciation](#-install-the-web-application)
2. [Configure the application](#-configure-the-application)
3. [Personalize the application](#-personalize-the-application)

###### Install the web application

These instructions assume that you have a Web server like [Internet Information Services(IIS)](http://www.iis.net/) installed and setup on your machine. If you are using another Web server the general installation steps will be the same but you will need to check your Web server's documentation for specific information on deploying and testing the application.

1. Copy the contents of the zip file into your web server's root directory. In IIS, the default location for the web server's root folder is `c:\inetpub\wwwroot`
2. (Optional). If your application edits features in a feature service or generates requests that exceed 2000 characters you may need to setup and use a proxy page. Common situations where you may exceed the URL length are, using complext polygons as input to a task or specifying a spatial reference using well-known text (wkt). View the [Using the proxy page](http://help.arcgis.com/EN/webapi/javascript/arcgis/help/jshelp_start.htm#jshelp/ags_proxy.htm) help topic for details on installing and configuring a proxy page.
3. Test the page using the following URL: http://localhost/[template name]/index.html, where [template name] is the name of the folder where you extracted the zip contents.

[Instructions](#-instructions)

## Requirements

* Notepad or HTML editor
* A little background with HTML/CSS/Javascript
* Experience with the [ArcGIS Javascript API](http://links.esri.com/javascript) would help.

## Resources

* [ArcGIS for JavaScript API Resource Center](http://help.arcgis.com/en/webapi/javascript/arcgis/index.html)
* [ArcGIS Blog](http://blogs.esri.com/esri/arcgis/)
* [Esri Storytelling with Maps](http://storymaps.esri.com)

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

A copy of the license is available in the repository's [license.txt]( https://raw.github.com/Esri/switch-basemaps-js/master/license.txt) file.
