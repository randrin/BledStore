import DashboardMenu from "../../../components/DashboardMenu";
import { deleteProduct } from "../../../api";
import { hideLoading, rerender, showLoading, showMessage } from "../../../utils";
import { getOrders } from "../../../api/dashboard/ApiOrders";

const OrderListScreen = {
  after_render: async () => {
    const editButtons = document.getElementsByClassName("edit-order-button");
    Array.from(editButtons).forEach((editButton) => {
      editButton.addEventListener("click", () => {
        document.location.hash = `/product/${editButton.id}/edit`;
      });
    });
    const deleteButtons = document.getElementsByClassName("delete-order-button");
    Array.from(deleteButtons).forEach((deleteButton) => {
      deleteButton.addEventListener("click", async () => {
        if(confirm('Are you sure to delete this order?')) {
          showLoading();
          const data = await deleteProduct(deleteButton.id);
          if(data.error) {
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
    const orders = await getOrders();
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
              <td>${order.createdAt}</td>
              <td>${order.totalPrice}</td>
              <td>${order.user.name}</td>
              <td>${order.paidAt || 'No'}</td>
              <td>${order.deliveredAt || 'No'}</td>
              <td>
              <button id="${order._id}" class="edit-order-button"><i class="fa fa-edit success"></i> Edit</button>
              <button id="${order._id}" class="delete-order-button"><i class="fa fa-trash error"></i> Delete</button>
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
