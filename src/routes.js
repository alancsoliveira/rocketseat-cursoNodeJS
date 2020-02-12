const express = require('express');
const routes = express.Router();


const ProductController = require('./controllers/ProductController');

routes.get('/products', ProductController.index);
routes.post('/products', ProductController.store)

// Exportar o arquivo routes para utilizalo dentro do server.js
module.exports = routes;