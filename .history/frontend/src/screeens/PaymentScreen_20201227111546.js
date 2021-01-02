import Checkout from "../components/Checkout";
import { getUserInfos, getShippingInfos, setPaymentInfos } from "../localStorage";
import { hideLoading, showLoading } from "../utils";

const PaymentScreen = {
  after_render: () => {
    document
      .getElementById("payment-form")
      .addEventListener("submit", async (e) => {
        e.preventDefault();
        showLoading();
        setPaymentInfos({
          address: document.getElementById("address").value,
          city: document.getElementById("city").value,
          postalCode: document.getElementById("postalCode").value,
          country: document.getElementById("country").value
        });
        hideLoading();
        document.location.hash = "/payment";
      });
  },
  render: () => {
    const {name } = getUserInfos();
    if (!name) {
      document.location.hash = "/";
    }
    return `
    ${Checkout.render({step1: true, step2: true, step3: true})}
        <div class="form-container">
            <form id="payment-form">
                <ul class="form-items">
                    <li>
                        <h1>Payment Infos</h1>
                    </li>
                    <li>
                        <input id="paypal" name="paypal" type="checkbox" checked />
                    </li>
                    <li>
                        <label for="city">City</label>
                        <input id="city" name="city" type="text" value="${city}" placeholder="Enter your city" />
                    </li>
                    <li>
                        <label for="postalCode">Password</label>
                        <input id="postalCode" name="postalCode" type="text" value="${postalCode}" placeholder="Enter your postal code" />
                    </li>
                    <li>
                        <label for="country">Country</label>
                        <input id="country" name="country" type="text" value="${country}" placeholder="Enter your postal country" />
                    </li>
                    <li>
                        <button type="submit" class="primary">Continue</button>
                    </li>
                </ul>
            </form>
        </div>`;
  },
};

export default PaymentScreen;
