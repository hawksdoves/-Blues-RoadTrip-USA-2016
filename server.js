  var express  = require('express');
  var app = express();
  var path = require('path');
  var bodyParser = require('body-parser');
  var server = require('http').createServer(app);
  var Location = require("./models/location");
  var Activity = require("./models/activity");

  app.use(express.static(__dirname + '/public'));
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));


  app.get('/', function(req, res) {
    res.sendFile('../public/index.html');
  });

  app.get('/roadtrip', function(req, res){
    res.sendFile(path.join(__dirname, 'public', 'roadtrip.html'));
  });

  app.get('/roadtrip/location/:_id', function(req, res, next){
    res.sendFile(path.join(__dirname, 'public', 'location/index.html'));
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
      departed: new Date(req.body.finishDate)
    })

    newLocation.save(function(err) {
    if (err) throw err;
      console.log('Location created!');
    });
  })

  app.get('/new-activity', function(req, res){
    res.sendFile(path.join(__dirname, 'public', 'newActivity.html'));
  });

  // app.get('/activity', function(req, res){
  //   Activity.find({}, function(err, locations){
  //     res.send(locations);
  //   });
  // });

  app.post('/activity', function(req, res){

    Location.find({ "city" : req.body.city }, function(err, location){

      var newActivity = Activity({
        name: req.body.name,
        desc: req.body.desc,
        url: req.body.url,
        location: location[0]._id
      })

      newActivity.save(function(err) {
        if (err) throw err;
        console.log('Activity created!');
      });

    })

  })

  server.listen(3000, function(){
    console.log("Server listening on port 3000");
  });

  module.exports = server
