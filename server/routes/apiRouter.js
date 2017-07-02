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
	
	res.send({user: req.session.uname});
}));

router.get('/profile_load', ((req, res) => {
	console.log('HELLO');
	var db = require('/home/zach/is_project/server/db/accounts_connec.js');
	var Profile = require('/home/zach/is_project/server/models/profile_model.js');
	var userProfile = Profile.find({uname: req.session.uname}).limit(1);
	userProfile.then((x, err) => {
		console.log('IN HERE');
		// res.write and then res.end()
		console.log('DATE -- ' + x[0].bday);
		
		x.length > 0 ? res.send(x) /*sendProf()*/ : console.log('no profile')/* no profile */ ; 
		// x.length > 0 ? res.send(x) /*sendProf()*/ : console.log('no profile')/* no profile */ ; 
		console.log('SENDING ' + x);
	});

}));

router.post('/profile_edit', ((req, res) => {
	var db = require('/home/zach/is_project/server/db/accounts_connec.js');
	var Profile = require('/home/zach/is_project/server/models/profile_model.js');
	var userProfile = Profile.find({uname: req.session.uname}).limit(1);
/*	userProfile.then((x, err) => {
		x.length == 0 ? userProfile = new Profile({req.body. : 
	});
*/

	userProfile.then((x, err) => { x.length > 0 ? editProf(x[0]) : editProf(new Profile({}))})

//	var userProfile = !userProfilex.name ? new Profile({}) : userProfilex;
	console.log('my userprof: --- ' + userProfile.name);
//	req.session.uname ? editProf() : console.log('uname not set');

	console.log("UNAME ---" + req.session.uname);
	console.log("NAME ---" + req.body.name);
	console.log("PROFILE OBJ: --- " + req.body.loc);

	function editProf(y) {
		console.log('EDITING');
		y.uname = req.session.uname ? req.session.uname : y.uname;
		y.name = req.body.name ? req.body.name : y.name;
		y.lang_learning = req.body.lang_learning ? req.body.lang_learning : y.lang_learning; // || y.lang_learning;
		y.lang_native = req.body.lang_native ? req.body.lang_native : y.lang_native;// || y.lang_native;
		y.loc = req.body.loc;// || y.loc;
		y.bday = req.body.bday;// || y.bday;
		y.sex = req.body.sex;// || y.sex;
		y.pic = req.body.pic;// || y.pic;
		y.save();
		res.send({status: 'good'});
	}

	var createProfile = _ => {

	}

}));

// community load api
router.get('/community_load', ((req, res) => {
	var db = require('/home/zach/is_project/server/db/accounts_connec.js');
	var Profile = require('/home/zach/is_project/server/models/profile_model.js');
	// eventually add in searchable params and pass in via url
	var userProfiles = Profile.find({});
	userProfiles.then((x, err) => res.send(x));
}));

router.post('/user_profile', ((req, res) => {
	console.log('user id sent -- ' + req.body.user_id);
	var db = require('/home/zach/is_project/server/db/accounts_connec.js');
	var Profile = require('/home/zach/is_project/server/models/profile_model.js');
	// eventually add in searchable params and pass in via url
	var user_profile = Profile.find({_id: req.body.user_id}).limit(1);
	user_profile.then((x, err) => res.send(x[0]));
}));

module.exports = router;
