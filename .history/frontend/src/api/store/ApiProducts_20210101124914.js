export const getProducts = async () => {
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