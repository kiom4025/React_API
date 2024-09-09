var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var fs = require('fs');
var rfs = require('rotating-file-stream')

// preparing using front-end routes or path
var coursesSample = require('./routes/courses(Without ORM)');
var users = require('./routes/user');
var courseCard = require('./routes/CourseCard')
var Add_Modify = require('./routes/Add_Modify');
var Assignment_Table = require('./routes/Assignment_Table')
var CourseDetails = require('./routes/CourseDetails');
var authRouter = require('./routes/Auth');

var app = express();

// app level middleware
app.use((req, res, next) => {
  console.log("Middleware call from app level");
  next();
});


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// --------- Logger (Start)

// create a write stream (in append mode) {This is to create error log in a single file}
// var accessLogStream = fs.createWriteStream(path.join(__dirname, 'accessNew.log'), { flags: 'a' }); 

// create a rotating write stream {This is to create error log in separate file for each day}
var accessLogStream = rfs.createStream('access.log', {
  interval: '1d', // rotate daily
  path: path.join(__dirname, 'log')
})

// 1. Error Log to the console
app.use(logger('dev'));
// 2. Customized Error Log (ref: https://www.npmjs.com/package/morgan#short)
// To get the log in the format we want - We need to place the respective token (ref above site) in order and we can also keep delimiter like '|' in-between token as per our needs
app.use(logger('"Date_Time": :date[web] | "IP": :remote-addr | "Method_and_Route": ":method > :url" | "StatusCode": :status | "HTTPversion": :http-version | "ResponseTime": :response-time ms | "User": ":remote-user"', { stream: accessLogStream }));
// 3. Pre-Defined Error Log Format
// app.use(logger('combined', { stream: accessLogStream }));

// --------- Logger (End)

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/auth', authRouter);
app.use('/users', users);
app.use('/coursesSample', coursesSample); //Done to practice db connect without ORM
app.use('/coursesCard', courseCard);
app.use('/courseDetails', CourseDetails);
app.use('/editContent', Add_Modify);
app.use('/assignmentTable', Assignment_Table);


// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
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
