// the /register router
var express = require('express');
var router = express.Router();

const saltRounds = 10;

router.get('/', ((req, res) => {
	res.sendFile('/home/zach/is_project/views/register.html');
}));

router.post('/post', ((req, res) => {
	console.log('request accepted');
	console.log(req.body.email);
	console.log(req.body);

	var User = require('/home/zach/is_project/models/user_model.js');

	var thisUser = new User({ /*uname: req.body.email, upass: User.encryptPass(req.body.pass)*/ });

	thisUser.uname = req.body.email;
	thisUser.upass = thisUser.encryptPass(req.body.pass, function() { thisUser.save() }); 

	console.log(thisUser.pass);
	/*
		thisUser.save(function (err, thisUser) {
			if (err) return console.error(err);
			else { db.close(); }
		});
	});
	*/

	//
	res.send({err:0, redirect: '/home'});
//	res.redirect('/Users/SB/Desktop/express-prac/views/success.html');
//	res.sendFile('/Users/SB/Desktop/express-prac/views/register.html');
}));

module.exports = router;
