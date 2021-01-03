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
    GO_SHOPPING: 'Go Shopping'
}