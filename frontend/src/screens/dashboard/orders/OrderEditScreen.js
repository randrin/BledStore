import moment from "moment";
import { getOrder } from "../../../api/store/ApiOrders";
import { getUserInfos } from "../../../localStorage";
import { deliverOrder } from "../../../api/dashboard/ApiOrders";
import {
  hideLoading,
  parseRequestUrl,
  rerender,
  showLoading,
  showMessage,
} from "../../../utils";

const OrderEditScreen = {
  after_render: () => {
    const request = parseRequestUrl();
    document
      .getElementById("deliver-order-button")
      .addEventListener("click", async () => {
        showLoading();
        await deliverOrder(request.id);
        hideLoading();
        showMessage("Order delivered successfully.");
        rerender(OrderEditScreen);
      });
  },
  render: async () => {
    const { name, isAdmin } = getUserInfos();
    const request = parseRequestUrl();
    const {
      _id,
      shipping,
      payment,
      orderItems,
      itemsPrice,
      shippingPrice,
      taxPrice,
      totalPrice,
      isDelivered,
      deliveredAt,
      isPaid,
      paidAt,
    } = await getOrder(request.id);
    if (!name) {
      document.location.hash = "/";
    }
    return `
      <div>
      <h1>Order ID:  ${_id}</h1>
      <hr />
        <div class="order">
          <div class="order-info">
            <div>
              <h2>Shipping</h2>
              <div>
              ${shipping.address}, ${shipping.city}, ${shipping.postalCode}, 
              ${shipping.country}
              </div>
              ${
                isDelivered
                  ? `<div class="success order-user-delivered">Delivered at ${moment(
                      deliveredAt
                    ).format("DD/MM/YYYY HH:mm:ss")}</div>`
                  : `<div class="error order-user-delivered">Not Delivered</div>`
              }
               
            </div>
            <div>
              <h2>Payment</h2>
              <div>
                Payment Method : ${payment.paymentMethod}
              </div>
              ${
                isPaid
                  ? `<div class="success order-user-paid">Paid at ${moment(paidAt).format(
                      "DD/MM/YYYY HH:mm:ss"
                    )}</div>`
                  : `<div class="error order-user-paid">Not Paid</div>`
              }
            </div>
            <div>
              <ul class="cart-list-container">
                <li>
                  <h2>Shopping Cart</h2>
                  <div>Price</div>
                </li>
                ${orderItems
                  .map(
                    (item) => `
                  <li>
                    <div class="cart-image">
                      <img src="${item.image}" alt="${item.name}" />
                    </div>
                    <div class="cart-name">
                      <div>
                        <a href="/#/product/${item.product}">${item.name} </a>
                      </div>
                      <div> Qty: ${item.qty} </div>
                    </div>
                    <div class="cart-price"> $${item.price}</div>
                  </li>
                  `
                  )
                  .join("\n")}
              </ul>
            </div>
          </div>
          <div class="order-action">
             <ul>
                  <li>
                    <h2>Order Summary</h2>
                   </li>
                   <li><div>Items</div><div>$${itemsPrice}</div></li>
                   <li><div>Shipping</div><div>$${shippingPrice}</div></li>
                   <li><div>Tax</div><div>$${taxPrice}</div></li>
                   <li class="total"><div>Order Total</div><div>$${totalPrice}</div></li> 
                   <li>
                    ${
                      isPaid && !isDelivered && isAdmin
                        ? `<button id="deliver-order-button" class="primary fw">Deliver Order</button>`
                        : `<span id="deliver-order-button"></span>`
                    }
                   </li>
              </ul>
          </div>
        </div>
      </div>
      `;
  },
};
export default OrderEditScreen;
