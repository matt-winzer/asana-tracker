exports.seed = function(knex, Promise) {
  return knex.raw('TRUNCATE asana; ALTER SEQUENCE asana_id_seq restart with 1;')
    .then(function () {
      const asanas = [{
        name: 'anahatasana',
        primary_target: 'upper back, heart',
        duration: 2.5,
        difficulty: 5
      }, {
        name: 'butterfly',
        primary_target: 'lower back, hips',
        duration: 4,
        difficulty: 3
      }, {
        name: 'half butterfly',
        primary_target: 'lower back, hamstrings',
        duration: 3,
        difficulty: 4
      }, {
        name: 'caterpillar',
        primary_target: 'back',
        duration: 3,
        difficulty: 4
      }, {
        name: 'childs pose',
        primary_target: 'back, stomach',
        duration: 4,
        difficulty: 1
      }, {
        name: 'dragon',
        primary_target: 'hips, groin',
        duration: 2,
        difficulty: 5
      }, {
        name: 'sphinx',
        primary_target: 'sacrum, low back',
        duration: 3,
        difficulty: 2
      }, {
        name: 'frog',
        primary_target: 'groin',
        duration: 2.5,
        difficulty: 4
      }, {
        name: 'saddle',
        primary_target: 'sacrum, low back',
        duration: 3,
        difficulty: 5
      }, {
        name: 'sleeping swan',
        primary_target: 'hips',
        duration: 4,
        difficulty: 4
      }];

      return knex('asana').insert(asanas);
    });
};
