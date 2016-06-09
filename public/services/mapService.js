roadtripApp.service('MapService', ['$http', '$q', function($http, $q){

  var self = this;

  self.cities = [];

  self.maps = function(callbackFunction) {
    var citiesRequest = getLocations();
    $q.all([citiesRequest]).then(function(){
      callbackFunction();
    });
  };

  function getLocations() {
    return $http.get('/locations')
      .then(function(locations){
        self.cities = locations.data;
      })
  };

  self.generateMap = function(){

    var cities = self.cities;

    var mapOptions = {
      zoom: 3,
      center: new google.maps.LatLng(45,-37),
      mapTypeId: google.maps.MapTypeId.TERRAIN
    }

    var map = new google.maps.Map(document.getElementById('map'), mapOptions);

    var markers = [];

    var infoWindow = new google.maps.InfoWindow();

    var createMarker = function (info){

      var marker = new google.maps.Marker({
          map: map,
          position: new google.maps.LatLng(info.lat, info.lng),
          title: info.city
      });

      marker.content = '<div class="infoWindowContent">' + info.desc + '</div>';

      google.maps.event.addListener(marker, 'click', function(){
          infoWindow.setContent('<h2>' + marker.title + '</h2>' + marker.content);
          infoWindow.open(map, marker);
      });

      markers.push(marker);

    }

    for (i = 0; i < cities.length; i++){
        createMarker(cities[i]);
    }

    var flightPlanCoordinates = [
                                  { lat: cities[0]['lat'],
                                    lng: cities[0]['lng']
                                  },
                                  { lat: cities[1]['lat'],
                                    lng: cities[1]['lng']
                                  }
                                ]
    var flightPath = new google.maps.Polyline({
      path: flightPlanCoordinates,
      geodesic: true,
      strokeColor: '#FF0000',
      strokeOpacity: 1.0,
      strokeWeight: 2
    });

    flightPath.setMap(map);

  };

}]);
