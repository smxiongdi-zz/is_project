// the /session router
var express = require('express');
var router = express.Router();

router.get('/', ((req, res) => {
	//req.session = req.session;
	res.setHeader('Access-Control-Allow-Credentials', 'true');
	console.log('SESSION ROUTER FEEDBACK --- ' + req.session.uname);
	
//	res.send({user: 'testing'});
	res.send({user: req.session.uname});
}));

module.exports = router;
