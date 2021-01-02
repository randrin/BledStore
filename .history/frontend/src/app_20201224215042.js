import HomeScreen from "./screeens/HomeScreen"

importHomeScreen from './sre'

const router = () => {
    const main = document.getElementById('bled-store')
    main.innerHTML = HomeScreen.render();
}