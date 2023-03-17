const { Resto } = require('../models')
const createDishes = async() => {
    const restaurants = await Resto.findAll();
    
   console.log(restaurants)
   for (let i = 0; i < restaurants.length; i++) {
     const restaurant = restaurants[i];
     console.log(restaurant.deliveryServices)
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
   }
    createDishes()