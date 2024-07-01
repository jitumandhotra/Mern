const express = require('express');
const router = express.Router();
const verifyToken = require('./authMiddleware');
router.get('/', verifyToken, (req, res) => {
    res.render('profile', { user: req.session.authUser });
});

module.exports = router;
