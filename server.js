//require the necessary dependencies for server//
const express = require("express");
const bodyParser = require("body-parser");

//create Express app//
const app = express();

//Use body-parser middleware to parse incoming request bodies//
app.use(bodyParser.urlencoded({ extended: true }));

//Define Routes//
app.get("/", (req, res) => {
	res.send("Hello World!"); //replace with rendering html template
});

//Set Up Server//
//Use the environement port if available, otherwise use 3000//
const port = process.env.PORT || 3000;

//Start the server//
app.listen(port, () => {
	console.log(`Server started on port ${port}`);
});
