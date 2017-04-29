// the /register router
var express = require('express');
var router = express.Router();

router.get('/', ((req, res) => {
	res.sendFile('/home/zach/is_project/views/success.html');
}));

module.exports = router;
