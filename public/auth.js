angular.module('app').service('auth', function(fbRef, $firebaseAuth) {
  return {

    authorize: function() {
      var auth = $firebaseAuth(fbRef.main);
      if(!auth.$getAuth()) {
        auth.$authWithOAuthPopup("facebook").then(function(authData) {
          console.log("logged in as:", authData.uid);
        }).catch(function(error) {
          console.log("Authentication failed:", error);
        })
      }
    }
  }
})