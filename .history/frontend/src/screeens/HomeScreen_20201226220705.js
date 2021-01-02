import axios from "axios";
import Rating from "../components/rating";
import { apiUrl } from "../config";

const HomeScreen = {
  showLoading();
  render: async () => {
    const response = await axios({
      url: `${apiUrl}/api/products`,
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!response || response.statusText !== "OK") {
      return `<div>Error in getting data</div>`;
    }
    const products = response.data;

    return `
        <ul class="products">
        ${products
          .map(
            (product) => `
              <li>
              <div class="product">
                <a href="/#/product/${product._id}">
                  <img src="${product.image}" alt="${product.name}" />
                </a>
                <div class="product-name">
                  <a href="/#/product/${product._id}">${product.name}</a>
                </div>
                <div class="product-rating">
                  ${Rating.render({
                    value: product.rating,
                    text: `${product.numReviews} reviews`,
                  })}
                </div>
                <div class="product-brand">${product.brand}</div>
                <div class="product-price">${product.price} Euro</div>
              </div>
            </li>
          `
          )
          .join("\n")}
        </ul>
        `;
  },
};

export default HomeScreen;
