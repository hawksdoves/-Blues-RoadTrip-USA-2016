roadtripApp.service('LocationService', ['$http', '$q', function($http, $q){

  var self = this;

  self.postToDB = function(locationInfo){
    console.log("work first");
      var req = {
        method: 'POST',
        url: '/locations',
        headers: { 'Content-Type': 'application/json' },
        data: JSON.stringify({  city: locationInfo.city,
                                desc: locationInfo.desc,
                                lat: locationInfo.lat,
                                long: locationInfo.long,
                                startDate: locationInfo.startDate,
                                endDate: locationInfo.endDate })
                              };

      $http(req);
    }

}])
