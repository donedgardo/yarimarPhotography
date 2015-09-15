(function(angular, undefined){
  "use strict";

  angular
  .module('yarimarPhotography')
  .controller("AdminHomeCtrl", AdminHomeController);

function AdminHomeController($rootScope, $meteor, $location, $scope, $mdDialog, $mdMenu){
  var self = this;

  self.changeSubscription =  changeSubscription;
  self.openAlbumDialog    =  openAlbumDialog;
  self.redirectToUser     =  redirectToUser;
  self.redirectToAlbum    =  redirectToAlbum;
  self.userSearch         =  userSearch;
  self.albumSearch        =  albumSearch;

  function redirectToUser(user){
    $location.path("/admin/client/" + user._id);
  }

  function redirectToAlbum(album){
    $location.path("/admin/album/" + album._id);
  }

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

  function changeSubscription(){
    $meteor.autorun($scope, function(){
      self.usersList = $scope.$meteorCollection(Meteor.users, false)
      .subscribe('users', $scope.getReactively('userSearchString'));
      self.albumsList = $scope.$meteorCollection(Albums, false)
      .subscribe('albums', $scope.getReactively('albumSearchString'));
    });
  }

  function userSearch(query){
    return self.usersList;
  }

  function albumSearch(query){
    return self.albumsList;
  }


}
})(angular);
