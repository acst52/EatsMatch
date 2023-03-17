const sequelize = require('../config/connection');

//const seedDish = require('./DishData');
const seedResto = require('./RestoData');
const seedDeliveryData = require('./DeliveryServiceData')
const seedAll = async () => {
  
  await sequelize.sync({ force: true });
  
  await seedResto();
  await seedDeliveryData();

  //await seedDish();
  
  
  
};
seedAll();
  