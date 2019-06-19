const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema(
	{
		username: {
			type: String,
			required: true
		},
		fname: {
			type: String,
			required: true
		},
		lname: {
			type: String,
			required: true
		},
		dateCreated: {
			type: Date,
			default: Date.now
		},
		email: {
			type: String,
			required: true
		},
		pass: {
			type: String,
			required: true
		}
	},
	{
		collection: "users"
	}
);

module.exports = User = mongoose.model("user", UserSchema);
