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

const fileFilter = (req, file, cb) => {
  if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
    cb(null, true)
  } else {
    cb(new Error('Invalid Mine Type, only JPEG and PNG'), false)
  }
}

const uploadAWS = multer({
  fileFilter,
  storage: multerS3({
    s3,
    bucket: config.AWS_BUCKET_NAME,
    acl: "public-read",
    metadata:  (req, file, cb) => {
      cb(null, { fieldName: file.fieldname });
    },
    key: (req, file, cb) => {
      cb(null, `products/${Date.now().toString()}`);
    },
  }),
});

const uploadRouter = express.Router();

uploadRouter.post(
  "/",
  isAuth,
  isAdmin,
  uploadAWS.single("image"),
  (req, res, err) => {
    if (err) {
      res.status(422).send({ errors: [{ title: 'File Upload Error', message: err.message }] });
    }
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
