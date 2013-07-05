define(
[],
function() {
  var config = {
    bingMapsKey:"",   
    helperServices: {
       geometry:{
        url: location.protocol + "//utility.arcgisonline.com/ArcGIS/rest/services/Geometry/GeometryServer"
       }
    }
  };
  commonConfig = config;
  return config;  
});