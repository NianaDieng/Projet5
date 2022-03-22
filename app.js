const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
//import les models
const db=require("./models")
//

const indexRouter = require('./routes/index');
const articlesRouter = require('./routes/articles');
const blogRouter = require('./routes/blog');
const contactRouter = require('./routes/contact');
const detailsArticlesRouter = require('./routes/detail');
const AproposRouter = require('./routes/apropos');

//syscronise db
// db.sequelize.sync()

//
const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/articles', articlesRouter);
app.use('/blog', blogRouter);
app.use('/contact', contactRouter);
app.use('/detailsArticles', detailsArticlesRouter);
app.use('/Apropos', AproposRouter);


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
