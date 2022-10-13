const express = require('express');
const path = require('node:path')
const router = express.Router();

router.get('/', (request, response) => {
	response.status(200).sendFile(path.resolve(__dirname,'../public/productAdd.html'));
});


module.exports = router;