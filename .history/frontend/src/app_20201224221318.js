import HomeScreen from "./screeens/HomeScreen.js";

const routes = {
    '/': HomeScreen,
}

const router = () => {
    const main = document.getElementById('bled-store')
    main.innerHTML = HomeScreen.render();
}

window.addEventListener('load', router)