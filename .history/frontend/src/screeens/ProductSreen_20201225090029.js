import { getProduct } from "../api";
import { parseRequestUrl } from "../utils";

const ProductScreen = {
    render: async () => {
      const request = parseRequestUrl();
      const product = await getProduct(request.id);
      if (product.error) {
        return `<h1>${product.error}</h1>`;
      }
      return `<div class="content">${product.name}</div>`;
    }
}

export default ProductScreen;