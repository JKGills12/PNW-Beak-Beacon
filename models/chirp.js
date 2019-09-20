// Creates a "Chirp" model that matches up with DB

module.exports = function(sequelize, Sequelize) {
  var Chirp = sequelize.define("chirp_tables", {
    item_id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    bird_name: Sequelize.STRING,
    family: Sequelize.STRING,
    voice: Sequelize.STRING,
    habitat:Sequelize.STRING,
    places:Sequelize.STRING,
    createdAt: {
      type:Sequelize.DATE,
      defaultValue: Sequelize.NOW,
      allowNull: false
    },
    updatedAt: {
      type:Sequelize.DATE,
      defaultValue: Sequelize.NOW,
      allowNull: false
    },
  });
  return Chirp;
} 