// the /register router
var express = require('express');
var router = express.Router();

router.get('/', ((req, res) => {
	res.sendFile('/Users/SB/Desktop/express-prac/views/success.html');
}));

module.exports = router;
