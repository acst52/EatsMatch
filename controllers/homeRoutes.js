const router = require('express').Router();
const { User, Dish, Resto, DeliveryService } = require('../models/');
const withAuth = require('../utils/auth');

// Routes to add to homepage:
    // 1. GET --> render homepage template using handlebars, incl search form for users to enter food item or resto name queries

router.get('/', (req, res) => {
    res.render('home', { title: 'EatsMatch' });
});

// Handle dish searches
router.get('/search/dish', async (req, res) => {
    const { dish_name } = req.query;

    // get dishes by name from db
    const results = await Dish.findAll({
        where: { dish_name: dish_name }
    });

    // render search results template with dishDetails partial cards
    res.render('search', {
        title: 'Search Results',
        searchType: 'dish',
        results: results.map(dish => ({
            id: dish.id,
            name: dish.dish_name,
            image: dish.dish_img,
            description: dish.description,
            price: dish.price,
            resto: {
                id: dish.Resto.id,
                name: dish.Resto.resto_name
            }
        }))
    });
});

// Handle resto searches
router.get('search/resto', async (req, res) => {
    const { resto_name } = req.query;
    const results = await Resto.findAll({
        where: { resto_name: resto_name }
    });
    // render search results template with restoDetails partial cards
    res.render('search', {
        title: 'Search Results',
        searchType: 'resto',
        results: results.map(resto => ({
            id: resto.id,
            name: resto.resto_name,
            image: resto.resto_img,
            dishes: resto.Dishes.map(dish => ({
                name: dish.dish_name,
                image: dish.dish_image,
                price: dish.price
            }))
        }))
    });
});


// GET /restaurant/:id --> when you click on individ resto, goes to resto page, then if it has an assoc with uber eats, doordash or both, it will show the dishes with prices. *** IF ASSOC EXISTS, SHOW COUPONS/PROMOS OF SAID DELIVERY SERVICE ***
// icon in page when searching for ubereats versus doordash or both

router.get('/restaurant/:id', async (req, res) => {
    try {
        // find the resto by id
        const resto = await Resto.findByPk(req.params.id);
        // find all dishes for this resto
        const dishes = await Dish.findAll({
            where: { resto_id: resto.id }
        });
        // render restaurant page template with the dishes
        res.render('resto', {
            title: resto.name,
            resto,
            dishes
        });
    } catch (error) {
        res.status(500).send('Error loading restaurant. Check back later!')
    }
})


    // 2. POST --> handle form submission from homepage and redirect user to search results page with query parameters. Validate user input & sanitize user data before using it to query db or retrieve data from JSON files. ** store user's search history in session or cookies ffr?

    // 4. GET /menu/:id --> route to handle menu pg, which displays details of food item / resto menu based on id param in URL. Retrieve food item details from db or JSON files and render the menu template using handlebars. template should display food item name, description, image, price. include button for the user to add the item to their cart.

    // 5. POST /cart/:id --> this route should handle form subission from menu pg & add selected itrm to user's cart. in this route, use session or cookies to store the user's cart data and redirect user to their cart pg. make sure user auth to be able to add to cart. if user not, redir to login/signup pg

router.post('/cart/add', withAuth, async (req, res) => {
    const { dish_id } = req.body;
    try {
        const dish = await Dish.findByPk(dish_id);
        const addToCart = await Cart.create({
            dish_id: dish.id,
            user_id: req.session.user_id,
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
            include: [Dish]
        });
        // calc total price by using reduce() method to sum quantity*price of ea cart item
        const totalPrice = cartTotal.reduce((acc, item) => {
            return acc + item.quantity * item.Dish.price;
        }, 0);
        // render the cart page template
        res.render('cart', {
            title: 'Cart',
            cartTotal,
            totalPrice
        });
    } catch (error) {
        res.status(500).send('Cannot load your cart. Server error.');
    }
});



// POST /checkout route, using Stripe......

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

router.post('/checkout', async (req, res) => {
  const { cartItems, totalPrice } = req.body;

  try {
    // Create a new Stripe Checkout Session using checkout.sessions.create method
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: cartItems.map(item => {
        return {
          price_data: {
            currency: 'usd',
            product_data: {
              name: item.Dish.name
            },
            unit_amount: item.Dish.price * 100 // Convert to cents
          },
          quantity: item.quantity
        };
      }),
      mode: 'payment',
      success_url: `${req.protocol}://${req.get('host')}/checkout/success`,
      cancel_url: `${req.protocol}://${req.get('host')}/checkout/cancel`
    });

    // Redirect the user to the Stripe Checkout page
    res.redirect(303, session.url);
  } catch (error) {
    console.log(error);
    res.status(500).send('Server error');
  }
});

router.get('/checkout/success', async (req, res) => {
    // Render the checkout success page
    res.render('checkout-success', {
      title: 'Checkout Success'
    });
});
  
router.get('/checkout/cancel', async (req, res) => {
    // Render the checkout cancel page
    res.render('checkout-cancel', {
      title: 'Checkout Cancel'
    });
});


module.exports = router;