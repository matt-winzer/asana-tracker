var express = require('express');
var router = express.Router();

// *** ADD knex ***
// var knex = require('../db/knex');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
