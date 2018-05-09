const mongoose = require ('mongoose');

const express = require ('express');

const app = express();



mongoose.connect('mongodb://192.168.12.122/moviedb');

const db=mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

const port = 8080;


let movieSchema = mongoose.Schema ({
  title : String,
  year : Date,
  photoURL : String,


});

let Movies = mongoose.model('Movies',movieSchema);

app.get('/movies', function(req,res) {
  console.log('getting all movies');
  Movies.find({})
  .exec(function(err, movies) {
    if(err) {
      res.send('error has occured');
    }
    else {
      console.log(movies);
      res.json(movies);
    }
  });

});

app.listen (port, function() {
  console.log(`app listening port ${port}`);

});
