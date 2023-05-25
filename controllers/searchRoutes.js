const router = require('express').Router();
const { Dish, Resto } = require('../models');

// // Handle dish searches
// router.get('/search/dish', async (req, res) => {
//     const { dish_name } = req.query;

//     // get dishes by name from db
//     const results = await Dish.findAll({
//         where: { dish_name: dish_name }
//     });

//     // render search results template with dishDetails partial cards
//     res.render('search', {
//         title: 'Search Results',
//         searchType: 'dish',
//         results: results.map(dish => ({
//             id: dish.id,
//             name: dish.dish_name,
//             image: dish.dish_img,
//             description: dish.description,
//             price: dish.price,
//             resto: {
//                 id: dish.Resto.id,
//                 name: dish.Resto.resto_name
//             }
//         }))
//     });
// });

// // Handle resto searches
// router.get('/search/resto', async (req, res) => {
//     const { resto_name } = req.query;
//     const results = await Resto.findAll({
//         where: { resto_name: resto_name }
//     });
//     // render search results template with restoDetails partial cards
//     res.render('search', {
//         title: 'Search Results',
//         searchType: 'resto',
//         results: results.map(resto => ({
//             id: resto.id,
//             name: resto.resto_name,
//             image: resto.resto_img,
//             dishes: resto.Dishes.map(dish => ({
//                 name: dish.dish_name,
//                 image: dish.dish_image,
//                 price: dish.price
//             }))
//         }))
//     });
// });

// TEST: COMBINING ABOVE INTO A SINGLE `/search` ROUTE:
router.get('/search', async (req, res) => {
	const { dish_name, resto_name } = req.query;

	if (dish_name) {
		// then get dishes by name from db
		const results = await Dish.findAll({
			where: { dish_name: dish_name },
		});

		// then render search results w dishDetails partial cards
		res.render('search', {
			title: 'Search Results',
			searchType: 'dish',
			results: results.map((dish) => ({
				name: dish.dish_name,
				price: dish.price,
				resto: {
					id: dish.Resto.id,
					name: dish.Resto.resto_name,
				},
			})),
		});
	} else if (resto_name) {
		// to get restos by name from db,
		const results = await Resto.findAll({
			where: { resto_name: resto_name },
		});
		// render search results w restoDetails partial cards
		res.render('search', {
			title: 'Search Results',
			searchType: 'resto',
			results: results.map((resto) => ({
				name: resto.resto_name,
				image: resto.resto_img,
				dishes: resto.Dishes.map((dish) => ({
					name: dish.dish_name,
					price: dish.price,
				})),
			})),
		});
	} else {
		// render search pg with dropdown options
		// fetch all restos from db
		const restos = await Resto.findAll();
		// fetch all dishes from db
		const dishes = await Dish.findAll();
		// renders search template and passes an obj w 2 properties, restos and dishes, to the template
		res.render('search', {
			restos: restos.map((resto) => resto.toJSON()), // map over restos array and convert ea resto into plain js, so the data can be used in the template
			dishes: dishes.map((dish) => dish.toJSON()),
		});
	}
});

module.exports = router;
