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
  .exec((err, movies) => {
    if (err) { return res.send('error has occured'); }


    console.log(movies);
    res.json(movies);
  });

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

app.listen (port, function () {
  console.log(`app listening port ${port}`);

});
