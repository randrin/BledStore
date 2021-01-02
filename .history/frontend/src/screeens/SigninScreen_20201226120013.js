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
                        <input id="email" name="email" type="text" />
                    </li>
                    <li>
                        <label for="password">Password</label>
                        <input id="password" name="password" type="password" />
                    </li>
                    <li>
                        <button type="su">Sign In</button>
                    </li>
                </ul>
            </div>
        </div>`
    }
}