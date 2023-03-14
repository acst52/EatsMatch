const { Resto, Dish } = require('../models');

const doorDashData = require('./doorDashData.json');
const uberEatsData = require('./uberEatsData.json');

const seedRestaurants = async () => {
  await Resto.bulkCreate([
    {
      name: "Burger's Priest",
      cuisine: 'Burgers',
      address: '212 Adelaide St W, Toronto, ON M5H 1W7',
      phoneNumber: '(647) 748-8100',
      deliveryServices: ['DoorDash', 'Uber Eats'],
      rating: 4.5,
      imageUrl: 'https://media-cdn.tripadvisor.com/media/photo-s/0a/2f/09/24/burger-s-priest.jpg',
    },
    // Add 19 more restaurants here
  ]);

  // Add dishes for each restaurant
  const restaurants = await Restaurant.findAll();

  for (let i = 0; i < restaurants.length; i++) {
    const restaurant = restaurants[i];

    if (restaurant.deliveryServices.includes('DoorDash')) {
      const doorDashRestaurant = doorDashData.find(
        (r) => r.name.toLowerCase() === restaurant.name.toLowerCase()
      );

      if (doorDashRestaurant) {
        const dishes = doorDashRestaurant.menu_items.map((d) => ({
          name: d.name,
          price: d.price,
          promotion: d.promotion,
          deliveryService: 'DoorDash',
          restaurantId: restaurant.id,
        }));

        await Dish.bulkCreate(dishes);
      }
    }

    if (restaurant.deliveryServices.includes('Uber Eats')) {
      const uberEatsRestaurant = uberEatsData.find(
        (r) => r.name.toLowerCase() === restaurant.name.toLowerCase()
      );

      if (uberEatsRestaurant) {
        const dishes = uberEatsRestaurant.menu_items.map((d) => ({
          name: d.name,
          price: d.price,
          promotion: d.promotion,
          deliveryService: 'Uber Eats',
          restaurantId: restaurant.id,
        }));

        await Dish.bulkCreate(dishes);
      }
    }
  }
};

seedRestaurants();
