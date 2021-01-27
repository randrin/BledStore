import axios from "axios";
import { apiUrl } from "../../config";
import { getUserInfos } from "../../localStorage";

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
  } catch (error) {
    return { error: error.message };
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
