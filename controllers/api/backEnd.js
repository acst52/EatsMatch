// anything thats rendering a page is a front end route. anything thats doing something on backend only with data is an api route
// userRoutes.js in api: create a user, login and logout a user in api dur - post to create user, post to login user (finds user checks password, creates session), log out that destroys session
// 

const router = require('express').Router();
const User = require('../../models/User');

// POST route to create new User
    // async/await handles the asynchronous calls to the db
router.post('/api/users', async (req, res) => {
    try {
        // get user data from request body
        const { name, email, password } = req.body;
        const user = await User.create({ name, email, password });
        // return new user as JSON obj
        res.status(201).json(user);
    } catch (error) {
        console.error(error);
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
router.post('/api/logout', (req, res) => {
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