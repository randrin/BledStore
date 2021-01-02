import express from "express";
import expressAsyncHandler from "express-async-handler";
import { isAdmin, isAuth } from "../utils";

const dashboardRouter = express.Router();

dashboardRouter.get(
  "/summary",
  isAuth,
  isAdmin,
  expressAsyncHandler(async (req, res) => {
    const orders = await Order.aggredate([
        $group: {
            _id: null,
            numOrder
        }
    ]);
    res.send(orders);
  })
);


export default dashboardRouter;