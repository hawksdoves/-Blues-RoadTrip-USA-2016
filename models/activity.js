var mongoose = require('mongoose');
require('mongoose-bigdecimal');
// mongoose.connect('mongodb://localhost/roadtrip_development');
// var BigDecimal = require('big.js');
var Schema = mongoose.Schema;

var activitySchema = new Schema({
  name: String,
  desc: String,
  url: String,
  pictures: [{ type: Schema.Types.ObjectId, ref: 'Picture' }],
  location: { type: Schema.Types.ObjectId, ref: 'Location' },
  created_at: Date,
  updated_at: Date
});

// the schema is useless so far
// we need to create a model using it
var Activity = mongoose.model('Activity', activitySchema);

// make this available to our users in our Node applications
module.exports = Activity;
