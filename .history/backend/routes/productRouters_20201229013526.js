import express from 'express';
import { isAdmin, isAuth } from '../utils';

const productRouter = express.Router();

productRouter.post('/', isAuth, isAdmin)