angular.module("yarimarPhotography")
.config(
  function($urlRouterProvider, $stateProvider, $locationProvider){


    $locationProvider.html5Mode(true);

    $stateProvider
    
    .state('admin', {
      url:'/admin',
      templateUrl:"client/admin/views/home.ng.html",
      controller:"AdminHomeCtrl",
      controllerAs:"homeCtrl"
    })

    .state('createUser', {
      url:'/admin/create-client',
      templateUrl:"client/admin/views/create-client.ng.html",
      controller:"CreateClientCtrl",
      controllerAs:"createClientCtrl"
    })   

    .state('showClient', {
      url:'/admin/client/:clientId',
      templateUrl:"client/admin/views/client-details.ng.html",
      controller:"ClientDetailsCtrl",
      controllerAs:"clientDetCtrl"
    })


    $urlRouterProvider.otherwise('/admin');
  });    

  
