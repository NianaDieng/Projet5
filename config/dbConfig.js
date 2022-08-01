// ? const express=require('express')

const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/blogging", {
    useNewUrlParser: true,
    useUnifiedTopology: true
    }
)
.then(() => console.log('Connexion à MongoDB réussie !'))
.catch(() => console.log('Connexion à MongoDB échouée !'));
