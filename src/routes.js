const express = require('express');
const routes = express.Router();


const ProductController = require('./controllers/ProductController');

routes.get('/products', ProductController.index);

// Exportar o arquivo routes para utilizalo dentro do server.js
module.exports = routes;