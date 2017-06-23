// the /login router
var express = require('express');
var router = express.Router();

router.get('/', ((req, res) => {
	console.log('request accepted');

	console.log(sdet.email);
	res.send({user: sdet.email});

}));

module.exports = router;
