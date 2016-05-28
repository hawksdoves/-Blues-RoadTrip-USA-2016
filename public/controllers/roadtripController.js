
roadtripApp.controller('roadtripController', ['$scope', 'MapService', function($scope, MapService){
  var self = this;

  MapService.maps();

}])
