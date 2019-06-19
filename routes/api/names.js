const express = require("express");
const router = express.Router();

// Names Model
const Name = require("../../models/Name");

// BEGIN ROUTES

// @route GET api/items
// @desc Get All Items
// @access Public
router.get("/", (req, res) => {
	Name.find()
		.sort({ date: -1 })
		.then(names => res.json(names));
});

// @route POST api/items
// @desc post Item
// @access Public
router.post("/", (req, res) => {
	const newName = new Item({
		name: req.body.name
	});
	newName.save().then(name => res.json(name));
});
module.exports = router;
