
exports.up = function(knex, Promise) {
  return knex.schema.createTable('sneaker_table', function(table) {
    table.increments('id');
    table.string('name').notNullable();
    table.double('price').notNullable();
    table.string('image_url').notNullable();
    table.text('description').notNullable();
  });

};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('sneaker_table');
};
