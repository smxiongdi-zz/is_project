var mongoose = require('mongoose');

var friendSchema = mongoose.Schema({
	user_id_one: Number, // or Objectid - linking to /users
	user_id_two: Number, // or Objectid - linking to /users
});

friendSchema.methods = {
	
};

module.exports = mongoose.model('Friend', friendSchema, 'friends');
