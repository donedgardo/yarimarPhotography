angular.module('yarimarPhotography')
.controller('LoginCtrl', function($meteor, $location){
  var self = this;

  self.login = function(){
    $meteor.loginWithPassword(self.userLogin.user, self.userLogin.password).then(function(){
      console.log('Success on Login');
      $location.path('/');
    }, function(err){
      console.log('Error on login', err);
    });
  };

});

