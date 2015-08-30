(function(angular, undefined){
    "use strict";

    angular
    .module('yarimarPhotography')
    .controller('HomeCtrl', HomeController);

function HomeController($rootScope, $mdDialog, $meteor, $location){
    var self = this;
    self.login = loginDialog;

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


}
})(angular);
