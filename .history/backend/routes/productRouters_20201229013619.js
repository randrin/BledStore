import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import Product from '../models/productModel';
import { isAdmin, isAuth } from '../utils';

const productRouter = express.Router();

productRouter.post('/', isAuth, isAdmin, expressAsyncHandler(async(req, res) => {
    const product = new Product({
        name: req.body.name,
        
    })
}))