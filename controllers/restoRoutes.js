const router = require('express').Router();
const { Dish, Resto } = require('../models');

// GET /restaurant/:id --> when you click on individ resto, goes to resto page, then if it has an assoc with uber eats, doordash or both, it will show the dishes with prices. *** IF ASSOC EXISTS, SHOW COUPONS/PROMOS OF SAID DELIVERY SERVICE ***
// icon in page when searching for ubereats versus doordash or both

router.get('/resto/:id', async (req, res) => {
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
});

// GET /dish/:id --> render restaurant page when user clicks on a dish they searched for

router.get('/dish/:id', async (req, res) => {
    try {
        // find the dish clicked by id
        const dish = await Dish.findOne({
            where: { id: req.params.id },
            include: [Resto]
        });
        // redirect user to the corresponding resaurant pg
        res.redirect(`/resto/${dish.Resto.id}`);
    } catch (err) {
        res.status(500).send('error loading restaurant. Check back later!')
    }
});

module.exports = router;