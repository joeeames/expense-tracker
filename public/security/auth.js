angular.module('app').factory('auth', function($firebaseAuth, rootRef) {
  // return $firebaseAuth(rootRef);
  return $firebaseAuth();
})