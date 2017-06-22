// the /login router
var express = require('express');
var router = express.Router();
var bcrypt = require('bcryptjs');

/* router.get('/', ((req, res) => {
	res.sendFile('/home/zach/is_project/views/login.html');
}));
*/

router.post('/post', ((req, res) => {
	console.log('request accepted');
	console.log(req.body.email);
	console.log(req.body);

	sdet = req.session;

	var db = require('/home/zach/is_project/server/db/accounts_connec.js');
	var User = require('/home/zach/is_project/server/models/user_model.js');
	var loginUser = new User({});
	loginUser.uname = req.body.email;
	console.log("PASSWORD " + req.body.pass);

	var hashpass = loginUser.encryptPass(req.body.pass);
	var thisUser = User.find({uname: loginUser.uname}).limit(1);

	thisUser.then((x, err) => {
		// use toasts to display no such user exists
		x.length > 0 ? bcompare() /* compare */ : res.send({err:0, redirect: '/login', message: 'no user found'}), console.log('no user');
	});

	var bcompare = thisUser.then((x, err) => {
		bcrypt.compare(req.body.pass, x[0].upass, function(err, result) {
			// success, login
			console.log('success');
			sdet.email = req.body.email; 
			console.log("SDET--- " + sdet.email);
			res.send({err:0, redirect: '/profile'});
		});
	});

/*
	thisUser.then((x, err) => { 
		x.map((y) => { 
			console.log(y.uname);
			bcrypt.compare(req.body.pass, y.upass, function(err, res) {
				console.log("FOUND");
			});
		});
	});	
*/



//	res.redirect('/Users/SB/Desktop/express-prac/views/success.html');
//	res.sendFile('/Users/SB/Desktop/express-prac/views/regcon.html');
}));

module.exports = router;
