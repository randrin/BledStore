const Checkout = {
    render: (props) => {
        return `
            <div class="checkout-steps">
                <div class="${props.step1 ? 'active : ''}">Sign In</div>
            </div>
        `
    }
}

export default Checkout;