import HomeScreen from "./screeens/HomeScreen.js";
import ProductScreen from "./screeens/ProductSreen.js";

const routes = {
    '/': HomeScreen,
    '/product/:id': ProductScreentSreen
}

const router = () => {
    const main = document.getElementById('bled-store')
    main.innerHTML = HomeScreen.render();
}

window.addEventListener('load', router)