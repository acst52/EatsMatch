const { Model, DataTypes } = require('sequelize');
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
            model: "User",
            key: "id"
        }
    },
    dish_id: {
        type: DataTypes.INTEGER,
        references: {
            model: "Dish",
            key: "id"
        }
    }
},
    { sequelize });

module.exports = Cart;