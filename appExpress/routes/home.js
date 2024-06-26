var express = require('express');
var router = express.Router();
const verifyToken = require('./authMiddleware');
/* GET home page. */
router.get('/', verifyToken, function(req, res, next) {
  res.render('home', { title: 'home' });
});

module.exports = router;