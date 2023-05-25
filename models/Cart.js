const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Cart extends Model {}

Cart.init(
	{
		quantity: {
			type: DataTypes.INTEGER,
			allowNull: false,
			defaultValue: 1,
		},
		userId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			field: 'user_id', // This line instructs Sequelize to use 'user_id' as the actual column name in SQL
		},
		dish_id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'dishes',
				key: 'id',
			},
		},
	},
	{ sequelize }
);

module.exports = Cart;
