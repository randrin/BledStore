import { apiUrl } from "./config";

export const getProduct = async (id) => {
    try {
        const response  =   await axios({
            url:  `${apiUrl}/api `,
            method: 'GET',
            headers: {
              "Content-Type": "application/json",
            }),
    } catch (error) {
        
    }
}
  }