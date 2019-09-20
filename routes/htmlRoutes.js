var db = require("../models");

module.exports = function(app) {
  // Load index page
    app.get("/", function(req,res) {
    res.render("index");
  })

  // Renders add handlebar page
  app.get("/add", function(req, res) {
    res.render("add");
  });

  // Renders search handlebar page
  app.get("/search", function(req, res) {
    res.render("search");
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
