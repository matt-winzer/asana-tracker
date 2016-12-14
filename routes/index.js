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

router.get('/new', function(req, res) {
  res.render('new');
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
    .first()
    .then((asana) => {
      console.log(asana);
      res.render('asana_by_id', {
        name: asana.name,
        primary_target: asana.primary_target,
        duration: asana.duration,
        difficulty: asana.difficulty
      });
    });

});


module.exports = router;
