import DashboardMenu from "../../../components/DashboardMenu";
import { deleteProduct } from "../../../api";
import { hideLoading, rerender, showLoading, showMessage } from "../../../utils";
import { getDashboardProducts } from "../../../api/dashboard/ApiProducts";
import { modalMessage } from '../../../config';

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
      deleteButton.addEventListener("click", async () => {
        if(confirm('Are you sure to delete this product?')) {
          showLoading();
          const data = await deleteProduct(deleteButton.id);
          if(data.error) {
            showMessage(data.error);
          } else {
            rerender(ProductListScreen);
          }
          hideLoading();
        }
      });
    });
  },
  render: async () => {
    const products = await getDashboardProducts();
    // TODO: Controll get response if there are error, redirect to message informations
    // if (orders.error) {
    //   document.location.hash = '/';
    // }
    return `
    <div class="dashboard">
    ${DashboardMenu.render({ selected: "products" })}
    <div class="dashboard-content">
      <div class="dashboard-box-title">
        <h1>${modalMessage.PRODUCTS}</h1>
        <button id="create-product-button" class="product-create-button primary">
        ${modalMessage.CREATE_PRODUCT} <i class="fa fa-angle-double-right"></i>
        </button>
      </div>
      <hr/>
      <div class="product-list">
        <table>
          <thead>
            <tr>
              <th>${modalMessage.ID_PRODUCT}</th>
              <th>${modalMessage.NAME_PRODUCT}</th>
              <th>${modalMessage.PRICE}</th>
              <th>${modalMessage.CATEGORY}</th>
              <th>${modalMessage.BRAND}</th>
              <th class="tr-action">${modalMessage.ACTIONS}</th>
            <tr>
          </thead>
          <tbody>
            ${products
              .map(
                (product) => `
            <tr>
              <td>${product._id}</td>
              <td>${product.name}</td>
              <td>${product.price} ${modalMessage.CURRENCY}</td>
              <td>${product.category}</td>
              <td>${product.brand}</td>
              <td>
              <button id="${product._id}" class="edit-product-button"><i class="fa fa-edit success"></i> ${modalMessage.EDIT}</button>
              <button id="${product._id}" class="delete-product-button"><i class="fa fa-trash error"></i> ${modalMessage.DELETE}</button>
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
