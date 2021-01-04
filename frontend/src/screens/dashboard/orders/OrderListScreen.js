import DashboardMenu from "../../../components/DashboardMenu";
import { deleteProduct } from "../../../api";
import {
  hideLoading,
  rerender,
  showLoading,
  showMessage,
} from "../../../utils";
import { getDashboardOrders } from "../../../api/dashboard/ApiOrders";
import moment from "moment";
import { modalMessage } from "../../../config";

const OrderListScreen = {
  after_render: async () => {
    const editButtons = document.getElementsByClassName("edit-order-button");
    Array.from(editButtons).forEach((editButton) => {
      editButton.addEventListener("click", () => {
        document.location.hash = `/order/${editButton.id}/edit`;
      });
    });
    const deleteButtons = document.getElementsByClassName(
      "delete-order-button"
    );
    Array.from(deleteButtons).forEach((deleteButton) => {
      deleteButton.addEventListener("click", async () => {
        if (confirm("Are you sure to delete this order?")) {
          showLoading();
          const data = await deleteProduct(deleteButton.id);
          if (data.error) {
            showMessage(data.error);
          } else {
            rerender(OrderListScreen);
          }
          hideLoading();
        }
      });
    });
  },
  render: async () => {
    const orders = await getDashboardOrders();
    // TODO: Controll get reponse if there are error, redirect to message informations
    // if (orders.error) {
    //   document.location.hash = '/';
    // }
    return `
    <div class="dashboard">
    ${DashboardMenu.render({ selected: "orders" })}
    <div class="dashboard-content">
      <div class="dashboard-box-title">
        <h1>Orders</h1>
      </div>
      <hr/>
      <div class="order-list">
        <table>
          <thead>
            <tr>
            <th>${modalMessage.ID_ORDER}</th>
            <th>${modalMessage.DATE}</th>
            <th>${modalMessage.TOTAl}</th>
            <th>${modalMessage.USER}</th>
            <th>${modalMessage.PAID_AT}</th>
            <th>${modalMessage.DELIVERED_AT}</th>
            <th class="tr-action">${modalMessage.ACTIONS}</th>
            <tr>
          </thead>
          <tbody>
            ${orders
              .map(
                (order) => `
            <tr>
              <td>${order._id}</td>
              <td>${moment(order.createdAt).format("DD/MM/YYYY")}</td>
              <td>${order.totalPrice} €</td>
              <td>${order.user.name} <br/><span class="order-user-email">${
                  order.user.email
                }</span></td>
              <td>${
                order.paidAt
                  ? `<span class="success font-bold">${moment(
                      order.paidAt
                    ).format("DD/MM/YYYY HH:mm:ss")}</span>`
                  : `<span class="error font-bold">${modalMessage.NO}</span>`
              }
              </td>
              <td>${
                order.deliveredAt
                  ? `<span class="success font-bold">${moment(
                      order.deliveredAt
                    ).format("DD/MM/YYYY HH:mm:ss")}</span>`
                  : `<span class="error font-bold">${modalMessage.NO}</span>`
              }
              </td>
              <td>
                <button id="${
                  order._id
                }" class="edit-order-button"><i class="fa fa-edit success"></i> ${
                  modalMessage.EDIT
                }</button>
                <button id="${
                  order._id
                }" class="delete-order-button"><i class="fa fa-trash error"></i> ${
                  modalMessage.DELETE
                }</button>
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
