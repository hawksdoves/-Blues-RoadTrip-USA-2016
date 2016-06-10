roadtripApp.controller('LocationController', ['LocationService', '$http', function(LocationService, $http){
  var self = this;

  self.sendToDB = function(locationInfo){
      LocationService.postToDB(locationInfo);
  }

}])
