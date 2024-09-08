var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

// preparing using front-end routes or path
var coursesSample = require('./routes/courses(Without ORM)');
var users = require('./routes/user');
var courseCard = require('./routes/CourseCard')
var Add_Modify = require('./routes/Add_Modify');
var Assignment_Table = require('./routes/Assignment_Table')
var CourseDetails = require('./routes/CourseDetails');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/',users);
app.use('/coursesSample', coursesSample); //Done to practice db connect without ORM
app.use('/courses', courseCard);
app.use('/courseDetails', CourseDetails);
app.use('/editContent', Add_Modify);
app.use('/assignments', Assignment_Table);


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

const mongoose = require('mongoose');

// Connection URL
const mongoURI = 'mongodb://localhost:27017/LMS-Fullstack_Assignment'; // Replace with your MongoDB URI

// Connect to MongoDB
mongoose.connect(mongoURI);
const db = mongoose.connection;

// Handle connection events
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

module.exports = app;
