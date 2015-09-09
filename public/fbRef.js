angular.module('app').factory('fbRef', function(auth) {
  var ref = {};
  setRef(ref, auth);

  auth.$onAuth(function(authData) {
    if(!!authData) {
      setRef(ref, auth);
    }
  })

  return ref;
})

function setRef(ref, auth) {
  ref.main = new Firebase("https://je-expense-tracker.firebaseio.com/" + auth.$getAuth().uid );
  ref.expenses = new Firebase("https://je-expense-tracker.firebaseio.com/" + auth.$getAuth().uid + "/expenses");
}