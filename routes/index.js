var express = require('express');
var router = express.Router();

var knex = require('../db/knex');

/* GET home page. */
router.get('/', function(req, res, next) {
  return knex('asana')
    .then((asanas) => {
      res.render('index', { asanas: asanas });
    });
});

router.get('/asanas', function(req, res) {
  return knex('asana')
    .then((asanas) => {
      res.json(asanas);
    });
});

// GET create new resource page
router.get('/new', function(req, res) {
  res.render('new');
});

// GET edit resource page
router.get('/:id/edit', function(req, res) {
  knex('asana')
    .where('id', req.params.id)
    .first()
    .then((asana) => {
      res.render('edit', {
        id: asana.id,
        name: asana.name,
        primary_target: asana.primary_target,
        duration: asana.duration,
        difficulty: asana.difficulty
      });
    });
});

// POST new resource
router.post('/', function (req, res) {
  knex('asana')
    .insert(req.body)
    .returning('id')
    .then((id) => {
      res.redirect('/' + id);
    });
});

// GET single resource
router.get('/:id', function (req, res) {
  knex('asana')
    .where('id', req.params.id)
    .first()
    .then((asana) => {
      res.render('asana_by_id', {
        id: asana.id,
        name: asana.name,
        primary_target: asana.primary_target,
        duration: asana.duration,
        difficulty: asana.difficulty
      });
    });
});

// DELETE route
router.delete('/:id', (req, res) => {
  let id = req.params.id;
  knex('asana')
    .where('id', id)
    .del()
    .then((result) => {
      res.redirect('/');
    });
});

// PUT route
router.put('/:id/edit', (req, res) => {
  let id = req.params.id;
  let edit = req.body;
  knex('asana')
    .where('id', id)
    .update(edit)
    .returning('id')
    .then((id) => {
      res.redirect('/' + id);
    });
});


module.exports = router;
