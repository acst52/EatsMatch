const router = require('express').Router();
const { Resto, Dish } = require('../../models');

// Get all restos
router.get('/api/restos', async (req, res) => {
    const restos = await Resto.findAll();
    res.json(restos.map((resto) => resto.toJSON()));
});

// Get resto data to render on localhost:3001/api/resto
router.get('/resto', async (req, res) => {
    try {
        const restos = await Resto.findAll();
        res.json(restos);
    } catch (error) {
        res.status(500).json(error);
    }
});
  
// Get all dishes
router.get('/api/dishes', async (req, res) => {
    const dishes = await Dish.findAll();
    res.json(dishes.map((dish) => dish.toJSON()));
});

// Get dish data to render on localhost:3001/api/dish
router.get('/dish', async (req, res) => {
    try {
        const dishes = await Dish.findAll();
        res.json(dishes);
    } catch (error) {
        res.status(500).json(error);
    }
});

module.exports = router;