  var express  = require('express');
  var app = express();
  var path = require('path');
  var bodyParser = require('body-parser');
  var server = require('http').createServer(app);
  var Location = require("./models/location");


  app.use(express.static(__dirname + '/public'));
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));


  app.get('/', function(req, res) {
    res.sendFile('../public/index.html');
  });

  app.get('/roadtrip', function(req, res){
    res.sendFile(path.join(__dirname, 'public', 'roadtrip.html'));
  });

  app.get('/locations', function(req, res){
    Location.find({}, function(err, locations){
      res.send(locations);
      console.log(locations);
    });
  });

  app.get('/current-location', function(req, res){
    res.sendFile(path.join(__dirname, 'public', 'currentLocation.html'));
  });

  app.get('/location', function(req, res){
    res.sendFile(path.join(__dirname, 'public', 'location.html'));
  });

  app.post('/location', function(req, res){
    console.log(req.body);

    var newLocation = Location({
      city: req.body.city,
      desc: req.body.desc,
      lat: req.body.lat,
      lng: req.body.long,
      arrival: new Date(req.body.startDate),
    })

    newLocation.save(function(err) {
    if (err) throw err;
      console.log('Location created!');
    });
  })

  server.listen(3000, function(){
    console.log("Server listening on port 3000");
  });

  module.exports = server
