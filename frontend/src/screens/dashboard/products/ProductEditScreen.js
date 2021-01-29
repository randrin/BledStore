import {
  hideLoading,
  parseRequestUrl,
  showLoading,
  showMessage,
} from "../../../utils";
import {
  productUpdate,
  uploadProductImage,
} from "../../../api/dashboard/ApiProducts";
import DashboardMenu from "../../../components/DashboardMenu";
import { modalMessage } from "../../../config";
import { getProduct } from "../../../api/store/ApiProducts";

const ProductEditScreen = {
  after_render: async () => {
    const request = parseRequestUrl();
    document
      .getElementById("back-to-products")
      .addEventListener("click", async () => {
        document.location.hash = `/dashboard-products`;
      });
    document
      .getElementById("edit-product-form")
      .addEventListener("submit", async (e) => {
        e.preventDefault();
        showLoading();
        const data = await productUpdate({
          _id: request.id,
          name: document.getElementById("name").value,
          price: document.getElementById("price").value,
          discountPrice: document.getElementById("discountPrice").value,
          image: document.getElementById("image").value,
          brand: document.getElementById("brand").value,
          countInStock: document.getElementById("countInStock").value,
          category: document.getElementById("category").value,
          description: document.getElementById("description").value,
        });
        hideLoading();
        if (data.error) {
          showMessage(data.error);
        } else {
          document.location.hash = `/dashboard-products`;
        }
      });
    document
      .getElementById("image-file")
      .addEventListener("change", async (e) => {
        const file = e.target.files[0];
        const formData = new FormData();
        formData.append("image", file);
        showLoading();
        const data = await uploadProductImage(formData);
        hideLoading();
        if (data.error) {
          showMessage(data.error);
        } else {
          showMessage("Image uploaded successfully.");
          document.getElementById("image").value = data.image;
        }
      });
  },
  render: async () => {
    const request = parseRequestUrl();
    const product = await getProduct(request.id);
    return `
    <div class="dashboard">
    ${DashboardMenu.render({ selected: "products" })}
    <div class="dashboard-content">
    <h1>Edit Product ${product._id}</h1>
    <hr />
    <div class="product-list">
      <div class="form-container">
        <form id="edit-product-form">
          <ul class="form-items form-items-large">
            <li>
              <label for="name">${
                modalMessage.NAME_PRODUCT
              } <span class="form-required">*</span></label>
              <input type="text" name="name" value="${
                product.name
              }" id="name" />
            </li>
            <li>
            <div class="product-price-content">
              <div class="product-price-create">
                  <label for="price">${
                    modalMessage.PRICE
                  } <span class="form-required">*</span></label>
                  <input type="number" name="price" value="${
                    product.price
                  }" id="price" />
                </div>
                <div class="product-discountprice-create">
                  <label for="discountPrice">${
                    modalMessage.DISCOUNT_PRICE
                  }</label>
                  <input type="number" name="discountPrice" value="${
                    product.discountPrice
                  }" id="discountPrice" />
                </div>
              </div>
            </li>
            <li>
              <label for="image">${
                modalMessage.IMAGE
              } <span class="form-required">*</span></label>
              <input type="text" name="image" value="${
                product.image
              }" id="image" />
              <input type="file" name="image-file" id="image-file" />
            </li>
            <li>
              <label for="brand">${
                modalMessage.BRAND
              } <span class="form-required">*</span></label>
              <input type="text" name="brand" value="${
                product.brand
              }" id="brand" />
            </li>
            <li>
              <label for="countInStock">${
                modalMessage.COUNT_IN_STOCK
              } <span class="form-required">*</span></label>
              <input type="number" name="countInStock" value="${
                product.countInStock
              }" id="countInStock" />
            </li>
            <li>
              <label for="category">${
                modalMessage.CATEGORY
              } <span class="form-required">*</span></label>
              <input type="text" name="category" value="${
                product.category
              }" id="category" />
            </li>
            <li>
              <label for="description">${
                modalMessage.DESCRIPTION
              } <span class="form-required">*</span></label>
              <textarea rows="10" name="description" id="description">${
                product.description
              }</textarea>
            </li>
            <li>
              <button type="submit" class="cta-button primary">${
                modalMessage.UPDATE
              } <i class="fa fa-send"></i></button>
            </li>
          </ul>
        </form>
      </div>
    </div>
    <hr />
    <button id="back-to-products" class="primary">
    <i class="fa fa-angle-double-left"></i> ${
      modalMessage.BACK_DASHBOARD_PRODUCTS
    }
    </button>
</div>
</div>`;
  },
};
export default ProductEditScreen;
