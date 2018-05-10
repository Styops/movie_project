//const mongoose = require ('mongoose');

const express = require ('express');

const Models = require ("./models");

const app = express();

const port = 8080;

app.get('/movies', (req, res) => {
  console.log('getting all movies');
  Models.find({})
  .exec((err, movies) => {
    if (err) { return res.send('error has occured'); }


    console.log(movies);
    res.json(movies);
  });

});

app.listen (port, function () {
  console.log(`app listening port ${port}`);

});
