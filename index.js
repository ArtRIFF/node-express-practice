const http = require('http');
const fs = require('node:fs');
const path = require('node:path')
const express = require('express');
const app = express();


app.use(express.static('./public'));

const registerRouter = require('./routers/register');
app.use('/register',registerRouter);

const apiRouter = require('./routers/api');
app.use('/api',apiRouter);

const productsRouter = require('./routers/product');
app.use('/product',productsRouter);

const productAddRouter = require('./routers/product');
app.use('/add',productAddRouter);

app.all('*', (request, response) => {
	response.status(404).send('resource not found')
})

app.listen(8000, ()=>{
	console.log("run server");
})

// fs.readFile('./public/index.html', function (err, html) {
// 	if (err) {
// 		throw err;
// 	}

// 	http.createServer((request, response) => {
// 		console.log(request.url);
// 		response.writeHeader(200, {"Content-Type": "text/html"});
// 		if (request.url === '/') {
// 			response.write(html);
// 			response.end();
// 		} else if (request.url === '/about') {
// 			response.end('Here is our short history')
// 		} else if (request.url === '/register') {
// 			fs.readFile('./public/register.html', (err, data) => {
// 				if (err) {
// 					throw err;
// 				}

// 				response.writeHeader(200, {"Content-Type": "text/html"});
// 				response.write(data);
// 				response.end();
// 			})
// 		} else {
// 			response.end(`
// 				<h1>Oops!</h1>
// 				<p>We can't seem to find the page you are looking for</p>
// 				<a href="/">back home</a>
// 			`)
// 		}
// 	}).listen(8000, () => {
// 		console.log('Server listening on port : 8000....')
// 	})
// });