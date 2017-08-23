// npm packages
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');
var session = require('express-session');

// static directory
app.use(express.static('/home/zach/is_project/client/'));

// use bodyParser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// sessions
app.set('trust proxy', 1);

app.use(session({
	secret: 'xxxx',
	resave: true,
	saveUninitialized: true,
	cookie: { secure: false, HttpOnly: false },
}));

var apiRouter = require('./routes/apiRouter.js');
var confLinkRouter = require('./routes/confLinkRouter.js');
var homeRouter = require('./routes/homeRouter.js');

app.use('/api', apiRouter);
app.use('', confLinkRouter);
app.use('*', homeRouter);

app.listen(9876, () => {
	console.log('listening on 9876', "45.32.207.200");
});
