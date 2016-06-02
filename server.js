

  var express  = require('express');
  var app = express();
  var path = require('path');
  var bodyParser = require('body-parser');
  var server = require('http').createServer(app);

  app.use(express.static(__dirname + '/public'));
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));

  app.get('/', function(req, res) {
    res.sendFile('../public/index.html');
  });

  app.get('/roadtrip', function(req, res){
    res.sendFile(path.join(__dirname, 'public', 'roadtrip.html'));
  });

  server.listen(3000, function(){
    console.log("Server listening on port 3000");
  });

  module.exports = server
