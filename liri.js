require("dotenv").config();
var getTweets = require('./twitter');
var getSpotify = require('./spotify');
var fs = require('fs');


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
else if (userCommand === 'spotify-this-song'){
    getSpotify(userQuery);
}

//txt call back
else if (userCommand === 'do-what-it-says'){

    function read(file, callback) {
        fs.readFile(file, 'utf8', function(err, data) {
            if (err) {
                console.log(err);
            }else {
                getSpotify(data);
            }
        });
    }
    
    var output = read('random.txt', function(data) {
        console.log(data);
    });
}
