// DO NOT JUDGE - IN PROGRESSSS

const router = require('express').Router();
const { Cart, Dish } = require('../models');
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
