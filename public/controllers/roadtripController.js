
roadtripApp.controller('RoadTripController', ['MapService', function(MapService){
  var self = this;

  MapService.maps(MapService.generateMap);

  self.currentCity = function(){
    return MapService.cities.filter(mostRecentCity)[0];
  }

  function mostRecentCity(city){
    var recentArrivalDate = MapService.cities.map(arrayOfArrivalDates).sort()[0];
    return city.arrival == recentArrivalDate;
  };

  function arrayOfArrivalDates(city){
    return city.arrival
  }

}])
