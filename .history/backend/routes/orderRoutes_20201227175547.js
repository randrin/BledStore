import express from 'express';
import Order from '../models/orderModel';
import expressAyncHandler from "express-async-handler";
import { isAuth } from '../utils';

const orderRouter = express.Router();

orderRouter.post('/', expressAyncHandler(async (req, res) => {
    console.log('req: ', req);
    const order = new Order({
        orderItems: req.body.orderItems,
        user: req.user._id,
        shipping: req.body.shipping,
        payment: req.body.payment,
        itemsPrice: req.body.itemsPrice,
        taxPrice: req.body.taxPrice,
        shippingPrice: req.body.shippingPrice,
        totalPrice: req.body.totalPrice,
    });
    const createdOrder = await order.save();
    res.status(201).send({ message: 'New Order Created', order: createdOrder });
}));

  export default orderRouter;