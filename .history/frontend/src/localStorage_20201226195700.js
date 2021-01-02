export const getCartItems = () => {
    const cartItems = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : [];
    return cartItems;
}

export const setCartItems = (cartItems) => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems))
}

export const setUserInfos = ({
    _id = '',
    email = '',
    password = '',
    name = '',
    isAdmin = '',
    token = ''
}) => {
    localStorage.setItem('userInfos', JSON.stringify(_id, email, password, name, isAdmin, token))
}

export default getUserInfos = () => {
    return localStorage.getItem('userInfos') ? localStorage.getItem('userInfos') : 
}