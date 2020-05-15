
//import express
const express = require("express")
const routes = require("./routes")
// modo de segurança para ver quem acessa sua api
const cors = require("cors")

// cal express
const app = express()
// call route
//metodos http
// get - buscar/listar inforamções do backend
// post- pegar um informação do backend
// put - alterar uma informação do backend
// delete - deletar informações do backend

//Tipos de parametros 

//query params - envia parametros via url, parametros omeados  enviados para rota após o "?" servindo para filtros, paginação
//exemplo
//http://localhost:3333/users?name=keven
//http://localhost:3333/users?page=2&name=keven&idade=19
// routes params - parametros utilizado para indentificar recursos, buscar dados de um unico usuario
//exemplo
// isto tu faz no backend
//http://localhost:3333/:id
// isto tu faz no frontend
//http://localhost:3333/1
//request body - o corpo da requisição para alterar ou criar recursos
// ex criar usuarios

// estou dizendo para o express converter json eom objeto do javascript para que ele possa ser entendido sem isso não consigo receber json em body
app.use(express.json());
app.use(cors())
app.use(routes)
// instalar migrations
//npx knex migrate:make migration_name
app.listen(3333);