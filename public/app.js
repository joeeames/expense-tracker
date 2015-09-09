var app = angular.module('app', ['ngRoute', 'firebase']);

app.run(function($rootScope, $location) {
  $rootScope.$on("$routeChangeError", function(e, next, prev, err) {
    if(err === "AUTH_REQUIRED") {
      $location.path("/login");
    }
  })
})

app.config(function($routeProvider) {
  $routeProvider
    .when('/home', {
      templateUrl: '/home.html',
      controller: 'homeCtrl',
      resolve: {
        "currentAuth": function(auth) {
          return auth.$requireAuth();
        }
      }
    })
    .when('/all', {
      templateUrl: '/expenses/allHome.html',
      controller: 'allHomeCtrl',
      resolve: {
        "currentAuth": function(auth) {
          return auth.$requireAuth();
        }
      }
    })
    .when('/login', {
      templateUrl: '/login.html',
      controller: 'loginCtrl',
      resolve: {
        "currentAuth": function(auth) {
          return auth.$waitForAuth();
        }
      }
    })
    .otherwise('/home')
})