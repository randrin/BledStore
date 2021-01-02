import { register } from "../api";
import { setUserInfos, getUserInfos } from "../localStorage";
import { hideLoading, showLoading, showMessage } from "../utils";

const RegisterScreen = {
  after_render: () => {
    document
      .getElementById("register-form")
      .addEventListener("submit", async (e) => {
        e.preventDefault();
        showLoading();
        const data = await register({
          email: document.getElementById("email").value,
          password: document.getElementById("password").value,
          name: document.getElementById("email").value,
          confir: document.getElementById("password").value,
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
    if (getUserInfos().name) {
      document.location.hash = "/";
    }
    return `
        <div class="form-container">
            <form id="register-form">
                <ul class="form-items">
                    <li>
                        <h1>Sign-In</h1>
                    </li>
                    <li>
                        <label for="email">NAme</label>
                        <input id="name" name="name" type="text" />
                    </li>
                    <li>
                        <label for="email">Email</label>
                        <input id="email" name="email" type="text" />
                    </li>
                    <li>
                        <label for="password">Password</label>
                        <input id="password" name="password" type="password" />
                    </li>
                    <li>
                        <label for="confirm-password">Confirm Password</label>
                        <input id="confirm-password" name="confirm-password" type="password" />
                    </li>
                    <li>
                        <button type="submit" class="primary">Register</button>
                    </li>
                    <li>
                        <div>
                            Already have an account User? <b><a href="/#/signin"> Login</a></b>
                        </div>
                    </li>
                </ul>
            </form>
        </div>`;
  },
};

export default RegisterScreen;
