angular.module('app').controller('allHomeCtrl', 
    function($scope, fbRef, auth, $firebaseArray) {
  
  var query = fbRef.expenses.orderByChild("date");

  $scope.expensesInOrder = $firebaseArray(query);

  $scope.createExpense = function(expenseData) {
    $scope.expensesInOrder.$add(expenseData);
  }

  $scope.updateExpense = function() {
    $scope.expensesInOrder.$save($scope.editedExpense);
  }

  $scope.editExpense = function(expense) {
    $scope.editedExpense = expense;
  }
})