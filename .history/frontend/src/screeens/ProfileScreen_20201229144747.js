import { getMineOrders, update } from "../api";
import { setUserInfos, getUserInfos, clearUserInfos } from "../localStorage";
import { hideLoading, showLoading, showMessage } from "../utils";

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
        <li>
        <button type="button" id="logout-profile" >Sign Out</button>
      </li>        
      </ul>
    </form>
  </div>
    </div>
    <div class="profile-orders">
    <h2>Order History</h2>
    <hr/>
      <table>
        <thead>
          <tr>
            <th>ORDER ID</th>
            <th>DATE</th>
            <th>TOTAL</th>
            <th>PAID</th>
            <th>DELIVERED</th>
            <th>ACTIONS</th>
          </tr>
        </thead>
        <tbody>
          ${
            orders.length === 0
              ? `<tr><td colspan="6">No Order Found.</tr>`
              : orders
                  .map(
                    (order) => `
        <tr>
          <td>${order._id}</td>
          <td>${order.createdAt}</td>
          <td>${order.totalPrice}</td>
          <td>${order.paidAt ? `<span>${order.paidAt }</span>`: '<span class=">No</span>'}</td>
          <td>${order.deliveryAt || "No"}</td>
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
