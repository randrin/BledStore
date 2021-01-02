import express from "express";
import expressAsyncHandler from "express-async-handler";
import Product from "../models/productModel";
import { isAdmin, isAuth } from "../utils";

const productRouter = express.Router();

// DASBOARD
productRouter.get(
  "/",
  expressAsyncHandler(async (req, res) => {
    const products = await Product.find({});
    res.send(products);
  })
);

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
      category: req.body.category,
      brand: req.body.brand,
      image: req.body.image,
      price: req.body.price,
      countInStock: req.body.countInStock,
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

productRouter.put(
  "/:id",
  isAuth,
  isAdmin,
  expressAsyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);
    if (product) {
      product.name = req.body.name;
      product.description = req.body.description;
      product.category = req.body.category;
      product.brand = req.body.brand;
      product.image = req.body.image;
      product.price = req.body.price;
      product.countInStock = req.body.countInStock;
      const productUpdated = await product.save();
      if (productUpdated) {
        res.send({
          message: "Product Updated successfully.",
          product: productUpdated,
        });
      } else {
        res.status(500).send({ message: "Error in updating product" });
      }
    } else {
      res.status(404).send({ message: "Product not Found" });
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

productRouter.delete(
  "/:id",
  isAuth,
  isAdmin,
  expressAsyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);
    if (product) {
      const productDeleted = await product.remove();
      res.send({
        message: "Product Deleted successfully.",
        product: productDeleted,
      });
    } else {
      res.status(404).send({ message: "Product Not Found" });
    }
  })
);

export default productRouter;
