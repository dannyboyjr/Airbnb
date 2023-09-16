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
        foreignKey: "spotId",
        onDelete: "cascade",
        hooks: true
        });

      Spot.hasMany(models.Booking, {
        foreignKey: "spotId",
        onDelete: "cascade",
        hooks: true
        });

      Spot.hasMany(models.SpotImage, {
        foreignKey: "spotId",
        onDelete: "cascade",
        hooks: true
        });



      Spot.belongsTo(models.User, {
        foreignKey: "userId",
      });
    }
  }
  Spot.init({
    userId: DataTypes.INTEGER,
    address: DataTypes.STRING,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    country: DataTypes.STRING,
    lat: DataTypes.DECIMAL,
    lng: DataTypes.DECIMAL,
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    price: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
    previewImage: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Spot',
  });
  return Spot;
};