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
          <a href='/#/'>Back to Home</a>
        </div>
        <div class="details">
          <div class="details-images">
          <img src="${product.imag}"/>
          </div>
        </div>
      </div>`;
    }
}

export default ProductScreen;