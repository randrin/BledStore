import HomeScreen from "./screeens/HomeScreen.js";

const routes = {
    '/'
}

const router = () => {
    const main = document.getElementById('bled-store')
    main.innerHTML = HomeScreen.render();
}

window.addEventListener('load', router)