const router = require('express').Router();
const { User, Dish, Resto, DeliveryService } = require('../models/');
const { body, validationResult } = require('express-validator');


// Routes to add to homepage:
    // 1. GET --> render homepage template using handlebars, incl search form for users to enter food item or resto name queries

router.get('/', (req, res) => {
    res.render('home', { title: 'EatsMatch' });
});

// Handle dish searches
router.get()

// Handle resto searches



    // 2. POST --> handle form submission from homepage and redirect user to search results page with query parameters. Validate user input & sanitize user data before using it to query db or retrieve data from JSON files. ** store user's search history in session or cookies ffr?

router.post('/', [
    // validate & sanitize user input here
    body('dish_name').isLength({ min: 1 }).trim().escape(),
    body('resto_name').isLength({ min: 1 }).trim().escape(),
], async (req, res) => {
    // get user input from the req body
    const { dish_name, resto_name } = req.body;

    // validate user input
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        // render main template with error msg
        return res.render('main', {
            title: 'EatsMatch',
            errors: errors.array()
        });
    }

    // retrieve relevant data from db using sequelize
    const results = await Dish.findAll({
        where: {
            dish_name: {
                [Op.like]: `%${dish_name}%`
            }
        },
        include: [{
            model: Resto,
            where: {
                resto_name: {
                    [Op.like]: `%${resto_name}%`
                }
            },
            include: [{
                model: DeliveryService
            }]
        }]
    });

    // render search results template
    res.render('search', {
        title: 'Search Results',
        dish_name,
        resto_name,
        results
    });
});

    // 3. GET /search --> handle search results pg, displaying search results based on user's query params. retrieve data from db/json & render serach results template using handlebars. display food name, resto name, prices. also include pagination or sorting options for search results.

router.get('/search', async (req, res) => {
    const { dish_name, resto_name } = req.query;
    // get relevant data from db using sequelize

})

    // 4. GET /menu/:id --> route to handle menu pg, which displays details of food item / resto menu based on id param in URL. Retrieve food item details from db or JSON files and render the menu template using handlebars. template should display food item name, description, image, price. include button for the user to add the item to their cart.



    // 5. POST /cart/:id --> this route should handle form subission from menu pg & add selected itrm to user's cart. in this route, use session or cookies to store the user's cart data and redirect user to their cart pg



    // 6. GET /cart --> this route should handle the user's cart pg which displays the items in their cart and allows them to edit or remove items. retrieve cart data from session or coookies and render the cart template using handlebars. template should display food item name, resto name, quantity, total price for ea item. incl button for checkout. ..... automatically select lowest price delivery service