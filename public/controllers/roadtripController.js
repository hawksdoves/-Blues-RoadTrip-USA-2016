
roadtripApp.controller('RoadTripController', ['MapService', '$routeParams', '$location', function(MapService, $routeParams, $location){
  var self = this;

  MapService.maps(MapService.generateMap);

  self.allCities = function(){
    return MapService.cities;
  }
  self.currentCity = function(){
    return MapService.cities.filter(mostRecentCity)[0];
  }

  self.cityId = $routeParams.params;

  console.log($routeParams);
  console.log($location.search()._id);

  function mostRecentCity(city){
    var recentArrivalDate = MapService.cities.map(arrayOfArrivalDates).sort()[0];
    return city.arrival == recentArrivalDate;
  };

  function arrayOfArrivalDates(city){
    return city.arrival
  }

  // self.goTo = function(cityID){
  //   var req = {
  //     method: 'GET',
  //     url: '/roadtrip/location/'+cityID,
  //     headers: { 'Content-Type': 'application/json' },
  //     data: JSON.stringify({  id: cityID })
  //   };

    $http(req);
  }




}])
