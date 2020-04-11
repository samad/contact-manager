const mongoose = require('mongoose');

const ContactSchema = mongoose.Schema({
	name: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'users',
	},
	email: {
		type: String,
	},
	phone: {
		type: String,
	},
	type: {
		type: String,
		default: 'Personal',
	},
	date: {
		type: Date,
		default: Date.now,
	},
});

module.exports = mongoose.model('contact', ContactSchema);
