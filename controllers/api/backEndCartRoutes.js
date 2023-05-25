const router = require('express').Router();
const { Dish, Cart } = require('../../models');
const withAuth = require('../../utils/auth');

// 5. POST /cart/:id --> this route should handle form submission from menu pg & add selected item to user's cart. in this route, use session or cookies to store the user's cart data and redirect user to their cart pg. make sure user auth to be able to add to cart. if user not, redir to login/signup pg

router.post('/cart/add', withAuth, async (req, res) => {
	try {
		// Check if the dish is already in the cart
		let cartItem = await Cart.findOne({
			where: { id: req.body.dish_id },
		});

		if (cartItem) {
			// inc quantity if dish is already in the cart
			cartItem.quantity += 1;
			await cartItem.save();
		} else {
			// create a cart & add cartItem to it:
			cartItem = await Cart.create({
				user_id: req.session.user_id,
				dish_id: req.body.dish_id,
				quantity: 1,
			});
		}

		res.status(200).send('Added to cart');
	} catch (error) {
		res.status(500).send('Cannot add to cart. Try again later!');
	}
});

module.exports = router;
