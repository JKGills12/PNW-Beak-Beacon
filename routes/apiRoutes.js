var db = require("../models");

module.exports = function(app) {
  // Get all examples
  app.get("/api/examples", function(req, res) {
    db.Chirpy.findAll({}).then(function(dbChirpy) {
      res.json(dbChirpy);
    });
  });

  // Create a new example
  app.post("/api/examples", function(req, res) {
    db.Chirpy.create(req.body).then(function(dbChirpy) {
      res.json(dbChirpy);
    });
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
