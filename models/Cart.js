const { Model, DataTypes } = require('sequelize');
const Dish = require('./Dish');
const sequelize = require('../config/connection');

class Cart extends Model { };

Cart.init({
    quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1
    },
    user_id: {
        type: DataTypes.INTEGER,
        references: {
            model: "Users",
            key: "id"
        }
    },
    dish_id: {
        type: DataTypes.INTEGER,
        references: {
            model: Dish,
            key: "id"
        }
    }
},
    { sequelize });

module.exports = Cart;