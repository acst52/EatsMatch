// import models
const Cart = require('./Cart');
const DeliveryService = require('./DeliveryService');
const Dish = require('./Dish');
const Order = require('./Order');
const Resto = require('./Resto');
const User = require('./User');
const OrderItem = require('./OrderItem');

// User has many orders, an order belongs to one user
User.hasMany(Order, { foreignKey: 'userId', onDelete: 'CASCADE' });
Order.belongsTo(User, { foreignKey: 'userId' });

// Resto has many dishes, and dish belongs to one resto
Resto.hasMany(Dish, { foreignKey: 'restoID' }); // restoID is NULL in dishes table *****
Dish.belongsTo(Resto, { foreignKey: 'restoID' });

// Dish can be in multiple carts, but cart belongs to one dish...???
Dish.hasMany(Cart, { foreignKey: 'dish_id', onDelete: 'CASCADE' });
Cart.belongsTo(Dish, { foreignKey: 'dish_id' });

// A User can have many Carts, but a cart belongs to 1 user
User.hasMany(Cart, { foreignKey: 'user_id' });
Cart.belongsTo(User, { foreignKey: 'user_id' });

// An Order is assoc with a DeliveryService, but DeliveryService has many Orders
Order.belongsTo(DeliveryService, { foreignKey: 'deliveryServiceId' });
DeliveryService.hasMany(Order, { foreignKey: 'deliveryServiceId' });

// TODO: add association between DeliveryService and Resto
Resto.hasMany(DeliveryService, { foreignKey: 'resto_id' });
DeliveryService.belongsTo(Resto, { foreignKey: 'resto_id' });

// An Order can have many carts, but a cart belongs to an Order
Order.hasMany(Cart, { foreignKey: 'order_id' });
Cart.belongsTo(Order, { foreignKey: 'order_id' });

// An Order has many dishes & vice versa, through order_items
Order.belongsToMany(Dish, { through: OrderItem });
Dish.belongsToMany(Order, { through: OrderItem });

module.exports = { Cart, DeliveryService, Dish, Order, Resto, User, OrderItem };