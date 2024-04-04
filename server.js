//require the necessary dependencies for server//
const express = require("express");
const bodyParser = require("body-parser");

//create Express app//
const app = express();


//Use body-parser middleware to parse incoming request bodies//
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

//Set the view engine to EJS//
app.set("view engine", "ejs");

//Define an array of to-do items//
let todos = [];

//Define Routes//
app.get("/", (req, res) => {
	// Render the index view with the to-do items//
	res.render("index", { todos: todos });
});
app.post("/", (req, res) => {
	//Extract the submitted to-do item from the request body//
	const newTodo = req.body.todoItem;

	//Add the new to-do item to the array of to-do items//
	todos.push(newTodo);

	//Redirect the user back to the index view to re render the updated list//
	res.redirect("/");
});

//Set Up Server//
//Use the environement port if available, otherwise use 3000//
const port = process.env.PORT || 3000;

//Start the server//
app.listen(port, () => {
	console.log(`Server started on port ${port}`);
});
