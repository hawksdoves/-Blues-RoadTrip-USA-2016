'use strict';
module.exports = function(sequelize, DataTypes) {
  var Location = sequelize.define('Location', {
    city: DataTypes.STRING,
    desc: DataTypes.TEXT,
    lat: DataTypes.DECIMAL,
    long: DataTypes.DECIMAL,
    arrival: DataTypes.DATE,
    departed: DataTypes.DATE
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        Location.hasMany(models.Activity);
      }
    }
  });
  return Location;
};
