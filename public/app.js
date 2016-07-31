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
      template: '<home expenses-in-order="$resolve.expensesInOrder" categories="$resolve.categories"></home>',
      resolve: {
        "currentAuth": function(auth) {
          return auth.$requireSignIn();
        },
        "expensesInOrder": function(fbRef, expenseList, auth) {
          return auth.$requireSignIn().then(function() {
            var query = fbRef.getExpensesRef().orderByChild("date");
            return expenseList(query).$loaded();
          })
        },
        "categories": function(fbRef, $firebaseArray, auth) {
          return auth.$requireSignIn().then(function() {
            var categoriesQuery = fbRef.getCategoriesRef().orderByChild("name");
            return $firebaseArray(categoriesQuery).$loaded();
          })
        }
      }
    })
    .when('/categories', {
      template: '<category-list categories="$resolve.categories"></category-list>',
      resolve: {
        "currentAuth": function(auth) {
          return auth.$requireSignIn();
        },
        "categories": function(fbRef, $firebaseArray, auth) {
          return auth.$requireSignIn().then(function() {
            var categoriesQuery = fbRef.getCategoriesRef().orderByChild("name");
            return $firebaseArray(categoriesQuery).$loaded();
          })
        }
      }
    })
    .when('/login', {
      template: '<login current-auth="$resolve.currentAuth"></login>',
      resolve: {
        currentAuth: function(auth) {
          return auth.$waitForSignIn();
        }
      }
    })
    .when('/logout', {
      template: '<logout></logout>'
    })
    .when('/userpref', {
      template: '<edit-user-pref user-preferences="$resolve.userPreferences"></edit-user-pref>',
      resolve: {
        currentAuth: function(auth) {
          return auth.$requireSignIn();
        },
        userPreferences: function(fbRef, $firebaseObject, auth) {
          return auth.$requireSignIn().then(function() {
            return new $firebaseObject(fbRef.getPreferencesRef()).$loaded()  
          })
          
        }
      }
    })
    .otherwise('/home')
})