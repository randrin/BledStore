import express from "express";
import expressAsyncHandler from "express-async-handler";
import { isAuth } from "../utils";

const uploadRouter = express.Router();

uploadRouter.get('/', isAuth, isA)

export default uploadRouter;