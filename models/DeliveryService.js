const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class DeliveryService extends Model {};

DeliveryService.init({
    name: {
        type: DataTypes.STRING,
        allowNull: true
    },
    baseURL: {
        type: DataTypes.STRING,
        allowNull: true
    },
    logoURL: {
        type: DataTypes.STRING,
        allowNull: true
    }
},
{
    sequelize,
    timestamps: false,
    underscored: true,
    modelName: 'delivery_service'
});

module.exports = DeliveryService;


// store current promotional discounts from the 2 sources, and apply to final price to give consumer total