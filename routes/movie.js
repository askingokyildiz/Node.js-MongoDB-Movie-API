var express = require('express');
var router = express.Router();

//Models
const Movie=require('../models/Movie');

router.post('/', function(req, res, next) {
  const movie = new Movie(req.body);
  /* 
  movie.save((err, data)=>{
    if(err)
    res.json(err);
    res.json(data);
  });
  */
 const promise =movie.save();
  promise.then((data)=>{
    res.json({status:1});
  }).catch((err)=>{
    res.json(err);
  });

});
router.get('/', function(req, res, next) {
  const promise = Movie.find({});
  promise.then((data)=>{
    res.json(data);
  }).catch((err)=>{
    res.json(err);
  });
});
router.get('/:movie_id', (req, res, next) =>{
  const promise = Movie.findById(req.params.movie_id);
  
  promise.then((movie) => {
		console.log(movie);
		if (!movie)
    res.json({error:{ message: 'The movie was not found.', code: 99 }});

		res.json(movie);
	  }).catch((err) => {
		res.json(err);
	});
});

module.exports = router;
