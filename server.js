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
const storeItems = new Map([[
  1, { priceInCents: 10000, name: 'ITEM1'}],
  [2, { priceInCents: 20000, name: 'ITEM2'}],
])

// add routed mod to server middleware
app.use(routes);

// start server & sync db connection
app.listen(PORT, () => {
    console.log('Server now listening');
    sequelize.sync({ force: false })
});

// dish.findAll ... where, deliveryService is doordash, uber eats, map through that to create array. done by accessing whats in the db. set up to access everything in the db for when more items are added or changed
