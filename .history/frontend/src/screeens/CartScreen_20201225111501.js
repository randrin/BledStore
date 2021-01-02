import { getProduct } from "../api";
import { getCartItems, setCartItems } from "../localStorage";
import { parseRequestUrl } from "../utils";

const addToCart = (item, forceUpdate = false) => {
  let cartItems = getCartItems();
  const existItem = cartItems.find((x) => x.product === item.product);
  if (existItem) {
    cartItems = cartItems.map((x) => (x.product === item.product ? item : x));
  } else {
    cartItems = [...cartItems, item];
  }
  setCartItems(cartItems);
};

const CartScreen = {
  after_render: () => {},
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
        qty: 1,
      });
    }
    const cartItems = getCartItems();
    return `<div class="content cart">
        <div class="cart-list">
            <ul class="cart-list-container">
                <li>
                    <h3 class="">Shopping Cart</h3>
                    <h3>Price</h3>
                </li>
                <li>
                    ${
                      cartItems.length === 0
                        ? '<div>Cart is empty.  <a href="/#/>Go Shopping</a></div>'
                        : cartItems
                            .map(
                              (item) => `
                    <li>
                        <div class="cart-image">
                            <img src="${item.image}" alt="${item.name}"/>
                        </div>
                        <div class="cart-name">
                            <div>
                                <a href="/#/product/${item.product}">${item.name}</a>
                            </div>
                            <div>
                                Qty: 
                                <select classs="qty-select" id="${item.product}">
                                ${[...Array(item.countInStock).keys()].map(x => item.qty === x+1 ?
                                    `<option selected value="${x + 1}">1</option>`)}
                                    
                                </select>
                                <button type="button" class="delete-button" id="${item.product}">
                                    Delete
                                </button>
                            </div>
                        </div>
                        <div class="cart-price">
                            ${item.price} Euro
                        </div>
                    </li>`
                            )
                            .join("\n")
                    }
                </li>
            </ul>
        </div>
        <div class="cart-action">
          <h3>
            Subtotal (${cartItems.reduce((a, c) => a + c.qty, 0)} items)
            :
            ${cartItems.reduce((a, c) => a + c.price * c.qty, 0)} Euro
          </h3>
          <button id="checkout-button" class="primary fw">
            Proceed to Checkout
          </button>
      </div>
    </div>
      </div>`;
  },
};

export default CartScreen;
