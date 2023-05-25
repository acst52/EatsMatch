const router = require('express').Router();
const { Dish, Cart } = require('../models');
const withAuth = require('../utils/auth');

// 5. POST /cart/:id --> this route should handle form subission from menu pg & add selected itrm to user's cart. in this route, use session or cookies to store the user's cart data and redirect user to their cart pg. make sure user auth to be able to add to cart. if user not, redir to login/signup pg

// THE NEXT SHOULD BE AN API ROUTE ***
router.post('/cart/add', withAuth, async (req, res) => {
    const { dish_id } = req.body;
    try {
        const dish = await Dish.findByPk(dish_id);
        const addToCart = await Cart.create({
            dish_name: dish.dish_name,
            dish_price: dish.dish_price,
            // user_id: req.session.user_id,
            quantity: 1 // default quant to addToCart is 1
        });

        // return updated cart item as JSON
        return res.status(200).json({ addToCart });
    } catch (error) {
        res.status(500).json({ error: 'Server error - unable to add to cart' });
    }
});

// 6. GET /cart --> this route should handle the user's cart pg which displays the items in their cart and allows them to edit or remove items. retrieve cart data from session or cookies and render the cart template using handlebars. template should display food item name, resto name, quantity, total price for ea item. incl button for checkout. ..... automatically select lowest price delivery service

router.get('/cart', withAuth, async (req, res) => {
	try {
		// round up all the cart items
		const cartTotal = await Cart.findAll({
			where: { user_id: req.session.user_id },
			include: [Dish],
		});
		// calc total price by using reduce() method to sum quantity*price of ea cart item
		const totalPrice = cartTotal.reduce((acc, item) => {
			return acc + item.quantity * item.Dish.dish_price;
		}, 0);
		// render the cart page template
		res.render(
			'cart',
			{ loggedIn: res.session.logged_in },
			{
				title: 'Cart',
				cartTotal,
				totalPrice,
			}
		);
	} catch (error) {
		res.status(500).send('Cannot load your cart. Server error.');
	}
});

module.exports = router;
