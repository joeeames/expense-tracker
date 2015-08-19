angular.module('app').controller('homeCtrl', function(
    $scope, $firebaseObject, $firebaseArray, $firebaseAuth) {



  var ref = new Firebase("https://je-expense-tracker.firebaseio.com");

  var auth = $firebaseAuth(ref);
  auth.$authWithOAuthPopup("facebook").then(function(authData) {
    console.log("logged in as:", authData.uid);
  }).catch(function(error) {
    console.log("Authentication failed:", error);
  })

  var syncObj = $firebaseObject(ref);
  syncObj.$bindTo($scope, "data");

  var msgsRef = ref.child('messages');
  $scope.messages = $firebaseArray(msgsRef);

  $scope.addMessage = function() {
    console.log('added');
    $scope.messages.$add({
      text: $scope.newMessageText
    });
  };

  // $scope.recentExpenses = expenses.getLatest(10);
  $scope.recentExpenses = [
    { 
      payee: "Target",
      notes: "Swim Trunks",
      amount: 14.35,
      date: new Date('3/8/2025')
    },
    { 
      payee: "Best Buy",
      notes: "Go Pro",
      amount: 428.33,
      date: new Date('3/8/2025')
    },
    { 
      payee: "Barnes & Noble",
      notes: "Programming book",
      amount: 48.22,
      date: new Date('3/10/2025')
    },
  ];
})