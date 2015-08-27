angular.module("yarimarPhotography")
.config(
  function($urlRouterProvider, $stateProvider, $locationProvider){


    $locationProvider.html5Mode(true);

    $stateProvider
    .state('login',{
      url: "/login",
      templateUrl: "client/sessions/views/login.ng.html",
      controller:"LoginCtrl",
      controllerAs:"lc"
    })


    .state('logout', {
      url: '/logout',
      resolve: {
        "logout": function($meteor, $state) {
          return $meteor.logout().then(function(){
            $state.go('/');
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
      resolve: onlyAdmin
    })

    .state('createUser', {
      url:'/admin/create-client',
      templateUrl:"client/admin/views/create-client.ng.html",
      controller:"CreateClientCtrl",
      controllerAs:"createClientCtrl",
      resolve: onlyAdmin
    })   

    .state('showClient', {
      url:'/admin/client/:clientId',
      templateUrl:"client/admin/views/client-details.ng.html",
      controller:"ClientDetailsCtrl",
      controllerAs:"clientDetCtrl",
      resolve: onlyAdmin
    })

    .state('createAlbum', {
      url: '/admin/create-album',
      templateUrl: "client/albums/views/create-album.ng.html",
      controller: 'CreateAlbumCtrl',
      controllerAs:'ca',
      resolve: onlyAdmin
    })

    $urlRouterProvider.otherwise('/admin');

  })    

  .run(function($rootScope, $state) {
    $rootScope.$on("$stateChangeError", function(event, toState, toParams, fromState, fromParams, error) {
      // We can catch the error thrown when the $meteor.requireUser() promise is rejected
      // or the custom error, and redirect the user back to the login page
      switch(error) {
        case "UNAUTHORIZED":
          $state.go('login');
        break;
      }
    });
  }); 

  var onlyAdmin = { "adminUser":  function($meteor){
    return $meteor.requireValidUser(function(user) {
      if (user.username === "donedgardo" || user.username === "yarimarj")
        return true;
      else
        return 'UNAUTHORIZED';
    });
  }};


