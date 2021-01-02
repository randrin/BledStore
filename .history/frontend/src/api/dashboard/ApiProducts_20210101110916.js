import axios from "axios";

export const getProducts = async () => {
    try {
      const response = await axios({
        url: `${apiUrl}/api/products`,
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