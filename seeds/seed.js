const sequelize = require('../config/connection');
const { Resto, Dish } = require('../models');

const doorDashData = require('./doorDashData.json');
const uberEatsData = require('./uberEatsData.json');

const seedRestaurants = async () => {

  await sequelize.sync({ force: true });

  await Resto.bulkCreate([
    {
      resto_name: "Burger's Priest",
      resto_img: 'https://media-cdn.tripadvisor.com/media/photo-s/0a/2f/09/24/burger-s-priest.jpg',
      resto_promo: "1"
    },
    {
      resto_name: "Burger's Priest 2",
      resto_img: 'https://media-cdn.tripadvisor.com/media/photo-s/0a/2f/09/24/burger-s-priest.jpg',
      resto_promo: "1"
    },
    {
      resto_name: "Burger's Priest 3",
      resto_img: 'https://media-cdn.tripadvisor.com/media/photo-s/0a/2f/09/24/burger-s-priest.jpg',
      resto_promo: "1"
    },
    {
      resto_name: "Burger's Priest 4",
      resto_img: 'https://media-cdn.tripadvisor.com/media/photo-s/0a/2f/09/24/burger-s-priest.jpg',
      resto_promo: "1"
    },
    {
      resto_name: "Burger's Priest 5",
      resto_img: 'https://media-cdn.tripadvisor.com/media/photo-s/0a/2f/09/24/burger-s-priest.jpg',
      resto_promo: "1"
    },
    // Add 19 more restaurants here
  ]);

  // Add dishes for each restaurant
  const restaurants = await Resto.findAll();

  console.log(restaurants);

  //   for (let i = 0; i < restaurants.length; i++) {
  //     const restaurant = restaurants[i];

  //     if (restaurant.deliveryServices.includes('DoorDash')) {
  //       const doorDashRestaurant = doorDashData.find(
  //         (r) => r.name.toLowerCase() === restaurant.name.toLowerCase()
  //       );

  //       if (doorDashRestaurant) {
  //         const dishes = doorDashRestaurant.menu_items.map((d) => ({
  //           name: d.name,
  //           price: d.price,
  //           promotion: d.promotion,
  //           deliveryService: 'DoorDash',
  //           restaurantId: restaurant.id,
  //         }));

  //         await Dish.bulkCreate(dishes);
  //       }
  //     }

  //     if (restaurant.deliveryServices.includes('Uber Eats')) {
  //       const uberEatsRestaurant = uberEatsData.find(
  //         (r) => r.name.toLowerCase() === restaurant.name.toLowerCase()
  //       );

  //       if (uberEatsRestaurant) {
  //         const dishes = uberEatsRestaurant.menu_items.map((d) => ({
  //           name: d.name,
  //           price: d.price,
  //           promotion: d.promotion,
  //           deliveryService: 'Uber Eats',
  //           restaurantId: restaurant.id,
  //         }));

  //         await Dish.bulkCreate(dishes);
  //       }
  //     }
  //   }
};

seedRestaurants();
