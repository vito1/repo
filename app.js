'use strict';
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var users = require('./routes/users');
var login = require('./routes/login');
var login2 = require('./routes/login2');
var login3 = require('./routes/login3');
var sandbox = require ('./routes/sandbox');
var animations = require('./routes/animations');
var artplatformlogin = require('./routes/login3');
var forexindex = require('./routes/forex')
var toDoApp = require ('./routes/todo')
var flyingCar = require('./routes/flyingcar')
var http = require('./routes/http')
var historyoftech = require('./routes/historyoftech')
var talkbyra = require('./routes/talkbyra')
var cssgenerator = require('./routes/cssgenerator')
var cssblank = require('./routes/cssblank')
var jsgenerator = require('./routes/jsgenerator')
var jsblank = require('./routes/jsblank')

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', toDoApp);
app.use('/users', users);
app.use('/login', login);
app.use('/login2', login2);
app.use('/login3', login3);
app.use('/sandbox', sandbox);
app.use('/animations', animations);
app.use('/flyingcar', flyingCar)
app.use('/forex', forexindex)
app.use('/http', http)
app.use('/historyoftech', historyoftech)
app.use('/talkbyra', talkbyra)
app.use('/cssgenerator', cssgenerator)
app.use('/cssblank', cssblank)
app.use('/jsgenerator', jsgenerator)
app.use('/jsblank', jsblank)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
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

module.exports = app;
