var mongoose = require('mongoose');
require('mongoose-bigdecimal');
mongoose.connect('mongodb://localhost/roadtrip_development');
var BigDecimal = require('big.js');
var Schema = mongoose.Schema;

var locationSchema = new Schema({
  city: String,
  desc: String,
  lat: { type: Schema.Types.BigDecimal },
  lng: { type: Schema.Types.BigDecimal },
  arrival: Date,
  departed: Date,
  created_at: Date,
  updated_at: Date
});

// the schema is useless so far
// we need to create a model using it
var Location = mongoose.model('Location', locationSchema);

// make this available to our users in our Node applications
module.exports = Location;
