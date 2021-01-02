import { parseRequestUrl } from "../utils";

const CartScreen = {
    after_render: () => {
    },
    render: async () => {
        const request = parseRequestUrl();
        if (request) {

        }
      return `<div class="content">
      <h1>Cart Product</h1>
      </div>`;
    }
}

export default CartScreen;