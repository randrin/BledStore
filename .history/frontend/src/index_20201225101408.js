import Error404Screen from "./screeens/Error404Screen.js";
import HomeScreen from "./screeens/HomeScreen.js";
import ProductScreen from "./screeens/ProductSreen.js";
import { parseRequestUrl } from "./utils.js";

const routes = {
  "/": HomeScreen,
  "/product/:id": ProductScreen,
  "/cart/:id": ProductScreen,
};

const router = async () => {
  const request = parseRequestUrl();
  const parseUrl =
    (request.resource ? `/${request.resource}` : "/") +
    (request.id ? "/:id" : "") +
    (request.verb ? `/${request.verb}` : "");
    const screen = routes[parseUrl] ? routes[parseUrl] : Error404Screen;
  const main = document.getElementById("bled-store");
  main.innerHTML = await screen.render();
  await screen.after_render();
};

window.addEventListener("load", router);
window.addEventListener('hashchange', router);
