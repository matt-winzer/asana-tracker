var express = require('express');
var router = express.Router();

var knex = require('../db/knex');

/* GET home page. */
router.get('/', function(req, res, next) {
  return knex('asana')
    .then((asanas) => {
      console.log(asanas);
      res.render('index', { asanas: asanas });
    });
});

router.get('/asanas', function(req, res) {
  return knex('asana')
    .then((asanas) => {
      res.json(asanas);
    });
});


// Berto's Breakout code
router.post('/', function (req, res) {
  knex('asana')
    .insert(req.body)
    .returning('id')
    .then((id) => {
      res.redirect('/' + id);
    });
});

router.get('/:id', function (req, res) {
  knex('asana')
    .where('id', req.params.id)
    .then((asana) => {
      res.render('asana_by_id', {title: asana.name});
    });

});


module.exports = router;
