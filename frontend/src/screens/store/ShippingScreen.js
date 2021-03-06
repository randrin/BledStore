import Checkout from "../../components/Checkout";
import { getUserInfos, getShippingInfos, setShippingInfos } from "../../localStorage";
import { hideLoading, showLoading } from "../../utils";

const ShippingScreen = {
  after_render: () => {
    document
      .getElementById("shipping-form")
      .addEventListener("submit", async (e) => {
        e.preventDefault();
        showLoading();
        setShippingInfos({
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
      const { name } = getUserInfos();
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
                        <h1>Shipping Infos</h1>
                    </li>
                    <li>
                        <label for="address">Address</label>
                        <input id="address" name="address" type="text" value="${address}" placeholder="Enter your address" />
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
                        <button type="submit" class="primary">Continue <i class="fa fa-angle-double-right"></i></button></button>
                    </li>
                </ul>
            </form>
        </div>`;
  },
};

export default ShippingScreen;
