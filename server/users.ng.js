Meteor.publish("users", function(){
  return Meteor.users.find({}, {fields: {emails: 1, username: 1, profile: 1, note: 1, admin: 1}});
});

Meteor.users.allow({
  insert: function(userId,doc){
    var user = findUser(userId);
    if(user && user.admin)
      return true;
    else
      return false;
  },
  update: function(userId, doc, fields, modifier){
    var user = findUser(userId);
    if(user && user.admin)
      return true;
    else
      return false;
  },
  remove: function(userId, doc){
    var user = findUser(userId);
    if (user && user.admin)
      return true;
    else
      return false;
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



