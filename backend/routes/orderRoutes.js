import express from "express";
import Order from "../models/orderModel";
import expressAyncHandler from "express-async-handler";
import { isAdmin, isAuth } from "../utils";

const orderRouter = express.Router();

// DASHBOARD
orderRouter.get(
  "/dashboard",
  isAuth,
  isAdmin,
  expressAyncHandler(async (req, res) => {
    const orders = await Order.find({}).populate("user");
    res.send(orders);
  })
);

orderRouter.post(
  "/",
  isAuth,
  expressAyncHandler(async (req, res) => {
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

orderRouter.put(
  "/:id/deliver",
  isAuth,
  expressAyncHandler(async (req, res) => {
    const order = await Order.findById(req.params.id);
    if (order) {
      order.isDelivered = true;
      order.deliveredAt = Date.now();
      const updatedOrder = await order.save();
      res.send({ message: "Order Delivered successfully.", order: updatedOrder });
    } else {
      res.status(404).send({ message: "Order Not Found" });
    }
  })
);

// STORE
orderRouter.get(
  "/",
  expressAyncHandler(async (req, res) => {
    const orders = await Order.find({}).populate("user");
    res.send(orders);
  })
);

orderRouter.get(
  "/mineOrders",
  isAuth,
  expressAyncHandler(async (req, res) => {
    const orders = await Order.find({ user: req.user._id });
    res.send(orders);
  })
);

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

orderRouter.put(
  "/:id/pay",
  isAuth,
  expressAyncHandler(async (req, res) => {
    const order = await Order.findById(req.params.id);
    if (order) {
      order.isPaid = true;
      order.paidAt = Date.now();
      order.payment.paymentResult = {
        orderID: req.body.orderID,
        payerID: req.body.payerID,
        paymentID: req.body.paymentID,
      };
      const updatedOrder = await order.save();
      res.status(200).send({ message: "Order Paid successfully.", order: updatedOrder });
    } else {
      res.status(404).send({ message: "Order Not Found" });
    }
  })
);

export default orderRouter;
