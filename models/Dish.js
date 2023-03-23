const { Model, DataTypes } = require('sequelize');
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
    allowNull: false,
  },
  dish_price: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  // since restos have multiple dishes, we want them to be assoc with resto id
  resto: {
    type: DataTypes.INTEGER,
    references: {
      model: "Restos",
      key: "id"
    },
  },
  // dish_img: {
  //   type: DataTypes.STRING,
  //   allowNull: false
  // }
},
  { sequelize, tablename: 'Dishes' });

module.exports = Dish;