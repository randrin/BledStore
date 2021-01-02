import HomeScreen from "./screeens/HomeScreen"

import HomeScreen from './screeens/HomeScreen';

const router = () => {
    const main = document.getElementById('bled-store')
    main.innerHTML = HomeScreen.render();
}

export