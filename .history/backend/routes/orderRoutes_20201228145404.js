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

    //   console.log('Order to save: ', order);
      const createdOrder = await JSON.stringify(req.body)).save();
      res.status(201).send({ message: 'New Order Created', order: createdOrder });
    })
  );

export default orderRouter;
