
const sequelize = require('../config/connection');

const seedDish = require('./DishData');
const seedResto = require('./RestoData');
const seedAll = async () => {
  
  await sequelize.sync({ force: true });
  
  await seedResto();

  await seedDish();
  
  
  
};
seedAll();
  
   
