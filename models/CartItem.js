const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class CartItem extends Model {}

CartItem.init(
	{
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
		},
		cart_id: {
			type: DataTypes.INTEGER,
			references: {
				model: 'cart', // name of Target model (table)
				key: 'id', // key in Target model that we're referencing
			},
		},
		dish_id: {
			type: DataTypes.INTEGER,
			references: {
				model: 'dish', // name of Target model
				key: 'id', // key in Target model
			},
		},
		quantity: {
			type: DataTypes.INTEGER,
			allowNull: false,
			defaultValue: 1,
		},
	},
	{
		sequelize,
		timestamps: false,
		freezeTableName: true,
		underscored: true,
		modelName: 'cart_item',
	}
);

module.exports = CartItem;

// to import this in any file it's used in:
