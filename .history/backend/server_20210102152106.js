import express from "express";
import cors from "cors";
import data from "./data";
import path from 'path';
import mongoose from "mongoose";
import config from "./config";
import bodyParser from "body-parser";
import userRouter from "./routes/userRoutes";
import orderRouter from "./routes/orderRoutes";
import productRouter from "./routes/productRoutes";
import uploadRouter from "./routes/uploadRoutes";
import dashboardRouter from "./routes/dashboardRoutes";

mongoose
  .connect(config.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => {
    console.log("connected to mongodb");
  })
  .catch((error) => {
    console.log("Error connected to mongodb:", error.reason);
  });

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use("/api/dashboards", dashboardRouter);
app.use("/api/orders", orderRouter);
app.use('/api/uploads', uploadRouter);
app.use("/api/users", userRouter);
app.use("/api/products", productRouter);
app.use("/api/paypal/cliendId", (req, res) => {
  res.send({ clientId: config.PAYPAL_CLIENT_ID });
});
app.use('/uploads', express.static(path.join(__dirname, '/../uploads')));
app.use(express.static(path.join(__dirname, '/../frontend')));
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/../frontend/index.html'));
});

// Mock Products Data -> To remove later
// app.get("/api/products", (req, res) => {
//   res.send(data.products);
// });

// Products to MongoDB
// app.get("/api/products", (req, res) => {
//   res.send(data.products);
// });

// app.get("/api/product/:id", (req, res) => {
//   const product = data.products.find((prd) => prd._id === req.params.id);

//   if (product) {
//     res.send(product);
//   } else {
//     res.status(404).send({ message: "Product not found." });
//   }
// });

app.use((error, req, res, next) => {
  const status = error.name && error.name === "ValidationError" ? 400 : 500;
  res.status(status).send({ message: error.message });
});

app.listen(config.PORT, () => {
  console.log(`Server started at `http://localhost:${config.PORT}`");
});
