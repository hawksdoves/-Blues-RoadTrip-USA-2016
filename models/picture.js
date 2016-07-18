var mongoose = require('mongoose');
require('mongoose-bigdecimal');
var Schema = mongoose.Schema;

var pictureSchema = new Schema({
  name: String,
  desc: String,
  activity: { type: Schema.Types.ObjectId, ref: 'Activity' },
  created_at: Date,
  updated_at: Date
});

// the schema is useless so far
// we need to create a model using it
var Picture = mongoose.model('Picture', activitySchema);

// make this available to our users in our Node applications
module.exports = Picture;
