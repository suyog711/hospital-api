var express = require('express');
var path = require('path');
var logger = require('morgan');
var config = require('./config/config');
require('./config/db.config');
// var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users');

var app = express();
app.listen(config.port, function (err, done) {
  if (err) {
    console.log('error in listening');
    return;
  }
  console.log('listening in port: ', config.port);
})

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// app.use('/', indexRouter);
// app.use('/users', usersRouter);



