import { productCreate } from "../api";
import DashboardMenu from "../components/DashboardMenu";
import { hideLoading, showLoading } from "../utils";

const ProductCreateScreen = {
  after_render: async () => {
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
        document.location.hash = `/productlist`;
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
                            <label for="name">Name</label>
                            <input type="text" name="name" id="name" placeholder="Insert the product name" />
                        </li>
                        <li>
                            <label for="price">Price</label>
                            <input type="number" name="price" id="price" placeholder="Insert the product price" />
                        </li>
                        <li>
                            <label for="image">Image (680 x 830)</label>
                            <input type="text" name="image" id="image" placeholder="Select the product image" />
                        </li>
                        <li>
                            <label for="brand">Brand</label>
                            <input type="text" name="brand" id="brand" placeholder="Insert the product brand" />
                        </li>
                        <li>
                            <label for="countInStock">Count In Stock</label>
                            <input type="number" name="countInStock" id="countInStock" />
                        </li>
                        <li>
                            <label for="category">Category</label>
                            <input type="text" name="category" id="category" placeholder="Insert the product name" />
                        </li>
                        <li>
                            <label for="description">Description</label>
                            <textarea rows="10" name="description" id="description"></textarea>
                        </li>
                        <li>
                            <button type="submit" class="cta-button primary">Create</button>
                        </li>
                        </ul>
                    </form>
                </div>
            </div>
            <hr />
            <button id="back-to-products" class="primary">
                Back to Products List
            </button>
        </div>
    </div>`;
  },
};
export default ProductCreateScreen;
