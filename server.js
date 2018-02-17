//Dependencies
var express = require("express");
const mongoose = require('mongoose');
var bodyParser = require("body-parser");

//Initialize Express
var app = express();
var PORT = process.env.PORT || 3000;

//Allows Express app to handle data parsing
//Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
//Parse application/json
app.use(bodyParser.json());

//Setup static folder
app.use(express.static("public"));

//Connect to DB
mongoose.connect("mongodb://localhost/mongoHeadlines", {
  useMongoClient: true
});

// Set mongoose to leverage built in JavaScript ES6 Promises
mongoose.Promise = Promise;

// Require all models
var db = require("./models/models.js");

//Set Handlebars
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//Routes
require("./routes/htmlRoutes.js")(app);
require("./routes/scrapeRoutes.js")(app);
require("./routes/apiRoutes.js")(app);


// Syncing our sequelize models and then starting our Express app
app.listen(PORT, function() {
	console.log("Listening on PORT " + PORT);
});
