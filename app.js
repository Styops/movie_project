//const mongoose = require ('mongoose');

const express = require ('express');

const Models = require ('./models');

const bodyParser = require ('body-parser');

const app = express();

const port = 8080;

app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())

app.get('/movies', (req, res) => {
  console.log('getting all movies');
  Models.find({})
  .exec(function(err, movies){
    if (err) { return res.send('error has occured'); }

    console.log(movies);
    res.json(movies);
  });
});

app.get ('/movies/:id', (req, res) => {
  console.log('getting a movie');
  Models.findOne({
    _id: req.params.id
  })
  .exec(function (err,movie) {
    if(err) {res.send ('error finding the book')};

    console.log(movie);
    res.json(movie);
  })
});

app.post ('/movies', (req, res) => {
  let movie = new Models();
  movie.title = req.body.title;
  movie.year = req.body.year;
  movie.photoURL = req.body.photoURL;

  movie.save (function(err){
    if (err) {return console.log(err);}

    console.log(movie);
    res.send(movie);
  });
});

app.put ('/movies/:id', (req, res) => {
  Models.findOneAndUpdate({
    _id: req.params.id
  },
  {$set: {title: req.body.title,
    year: req.body.year,
    photoURL: req.body.photoURL
  }},
  function (err, newMovie) {
  if (err) {console.log('Error updating!');}

  console.log(newMovie);

});

});

app.delete('/movies/:id', (req, res) => {
  Models.findByIdAndRemove(req.params.id, function (err, movies){
    if (err) {console.log('Error deleting movie');}

    console.log(movies);
    res.json(movies);
  });
});

app.listen (port, function () {
  console.log(`app listening port ${port}`);

});
