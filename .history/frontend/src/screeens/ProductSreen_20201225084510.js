import { getProduct } from "../api";
import { parseRequestUrl } from "../utils";

const ProductScreen = {
    render: () => {
      const request = parseRequestUrl();
      const product = async getProduct(request.id);
      return `<h1>${product.name}</h1>`;
    }
}

export default ProductScreen;