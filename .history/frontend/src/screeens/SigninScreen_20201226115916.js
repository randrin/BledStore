const SigninScreen = () => {
    after_render: () => {},
    render: () => {
        return `
        <div class="form-container">
            <div class="signin-form">
                <ul class="form-items">
                    <li>
                        <h1>Sign-In</h1>
                    </li>
                    <li>
                        <label for="email">Email</label>
                        <input id="email" name="email" />
                    </li>
                </ul>
            </div>
        </div>`
    }
}