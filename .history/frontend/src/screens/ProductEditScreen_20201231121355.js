import { hideLoading, parseRequestUrl, showLoading } from "../utils";
import { getProduct, productUpdate, uploadProductImage } from "../api";
import DashboardMenu from "../components/DashboardMenu";

const ProductEditScreen = {
  after_render: async () => {
    const request = parseRequestUrl();
    document
    .getElementById("back-to-products")
    .addEventListener("click", async () => {
      document.location.hash = `/dashboard/products`;
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
        document.location.hash = `//dashboard/products`;
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
              <label for="name">Name</label>
              <input type="text" name="name" value="${
                product.name
              }" id="name" />
            </li>
            <li>
              <label for="price">Price</label>
              <input type="number" name="price" value="${
                product.price
              }" id="price" />
            </li>
            <li>
              <label for="image">Image (680 x 830)</label>
              <input type="text" name="image" value="${
                product.image
              }" id="image" />
              <input type="file" name="image-file" id="image-file" />
            </li>
            <li>
              <label for="brand">Brand</label>
              <input type="text" name="brand" value="${
                product.brand
              }" id="brand" />
            </li>
            <li>
              <label for="countInStock">Count In Stock</label>
              <input type="number" name="countInStock" value="${
                product.countInStock
              }" id="countInStock" />
            </li>
            <li>
              <label for="category">Category</label>
              <input type="text" name="category" value="${
                product.category
              }" id="category" />
            </li>
            <li>
              <label for="description">Description</label>
              <textarea rows="10" name="description" id="description">${
                product.description}</textarea>
            </li>
            <li>
              <button type="submit" class="cta-button primary">Update</button>
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
export default ProductEditScreen;
