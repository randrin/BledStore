const Checkout = {
    render: (props) => {
        return `
            <div class="checkout-steps">
                <div class="${props.step}"></div>
            </div>
        `
    }
}

export default Checkout;