
exports.up = function(knex) {
   return knex.schema.createTable('incidents', function (table) {
        // primary id chave primaria
        table.increments();
        //notnullable naão aceita valor null
        table.string('title').notNullable();
        table.string('description').notNullable();
        table.decimal('value').notNullable();
        
       
        table.string('ong_id').notNullable();
        table.foreign('ong_id').references('id').inTable("ongs")
        
      })
};

exports.down = function(knex) {
  return  knex.schema.dropTable("incidents");
};
