import Header from "./components/Header.js";
import CartScreen from "./screeens/CartScreen.js";
import DashboardScreen from "./screeens/DashboardScreen.js";
import Error404Screen from "./screeens/Error404Screen.js";
import HomeScreen from "./screeens/HomeScreen.js";
import OrderScreen from "./screeens/OrderScreen.js";
import PaymentScreen from "./screeens/PaymentScreen.js";
import PlaceOrderScreen from "./screeens/PlaceOrderScreen.js";
import ProductCreateScreen from "./screeens/ProductCreateScreen.js";
import ProductEditScreen from "./screeens/ProductEditScreen.js";
import ProductListScreen from "./screeens/ProductListScreen.js";
import ProductScreen from "./screeens/ProductSreen.js";
import ProfileScreen from "./screeens/ProfileScreen.js";
import RegisterScreen from "./screeens/RegisterScreen.js";
import ShippingScreen from "./screeens/ShippingScreen.js";
import SigninScreen from "./screeens/SigninScreen.js";
import { hideLoading, parseRequestUrl, showLoading } from "./utils.js";

const routes = {
  "/": HomeScreen,
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
  "/productlist": ProductListScreen,
  "/createproduct": ProductCreateScreen,
  "/ediit/:id/edit": ProductEditScreen,
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
