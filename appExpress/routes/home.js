var express = require('express');
var router = express.Router();
const verifyToken = require('./authMiddleware');

router.get('/', verifyToken, function(req, res, next) {
  res.render('home', { title: 'home' });
});

module.exports = router;