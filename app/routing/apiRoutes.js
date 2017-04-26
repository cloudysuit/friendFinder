//this file will hold most of the code. It must be required in the server.js BEFORE the htmlRoutes.js file. in this file we must require friends.js
var friendsList = require("../data/friends.js");

module.exports = function(app){


	app.get("/api/friends", function(req, res){
		return res.json(friendsList);
	});



	app.post("/api/friends", function(req, res){

		friendsList.push(req.body);
		newFriendScore = req.body.scores;

		var totalDiffArray = [];

		for(var i = 0; i < (friendsList.length - 1); i++){
			for (var j = 0; j < friendsList[i].scores.length; j++){

			}
	}
	});

}