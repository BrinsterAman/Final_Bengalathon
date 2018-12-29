// var MongoClient = require('mongodb').MongoClient
// var mongo = require('mongodb')
// var grid = require('gridfs-stream')
// var fs = require('fs')
// var url = 'mongodb://localhost:27017/'

// MongoClient.connect(url, { useNewUrlParser : true }, function(err1, db) {
//     var dbo = db.db("test")
//     gfs = grid(dbo, mongo)
//     var writeStream = gfs.createWriteStream({
//         filename : 'asd.jpg',
//         mode : 'w',
//         content_type : 'image/jpeg'
//     })
//     fs.createReadStream('/home/gogol/Pictures/asd.jpg').pipe(writeStream)
    
//     writeStream.on('close', function() {
//         console.log('done')
//     })
// })

// var twitter = require('twit');
// require('dotenv').config();

// var client = new twitter({
// 	consumer_key : process.env.TWITTER_CONSUMER_KEY,
// 	consumer_secret : process.env.TWITTER_CONSUMER_SECRET,
// 	access_token : process.env.TWITTER_ACCESS_TOKEN_KEY,
// 	access_token_secret : process.env.TWITTER_ACCESS_TOKEN_SECRET
// });

// var data, text;
// var india = '68.1766451354,7.96553477623,97.4025614766,35.4940095078', count = 0;
// var stream = client.stream('statuses/filter', { locations : india,
// 	languages : ['en', 'hi', 'bn', 'ur']
// });

// stream.on('tweet', function(tweet) {
//     console.log(tweet.truncated)
//     if(tweet.truncated == true) {
//         console.log('full_text = ' + tweet.extended_tweet.full_text)
//     }
//     if(typeof tweet.extended_entities !== 'undefined') {
//         console.log('id' + tweet.id_str + ', media id = ' + tweet.extended_entities.media[0].id_str)
//         console.log(tweet.extended_entities.media)
//     }
// })

// const axios = require('axios')
// axios.post('https://translate.yandex.net/api/v1.5/tr.json/translate', {
//     'key' : process.env.YANDEX_KEY,
//     'text' : 'தமிழ் நாட்டில் உள்ள பட்டாசு ஆலை மற்றும் தொழிலாளர்கள் போராட்டம்.',
//     'lang' : 'en',
//     'format' : 'plain'
// }, {
//     'Content-Type' : 'application/x-www-form-urlencoded'
// }).then((response) => {
//     text = response.text[0]
//     console.log(text)
// }).catch((error) => {
//     console.log(error)
// })

// str = 'தமிழ் நாட்டில் உள்ள பட்டாசு ஆலை மற்றும் @budd8y தொழிலாளர்கள் போராட்டம். @beauty77..'
// str2 = 'go to this link https://t.co/23232e'
// str = str.replace(/@(.*)[\n\s\.?!$]/gi, '')
// str2 = str2.replace(/(?:https?|ftp):\/\/[\n\S]+/g, '')
// console.log(str)
// console.log(str2)

var d = Date.parse('Mon Dec 26 02:58:57 +0000 2018')
console.log(d)
var s = new Date()
s = Date.parse(s)
console.log(s)