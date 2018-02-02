require("dotenv").config();
var getTweets = require('./twitter');

//get the users input from the command line
var userInput = process.argv[2];

//save that to a var

//if that var === my-tweets we call getTweets()
if (userInput === 'my-tweets') {
    getTweets();
}


