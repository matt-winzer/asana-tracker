
exports.up = function(knex, Promise) {
  return knex.schema.createTable('asana', function(table){
    table.increments();
    table.text('name').notNullable();
    table.text('primary_target');
    table.float('duration').nullable();
    table.integer('difficulty');
  });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('asana');
};
