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
    if (!payment.address) {
        document.location.hash = '/cart';
    }
}


const PlaceOrderScreen = {
    after_render: () => {},
    render: () => {

    }
}

export default PlaceOrderScreen;