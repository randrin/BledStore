export const apiUrl = document.location.href.startsWith('http://localhost')
  ? 'http://localhost:5000'
  : '';

export const endPoint = {
    HOME: '/',
    DASHBOARD: '/dashboard'
}

export const modalMessage = {
    PASSWORD_AMD_CONFIRM: 'Password and Confirmation Password are differents. Try again.',
    ORDER_NOT_FOUND: 'Orders not found.',
    GO_SHOPPING: 'Go Shopping',
    SIGN_IN: 'Sign In',
    SIGN_UP: 'Sign Up',
    EMAIL: 'Email Address',
    PLACEHOLDER_EMAIL: 'Enter your address email',
    PASSWORD: 'Password',
    CONFIRM_PASSWORD: 'Confirmation Password',
    PLACEHOLDER_PASSWORD: 'Enter your password',
    PLACEHOLDER_CONFIRM_PASSWORD: 'Confirm your password',
    SIGN_IN_BUTTON: 'Enter',
    NEW_USER: 'New User?',
    CREATE_ACCOUNT: 'Create a new account',
    REGISTER: 'Register',
    LOGIN: 'Login',
    ACCOUNT_ALREADY: 'Already have an account?',
    FULLNAME: 'Full Name',
    PLACEHOLDER_FULLNAME: 'Enter your fullname'
}