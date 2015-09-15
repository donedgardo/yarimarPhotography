//Add admin user if no users in database
if(Meteor.isServer) {
  Meteor.startup(function() {
    if (Meteor.users.find().count() === 0){

      var options= {
        username : "admin",
        email    : "admin@email.com",
        password : "admin",
        profile : { name : "admin"},
        admin : "true"
      };

      Accounts.createUser(options);
    }
  });
}
