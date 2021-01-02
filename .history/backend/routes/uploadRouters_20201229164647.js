import express from "express";
import expressAsyncHandler from "express-async-handler";
import { isAdmin, isAuth } from "../utils";

const uploadRouter = express.Router();

uploadRouter.get('/', isAuth, isAdmin, expressAsyncHandler(() => {
    
}))

export default uploadRouter;