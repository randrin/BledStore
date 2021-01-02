import { getProduct } from "../api";
import { parseRequestUrl } from "../utils";

const CartScreen = {
    after_render: () => {
    },
    render: async () => {
        const request = parseRequestUrl();
        if (request.id) {
            const product = await getProduct(request.id);
            addToCart({
                product: product._id,
                name: product.name,
                image: product.image,
                price: product.price,
                countInStock: product.countInStock,
                q
            })
        }
      return `<div class="content">
      <h1>Cart Product</h1>
      </div>`;
    }
}

export default CartScreen;