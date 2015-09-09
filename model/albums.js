Albums = new Mongo.Collection('albums');

Albums.allow({
  insert: function (userId, album){
    return userId;
  },
  update: function (userId, album, fields, modifier){
    return userId;
  },
  remove: function (userId, album){
    return userId;
  }
});


