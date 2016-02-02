angular.module('app').component('categoryList', {
  templateUrl: '/categories/categoryList.html',
  controller: function(fbRef, $firebaseArray) {
    var query = fbRef.getCategoriesRef().orderByChild("name");

    this.categories = $firebaseArray(query);
    
    this.createNewCategory = function() {
      this.categories.$add({name: this.newCategoryName});
      this.newCategoryName = '';
    }
  }
})