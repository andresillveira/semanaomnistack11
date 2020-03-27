
exports.up = function(knex) {
    return knex.schema.createTable('incidents',function (table){
        table.increments();

        table.string('title').notNullable();//notNullable impede de aceitar itens vazios
        table.string('description').notNullable();
        table.decimal('value').notNullable();
        
        table.string('ong_id').notNullable();//Relacionamento, qual ong chamou esse incident

        table.foreign('ong_id').references('id').inTable('ongs');//Chave estrangeira: Coluna ong_id referencia a coluna id na tabela ongs
    });
};

exports.down = function(knex) {
  return knex.schema.dropTable('incidents');
};
