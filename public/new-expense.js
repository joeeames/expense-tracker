angular.module('app').directive('newExpense', function() {
  return {
    restrict: 'E',
    templateUrl: 'new-expense.html',
    controller: function($scope) {
      var now = new Date(Date.now())
      $scope.date = (now.getMonth()+1) + '/' + now.getDate() + '/' + now.getFullYear()
      $scope.createExpense = function() {
        console.log('created');
      }
    }
  }
})