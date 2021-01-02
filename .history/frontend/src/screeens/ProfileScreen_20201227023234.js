import { update } from "../api";
import { setUserInfos, getUserInfos } from "../localStorage";
import { hideLoading, showLoading, showMessage } from "../utils";

const ProfileScreen = {
  after_render: () => {
      document.getElementById('logout-profile').addEventListener('click', () => {

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
    return `
        <div class="form-container">
            <form id="profile-form">
                <ul class="form-items">
                    <li>
                        <h1>User Profile</h1>
                    </li>
                    <li>
                        <label for="name">Name</label>
                        <input id="name" name="name" type="text" value="${name}" placeholder="Enter your name" />
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

export default ProfileScreen;
