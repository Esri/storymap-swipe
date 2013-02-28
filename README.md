# swipe-map-storytelling-template-js

A storytelling template that displays a webmap in a viewer with a "swipe" functionality that enables users to compare two "stacked" layers in ArcGIS Online webmap. Users can move the swipe bar to reveal the second layer underneath.

[View live app here](http://storymaps.esri.com/templates/swipe/)

![App](https://raw.github.com/Esri/swipe-map-storytelling-template-js/master/images/storytelling-swipe-map-template-js.png)

## Features
* Swipe capability to compare two layers of a ArcGIS Online webmap.
* Includes a banner section to display a title and subtitle.
* Retractable legend.

## Instructions

1. [Install the web applciation](#install-the-web-application)
2. [Configure the application](#configure-the-application)
3. [Personalize the application](#personalize-the-application)

#### Install the web application

These instructions assume that you have a Web server like [Internet Information Services(IIS)](http://www.iis.net/) installed and setup on your machine. If you are using another Web server the general installation steps will be the same but you will need to check your Web server's documentation for specific information on deploying and testing the application.

1. Copy the contents of the zip file into your web server's root directory. In IIS, the default location for the web server's root folder is `c:\inetpub\wwwroot`
2. (Optional). If your application edits features in a feature service or generates requests that exceed 2000 characters you may need to setup and use a proxy page. Common situations where you may exceed the URL length are, using complext polygons as input to a task or specifying a spatial reference using well-known text (wkt). View the [Using the proxy page](http://help.arcgis.com/en/webapi/javascript/arcgis/jshelp/#ags_proxy) help topic for details on installing and configuring a proxy page.
3. Test the page using the following URL: http://localhost/[template name]/index.html, where [template name] is the name of the folder where you extracted the zip contents.

#### Configure the application

Now let's configure the application to use a different ArcGIS Online group, title or subtitle.

1. Every map on ArcGIS Online has a unique identifier. To find the map id, navigate to [ArcGIS Online](http://www.arcgis.com), and find the map you want to display. If it is one of your maps, make sure it's shared with everyone (public). View the map details and copy the ID from the URL in the top of your browser. The section you need to copy is bolded in the following URL: arcgis.com/home/webmap/viewer.html?webmap= **5ae9e138a17842688b0b79283a4353f6**.
2. Open the index.html file in a text editor. You can edit this file to set the following application properties:
    - **webmap**: unique identifier for the ArcGIS Online map.
    - **title**: if not specified the ArcGIS.com map's title is used.
    - **subtitle**: if not specified the ArcGIS.com webmap's summary is used.
    - **bingMapsKey**: if the map uses data from Bing Maps, enter your Bing Maps Key.
    - **showLegend**: Choose if legend is displayed with map.
    - **chooseSwipeLevel**: Choose the layer you wish to swipe away (Note: enter an integer with 0 being all the graphic layers then increasing to each additional map layer).
3. Save the file then test your application and note that it now displays your application and if specified your custom title and subtitle.

#### Personalize the application

You can personalize your site by adding a custom logo to the application's header next to the map title.

1. First copy your custom logo to the images subdirectory.
2. Open layout.css in a text editor.
3. Find the section of code that has an id of "logoArea" and add the following attribute.

        background:url(../images/yourImage.png) top left no-repeat;

4. Run the application and the custom logo should appear to the left of the title in the application header.

[New to Github? Get started here.](http://htmlpreview.github.com/?https://github.com/Esri/esri.github.com/blob/master/help/esri-getting-to-know-github.html)

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

A copy of the license is available in the repository's [license.txt](https://raw.github.com/Esri/swipe-map-storytelling-template-js/master/license.txt) file.

[](Esri Tags: ArcGIS-Online Template Storytelling Swipe)
[](Esri Language: JavaScript)
