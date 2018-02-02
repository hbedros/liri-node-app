var request = require('request');

function searchMovie (movieTitle){
request("http://www.omdbapi.com/?t=" + movieTitle + "&y=&plot=short&apikey=trilogy", 
    
    function(error, response, body) {
    if (error) {
        return console.log(error);
    }
    if (!error && response.statusCode === 200){
        console.log("The movie's rating is: " + JSON.parse(body).imdbRating + " , " + "The movie's actors are: " + JSON.parse(body).Actors);
    }

});
};

module.exports = {searchMovie};