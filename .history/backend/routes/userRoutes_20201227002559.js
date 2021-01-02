import express from "express";
import User from "../models/userModel";
import expressAyncHandler from "express-async-handler";
import { generateToken } from "../utils";

const userRouter = express.Router();

userRouter.get(
  "/createadmin",
  expressAyncHandler(async (req, res) => {
    try {
      const user = new User({
        name: "admin",
        email: "admin1@example.com",
        password: "bledstore",
        isAdmin: true,
      });
      const createdUser = await user.save();
      res.send(createdUser);
    } catch (error) {
      res.status(500).send({ message: error.message });
    }
  })
);

userRouter.post(
  "/signin",
  expressAyncHandler(async (req, res) => {
    const signinUser = await User.findOne({
      email: req.body.email,
      password: req.body.password,
    });
    if (!signinUser) {
      res.status(401).send({ message: "Invalid Email or Password. Try again" });
    } else {
      console.log("signinUser: ", signinUser);
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

userRouter.post(
  "/register",
  expressAyncHandler(async (req, res) => {
    const user = new User()
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    });
    if (!user) {
      res.status(401).send({ message: "Invalid user Data: Try again!!" });
    } else {
      console.log("signinUser: ", signinUser);
      res.send({
        _id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
        token: generateToken(signinUser),
      });
    }
  })
);

export default userRouter;
