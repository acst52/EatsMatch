const router = require('express').Router();

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
  
module.exports = router;