// NOT USED CURRENTLY - WILL BE WHEN FETCH FUNCTION IS MOVED TO OWN FILE

require("dotenv").config();

import { restClient } from '@polygon.io/client-js';
const rest = restClient(process.env.POLY_API_KEY);

async function fetchPrices() {
    rest.stocks.lastQuote("AAPL").then((data) => {
        return data;
    }).catch(e => {
        console.error('An error happened:', e);
    });
}

module.exports = {fetchPrices}
