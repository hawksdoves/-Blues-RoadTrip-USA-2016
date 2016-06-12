var roadtripApp = angular.module('roadtripApp', ['ngRoute'])

.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
  $routeProvider

  .when('home', {
    url: '/home',
        templateUrl: 'home.html',
        controller: 'RoadTripController as ctrl'
  })

  .when('roadtrip', {
    url: '/roadtrip',
        templateUrl: 'roadtrip.html',
        controller: 'RoadTripController as ctrl'
  })

  .when('/roadtrip/location/:_id', {
        templateUrl: 'location/index.html',
        controller: 'RoadTripController as ctrl',
        params: ':_id'
  })

}]);
