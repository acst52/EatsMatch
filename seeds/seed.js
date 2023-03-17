const sequelize = require('../config/connection');

//const seedDish = require('./DishData');
const seedDeliveryData = require('./DeliveryServiceData');
const seedResto = require('./RestoData');
const seedAll = async () => {
  
  await sequelize.sync({ force: true });
  
  await seedDeliveryData();
  await seedResto();
  

  //await seedDish();
  
  
  
};
seedAll();
  