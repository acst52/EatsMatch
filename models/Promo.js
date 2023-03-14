const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Promo extends Model { };

Promo.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  promo_name: {
    type: DataTypes.STRING,
    allowNull: false
  }
},
  { sequelize });

module.exports = Promo;