const router = require('express').Router();

//homepage (later will be search page)
router.get('/', (req, res) => {
    res.render('dashboard');
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
    res.render('cart');
});


module.exports = router;