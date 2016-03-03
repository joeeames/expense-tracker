angular.module('app').service('auth', function($firebaseAuth, rootRef) {
  return $firebaseAuth(rootRef);
})