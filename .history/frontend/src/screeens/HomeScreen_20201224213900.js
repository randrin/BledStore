const HomeScreen = {
  render: () => {
    return `
        <ul class="products">
        ${products.map(
          (product) => `
        <li>
        <div class="product">
          <a href="/#/product/1">
            <img src="${product.image}" alt="${product.name}" />
          </a>
          <div class="product-name">
            <a href="/#/product/${product._id}">${product.name}</a>
          </div>
          <div class="product-brand">${product.image}</div>
          <div class="product-price">Product Price</div>
        </div>
      </li>
        `
        )}
        </ul>
        `;
  },
};
