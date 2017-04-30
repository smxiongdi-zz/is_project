// the /login router
var express = require('express');
var router = express.Router();

router.get('/', ((req, res) => {
	res.sendFile('/home/zach/is_project/views/login.html');
}));

router.post('/post', ((req, res) => {
	console.log('request accepted');
	console.log(req.body.email);
	console.log(req.body);

	var db = require('/home/zach/is_project/models/user_connec.js');
	var User = require('/home/zach/is_project/models/user_model.js');
	var loginUser = new User({});
	loginUser.uname = req.body.email;
	console.log("PASSWORD " + req.body.pass);

	var hashpass = loginUser.encryptPass(req.body.pass);
	var user_array = User.find({uname: loginUser.uname}, function(err, data) { /* console.log(err, data) */});

	user_array.then((x, err) => { 
		x.map((y) => { 
			console.log(y.uname);
			bcrypt.compare(req.body.pass, y.upass, function(err, res) {
				console.log("FOUND");
			});
		});
	});	



	res.send({err:0, redirect: '/home'});
//	res.redirect('/Users/SB/Desktop/express-prac/views/success.html');
//	res.sendFile('/Users/SB/Desktop/express-prac/views/regcon.html');
}));

module.exports = router;
