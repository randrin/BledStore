import express from "express";
import Order from "../models/orderModel";
import expressAyncHandler from "express-async-handler";
import { isAuth } from "../utils";

const orderRouter = express.Router();

orderRouter.post(
  "/",
  isAuth,
  expressAyncHandler(async (req, res) => {
    console.log("req: ", req);
    const order = new Order({
      orderItems: req.body.order.orderItems,
      user: req.user._id,
      shipping: req.body.order.shipping,
      payment: req.body.order.payment,
      itemsPrice: req.body.order.itemsPrice,
      taxPrice: req.body.order.taxPrice,
      shippingPrice: req.body.order.shippingPrice,
      totalPrice: req.body.order.totalPrice,
    });
    const createdOrder = await order.save();
    res.status(201).send({ message: "New Order Created", order: createdOrder });
  })
);

export default orderRouter;
