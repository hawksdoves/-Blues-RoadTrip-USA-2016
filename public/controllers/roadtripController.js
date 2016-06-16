
roadtripApp.controller('RoadTripController', ['MapService', '$routeParams', '$location', function(MapService, $routeParams, $location){
  var self = this;

  MapService.maps(MapService.generateMap);

  self.allCities = function(){
    return MapService.cities;
  }
  self.currentCity = function(){
    return MapService.cities.filter(mostRecentCity)[0];
  }

  self.viewCity = function(){
    return MapService.cities.filter(workPlease)[0];
  }

  console.log('$location: ', $location);
  console.log('$location.path(): ', $location.path());
  console.log('$location.path(): ', $location.path().split("/").pop());

  function mostRecentCity(city){
    var recentArrivalDate = MapService.cities.map(arrayOfArrivalDates).sort()[0];
    return city.arrival == recentArrivalDate;
  };

  function arrayOfArrivalDates(city){
    return city.arrival
  }


  function workPlease(city){
    return city._id == $location.path().split("/").pop();
  }

}])
