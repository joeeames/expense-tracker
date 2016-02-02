angular.module('app').component('login', {
  templateUrl: '/security/login.html',
  bindings: {
    currentAuth: '=',
  },
  controller: function(auth, $location) {
    this.loggedIn = !!this.currentAuth

    this.logout = function() {
      auth.$unauth();
      this.loggedIn = false;
    }

    this.anonLogin = function() {
      auth.$authAnonymously().then(function() {
        $location.path("/home");
      }).catch(function(err) {
        this.errorMessage = err.code;
      })
    }

    this.fbLogin = function() {
      auth.$authWithOAuthPopup("facebook").then(function() {
        $location.path("/home");
      }).catch(function(err) {
        this.errorMessage = err.code;
      })
    }
  }
});