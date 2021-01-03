import { getMineOrders, update } from "../../api";
import { setUserInfos, getUserInfos, clearUserInfos } from "../../localStorage";
import { hideLoading, showLoading, showMessage } from "../../utils";
import moment from "moment";
import { modalMessage } from "../../config";

const ProfileScreen = {
  after_render: () => {
    document.getElementById("logout-profile").addEventListener("click", () => {
      clearUserInfos();
      document.location.hash = "/";
    });
    document
      .getElementById("profile-form")
      .addEventListener("submit", async (e) => {
        e.preventDefault();
        showLoading();
        const data = await update({
          email: document.getElementById("email").value,
          password: document.getElementById("password").value,
          name: document.getElementById("name").value,
        });
        hideLoading();
        if (data.error) {
          showMessage(data.error);
        } else {
          setUserInfos(data);
          document.location.hash = "/";
        }
      });
  },
  render: async () => {
    const { email, name } = getUserInfos();
    if (!name) {
      document.location.hash = "/";
    }
    const orders = await getMineOrders();
    hideLoading();
    return `
    <div class="content profile">
    <div class="profile-info">
    <div class="form-container">
    <form id="profile-form">
      <ul class="form-items">
        <li>
          <h1>User Profile</h1>
        </li>
        <li>
          <label for="name">Name</label>
          <input type="name" name="name" id="name" value="${name}" />
        </li>
        <li>
          <label for="email">Email</label>
          <input type="email" name="email" id="email" value="${email}" />
        </li>
        <li>
          <label for="password">Password</label>
          <input type="password" name="password" id="password" />
        </li>
        <li>
          <button type="submit" class="primary">Update</button>
        </li>      
      </ul>
      <ul class="form-items">
        <li>
          <button type="button" id="logout-profile">Sign Out <i class="fa fa-power-off"></i></button>
        </li>
      </ul>
    </form>
   
  </div>
    </div>
    <div class="profile-orders">
    <h2>Orders History</h2>
    <hr/>
      <table>
        <thead>
          <tr>
            <th>ORDER ID</th>
            <th>DATE (dd/MM/yyyy HH:mm:ss)</th>
            <th>TOTAL</th>
            <th>PAID</th>
            <th>DELIVERED</th>
            <th>ACTIONS</th>
          </tr>
        </thead>
        <tbody>
          ${
            orders.length === 0
              ? `<tr>
                    <td colspan="6" class="profile-order-not-found">
                    <div class="profile-order-not-found-actions">
                      <span class="profile-order-not-found-icon"><i class="fa fa-frown-o"></i></span>
                      <h2>${modalMessage.ORDER_NOT_FOUND}</h2>
                      <a href="/#/">${modalMessage.GO_SHOPPING} <i class="fa fa-angle-right"></i></a>
                    </div>
                    </td>
                  </tr>`
              : orders
                  .map(
                    (order) => `
        <tr>
          <td>${order._id}</td>
          <td>${moment(order.createdAt).format("DD/MM/YYYY HH:mm:ss")}</td>
          <td>${order.totalPrice} €</td>
          <td>${
            order.paidAt
              ? `<span class="success font-bold">${moment(order.paidAt).format(
                  "DD/MM/YYYY HH:mm:ss"
                )}</span>`
              : `<span class="error font-bold">No</span>`
          }</td>
          <td>${
            order.deliveryAt
              ? `<span class="success font-bold">${moment(
                  order.deliveryAt
                ).format("DD/MM/YYYY HH:mm:ss")}</span>`
              : `<span class="error font-bold">No</span>`
          }</td>
          <td><a href="/#/order/${order._id}">DETIALS</a> </td>
        </tr>
        `
                  )
                  .join("\n")
          }
        </tbody>
      </table>
    </div>
  </div>
  
  `;
  },
};

export default ProfileScreen;
