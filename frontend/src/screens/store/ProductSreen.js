import { getProduct } from "../../api/store/ApiProducts";
import Rating from "../../components/Rating";
import { hideLoading, parseRequestUrl } from "../../utils";

const ProductScreen = {
  after_render: () => {
    const request = parseRequestUrl();
    document.getElementById("add-button").addEventListener("click", () => {
     
      document.location.hash = `/cart/${request.id}`;
      window.location.reload();
    });
  },
  render: async () => {
    const request = parseRequestUrl();
    const product = await getProduct(request.id);
    if (product.error) {
      hideLoading();
      return `<h1>${product.error}</h1>`;
    }

    return `<div class="content">
        <div class="back-to-result">
          <a href='/#/'><i class="fa fa-angle-left"></i> Back to Home</a>
        </div>
        <div class="details">
          <div class="details-image">
          ${product.discountPrice ? '<span class="card-product-label label-circle label-sale">Sale</span>' : ''}
            <img src="${product.image}" alt="${product.name}"/>
          </div>
          <div class="details-info">
            <ul>
              <li>
                <h1>${product.name}</h1>
                <p>${product.category}</p>
              </li>
              <li>
                ${Rating.render({
                  value: product.rating,
                  text: `${product.numReviews} reviews`,
                })}
              </li>
              <li>
                <span class="title-product">Price: </span>${product.discountPrice ? `<strong>${product.discountPrice} €</strong> <strong class="product-old-price">${product.price} €</strong>` : `<strong>${product.price} €</strong>`}
              </li>
              <li>
                <span class="title-product">Brand: </span><span>${product.brand}</span>
              </li>
              <li>
                <span class="title-product">Description: </span><div class="product-description">${
                  product.description
                }</div>
              </li>
            </ul>
          </div>
          <div class="details-action">
            <ul>
              <li>
                Price: <strong class="error">${product.discountPrice ? product.discountPrice : product.price} €</strong>
              </li>
              <li>
                Status : 
                  ${
                    product.countInStock > 0
                      ? `<span class="success">In Stock</span>`
                      : `<span class="error">Unavailable</span>`
                  }
              </li>
              <li>
              ${
                product.countInStock > 0
                  ? `<button id="add-button" class="fw primary"><i class="fa fa-shopping-cart"></i> Add to Cart </button>`
                  : `<button id="add-button" class="fw primary disable-button"><i class="fa fa-shopping-cart"></i> Add to Cart </button>`
              }
              </li>
            </ul>
        </div>
        </div>
      </div>`;
  },
};

export default ProductScreen;
