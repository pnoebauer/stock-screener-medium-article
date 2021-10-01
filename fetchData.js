require('isomorphic-fetch');

require('dotenv').config(); // load .env into process environment

const url = 'https://api.tdameritrade.com/v1';

const apikey = process.env.API_SECRET_KEY;

const quotesExtension = 'marketdata/quotes';

const symbol = ['GOOGL', 'AAPL'];

const queryParams = {
	apikey,
	symbol,
};

const quotesURL = `${url}/${quotesExtension}?${new URLSearchParams(
	queryParams
).toString()}`;

fetch(quotesURL)
	.then(res => res.json())
	.then(data => console.log(data))
	.catch(e => console.log('error fetching data', e));
