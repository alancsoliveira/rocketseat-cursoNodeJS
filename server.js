const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

// Iniciando o app
const app = express();

// Iniciando o BD
mongoose.connect(
    'mongodb://localhost:27017/nodeapi',
    {
        useUnifiedTopology: true,
        useNewUrlParser: true
    });
// registra o Model na aplicação
requireDir('./src/models');

//const Product = mongoose.model('Product');

// Rotas
app.use('/api', require('./src/routes'));


app.listen(3001);