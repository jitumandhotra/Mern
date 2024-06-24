const express = require('express');
const router = express.Router();
console
router.get('/', (req, res) => {
    res.clearCookie('token'); 
    res.redirect('/login'); 
});

module.exports = router;
