import axios from "axios";
import { apiUrl } from "./config";

export const getOrders = async () => {
  try {
    const response = await axios({
      url: `${apiUr}/api/orders`,
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.statusText !== "OK") {
      throw new Error(response.data.message);
    }
    return response.data;
  } catch (error) {
    return { error: error.response.data.message || error.message };
  }
};
