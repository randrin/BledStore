import { getUserInfos } from "../localStorage";

const Header = {
  after_render: () => {},
  render: () => {
      const {name} = getUserInfos();
    return `
        <div class="brand">
            <a href="/#/">Bled Store</a>
        </div>
        <div class="menu-brand">
        ${name ?}
            <a href="/#/signin">Sing In</a>
            <a href="/#/cart">Cart</a>
        </div>
        `;
  },
};

export default Header;
