/* eslint-disable no-restricted-globals */
import DashboardMenu from "../../../components/DashboardMenu";
import { deleteProduct } from "../../../api";
import { hideLoading, rerender, showLoading, showMessage } from "../../../utils";
import { getOrders } from "../../../api/dashboard/ApiOrders";

const OrderListScreen = {
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
    const products = await getOrders();
    return `
    <div class="dashboard">
    ${DashboardMenu.render({ selected: "orders" })}
    <div class="dashboard-content">
      <div class="dashboard-box-title">
        <h1>Orders</h1>
      </div>
      <hr/>
      <div class="product-list">
        <table>
          <thead>
            <tr>
            <th>ID</th>
            <th>DATE</th>
            <th>TOTAL</th>
            <th>USER</th>
            <th>PAID AT</th>
            <th>DELIVERED AT</th>
            <th class="tr-action">ACTION</th>
            <tr>
          </thead>
          <tbody>
            ${orders
              .map(
                (order) => `
            <tr>
              <td>${order._id}</td>
              <td>${order.name}</td>
              <td>${order.price}</td>
              <td>${order.category}</td>
              <td>${order.brand}</td>
              <td>
              <button id="${order._id}" class="edit-product-button"><i class="fa fa-edit success"></i> Edit</button>
              <button id="${order._id}" class="delete-product-button"><i class="fa fa-trash error"></i> Delete</button>
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
export default OrderListScreen;