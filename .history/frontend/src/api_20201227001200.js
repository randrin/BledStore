import axios from "axios";
import { apiUrl } from "./config";

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
    console.log(error);
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
    console.log(error);
    return { error: error.response.data.message || error.message}
  }
}

export const register = async({email, name, password, confirmPasswor})