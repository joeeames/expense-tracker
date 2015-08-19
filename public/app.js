angular.module('app', ['ngRoute', 'firebase']);

angular.module('app').config(function($routeProvider) {
  $routeProvider
    .when('/home', {
      templateUrl: '/home.html',
      controller: 'homeCtrl'
    }).otherwise('/home')
})