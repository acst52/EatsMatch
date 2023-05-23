const router = require('express').Router();
const { Dish, Cart } = require('../../models');
const withAuth = require('../../utils/auth');

// 5. POST /cart/:id --> this route should handle form subission from menu pg & add selected itrm to user's cart. in this route, use session or cookies to store the user's cart data and redirect user to their cart pg. make sure user auth to be able to add to cart. if user not, redir to login/signup pg

// // OLD ROUTE:

// router.post('/cart/add/:id', withAuth, async (req, res) => {
// 	const { dish_id } = req.body;
// 	try {
// 		const dish = await Dish.findByPk(dish_id);
// 		const addToCart = await Cart.create({
// 			dish_name: dish.dish_name,
// 			dish_price: dish.dish_price,
// 			// user_id: req.session.user_id,
// 			// quantity: 1 // default quant to addToCart is 1
// 		});

// 		// return updated cart item as JSON
// 		return res.status(200).json({ addToCart });
// 	} catch (error) {
// 		res.status(500).json({ error: 'Server error - unable to add to cart' });
// 	}
// });

// NEW ROUTE USING DISH_ID, NOT DISHNAME. also removed /api from url

router.post('/cart/add', withAuth, async (req, res) => {
	try {
		// Check if the dish is already in the cart
		let cartItem = await Cart.findOne({
			where: { user_id: req.session.user_id, dish_id: req.body.dish_id },
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
		console.error(error);
		res.status(500).send('Cannot add to cart. Try again later!');
	}
});

module.exports = router;
