const express = require('express');
import expres from 'express';
const cors = require('cors');
import cors from 'cors';
import data from './data.js'
const app = express();
app.use(cors());
const data = require('./data.js');

app.get('/api/products', (req, res) => {
    res.send(data.products);
})

app.listen(5000, ()=> {
    console.log('Server started at http://localhost:5000')
})