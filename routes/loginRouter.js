// the /register router
var express = require('express');
var router = express.Router();

router.get('/', ((req, res) => {
	res.sendFile('/Users/SB/Desktop/express-prac/views/login.html');
}));

router.post('/post', ((req, res) => {
	console.log('request accepted');
	console.log(req.body.email);
	console.log(req.body);
	res.send({err:0, redirect: '/home'});
//	res.redirect('/Users/SB/Desktop/express-prac/views/success.html');
//	res.sendFile('/Users/SB/Desktop/express-prac/views/regcon.html');
}));

module.exports = router;
