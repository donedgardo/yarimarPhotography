angular.module('yarimarPhotography')
.controller("AdminHomeCtrl", function($meteor, $location){
  var self = this;

  self.users= $meteor.collection(Meteor.users, false).subscribe('users');
});
