const express = require('express');
const app = express();
const request = require('request');
// app.use((req, res, next) => {
//   console.log(`${(new Date()).toISOString()}: ${req.method} ${req.url}`);
//   next();
// });


app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
  });


  const url='https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=605fcb167973d5a9f74b205695b5e0f2&tags=kitchen%2Cfood%2Ctable&extras=tags%2Curl_l&per_page=50&page=1&format=json&nojsoncallback=1&api_sig=bdb5d18279dca0f142ebf16e47a5c713';


app.get('/', function(req, res){
  request(url, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      const flickrData = JSON.parse(body);
      res.send(flickrData);
    }
  })
})


let port = process.env.PORT;
if(port == null || port == "") {
 port = 5000;
}
app.listen(port, function() {
 console.log("Server started successfully");
});


// app.get('/api/search', (req, res) => {
//   res.send({message: 'Hello world'});
// });

// module.exports = app;
