import { productCreate, uploadProductImage } from "../../../api";
import DashboardMenu from "../../../components/DashboardMenu";
import { hideLoading, showLoading, showMessage } from "../../../utils";
import { modalMessage } from "../../../config";

const ProductCreateScreen = {
  after_render: async () => {
    document
      .getElementById("back-to-products")
      .addEventListener("click", async () => {
        document.location.hash = `/dashboard-products`;
      });
    document
      .getElementById("create-product-form")
      .addEventListener("submit", async (e) => {
        e.preventDefault();
        showLoading();
        const data = await productCreate({
          name: document.getElementById("name").value,
          price: document.getElementById("price").value,
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
      .getElementById('image-file')
      .addEventListener('change', async (e) => {
        const file = e.target.files[0];
        const formData = new FormData();
        formData.append('image', file);
        showLoading();
        const data = await uploadProductImage(formData);
        hideLoading();
        if (data.error) {
          showMessage(data.error);
        } else {
          showMessage('Image uploaded successfully.');
          document.getElementById('image').value = data.image;
        }
      });
  },
  render: () => {
    return `
    <div class="dashboard">
            ${DashboardMenu.render({ selected: "products" })}
            <div class="dashboard-content">
            <h1>New Product</h1>
            <hr />
            <div class="product-list">
                <div class="form-container">
                    <form id="create-product-form">
                        <ul class="form-items form-items-large">
                        <li>
                            <label for="name">${modalMessage.NAME_PRODUCT} <span class="form-required">*</span></label>
                            <input type="text" name="name" id="name" placeholder="Insert the product name" required />
                        </li>
                        <li>
                            <label for="price">${modalMessage.PRICE} <span class="form-required">*</span></label>
                            <input type="number" name="price" id="price" placeholder="Insert the product price" required />
                        </li>
                        <li>
                            <label for="image">${modalMessage.IMAGE} <span class="form-required">*</span></label>
                            <input type="text" name="image" id="image" placeholder="Select the product image" required />
                            <input type="file" name="image-file" id="image-file" />
                        </li>
                        <li>
                            <label for="brand">${modalMessage.BRAND} <span class="form-required">*</span></label>
                            <input type="text" name="brand" id="brand" placeholder="Insert the product brand" required />
                        </li>
                        <li>
                            <label for="countInStock">${modalMessage.COUNT_IN_STOCK} <span class="form-required">*</span></label>
                            <input type="number" name="countInStock" id="countInStock" placeholder="Insert the stock number product" required />
                        </li>
                        <li>
                            <label for="category">${modalMessage.CATEGORY} <span class="form-required">*</span></label>
                            <input type="text" name="category" id="category" placeholder="Insert the product category" required />
                        </li>
                        <li>
                            <label for="description">${modalMessage.DESCRIPTION} <span class="form-required">*</span></label>
                            <textarea rows="10" name="description" id="description" placeholder="Insert the product description" required></textarea>
                        </li>
                        <li>
                            <button type="submit" class="cta-button primary">${modalMessage.CREATE} <i class="fa fa-send"></i></button>
                        </li>
                        </ul>
                    </form>
                </div>
            </div>
            <hr />
            <button id="back-to-products" class="primary">
            <i class="fa fa-angle-double-left"></i> ${modalMessage.BACK_DASHBOARD_PRODUCTS}
            </button>
        </div>
    </div>`;
  },
};
export default ProductCreateScreen;
