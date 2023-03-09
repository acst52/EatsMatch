const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Order extends Model {};

Order.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      total_price: {
        type: DataTypes.FLOAT,
        allowNull: false
      },
      delivery_address: {
        type: DataTypes.STRING,
        allowNull: false
      }
});

module.exports = Order;