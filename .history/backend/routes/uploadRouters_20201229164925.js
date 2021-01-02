import express from "express";
import multer from 'multer';
import { isAdmin, isAuth } from "../utils";

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, "uploads/");
  },
  filename(req, file, cb) {
    cb(null, `${Date.now()}.jpg`);
  },
});

const upload = multer({ storage });
const uploadRouter = express.Router();

uploadRouter.post(
  "/",
  isAuth,
  isAdmin,
  multer.s((req, res) => {})
);

export default uploadRouter;
