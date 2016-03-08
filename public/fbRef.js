angular.module('app').factory('fbRef', function(auth, rootRef) {
  return {
    getExpensesRef: function() {
      return rootRef.child("/expenses/").child(auth.$getAuth().uid);
    },
    getCategoriesRef: function() {
      return rootRef.child("/categories/");
    },
    getPreferencesRef: function() {
      return rootRef.child("/preferences/").child(auth.$getAuth().uid);
    }
  }

})

