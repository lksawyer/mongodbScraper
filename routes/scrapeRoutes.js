//Dependencies
//Allow for our app to scrape
var request = require("request");
var cheerio = require("cheerio");

const mongoose = require('mongoose');

// Require all models
var db = require("../models/models.js");

// Routes
module.exports = function(app) {

	app.get("/scrape", function(req, res) {

		request("http://www.surrenderat20.net/", function(error, response, html) {

			var $ = cheerio.load(html); 

			//Used to store scrapped data
      		var finalResult = [];

			$(".post").each(function(i, element) {

				var result = {};

				result.title = $(this).children(".news-title").children("a").text();
				result.image = $(this).children(".news-content").children(".separator").children("a").children("img").attr("src");
				result.url = $(this).children(".news-title").children("a").attr("href");

				
				finalResult.push(result);

				// // Create a new Article using the `result` object built from scraping
				// db.create(result)
				// .then(function(dbArticle) {
				// // View the added result in the console
				// console.log(dbArticle);
				// })

			}); 

			console.log("this is from the scrape routes page ", finalResult);
			res.render("scrape",{articles:finalResult});

		});

	});

};