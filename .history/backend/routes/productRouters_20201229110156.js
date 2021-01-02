import express from "express";
import expressAsyncHandler from "express-async-handler";
import Product from "../models/productModel";
import { isAdmin, isAuth } from "../utils";

const productRouter = express.Router();

productRouter.get(
    '/:id',
    expressAysncHandler(async (req, res) => {
      const product = await Product.findById(req.params.id);
      res.send(product);
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
      res
        .status(201)
        .send({
          message: "Product Created successfuly.",
          product: createdProduct,
        });
    } else {
      res.status(500).send({ message: "Error in creating product" });
    }
  })
);

export default productRouter;
