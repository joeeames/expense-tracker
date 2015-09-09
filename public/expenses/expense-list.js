angular.module('app').directive('expenseList', function() {
  return {
    restrict: 'E',
    scope: {
      expenses: '=data',
      selectExpense: "&"
    },
    templateUrl: '/expenses/expense-list.html',
    controller: function($scope) {
      $scope.deleteExpense = function(expense) {
        $scope.expenses.$remove(expense);
      }

      $scope.clickRow = function(expense) {
        $scope.selectExpense({expense: expense});
      }
    }
  }
})