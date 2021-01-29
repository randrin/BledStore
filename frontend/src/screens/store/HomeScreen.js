import { getProducts } from "../../api/store/ApiProducts";
import Rating from "../../components/Rating";
import { hideLoading, showLoading } from "../../utils";

const HomeScreen = {
  render: async () => {
    showLoading();
    setTimeout(() => {
      hideLoading();
    }, 1000);
    const products = await getProducts();
    if (products.error) {
      return `<div>Error in getting data</div>`;
    }

    return `
        <ul class="products">
        ${products
          .map(
            (product) => `
              <li>
              <div class="card-product product">
                ${product.discountPrice ? '<span class="card-product-label label-circle label-sale">Sale</span>' : ''}
                <a href="/#/product/${product._id}">
                  <img src="${product.image}" alt="${product.name}" />
                </a>
                <div class="card-product-body">
                <div class="product-name">
                  <a href="/#/product/${product._id}">${product.name.length > 25 ?  product.name.substring(0, 25) + '...' : product.name}</a>
                </div>
                <div class="product-rating">
                  ${Rating.render({
                    value: product.rating,
                    text: `${product.numReviews} reviews`,
                  })}
                </div>
                <div class="product-brand">${product.brand}</div>
                <div class="product-description">${product.description.length > 30 ?  product.description.substring(0, 30) + '...' : product.description}</div>
                ${product.discountPrice ? 
                  `<div class="product-price-content">
                    <div class="product-price">${product.discountPrice} €</div>
                    <div class="product-discount-price">${product.price} €</div>
                </div>` : `<div class="product-price">${product.price} €</div>`}
                </div>
                <a href="/#/product/${product._id}" class="btn btn-primary"><i class="fa fa-shopping-cart"></i> Add to Cart</a>
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
