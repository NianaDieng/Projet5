var express = require('express');
var router = express.Router();

/* GET details page. */
router.get('/', function(req, res, next) {
  res.render('detailsArticles', { title: 'Details' });
});

module.exports = router;