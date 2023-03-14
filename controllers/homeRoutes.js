const router = require('express').Router();
const withAuth = require('../utils/auth');

router.get('/', (req, res) => {
    res.render('homepage', { title: 'EatsMatch' });
});

router.get('/login', async (req, res) => {
    res.render('login');
});

router.get('/signup', async (req, res) => {
    res.render('signup');
});

router.get('/cart', async (req, res) => {
    // try {
    //     // round up all the cart items
    //     const cartTotal = await Cart.findAll({
    //         where: { user_id: req.session.user_id },
    //         include: [Dish]
    //     });
    //     // calc total price by using reduce() method to sum quantity*price of ea cart item
    //     const totalPrice = cartTotal.reduce((acc, item) => {
    //         return acc + item.quantity * item.Dish.price;
    //     }, 0);
    //     // render the cart page template
    //     res.render('cart', {
    //         title: 'Cart',
    //         cartTotal,
    //         totalPrice
    //     });
    // } catch (error) {
    //     res.status(500).send('Cannot load your cart. Server error.');
    // }
    // !! REMEMBER TO RE-INCLUDE WITHAUTH !!!

    res.render('cart');
});

module.exports = router;