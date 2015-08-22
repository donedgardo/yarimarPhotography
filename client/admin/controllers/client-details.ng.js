angular.module('yarimarPhotography') 
.controller('ClientDetailsCtrl', function($stateParams, $meteor){
  var self = this; 
  self.user =  $meteor.object(Meteor.users, $stateParams.clientId); 
  self.resetPassword = function (){
    $meteor.forgotPassword(
      {email: self.user.emails[0].address})
      .then(function(){
      console.log('Reset email sent');
    }, function(err){
      console.log('Error', err);
    });
  };
});
