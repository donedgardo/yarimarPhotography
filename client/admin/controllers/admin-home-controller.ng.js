angular.module('yarimarPhotography')
.controller("AdminHomeCtrl", function($meteor, $location){
  var self = this;

  self.userLogin= {};
  self.users= $meteor.collection(Meteor.users, false).subscribe('users');

  self.login = function(){
    $meteor.loginWithPassword(self.userLogin.user, self.userLogin.password).then(function(){
      console.log('Success on Login');
    }, function(){
      console.log('Error on login', err);
    });
  };

  self.logout = function(){
    $meteor.logout().then(function(){
      console.log('Success on logout');
    }, function(err){
      console.log('Error on logout', err);
    });
  };

});
