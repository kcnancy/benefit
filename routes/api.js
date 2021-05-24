/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
var mongoose = require("mongoose");
var passport = require("passport");
var config = require("../config/database");
require("../config/passport")(passport);
var express = require("express");
var jwt = require("jsonwebtoken");
var router = express.Router();
var User = require("../models/user");
var Food = require("../models/food");

router.post("/signup", function (req, res) {
  if (!req.body.username || !req.body.password) {
    res.json({ success: false, msg: "Please pass username and password." });
  } else {
    var newUser = new User({
      username: req.body.username,
      password: req.body.password,
    });
    // save the user
    newUser.save(function (err) {
      if (err) {
        return res.json({ success: false, msg: "Username already exists." });
      }
      res.json({ success: true, msg: "Successful created new user." });
    });
  }
});

router.post("/signin", function (req, res) {
  User.findOne(
    {
      username: req.body.username,
    },
    function (err, user) {
      if (err) throw err;

      if (!user) {
        res
          .status(401)
          .send({
            success: false,
            msg: "Authentication failed. User not found.",
          });
      } else {
        // check if password matches
        user.comparePassword(req.body.password, function (err, isMatch) {
          if (isMatch && !err) {
            // if user is found and password is right create a token
            var token = jwt.sign(user.toJSON(), config.secret, {
              expiresIn: 604800, // 1 week
            });
            // return the information including token as JSON
            res.json({ success: true, token: "JWT " + token });
          } else {
            res
              .status(401)
              .send({
                success: false,
                msg: "Authentication failed. Wrong password.",
              });
          }
        });
      }
    }
  );
});

router.get(
  "/signout",
  passport.authenticate("jwt", { session: false }),
  function (req, res) {
    req.logout();
    res.json({ success: true, msg: "Sign out successfully." });
  }
);

router.post(
  "/food",
  passport.authenticate("jwt", { session: false }),
  function (req, res) {
    var token = getToken(req.headers);
    if (token) {
      console.log(req.body);
      var newBook = new Book({
        isbn: req.body.isbn,
        title: req.body.title,
        author: req.body.author,
        publisher: req.body.publisher,
      });

      //This is the book info from the example, we will need to modify to look for our data.

      newFood.save(function (err) {
        if (err) {
          return res.json({ success: false, msg: "Save food diary failed." });
        }
        res.json({ success: true, msg: "Successful created new food diary." });
      });
    } else {
      return res.status(403).send({ success: false, msg: "Unauthorized." });
    }
  }
);

router.get(
  "/food",
  passport.authenticate("jwt", { session: false }),
  function (req, res) {
    var token = getToken(req.headers);
    if (token) {
      // eslint-disable-next-line array-callback-return
      Food.find(function (err, foods) {
        if (err) return next(err);
        res.json(foods);
      });
    } else {
      return res.status(403).send({ success: false, msg: "Unauthorized." });
    }
  }
);

router.post('/food',
  // passport.authenticate("jwt", { session: false }),
  function (req, res) {
    var token = true;
    // var token = getToken(req.headers);
    if (token) {
      // eslint-disable-next-line array-callback-return
      Food.create(req.body)
      .then(data => res.json(data))
      .catch(err => res.json(err))
    } else {
      return res.status(403).send({ success: false, msg: "Unauthorized." });
    }
  }

)

getToken = function (headers) {
  if (headers && headers.authorization) {
    var parted = headers.authorization.split(" ");
    if (parted.length === 2) {
      return parted[1];
    } else {
      return null;
    }
  } else {
    return null;
  }
};

module.exports = router;
