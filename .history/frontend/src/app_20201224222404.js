import HomeScreen from "./screeens/HomeScreen.js";
import ProductScreen from "./screeens/ProductSreen.js";
import { parseRequestUrl } from "./utils.js";

const routes = {
    '/': HomeScreen,
    '/product/:id': ProductScreen
}

const router = () => {
    const request = parseRequestUrl();
    const parseUrl = (request.resource ? `/${request.resource}` : '') + (request.id ? '/:id' : '') + (request.ve ? `/${request.resource}` : '')
    const main = document.getElementById('bled-store')
    main.innerHTML = HomeScreen.render();
}

window.addEventListener('load', router)