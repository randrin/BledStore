import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import { isAdmin, isAuth } from '../utils';

const productRouter = express.Router();

productRouter.post('/', isAuth, isAdmin, expressAsyncHandler())