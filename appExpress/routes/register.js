const express = require('express');
const router = express.Router();
const User = require('../models/User');
const countries = require('../utils/country');
const bcrypt = require('bcryptjs');
router.get('/', (req, res) => {
    res.render('register', { countries: countries });
});

router.post('/', async (req, res) => {
    const requiredFields = ['fname', 'lname', 'email', 'Locality', 'address', 'State', 'Zip', 'dob', 'phone', 'password', 'cnf-password', 'Country', 'cod', 'sex'];
    for (const field of requiredFields) {
        if (!req.body[field]) {
            return res.status(400).send(`Error: ${field} is required`);
        }
    }
    try {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);
        const newUser = new User({
            firstName: req.body.fname,
            lastName: req.body.lname,
            email: req.body.email,
            locality: req.body.Locality,
            address: req.body.address,
            state: req.body.State,
            zip: req.body.Zip,
            country: req.body.Country,
            dob: req.body.dob,
            gender: req.body.sex,
            countryCode: req.body.cod,
            phone: req.body.phone,
            password: hashedPassword,
            termsAndConditions: req.body.chb === 'on'
        });
        const savedUser = await newUser.save();
        res.redirect('/login');
    } catch (error) {
        console.error('Error:', error);
        res.status(500).send('Error registering user');
    }
});



module.exports = router;