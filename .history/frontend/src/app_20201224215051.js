import HomeScreen from "./screeens/HomeScreen"

importHomeScreen from './screeens/HomeScreen'

const router = () => {
    const main = document.getElementById('bled-store')
    main.innerHTML = HomeScreen.render();
}