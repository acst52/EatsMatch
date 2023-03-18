const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class DeliveryService extends Model {};

DeliveryService.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: true
      },
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
    tableName: 'deliveryService', // set explicit table name so Resto can ref it
    timestamps: false,
    underscored: true,
    modelName: 'deliveryservice'
});

module.exports = DeliveryService;


// store current promotional discounts from the 2 sources, and apply to final price to give consumer total