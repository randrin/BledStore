import Header from "./components/Header.js";
import CartScreen from "./screeens/CartScreen.js";
import Error404Screen from "./screeens/Error404Screen.js";
import HomeScreen from "./screeens/HomeScreen.js";
import ProductScreen from "./screeens/ProductSreen.js";
import SigninScreen from "./screeens/SigninScreen.js";
import { hideLoading, parseRequestUrl, showLoading } from "./utils.js";

const routes = {
  "/": HomeScreen,
  "/product/:id": ProductScreen,
  "/cart/:id": CartScreen,
  "/cart": CartScreen,
  "/signin": SigninScreen,
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
  await screen.after_render();
  setTimeout();
  hideLoading();
};

window.addEventListener("load", router);
window.addEventListener("hashchange", router);
