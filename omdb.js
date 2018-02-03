var request = require('request');

function searchMovie (movieTitle){
request("http://www.omdbapi.com/?t=" + movieTitle + "&y=&plot=short&apikey=trilogy", 
    
    function(error, response, body) {
    if (error) {
        return console.log(error);
    }
    if (!error && response.statusCode === 200){
        console.log('\n');
        console.log("Title: " + JSON.parse(body).Title);
        console.log("Year the movie came out: " + JSON.parse(body).Year);
        console.log("IMDB Rating of the movie: " + JSON.parse(body).imdbRating);
        var ratingsArray = JSON.parse(body).Ratings;
        for(var i = 2; i < ratingsArray.length;i++){
            console.log("Rotten Tomatoes Rating of the movie: " + ratingsArray[1].Value);
        }
        console.log("Country where the movie was produced: " + JSON.parse(body).Country);
        console.log("Language of the movie: " + JSON.parse(body).Language);
        console.log("Plot of the movie: " + JSON.parse(body).Plot);
        console.log("Actors in the movie: "+ JSON.parse(body).Actors + " ,");
    }
});
};

module.exports = {searchMovie};