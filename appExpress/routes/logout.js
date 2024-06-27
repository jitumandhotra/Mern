const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.clearCookie('auth'); 
    res.redirect('/login'); 
});

module.exports = router;
