/*Metodos HTTP:
 GET:Buscar/Listar uma informação do backend
 POST: Criar uma informação no backend
 PUT: Alterar uma informação no backend
 DELETE: Deleta uma informação no backend

 Abrir o terminal no code: Ctrl+'
*/

/*Tipos de parametros:
    Query Params: Parametros nomeados enviados na rota após o ? (Normalmente serve para filtos, paginação)
    Route:Parametros utilizados para indentificar recursos (Colocar : antes e só retorna específico)
    Request Body: Utilizado para criar ou alterar recursos
*/
/*Conectando ao banco de dados:
 Pelo Driver: SELECT * FROM users (Seleciona todos os usuarios)
 Pelo Query Bilder: table('users').select('*').where() (Aqui instala o knex)
*/

const express = require('express');//importa o modulo express para a variavél de nome express

const routes = require('./routes');//Aqui importa as rotas do arquivo routes.js

const cores = require('cors');

const app = express(); //Váriavél que armazena a aplicação

app.use(cors());

app.use(express.json()); //informa ao app que que as requisições serão feitas em formato de json

app.use(routes);

app.listen(3333);//Aplicação ouve a porta 3333 (localhost 3333)

