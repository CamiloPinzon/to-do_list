//require the necessary dependencies for server//
const express = require("express");
const bodyParser = require("body-parser");

//create Express app//
const app = express();

//Set the view engine to EJS//
app.set("view engine", "ejs");

//Use body-parser middleware to parse incoming request bodies//
app.use(bodyParser.urlencoded({ extended: true }));

//Define Routes//
app.get("/", (req, res) => {
	const todos = ["Learn HTML", "Learn CSS", "Learn JavaScript"]; // replace with actual to-do items
	res.render("index", { todos: todos });
});

//Set Up Server//
//Use the environement port if available, otherwise use 3000//
const port = process.env.PORT || 3000;

//Start the server//
app.listen(port, () => {
	console.log(`Server started on port ${port}`);
});
