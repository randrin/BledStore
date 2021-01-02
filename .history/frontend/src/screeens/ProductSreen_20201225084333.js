import { getProduct } from "../api";
import { parseRequestUrl } from "../utils";


const ProductScreen = {
    render: () => {
      const request = parseRequestUrl();
      const product = await getProduct(request.id);
      return `<h1>${product.}</h1>`;
    }
}

export default ProductScreen;