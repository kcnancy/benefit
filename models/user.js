// dependencies
const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");
var bcrypt = require("bcryptjs");
// Create Model
const Schema = mongoose.Schema;

const User = new Schema({

  _id: { type: String, auto: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});
User.pre("save", function (next) {
  var user = this;
  if (this.isModified("password") || this.isNew) {
    bcrypt.genSalt(10, function (err, salt) {
      if (err) {
        return next(err);
      }
      bcrypt.hash(user.password, salt, null, function (err, hash) {
        if (err) {
          return next(err);
        }
        user.password = hash;
        next();
      });
    });
  } else {
    return next();
  }

});

User.methods.comparePassword = function (passw, cb) {
  bcrypt.compare(passw, this.password, function (err, isMatch) {
    if (err) {
      return cb(err);
    }
    cb(null, isMatch);
  });
};

console.log (User)
// Export Model
User.plugin(passportLocalMongoose);

module.exports = mongoose.model("userData", User, "userData");
