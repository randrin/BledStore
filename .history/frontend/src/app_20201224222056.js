import HomeScreen from "./screeens/HomeScreen.js";
import ProductScreen from "./screeens/ProductSreen.js";

const routes = {
    '/': HomeScreen,
    '/product/:id': ProductScreen
}

const router = () => {
    const request = par
    const main = document.getElementById('bled-store')
    main.innerHTML = HomeScreen.render();
}

window.addEventListener('load', router)