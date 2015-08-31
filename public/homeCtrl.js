angular.module('app').controller('homeCtrl', function(
    $scope, $firebaseObject, $firebaseArray, auth, fbRef) {

  auth.authorize();

  $scope.newExpenseData = {z:5}

  $scope.expenses = $firebaseArray(fbRef.expenses);

  var query = fbRef.expenses.orderByChild("date").limitToLast(5);
  $scope.recentExpenses = $firebaseArray(query);

  $scope.createExpense = function(expenseData) {
    $scope.expenses.$add(expenseData);
  }

  // $scope.recentExpenses = expenses.getLatest(10);
  // $scope.recentExpenses = [
  //   { 
  //     payee: "Target",
  //     notes: "Swim Trunks",
  //     amount: 14.35,
  //     date: new Date('3/8/2025')
  //   },
  //   { 
  //     payee: "Best Buy",
  //     notes: "Go Pro",
  //     amount: 428.33,
  //     date: new Date('3/8/2025')
  //   },
  //   { 
  //     payee: "Barnes & Noble",
  //     notes: "Programming book",
  //     amount: 48.22,
  //     date: new Date('3/10/2025')
  //   },
  // ];
})