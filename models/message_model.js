var mongoose = require('mongoose');

var messageSchema = mongoose.Schema({
	user_id: Number, // or Objectid - linking to /users
	prev_msg_id: Number, // or Objectid - linking to /messages
	msg_title: String, // if first msg in chain
	msg_content: String
});

messageSchema.methods = {
	
};

module.exports = mongoose.model('Message', messageSchema, 'messages');
