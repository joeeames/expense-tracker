angular.module('app').factory('rootRef', function() {
  return firebase.database().ref();
});