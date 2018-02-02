console.log(process.env.TWITTER_CONSUMER_KEY);
console.log(process.env.TWITTER_CONSUMER_SECRET);
console.log(process.env.TWITTER_ACCESS_TOKEN_KEY);
console.log(process.env.TWITTER_ACCESS_TOKEN_SECRET);

var Twitter = require('twitter');
 
var client = new Twitter({
  consumer_key: process.env.TWITTER_CONSUMER_KEY,
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
  access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
  access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
});

var getTweets = function(){
    var params = {screen_name: 'LIRI_HB'};
    client.get('statuses/user_timeline', params, function(error, tweets, response) {
    if (error) {
    console.log(error);
  } else {
    for (var i = 0; i < tweets.length; i++) {
        console.log(" ");
        console.log(tweets[i].created_at);
        console.log(tweets[i].text);
        console.log("___________________________________________");
    }
  }
});
};

module.exports = getTweets;