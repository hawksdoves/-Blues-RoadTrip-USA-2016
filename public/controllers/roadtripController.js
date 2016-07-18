
roadtripApp.controller('RoadTripController', ['MapService', '$routeParams', '$location', '$q', function(MapService, $routeParams, $location, $q){
  var self = this;

  var citiesRequest = MapService.getLocations();
  $q.all([citiesRequest]).then(function(){
    MapService.generateMap(MapService.cities);
  });

  self.allCities = function(){
    return MapService.cities;
  }
  self.currentCity = function(){
    return MapService.cities.filter(mostRecentCity)[0];
  }

  function mostRecentCity(city){
    var recentArrivalDate = MapService.cities.map(arrayOfArrivalDates).sort().pop();
    return city.arrival == recentArrivalDate;
  };

  function arrayOfArrivalDates(city){
    return city.arrival
  }

}])
