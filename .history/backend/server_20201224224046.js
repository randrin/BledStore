const express = require('express');
const app = express();
const data = require('./data.js');

app.get('/api/products', (req, res) => {
    res.send(data.products);
})

app.listen(500)