import { getCartItems } from "../localStorage";

const convertCartToOrder = () => {
    const orderItems = getCartItems();
    if (orderItems.length === 0) {

    }
}


const PlaceOrderScreen = {
    after_render: () => {},
    render: () => {

    }
}

export default PlaceOrderScreen;