roadtripApp.controller('LocationController', ['LocationService', 'ActivityService', '$http', 'MapService', '$routeParams', '$location', '$q', function(LocationService, ActivityService, $http, MapService, $routeParams, $location, $q){
  var self = this;

  self.sendToDB = function(locationInfo){
      LocationService.postToDB(locationInfo);
  }



  var citiesRequest = MapService.getLocations();
  $q.all([citiesRequest]).then(function(){
    MapService.generateMap(MapService.cities.filter(byId));
    ActivityService.getActivities(self.viewCity()._id);
  });

  self.activities = function(){
    console.log("boo");
    return ActivityService.activities;
  }

  self.viewCity = function(){
    return MapService.cities.filter(byId)[0];
  }

  function byId(city){
    return city._id == $location.path().split("/").pop();
  }

}])
