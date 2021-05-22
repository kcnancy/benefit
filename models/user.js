// dependencies
const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');

// Create Model
const Schema = mongoose.Schema;

const User = new Schema({
    _id: { type: String, auto: true},
    email: {type: String, required: true, unique: true},

    
});
// Export Model
User.plugin(passportLocalMongoose);

module.exports = mongoose.model('userData', User, 'userData');
