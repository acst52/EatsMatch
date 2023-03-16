const router = require('express').Router();

// Import route files from api sub dir
const backEndRoutes = require('./backEndRoutes');
const checkoutRoutes = require('./checkoutRoutes')

router.use('/users', backEndRoutes);
router.use('/checkout', checkoutRoutes);

module.exports = router;