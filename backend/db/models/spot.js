'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Spot extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      Spot.hasMany(models.Review, {
        foreignkey: "spotId",
        onDelete: "cascade",
        hooks: true
        });

      Spot.hasMany(models.Booking, {
        foreignkey: "spotId",
        onDelete: "cascade",
        hooks: true
        });

      Spot.hasMany(models.SpotImage, {
        foreignkey: "spotId",
        onDelete: "cascade",
        hooks: true
        });



      Spot.belongsTo(models.User, {
        foreignKey: "ownerId",
      });
    }
  }
  Spot.init({
    ownerId: DataTypes.INTEGER,
    address: DataTypes.STRING,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    country: DataTypes.STRING,
    lat: DataTypes.DECIMAL,
    lng: DataTypes.DECIMAL,
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    price: DataTypes.DECIMAL,
    previewImage: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Spot',
  });
  return Spot;
};