import express from "express";
import expressAsyncHandler from "express-async-handler";
import Product from "../models/productModel";
import { isAdmin, isAuth } from "../utils";

const productRouter = express.Router();

productRouter.get(
  "/:id",
  expressAsyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);
    if (product) {
      res.send(product);
    } else {
      res.status(404).send({ message: "Product Not Found" });
    }
  })
);

productRouter.post(
  "/create",
  isAuth,
  isAdmin,
  expressAsyncHandler(async (req, res) => {
    const product = new Product({
      name: req.body.name,
      description: req.body.description,
      category: req.body.name,
      brand: req.body.name,
      image: req.body.name,
    });
    const createdProduct = await product.save();
    if (createdProduct) {
      res.status(201).send({
        message: "Product Created successfuly.",
        product: createdProduct,
      });
    } else {
      res.status(500).send({ message: "Error in creating product" });
    }
  })
);

productRouter.post(
  "/",
  isAuth,
  isAdmin,
  expressAsyncHandler(async (req, res) => {
    const product = new Product({
      name: "sample product",
      description: "sample desc",
      category: "sample category",
      brand: "sample brand",
      image: "/images/product-1.jpg",
    });
    const createdProduct = await product.save();
    if (createdProduct) {
      res.status(201).send({
        message: "Product Created successfuly.",
        product: createdProduct,
      });
    } else {
      res.status(500).send({ message: "Error in creating product" });
    }
  })
);

export default productRouter;