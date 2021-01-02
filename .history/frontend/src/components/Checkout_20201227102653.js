const Checkout = {
    render: (props) => {
        return `
            <div class="checkout-steps">
                <div class="${props.step1 ? 'active' : ''}">Sign In</div>
                <div class="${props.step2 ? 'active' : ''}">Schipping Address</div>
                <div class="${props.step3 ? 'active' : ''}">Payment</div>
                <div class="${props.step4 ? 'active' : ''}">Place Order</div>
            </div>
        `
    }
}

export default Checkout;