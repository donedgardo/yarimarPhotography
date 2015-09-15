Meteor.publish('albums', function(searchString){
  if (searchString==null)
    searchString='';
  var loggedInUser = Meteor.users.findOne({_id:this.userId});
  if (searchString){
    return Albums.find({
      'name' : { '$regex' : '.*' + searchString || '' + '.*', '$options' : 'i' }
    });
  }else{
    return Albums.find({});
  }
});
