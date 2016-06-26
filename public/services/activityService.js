roadtripApp.service('ActivityService', ['$http', '$q', function($http, $q){

  var self = this;

  self.activities = [];

  self.postToDB = function(activityInfo){

      var req = {
        method: 'POST',
        url: '/activity',
        headers: { 'Content-Type': 'application/json' },
        data: JSON.stringify({  city: activityInfo.city,
                                desc: activityInfo.desc,
                                name: activityInfo.name,
                                url: activityInfo.url,
                              })
                            };

      $http(req);
    }

    self.getActivities = function(locationId) {
      return $http.get('roadtrip/locations/locationId/activities')
        .then(function(localActivities){
          self.activities = localActivities.data;
        })
    };

}])
