angular.module('app').component('expenseList', {
  bindings: {
    expenses: '=data',
    selectExpense: "&"
  },
  templateUrl: '/expenses/expenseList.html',
  controller: function() {
    this.deleteExpense = function(expense) {
      this.expenses.$remove(expense);
    }

    this.clickRow = function(expense) {
      console.log(this.selectExpense);
      this.selectExpense({expense: expense});
    }
  }
})