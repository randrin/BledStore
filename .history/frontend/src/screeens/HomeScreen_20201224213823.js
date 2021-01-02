const HomeScreen = {
  render: () => {
    return `
        <ul class="products">
        ${products.map(
          (product) => `
        <li>
        <div class="product">
          <a href="/#/product/1">
            <img src="${product.image}" alt="Product 1" />
          </a>
          <div class="product-name">
            <a href="/#/product/1">Product Name</a>
          </div>
          <div class="product-brand">Product Brand</div>
          <div class="product-price">Product Price</div>
        </div>
      </li>
        `
        )}
        </ul>
        `;
  },
};
