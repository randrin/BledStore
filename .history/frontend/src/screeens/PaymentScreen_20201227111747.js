import Checkout from "../components/Checkout";
import {
  getUserInfos,
  getShippingInfos,
  setPaymentInfos,
} from "../localStorage";
import { hideLoading, showLoading } from "../utils";

const PaymentScreen = {
  after_render: () => {
    document
      .getElementById("payment-form")
      .addEventListener("submit", async (e) => {
        e.preventDefault();
        showLoading();
        const paymentMethods = document.querySelector('input[type="radio"]').value;
        setPaymentInfos({paymentMethods
        });
        hideLoading();
        document.location.hash = "/payment";
      });
  },
  render: () => {
    const { name } = getUserInfos();
    if (!name) {
      document.location.hash = "/";
    }
    return `
    ${Checkout.render({ step1: true, step2: true, step3: true })}
        <div class="form-container">
            <form id="payment-form">
                <ul class="form-items">
                    <li>
                        <h1>Payment Infos</h1>
                    </li>
                    <li>
                    <div>
                      <input type="radio"
                      name="payment-method"
                      id="paypal"
                      value="Paypal"
                      checked />
                      <label for="paypal" >PayPal</label>
                     </div> 
                  </li>
                  <li>
                  <div>
                    <input type="radio"
                    name="payment-method"
                    id="stripe"
                    value="Stripe"
                     />
                    <label for="stripe" >Stripe</label>
                   </div> 
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
