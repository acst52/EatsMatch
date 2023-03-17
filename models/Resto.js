const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Resto extends Model { };

Resto.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  resto_name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  resto_img: {
    type: DataTypes.STRING,
    allowNull: false
  },
  resto_promo_uber: {
    type: DataTypes.DECIMAL,
    allowNull: true
  },
  resto_promo_dd: {
    type: DataTypes.DECIMAL,
    allowNull: true
  },
  tag: {
    type: DataTypes.STRING,
    allowNull: false
  },
  delivery_service: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: 'delivery_services',
      key: 'id'
    }
  }
},
  { sequelize });

module.exports = Resto;

// resto promo = number say 0.25 for 25% discount, multiply dish price * 1-resto_promo_uber ... this calc would need to be done in controller and passed to handlebars to display. checkout button renders under lowest price?