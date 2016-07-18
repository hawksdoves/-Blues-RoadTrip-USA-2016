var roadtripApp = angular.module('roadtripApp', ['ngRoute'])

.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
  $routeProvider

  .when('/', {
    url: '/',
        templateUrl: 'home.html',
        controller: 'RoadTripController as ctrl'
  })

  .when('/roadtrip', {
    url: '/roadtrip',
        templateUrl: 'roadtrip.html',
        controller: 'RoadTripController as ctrl'
  })

  .when('/roadtrip/locations/:_id', {
        templateUrl: 'location.html',
        controller: 'RoadTripController as ctrl',
  })

  $locationProvider.html5Mode(true);

}]);
