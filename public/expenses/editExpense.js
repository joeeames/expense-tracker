angular.module('app').component('editExpense', {
    templateUrl: '/expenses/editExpense.html',
    bindings: {
      createNewExpense: '&',
      updateExpense: '&',
      editedExpense: '=editedData'
    },
    controller: function($scope, fbRef, $firebaseArray) {
      // var that = this;
      
      var categoriesQuery = fbRef.getCategoriesRef().orderByChild("name");
      this.categories = $firebaseArray(categoriesQuery);
      this.categories.$loaded().then((function(list) {
        this.selectedCategory = this.categories[0];
      }).bind(this))

      $scope.$watch('$ctrl.editedExpense', (function(newData) {
        if(!!newData) {
          console.log(35)
          this.editing = true;
          this.amount = newData.amount;
          this.desc = newData.description;
          var date = new Date(newData.date);
          this.date = (date.getMonth()+1) + '/' + date.getDate() + '/' + date.getFullYear();
          this.payee = newData.payee;
        }
      }).bind(this))

      this.setDefaults = function() {
        var now = new Date(Date.now())
        this.date = (now.getMonth()+1) + '/' + now.getDate() + '/' + now.getFullYear();
      }
      this.setDefaults();

      this.clearExpenseFields = function() {
        this.amount = '';
        this.desc = '';
        this.payee = '';
      }

      this.create = function() {
        this.expenseData = {
          amount: this.amount,
          description: this.desc,
          payee: this.payee,
          date: Date.parse(this.date)
        }
        this.clearExpenseFields();
        this.createNewExpense({expenseData: this.expenseData});
      }

      this.save = function() {
        this.editedExpense.amount = this.amount;
        this.editedExpense.description = this.desc;
        this.editedExpense.payee = this.payee;
        this.editedExpense.date = Date.parse(this.date);
        this.updateExpense();
        this.clearExpenseFields();
        this.editing = false;
        this.editedExpense = null;
      }

      this.cancelEdit = function() {
        this.editing = false;
        this.editedExpense = null;
        this.clearExpenseFields();
      }
    }
  })