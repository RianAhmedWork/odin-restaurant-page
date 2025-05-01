// imports
import "../styles/main.css";
import { homeBlock } from "./home-page.js";
import { aboutBlock } from "./about-page.js";
import { menuBlock } from "./menu-page.js";

console.log("this is working");
console.log("there is an imposter amongus");

const content = document.getElementById("content");
const homeButton = document.getElementById("home-button");
const aboutbutton = document.getElementById("about-button");
const menuButton = document.getElementById("menu-button");

homeButton.addEventListener('click', function() {
    content.innerHTML = "";
    content.append(homeBlock);
});

aboutbutton.addEventListener('click', function() {
    content.innerHTML = "";
    content.append(aboutBlock);
});

menuButton.addEventListener('click', function() {
    content.innerHTML = "";
    content.append(menuBlock);
});

window.onload = function() {
    content.append(homeBlock);
}


