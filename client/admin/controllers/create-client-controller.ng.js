angular.module("yarimarPhotography")
.controller("CreateClientCtrl", function($stateParams, $meteor, $location){
  var self = this;



  self.createUser = function(){
    $meteor.createUser({
      username: self.newUser.username,
      email: self.newUser.email, 
      email1: self.newUser.email1,
      email2: self.newUser.email2,
      password: self.newUser.password,
      note: self.newUser.note,
      profile: {name: self.newUser.fullName}
    }).then(function(){
      console.log('Created user');
      $location.path("/admin");
    }, function(err){
      console.log('Creating user error',err);
    });
  }

});
