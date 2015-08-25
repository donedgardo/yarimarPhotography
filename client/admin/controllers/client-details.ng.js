angular.module('yarimarPhotography') 
.controller('ClientDetailsCtrl', function($stateParams, $meteor, $location, $rootScope){
  var self = this; 
  self.user =  $meteor.object(Meteor.users, $stateParams.clientId); 

  self.users = $meteor.collection(Meteor.users).subscribe('users');

  self.remove = function(){
    var check = confirm("Are you sure you want to delete client?");
    if( check && $rootScope.currentUser.admin){
      $meteor.call('adminremove', self.user._id).then(function(){
        console.log('Succesfull removed user');
        $location.path('/admin');
      },function(err){
        console.log("Error removing user", err);
      });
    }
  };

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
