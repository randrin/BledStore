const Header = {
  after_render: () => {},
  render: () => {
    return `
    <div class="brand">
        <a href="/#/">Bled Store</a>
      </div>
      <div class="menu-brand">
        <a href="/#/signin">Sing In</a>
        <a href="/#/cart">Cart</a>
      </div>
        `;
  },
};

export default Header;
