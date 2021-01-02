/* eslint-disable no-restricted-globals */
import DashboardMenu from "../components/DashboardMenu";
import { getProducts } from "../api";
import { hideLoading, showLoading, showMessage } from "../utils";

const ProductListScreen = {
  after_render: async () => {
    document
      .getElementById("create-product-button")
      .addEventListener("click", async () => {
        document.location.hash = "/dashboard-create-product";
      });
    const editButtons = document.getElementsByClassName("edit-product-button");
    Array.from(editButtons).forEach((editButton) => {
      editButton.addEventListener("click", () => {
        document.location.hash = `/product/${editButton.id}/edit`;
      });
    });
    const deleteButtons = document.getElementsByClassName("delete-product-button");
    Array.from(deleteButtons).forEach((deleteButton) => {
      editButton.addEventListener("click", async () => {
        if(confirm('Are you sure to delete this product?')) {
          showLoading();
          const data = await deleteProduct(deleteButton.id);
          if(data.error) {
            showMessage(data.error);
          } else {
            
          }
          hideLoading();
        }
      });
    });
  },
  render: async () => {
    const products = await getProducts();
    return `
    <div class="dashboard">
    ${DashboardMenu.render({ selected: "products" })}
    <div class="dashboard-content">
      <div class="dashboard-box-title">
        <h1>Products</h1>
        <button id="create-product-button" class="product-create-button primary">
            Create Product
        </button>
      </div>
      <hr/>
      <div class="product-list">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>NAME</th>
              <th>PRICE</th>
              <th>CATEGORY</th>
              <th>BRAND</th>
              <th class="tr-action">ACTION</th>
            <tr>
          </thead>
          <tbody>
            ${products
              .map(
                (product) => `
            <tr>
              <td>${product._id}</td>
              <td>${product.name}</td>
              <td>${product.price}</td>
              <td>${product.category}</td>
              <td>${product.brand}</td>
              <td>
              <button id="${product._id}" class="edit-product-button"><i class="fa fa-edit success"></i> Edit</button>
              <button id="${product._id}" class="delete-product-button"><i class="fa fa-trash error"></i> Delete</button>
              </td>
            </tr>
            `
              )
              .join("\n")}
          </tbody>
        </table>
      </div>
    </div>
  </div>
    `;
  },
};
export default ProductListScreen;
