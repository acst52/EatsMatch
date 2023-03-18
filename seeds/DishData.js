<<<<<<< HEAD
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
=======
const { Dish } = require('../models')

const DishData = [
        { dish_name: 'The Priest Burger', dish_price: 8.99, resto: 1 },
        { dish_name: 'The Option Burger', dish_price: 10.99, resto: 1 },
        { dish_name: 'Margherita Pizza', dish_price: 12.99, resto: 2 },
        { dish_name: 'Fennel Sausage Pizza', dish_price: 14.99, resto: 2 }
//     resto_dish: [
//     { dishName: 'The Priest Burger', price: 8.99 },
//     { dishName: 'The Option Burger', price: 10.99 },
//     ]
//   },
//   {
//     resto_dish: [
//       { dishName: 'Margherita Pizza', price: 12.99 },
//       { dishName: 'Fennel Sausage Pizza', price: 14.99 },
//       ]
//   },
//   {
//     resto_dish: [
//       { dishName: 'Original Cheesecake', price: 7.99 },
//       { dishName: 'Chocolate Chip Cookie Dough Cheesecake', price: 9.99 }
//       ]
//   },
//   {
//     resto_dish: [
//       {name: 'Salmon Nigiri', price: 2.25},
//       {name: 'Tuna Roll', price: 4.50}
//       ]
//   },
//   {
//     resto_dish: [
//       {name: 'Filet Mignon', price: 45.00},
//       {name: 'Lobster Mac & Cheese', price: 22.00},
//       ]
//   },
//   {
//     resto_dish: [
//       {name: 'Mongolian Beef ', price: 18.50},
//       {name:'Kung Pao Chicken', price: 16.50},
//         ]
//   },
//   {
//     resto_dish: [
//       {name:'Chicken and Gyro Combo', price: 10.99},
//       {name: 'Falafel Sandwich', price: 7.99},
//       ]
//   },
//   {
//     resto_dish: [
//       {name: 'Classic Cheeseburger', price: 12.49},
//       {name: 'Dragon-Glazed Salmon', price: 19.99},
//      ]
//   },
//   {
//     resto_dish: [
//       {name: 'Bacon Cheeseburger',price: 8.99},
//       {name: 'Cajun Fries', price: 4.19},
//       ]
//   },
//   {
//     resto_dish: [
//       {name: 'Build Your Own Pizza', price: 7.95},
//       {name: 'Red Vine Pizza', price: 8.95},
//      ]
//   },
//   {
//     resto_dish:  [
//       {name: 'Bacon, Egg & Cheese Croissant',price: 4.69},
//       {name: 'Original Glazed Donut',price: 1.29},
//       ]
//   },
//   {
//     resto_dish:  [
//       {name: 'Classic Alpine Cheese Fondue', price: 12.95},
//       {name: 'Filet Mignon', price: 34.95},
//       ]
//   },
//   {
//     resto_dish:  [
//       {name: 'Ultimate Feast', price: 36.99},
//       {name: 'Lobster Bisque', price:  9.49},
//       ]
//   },
//   {
//     resto_dish:  [
//       {name: 'Full Churrasco Experience', price: 54.95},
//       {name: 'Lobster Bisque', price: 9.49},
//       ]
//   },
//   {
//     resto_dish:  [
//       {name: '12-Piece Chicken Meal', price: 29.99},
//       {name: 'Famous Bow', price: 5.99},
//       ]
//   },
//   {
//     resto_dish:  [
//       {name: 'Half Chicken', price: 13.95},
//       {name: 'Espetada', price: 17.95},
//       ]
//   },
//   {
//     resto_dish:  [
//       {name: 'Orange Chicken', price: 8.10},
//       {name: 'Beijing Beef', price: 9.15},
//       ]
//   },
//   {
//     resto_dish:  [
//       {name: 'Tonkotsu Ramen', price: 11.95},
//       {name: 'Spicy Tuna Rice Bowl', price: 8.50},
//       ]
//   },
//   {
//     resto_dish:  [
//       {name: 'Nashville Hot Chicken', price: 17.75},
//       {name: 'Poke Bowl', price: 15.95},
//       ]
//   },
//   {
//     resto_dish: [
//       {name: 'Yellowtail Sashimi with Jalapeño', price: 23},
//       {name: 'Lobster Dynamite', price: 24},
//       ]
//   }
]

const seedDish = () => Dish.bulkCreate(DishData);

module.exports = seedDish;

// foreign key assoc between dish id and resto id exists

// CHECK IN SQL SHELL TO MAKE SURE DISHES HAVE DISH IDS ASSOC WITH RESTO
>>>>>>> 39f97c5054369e7ddbadc98d9be86bd593692c34
