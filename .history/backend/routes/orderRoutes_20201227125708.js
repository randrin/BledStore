import express from 'express';
import Order from '../models/OrderModel';

const orderRouter = express.Router();


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

  export default or