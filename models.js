const mongoose = require ('mongoose');

const Schema = mongoose.Schema;

mongoose.connect('mongodb://192.168.12.122:27017/moviedb');

const db=mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once("open", function(callback) {
     console.log("Connection succeeded.");
});



let movieSchema = mongoose.Schema ({
  title : String,
  year : Number,
  photoURL : String,


});

let Movies = mongoose.model('Movies',movieSchema);

let movieTest = new Movies ({
  title: 'Ghost Dog',
  year: 1999,
  photoURL: 'www.example.com'

});

movieTest.save(function(error) {
  console.log('Your movies has been saved!');
  if (error) {console.log('Error saving movie!');}

});

let movieTest2 = new Movies ({
  title: 'Sniper',
  year: 2000,
  photoURL: 'www.example1.com'

});

movieTest2.save(function(error) {
  console.log('Your movies has been saved!');
  if (error) {console.log('Error saving movie!');}

});

module.exports = Movies;
