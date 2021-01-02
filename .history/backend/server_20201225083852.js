import express from 'express';
import cors from 'cors';
import data from './data';

const app = express();
app.use(cors());

app.get('/api/products', (req, res) => {
    res.send(data.products);
})

app.get()

app.listen(5000, ()=> {
    console.log('Server started at http://localhost:5000');
})