import express from "express";
import cors from "cors";
import data from "./data";
import mongoose from 'mongoose';
import config from "./config";
import userRouter from "./routes/userRoutes";

mongoose.connect(config.MONGOLDB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}).then(() => {
    console.log('connected to mongodb')
})
.catch((error) => {
    console.log('Error connected to mongodb', error.reason);
})

const app = express();
app.use(cors());
app.use('/api/users', userRouter);

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
