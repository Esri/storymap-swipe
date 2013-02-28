{
  "configurationSettings":[{
    "category": "<b>Application Settings</b>",
    "fields": [{
      "type": "string",
      "fieldName": "title",
      "tooltip": "Specify a title for the application",
      "placeHolder": "Title",
      "label": "Title:"
    },{
      "type": "string",
      "fieldName": "subtitle",
      "tooltip": "Specify a subtitle for the application",
      "placeHolder": "Subtitle",
      "label": "Subtitle:"
    },{
      "type": "string",
      "fieldName": "swipe",
      "tooltip": "Must be an interger",
      "placeHolder": "1",
      "label": "Swipe Layer:"
    },{
      "type": "paragraph",
      "value": "Configure the layer you wish to swipe away by entering an integer between zero and the number of layers stored in your webmap (including your basemap). A number too large will display the following error: Unable to create map: Cannot read property ‘value’ of undefined."
    },{
      "type": "paragraph",
      "value": "This application will combine all graphic layers (those stored as CSV, Feature Layer, Shapefile, Map Notes, etc.) into a single layer. Therefore, you cannot swipe away a single graphic’s layer to reveal a second graphics layer."
    },{
      "type": "boolean",
      "fieldName": "legend",
      "label": "Display legend",
      "tooltip": ""
    }]
  }],
    "values":{
    }
}