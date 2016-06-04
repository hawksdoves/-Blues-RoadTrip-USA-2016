'use strict';
module.exports = function(sequelize, DataTypes) {
  var Activity = sequelize.define('Activity', {
    description: DataTypes.TEXT,
    picture: DataTypes.STRING,
    date: DataTypes.DATEONLY
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        Activity.belongsTo(models.Location);
      }
    }
  });
  return Activity;
};
