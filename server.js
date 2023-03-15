// Set up Express.js server w session support and db synch using Sequelize ORM; middleware to handle JSON, URL-encoded date & static file serving

// import necessary modules
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
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// add routed mod to server middleware
app.use(routes);

// start server & sync db connection
app.listen(PORT, () => {
  console.log('Server now listening');
  sequelize.sync({ force: false })
});