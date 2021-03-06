import Header from "./components/Header.js";
import CartScreen from "./screens/store/CartScreen.js";
import DashboardScreen from "./screens/dashboard/DashboardScreen.js";
import Error404Screen from "./screens/store/Error404Screen.js";
import HomeScreen from "./screens/store/HomeScreen.js";
import OrderScreen from "./screens/store/OrderScreen.js";
import PaymentScreen from "./screens/store/PaymentScreen.js";
import PlaceOrderScreen from "./screens/store/PlaceOrderScreen.js";
import ProductCreateScreen from "./screens/dashboard/products/ProductCreateScreen.js";
import ProductEditScreen from "./screens/dashboard/products/ProductEditScreen.js";
import ProductListScreen from "./screens/dashboard/products/ProductListScreen.js";
import ProductScreen from "./screens/store/ProductSreen.js";
import ProfileScreen from "./screens/store/auth/ProfileScreen.js";
import RegisterScreen from "./screens/store/auth/RegisterScreen.js";
import ShippingScreen from "./screens/store/ShippingScreen.js";
import SigninScreen from "./screens/store/auth/SigninScreen.js";
import { hideLoading, parseRequestUrl, showLoading } from "./utils.js";
import OrderListScreen from "./screens/dashboard/orders/OrderListScreen.js";
import OrderEditScreen from "./screens/dashboard/orders/OrderEditScreen.js";
import Footer from "./components/Footer.js";
import BrandListScreen from "./screens/dashboard/brands/BrandListScreen.js";
import CategoryListScreen from "./screens/dashboard/categories/CategoryListScreen.js";

const routes = {
  "/": HomeScreen,
  "/product/:id/edit": ProductEditScreen,
  "/product/:id": ProductScreen,
  "/order/:id": OrderScreen,
  "/order/:id/edit": OrderEditScreen,
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
  "/dashboard-create-product": ProductCreateScreen,
  "/dashboard-orders": OrderListScreen,
  "/dashboard-brands": BrandListScreen,
  "/dashboard-categories": CategoryListScreen,
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
  const footer = document.getElementById("bled-store-footer");
  footer.innerHTML = await Footer.render();
  await Footer.after_render();
  setTimeout(() => {
    hideLoading();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, 1000);
};

window.addEventListener("load", router);
window.addEventListener("hashchange", router);
