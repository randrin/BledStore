import { apiUrl } from "./config";

export const getProduct = async (id) => {
    try {
        const response  =   await axios({
            url:  `${} `,
            method: 'GET',
            headers: {
              "Content-Type": "application/json",
            }),
    } catch (error) {
        
    }
}
  }