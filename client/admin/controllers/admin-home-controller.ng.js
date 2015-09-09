(function(angular, undefined){
  "use strict";

  angular
  .module('yarimarPhotography')
  .controller("AdminHomeCtrl", AdminHomeController);

function AdminHomeController($rootScope, $meteor, $location, $scope, $mdDialog, $mdMenu){
  var self = this;

  self.users= $meteor.collection(Meteor.users, false).subscribe('users');

  self.openAlbumDialog = openAlbumDialog;

  function openAlbumDialog(ev){
    $mdDialog.show({
      controller: 'CreateAlbumCtrl as ca',
      templateUrl: 'client/albums/views/create-album.ng.html',
      parent:angular.element(document.body),
      targetEvent:ev,
      clickOutsideToClose:true
    })
    .then(function(albumId){
      $location.path("/admin/album/" + albumId);
    }, function(err){
      console.log('Error creating album');
    })
  }
}
})(angular);
