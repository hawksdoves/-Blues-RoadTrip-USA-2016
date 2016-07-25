roadtripApp.controller('ActivityController', ['ActivityService', '$http', '$q', function(ActivityService, $http, $q){
  var self = this;

  self.sendToActivityDB = function(activityInfo){
      ActivityService.postToDB(activityInfo);
  }

}])
