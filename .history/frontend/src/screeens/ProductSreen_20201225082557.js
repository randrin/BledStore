import { parseRequestUrl } from "../utils";


const ProductScreen = {
    render: () => {
      const request = parseRequestUrl();
      const product = awai getProduct(request.id);
      return `<div>ProductScreen</div>`;
    }
}

export default ProductScreen;