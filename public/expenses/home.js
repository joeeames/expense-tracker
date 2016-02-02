angular.module('app').component('home', {
  
  templateUrl: '/expenses/home.html',
  controller: function(fbRef, expenseList) {
    
    var query = fbRef.getExpensesRef().orderByChild("date");

    this.expensesInOrder = expenseList(query);

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