angular.module('app').controller('homeCtrl', function(
    $scope, $firebaseObject, $firebaseArray, auth, fbRef) {

  var query = fbRef.expenses.orderByChild("date").limitToLast(5);
  $scope.recentExpenses = $firebaseArray(query);

  $scope.createExpense = function(expenseData) {
    $scope.recentExpenses.$add(expenseData);
  }

  $scope.updateExpense = function() {
    $scope.recentExpenses.$save($scope.editedExpense);
  }

  $scope.editExpense = function(expense) {
    $scope.editedExpense = expense;
  }

});