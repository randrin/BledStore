import { getProduct } from "../api";
import { parseRequestUrl } from "../utils";

const ProductScreen = {
    render: async () => {
      const request = parseRequestUrl();
      const product = await getProduct(request.id);
      if (product.error) {
        return `<h1>${product.error}</h1>`;
      }
      return `<div class="content">
        <div class="back-to-result">
          
        </div>
      </div>`;
    }
}

export default ProductScreen;