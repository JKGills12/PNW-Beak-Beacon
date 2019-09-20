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
    })

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
      places: req.body.places
    }).then(function(results) {
      // `results` here would be the newly created chirp`
      res.end();
    })
  });

    // search for attributes
    app.get("/api/one", function(req, res) {

      console.log("param", req.query.search);
      db.chirp_tables.findOne({ where: {bird_name: req.query.search} }).then(results=> {
          // db.chirp_tables will be the first entry of the chirp_tables table with the bird_name 'bird_name' || null
         console.log("results", results);
         let obj = {
           results: results.dataValues
         };
         return res.render("search", obj);
        })
       
      });   


  // Delete an example by id
  app.delete("/api/examples/:id", function(req, res) {
    db.Chirpy.destroy({ where: { id: req.params.id } }).then(function(
      dbChirpy
    ) {
      res.json(dbChirpy);

    });

  });

};
