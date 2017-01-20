
exports.up = function(knex, Promise) {
  return knex.schema.table("sneaker_table", function(table){
    table.double("size");
    table.string("condition");
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.table("sneaker_table", function(table){
    table.dropColumn("size");
    table.dropColumn("condition");
  });
};
