import axios from "axios";
import { apiUrl } from "../../config";
import { getUserInfos } from "../../localStorage";

export const getDashboardProducts = async () => {
  try {
    const { token } = getUserInfos();
    const response = await axios({
      url: `${apiUrl}/api/products/dashboard`,
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
