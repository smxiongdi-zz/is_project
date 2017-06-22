// the /register router
var express = require('express');
var router = express.Router();

router.get('/register/confirm/:conflink', ((req, res) => {
	console.log(req.params.conflink);
	
	var db = require('/home/zach/is_project/db/accounts_connec.js');
	var TempUser = require('/home/zach/is_project/models/temp_user_model.js');
	var User = require('/home/zach/is_project/models/user_model.js');
	
	var myUser = new User({});

	var found = TempUser.find({conf_link: req.params.conflink}).limit(1);
	found.then((x, err) => {
		console.log('am i in here');
		console.log(x[0].conf_link);
		myUser.uname = x[0].uname; myUser.upass = x[0].upass;
		console.log(myUser);
		myUser.save();

		TempUser.findByIdAndRemove(x[0]._id, ((err, y) => {
			console.log('removed');
		}));
	});

	// search tempUsers for matching link as in the get
	// place tempUser in users then remove from tempUsers
//	res.sendFile('/home/zach/is_project/views/404.html');
}));

module.exports = router;
