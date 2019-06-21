const express = require("express");
const router = express.Router();
const movieModel = require("../models/Movie");

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

router.get("/movies", (req, res, next) => {
  movieModel
    .find({})
    .then(dbRes => {
      res.render("movies", { movies: dbRes });
    })
    .catch(dbErr => {
      res.render("movies", dbErr);
    });
});

router.get("/movies/:id", (req, res) => {
  movieModel
    .findById(req.params.id)
    .then(movie => {
      res.render("movieDetails", { movie });
    })
    .catch(err => {
      console.log("there is a error in DB", err);
    });
});

module.exports = router;
