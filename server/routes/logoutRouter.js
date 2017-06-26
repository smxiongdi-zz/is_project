// the /login router
var express = require('express');
var router = express.Router();

router.post('/post', ((req, res) => {
	console.log('request accepted');
	req.session.destroy();
}));

module.exports = router;
