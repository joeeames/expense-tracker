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
      template: '<home></home>',
      resolve: {
        "currentAuth": function(auth) {
          return auth.$requireAuth();
        }
      }
    })
    .when('/categories', {
      template: '<category-list></category-list>',
      resolve: {
        "currentAuth": function(auth) {
          return auth.$requireAuth();
        }
      }
    })
    .when('/login', {
      // have to use the snake-case attribute name, but in the component, it's camel case
      template: '<login current-auth="$resolve.currentAuth"></login>',
      resolve: {
        currentAuth: function(auth) {
          return auth.$waitForAuth();
        }
      }
    })
    .otherwise('/home')
})