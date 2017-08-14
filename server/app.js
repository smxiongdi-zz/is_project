// npm packages
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');
var session = require('express-session');
var cloudinary = require('cloudinary');

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

cloudinary.config({
	cloud_name: 'exlang-io',
	api_key: '997729394514668',
	api_secret: '0j5wq1WQe3FM92smitdxwGGCYiQ'
});

var apiRouter = require('./routes/apiRouter.js');
var confLinkRouter = require('./routes/confLinkRouter.js');
var homeRouter = require('./routes/homeRouter.js');

app.use('/api', apiRouter);
app.use('', confLinkRouter);
app.use('*', homeRouter);

app.listen(9876, () => {
	console.log('listening on 9876', "45.32.207.200");
});
