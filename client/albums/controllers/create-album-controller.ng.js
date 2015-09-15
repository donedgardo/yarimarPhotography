(function(angular, undefined){
  "use strict";

  angular
  .module('yarimarPhotography')
  .controller('CreateAlbumCtrl', CreateAlbumController);

function CreateAlbumController($meteor, $location, $scope, $mdDialog){
  var self = this;

  self.users  =  $meteor.collection(Meteor.users, false).subscribe('users');
  self.images =  $meteor.collectionFS(Images, false, Images).subscribe('images');
  self.albums =  $meteor.collection(Albums, false).subscribe('albums');
  self.newAlbum = {};
  self.preview = []
  self.newAlbum.images = [];
  self.addImages = addImages;
  self.createAlbum = createAlbum;
  console.log("users: ", self.users);

  function addImages(images){
    angular.forEach(images, function(image){
      self.preview.push(image);

      var reader = new FileReader();
      reader.onload = function(e){
        $scope.$apply(function() {
          self.imgSrc = e.target.result;
          self.images.save(self.imgSrc).then(function(result){
            self.newAlbum.images.push({
              _id : result[0]._id._id,
              name : image.name,
              rating : 0
            });
          });
        });
      };
      reader.readAsDataURL(image);
      console.log("New Album", self.newAlbum);
    });
  }

  function createAlbum(newAlbum){
    self.albums.save(newAlbum).then(function(data){
      $mdDialog.hide(data[0]._id);
      console.log("Saved albums successfull", data[0]._id);
    }, function(err){
      console.log("Error creating album", err);
    });

  }
}
})(angular);
