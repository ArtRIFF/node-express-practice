const http = require('http');
const fs = require('node:fs');
const path = require('node:path')
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const account = require('./mongo_account/account');


const MongoClient = require('mongodb').MongoClient;

// MongoClient.connect(url, function(err, db) {
// 	var cursor = db.collection('products').find();
// 	console.log("SDSDSD");
// 	console.log(cursor);
// });
// MongoClient.connect(url, function(err, db) {
// 	var cursor = db.collection('products').find();
// 	console.log("SDSDSD");
// 	console.log(cursor);
// });
// MongoClient.connect(url, function(err, db) {
// 	var cursor = db.collection('products').find();
// 	console.log("SDSDSD");
// 	console.log(cursor);
// });

app.use(express.static('./public'));

const registerRouter = require('./routers/register');
app.use('/register',registerRouter);

const apiRouter = require('./routers/api');
app.use('/api',apiRouter);

const productsRouter = require('./routers/product');
app.use('/product',productsRouter);

const productAddRouter = require('./routers/productAdd');
app.use('/add',productAddRouter);

app.all('*', (request, response) => {
	response.status(404).send('resource not found')
})

const start = async () => {
	try {
		const url = `mongodb+srv://${account.login}:${account.password}@cluster0.5uzauiq.mongodb.net/notebook-shop`;
		mongoose.connect(url, {
			useNewUrlParser: true,
		})

		app.listen(8000, ()=>{
			console.log("run server");
		})

	} catch (e) {
		console.log(e);
	}
}

start ();
