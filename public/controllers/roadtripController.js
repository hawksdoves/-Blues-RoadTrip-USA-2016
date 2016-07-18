
roadtripApp.controller('RoadTripController', ['MapService', '$routeParams', '$location', '$q', 'LocationService', function(MapService, $routeParams, $location, $q, LocationService){
  var self = this;

  var citiesRequest = LocationService.getLocations();
  $q.all([citiesRequest]).then(function(){
    MapService.generateMap(LocationService.cities);
  });

  self.allCities = function(){
    return LocationService.cities;
  }
  self.currentCity = function(){
    return LocationService.cities.filter(mostRecentCity)[0];
  }

  function mostRecentCity(city){
    var recentArrivalDate = LocationService.cities.map(arrayOfArrivalDates).sort().pop();
    return city.arrival == recentArrivalDate;
  };

  function arrayOfArrivalDates(city){
    return city.arrival
  }

}])
