const createError = require('http-errors');
const express = require('express');
const mongoose = require('mongoose');
const Articlemodel = require('./config/Articlemodel');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const app = express();

// View engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Use Router
const indexRouter = require('./routes/index');
const articlesRouter = require('./routes/articles');
const blogRouter = require('./routes/blog');

// Render page
app.use('/', indexRouter);
app.use('/articles', articlesRouter);
app.use('/blog', blogRouter);

// Catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// Error handler
app.use(function(err, req, res, next) {
  // Set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // Render the error page
  res.status(err.status || 3000);
  res.render('error');
});

app.listen(8000, () => console.log("Server started listening on port: 8000"));
module.exports = app;