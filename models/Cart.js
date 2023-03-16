const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Cart extends Model { };

Cart.init({
    quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1
    }
},
    { sequelize });

module.exports = Cart;