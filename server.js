// Set up Express.js server w session support and db synch using Sequelize ORM; middleware to handle JSON, URL-encoded date & static file serving

// import necessary modules
require('dotenv').config();
const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const routes = require('./controllers');
const helpers = require('./utils/helpers');

const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

// create instance of express.js server
const app = express();

// configure server to listen on the PORT env or '3001' if no PORT env specified
const PORT = process.env.PORT || 3001;

// create new instance of express handlebars mod; pass in custom helper functions tbd
const hbs = exphbs.create({ helpers });

// define sess config obj w options
const sess = {
  secret: 'your_secret_key',
  cookie: {
    maxAge: 5000000,
    httpOnly: true,
    secure: false,
    sameSite: "strict"
  },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

// add session middleware to the server
app.use(session(sess));

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// config server to use express.json(), express.urlencoded() & to serve static files from public dir
// so we can read all the JSON data that gets sent up to our server:
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// specify that all client-side code is living in public dir:
app.use(express.static(path.join(__dirname, 'public')));

// Now let's set up Stripe; 
// the following is a function so we want to pass in our Stripe Key:
const stripe = require('stripe')(process.env.STRIPE_PRIVATE_KEY);
// set up store items; new map that contains all store items as obj w key value pairs. ITEMS AS BELOW IN JSON FILE STORED IN SERVER. must store securely in server b/c you dont want user to send the price, they could hack and make it 0

// import model or copy & paste.. for loop through it & put each index into store items thing
// for loop dish_price[i]*100, same for name, loop thru dish data and then look up how to add this to Map
// const storeItems = new Map([[
//   1, { priceInCents: dish_price * 100, name: dish_name }],
// [2, { priceInCents: 20000, name: 'ITEM2' }],
// ])

// add routed mod to server middleware
app.use(routes);

const router = require('express').Router();
const { Dish, Cart } = require('./models');
// const withAuth = require('../utils/auth');

// 5. POST /cart/:id --> this route should handle form subission from menu pg & add selected itrm to user's cart. in this route, use session or cookies to store the user's cart data and redirect user to their cart pg. make sure user auth to be able to add to cart. if user not, redir to login/signup pg

app.post('/api/cart/add/:id', async (req, res) => {
try {
  const { dish_id } = req.body;
  const dish = await Dish.findByPk(dish_id);
  // use cart model to find , where dish id = id, if that var exists, then use cart.update instead of cart.create, update value (new var quantity), increment and use in update.
  // else, create instead of update
  const cart = await Cart.findOne({
    where: {
      user_id: req.session.user_id,
      dish_id: dish_id
    }
  });
      if (cart) {
          const addToCart = await Cart.update(
            { quantity: cart.quantity + 1 },
            { where: { id: cart.id } }
          );
        return res.status(200).json({ addToCart });
      } else {
        const newCart = await Cart.create({
          dish_id: dish.id,
          user_id: req.session.user_id,
          quantity: 1
      });
        return res.status(200).json({ newCart });
      }
      } catch (error) {
      res.status(500).json({ error: 'Server error - unable to add to cart' });
  }
});

// also have to change resto.handlebars so the header / resto name, so that backend can grab resto id from front end and post it
// set resto id to value so when you add to cart it grabs the resto id

// start server & sync db connection
app.listen(PORT, () => {
  console.log('Server now listening');
  sequelize.sync({ force: false })
});
