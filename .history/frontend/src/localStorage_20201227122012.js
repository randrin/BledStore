export const getCartItems = () => {
  const cartItems = localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [];
  return cartItems;
};

export const setCartItems = (cartItems) => {
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
};

export const setUserInfos = ({
  _id = "",
  email = "",
  password = "",
  name = "",
  isAdmin = "",
  token = false,
}) => {
  localStorage.setItem(
    "userInfos",
    JSON.stringify({ _id, email, password, name, isAdmin, token })
  );
};

export const getUserInfos = () => {
  return localStorage.getItem("userInfos")
    ? JSON.parse(localStorage.getItem("userInfos"))
    : { name: "", password: "", email: "" };
};

export const clearUserInfos = () => {
  localStorage.removeItem("userInfos");
};

export const getShippingInfos = () => {
  const shipping = localStorage.getItem("shipping")
    ? JSON.parse(localStorage.getItem("shipping"))
    : { address: "", city: "", postalCode: "", country: "" };
  return shipping;
};

export const setShippingInfos = ({
  address = "",
  city = "",
  postalCode = "",
  country = "",
}) => {
  localStorage.setItem(
    "shipping",
    JSON.stringify({ address, city, postalCode, country })
  );
};

export const getPaymentInfos = () => {
  const payment = localStorage.getItem("payment")
    ? JSON.parse(localStorage.getItem("payment"))
    : {
        paymentMethod: "paypal",
      };
  return payment;
};
export const setPaymentInfos = ({ paymentMethod = "paypal" }) => {
  localStorage.setItem("payment", JSON.stringify({ paymentMethod }));
};
