const sequelize = require('../config/connection');

const seedDeliveryService = require('./DeliveryServiceData');
const seedDish = require('./DishData');
const seedResto = require('./RestoData');

const seedAll = async () => {
  
  await sequelize.sync({ force: true });
  
  await seedDeliveryService();

  await seedResto();

  await seedDish();

};

seedAll();
