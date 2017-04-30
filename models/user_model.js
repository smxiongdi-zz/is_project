var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');

// var db = require('/home/zach/is_project/models/user_connec.js');

var userSchema = mongoose.Schema({
	uname: String,
	upass: String
});

userSchema.methods = {
	
	auth: function(passPlaintext) {
//		return this.encryptPass(passPlaintext) == this.upass;
		bcrypt.compare(passPlaintext, this.upass).then(function(valid) {
			assert(valid);
		});

	},
	
	encryptPass: function(passPlaintext) {

		if(!passPlaintext) return '';
		try {
			return bcrypt.hash(passPlaintext, 10);
		} catch(err) {
			return '';
		}
	} 
	
};

module.exports = mongoose.model('User', userSchema, 'users');
