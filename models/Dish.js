const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Dish extends Model { };

Dish.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  dish_name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  dish_description: {
    type: DataTypes.STRING,
    allowNull: false
  },
  dish_price: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  dish_img: {
    type: DataTypes.STRING,
    allowNull: false
  },
  dish_promo: {
    type: DataTypes.STRING,
    allowNull: false
  }
},
  { sequelize });

module.exports = Dish;