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

app.listen (port, function() {
  console.log(`app listening port ${port}`);

});
