// anything thats rendering a page is a front end route. anything thats doing something on backend only with data is an api route

const router = require('express').Router();
const User = require('../../models/User');
const withAuth = require('../../utils/auth');

// POST route to create new User
router.post('/', async (req, res) => {
    console.log(req.body);
    try {
        // get user data from request body
        // const { name, email, password } = req.body;
        const newUser = await User.create({ 
            name: req.body.name, 
            email: req.body.email, 
            password: req.body.password 
        });

        // regenerate session to create new session keys
        req.session.logged_in = true;
        req.session.user_id = newUser.id;

        // return new user as JSON obj
        res.status(201).json(newUser);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Server error: cannot create user' });
    }
});

// POST route to login user
router.post('/api/login', async (req, res) => {
    // find user with matching email and password
    const user = await User.findOne({ where: { email, password } });
    if (!user) {
    // if no user exists in db, redirect to signup pg
    res.redirect('signup');
    } else {
        // store userId in session, return user obj as JSON data
    req.session.user_id = user.id;
    res.json(user);
    }
});

// POST route for logging out a user
router.post('/api/logout', withAuth, (req, res) => {
    try {
        // destroy user session
        req.session.destroy();
        // return success msg
        res.json({ message: 'logout successful!' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Cannot log you out - server error!' });
    }
});

module.exports = router;