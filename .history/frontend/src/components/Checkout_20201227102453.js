const Checkout = {
    render: (props) => {
        return `
            <div class="checkout-steps">
                <div class="${props.step1 ?}"></div>
            </div>
        `
    }
}

export default Checkout;