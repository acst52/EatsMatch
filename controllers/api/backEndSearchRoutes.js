const router = require('express').Router();
const { Resto, Dish } = require('../../models');

// Get all restos
router.get('/api/restos', async (req, res) => {
    const restos = await Resto.findAll();
    res.json(restos.map((resto) => resto.toJSON()));
});
  
// Get all dishes
router.get('/api/dishes', async (req, res) => {
    const dishes = await Dish.findAll();
    res.json(dishes.map((dish) => dish.toJSON()));
});

module.exports = router;