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
        const newUser = await User.create({ name: req.body.name, password: req.body.password });
        // return new user as JSON obj
        res.status(201).json(newUser);
        // then block to create session keys for req.session after the above works
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Server error: cannot create user' });
    }
});

// POST route to login user
router.post('/api/login', async (req, res) => {
    const { email, password } = req.body;
    // find user with matching email and password
    const user = await User.findOne({ where: { email, password } });
    if (!user) {
    // if no user exists in db, redirect to signup pg
    res.redirect('signup');
    } else {
        // store userId in session, return user obj as JSON data
    req.session.userId = user.id;
    res,json(user);
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