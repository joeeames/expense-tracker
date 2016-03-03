angular.module('app').component('home', {
  
  templateUrl: '/home/home.html',
  bindings: {
    expensesInOrder: '=',
    categories: '='
  },
  controller: function(fbRef, expenseList) {

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