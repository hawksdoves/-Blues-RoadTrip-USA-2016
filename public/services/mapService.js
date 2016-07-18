roadtripApp.service('MapService', ['$http', '$q', function($http, $q){

  var self = this;

  self.cities = [];

  self.getLocations = function() {
    return $http.get('/locations')
      .then(function(locations){
        self.cities = locations.data;
      })
  };

  self.generateMap = function(locations){

    var cities = locations;

    var numOfLocations = locations.length;

    var centerLat = locations.reduce(function(prevVal, elem) {
      return prevVal + elem.lat;
    }, 0);

    var centerLong = locations.reduce(function(prevVal, elem) {
      return prevVal + elem.lng;
    }, 0);

    var zoomAmount = (numOfLocations===1) ? 11 : 3;
    console.log(locations);

    function zoomAmount(numOfLocations){
      if(numOfLocations===1){
        return 11
      }else{
        return 3
      }
    }

    var mapOptions = {
      zoom: zoomAmount,
      center: new google.maps.LatLng(centerLat/numOfLocations,centerLong/numOfLocations),
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

    function latLong(city) {
      return { lat: city['lat'],
               lng: city['lng']
             }
    }

    var flightPlanCoordinates = locations.map(latLong);

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
