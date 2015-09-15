(function(angular, undefined){
  "use strict";
  angular
  .module('yarimarPhotography')
  .controller('EditAlbumCtrl', EditAlbumController);

function EditAlbumController($meteor, $stateParams, $scope, $filter, $rootScope, $location){
  var self = this;

  self.users  = $meteor.collection(Meteor.users, false).subscribe('users');
  self.albums = $meteor.collection(Albums, true).subscribe('albums');
  self.images = $meteor.collectionFS(Images, false, Images).subscribe('images');
  self.album  = $meteor.object(Albums, $stateParams.albumId, true);
  self.getImage = getImage;
  self.remove = remove;
  self.album.date= new Date();

  function getImage(image){
    if(image && image._id) {
      return $filter('filter')(self.images, {_id: image._id})[0].url();
    }
  }

  function remove (){
    var check = confirm("Are you sure you want to delete client?");
    if(check){
      self.albums.remove($stateParams.albumId).then(function(data){
        console.log("Removed Album", data);
        $location.path('/admin');
      },function(err){
        console.log("Error removing album", err);
      });
    }
  }
}

})(angular);
