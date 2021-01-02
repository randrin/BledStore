import data from "../../../backend/data.js";

const HomeScreen = {
  render: async () => {
    const { products } = data;
    const response = await fetch('http://localhost:5000/api/products', {
        headers: {
            'Content-Type': 'application/'
        }
    })
    return `
        <ul class="products">
        ${products.map(
          (product) => `
        <li>
        <div class="product">
          <a href="/#/product/${product._id}">
            <img src="${product.image}" alt="${product.name}" />
          </a>
          <div class="product-name">
            <a href="/#/product/${product._id}">${product.name}</a>
          </div>
          <div class="product-brand">${product.brand}</div>
          <div class="product-price">${product.price} Euro</div>
        </div>
      </li>
        `
        ).join('\n')}
        </ul>
        `;
  },
};

export default HomeScreen;
