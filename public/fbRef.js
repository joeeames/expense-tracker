angular.module('app').factory('fbRef', function() {
  return new Firebase("https://je-expense-tracker.firebaseio.com");

})