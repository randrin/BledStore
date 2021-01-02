import express from "express";
import expressAsyncHandler from "express-async-handler";
import Order from "../models/orderModel";
import User from "../models/userModel";
import { isAdmin, isAuth } from "../utils";

const dashboardRouter = express.Router();

dashboardRouter.get(
  "/summary",
  isAuth,
  isAdmin,
  expressAsyncHandler(async (req, res) => {
    const orders = await Orderr.aggredate([
      {
        $group: {
          _id: null,
          numOrders: { $sum: 1 },
          totalSales: { $sum: "$totalPrice" },
        },
      },
    ]);
    const users = await User.aggregate([
        {
          $group: {
            _id: null,
            numUsers: { $sum: 1 },
          },
        },
      ]);
    res.send({orders});
  })
);

export default dashboardRouter;
