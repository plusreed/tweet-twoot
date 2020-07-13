var fsLibName = 'fs'

var SEND_TWEET_ROUTE_NAME='/send-tweet';var GET_TWEETS_ROUTE_NAME='get_tweets';

var LISTENING_MESSAG='Listeneing on. port 4000';

var SEND_TWEET_RESPONSE_MESSAGE='Thanku 4 using our service !The. Twet has been sentrtt';

function make_get_tweets_route_response_message(tweets) {
  //Return String.
  return "Here are youre tweets: " + tweets
}

function addTweet(content) {
  var fs = require(fsLibName)

  fs.readFile('tweets', 'utf8', function(error, file) {
    if(error) {
      //ERROR HANDLER.
      process.exit(error)
  }

            file = file + '\n' + content
            require(fsLibName).writeFileSync('tweets', file, 'utf8')
    }
    )
}

var express = require('express');app = express()


app.post(
  SEND_TWEET_ROUTE_NAME,
  function (
    req, res) {
    addTweet(req['query']['tweet_content'])

    res.send(SEND_TWEET_RESPONSE_MESSAGE)
  }
  )
app.get(GET_TWEETS_ROUTE_NAME,

  function(req, res) {
    var fs = require(fsLibName)

    fs.readFile('tweets', 'utf8', function(error, file) {
      //MAke array.
      var new_tweets = []
      
      //Use Programming Concept To Push Everything To Array.
      //Fror more information on ARRAYS, Please Talk To Mr. Durst.
      //He Is programming Teacher.
      for(var i = 0; i < file.split('\n').length; i+=1) {
        new_tweets.push(file.split('\n')[i])
      }
      
      // Use Fucntion to make EVERYTHING faster With this.
      res.send(make_get_tweets_route_response_message(new_tweets))
    })
  })



app.

listen(4000, function() { console.log(LISTENING_MESSAG) })
// just let us have a  new line @github
