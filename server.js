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
    console.log(req.body);
    res.sendFile('../public/index.html');
  });

  app.get('/roadtrip', function(req, res){
    res.sendFile(path.join(__dirname, 'public', 'roadtrip.html'));
  });

  app.get('/roadtrip/location/:_id', function(req, res, next){
    res.sendFile(path.join(__dirname, 'public', 'location/index.html'));
    //return res.render('public/location/index', { id: req.params._id });
  });

  // app.post('roadtrip/location/:_id', function(req, res){
  //   req.body
  //   res.redirect('/roadtrip/location/575af987c66f0a4e1bf9b11a');
  // });

  app.get('/current-location', function(req, res){
    res.sendFile(path.join(__dirname, 'public', 'currentLocation.html'));
  });

  app.get('/new-location', function(req, res){
    res.sendFile(path.join(__dirname, 'public', 'location/new.html'));
  });

  app.get('/locations', function(req, res){
    Location.find({}, function(err, locations){
      res.send(locations);
    });
  });

  app.post('/locations', function(req, res){

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
