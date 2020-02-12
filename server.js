const express = require('express');
const mongoose = require('mongoose');

// Iniciando o app
const app = express();

// Iniciando o BD
mongoose.connect('mongodb://localhost:27017/nodeapi', { useUnifiedTopology: true, useNewUrlParser: true});

// Primeira rota
app.get('/', (req,res)=>{
    res.send('Hello NewWorldGames')
});

app.listen(3001);