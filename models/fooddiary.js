var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var FoodSchema = new Schema({
  protein: {
    type: String,
    required: true
  },
  carbs: {
    type: String,
    required: true
  },
  fiber: {
    type: String,
    required: true
  },
  sodium: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Food', FoodSchema);