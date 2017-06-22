// the / router
var express = require('express');
var router = express.Router();
const pug = require('pug');

router.get('/', ((req, res) => {
	//res.sendFile(('/home/zach/is_project/views/hp.pug'));
	

	sdet = req.session;
	sdet.email = 'testing@email.com';

//	res.sendFile('/home/zach/is_project/server/views/hp.html');
	if(sdet) { res.sendFile('/home/zach/is_project/server/views/hp.html', { uname: sdet.email });}
	else { res.redirect('/login'); }
	

	console.log(sdet.email);
}));

module.exports = router;
