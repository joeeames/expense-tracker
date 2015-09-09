angular.module('app').directive('editExpense', function() {
  return {
    restrict: 'E',
    templateUrl: '/expenses/edit-expense.html',
    scope: {
      createNewExpense: '&',
      updateExpense: '&',
      editedExpense: '=editedData'
    },
    controller: function($scope) {
      setDefaults();

      $scope.$watch('editedExpense', function(newData) {
        if(!!newData) {
          $scope.editing = true;
          $scope.amount = newData.amount;
          $scope.desc = newData.description;
          var date = new Date(newData.date);
          $scope.date = (date.getMonth()+1) + '/' + date.getDate() + '/' + date.getFullYear();
          $scope.payee = newData.payee;
        }
      })

      function setDefaults() {
        var now = new Date(Date.now())
        $scope.date = (now.getMonth()+1) + '/' + now.getDate() + '/' + now.getFullYear();
      }

      function clearExpenseFields() {
        $scope.amount = '';
        $scope.desc = '';
        $scope.payee = '';
      }

      $scope.create = function() {
        $scope.expenseData = {
          amount: $scope.amount,
          description: $scope.desc,
          payee: $scope.payee,
          date: Date.parse($scope.date)
        }
        clearExpenseFields();
        $scope.createNewExpense({expenseData: $scope.expenseData});
      }

      $scope.save = function() {
        $scope.editedExpense.amount = $scope.amount;
        $scope.editedExpense.description = $scope.desc;
        $scope.editedExpense.payee = $scope.payee;
        $scope.editedExpense.date = Date.parse($scope.date);
        $scope.updateExpense();
        clearExpenseFields();
        $scope.editing = false;
        $scope.editedExpense = null;
      }

      $scope.cancelEdit = function() {
        $scope.editing = false;
        $scope.editedExpense = null;
        clearExpenseFields();
      }
    }
  }
})