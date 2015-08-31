angular.module('app').directive('newExpense', function() {
  return {
    restrict: 'E',
    templateUrl: 'new-expense.html',
    scope: {
      createNewExpense: '&',
    },
    controller: function($scope) {
      var now = new Date(Date.now())
      $scope.date = (now.getMonth()+1) + '/' + now.getDate() + '/' + now.getFullYear()
      $scope.createExpense = function() {
        $scope.newExpenseData = {
          amount: $scope.amount,
          description: $scope.desc,
          payee: $scope.payee,
          date: Date.parse($scope.date)
        }
        $scope.createNewExpense({expenseData: $scope.newExpenseData});
      }
    }
  }
})