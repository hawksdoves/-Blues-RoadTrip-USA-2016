roadtripApp.service('MapService', ['$http', function($http){

    var self = this;

    self.maps = function() {

      var cities = [
                    {
                        city : 'London',
                        desc : 'Take off on June 8th!',
                        lat : 51.5074,
                        long : 0.1278
                    },
                    {
                        city : 'NYC',
                        desc : '...?!?',
                        lat : 40.7128,
                        long : -74.0059
                    }
                ];

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
            position: new google.maps.LatLng(info.lat, info.long),
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

  };




}]);
