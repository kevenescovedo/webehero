
exports.up = function(knex) {
  return  knex.schema.createTable('ongs', function (table) {
        // primary id chave primaria
        table.string("id").primary();
        //notnullable naão aceita valor null
        table.string('name').notNullable();
        table.string('email').notNullable();
        table.string('whatsapp').notNullable();
        table.string('city').notNullable();
        // (uf,2) o numero limita a quantidade de carecteres que isso recebe
        table.string('uf',2).notNullable();
        
      })
};

exports.down = function(knex) {
  return knex.schema.dropTable("ongs");
  //npx knex migrate:latest
};
