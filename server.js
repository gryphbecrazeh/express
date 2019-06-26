const express = require("express");
const mongoose = require("mongoose");
const path = require("path");

//Define Routes
// Enter in the variable name that will hold the exported data from an external js file
const items = require("./routes/api/items");
const names = require("./routes/api/names");
const users = require("./routes/api/users");

// Innitiate App
const app = express();

// ----------------------------------------------Begin Middleware---------------------------------------------------
app.use(express.json());
// -----------------------------------------------------------------------------------------------------------------

// DB Config
const db = require("./config/keys").mongoURI;

// Connect to MongoDB
mongoose
	.connect(db)
	.then(() => console.log("MongoDB Connected..."))
	.catch(err => console.log(err));

// USE Routes
app.use("/api/users", users);
app.use("/api/items", items);
app.use("/api/names", names);

// Serve static assets if in production
if (process.env.NODE_ENV === "production") {
	// Set static folder
	app.use(express.static("client/build"));
	app.get("*", (req, res) => {
		res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
	});
}

const port = process.env.port || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
