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
            type: mongoose.Schema.Types.O
        }
      }
    ],
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userScreen);

export default User;
