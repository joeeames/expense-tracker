angular.module('app').controller('loginCtrl', function($scope, currentAuth, auth, $location) {
  $scope.loggedIn = false;
  if(!!currentAuth) {
    $scope.loggedIn = true;
  }

  $scope.logout = function() {
    auth.$unauth();
    $scope.loggedIn = false;
  }

  $scope.anonLogin = function() {
    auth.$authAnonymously().then(function() {
      $location.path("/home");
    }).catch(function(err) {
      $scope.errorMessage = err.code;
    })
  }

  $scope.fbLogin = function() {
    auth.$authWithOAuthPopup("facebook").then(function() {
      $location.path("/home");
    }).catch(function(err) {
      $scope.errorMessage = err.code;
    })
  }
});