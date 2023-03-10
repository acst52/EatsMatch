const router = require('express').Router();
const userRoutes = require('./userRoutes');
const orderRoutes = require('./orderRoutes');
const stripeRoute = require('./stripeRoute');

router.use('/users', userRoutes);

router.use('/orders', orderRoutes)

router.use('/payment', paymentRoutes);

module.exports = router;