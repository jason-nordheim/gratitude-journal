const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const PORT = process.env.NODE_ENV || 4000 
const knex = require("knex");
const config = require("./knexfile")[process.env.NODE_ENV || "development"];
knex(config);

const app = express() 
app.use(cors())
app.use(bodyParser.json())

app.get('/users', (req, res) => {
  res.json({ user: "GET" });
})
app.post('/users', (req, res) => {
  res.json({ user: 'POST'})
})

app.listen(PORT, () => console.log(`Server started on ${PORT}`))