const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Payment extends Model {}

Payment.init(
	{
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
		},
		amount: {
			type: DataTypes.FLOAT,
			allowNull: false,
		},
		payment_date: {
			type: DataTypes.DATE,
			allowNull: false,
			defaultValue: DataTypes.NOW,
		},
		payment_id: {
			type: DataTypes.STRING,
			allowNull: false,
		},
	},
	{
		sequelize,
		freezeTableName: true,
		underscored: true,
		modelName: 'payment',
	}
);
