import { getCartItems, getPaymentInfos, getShippingInfos } from "../localStorage";

const convertCartToOrder = () => {
    const orderItems = getCartItems();
    if (orderItems.length === 0) {
        document.location.hash = '/cart';
    }
    const shipping = getShippingInfos();
    if (!shipping.address) {
        document.location.hash = '/cart';
    }
    const payment = getPaymentInfos();
    if (!payment.paymentMethod) {
        document.location.hash = '/payment';
    }
    const itemsPrice = orderItems.reduce((a, c) => a + c.price * c.qty, 0);
    const shippingPrice = itemsPrice > 100 ? 0 : 10;
    const taxPrice = Math.round(0.15 * itemsPrice) / 100;
    const totalPrice = itemsPrice + shippingPrice + taxPrice;

    return {
        totalPrice, itemsPrice, shiippingPrice, taxPrice, orderItems, shipping
    }
}


const PlaceOrderScreen = {
    after_render: () => {},
    render: () => {

    }
}

export default PlaceOrderScreen;