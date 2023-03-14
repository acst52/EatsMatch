const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Resto extends Model { };

Resto.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  resto_name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  resto_img: {
    type: DataTypes.STRING,
    allowNull: false // maybe false=stretch
  },
  resto_promo: {
    type: DataTypes.STRING,
    allowNull: false
  }
},
  { sequelize });

module.exports = Resto;