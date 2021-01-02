import mongoose from "mongoose";

const orderScreen = new mongoose.Schema(
  {
    orderItems: [
      {
        name: { type: String, required: true },
        image: { type: String, required: true },
        price: { type: Number, required: true },
        qty: { type: Number, required: true },
        product: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Product',
            required: true,
        },
      },
    ],
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true},
    shipping: { address: String, city: String, postalCode: String, country: String},
    payment
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userScreen);

export default User;
