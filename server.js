/* eslint-disable no-unused-vars */
const express = require("express");
const mongoose = require("mongoose");
// const routes = require("./routes");
const passport = require("passport");
const session = require("express-session");
const bodyParser = require("body-parser");
const cookieParser = require('cookie-parser');
//const connectEnsureLogin = require("connect-ensure-login");
const app = express();
const User = require("./models/user");
const path = require("path");
const cors = require("cors");
const logger = require("morgan");
const morgan = require("morgan");
const config = require("./config/database");

require("./config/passport")(passport);
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/benefitdb', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});


//view engine setup goes here
app.set('pages', path.join(__dirname, 'pages'));
//app.set('view engine')

app.use(cors());

// uncomment after placing your favicon in /public
// eslint-disable-next-line no-undef
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));
app.use(morgan('dev'));
app.use(passport.initialize());
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

/**
 * Server Routes
 */


// Calling routes
let authentication = require('./routes/auth');
let api = require('./routes/api');

//let food = require('./routes/food');

// Using routes
app.use('/api', authentication);
app.use('/api', api);

//app.use('/api', passport.authenticate('jwt', { session: false}), food);



app.get('/', function(req, res) {
    res.send('Page under construction.');
});

/**
 * End Server Routes
 */

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  let err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

// module.exports = app;

// app.use(
//   session({
//     secret: "r8q,+&1LM3)CD*zAGpx1xm{NeQhc;#",
//     resave: false,
//     saveUninitialized: true,
//     cookie: { maxAge: 60 * 60 * 1000 }, // 1 hour
//   })
// );

// const LocalStrategy = require("passport-local").Strategy;
// passport.use(new LocalStrategy(User.authenticate()));

// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

// passport.use(User.createStrategy());

// app.use(passport.initialize());
// app.use(passport.session());

const PORT = process.env.PORT || 3001;

// passport.serializeUser(User.serializeUser());
// passport.deserializeUser(User.deserializeUser());


// // app.use(routes);

// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/benefitDB", {
//   useNewUrlParser: true,
// });
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
