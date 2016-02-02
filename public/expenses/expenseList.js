angular.module('app').factory('expenseList', function($firebaseArray) {
  var ExpenseList = $firebaseArray.$extend({
    getTotal: function() {
      var total = 0;
      // the array data is located in this.$list
      angular.forEach(this.$list, function(rec) {
        total += rec.amount;
      });
      return total;
    }
  });
  
  return function(ref) {
    return new ExpenseList(ref);
  }
})