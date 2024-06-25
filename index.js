import dotenv from 'dotenv';
dotenv.config()

import { restClient } from '@polygon.io/client-js';

import express from 'express';

// const express = require('express')
// const {fetchPrices} = require('./fetch_price')
const app = express()
const rest = restClient(process.env.POLY_API_KEY);

app.get('/', function (req, res) {
    rest.stocks.lastQuote("AAPL").then((data) => {
      res.json(data.results.P);
  }).catch(e => {
      console.error('An error happened:', e);
  });
})

app.listen(3000)
