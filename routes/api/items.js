const express = require("express");
const router = express.Router();

// Item Model
const Item = require("../../models/Item");

const cache = {};
// BEGIN ROUTES

// @route GET api/items
// @desc Get All Items
// @access Public
router.get("/", (req, res) => {
	if (cache[req.url]) return cache[req.url];
	else {
		Item.find()
			.sort({ date: -1 })
			.then(items => {
				cache[req.url] = items;
				console.log(cache);
				return res.json(items);
			});
	}
});

// @route POST api/items
// @desc post Item
// @access Public
router.post("/", (req, res) => {
	const newItem = new Item({
		name: req.body.name
	});
	newItem.save().then(item => res.json(item));
});
module.exports = router;
