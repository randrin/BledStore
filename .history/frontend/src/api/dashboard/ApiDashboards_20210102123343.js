import { apiUrl } from "../../config";
import { getUserInfos } from "../../localStorage";

export const getDashboardInfos = async () => {
    try {
        const { token } = getUserInfos();
    const response = await axios({
      url: `${apiUrl}/api/products/${productId}`,
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      }
    });
    if (response.statusText !== "OK") {
      throw new Error(response.data.message);
    } else {
      return response.data;
    }
    } catch (error) {
        return { error: error.response.data.message || error.message };
    }
}