var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');

app.use(express.static('static'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var homeRouter = require('./routes/homeRouter.js');
var loginRouter = require('./routes/loginRouter.js');
var registerRouter = require('./routes/registerRouter.js');
var confLinkRouter = require('./routes/confLinkRouter.js');
var FOFRouter = require('./routes/404Router.js');

app.use('/home', homeRouter);
app.use('/login', loginRouter);
app.use('/register', registerRouter);
app.use('', confLinkRouter);
app.use('*', FOFRouter);

app.get('/', ((req, res) => {
	res.sendFile(path.join(__dirname+'/signin.html'));
}));
/*
app.get('/login', ((req, res) => {
	res.sendFile(path.join(__dirname+'/signin.html'));
}));
app.get('/register', ((req, res) => {
	res.sendFile(path.join(__dirname+'/register.html'));
}));
app.get('/regcon', ((req, res) => {
	res.sendFile(path.join(__dirname+'/views/regcon.html'));
}));
app.post('/regcon/post', ((req, res) => {
	console.log('request accepted');
	console.log(req.body.email);
	console.log(req.body);
}));
*/
app.get('/test2', ((req, res) => {
	res.sendFile(path.join(__dirname+'/test.html'));
}));

app.listen(9876, () => {
	console.log('listening on 9876', "45.32.207.200");
});
