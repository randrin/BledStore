import express from "express";
import expressAsyncHandler from "express-async-handler";
import { isAdmin, isAuth } from "../utils";


const orRouter = express.Router();

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