var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var cors = require('cors');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var income = require('./routes/income_route');
var expense = require('./routes/expense_route');
var note = require('./routes/note_route');
var user = require('./routes/user_route');
var forgotpassword = require('./routes/forgotPassword_route');
//one stands for fkuserid
var incomeone = require('./routes/incomeone_route');
var expenseone = require('./routes/expenseone_route');
var noteone = require('./routes/noteone_route');
var userone = require('./routes/userone_route');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(cors());

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

app.use('/income', income);
app.use('/expense', expense);
app.use('/note', note);
app.use('/user', user);
app.use('/forgotpassword', forgotpassword);
//one stands for fkuserid
app.use('/incomeone', incomeone);
app.use('/expenseone', expenseone);
app.use('/noteone', noteone);
app.use('/userone', userone);

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