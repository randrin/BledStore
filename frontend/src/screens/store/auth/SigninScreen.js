import { signin } from "../../../api/store/ApiAuth";
import { setUserInfos, getUserInfos } from "../../../localStorage";
import {
  hideLoading,
  redirectUser,
  showLoading,
  showMessage,
} from "../../../utils";
import { modalMessage } from "../../../config";

const SigninScreen = {
  after_render: () => {
    document
      .getElementById("signin-form")
      .addEventListener("submit", async (e) => {
        e.preventDefault();
        showLoading();
        const data = await signin({
          email: document.getElementById("email").value,
          password: document.getElementById("password").value,
        });
        hideLoading();
        if (data.error) {
          showMessage(data.error);
        } else {
          setUserInfos(data);
          redirectUser();
        }
      });
    const PASSWORD = "password";
    const TEXT = "text";

    const passwordIcon = document.querySelector(".preview_icon");
    const passwordField = document.querySelector(".password_input");
    const eyeIcon = document.querySelector(".show-hide-password");

    eyeIcon.classList.add("fa-eye");

    const togglePassword = () => {
      if (passwordField.type === PASSWORD) {
        passwordField.type = TEXT;

        eyeIcon.classList.remove("fa-eye");
        eyeIcon.classList.add("fa-eye-slash");
      } else {
        passwordField.type = PASSWORD;

        eyeIcon.classList.add("fa-eye");
        eyeIcon.classList.remove("fa-eye-slash");
      }
    };
    passwordIcon.addEventListener("click", togglePassword);
  },
  render: () => {
    if (getUserInfos().name) {
      redirectUser();
    }
    return `
        <div class="form-container">
            <form id="signin-form">
                <ul class="form-items">
                    <li>
                        <h1>${modalMessage.SIGN_IN}</h1>
                    </li>
                    <li>
                        <label for="email">${modalMessage.EMAIL} <span class="form-required">*</span></label>
                        <input id="email" name="email" type="text" placeholder="${modalMessage.PLACEHOLDER_EMAIL}" required />
                    </li>
                    <li>
                        <label for="password">${modalMessage.PASSWORD} <span class="form-required">*</span></label>
                        <input id="password" name="password" type="password" class="password_input" placeholder="${modalMessage.PLACEHOLDER_PASSWORD}" required />
                        <span class="preview_icon">
                          <i class="show-hide-password fa"></i>
                        </span>
                    </li>
                    <li>
                        <button type="submit" class="primary">${modalMessage.SIGN_IN_BUTTON} <i class="fa fa-angle-double-right"></i></button>
                    </li>
                    <li>
                        <div class="form-account">
                        ${modalMessage.NEW_USER} <b><a href="/#/register"> ${modalMessage.CREATE_ACCOUNT}</a></b>
                        </div>
                    </li>
                </ul>
            </form>
        </div>`;
  },
};

export default SigninScreen;
