//This is temporary code will be modified

const { Resto, Dish } = require('./models');

//const doorDashData = require('./doorDashData.json');
//const uberEatsData = require('./uberEatsData.json');


const seedRestaurants = async () => {
  await sequelize.sync({ force: true });
 
  await Resto.bulkCreate([
    {
      resto_name: "Burger's Priest",
      cuisine: 'Burgers',
      address: '212 Adelaide St W, Toronto, ON M5H 1W7',
      phoneNumber: '(647) 748-8100',
      deliveryServices: ['DoorDash', 'Uber Eats'],
      rating: 4.5,
      resto_promo: 'any value'
      resto_img: 'https://media-cdn.tripadvisor.com/media/photo-s/0a/2f/09/24/burger-s-priest.jpg',
      resto_dish: [
      { dishName: 'The Priest Burger', price: 8.99 },
      { dishName: 'The Option Burger', price: 10.99 },
      ]
      },
      {
      resto_name:"Pizzeria Mozza" ,
      cuisine: 'Pizzas',
      address: '641 N Highland Ave, Los Angeles, CA 90036',
      phoneNumber: '(323) 297-0101',
      deliveryServices: ['DoorDash', 'Uber Eats'],
      rating: 4.5,
      resto_promo: 'any value'  
      resto_img: 'https://www.pizzeriamozza.com/media/2366/salumi_pizza_small.jpg',
      resto_dish: [
      { dishName: 'Margherita Pizza', price: 12.99 },
      { dishName: 'Fennel Sausage Pizza', price: 14.99 },
      ]
      },
      {
      resto_name:"Cheesecake Factory",
      cuisine: 'Cheesecakes',
      address: '1220 Galleria Blvd, Roseville, CA 95678',
      phoneNumber: '(916) 781-3399',
      deliveryServices: ['DoorDash', 'Uber Eats'],
      rating: 4.5,
      resto_promo: 'any value'  
      resto_img: 'https://www.thecheesecakefactory.com/assets/images/Menu-Import/CCF_Cheesecakes_Raspberry-Lemon_Cheesecake.jpg',
      resto_dish: [
      { dishName: 'Original Cheesecake', price: 7.99 },
      { dishName: 'Chocolate Chip Cookie Dough Cheesecake', price: 9.99 }
      ]
      },
      {
        resto_name:"Kura Sushi",
        cuisine: 'Japanese',
        address: '1840 S Harbor Blvd, Anaheim, CA 92802',
        phoneNumber: '(714) 333-4688',
        deliveryServices: ['DoorDash', 'Uber Eats'],
        rating: 4.0,
        resto_promo: 'any value'  
        resto_img: 'https://www.kurausa.com/wp-content/uploads/2020/05/Exterior_Anaheim.jpg',
        resto_dish: [
        {name: 'Salmon Nigiri', price: 2.25},
        {name: 'Tuna Roll', price: 4.50}
        ]
        },
        {
          resto_name: "The Capital Grille",
          cuisine: 'Steakhouse',
          address: '444 Brickell Ave, Miami, FL 33131',
          phoneNumber: '(305) 374-4500',
          deliveryServices: ['DoorDash', 'Uber Eats'],
          rating: 4.5,
          resto_promo: 'any value'  
          resto_img: 'https://www.thecapitalgrille.com/content/dam/tcg/menu/ToGo/The%20Capital%20Grille_Takeout_Menu_Holiday_Cheers_2021.jpg',
          resto_dish: [
          {name: 'Filet Mignon', price: 45.00},
          {name: 'Lobster Mac & Cheese', price: 22.00},
          ]
          },
          {
          retso_name: "P.F. Chang's",
          cuisine: 'Chinese',
          address: '1009 S Rampart Blvd, Los Angeles, CA 90019',
          phonenumber: '(323) 380-9688',
          deliveryServices:['DoorDash', 'Uber Eats'],
          rating: 4.0,
          resto_promo: 'any value'  
          resto_img: 'https://www.pfchangs.com/content/dam/pfchangs/en-US/Assets/01_Desktop/11_Menu/Dine-In/2018/Fall/Dine-In-Menu.png',
          resto_dish: [
        {name: 'Mongolian Beef ', price: 18.50},
        {name:'Kung Pao Chicken', price: 16.50},
          ]
        },

        {
        resto_name:"The Halal Guys",
        cuisine: 'Middle Eastern',
        address: '307 Thayer St, Providence, RI 02906',
        phoneNumber: '(401) 419-6357',
        deliveryServices:['Grubhub', 'Uber Eats'],
        rating: 4.0,
        resto_promo: 'any value'  
        resto_img: 'https://www.thehalalguys.com/wp-content/uploads/2020/01/homepage-mobile-banner-2.jpg',
        resto_dish: [
        {name:'Chicken and Gyro Combo', price: 10.99},
        {name: 'Falafel Sandwich', price: 7.99},
        ]
      },
       {   
       resto_name: "TGI Fridays",
       cuisine: 'American',
       address: '2455 Gulf Fwy S, League City, TX 77573',
       phoneNumber: '(281) 534-0873',
       deliveryServices: ['DoorDash', 'Uber Eats'],
       rating: 3.5,
       resto_promo: 'any value'  
       resto_img: 'https://www.tgifridays.com/content/dam/fridays/images/menu/tgi-fridays-menu-1.png',
       resto_dish: [
     {name: 'Classic Cheeseburger', price: 12.49},
     {name: 'Dragon-Glazed Salmon', price: 19.99},
    ]
  },
  {
    resto_name: "Five Guys",
    cuisine: 'Burgers',
    address: '11870 W Broad St, Richmond, VA 23233',
    phoneNumber: '(804) 360-4897',
    deliveryServices: ['DoorDash', 'Uber Eats'],
    rating: 4.5,
    resto_promo: 'any value'  
    resto_img: 'https://www.fiveguys.com/assets/img/fg-logo.png',
    resto_dish: [
    {name: 'Bacon Cheeseburger',price: 8.99},
    {name: 'Cajun Fries', price: 4.19},
    ]
  },
    {
      resto_name: "Blaze Pizza",
      cuisine: 'Pizzas',
      address: '5130 Cherry Ave, San Jose, CA 95118',
      phoneNumber: '(408) 960-0910',
      deliveryServices: ['DoorDash', 'Uber Eats'],
      rating: 4.0,
      resto_promo: 'any value'  
      resto_img: 'https://www.blazepizza.com/wp-content/uploads/2021/01/Blaze_Hero_RGB.png',
    resto_dish: [
     {name: 'Build Your Own Pizza', price: 7.95},
     {name: 'Red Vine Pizza', price: 8.95},
    ]
  },
  {
    resto_name: "Chipotle Mexican Grill",
    cuisine: 'Mexican',
    address: '9500 S Eastern Ave, Las Vegas, NV 89123',
    phoneNumber: '(702) 534-4494',
    deliveryServices: ['DoorDash', 'Uber Eats'],
    rating: 4.0,
    resto_promo: 'any value'  
    resto_img: 'https://www.chipotle.com/content/dam/cmg-web/menu-page/CMG-Food-Banner_1440x640.jpg',
    resto_dish:  [
   {name: 'Chicken Burrito Bowl', price: 8.25},
   {name: 'Veggie Quesadilla', price: 7.45},
    ]
  },
  {
   resto_name: "Dunkin",
   cuisine: 'Coffee and Donuts',
   address: '324 E 14th St, New York, NY 10003',
   phoneNumber: '(212) 982-4540',
   deliveryServices: ['DoorDash', 'Uber Eats'],
   rating: 3.5,
   resto_promo: 'any value'  
   resto_img: 'https://www.dunkindonuts.com/content/dunkindonuts/en/menu.html',
   resto_dish:  [
   {name: 'Bacon, Egg & Cheese Croissant',price: 4.69},
   {name: 'Original Glazed Donut',price: 1.29},
   ]
  },
   {
    resto_name: "The Melting Pot",
    cuisine: 'Fondue',
    address: '901 Avenida Pico, San Clemente, CA 92673',
    phoneNumber: '(949) 661-1966',
    deliveryServices: ['DoorDash', 'Uber Eats'],
    rating: 4.0,
    resto_promo: 'any value'  
    resto_img: 'https://www.meltingpot.com/content/dam/meltingpot/menus/main-menu.pdf',
    resto_dish:  [
    {name: 'Classic Alpine Cheese Fondue', price: 12.95},
    {name: 'Filet Mignon', price: 34.95},
    ]
  },
    {
    resto_name: "Red Lobster",
    cuisine: 'Seafood',
    address: '5025 International Dr, Orlando, FL 32819',
    phoneNumber: '(407) 248-8800',
    deliveryServices: ['DoorDash', 'Uber Eats'],
    rating: 3.5,
    resto_promo: 'any value'  
    resto_img: 'https://www.redlobster.com/content/dam/rl-assets/Menu/Online/February%202022%20Menu/RL_Menu_Online_February_2022.pdf',
    resto_dish:  [
    {name: 'Ultimate Feast', price: 36.99},
    {name: 'Lobster Bisque', price:  9.49},
    ]
  },

    {
    resto_name: "Fogo de Chão Brazilian Steakhouse",
    cuisine: 'Brazilian Steakhouse',
    address: '661 N LaSalle Dr, Chicago, IL 60654',
    phoneNumber: '(312) 932-9330',
    deliveryServices: ['DoorDash', 'Grubhub'],
    rating: 4.5,
    resto_promo: 'any value'  
    resto_img: 'https://fogodechao.com/wp-content/uploads/2021/03/Fogo-Menu-10.2020.pdf',
    resto_dish:  [
    {name: 'Full Churrasco Experience', price: 54.95},
    {name: 'Lobster Bisque', price: 9.49},
    ]
  },
    {
    resto_name: "KFC",
    cuisine: 'Fried Chicken',
    address: '1509 E Main St, Richmond, VA 23219',
    phoneNumber: '(804) 782-1600',
    deliveryServices: ['DoorDash', 'Uber Eats'],
    rating: 3.5,
    resto_promo: 'any value'  
    resto_img: 'https://www.kfc.com/_/items/images/menu/hero/KFC_9-Honey-Sauce-Chicken--1115.png',
    resto_dish:  [
    {name: '12-Piece Chicken Meal', price: 29.99},
    {name: 'Famous Bow', price: 5.99},
    ]
  },
   {
    resto_name: "Nando's",
    cuisine: 'Portuguese',
    address: '11700 Chenal Pkwy #105, Little Rock, AR 72211',
    phoneNumber: '(501) 223-3355',
    deliveryServices: ['DoorDash', 'Uber Eats'],
    rating: 4.5,
    resto_promo: 'any value'  
    resto_img: 'https://www.nandosperiperi.com/uploads/home/banners/Nandos-Peri-Peri-Banner-1-1920x960.jpg',
    resto_dish:  [
    {name: 'Half Chicken', price: 13.95},
    {name: 'Espetada', price: 17.95},
    ]
  },
   {
   resto_name: "Panda Express",
   cuisine: 'Chinese',
   address: '4501 E Virginia St, Evansville, IN 47715',
   phoneNumber: '(812) 471-8600',
   deliveryServices: ['DoorDash', 'Uber Eats'],
   rating: 3.5,
   resto_promo: 'any value'  
   resto_img: 'https://www.pandaexpress.com/images/website/global/products/large/KungPaoChicken.jpg',
   resto_dish:  [
   {name: 'Orange Chicken', price: 8.10},
   {name: 'Beijing Beef', price: 9.15},
   ]
   },
   
   {
   resto_name: "Tatsu Ramen",
   cuisine: 'Japanese',
   address: '2123 Sawtelle Blvd, Los Angeles, CA 90025',
   phoneNumber: '(310) 684-2889',
   deliveryServices: ['DoorDash', 'Uber Eats'],
   rating: 4.0,
   resto_promo: 'any value'  
   resto_img: 'https://www.tatsuramen.com/wp-content/uploads/2021/07/logo_tatsu-1024x1024.png',
   resto_dish:  [
   {name: 'Tonkotsu Ramen', price: 11.95},
   {name: 'Spicy Tuna Rice Bowl', price: 8.50},
   ]
  },
    {
    resto_name: "Yard House",
    cuisine: 'American',
    address: '101 The Grove Dr, Los Angeles, CA 90036',
    phoneNumber: '(323) 634-9343',
    deliveryServices:  ['DoorDash', 'Uber Eats'],
    rating: 4.0,
    resto_promo: 'any value'  
    resto_img: 'https://www.yardhouse.com/content/dam/restaurant/10914/menus/2022/02/18/yh-menu-02-18-22.pdf',
    resto_dish:  [
    {name: 'Nashville Hot Chicken', price: 17.75},
    {name: 'Poke Bowl', price: 15.95},
    ]
  },
   {
     resto_name: "Sushi Roku",
     cuisine: 'Japanese',
     address: '33 Miller Alley, Pasadena, CA 91103',
     phoneNumber: '(626) 683-3000',
     deliveryServices: ['DoorDash', 'Uber Eats'],
     rating: 4.5,
     resto_promo: 'any value'  
    resto_img: 'https://www.sushiroku.com/wp-content/uploads/2019/12/Pasadena-1-1.jpg',
    resto_dish: [
{name: 'Yellowtail Sashimi with Jalapeño', price: 23},
{name: 'Lobster Dynamite', price: 24},
]
   }
  ])   
    
  
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

