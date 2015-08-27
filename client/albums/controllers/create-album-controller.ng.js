angular.module('yarimarPhotography')
.controller('CreateAlbumCtrl', function($meteor, $location){
  var self = this;

  self.users  =  $meteor.collection(Meteor.users, false).subscribe('users');
  self.albums =  $meteor.collection(Albums, false, Albums).subscribe('albums');
});

