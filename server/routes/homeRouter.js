// the / router
var express = require('express');
var router = express.Router();

router.get('/', ((req, res) => {

	user_ip = req.headers['x-real-ip'] || req.connection.remoteAddress;

	res.sendFile('/home/zach/is_project/server/views/hp.html');
	
}));

module.exports = router;
