// the / router
var express = require('express');
var router = express.Router();

router.get('/', ((req, res) => {
	//res.sendFile(('/home/zach/is_project/views/hp.pug'));
	
	res.sendFile('/home/zach/is_project/server/views/hp.html');
//	if(sdet) { res.sendFile('/home/zach/is_project/server/views/hp.html', { uname: sdet.email });}
//	else { res.redirect('/login'); }
	
}));

module.exports = router;
