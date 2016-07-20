var roadtripApp = angular.module('roadtripApp', ['ngRoute'])

.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
  $routeProvider

  .when('/', {
    url: '/',
        templateUrl: 'home.html',
        controller: 'LocationController as ctrl'
  })

  .when('/roadtrip', {
    url: '/roadtrip',
        templateUrl: 'roadtrip.html',
        controller: 'LocationController as ctrl'
  })

  .when('/locations/:_id', {
        templateUrl: 'location.html',
        controller: 'LocationController as ctrl',
  })

  $locationProvider.html5Mode(true);

}]);
