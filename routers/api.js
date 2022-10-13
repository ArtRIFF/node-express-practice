const express = require('express');
const path = require('node:path')
const router = express.Router();
const {users} = require('../mockData/users.json');
const {products} = require('../mockData/products.json');

router.get('/users', (request, response) => {
	//логика работы с данными 
	response.status(200).json({success: true, data: users});
});

router.get('/products', (request, response) => {
	response.status(200).json({success: true, data: products});
});

router.post('/users', (request, response) => {
	//логика работы с данными 
	response.status(200).json({success: true});
});



module.exports = router;