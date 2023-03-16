const router = require('express').Router();

// Import route files
const homeRoutes = require('./homeRoutes');
const apiRoutes = require('./api')
const searchRoutes = require('./searchRoutes');
const restoRoutes = require('./restoRoutes');
const cartRoutes = require('./cartRoutes');
// const checkoutRoutes = require('./checkoutRoutes');

router.use('/api', apiRoutes);
router.use('/', homeRoutes);
router.use('/search', searchRoutes);
router.use('/resto', restoRoutes);
router.use('/cart', cartRoutes);
// router.use('/checkout', checkoutRoutes);

module.exports = router;