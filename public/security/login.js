angular.module('app').component('login', {
  templateUrl: '/security/login.html',
  bindings: {
    currentAuth: '='
  },
  controller: function(auth, $location) {
    this.loggedIn = !!this.currentAuth;
    
    this.anonLogin = function() {
      // auth.$authAnonymously().then(function() {
      auth.$signInAnonymously().then(function() {
        $location.path('/home');
      }).catch((function(err) {
        this.errorMessage = err.code;
      }).bind(this))
    }
    
    this.fbLogin = function() {
      // auth.$authWithOAuthPopup("facebook").then(function() {
      auth.$signInWithPopup("facebook").then(function() {
        $location.path('/home');
      }).catch((function(err) {
        this.errorMessage = err.code;
      }).bind(this))
    }
  }
})