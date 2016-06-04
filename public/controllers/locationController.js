roadtripApp.controller('LocationController', ['$http', function($http){
  var self = this;

  self.working ="hello"

  self.sendToDB = function(locationInfo){
      _postToDB(locationInfo);
  }
  function _postToDB(locationInfo){
    console.log(locationInfo.desc);
    console.log(locationInfo.startDate);
      var req = {
        method: 'POST',
        url: '/location',
        headers: { 'Content-Type': 'application/json' },
        data: JSON.stringify({  email: locationInfo.email,
                                city: locationInfo.city,
                                desc: locationInfo.desc,
                                lat: locationInfo.lat,
                                long: locationInfo.long,
                                startDate: locationInfo.startDate,
                                endDate: locationInfo.endDate })
                              };

      $http(req);
    }

}])
