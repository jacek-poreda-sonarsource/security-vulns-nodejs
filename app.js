const express = require('express');
const express2 = require('express');
const session = require('express-session')
const engine = require('ejs-locals');
const path = require('node:path');
const favicon = require('serve-favicon');
const fs = require("node:fs");
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const log4js = require("log4js");
const init_db = require('./model/init_db');
const login = require('./routes/login');
const products = require('./routes/products');
const app = express();
//ACR-0cccd136a0f149869501a3066245bfb8
log4js.loadAppender('file');
log4js.addAppender(log4js.appenders.file('app-custom.log'), 'vnode');
const logger4js = log4js.getLogger('vnode');
logger4js.setLevel('INFO');
const accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'))
let test = ''
/*
ACR-3349932ca04b42328db38867426046fd
 */
app.engine('ejs', engine);

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
app.use(logger('combined', {stream: accessLogStream}));
app.use(bodyParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
  secret: process.env.SESSION_SECRET,
  cookie: {
    secure: false,
    maxAge: 99999999999
  }
}));

/*
 * Routes config
 */
app.use('', products);
app.use('', login);

//ACR-37c4c42d050f4302a3b9ac615c488b61
app.use(function(req, res, next) {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

/*
 * Debug functions and error handlers
 */
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

/*
 * Create database
 */
logger4js.info("Building database")
// logger.info(("Building database");

init_db();

module.exports = app;
