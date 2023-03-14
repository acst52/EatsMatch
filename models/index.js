// import models
const Cart = require('./Cart');
const DeliveryService = require('./DeliveryService');
const Dish = require('./Dish');
const Order = require('./Order');
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

// A Cart has many Dishes & vice versa, through cart_items
Cart.belongsToMany(Dish, { through: 'cart_items' });
Dish.belongsToMany(Cart, { through: 'cart_items' });

// A User can have many Carts, but a cart belongs to 1 user
User.hasMany(Cart, { foreignKey: 'userId' });
Cart.belongsTo(User, { foreignKey: 'userId' });

// An Order is assoc with a DeliveryService, but DeliveryService has many Orders
Order.belongsTo(DeliveryService, { foreignKey: 'deliveryServiceId' });
DeliveryService.hasMany(Order, { foreignKey: 'deliveryServiceId' });

// TODO: add association between DeliveryService and Resto
// DeliveryService.hasMany(Res)

// An Order can have many carts, but a cart belongs to an Order
Order.hasMany(Cart, { foreignKey: 'orderId' });
Cart.belongsTo(Order, { foreignKey: 'orderId' });

// An Order has many dishes & vice versa, through order_items
Order.belongsToMany(Dish, { through: 'order_items' });
Dish.belongsToMany(Order, { through: 'order_items' });

module.exports = { Cart, DeliveryService, Dish, Order, Promo, Resto, Tag, User };