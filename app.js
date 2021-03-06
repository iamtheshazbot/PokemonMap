var express = require('express');
var path = require('path');
assert = require('assert');


var pokeRouter = require('./routes/pokeRouter');

//Create the App
var app = express();

//WebApp page
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + '/index.html'));
});

//part that handles all the routing stuff
app.use('/', pokeRouter);

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
    res.json({
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.json({
    message: err.message,
    error: {}
  });
});


module.exports = app;
