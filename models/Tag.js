const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Tag extends Model {};

Tag.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
    tag_name: {
        type: DataTypes.STRING,
        allowNull: false
      }
});

module.exports = Tag;