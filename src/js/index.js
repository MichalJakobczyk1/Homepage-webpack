import '../scss/main.scss';

// uncomment the lines below to enable PWA
// import {registerSW} from './pwa.js';
// registerSW();

/* place your code below */

console.log('HELLO 🚀')

const button = document.querySelector(".buttonMenu--js");
const navigation = document.querySelector(".navigation--js");

button.addEventListener("click", () => {
  navigation.classList.toggle("navigation--open");
});
