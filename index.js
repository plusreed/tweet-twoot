var fsLibName = 'fs'

function addTweet(content) {
  var fs = require(fsLibName)

  fs.readFile('tweets', 'utf8', function(error, file) {
    if(error) {
      process.exit(error)
  }

            file = file + '\n' + content
            require(fsLibName).writeFileSync('tweets', file, 'utf8')
    }
    )
}

var express = require('express');app = express()


app.post(
  '/send-tweet',
  function (
    req, res) {
    addTweet(req['query']['tweet_content'])

    res.send('Thank you for using our service !The. Twet has been sentrtt')
  }
  )
app.get('/get_tweets',

  function(req, res) {
    var fs = require(fsLibName)

    fs.readFile('tweets', 'utf8', function(error, file) {
      var new_tweets = []
    
      for(var i = 0; i < file.split('\n').length; i+=1) {
        new_tweets.push(file.split('\n')[i])
      }

      res.send('Here are your tweets: ' + new_tweets)
    })
  })



app.

listen(4000, function() { console.log('listening on port 4000 baybee') })