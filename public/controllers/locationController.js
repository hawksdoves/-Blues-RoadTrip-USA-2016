roadtripApp.controller('LocationController', ['LocationService', 'ActivityService', '$http', 'MapService', '$routeParams', '$location', '$q', '$rootScope', function(LocationService, ActivityService, $http, MapService, $routeParams, $location, $q, $rootScope){
  var self = this;

  self.sendToDB = function(locationInfo){
      LocationService.postToDB(locationInfo);
  }

  self.hasURL = function(activity){
    console.log(!!activity.url);
    return !!activity.url
  }

  $rootScope.$on('$routeChangeStart', function(next, current) {
    var citiesRequest = MapService.getLocations();
    $q.all([citiesRequest]).then(function(){
      MapService.generateMap(MapService.cities.filter(byId));
      ActivityService.getActivities(self.viewCity()._id);
    });
  });

  var citiesRequest = MapService.getLocations();
  $q.all([citiesRequest]).then(function(){
    MapService.generateMap(MapService.cities.filter(byId));
    ActivityService.getActivities(self.viewCity()._id);
  });

  self.activities = function(){
    return ActivityService.activities;
  }

  self.viewCity = function(){
    return MapService.cities.filter(byId)[0];
  }

  self.viewMap = function(){
      return "map";
  }

  function byId(city){
    return city._id == $location.path().split("/").pop();
  }

}])
