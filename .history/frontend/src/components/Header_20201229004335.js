import { getUserInfos } from "../localStorage";

const Header = {
  after_render: () => {},
  render: () => {
    const { name, isAdmin } = getUserInfos();
    return `
        <div class="brand">
            <a href="/#/">Bled Store</a>
        </div>
        <div class="menu-brand">
        ${
          name
            ? `<a href="/#/profile">${name}</a>`
            : `<a href="/#/signin">Sing In</a>`
        }
            <a href="/#/cart">Cart</a>
            ${isAdmin ? `<a href="/#/dashboard">${name}</a>` : ""}
        </div>
        `;
  },
};

export default Header;
