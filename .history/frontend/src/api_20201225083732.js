
import axios from "axios";
import { apiUrl } from "./config";

export const getProduct = async (id) => {
  try {
    const response = await axios({
      url: `${apiUrl}/api/product/${id}`,
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.statusText !==) {

    }
  } catch (error) {}
};
