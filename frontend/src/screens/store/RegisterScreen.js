import { register } from "../../api";
import { setUserInfos, getUserInfos } from "../../localStorage";
import {
  hideLoading,
  redirectUser,
  showLoading,
  showMessage,
} from "../../utils";
import { modalMessage } from "../../config";

const RegisterScreen = {
  after_render: () => {
    document
      .getElementById("register-form")
      .addEventListener("submit", async (e) => {
        e.preventDefault();
        showLoading();
        if (
          document.getElementById("password").value !==
          document.getElementById("confirm-password").value
        ) {
          showMessage(modalMessage.PASSWORD_AMD_CONFIRM);
        } else {
          const data = await register({
            email: document.getElementById("email").value,
            password: document.getElementById("password").value,
            name: document.getElementById("name").value,
            confirmPassword: document.getElementById("confirm-password").value,
          });
          if (data.error) {
            showMessage(data.error);
          } else {
            setUserInfos(data);
            redirectUser();
          }
        }
        hideLoading();
      });
  },
  render: () => {
    if (getUserInfos().name) {
      redirectUser();
    }
    return `
        <div class="form-container">
            <form id="register-form">
                <ul class="form-items">
                    <li>
                        <h1>Sign Up</h1>
                    </li>
                    <li>
                        <label for="name">Name</label>
                        <input id="name" name="name" type="text" placeholder="Enter your name" required />
                    </li>
                    <li>
                        <label for="email">Email</label>
                        <input id="email" name="email" type="text" placeholder="Enter your email" required />
                    </li>
                    <li>
                        <label for="password">Password</label>
                        <input id="password" name="password" type="password" placeholder="Enter your password" required />
                    </li>
                    <li>
                        <label for="confirm-password">Confirm Password</label>
                        <input id="confirm-password" name="confirm-password" type="password" placeholder="Confirm your name" required />
                    </li>
                    <li>
                        <button type="submit" class="primary">Register</button>
                    </li>
                    <li>
                        <div class="form-account">
                            Already have an account? <b><a href="/#/signin"> Login</a></b>
                        </div>
                    </li>
                </ul>
            </form>
        </div>`;
  },
};

export default RegisterScreen;
