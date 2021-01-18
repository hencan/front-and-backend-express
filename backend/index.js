const express = require('express')
const consign = require('consign')
const app = express()
const db = require('./config/db')
const porta = 4000

// Adicionado função e configuração do Knex (banco de dados)
app.db = db

consign()
    .then('./config/middlewares.js')
    .then('./api/validation.js')
    .then('./api')
    .then('./config/routes.js')
    .into(app)

app.use((req, res) => {
    res.send('Backend MySQL sendo executado na porta ' + porta)
})

app.listen(porta, () => {
    console.log('Backend MySQL sendo executado na porta ' + porta)
})
