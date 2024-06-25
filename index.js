require("dotenv").config();

const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('testing')
})

app.listen(3000)
