import { getMineOrders, update } from "../../../api";
import {
  setUserInfos,
  getUserInfos,
  clearUserInfos,
} from "../../../localStorage";
import { hideLoading, showLoading, showMessage } from "../../../utils";
import moment from "moment";
import { modalMessage } from "../../../config";

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
    const { email, name, pseudo, createdAt, password } = getUserInfos();
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
        <li class="user-profile">
          <img src="./assets/images/default-avatar.png" alt="${name}" class="user-profile-img" />
          <h1>${pseudo}</h1>
          <span>${modalMessage.MEMBER_SINCE} ${moment(createdAt).format(
      modalMessage.FORMAT_DATE
    )}</span>
        </li>
        <li>
          <label for="name">${
            modalMessage.FULLNAME
          } <span class="form-required">*</span></label>
          <input type="name" name="name" id="name" value="${name}"  placeholder="${
      modalMessage.PLACEHOLDER_FULLNAME
    }" required disabled />
        </li>
        <li>
          <label for="email">${
            modalMessage.EMAIL
          } <span class="form-required">*</span></label>
          <input type="email" name="email" id="email" value="${email}"  placeholder="${
      modalMessage.PLACEHOLDER_EMAIL
    }" required disabled />
        </li>
        <li>
          <label for="password">${
            modalMessage.PASSWORD
          } <span class="form-required">*</span></label>
          <input type="password" name="password" id="password" value="${password.substring(0,16)}" placeholder="${
            modalMessage.PLACEHOLDER_PASSWORD
          }" required disabled />
        </li>
        <li>
          <button type="submit" class="primary disable-button"><i class="fa fa-user-circle-o"></i> ${
            modalMessage.UPDATE_PROFILE
          }</button>
        </li>      
      </ul>
      <ul class="form-items">
        <li>
          <button type="button" id="logout-profile">${
            modalMessage.SIGN_OUT
          } <i class="fa fa-power-off"></i></button>
        </li>
      </ul>
    </form>
   
  </div>
    </div>
    <div class="profile-orders">
    <h2>${modalMessage.ORDERS_HISTORY}</h2>
    <hr/>
      <table>
        <thead>
          <tr>
            <th>${modalMessage.ID_ORDER}</th>
            <th>${modalMessage.DATE}</th>
            <th>${modalMessage.TOTAl}</th>
            <th>${modalMessage.PAID_AT}</th>
            <th>${modalMessage.DELIVERED_AT}</th>
            <th>${modalMessage.ACTIONS}</th>
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
          <td>${moment(order.createdAt).format(
            modalMessage.FORMAT_FULL_DATE
          )}</td>
          <td>${order.totalPrice} ${modalMessage.CURRENCY}</td>
          <td>${
            order.paidAt
              ? `<span class="success font-bold">${moment(order.paidAt).format(
                  modalMessage.FORMAT_FULL_DATE
                )}</span>`
              : `<span class="error font-bold">${modalMessage.NO}</span>`
          }</td>
          <td>${
            order.deliveryAt
              ? `<span class="success font-bold">${moment(
                  order.deliveryAt
                ).format(modalMessage.FORMAT_FULL_DATE)}</span>`
              : `<span class="error font-bold">${modalMessage.NO}</span>`
          }</td>
          <td><a href="/#/order/${order._id}">${
                      modalMessage.PAID
                    } <i class="fa fa-angle-right"></a> </td>
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
