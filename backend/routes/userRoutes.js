import express from "express";
import bcrypt from "bcryptjs";
import User from "../models/userModel";
import expressAyncHandler from "express-async-handler";
import { generateToken, isAuth } from "../utils";
import { modalMessage } from "../config";

const userRouter = express.Router();

// DASHBOARD
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

// STORE
userRouter.post(
  "/signin",
  expressAyncHandler(async (req, res) => {
    const signinUser = await User.findOne({
      email: req.body.email,
    });
    if (!signinUser) {
      res.status(404).send({ message: modalMessage.USER_NOT_FOUND });
    }
    const userPassword = await bcrypt.compare(
      req.body.password,
      signinUser.password
    );
    if (!userPassword) {
      res.status(401).send({ message: modalMessage.INVALID_PASSWORD });
    } else {
      res.send({
        _id: signinUser._id,
        pseudo: signinUser.pseudo,
        sex: signinUser.sex,
        name: signinUser.name,
        phone: signinUser.phone,
        email: signinUser.email,
        password: signinUser.password,
        isAdmin: signinUser.isAdmin,
        createdAt: signinUser.createdAt,
        token: generateToken(signinUser),
      });
    }
  })
);

userRouter.post(
  "/register",
  expressAyncHandler(async (req, res) => {
    const dataUser = new User({
      name: req.body.name,
      phone: req.body.phone,
      sex: req.body.sex,
      email: req.body.email,
      pseudo: req.body.pseudo,
      password: await bcrypt.hash(req.body.password, 16),
    });
    const user = await dataUser.save();
    if (!user) {
      res.status(401).send({ message: "Invalid user Data: Try again!!" });
    } else {
      res.send({
        _id: user._id,
        pseudo: user.pseudo,
        sex: user.sex,
        name: user.name,
        email: user.email,
        phone: user.phone,
        isAdmin: user.isAdmin,
        token: generateToken(user),
      });
    }
  })
);

userRouter.put(
  "/:id",
  isAuth,
  expressAyncHandler(async (req, res) => {
    const user = await User.findById(req.params.id);
    if (!user) {
      res.status(401).send({ message: "User not found !!!" });
    } else {
      user.name = req.body.name || user.name;
      user.email = req.body.email || user.email;
      user.password = req.body.password || user.password;
      const updatedUser = await user.save();
      res.send({
        _id: updatedUser._id,
        name: updatedUser.name,
        email: updatedUser.email,
        isAdmin: updatedUser.isAdmin,
        token: generateToken(updatedUser),
      });
    }
  })
);

export default userRouter;
