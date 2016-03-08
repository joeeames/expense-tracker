angular.module('app').component('editExpense', {
    templateUrl: '/expenses/editExpense.html',
    bindings: {
      createNewExpense: '&',
      updateExpense: '&',
      editedExpense: '=editedData',
      categories: '='
    },
    controller: function($scope, fbRef, $firebaseArray) {
      
      this.selectedCategory = this.categories[0];

      // this works because we're using the default name for the controller for the component
      // which is $ctrl. This is a deeper subject
      $scope.$watch('$ctrl.editedExpense', (function(newData) {
        if(!!newData) {
          this.editing = true;
          this.amount = newData.amount;
          this.desc = newData.description;
          var date = new Date(newData.date);
          this.date = date.toLocaleDateString();
          this.selectedCategory = this.categories[this.categories.$indexFor(newData.category.id)];
          this.payee = newData.payee;
        }
      }).bind(this))

      this.setDefaults = function() {
        this.amount = '';
        this.desc = '';
        this.payee = '';
        this.date = new Date('3/3/1985').toLocaleDateString();
        this.selectedCategory = this.categories.length > 0 ? this.categories[0] : undefined;
      }
      this.setDefaults();

      this.create = function() {
        this.expenseData = {
          amount: parseFloat(this.amount),
          description: this.desc,
          payee: this.payee,
          category: { name: this.selectedCategory.name, id: this.selectedCategory.$id },
          date: new Date(this.date).toJSON()
        }
        this.setDefaults();
        this.createNewExpense({expenseData: this.expenseData});
      }

      this.save = function() {
        this.editedExpense.amount = parseFloat(this.amount);
        this.editedExpense.description = this.desc;
        this.editedExpense.payee = this.payee;
        this.editedExpense.date = new Date(this.date).toJSON()
        this.editedExpense.category = { name: this.selectedCategory.name, id: this.selectedCategory.$id },
        this.updateExpense();
        this.setDefaults();
        this.editing = false;
        this.editedExpense = null;
      }

      this.cancel = function() {
        this.editing = false;
        this.editedExpense = null;
        this.setDefaults();
      }
    }
  })