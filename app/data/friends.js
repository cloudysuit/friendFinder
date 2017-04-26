// this is the file that holds the hard coded array of possible friend matches. This needs to be module.exports and required by the apiRoutes.js

var friendsList = [
		
			{
				name: "Reed Richards",
				photo: "https://static.comicvine.com/uploads/original/14/142946/3351326-5182786319-Mr._F.jpg",
				scores: [
				1,
				3,
				2,
				5,
				5,
				3,
				5,
				3,
				2,
				5
				]
			},

			{
				name: "Sue Storm",
				photo: "https://s-media-cache-ak0.pinimg.com/736x/47/ef/49/47ef493157baa9b45582e93b3af1f213.jpg",
				scores: [
				5,
				3,
				5,
				1,
				5,
				5,
				5,
				5,
				4,
				5
				]
			},

			{
				name: "Johnny Storm",
				photo: "https://s-media-cache-ak0.pinimg.com/736x/d2/6d/82/d26d82985ec303d4ff183bb581ab520c.jpg",
				scores: [
				5,
				3,
				5,
				1,
				2,
				2,
				2,
				2,
				3,
				3
				]
			},

			{
				name: "Ben Grimm",
				photo: "https://s-media-cache-ak0.pinimg.com/originals/75/e5/cd/75e5cd4dd8435b031467f6820431c9b7.jpg",
				scores: [
				2,
				2,
				4,
				1,
				5,
				2,
				5,
				1,
				4,
				3
				]
			},

			{
				name: "She-Hulk",
				photo: "http://samequizy.pl/wp-content/uploads/2016/12/filing_images_6e60853dedfc-23.jpeg",
				scores: [
				4,
				4,
				2,
				1,
				2,
				3,
				4,
				5,
				4,
				3
				]
			},

			{
				name: "Jeremiah Scanlon",
				photo: "https://avatars2.githubusercontent.com/u/8504998?v=3&s=460",
				scores: [
				5,
				2,
				2,
				2,
				4,
				1,
				3,
				4,
				5,
				5
				]
			}

];

module.exports = friendsList;