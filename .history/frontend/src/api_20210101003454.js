import axios from "axios";
import { apiUrl } from "./config";
import { getUserInfos } from "./localStorage";

export const getProduct = async (id) => {
  try {
    const response = await axios({
      url: `${apiUrl}/api/products/${id}`,
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

export const createProduct = async () => {
  try {
    const { token } = getUserInfos();
    const response = await axios({
      url: `${apiUrl}/api/products`,
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    if (response.statusText !== "Created") {
      throw new Error(response.data.message);
    }
    return response.data;
  } catch (error) {
    return { error: error.response.data.message || error.message };
  }
};

export const productUpdate = async ({
  _id,
  name,
  price,
  image,
  brand,
  countInStock,
  category,
  description,
}) => {
  console.log("Product: ", _id);
  try {
    const { token } = getUserInfos();
    const response = await axios({
      url: `${apiUrl}/api/products/${_id}`,
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      data: {
        name,
        price,
        image,
        brand,
        countInStock,
        category,
        description,
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

export const deleteProduct = async (productid) => {
  try {
    const { token } = getUserInfos();
    const response = await axios({
      url: `${apiUrl}/api/uploads/${id}`,
      method: "DELETE",
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
    return { error: err.response.data.message || err.message };
  }
};

export const uploadProductImage = async (formData) => {
  try {
    console.log("formData: ", formData);
    const { token } = getUserInfos();
    const response = await axios({
      url: `${apiUrl}/api/uploads`,
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "multipart/form-data",
      },
      data: formData,
    });
    if (response.statusText !== "Created") {
      throw new Error(response.data.message);
    } else {
      return response.data;
    }
  } catch (err) {
    return { error: err.response.data.message || err.message };
  }
};

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

export const productCreate = async ({
  name,
  price,
  image,
  brand,
  countInStock,
  category,
  description,
}) => {
  try {
    const { token } = getUserInfos();
    const response = await axios({
      url: `${apiUrl}/api/products/create`,
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      data: {
        name,
        price,
        image,
        brand,
        countInStock,
        category,
        description,
      },
    });
    if (response.statusText !== "Created") {
      throw new Error(response.data.message);
    }
    return response.data;
  } catch (error) {
    return { error: error.response.data.message || error.message };
  }
};

export const signin = async ({ email, password }) => {
  try {
    const response = await axios({
      url: `${apiUrl}/api/users/signin`,
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      data: {
        email,
        password,
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

export const register = async ({ email, name, password }) => {
  try {
    const response = await axios({
      url: `${apiUrl}/api/users/register`,
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      data: {
        email,
        password,
        name,
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

export const update = async ({ email, name, password }) => {
  try {
    const { _id, token } = getUserInfos();
    const response = await axios({
      url: `${apiUrl}/api/users/${_id}`,
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      data: {
        email,
        password,
        name,
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

export const createOrder = async (order) => {
  try {
    const { token } = getUserInfos();
    const response = await axios({
      url: `${apiUrl}/api/orders`,
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      data: {
        order,
      },
    });
    if (response.statusText !== "Created") {
      throw new Error(response.data.message);
    }
    return response.data;
  } catch (error) {
    return {
      error: error.response ? error.response.data.message : error.message,
    };
  }
};

export const getOrder = async (id) => {
  try {
    const { token } = getUserInfos();
    const response = await axios({
      url: `${apiUrl}/api/orders/${id}`,
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    if (response.statusText !== "OK") {
      throw new Error(response.data.message);
    }
    return response.data;
  } catch (err) {
    return { error: err.message };
  }
};

export const getPaypalClientId = async () => {
  const response = await axios({
    url: `${apiUrl}/api/paypal/cliendId`,
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (response.statusText !== "OK") {
    throw new Error(response.data.message);
  }
  return response.data.clientId;
};

export const payOrder = async (orderId, paymentResult) => {
  try {
    const { token } = getUserInfos();
    const response = await axios({
      url: `${apiUrl}/api/orders/${orderId}/pay`,
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      data: paymentResult,
    });
    if (response.statusText !== "OK") {
      throw new Error(response.data.message);
    }
    return response.data;
  } catch (error) {
    return {
      error: error.response ? error.response.data.message : error.message,
    };
  }
};

export const getMineOrders = async () => {
  try {
    const { token } = getUserInfos();
    const response = await axios({
      url: `${apiUrl}/api/orders/mineOrders`,
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    if (response.statusText !== "OK") {
      throw new Error(response.data.message);
    }
    return response.data;
  } catch (error) {
    return {
      error: error.response ? error.response.data.message : error.message,
    };
  }
};
