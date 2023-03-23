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
            model: "user",
            key: "id"
        }
    },
    dish_id: {
        type: DataTypes.INTEGER,
        references: {
            model: "dish",
            key: "id"
        }
    },
    order_id: {
        type: DataTypes.INTEGER,
        references: {
            model: "order",
            key: "id"
        }
    }
},
    { sequelize });

module.exports = Cart;