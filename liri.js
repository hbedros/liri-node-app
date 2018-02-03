require("dotenv").config();
var getTweets = require('./twitter');
var getSpotify = require('./spotify');


var userCommand = process.argv[2];
var userQuery =  process.argv[3];

//twitter call back
if (userCommand === 'my-tweets') {
    getTweets();
} 

//omdb call back
else if (userCommand === 'movie-this'){
    var omdb = require('./omdb');
    omdb.searchMovie(userQuery);
}

//spotify call back
else if ( userCommand === 'spotify'){
    getSpotify(userQuery);
}