Albums = new FS.Collection("albums", {
  stores:[
    new FS.Store.GridFS("original")
  ],
  filter: {
    allow: {
      contentTypes:['album/*']
    }
  }
});

if (Meteor.isServer){
  Albums.allow({
    insert: function(userId) {
      return(userId ? true:false);
    },
    remove: function(userId){
      return (userId ? true:false);
    },
    download: function(){
      return true;
    },
    update: function(userId){
      return(userId? true:false);
    }
  });

  Meteor.publish('albums', function(){
    return Albums.find({});
  });
}
