const router = require('express').Router();

router.get('/', (req, res) => {
    res.render('home', { title: 'EatsMatch' });
});

module.exports = router;