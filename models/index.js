// import models
const Dish = require('./Dish');
const Promo = require('./Promo');
const Resto = require('./Resto');
const Tag = require('./Tag');
const User = require('./User');

// User has many orders, an order belongs to one user
User.hasMany(Order, { foreignKey: 'userId', onDelete: 'CASCADE' });
Order.belongsTo(User, { foreignKey: 'userId' });

// Resto has many dishes, and dish belongs to one resto
Resto.hasMany(Dish, { foreignKey: 'restoID' });
Dish.belongsTo(Resto, { foreignKey: 'restoID' });

// Resto has many tags, and a tag belongs to many restos...
Resto.belongsToMany(Tag, { through: 'resto_tags', foreignKey: 'restoID' });
Tag.belongsToMany(Resto, { through: 'resto_tags', foreignKey: 'tagId' });

// Dish has many tags, and a tag belongs to many dishes...
Dish.belongsToMany(Tag, { through: 'dish_tags', foreignKey: 'dishId' });
Tag.belongsToMany(Dish, { through: 'dish_tags', foreignKey: 'tagId' });

// Resto has many promos, and a promo belongs to one resto:
Resto.hasMany(Promo, { foreignKey: 'restoId' });
Promo.belongsTo(Resto, { foreignKey: 'restoId' });

module.exports = { Dish, Promo, Resto, Tag, User };



// ***** HELP ***** 
    // Do I need to define an OrderDishes?! Feels like there's a missing association..

// Order belongs to lots of stuff...
Order.belongsTo(User);
Order.belongsTo(Restaurant);

const OrderDish = sequelize.define('order_dishes', {});

Order.belongsToMany(Dish, { through: OrderDish });
Dish.belongsToMany(Order, { through: OrderDish });


module.exports = { Dish, Promo, Resto, Tag, User, OrderDish };