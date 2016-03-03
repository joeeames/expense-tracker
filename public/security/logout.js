angular.module('app').component('logout', {
  bindings: {
  },
  controller: function(auth, $location) {

    this.$onInit = function() {
      if(auth) {
        auth.$unauth()
      }
      $location.path("/login");
    }

  }
});