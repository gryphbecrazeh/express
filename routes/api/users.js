const express = require("express");
const router = express.Router();

// User Model
const User = require("../../models/User");

// BEGIN ROUTES

// @route GET api/users
// @desc Get All Users
// @access Public
router.get("/", (req, res) => {
	User.find()
		.sort({ date: -1 })
		.then(users => {
			return res.json(users);
		});
});

// @route POST api/users
// @desc post User
// @access Public
router.post("/", (req, res) => {
	const newUser = new User({
		username: req.body.username,
		fname: req.body.fname,
		lname: req.body.lname,
		email: req.body.email,
		pass: req.body.pass
	});
	newUser
		.save()
		.then(user => res.json(`User: ${user.fname} created`))
		.catch(err => console.log(`Problem encountered! ${err}`));
});
module.exports = router;
