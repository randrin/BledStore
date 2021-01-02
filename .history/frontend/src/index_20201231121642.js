import Header from "./components/Header.js";
import CartScreen from "./screens/CartScreen.js";
import DashboardScreen from "./screens/DashboardScreen.js";
import Error404Screen from "./screens/Error404Screen.js";
import HomeScreen from "./screens/HomeScreen.js";
import OrderScreen from "./screens/OrderScreen.js";
import PaymentScreen from "./screens/PaymentScreen.js";
import PlaceOrderScreen from "./screens/PlaceOrderScreen.js";
import ProductCreateScreen from "./screens/ProductCreateScreen.js";
import ProductEditScreen from "./screens/ProductEditScreen.js";
import ProductListScreen from "./screens/ProductListScreen.js";
import ProductScreen from "./screens/ProductSreen.js";
import ProfileScreen from "./screens/ProfileScreen.js";
import RegisterScreen from "./screens/RegisterScreen.js";
import ShippingScreen from "./screens/ShippingScreen.js";
import SigninScreen from "./screens/SigninScreen.js";
import { hideLoading, parseRequestUrl, showLoading } from "./utils.js";

const routes = {
  "/": HomeScreen,
  "/product/:id/edit": ProductEditScreen,
  "/product/:id": ProductScreen,
  "/order/:id": OrderScreen,
  "/cart/:id": CartScreen,
  "/cart": CartScreen,
  "/signin": SigninScreen,
  "/register": RegisterScreen,
  "/profile": ProfileScreen,
  "/shipping": ShippingScreen,
  "/payment": PaymentScreen,
  "/placeorder": PlaceOrderScreen,
  "/dashboard": DashboardScreen,
  "/dashboard-products": ProductListScreen,
  "/dashboard-create-product": ProductCreateScreen
};

const router = async () => {
  showLoading();
  const request = parseRequestUrl();
  const parseUrl =
    (request.resource ? `/${request.resource}` : "/") +
    (request.id ? "/:id" : "") +
    (request.verb ? `/${request.verb}` : "");
  const screen = routes[parseUrl] ? routes[parseUrl] : Error404Screen;
  const header = document.getElementById("bled-store-header");
  header.innerHTML = await Header.render();
  await Header.after_render();
  const main = document.getElementById("bled-store");
  main.innerHTML = await screen.render();
  if (screen.after_render) await screen.after_render();
  setTimeout(() => {
    hideLoading();
  }, 1000);
};

window.addEventListener("load", router);
window.addEventListener("hashchange", router);
