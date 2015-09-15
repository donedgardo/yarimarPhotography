(function(angular, undefined){
  "use strict";
  angular
  .module("yarimarPhotography")
  .run(function($rootScope, $state) {
    $rootScope.$on("$stateChangeError", function(event, toState, toParams, fromState, fromParams, error) {
      // We can catch the error thrown when the $meteor.requireUser() promise is rejected
      // or the custom error, and redirect the user back to the login page
      console.log.bind(console);
      switch(error) {
        case "UNAUTHORIZED":
          $state.go('home');
          break;
      }
    });
  })

  .config(
    function($urlRouterProvider, $stateProvider, $locationProvider){


    $locationProvider.html5Mode(true);

    var onlyAdmin = {"adminUser":  function($meteor){
      return $meteor.requireValidUser(function(user) {
        if (user.username === "donedgardo"){
          console.log("resolve: ", true);
          return true;
        }
        else{
          console.log("resolve: ", false);
          return "UNAUTHORIZED";
        }
      });
    }};
    $stateProvider
  .state('home',{
    url:'/',
    template:"<h2>Home</h2>"
  })

    .state('logout', {
      url: '/logout',
      resolve: {
        "logout": function($meteor, $state) {
          return $meteor.logout().then(function(){
            $state.go('home')
            console.log('Succesful logout');
          }, function(err){
            console.log('logout error - ', err);
          });
        }
      }
    }) 

    .state('admin', {
      url:'/admin',
    templateUrl:"client/admin/views/home.ng.html",
    controller:"AdminHomeCtrl",
    controllerAs:"homeCtrl",
    resolve: {"adminUser":  function($meteor){
      return $meteor.requireValidUser(function(user) {
        if (user.username === "donedgardo"){
          console.log("resolve: ", true);
          return true;
        }
        else{
          console.log("resolve: ", false);
          return "UNAUTHORIZED";
        }
      });
    }}
    })

    .state('createUser', {
      url:'/admin/create-client',
    templateUrl:"client/admin/views/create-client.ng.html",
    controller:"CreateClientCtrl",
    controllerAs:"createClientCtrl",
    resolve:  {"adminUser":  function($meteor){
      return $meteor.requireValidUser(function(user) {
        if (user.username === "donedgardo"){
          console.log("resolve: ", true);
          return true;
        }
        else{
          console.log("resolve: ", false);
          return "UNAUTHORIZED";
        }
      });
    }}
    })   

    .state('showClient', {
      url:'/admin/client/:clientId',
    templateUrl:"client/admin/views/client-details.ng.html",
    controller:"ClientDetailsCtrl",
    controllerAs:"clientDetCtrl",
    resolve:  {"adminUser":  function($meteor){
      return $meteor.requireValidUser(function(user) {
        if (user.username === "donedgardo"){
          console.log("resolve: ", true);
          return true;
        }
        else{
          console.log("resolve: ", false);
          return "UNAUTHORIZED";
        }
      });
    }}
    })

    .state('createAlbum', {
      url: '/admin/create-album',
    templateUrl: "client/albums/views/create-album.ng.html",
    controller: 'CreateAlbumCtrl',
    controllerAs:'ca',
    resolve:{"adminUser":  function($meteor){
      return $meteor.requireValidUser(function(user) {
        if (user.username === "donedgardo"){
          console.log("resolve: ", true);
          return true;
        }
        else{
          console.log("resolve: ", false);
          return "UNAUTHORIZED";
        }
      });
    }}
    })

    .state('editAlbum', {
      url: '/admin/album/:albumId',
    templateUrl: "client/albums/views/edit-album.ng.html",
    controller: 'EditAlbumCtrl',
    controllerAs:'ea',
    resolve: {"adminUser":  function($meteor){
      return $meteor.requireValidUser(function(user) {
        if (user.username === "donedgardo"){
          console.log("resolve: ", true);
          return true;
        }
        else{
          console.log("resolve: ", false);
          return "UNAUTHORIZED";
        }
      });
    }}
    })
    $urlRouterProvider.otherwise('/admin');
  });



})(angular);
