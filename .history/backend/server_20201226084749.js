import express from "express";
import cors from "cors";
import data from "./data";
import mongoose from 'mongoose';

mongoose.connect(config.)

const app = express();
app.use(cors());

app.get("/api/products", (req, res) => {
  res.send(data.products);
});

app.get("/api/product/:id", (req, res) => {
  const product = data.products.find((prd) => prd._id === req.params.id);

  if (product) {
    res.send(product);
  } else {
    res.status(404).send({ message: "Product not found." });
  }
});

app.listen(5000, () => {
  console.log("Server started at http://localhost:5000");
});
