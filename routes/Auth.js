const express = require('express');
const User = require('../models/userLogin');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const router = express.Router();


router.post('/authenticate', async (req, res) => {
    const { username, password } = req.body;
    const isAdmin = req.headers.admin; // true (or) false value set for the user at the header.

    const user = await User.findOne({ username: username })
    if (!user) {
        res.status(401).json({ message: 'Invalid User - Authentication failed' });
    } else {
        if (bcrypt.compareSync(password, user.phone)) 
        // if (password == user.phone) //condition used before implementing encryption in create user
            {
            // const token = jwt.sign({ username, role: 'user' }, "hello-world", { expiresIn: '1h' });
            const token = jwt.sign({ username, role: (isAdmin) ? 'admin' : 'user' }, (isAdmin) ? 'dev-admin' : 'hello-world', { expiresIn: '1h' });
            res.json({ token });
        } else {
            res.status(401).json({ message: 'Wrong Password - User Authentication failed' });
        }
    }
});

module.exports = router;