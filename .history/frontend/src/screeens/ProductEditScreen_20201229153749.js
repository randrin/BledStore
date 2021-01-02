import { parseRequestUrl } from "../utils";
import { getProduct } from "../api";
import DashboardMenu from "../components/DashboardMenu";

const ProductEditScreen = {
  after_render: () => {},
  render: async () => {
    const request = parseRequestUrl();
    const product = await getProduct(request.id);
    return `
    ${DashboardMenu.render({ selected: "products" })}
    <div class="dashboard-content">
    <h1>New Product</h1>
    <hr />
    <div class="product-list">
      <div class="form-container">
        <form id="edit-product-form">
          <ul class="form-items">
            <li>
              <h1>Edit Product ${product._id.substring(0, 8)}</h1>
            </li>
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
            </li>
            <li>
              <label for="brand">Brand</label>
              <input type="text" name="brand" value="${
                product.brand
              }" id="brand" />
            </li>
            <li>
              <label for="countInStock">Count In Stock</label>
              <input type="text" name="countInStock" value="${
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
              <input type="text" name="description" value="${
                product.description
              }" id="description" />
            </li>
            <li>
              <button type="submit" class="primary">Update</button>
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
