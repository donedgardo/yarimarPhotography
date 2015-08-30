Meteor.publish("users", function(){
  var loggedInUser = Meteor.users.findOne({_id: this.userId});
  if (loggedInUser && loggedInUser.admin){
    return Meteor.users.find({}, {fields: {emails: 1, username: 1, profile: 1, note: 1, admin: 1}});
  }
  else{
    return Meteor.users.find({}, {fields:{emails:1, username:1, profile:1, admin:1}});
  }
});



Meteor.methods({
  admincreate: function(options){
    var user = findUser(this.userId);
    if (user && user.admin)
      return Accounts.createUser(options);
  },
  adminremove: function(userIdToRemove){
    var user = findUser(this.userId);
    if(user && user.admin)
      return Meteor.users.remove({_id:userIdToRemove});
  }
});

Meteor.users.allow({
    update: function(userIdToUpdate, doc, fields, modifier){
      var user = findUser(userIdToUpdate);
      if(user)
        return (user.admin);
      }
});


Accounts.onCreateUser(function(options, user){
  if(options.email)
    user.emails[0] = {address : options.email , verified: 'false'};
  if(options.email1)
    user.emails[1] = {address : options.email1, verified: 'false'};
  if(options.email2)
    user.emails[2] = {address : options.email2, verified: 'false'};
  if(options.note)
    user.note = options.note;
  if(options.password)
    user.password = options.password;
  if(options.profile)
    user.profile = options.profile;
  return user;
});


function findUser(userId){
  return  Meteor.users.findOne({_id: userId});
}



