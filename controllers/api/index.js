const router = require('express').Router();

// Import route files from api sub dir
const backEndUserRoutes = require('./backEndUserRoutes');
const backEndSearchRoutes = require('./backEndSearchRoutes');
const backEndCartRoutes = require('./backEndCartRoutes');
const checkoutRoutes = require('./checkoutRoutes');

router.use('/users', backEndUserRoutes);
router.use('/api', backEndSearchRoutes);
router.use('/cart', backEndCartRoutes);
router.use('/checkout', checkoutRoutes);

module.exports = router;
