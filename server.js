const express = require("express");
const mongoose = require("mongoose");
// const routes = require("./routes");
const passport = require("passport");
const session = require("express-session");
const bodyParser = require("body-parser");
const connectEnsureLogin = require("connect-ensure-login");
const app = express();
const User = require("./models/user");

app.use(session({
    secret: 'r8q,+&1LM3)CD*zAGpx1xm{NeQhc;#',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60 * 60 * 1000 } // 1 hour
  }));

const LocalStrategy = require("passport-local").Strategy;
passport.use(new LocalStrategy(User.authenticate()));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

passport.use(User.createStrategy());

app.use(passport.initialize());
app.use(passport.session());

const PORT = process.env.PORT || 3001;

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// app.use(routes);

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/benefitDB", {
  useNewUrlParser: true,
});

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
