var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var session = require("express-session");
var mongoose = require("mongoose");
var helmet = require("helmet");
var RateLimit = require("express-rate-limit");

mongoose.connect("mongodb://localhost:27017/supweather", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
var db = mongoose.connection;
db.on("open", function(){
  console.log("Connection is now open with database");
});

var indexRouter = require('./routes/index');
var homeRouter = require('./routes/home');

var app = express();

//helmet setup
app.use(helmet());

//Rate limit for dos attacks
const limiter = new RateLimit({
  windowMS: 15*60*1000,
  max: 500,
  delayMs: 0
});
app.use(limiter);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({
  saveUninitialized: true,
  resave: true,
  cookie: {
    maxAge  : new Date(Date.now() + 3600000)
  },
  secret: "my secret key"
}));

app.use('/', indexRouter);
app.use('/home', homeRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
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

module.exports = app;
