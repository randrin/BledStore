export const getProduct = asyawait axios({
    url: "http://localhost:5000/api/products",
    headers: {
      "Content-Type": "application/json",
    },
  });