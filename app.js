var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes');
var usersRouter = require('./routes/users');
var bodyParser = require('body-parser');
var app = express();

const mongoose = require("mongoose");
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/merryMeet";
require("dotenv").config(); 




// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true, limit: '50mb'}))
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json({limit: '50mb'}));


app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use('/api', indexRouter);
app.use('/api/users', usersRouter);

app.get('*', (req,res) => {
  res.sendFile(path.join(__dirname + '/public/index.html'));
})


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  console.log(req);
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

//connect to Mongo DB
mongoose.Promise = Promise; 
mongoose.connect(MONGODB_URI, function(err){
  if (err) throw err;
  console.log("connected to MongoDB");
});


var port = process.env.PORT || '3001';
app.listen(port, () => {
  console.log("🌕  Server listening on port " + port);
});

module.exports = app;
