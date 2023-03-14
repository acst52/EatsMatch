const router = require('express').Router();
const { Dish, Resto } = require('../models');

// TODO: CHANGE DISH SEARCH ROUTE TO TAG SEARCH ROUTE

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

module.exports = router;