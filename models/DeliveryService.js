const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class DeliveryService extends Model {};

DeliveryService.init({
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    baseURL: {
        type: DataTypes.STRING,
        allowNull: false
    },
    logoURL: {
        type: DataTypes.STRING,
        allowNull: false
    }
},
{
    sequelize,
    timestamps: false,
    underscored: true,
    modelName: 'delivery_service'
});

module.exports = DeliveryService;