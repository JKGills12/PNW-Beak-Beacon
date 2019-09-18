// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
var db = require("../models");


// Routes
// =============================================================
module.exports = function(app) {

  // Get all chirps
  app.get("/api/all", function(req, res) {

    // Finding all Chirps, and then returning them to the user as JSON.
    // Sequelize queries are asynchronous, which helps with perceived speed.
    // If we want something to be guaranteed to happen after the query, we'll use
    // the .then function
    db.chirp_tables.findAll({}).then(function(results) {
      // results are available to us inside the .then
      res.json(results);


  });


  // Add a chirp
  app.post("/add", function(req, res) {

    console.log("Chirp Data:");
    console.log(req.body);

    db.chirp_tables.create({
      bird_name: req.body.birdname,
      family: req.body.family,
      voice: req.body.voice,
      habitat: req.body.habitat,
      place: req.body.place
    }).then(function(results) {
      // `results` here would be the newly created chirp`
      res.end();
=======
  // Delete an example by id
  app.delete("/api/examples/:id", function(req, res) {
    db.Chirpy.destroy({ where: { id: req.params.id } }).then(function(
      dbChirpy
    ) {
      res.json(dbChirpy);

    });

  });

};
