import { signin } from "../api";
import { setUserInfos, getUserInfos } from "../localStorage";
import { showLoading } from "../utils";

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
        if (data.error) {
          alert(data.error);
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
            <form id="signin-form">
                <ul class="form-items">
                    <li>
                        <h1>Sign-In</h1>
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
                        <button type="submit" class="primary">Sign In</button>
                    </li>
                    <li>
                        <div>
                            New User? <b><a href="/#/register"> Create a new account</a></b>
                        </div>
                    </li>
                </ul>
            </form>
        </div>`;
  },
};

export default SigninScreen;
