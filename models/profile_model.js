var mongoose = require('mongoose');

var profileSchema = mongoose.Schema({
//	verified: Boolean, // alternatively create a temp user schema - probably best
	user_id: Number, // or Objectid - linking to /users
	name: String, // user's name
	lang_native: Schema.Types.Mixed, // user native language(s)
	lang_learning: Schema.Types.Mixed, // user languages learning
	bday: Date, // user birthday
	sex: String, // user gender
	pic: String, //string path in static files
	loc: String // user location
});

profileSchema.methods = {
	
};

module.exports = mongoose.model('Profile', profileSchema, 'profiles');
