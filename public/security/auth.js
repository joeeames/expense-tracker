angular.module('app').service('auth', function($firebaseAuth, fbUrl) {
  return $firebaseAuth(new Firebase(fbUrl));
})