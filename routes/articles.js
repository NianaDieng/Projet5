const Articlemodel = require("../config/Articlemodel");

var express = require('express');
var router = express.Router();


router.
get('/', function(req, res, next) {
  res.render('articles', { title: 'Ajouter un article' });
});

module.exports = router;