const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class OrderItem extends Model {}

OrderItem.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    order_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'order',
        key: 'id',
      },
    },
    dish_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'dish',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'order_item',
  }
);

module.exports = OrderItem;
