var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');

var db = require('/home/zach/is_project/models/user_connec.js');

var userSchema = mongoose.Schema({
	uname: String,
	upass: String
});

userSchema.methods = {
	
	auth: function(passPlaintext) {
		return this.encryptPass(passPlaintext) == this.upass;
	},
	
	encryptPass: function(passPlaintext) {

		const saltRounds = 10;

		if(!passPlaintext) return '';
		try {
			const salt = bcrypt.genSalt(10);
			const hash = bcrypt.hash(passPlaintext, salt);
			console.log(hash);
			return hash;
			/*
			bcrypt.genSalt(saltRounds, function(err, salt) {
				bcrypt.hash(passPlaintext, salt, function(err, hash) {
					console.log(hash);
					return hash;
				});
			});
			*/
		} catch(err) {
			return '';
		}
	}
};

module.exports = mongoose.model('User', userSchema, 'users');
