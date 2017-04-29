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

		if(!passPlaintext) return '';
		try {
			const salt = bcrypt.genSalt(10);
			const hash = bcrypt.hash(passPlaintext, salt);
			console.log(hash);
			return hash;
		} catch(err) {
			return '';
		}
	}
};

module.exports = mongoose.model('User', userSchema, 'users');
