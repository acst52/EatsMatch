const router = require('express').Router();

// Import route files
const homeRoutes = require('./homeRoutes');
const searchRoutes = require('./searchRoutes');
const restoRoutes = require('./restoRoutes');
const cartRoutes = require('./cartRoutes');
// const checkoutRoutes = require('./checkoutRoutes');

router.use('/', homeRoutes);
router.use('/search', searchRoutes);
router.use('/resto', restoRoutes);
router.use('/cart', cartRoutes);
// router.use('/checkout', checkoutRoutes);

module.exports = router;