import { update } from "../api";
import Checkout from "../components/Checkout";
import { setUserInfos, getUserInfos, clearUserInfos, getShippingInfos } from "../localStorage";
import { hideLoading, showLoading, showMessage } from "../utils";

const ShippingScreen = {
  after_render: () => {
      document.getElementById('logout-profile').addEventListener('click', () => {
        clearUserInfos();
        document.location.hash = '/';
      });
    document
      .getElementById("profile-form")
      .addEventListener("submit", async (e) => {
        e.preventDefault();
        showLoading();
        const data = await update({
          email: document.getElementById("email").value,
          password: document.getElementById("password").value,
          name: document.getElementById("name").value
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
  render: () => {
      const {email, name } = getUserInfos();
    if (!name) {
      document.location.hash = "/";
    }
    const {address, city, postalCode, country } = getShippingInfos();
    return `
    ${Checkout.render({step1: true, step2: true})}
        <div class="form-container">
            <form id="shipping-form">
                <ul class="form-items">
                    <li>
                        <h1>User Profile</h1>
                    </li>
                    <li>
                        <label for="address">Address</label>
                        <input id="address" name="name" type="text" value="${name}" placeholder="Enter your name" />
                    </li>
                    <li>
                        <label for="email">Email</label>
                        <input id="email" name="email" type="text" value="${email}" placeholder="Enter your email" />
                    </li>
                    <li>
                        <label for="password">Password</label>
                        <input id="password" name="password" type="password" placeholder="Enter your password" />
                    </li>
                    <li>
                        <button type="submit" class="primary">Update</button>
                    </li>
                    <li>
                        <button type="button" id="logout-profile">Logout</button>
                    </li>
                </ul>
            </form>
        </div>`;
  },
};

export default ShippingScreen;
