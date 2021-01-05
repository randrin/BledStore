import { getCartItems, getUserInfos } from "../localStorage";

const Header = {
  after_render: () => {},
  render: () => {
    const { pseudo, isAdmin } = getUserInfos();
    const cartItems = getCartItems();
    return `
        <div class="brand">
            <a href="/#/">Bled Store</a>
        </div>
        <div class="menu-brand">
        ${
          pseudo
            ? `<a href="/#/profile"><i class="fa fa-user-circle-o"></i> ${pseudo}</a>`
            : `<a href="/#/signin"><i class="fa fa-user-circle"></i> Sign In</a>`
        }
            <a href="/#/cart"><i class="fa fa-shopping-cart"></i> <span class="cart-items">${cartItems.length}</span></a>
            ${isAdmin ? `<a href="/#/dashboard"><i class="fa fa-dashboard"></i></a>` : ""}
        </div>
        `;
  },
};

export default Header;
