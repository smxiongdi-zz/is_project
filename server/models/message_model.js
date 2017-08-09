var mongoose = require('mongoose');

var messageSchema = mongoose.Schema({
	send_user_id: mongoose.Schema.Types.ObjectId, // or Objectid - linking to /users
	receive_user_id: mongoose.Schema.Types.ObjectId, // or Objectid - linking to /users
	prev_msg_id: mongoose.Schema.Types.ObjectId, // or Objectid - linking to /messages
	msg_title: String, // if first msg in chain
	msg_content: String
});

messageSchema.methods = {
	
};

module.exports = mongoose.model('Message', messageSchema, 'messages');
