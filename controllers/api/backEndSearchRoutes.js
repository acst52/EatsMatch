const router = require('express').Router();
const { Resto, Dish } = require('../../models');

// Get all restos
router.get('/restos', async (req, res) => {
    const restos = await Resto.findAll();
    res.json(restos);
});

// Get resto data to render on localhost:3001/api/resto
router.get('/restos/:id', async (req, res) => {
    try {
        const restos = await Resto.findByPk(req.params.id);

        const resto = restos.get({ plain: true });

        res.render('resto', { resto });
    } catch (error) {
        res.status(500).json(error);
    }
});

// Get all dishes
router.get('/dishes', async (req, res) => {
    const dishes = await Dish.findAll();
    res.json(dishes.map((dish) => dish.toJSON()));
});

// Get dish data to render on localhost:3001/api/dish
router.get('/dish/:id', async (req, res) => {
    try {

        const dishes = await Dish.findAll({
            where: { resto: req.params.id }
        });

        res.json(dishes);

    } catch (error) {
        res.status(500).json(error);
    }
});

module.exports = router;
