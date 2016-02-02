angular.module('app').factory('fbRef', function(auth, fbUrl) {
  return {
    getRootRef: function() {
      return new Firebase(fbUrl + auth.$getAuth().uid);
    },
    getExpensesRef: function() {
      return new Firebase(fbUrl + "/expenses/" + auth.$getAuth().uid);
    },
    getCategoriesRef: function() {
      return new Firebase(fbUrl + "/categories/");
    }
  }

})

