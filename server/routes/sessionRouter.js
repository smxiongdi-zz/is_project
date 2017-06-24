// the /session router
var express = require('express');
var router = express.Router();

router.get('/', ((req, res) => {
	sdet = req.session;
	console.log('SESSION ROUTER FEEDBACK --- ' + sdet.uname);
	res.send({user: sdet.uname});
}));

module.exports = router;
