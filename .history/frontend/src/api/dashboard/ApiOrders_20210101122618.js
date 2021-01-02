import axios from "axios";
import { apiUrl } from "../../config";
import { getUserInfos } from "../../localStorage";

export const getDashboardOrders = async () => {
  try {
    const { token } = getUserInfos();
    const response = await axios({
      url: `${apiUrl}/api/orders`,
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
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
