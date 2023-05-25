// import models
const Cart = require('./Cart');
const CartItem = require('./CartItem');
const DeliveryService = require('./DeliveryService');
const Dish = require('./Dish');
const Order = require('./Order');
const Resto = require('./Resto');
const User = require('./User');

// User has many orders, an order belongs to one user
User.hasMany(Order, { foreignKey: 'userId', onDelete: 'CASCADE' });
Order.belongsTo(User, { foreignKey: 'userId' });

// Resto has many dishes, and dish belongs to one resto
Resto.hasMany(Dish, { foreignKey: 'restoID' }); // restoID is NULL in dishes table *****
Dish.belongsTo(Resto, { foreignKey: 'restoID' });

// A Cart has many Dishes & vice versa, through cart_items
Cart.belongsToMany(Dish, { through: CartItem });
Dish.belongsToMany(Cart, { through: CartItem });

// new model CartItem assoc:
Cart.hasMany(CartItem, { foreignKey: 'cart_id' });
Dish.hasMany(CartItem, { foreignKey: 'dish_id' });
CartItem.belongsTo(Cart, { foreignKey: 'cart_id' });
CartItem.belongsTo(Dish, { foreignKey: 'dish_id' });

// A User can have many Carts, but a cart belongs to 1 user
User.hasMany(Cart, { foreignKey: 'userId' });
Cart.belongsTo(User, { foreignKey: 'userId' });

// An Order is assoc with a DeliveryService, but DeliveryService has many Orders
Order.belongsTo(DeliveryService, { foreignKey: 'deliveryServiceId' });
DeliveryService.hasMany(Order, { foreignKey: 'deliveryServiceId' });

// TODO: add association between DeliveryService and Resto
Resto.hasMany(DeliveryService, { foreignKey: 'restoId' });
DeliveryService.belongsTo(Resto, { foreignKey: 'restoId' });

// An Order can have many carts, but a cart belongs to an Order
Order.hasMany(Cart, { foreignKey: 'orderId' });
Cart.belongsTo(Order, { foreignKey: 'orderId' });

// An Order has many dishes & vice versa, through order_items
Order.belongsToMany(Dish, { through: 'order_items' });
Dish.belongsToMany(Order, { through: 'order_items' });

module.exports = { Cart, CartItem, DeliveryService, Dish, Order, Resto, User };
