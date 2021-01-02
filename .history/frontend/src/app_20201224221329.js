import HomeScreen from "./screeens/HomeScreen.js";

const routes = {
    '/': HomeScreen,
    '/product/:id'
}

const router = () => {
    const main = document.getElementById('bled-store')
    main.innerHTML = HomeScreen.render();
}

window.addEventListener('load', router)