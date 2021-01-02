export const getProduct = asyn () => {
    await axios({
    url: "http://localhost:5000/api/products",
    headers: {
      "Content-Type": "application/json",
    },
  });