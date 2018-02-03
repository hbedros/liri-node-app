var newSpotify = require('node-spotify-api');

var Spotify = new newSpotify({
  id: process.env.SPOTIFY_ID,
  secret: process.env.SPOTIFY_SECRET
});

var getSpotify = function(userSong) {
	if(userSong === undefined){
		userSong = 'The Sign';
	}
	
	Spotify.search({type:'track', query:userSong, limit: 5}, function (err,data){

		if(!err){
			songData = data.tracks.items;
			for (var i = 0; i < songData.length; i++){
				if (songData[i] != undefined) {
          console.log('\n');
          var songResults =
          "Artist: " + songData[i].artists[0].name + "\n" +
          "Song: " + songData[i].name + "\n" +
          "Album the song is from: " + songData[i].album.name + "\n" +
          "Preview Url: " + songData[i].preview_url;
          console.log(songResults);
				}
			}
		}

		else {
			return console.log('Error occurred: ' + err);
		}
  })
};

module.exports = getSpotify;