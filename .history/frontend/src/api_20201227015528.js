import axios from "axios";
import { apiUrl } from "./config";
import { getUserInfos } from "./localStorage";

export const getProduct = async (id) => {
  try {
    const response = await axios({
      url: `${apiUrl}/api/product/${id}`,
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

export const signin = async ({email, password}) => {
  try {
    const response = await axios({
      url: `${apiUrl}/api/users/signin`,
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      data: {
        email,
        password
      }
    });
    if (response.statusText !== 'OK') {
      throw new Error(response.data.message)
    }
    return response.data;
  } catch (error) {
    return { error: error.response.data.message || error.message}
  }
}

export const register = async({email, name, password}) => {
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
        name
      }
    });
    if (response.statusText !== 'OK') {
      throw new Error(response.data.message)
    }
    return response.data;
  } catch (error) {
    return { error: error.response.data.message || error.message}
  }
}

export const update = async({email, name, password}) => {
  try {
    const {_id, token} = getUserInfos();
    const response = await axios({
      url: `${apiUrl}/api/users/update`,
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        'Auth'
      },
      data: {
        email,
        password,
        name
      }
    });
    if (response.statusText !== 'OK') {
      throw new Error(response.data.message)
    }
    return response.data;
  } catch (error) {
    return { error: error.response.data.message || error.message}
  }
}