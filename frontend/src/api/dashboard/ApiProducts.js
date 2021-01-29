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

export const productCreate = async ({
  name,
  price,
  discountPrice,
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
        discountPrice,
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
  } catch (error) {
    return { error: error.response.data.message || error.message };
  }
};

export const productUpdate = async ({
  _id,
  name,
  price,
  discountPrice,
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
        discountPrice,
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

export const activateProduct = async (productId) => {
  try {
    const { token } = getUserInfos();
    const response = await axios({
      url: `${apiUrl}/api/products/activate/${productId}`,
      method: "PUT",
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
    return { error: error.response.data.message || error.message };
  }
};

export const deleteProduct = async (productId) => {
  try {
    const { token } = getUserInfos();
    const response = await axios({
      url: `${apiUrl}/api/products/${productId}`,
      method: "DELETE",
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
    return { error: error.response.data.message || error.message };
  }
};