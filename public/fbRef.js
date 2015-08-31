angular.module('app').factory('fbRef', function() {
  return {
    main: new Firebase("https://je-expense-tracker.firebaseio.com"),
    expenses: new Firebase("https://je-expense-tracker.firebaseio.com/expenses")
  }
})