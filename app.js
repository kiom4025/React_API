var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

// place holder routes
var valueRouter = require('./routes/Placeholder_Routes/valueResponse-Sample');
var subroute_valueRouter = require('./routes/Placeholder_Routes/valueResponse-Sample (with Subroute)');
var subroute_valueRouter2 = require('./routes/Placeholder_Routes/valueResponse-Sample (with Subroute) 2');

// preparing using front-end routes or path
var courses = require('./routes/courses');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', valueRouter);
app.use('/courses', courses);
app.use('/courseDetails', valueRouter);
app.use('/enrollPage', valueRouter);
app.use('/editContent', subroute_valueRouter);
app.use('/assignments', subroute_valueRouter2);


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
