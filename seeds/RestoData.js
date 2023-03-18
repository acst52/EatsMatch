const { Resto } = require('../models');

<<<<<<< HEAD

const restoData = [

    {
      resto_name: "Burger's Priest",
      
      delivery_service: '1',
     
      resto_promo_dd: '0',
      resto_promo_uber: '0.25',
      resto_img: 'https://media-cdn.tripadvisor.com/media/photo-s/0a/2f/09/24/burger-s-priest.jpg',
      // resto_dish: [
      // { dishName: 'The Priest Burger', price: 8.99 },
      // { dishName: 'The Option Burger', price: 10.99 },
      // ]
      },
      {
      resto_name:"Pizzeria Mozza" ,
      
      delivery_service: '1',
      
      resto_promo_dd: '0',
      resto_promo_uber: '0.25',
      resto_img: 'https://www.pizzeriamozza.com/media/2366/salumi_pizza_small.jpg',
      // resto_dish: [
      // { dishName: 'Margherita Pizza', price: 12.99 },
      // { dishName: 'Fennel Sausage Pizza', price: 14.99 },
      // ]
      },
      {
      resto_name:"Cheesecake Factory",
      
      delivery_service: '1',
      
      resto_promo_dd: '0',
      resto_promo_uber: '0.25',
      resto_img: 'https://www.thecheesecakefactory.com/assets/images/Menu-Import/CCF_Cheesecakes_Raspberry-Lemon_Cheesecake.jpg',
      // resto_dish: [
      // { dishName: 'Original Cheesecake', price: 7.99 },
      // { dishName: 'Chocolate Chip Cookie Dough Cheesecake', price: 9.99 }
      // ]
      },
      {
        resto_name:"Kura Sushi",
       
        delivery_service: '1',
        
        resto_promo_dd: '0',
        resto_promo_uber: '0.25',
        resto_img: 'https://www.kurausa.com/wp-content/uploads/2020/05/Exterior_Anaheim.jpg',
        // resto_dish: [
        // {name: 'Salmon Nigiri', price: 2.25},
        // {name: 'Tuna Roll', price: 4.50}
        // ]
        },
        {
          resto_name: "The Capital Grille",
          
          delivery_service: '1',
          
          resto_promo_dd: '0',
          resto_promo_uber: '0.25',
          resto_img: 'https://www.thecapitalgrille.com/content/dam/tcg/menu/ToGo/The%20Capital%20Grille_Takeout_Menu_Holiday_Cheers_2021.jpg',
          // resto_dish: [
          // {name: 'Filet Mignon', price: 45.00},
          // {name: 'Lobster Mac & Cheese', price: 22.00},
          // ]
          },
          {
          resto_name: "P.F. Chang's",
          
          delivery_service: '1',
          
          resto_promo_dd: '0',
          resto_promo_uber: '0.25',
          resto_img: 'https://www.pfchangs.com/content/dam/pfchangs/en-US/Assets/01_Desktop/11_Menu/Dine-In/2018/Fall/Dine-In-Menu.png',
        //   resto_dish: [
        // {name: 'Mongolian Beef ', price: 18.50},
        // {name:'Kung Pao Chicken', price: 16.50},
        //   ]
        },

        {
        resto_name:"The Halal Guys",
        
        delivery_service: '1',
        
        resto_promo_uber: '0.25',
        resto_img: 'https://www.thehalalguys.com/wp-content/uploads/2020/01/homepage-mobile-banner-2.jpg',
        // resto_dish: [
        // {name:'Chicken and Gyro Combo', price: 10.99},
        // {name: 'Falafel Sandwich', price: 7.99},
        // ]
      },
       {   
       resto_name: "TGI Fridays",
       
       delivery_service: '1',
       
       resto_promo_dd: '0',
       resto_promo_uber: '0.25',
       resto_img: 'https://www.tgifridays.com/content/dam/fridays/images/menu/tgi-fridays-menu-1.png',
    //    resto_dish: [
    //  {name: 'Classic Cheeseburger', price: 12.49},
    //  {name: 'Dragon-Glazed Salmon', price: 19.99},
    // ]
  },
  {
    resto_name: "Five Guys",
    
    delivery_service: '1',
    
    resto_promo_dd: '0',
    resto_promo_uber: '0.25',
    resto_img: 'https://www.fiveguys.com/assets/img/fg-logo.png',
    // resto_dish: [
    // {name: 'Bacon Cheeseburger',price: 8.99},
    // {name: 'Cajun Fries', price: 4.19},
    // ]
  },
    {
      resto_name: "Blaze Pizza",
      
      delivery_service: '1',
      
      resto_promo_dd: '0',
      resto_promo_uber: '0.25',
      resto_img: 'https://www.blazepizza.com/wp-content/uploads/2021/01/Blaze_Hero_RGB.png',
    // resto_dish: [
    //  {name: 'Build Your Own Pizza', price: 7.95},
    //  {name: 'Red Vine Pizza', price: 8.95},
    // ]
  },
  {
    resto_name: "Chipotle Mexican Grill",
   
    delivery_service: '1',
   
    resto_promo_dd: '0',
    resto_promo_uber: '0.25',
    resto_img: 'https://www.chipotle.com/content/dam/cmg-web/menu-page/CMG-Food-Banner_1440x640.jpg',
  //   resto_dish:  [
  //  {name: 'Chicken Burrito Bowl', price: 8.25},
  //  {name: 'Veggie Quesadilla', price: 7.45},
  //   ]
  },
  {
   resto_name: "Dunkin",
  
   delivery_service: '1',
   
   resto_promo_dd: '0',
   resto_promo_uber: '0.25',
   resto_img: 'https://www.dunkindonuts.com/content/dunkindonuts/en/menu.html',
  //  resto_dish:  [
  //  {name: 'Bacon, Egg & Cheese Croissant',price: 4.69},
  //  {name: 'Original Glazed Donut',price: 1.29},
  //  ]
  },
   {
    resto_name: "The Melting Pot",
    
    delivery_service: '1',
    
    resto_promo_dd: '0',
    resto_promo_uber: '0.25',
    resto_img: 'https://www.meltingpot.com/content/dam/meltingpot/menus/main-menu.pdf',
    // resto_dish:  [
    // {name: 'Classic Alpine Cheese Fondue', price: 12.95},
    // {name: 'Filet Mignon', price: 34.95},
    // ]
  },
    {
    resto_name: "Red Lobster",
    
    delivery_service: '1',
    
    resto_promo_dd: '0',
    resto_promo_uber: '0.25',
    resto_img: 'https://www.redlobster.com/content/dam/rl-assets/Menu/Online/February%202022%20Menu/RL_Menu_Online_February_2022.pdf',
    // resto_dish:  [
    // {name: 'Ultimate Feast', price: 36.99},
    // {name: 'Lobster Bisque', price:  9.49},
    // ]
  },

    {
    resto_name: "Fogo de Chão Brazilian Steakhouse",
    
    delivery_service: '1',
    
    resto_promo_dd: '0',
    resto_img: 'https://fogodechao.com/wp-content/uploads/2021/03/Fogo-Menu-10.2020.pdf',
    // resto_dish:  [
    // {name: 'Full Churrasco Experience', price: 54.95},
    // {name: 'Lobster Bisque', price: 9.49},
    // ]
  },
    {
    resto_name: "KFC",
    
    delivery_service: '1',
    
    resto_promo_dd: '0',
    resto_promo_uber: '0.25',
    resto_img: 'https://www.kfc.com/_/items/images/menu/hero/KFC_9-Honey-Sauce-Chicken--1115.png',
    // resto_dish:  [
    // {name: '12-Piece Chicken Meal', price: 29.99},
    // {name: 'Famous Bow', price: 5.99},
    // ]
  },
   {
    resto_name: "Nando's",
   
    delivery_service: '1',
   
    resto_promo_dd: '0',
    resto_promo_uber: '0.25',
    resto_img: 'https://www.nandosperiperi.com/uploads/home/banners/Nandos-Peri-Peri-Banner-1-1920x960.jpg',
    // resto_dish:  [
    // {name: 'Half Chicken', price: 13.95},
    // {name: 'Espetada', price: 17.95},
    // ]
  },
   {
   resto_name: "Panda Express",
  
   delivery_service: '1',
   
   resto_promo_dd: '0',
   resto_promo_uber: '0.25',
   resto_img: 'https://www.pandaexpress.com/images/website/global/products/large/KungPaoChicken.jpg',
  //  resto_dish:  [
  //  {name: 'Orange Chicken', price: 8.10},
  //  {name: 'Beijing Beef', price: 9.15},
  //  ]
   },
   
   {
   resto_name: "Tatsu Ramen",
   
   delivery_service: '1',
   
   resto_promo_dd: '0',
   resto_promo_uber: '0.25',
   resto_img: 'https://www.tatsuramen.com/wp-content/uploads/2021/07/logo_tatsu-1024x1024.png',
  //  resto_dish:  [
  //  {name: 'Tonkotsu Ramen', price: 11.95},
  //  {name: 'Spicy Tuna Rice Bowl', price: 8.50},
  //  ]
  },
    {
    resto_name: "Yard House",
   
    delivery_service: '1',
    
    resto_promo_dd: '0',
    resto_promo_uber: '0.25',
    resto_img: 'https://www.yardhouse.com/content/dam/restaurant/10914/menus/2022/02/18/yh-menu-02-18-22.pdf',
    // resto_dish:  [
    // {name: 'Nashville Hot Chicken', price: 17.75},
    // {name: 'Poke Bowl', price: 15.95},
    // ]
  },
   {
     resto_name: "Sushi Roku",
    
     delivery_service: '1',
     
     resto_promo_dd: '0',
     resto_promo_uber: '0.25',
    resto_img: 'https://www.sushiroku.com/wp-content/uploads/2019/12/Pasadena-1-1.jpg',
//     resto_dish: [
// {name: 'Yellowtail Sashimi with Jalapeño', price: 23},
// {name: 'Lobster Dynamite', price: 24},
// ]
   }
  ]  


