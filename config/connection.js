// lets define the db connection using the Sequelize lib for Node.js
// import Sequelize & Dotenv libs
const Sequelize = require('sequelize');
require('dotenv').config();

// create new sequelize instance using ternary to handle ? deployed on Heroku : not yet
const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
      host: 'localhost',
      dialect: 'mysql',
      port: 3306
  });

// export sequelize var so it can be used elsewhere to perform db operations
module.exports = sequelize;