// DO NOT JUDGE - IN PROGRESSSS

const router = require('express').Router();
const { Cart, Dish } = require('../../models');
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
              currency: 'cad',
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




// NOTES / STILL WORKING ON STRIPE:

// app.post("/create-checkout-session", async (req, res) => {
//   try {
//     const session = await stripe.checkout.sessions.create({
//       // 1. type of payment accepted:
//       payment_method_types: ['card'],
//       mode: 'payment',
//       // 2. add cart items:
//       line_items: req.body.items.map(item => {
//         // return new item that is formatted in the way Stripe wants:
//         const storeItem = storeItems.get(item.id)
//         return {
//           price_data: {
//             currency: 'cad',
//             product_data: {
//               name: storeItem.name
//             },
//             unit_amount: storeItem.priceInCents // price in cents
//           },
//           quantity: item.quantity
//         }
//       }),
//       // 3. where to send user on payment success
//       success_url: `${process.env.SERVER_URL}/success.html`,
//       // 4. where to send user on failure: can be back to cart
//       cancel_url: `${process.env.SERVER_URL}/cancel.html`
//       // 5. populate SERVER_URL in .env
//     })
//     res.json({ url: session.url })
//   } catch (error) {
//     res.status(500).json({ error: error.message })
//   }
// })