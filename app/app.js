// TEST MODIFICATION
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require("mongoose");

mongoose.connect("mongodb://admin:nwhacks@ds045684.mlab.com:45684/nwhacks");

var routes = require('./routes/index');
var main_redirect = require("./routes/main_redirect");
var api = require("./routes/api");
var mainpage = require("./routes/mainpage");
var new_review_form = require("./routes/new_review_form");

var app = express();
var port = process.env.PORT || 3000;

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// grab uni from url, attach to req, continue requesting
app.all("/:uni/:fac/*", function(req, res, next) {
  if (req.uni && req.fac) {
    console.log("uni or fac alread in request");
    next();
  }

  req.uni = req.params.uni;
  req.fac = req.params.fac;
  next();
});

app.use('/', routes);
app.use("/main_redirect", main_redirect);
app.use("/api", api);
app.use("/*/*/main", mainpage);
app.use("/*/*/new_review_form", new_review_form);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


app.listen(port);
