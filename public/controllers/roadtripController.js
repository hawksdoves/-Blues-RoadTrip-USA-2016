
roadtripApp.controller('RoadTripController', ['MapService', function(MapService){
  var self = this;

  MapService.maps(MapService.generateMap);

  self.currentCity = function(){
    return "hello";
    //return MapService.cities.map(mostRecentCity).sort()[0]
  }

  function mostRecentCity(city){
    return city.arrival;
  };

}])
