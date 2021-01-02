import { parseRequestUrl } from "../utils";

const CartScreen = {
    after_render: () => {
    },
    render: async () => {
        const request = parseRequestUrl();
        if (request.id) {
            const product = get
        }
      return `<div class="content">
      <h1>Cart Product</h1>
      </div>`;
    }
}

export default CartScreen;