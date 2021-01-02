import { getProduct } from "../api";
import { getCartItems } from "../localStorage";
import { parseRequestUrl } from "../utils";

const addToCart = (item, forceUpdate = false ) => {
    let cartItems = getCartItems();
    const existItem = cartItems.find((x) => x.product === item.product);
    if(existItem) {
        cartItems = cartItems.map((x) => x);
    }
}

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
                qty: 1
            })
        }
      return `<div class="content">
      <h1>Cart Product</h1>
      </div>`;
    }
}

export default CartScreen;