const { Dish } = require('../models')

const DishData = [
        { dish_name: 'The Priest Burger', dish_price: 8.99, resto: 1,  dish_img: 'https://cdn.theburgerspriest.com/static_images/burgersPriest2x/1024x768/910007d1tbp.jpg?impolicy=imgopt&imwidth=450'},
        { dish_name: 'The Option Burger', dish_price: 10.99, resto: 1 , dish_img: 'https://cdn.theburgerspriest.com/static_images/burgersPriest2x/1024x768/910013d1tbp.jpg?impolicy=imgopt&imwidth=450'},
        { dish_name: 'Margherita Pizza', dish_price: 12.99, resto: 2 , dish_img: 'https://cdn.shopify.com/s/files/1/0205/9582/articles/20220211142347-margherita-9920_ba86be55-674e-4f35-8094-2067ab41a671.jpg?crop=center&height=915&v=1644590192&width=1200'},
        { dish_name: 'Fennel Sausage Pizza', dish_price: 14.99, resto: 2 }, // dish_img: 'https://assets.bonappetit.com/photos/5aa94eb56ed79626bc262c39/1:1/w_3332,h_3332,c_limit/cast-iron-pizza-with-fennel-and-sausage.jpg'
        { dish_name: 'Original Cheesecake', dish_price: 7.99, resto: 3 }, // dish_img: 'https://www.thecheesecakefactorybakery.com/assets/images/Bakery/products/specialty/original-cheesecake-slice-main.png'
        { dish_name: 'Oreo Dream Cheesecake', dish_price: 9.99, resto: 3 }, // dish_img: 'https://olo-images-live.imgix.net/6a/6ad164f8f1e74418809e66e0da4fad99.jpg?auto=format%2Ccompress&q=60&cs=tinysrgb&w=1200&h=800&fit=fill&fm=png32&bg=transparent&s=eba0332952087ca8bbca5f34403ecd0a'
        { dish_name: 'Salmon Nigiri', dish_price: 2.25, resto: 4 }, // dish_img: 'https://izzycooking.com/wp-content/uploads/2020/10/Salmon-Nigiri-thumbnail-500x375.jpg'
        { dish_name: 'Tuna Roll', dish_price: 4.50, resto: 4 }, // dish_img: 'https://www.tiger-corporation.com/wp-content/uploads/2023/02/hero-img-recipe-spicy-tuna-3db6e125056f2bde01321a3da5d290da.jpg'
        { dish_name: 'Filet Mignon', dish_price: 45.00, resto: 5 }, // dish_img: 'https://ourtableforseven.com/wp-content/uploads/2022/09/10-22.jpg'
        { dish_name: 'Lobster Mac & Cheese', dish_price: 28.00, resto: 5 }, // dish_img: 'https://www.foodnetwork.com/content/dam/images/food/fullset/2009/11/1/0/BX0207_Lobster-Mac-and-Cheese_s4x3.jpg'
        { dish_name: 'Mongolian Beef', dish_price: 18.50, resto: 6 }, // dish_img: 'https://thecozyapron.com/wp-content/uploads/2018/05/mongolian-beef_thecozyapron_1.jpg'
        { dish_name: 'Kung Pao Chicken', dish_price: 15.99, resto: 6 }, // dish_img: 'https://www.onceuponachef.com/images/2018/05/Kung-Pao-Chicken-16-scaled.jpg'
        { dish_name: 'Chicken and Gyro Combo', dish_price: 10.99, resto: 7 }, // dish_img: 'https://www.dimitrasdishes.com/wp-content/uploads/2020/04/Gyro-scaled.jpeg'
        { dish_name: 'Falafel Sandwich', dish_price: 7.99, resto: 7 }, // dish_img: 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F44%2F2020%2F03%2F14%2F7854420.jpg&q=60'
        { dish_name: 'Classic TGIF Cheeseburger', dish_price: 13.49, resto: 8 }, // dish_img: 'https://www.tgifridays.co.uk/media/2162/classic-american-cheese-burger-at-fridays.webp'
        { dish_name: 'Dragon-Glazed Salmon', dish_price: 19.99, resto: 8 }, // dish_img: 'https://pbs.twimg.com/media/DYsAGZeUQAU8iRL.jpg'
        { dish_name: 'Bacon Cheeseburger', dish_price: 8.99, resto: 9 }, // dish_img: 'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2010/4/26/1/FNM_060110-Insert-017_s4x3.jpg.rend.hgtvcom.616.462.suffix/1371591466674.jpeg'
        { dish_name: 'Cajun Fries', dish_price: 4.19, resto: 9 }, // dish_img: 'https://bluejeanchef.com/uploads/2020/07/Cajun-Fries-1280-8-819x1024.jpg'
        { dish_name: 'Build Your Own Personal Pizza', dish_price: 8.95, resto: 10 }, // dish_img: 'https://cdn.trendhunterstatic.com/thumbs/440/personal-pizza-1.jpeg?auto=webp'
        { dish_name: 'Caesar Salad', dish_price: 7.00, resto: 10 }, // dish_img: 'https://assets.bonappetit.com/photos/624215f8a76f02a99b29518f/3:4/w_1812,h_2416,c_limit/0328-ceasar-salad-lede.jpg'
        { dish_name: 'Chicken Burrito Bowl', dish_price: 8.25, resto: 11 }, // dish_img: 'https://healthyfitnessmeals.com/wp-content/uploads/2019/06/Grilled-chicken-burrito-bowls-9.jpg'
        { dish_name: 'Veggie Quesadilla', dish_price: 7.45, resto: 11 }, // dish_img: 'https://ifoodreal.com/wp-content/uploads/2021/11/fg-vegetarian-quesadilla.jpg'
        { dish_name: 'Bacon, Egg & Cheese Croissant', dish_price: 4.69, resto: 12 },
        { dish_name: 'Crack donut', dish_price: 1.29, resto: 12 },
        { dish_name: 'Classic Alpine Cheese Fondue', dish_price: 15.95, resto: 13 },
        { dish_name: 'Raclette', dish_price: 29.99, resto: 13 },
        { dish_name: 'Shrimp Fiesta', dish_price: 16.99, resto: 14 },
        { dish_name: 'Ultimate Lobster Feast', dish_price: 35.99, resto: 14 },
        { dish_name: 'Full Churrasco Experience', dish_price: 54.95, resto: 15 },
        { dish_name: 'Extra Grilled Pineapple', dish_price: 2.99, resto: 15 },
        { dish_name: '12-Piece Chicken Meal', dish_price: 29.99, resto: 16 },
        { dish_name: 'Famous Bowl', dish_price: 5.99, resto: 16 },
        { dish_name: 'Half Chicken', dish_price: 13.95, resto: 17 },
        { dish_name: 'Espetada', dish_price: 17.95, resto: 17 },
        { dish_name: 'Spicy Peanut Noodles', dish_price: 8.10, resto: 18 }, // extra dishes added to 18 - test
        { dish_name: 'Add Chicken', dish_price: 2.99, resto: 18 },
        { dish_name: 'Add Beef', dish_price: 2.99, resto: 18 },
        { dish_name: 'Add Shrimp', dish_price: 2.99, resto: 18 },
        { dish_name: 'Tonkotsu Ramen', dish_price: 11.95, resto: 19 },
        { dish_name: 'Spicy Tuna Rice Bowl', dish_price: 8.50, resto: 19 },
        { dish_name: 'Nashville Hot Chicken', dish_price: 17.75, resto: 20 },
        { dish_name: 'The Ultimate Bacon Cheeseburger', dish_price: 13.45, resto: 20 },
        { dish_name: 'Yellowtail Sashimi with Jalapeño', dish_price: 21.00, resto: 21 },
        { dish_name: 'Cuke Nigri', dish_price: 9.00, resto: 21 }
];

const seedDish = () => Dish.bulkCreate(DishData);

module.exports = seedDish;


// TO DO:
        // foreign key assoc between dish id and resto id exists, just need to make sure dishes know which resto id they belong to. DONE
        // ADD DISH IMAGES as:   ... might alternatively want to just add same img to all so its less ugly
                // dish_img: {
                //   type: DataTypes.STRING,
                //   allowNull: false
                // }
        // CHECK IN SQL SHELL TO MAKE SURE DISHES HAVE DISH IDS ASSOC WITH RESTO: RestoId column still says NULL. Not affecting app performance. Look into this as flex goal.