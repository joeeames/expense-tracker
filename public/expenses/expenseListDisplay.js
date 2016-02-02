angular.module('app').component('expenseListDisplay', {
  bindings: {
    expenses: '=data',
    selectExpense: "&"
  },
  templateUrl: '/expenses/expenseListDisplay.html',
  controller: function() {
    this.deleteExpense = function(expense) {
      this.expenses.$remove(expense);
    }

    this.clickRow = function(expense) {
      this.selectExpense({expense: expense});
    }
  }
})