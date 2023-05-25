const router = require('express').Router();
const { Resto } = require('../models/Resto');
const Sequelize = require('sequelize');

//homepage (later will be search page)
router.get('/', (req, res) => {
	res.render('search', { logged_in: req.session.logged_in });
});

// login route
router.get('/login', (req, res) => {
	if (req.session.logged_in) {
		res.redirect('/');
		return;
	}
	// if logged in --> homepage, else --> login view
	res.render('login');
});

// signup route
router.get('/signup', (req, res) => {
	if (req.session.logged_in) {
		res.redirect('/');
		return;
	}
	// if logged in --> homepage, else --> signup view
	res.render('signup');
});

// cart route
router.get('/cart', (req, res) => {
	res.render('cart', { logged_in: req.session.logged_in });
});

// GET restaurants to populate homepage - say 4 random ones?
router.get('/restoCard', async (req, res) => {
	try {
		const restos = await Resto.findAll({
			order: Sequelize.literal('rand()'),
			limit: 4,
		});

		res.json(restos);
	} catch (error) {
		console.error(error);
		res.status(500).json({ message: 'server error rendering restos' });
	}
});

module.exports = router;
