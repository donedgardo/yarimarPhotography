angular.module('yarimarPhotography')
.controller("AdminHomeCtrl", function($meteor, $location, $scope, $mdDialog){
  var self = this;

  self.users= $meteor.collection(Meteor.users, false).subscribe('users');
});
