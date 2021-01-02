import express from 'express';
import Order from '../models/orderModel';
import expressAyncHandler from "express-async-handler";
import { isAuth } from '../utils';

const orderRouter = express.Router();

orderRouter.post('/', isAuth, expressAyncHandler(async (req, res) => {
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

orderRouter.post(
    "/orders",
    expressAyncHandler(async (req, res) => {
      const signinUser = await Order.findOne({
        email: req.body.email,
        password: req.body.password,
      });
      if (!signinUser) {
        res.status(401).send({ message: "Invalid Email or Password. Try again" });
      } else {
        res.send({
          _id: signinUser._id,
          name: signinUser.name,
          email: signinUser.email,
          isAdmin: signinUser.isAdmin,
          token: generateToken(signinUser),
        });
      }
    })
  );

  export default orderRouter;