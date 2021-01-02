import { parseRequestUrl } from "../utils";


const ProductScreen = {
    render: () => {
      const request = parseRequestUrl();
      return `<div>ProductScreen</div>`;
    }
}

export default ProductScreen;