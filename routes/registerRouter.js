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
	var User = require('/home/zach/is_project/models/user_model.js');

	var thisUser = new User({ /*uname: req.body.email, upass: thisUser.encryptPass(req.body.pass)*/ });

	thisUser.uname = req.body.email;
	// create a new model collection that searches if the email is already approved
	// userReg ? 'already registered' : userTempReg && !userReg ? 'user conf already sent' : store hash && save
	
	var hashpass = thisUser.encryptPass(req.body.pass);
	hashpass.then((hash, err) => { 
		thisUser.upass = hash;
		thisUser.save();
	});

/*
	thisUser.save(function (err, thisUser) {
		if (err) return console.error(err);
		else { db.close(); }
	});
*/

	//
	res.send({err:0, redirect: '/home'});
//	res.redirect('/Users/SB/Desktop/express-prac/views/success.html');
//	res.sendFile('/Users/SB/Desktop/express-prac/views/register.html');
}));

module.exports = router;
