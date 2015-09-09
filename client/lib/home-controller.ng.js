(function(angular, undefined){
  "use strict";

  angular
  .module('yarimarPhotography')
  .controller('HomeCtrl', HomeController);

function HomeController($rootScope, $mdDialog, $meteor, $location){
  var self = this;
  self.login = loginDialog;
  self.openUserMenu= openUserMenu;
  console.log("Logged in:", $rootScope.currentUser);

  //Opens login dialog from Toolbar.
  function loginDialog(ev){
    $mdDialog.show({
      controller: 'LoginCtrl as lc',
      templateUrl: 'client/sessions/views/login.ng.html',
      parent: angular.element(document.body),
      targetEvent: ev,
      clickOutsideToClose:true
    })
    .then(function(){
      $location.path('/');
    }, function(err){
      console.log("error login");
    })
  }

  //Opens User Interaction Menu on Toolbar
  function openUserMenu($mdOpenMenu, ev){
    $mdOpenMenu(ev);
  }

}
})(angular);
