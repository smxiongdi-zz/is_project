// the /register router
var express = require('express');
var router = express.Router();
var Promise = require('promise');

router.get('/', ((req, res) => {
	res.sendFile('/home/zach/is_project/views/register.html');
}));

router.post('/post', ((req, res) => {
	console.log('request accepted');
	console.log(req.body.email);
	console.log(req.body);

	var db = require('/home/zach/is_project/models/user_connec.js');
	var TempUser = require('/home/zach/is_project/models/temp_user_model.js');

	var tempUser = new TempUser({ /*uname: req.body.email, upass: tempUser.encryptPass(req.body.pass)*/ });
	var regUser = User.find({uname: req.body.email}).limit(1);

	tempUser.uname = req.body.email;
	// create a new model collection that searches if the email is already approved
	// userReg ? 'already registered' : userTempReg && !userReg ? 'user conf already sent' : store hash && save

	regUser.then((x, err) => {
		x.length > 0 ? console.log('already registered') : hashThis();
	});

	var hashThis = _ => {
		var hashpass = tempUser.encryptPass(req.body.pass);
		hashpass.then((hash, err) => {
			tempUser.upass = hash;
			tempUser.save();
			email_verif();
		});
	}

	var email_verif = _ => {
		// send email
	}

/*
	tempUser.save(function (err, tempUser) {
		if (err) return console.error(err);
		else { db.close(); }
	});
*/

	res.send({err:0, redirect: '/home'});
//	res.redirect('/Users/SB/Desktop/express-prac/views/success.html');
//	res.sendFile('/Users/SB/Desktop/express-prac/views/register.html');
}));

module.exports = router;
