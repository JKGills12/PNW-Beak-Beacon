// Creates a "Chirp" model that matches up with DB

module.exports = function(sequelize, DataTypes) {
  var Chirp = sequelize.define("chirp_tables", {
    bird_name: DataTypes.STRING,
    family: DataTypes.STRING,
    voice: DataTypes.STRING,
    habitat:DataTypes.STRING,
    place:DataTypes.STRING
  });
  return Chirp;
} 

