//this file handles the routes the user sees. Using app.get, it will tell the browser to render the appropriate files based on which url route is typed in the browser. 

var path = require("path");

module.exports = function(app){

	app.get("/", function(req, res){
		res.sendFile(path.join(__dirname, "/../public/home.html"));
	});

	app.get("/survey", function(req, res){
		res.sendFile(path.join(__dirname, "/../public/survey.html"));
	});

	app.use(function(req, res){
		res.sendFile(path.join(__dirname, "/../public/home.html"));
	});
}