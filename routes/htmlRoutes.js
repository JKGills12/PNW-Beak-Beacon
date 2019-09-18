var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    db.chirp_table.findAll({}).then(function(dbExample) {
      res.render("index", {
        msg: "Welcome!",
        example: dbExample
      });

    })
  });

  // Load example page and pass in an example by id
  app.get("/example/:id", function(req, res) {
    db.chirp_table.findOne({ where: { id: req.params.id } }).then(function(
      dbExample
    ) {
      res.render("example", {
        example: dbExample
      });
    });
  });

  // Renders add handlebar page
  app.get("/add", function(req, res){
    res.render("add");
  });

  // Renders search handlebar page
  app.get("/search", function(req, res){
    res.render("search");
  });


  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });

};


