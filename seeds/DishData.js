const { Dish } = require('../models')

const DishData = [
        { dish_name: 'The Priest Burger', dish_price: 8.99, resto: 1 },
        { dish_name: 'The Option Burger', dish_price: 10.99, resto: 1 },
        { dish_name: 'Margherita Pizza', dish_price: 12.99, resto: 2 },
        { dish_name: 'Fennel Sausage Pizza', dish_price: 14.99, resto: 2 },
        { dish_name: 'Original Cheesecake', dish_price: 7.99, resto: 3 },
        { dish_name: 'Chocolate Chip Cookie Dough Cheesecake', dish_price: 9.99, resto: 3 },
        { dish_name: 'Salmon Nigiri', dish_price: 2.25, resto: 4 },
        { dish_name: 'Tuna Roll', dish_price: 4.50, resto: 4 },
        { dish_name: 'Filet Mignon', dish_price: 45.00, resto: 5 },
        { dish_name: 'Lobster Mac & Cheese', dish_price: 28.00, resto: 5 },
        { dish_name: 'Mongolian Beef', dish_price: 18.50, resto: 6 },
        { dish_name: 'Kung Pao Chicken', dish_price: 15.99, resto: 6 },
        { dish_name: 'Chicken and Gyro Combo', dish_price: 10.99, resto: 7 },
        { dish_name: 'Falafel Sandwich', dish_price: 7.99, resto: 7 },
        { dish_name: 'Classic TGIF Cheeseburger', dish_price: 13.49, resto: 8 },
        { dish_name: 'Dragon-Glazed Salmon', dish_price: 19.99, resto: 8 },
        { dish_name: 'Bacon Cheeseburger', dish_price: 8.99, resto: 9 },
        { dish_name: 'Cajun Fries', dish_price: 4.19, resto: 9 },
        { dish_name: 'Build Your Own Personal Pizza', dish_price: 8.95, resto: 10 },
        { dish_name: 'Caesar Salad', dish_price: 7.00, resto: 10 },
        { dish_name: 'Chicken Burrito Bowl', dish_price: 8.25, resto: 11 },
        { dish_name: 'Veggie Quesadilla', dish_price: 7.45, resto: 11 },
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