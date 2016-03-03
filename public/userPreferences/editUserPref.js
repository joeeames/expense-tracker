angular.module('app').component('editUserPref', {
  templateUrl: '/userPreferences/editUserPref.html',
  bindings: {
    userPrefData: "=userPreferences"
  },
  controller: function(fbRef, $location, $scope) {
    
    // show three-way data binding
    this.userPrefData.$bindTo($scope, "$ctrl.userPreferences").then((function() {
      if(!this.userPreferences.theme) {
        this.userPreferences.theme = this.themes[0];
      }
    }).bind(this))

    this.themes = [
      "light",
      "dark"
    ]
    
    this.save = function() {
      $location.path("/home");
    }
    
    this.cancel = function() {
      $location.path("/home");
    }
  }
});