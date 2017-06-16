// the /register router
var express = require('express');
var router = express.Router();

router.get('/', ((req, res) => {
	sdet = req.session;

	console.log("profile SDET---- " + sdet.email);
	res.sendFile('/home/zach/is_project/views/profile.html', { uname: sdet.email });
//	res.render('/home/zach/is_project/views/profile.html');
}));

module.exports = router;
