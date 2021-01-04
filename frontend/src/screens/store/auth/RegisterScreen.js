import { register } from "../../../api";
import { setUserInfos, getUserInfos } from "../../../localStorage";
import {
  hideLoading,
  redirectUser,
  showLoading,
  showMessage,
} from "../../../utils";
import { modalMessage } from "../../../config";

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
      const PASSWORD = "password";
      const TEXT = "text";
  
      const passwordIcon = document.querySelector(".preview_icon");
      const confirmPasswordIcon = document.querySelector(".preview_icon_confirm");
      const passwordField = document.querySelector(".password_input");
      const confirmPasswordField = document.querySelector(".confirm_password_input");
      const eyeIcon = document.querySelector(".show-hide-password");
      const eyeIconConfirm = document.querySelector(".show-hide-password-confirm");
  
      eyeIcon.classList.add("fa-eye");
      eyeIconConfirm.classList.add("fa-eye");
  
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
      const togglePasswordConfirm = () => {
        if (confirmPasswordField.type === PASSWORD) {
          confirmPasswordField.type = TEXT;
  
          eyeIconConfirm.classList.remove("fa-eye");
          eyeIconConfirm.classList.add("fa-eye-slash");
        } else {
          confirmPasswordField.type = PASSWORD;
  
          eyeIconConfirm.classList.add("fa-eye");
          eyeIconConfirm.classList.remove("fa-eye-slash");
        }
      };
      passwordIcon.addEventListener("click", togglePassword);
      confirmPasswordIcon.addEventListener("click", togglePasswordConfirm);
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
                        <h1>${modalMessage.SIGN_UP}</h1>
                    </li>
                    <li>
                        <label for="name">${modalMessage.FULLNAME} <span class="form-required">*</span></label>
                        <input id="name" name="name" type="text" placeholder=${modalMessage.PLACEHOLDER_FULLNAME} required />
                    </li>
                    <li>
                        <label for="email">${modalMessage.EMAIL} <span class="form-required">*</span></label>
                        <input id="email" name="email" type="text" placeholder=${modalMessage.PLACEHOLDER_EMAIL} required />
                    </li>
                    <li>
                        <label for="password">${modalMessage.PASSWORD} <span class="form-required">*</span></label>
                        <input id="password" name="password" type="password" class="password_input" placeholder=${modalMessage.PLACEHOLDER_PASSWORD} required />
                        <span class="preview_icon">
                          <i class="show-hide-password fa"></i>
                        </span>
                    </li>
                    <li>
                        <label for="confirm-password">${modalMessage.CONFIRM_PASSWORD} <span class="form-required">*</span></label>
                        <input id="confirm-password" name="confirm-password" type="password" class="confirm_password_input" placeholder=${modalMessage.PLACEHOLDER_CONFIRM_PASSWORD} required />
                        <span class="preview_icon_confirm">
                          <i class="show-hide-password-confirm fa"></i>
                        </span>
                    </li>
                    <li>
                        <button type="submit" class="primary">${modalMessage.REGISTER} <i class="fa fa-angle-double-right"></i></button>
                    </li>
                    <li>
                        <div class="form-account">
                        ${modalMessage.ACCOUNT_ALREADY} <b><a href="/#/signin"> ${modalMessage.LOGIN}</a></b>
                        </div>
                    </li>
                </ul>
            </form>
        </div>`;
  },
};

export default RegisterScreen;
