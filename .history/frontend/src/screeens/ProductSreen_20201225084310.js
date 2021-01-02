import { parseRequestUrl } from "../utils";


const ProductScreen = {
    render: () => {
      const request = parseRequestUrl();
      const product = await getProduc(request.id);
      return `<div>ProductScreen</div>`;
    }
}

export default ProductScreen;