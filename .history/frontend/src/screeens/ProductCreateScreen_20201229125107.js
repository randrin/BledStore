import DashboardMenu from "../components/DashboardMenu";

const ProductCreateScreen = {
  after_render: () => {},
  render: () => {
    return `<div class="dashboard">
        ${DashboardMenu.render({ selected: "products" })}
        <div class="dashboard-content">
          <h1>New Product</h1>
          <button id="create-product-button" class="primary">
            Back to Products List
          </button>
          <div class="product-list">
          <div class="form-container">
          <form id="edit-product-form">
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
                <button type="submit" class="primary">Update</button>
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
