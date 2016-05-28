
roadtripApp.controller('RoadTripController', ['MapService', function(MapService){
  var self = this;

  MapService.maps();

  self.testing = "boo"
}])
