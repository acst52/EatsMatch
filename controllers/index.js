const router = require('express').Router();

const apiRoutes = require('./api/');
const homeRoutes = require('./homeRoutes');
const dashboardRoutes = require('./dashboardRoutes');

router.use('/', homeRoutes);
router.use('/dashboard', dashboardRoutes);
router.use('/api', apiRoutes);

module.exports = router;


// if user clicks button that has indian tag or if they search for indian, same route

// or like there are cards (partials) that are randomly generated on the main view so the main view isnt boring and it offers suggestions to users who are uncertain or dont know what to search for. 

// 