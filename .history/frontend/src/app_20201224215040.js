import HomeScreen from "./screeens/HomeScreen"

importHomeScreen from './s'

const router = () => {
    const main = document.getElementById('bled-store')
    main.innerHTML = HomeScreen.render();
}