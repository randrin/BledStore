import express from "express";
import multer from "multer";
import multerS3 from "multer-s3";
import { isAdmin, isAuth } from "../utils";
import config from "../config";
import AWS from "aws-sdk";

AWS.config.update({
  accessKeyId: config.AWS_ACCESS_KEY_ID,
  secretAccessKey: config.AWS_SECRET_ACCESS_KEY,
  region: config.AWS_REGION,
});

const s3 = new AWS.S3();

const uploadAWS = multer({
  storage: multerS3({
    s3,
    bucket: config.AWS_BUCKET_NAME,
    acl: "public-read",
    metadata:  (req, file, cb) => {
      cb(null, { fieldName: file.fieldname });
    },
    key: (req, file, cb) => {
      cb(null, Date.now().toString());
    },
  }),
});

const uploadRouter = express.Router();

uploadRouter.post(
  "/",
  isAuth,
  isAdmin,
  uploadAWS.single("image"),
  (req, res) => {
    res.status(201).send({ image: req.file.location });
  }
);

// const storage = multer.diskStorage({
//   destination(req, file, cb) {
//     cb(null, "uploads/");
//   },
//   filename(req, file, cb) {
//     cb(null, `${Date.now()}.jpg`);
//   },
// });

// const upload = multer({ storage });
// const uploadRouter = express.Router();

// uploadRouter.post("/", isAuth, isAdmin, upload.single("image"), (req, res) => {
//   res.status(201).send({ image: `/${req.file.path}` });
// });

export default uploadRouter;
