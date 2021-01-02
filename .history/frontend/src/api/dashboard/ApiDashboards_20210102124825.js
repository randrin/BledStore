import { apiUrl } from "../../config";
import { getUserInfos } from "../../localStorage";

export const getDashboardInfos = async () => {
  try {
    const { token } = getUserInfos();
    const response = await axio({
      url: `${apiUrl}/api/dashboards/summary`,
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    if (response.statusText !== "OK") {
      throw new Error(response.data.message);
    } else {
      return response.data;
    }
  } catch (error) {
    return {
      error: error.response ? error.response.data.message : error.message
    };
  }
};
