// the /api router
var express = require('express');
var router = express.Router();
var bcrypt = require('bcryptjs');
var Promise = require('promise');
var randstr = require('randomstring');
var nev = require('email-verification')(require('mongoose'));

// login API
router.post('/login', ((req, res) => {

	var db = require('/home/zach/is_project/server/db/accounts_connec.js');
	var User = require('/home/zach/is_project/server/models/user_model.js');
	var loginUser = new User({});

	loginUser.uname = req.body.email;

	var hashpass = loginUser.encryptPass(req.body.pass);
	var thisUser = User.find({uname: loginUser.uname}).limit(1);

	thisUser.then((x, err) => {
		x.length > 0 ? bcompare() /* compare */ : res.send({err:0, redirect: '/login', message: 'no user found'}), console.log('no user');
	});

	var bcompare = thisUser.then((x, err) => {
		bcrypt.compare(req.body.pass, x[0].upass, function(err, result) {
			req.session.uname = req.body.email;
			req.session.save();
		});
	});

}));

// logout API 
router.post('/logout', ((req, res) => {
	console.log('request accepted');
	req.session.destroy();
}));

// register API 
router.post('/register', ((req, res) => {
	var db = require('/home/zach/is_project/server/db/accounts_connec.js');

	// setup proper promise for both to complete, id est, promises.all()
	var TempUser = require('/home/zach/is_project/server/models/temp_user_model.js');
	var User = require('/home/zach/is_project/server/models/user_model.js');

	var tempUser = new TempUser({ /*uname: req.body.email, upass: tempUser.encryptPass(req.body.pass)*/ });
	var regUser = TempUser.find({uname: req.body.email}).limit(1);
	var permAccount = User.find({uname: req.body.email}).limit(1);
	
	// create a new model collection that searches if the email is already approved
	// userReg ? 'already registered' : userTempReg && !userReg ? 'user conf already sent' : store hash && save

	regUser.then((x, err) => {
		x.length > 0 ? (res.send({ err:0, redirect: '/register'}), console.log('already registered')) : permAccount.then((y, err) => { y.length > 0 ? (res.send({ err:0, redirect: '/register'}), console.log('already regd')) : hashThis() });
	});

	var hashThis = _ => {
		var hashpass = tempUser.encryptPass(req.body.pass);
		hashpass.then((hash, err) => {
			tempUser.uname = req.body.email;
			tempUser.upass = hash;
			tempUser.conf_link = randstr.generate(10);
			tempUser.save();
			email_verif();
			res.send({err:0, redirect: '/home'});
		});
	}

	var dbThen = (thisF) => {
		return thisF.then((x, err) => { x.length > 0 ? 0 : 1 });
	};

	var email_verif = _ => {
		// send email
	}

}));

// session api 
router.get('/session', ((req, res) => {
	res.setHeader('Access-Control-Allow-Credentials', 'true');
	console.log('SESSION ROUTER FEEDBACK --- ' + req.session.uname);
	
	res.send({user: req.session.uname});
}));

module.exports = router;
