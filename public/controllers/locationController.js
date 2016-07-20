roadtripApp.controller('LocationController', ['LocationService', 'ActivityService', '$http', 'MapService', '$routeParams', '$location', '$q', '$rootScope', function(LocationService, ActivityService, $http, MapService, $routeParams, $location, $q, $rootScope){
  var self = this;

  self.sendToDB = function(locationInfo){
      LocationService.postToDB(locationInfo);
  }

  self.hasURL = function(activity){
    return !!activity.url
  }

  var citiesRequest = LocationService.getLocations();
  $q.all([citiesRequest]).then(function(){
    MapService.generateMap(LocationService.cities.filter(byId));
    ActivityService.getActivities(self.viewCity()._id);
  });

  self.activities = function(){
    return ActivityService.activities;
  }

  self.viewCity = function(){
    return LocationService.cities.filter(byId)[0];
  }

  function byId(city){
    return city._id == $location.path().split("/").pop();
  }

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
