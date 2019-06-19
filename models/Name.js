const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const NameSchema = new Schema(
	{
		name: { type: String, required: true },
		date: { type: Date, default: Date.now }
	},
	{
		collection: "test"
	}
);

module.exports = Name = mongoose.model("name", NameSchema);
