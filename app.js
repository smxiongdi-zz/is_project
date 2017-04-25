let express = require('express');
let app = express();
let bodyParser = require('body-parser');
let path = require('path');

app.use(express.static('static'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

let homeRouter = require('./routes/homeRouter.js');
let loginRouter = require('./routes/loginRouter.js');
let registerRouter = require('./routes/registerRouter.js');

app.use('/home', homeRouter);
app.use('/login', loginRouter);
app.use('/register', registerRouter);

app.get('/', ((req, res) => {
	res.sendFile(path.join(__dirname+'/signin.html'));
}));
app.get('/login', ((req, res) => {
	res.sendFile(path.join(__dirname+'/signin.html'));
}));
/*
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

app.listen(3000, () => {
	console.log('listening on 3000');
});