const seedResto = () => Resto.bulkCreate(restoData);

module.exports = seedResto;
=======
const RestoData = [
	{
		resto_name: "Burger's Priest",

		delivery_service: 1, // 1 2 or 3, 3=both

		resto_promo_dd: '0',
		resto_promo_uber: '0.25',
		resto_img:
			'https://media-cdn.tripadvisor.com/media/photo-s/0a/2f/09/24/burger-s-priest.jpg',
	},
	{
		resto_name: 'Pizzeria Mozza',

		delivery_service: 2,

		resto_promo_dd: '0',
		resto_promo_uber: '0.25',
		resto_img:
			'https://www.pizzeriamozza.com/media/2366/salumi_pizza_small.jpg',
	}
	// {
	// 	resto_name: 'Cheesecake Factory',

	// 	delivery_service: [1, 2],

	// 	resto_promo_dd: '0',
	// 	resto_promo_uber: '0.25',
	// 	resto_img:
	// 		'https://www.thecheesecakefactory.com/assets/images/Menu-Import/CCF_Cheesecakes_Raspberry-Lemon_Cheesecake.jpg',
	// },
	// {
	// 	resto_name: 'Kura Sushi',

	// 	delivery_service: [1, 2],

	// 	resto_promo_dd: '0',
	// 	resto_promo_uber: '0.25',
	// 	resto_img:
	// 		'https://www.kurausa.com/wp-content/uploads/2020/05/Exterior_Anaheim.jpg',
	// },
	// {
	// 	resto_name: 'The Capital Grille',

	// 	delivery_service: [1, 2],

	// 	resto_promo_dd: '0',
	// 	resto_promo_uber: '0.25',
	// 	resto_img:
	// 		'https://www.thecapitalgrille.com/content/dam/tcg/menu/ToGo/The%20Capital%20Grille_Takeout_Menu_Holiday_Cheers_2021.jpg',
	// },
	// {
	// 	resto_name: "P.F. Chang's",

	// 	delivery_service: [1, 2],

	// 	resto_promo_dd: '0',
	// 	resto_promo_uber: '0.25',
	// 	resto_img:
	// 		'https://www.pfchangs.com/content/dam/pfchangs/en-US/Assets/01_Desktop/11_Menu/Dine-In/2018/Fall/Dine-In-Menu.png',
	// },

	// {
	// 	resto_name: 'The Halal Guys',

	// 	delivery_service: [1, 2],

	// 	resto_promo_uber: '0.25',
	// 	resto_img:
	// 		'https://www.thehalalguys.com/wp-content/uploads/2020/01/homepage-mobile-banner-2.jpg',
	// },
	// {
	// 	resto_name: 'TGI Fridays',

	// 	delivery_service: [1, 2],

	// 	resto_promo_dd: '0',
	// 	resto_promo_uber: '0.25',
	// 	resto_img:
	// 		'https://www.tgifridays.com/content/dam/fridays/images/menu/tgi-fridays-menu-1.png',
	// },
	// {
	// 	resto_name: 'Five Guys',

	// 	delivery_service: [1, 2],

	// 	resto_promo_dd: '0',
	// 	resto_promo_uber: '0.25',
	// 	resto_img: 'https://www.fiveguys.com/assets/img/fg-logo.png',
	// },
	// {
	// 	resto_name: 'Blaze Pizza',

	// 	delivery_service: [1, 2],

	// 	resto_promo_dd: '0',
	// 	resto_promo_uber: '0.25',
	// 	resto_img:
	// 		'https://www.blazepizza.com/wp-content/uploads/2021/01/Blaze_Hero_RGB.png',
	// },
	// {
	// 	resto_name: 'Chipotle Mexican Grill',

	// 	delivery_service: [1, 2],

	// 	resto_promo_dd: '0',
	// 	resto_promo_uber: '0.25',
	// 	resto_img:
	// 		'https://www.chipotle.com/content/dam/cmg-web/menu-page/CMG-Food-Banner_1440x640.jpg',
	// 	resto_dish: [
	// 		{ name: 'Chicken Burrito Bowl', price: 8.25 },
	// 		{ name: 'Veggie Quesadilla', price: 7.45 },
	// 	],
	// },
	// {
	// 	resto_name: 'Dunkin',

	// 	delivery_service: [1, 2],

	// 	resto_promo_dd: '0',
	// 	resto_promo_uber: '0.25',
	// 	resto_img: 'https://www.dunkindonuts.com/content/dunkindonuts/en/menu.html',
	// },
	// {
	// 	resto_name: 'The Melting Pot',

	// 	delivery_service: [1, 2],

	// 	resto_promo_dd: '0',
	// 	resto_promo_uber: '0.25',
	// 	resto_img:
	// 		'https://www.meltingpot.com/content/dam/meltingpot/menus/main-menu.pdf',
	// },
	// {
	// 	resto_name: 'Red Lobster',

	// 	delivery_service: [1, 2],

	// 	resto_promo_dd: '0',
	// 	resto_promo_uber: '0.25',
	// 	resto_img:
	// 		'https://www.redlobster.com/content/dam/rl-assets/Menu/Online/February%202022%20Menu/RL_Menu_Online_February_2022.pdf',
	// },

	// {
	// 	resto_name: 'Fogo de Chão Brazilian Steakhouse',

	// 	delivery_service: [1, 2],

	// 	resto_promo_dd: '0',
	// 	resto_img:
	// 		'https://fogodechao.com/wp-content/uploads/2021/03/Fogo-Menu-10.2020.pdf',
	// },
	// {
	// 	resto_name: 'KFC',

	// 	delivery_service: [1, 2],

	// 	resto_promo_dd: '0',
	// 	resto_promo_uber: '0.25',
	// 	resto_img:
	// 		'https://www.kfc.com/_/items/images/menu/hero/KFC_9-Honey-Sauce-Chicken--1115.png',
	// },
	// {
	// 	resto_name: "Nando's",

	// 	delivery_service: [1, 2],

	// 	resto_promo_dd: '0',
	// 	resto_promo_uber: '0.25',
	// 	resto_img:
	// 		'https://www.nandosperiperi.com/uploads/home/banners/Nandos-Peri-Peri-Banner-1-1920x960.jpg',
	// },
	// {
	// 	resto_name: 'Panda Express',

	// 	delivery_service: [1, 2],

	// 	resto_promo_dd: '0',
	// 	resto_promo_uber: '0.25',
	// 	resto_img:
	// 		'https://www.pandaexpress.com/images/website/global/products/large/KungPaoChicken.jpg',
	// },

	// {
	// 	resto_name: 'Tatsu Ramen',

	// 	delivery_service: [1, 2],

	// 	resto_promo_dd: '0',
	// 	resto_promo_uber: '0.25',
	// 	resto_img:
	// 		'https://www.tatsuramen.com/wp-content/uploads/2021/07/logo_tatsu-1024x1024.png',
	// },
	// {
	// 	resto_name: 'Yard House',

	// 	delivery_service: [1, 2],

	// 	resto_promo_dd: '0',
	// 	resto_promo_uber: '0.25',
	// 	resto_img:
	// 		'https://www.yardhouse.com/content/dam/restaurant/10914/menus/2022/02/18/yh-menu-02-18-22.pdf',
	// },
	// {
	// 	resto_name: 'Sushi Roku',

	// 	delivery_service: [1, 2],

	// 	resto_promo_dd: '0',
	// 	resto_promo_uber: '0.25',
	// 	resto_img:
	// 		'https://www.sushiroku.com/wp-content/uploads/2019/12/Pasadena-1-1.jpg',
	// },
];

const seedResto = () => Resto.bulkCreate(RestoData);

module.exports = seedResto;
>>>>>>> 39f97c5054369e7ddbadc98d9be86bd593692c34
