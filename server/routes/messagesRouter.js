// the /register router
var express = require('express');
var router = express.Router();

router.get('*', ((req, res) => {
	sdet = req.session;

	console.log("FOF SDET---- " + sdet.email);
	res.sendFile('/home/zach/is_project/views/messages.html');
}));

module.exports = router;
