import express from "express";
import Order from "../models/orderModel";
import expressAyncHandler from "express-async-handler";
import { isAuth } from "../utils";

const orderRouter = express.Router();

orderRouter.get(
  "/:id",
  isAuth,
  expressAyncHandler(async (req, res) => {
    const order = await Order.findById(req.params.id);
    if (order) {
      res.send(order);
    } else {
      res.status(404).send({ message: "Order Not Found" });
    }
  })
);

orderRouter.post(
    '/',
    isAuth,
    expressAyncHandler(async (req, res) => {
        console.log('Order req: ', req.body);
      const order = new Order({
        orderItems: req.body.order.orderItems,
        user: req.user._id,
        shipping: req.body.shipping,
        payment: req.body.payment,
        itemsPrice: req.body.itemsPrice,
        taxPrice: req.body.taxPrice,
        shippingPrice: req.body.shippingPrice,
        totalPrice: req.body.totalPrice,
      });
      console.log('Order to save: ', order);
      const createdOrder = await req.save();
      res.status(201).send({ message: 'New Order Created', order: createdOrder });
    })
  );

export default orderRouter;
