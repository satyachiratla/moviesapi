const express = require('express');
const bodyParser = require('body-parser');
const movieRoutes = require('./routes/movies');
const db = require('./DataBase/db');
require("dotenv").config();

const app = express();
app.use(bodyParser.json());

const PORT = process.env.PORT || 5050;

db().then(() => console.log('Db connected'))

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
})

app.use('/', movieRoutes)

app.listen(PORT);