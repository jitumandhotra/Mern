const express = require('express');
const router = express.Router();
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


router.get('/', (req, res) => {
    res.render('login');
});

router.post('/', async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.render('login', { notify : { type:'alert-danger', message : 'No User With This Email.'} } );
        }
        const validPassword = await bcrypt.compare(password, user.password);
        if (!validPassword) {
            return res.render('login', { notify : { type:'alert-danger', message : 'Password Do Not Match.'} } );
        }
        const token = jwt.sign({ userId: user._id ,user:user }, process.env.JWT_SECRET);
        res.cookie('auth', token, { httpOnly: true, expires: new Date(Date.now() + 3600000)  });
        res.redirect('/');
    } catch (error) {
        console.error('Error:', error);
        res.status(500).send('Error logging in');
    }
});

module.exports = router;