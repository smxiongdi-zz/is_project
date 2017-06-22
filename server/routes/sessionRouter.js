// the /login router
var express = require('express');
var router = express.Router();

router.get('/', ((req, res) => {
	console.log('request accepted');

	res.send({user: req.session.email});

}));

module.exports = router;
