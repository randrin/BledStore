import { createProduct } from "../api";
import DashboardMenu from "../components/DashboardMenu";

const ProductCreateScreen = {
  after_render: () => {
    document
    .getElementById("back-to-products")
    .addEventListener("click", async () => {
      document.location.hash = `/productlist`;
    });
    document
    .getElementById("create-product-form")
    .addEventListener("submit", async (e) => {
      e.preventDefault();
      showLoading();
      const data = await createProduct({
        name: document.getElementById("name").value,
        password: document.getElementById("password").value,
        email: document.getElementById("email").value,
        password: document.getElementById("password").value,
      });
      hideLoading();
      if (data.error) {
        showMessage(data.error);
      } else {
        setUserInfos(data);
        redirectUser();
      }
    });
  },
  render: () => {
    return `
    <div class="dashboard">
            ${DashboardMenu.render({ selected: "products" })}
            <div class="dashboard-content">
            <h1>New Product</h1>
            <button id="back-to-products" class="primary">
                Back to Products List
            </button>
            <div class="product-list">
                <div class="form-container">
                    <form id="create-product-form">
                        <ul class="form-items">
                        <li>
                            <label for="name">Name</label>
                            <input type="text" name="name" id="name" />
                        </li>
                        <li>
                            <label for="price">Price</label>
                            <input type="number" name="price" id="price" />
                        </li>
                        <li>
                            <label for="image">Image (680 x 830)</label>
                            <input type="text" name="image" id="image" />
                        </li>
                        <li>
                            <label for="brand">Brand</label>
                            <input type="text" name="brand" id="brand" />
                        </li>
                        <li>
                            <label for="countInStock">Count In Stock</label>
                            <input type="text" name="countInStock" id="countInStock" />
                        </li>
                        <li>
                            <label for="category">Category</label>
                            <input type="text" name="category" id="category" />
                        </li>
                        <li>
                            <label for="description">Description</label>
                            <input type="text" name="description" id="description" />
                        </li>
                        <li>
                            <button type="submit" class="primary">Create</button>
                        </li>
                        </ul>
                    </form>
                </div>
            </div>
        </div>
    </div>`;
  },
};
export default ProductCreateScreen;
