(function(angular, undefinded){
  "use strict";
  angular
  .module('yarimarPhotography')
  .controller('LoginCtrl', LoginController);

  function LoginController($mdDialog, $meteor, $location){
    var self = this;

    self.login = loginMeteor; 
    self.close = closeDialog;

    function loginMeteor(){
      $meteor.loginWithPassword(self.userLogin.user, self.userLogin.password).then(function(){
        console.log('Success on Login');
        $mdDialog.hide();
      }, function(err){
        console.log('Error on login', err);
      });
    }

    function closeDialog(){
      $mdDialog.hide();
    }
  }

})(angular);

