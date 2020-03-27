
exports.up = function(knex) {//sempre será utilizado para criação da tabela
    return knex.schema.createTable('ongs',function (table){
        table.string('id').primary();
        table.string('name').notNullable();//notNullable impede de aceitar itens vazios
        table.string('email').notNullable();
        table.string('whatsapp').notNullable();
        table.string('city').notNullable();
        table.string('uf',2).notNullable();
    });
};

exports.down = function(knex) {//utiliza quando precisar deletar uma tabela
  return knex.schema.dropTable('ongs');
};
