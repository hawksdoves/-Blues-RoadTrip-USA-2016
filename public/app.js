var roadtripApp = angular.module('roadtripApp', ['ngRoute'])

.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
  $routeProvider

  .when('home', {
    url: '/',
        templateUrl: 'index.html',
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
  })

  $locationProvider.html5Mode(true);

}]);
