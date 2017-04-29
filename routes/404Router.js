// the /register router
var express = require('express');
var router = express.Router();

router.get('*', ((req, res) => {
	res.sendFile('/home/zach/is_project/views/404.html');
}));

module.exports = router;
