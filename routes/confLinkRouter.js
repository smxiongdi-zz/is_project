// the /register router
var express = require('express');
var router = express.Router();

router.get('/register/confirm/*', ((req, res) => {
	// search tempUsers for matching link as in the get
	// place tempUser in users then remove from tempUsers
//	res.sendFile('/home/zach/is_project/views/404.html');
}));

module.exports = router;
