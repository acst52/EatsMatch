const router = require('express').Router();
const { Dish, Cart } = require('../../models');
const withAuth = require('../../utils/auth');

// 5. POST /cart/:id --> this route should handle form subission from menu pg & add selected itrm to user's cart. in this route, use session or cookies to store the user's cart data and redirect user to their cart pg. make sure user auth to be able to add to cart. if user not, redir to login/signup pg

router.post('/cart/add', withAuth, async (req, res) => {
    const { dish_id } = req.body;
    try {
        const dish = await Dish.findByPk(dish_id);
        const addToCart = await Cart.create({
            dish_name: dish.dish_name,
            dish_price: dish.dish_price,
            // user_id: req.session.user_id,
            // quantity: 1 // default quant to addToCart is 1
        });

        // return updated cart item as JSON
        return res.status(200).json({ addToCart });
    } catch (error) {
        res.status(500).json({ error: 'Server error - unable to add to cart' });
    }
});

module.exports = router;
