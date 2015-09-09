angular.module('app').service('auth', function($firebaseAuth) {
  var auth = $firebaseAuth(new Firebase("https://je-expense-tracker.firebaseio.com"));
  return auth
})