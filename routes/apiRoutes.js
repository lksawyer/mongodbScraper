//Dependencies
const mongoose = require('mongoose');

// Require all models
var db = require("../models/models.js");

//Routes
module.exports = function(app) {

	app.get("/api/articles", function(req, res) {

		db.find()
		.then(function(dbArticle) {
		// View the added result in the console
		console.log(dbArticle);
		res.send(dbArticle);
		});
	});

};