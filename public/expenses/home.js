angular.module('app').component('home', {
  
  templateUrl: '/expenses/home.html',
  controller: function(fbRef, $firebaseArray) {
    
    var query = fbRef.getExpensesRef().orderByChild("date");

    this.expensesInOrder = $firebaseArray(query);

    this.createExpense = function(expenseData) {
      this.expensesInOrder.$add(expenseData);
    }

    this.updateExpense = function() {
      this.expensesInOrder.$save(this.editedExpense);
    }

    this.editExpense = function(expense) {
      this.editedExpense = expense;
    }
  }
})