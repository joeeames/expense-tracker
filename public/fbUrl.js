angular.module('app').constant('FirebaseUrl', "https://je-expense-tracker.firebaseio.com")
 .service('rootRef', ['FirebaseUrl', Firebase]);
// note that this saves us making multiple Firebase() objects. 
// but if we did, it would be ok. This is just a big convenience